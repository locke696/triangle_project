// js/main.js - 平台主入口
import { PROJECTS } from '../projects.js';
import { InertiaController } from './TutorialController.js';

function renderNav() {
  const navElement = document.getElementById('project-nav');
  if (!navElement) return;

  // 根据 projects.js 动态生成导航链接
  for (const projectId in PROJECTS) {
    const project = PROJECTS[projectId];
    const li = document.createElement('li');
    // 使用 URL search a参数来选择项目
    li.innerHTML = `<a href="?project=${projectId}">${project.title}</a>`;
    navElement.appendChild(li);
  }
}

function launchTutorial(projectId) {
  const projectData = PROJECTS[projectId];
  
  // 隐藏导航，显示教程容器
  document.getElementById('project-selector').style.display = 'none';
  const tutorialContainer = document.getElementById('tutorial-container');
  tutorialContainer.style.display = 'block';

  if (!projectData) {
    console.error(`未找到项目: ${projectId}`);
    tutorialContainer.innerHTML = `<p class="error">错误：找不到 ID 为 "${projectId}" 的教程。</p>`;
    return;
  }
  
  // 设置教程标题
  document.getElementById('tutorial-title').textContent = projectData.title;

  // 实例化并启动控制器，将项目数据传递进去
  const app = new InertiaController(projectData);
  app.init().catch(console.error);
}


// --- 应用启动逻辑 ---
document.addEventListener('DOMContentLoaded', () => {
  // 解析 URL 获取 'project' 参数
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');

  if (projectId) {
    // 如果 URL 中有 project ID，则直接加载该教程
    launchTutorial(projectId);
  } else {
    // 否则，显示项目选择菜单
    renderNav();
  }
});