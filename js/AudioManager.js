// js/AudioManager.js
export class AudioManager {
  constructor(audioElementId) {
    this.audio = document.getElementById(audioElementId);
    this.endedCallback = null;

    this.audio.onended = () => {
      if (this.endedCallback) this.endedCallback();
    };
  }

  async play(src) {
    this.audio.src = src;
    try {
      await this.audio.play();
    } catch (e) {
      console.error("音频播放失败:", e);
    }
  }

  pause() {
    this.audio.pause();
  }

  onEnded(callback) {
    this.endedCallback = callback;
  }
}