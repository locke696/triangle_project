// js/InertiaController.js - (现在是一个通用的教程控制器)
import { GeoGebraManager } from './GeoGebraManager.js';
import { AudioManager } from './AudioManager.js';
// 不再需要导入 config.js

export class InertiaController {
  // 通过构造函数接收特定项目的数据
  constructor(projectData) {
    this.projectData = projectData;
    this.ggbManager = new GeoGebraManager('ggbApplet');
    this.audioManager = new AudioManager('tutorial_audio');
  }

  async init() {
    // 从传入的项目数据中获取路径和参数
    const base64 = await this.ggbManager.loadBase64(this.projectData.base64Path);
    await this.ggbManager.init(base64, this.projectData.config.ggbParams);

    this.ggbManager.onUpdate((objName) => this.handleGGBUpdate(objName));

    // 教程开始时，手动触发一次，播放第一步的音频
    this.playAudioForStep(1);
  }

  handleGGBUpdate(objectName) {
    if (objectName === "n") {
      const n = this.ggbManager.getValue('n');
      console.log(`项目 '${this.projectData.title}' 进入步骤: n = ${n}`);
      this.playAudioForStep(n);
    }
  }

  playAudioForStep(step) {
    // 从项目配置中获取音频映射
    const audioFile = this.projectData.config.audioMapping[step];
    if (audioFile) {
      // 拼接正确的音频文件路径
      const audioSrc = `${this.projectData.audioBasePath}${audioFile}`;
      this.audioManager.play(audioSrc);
    }
  }
}