// projects.js - 所有教程项目的清单

export const PROJECTS = {
  // 项目一：惯性
  inertia: {
    title: '惯性现象讲解',
    // 指向该项目专用的 GGB base64 文件
    base64Path: './assets/ggb/inertia.ggb.base64.txt', 
    // 该项目音频文件的根目录
    audioBasePath: './assets/audio/inertia/',
    // 该项目的配置，内容和以前的 GGB_CONFIG 类似
    config: {
      ggbParams: {
        width: 1470, height: 647,
        // ... 其他 GGB 参数可以保持通用 ...
        showMenuBar: false, showToolBar: false, appName: "classic",
      },
      audioMapping: {
        1: 'step1.mp3', 
        2: 'step2.mp3', 
        3: 'step3.mp3',
        4: 'step4.mp3', 
      },
    }
  },

  // 项目二：惠更斯原理
  huygens: {
    title: '惠更斯三角演示',
    base64Path: './assets/ggb/huygens.ggb.base64.txt',
    audioBasePath: './assets/audio/huygens/',
    config: {
      ggbParams: {
        width: 1470, height: 647, showMenuBar: false, 
        showToolBar: false, appName: "classic",
      },
      audioMapping: {
        1: 'step1.mp3', 
        2: 'step2.mp3', 
        3: 'step3.mp3',
        4: 'step4.mp3', 
        5: 'step5.mp3', 
        6: 'step6.mp3', 
        7: 'step7.mp3',
        8: 'step8.mp3', 
      },
    }
  },

  // 项目三：垂直三角形
  perp_triangle: {
    title: '垂直三角形作全等',
    base64Path: './assets/ggb/perp_triangle.ggb.base64.txt',
    audioBasePath: './assets/audio/perp_triangle/',
    config: {
      ggbParams: {
        width: 1470, height: 647, showMenuBar: false, 
        showToolBar: false, appName: "classic",
      },
      audioMapping: {
        1: 'step1.mp3', 
        2: 'step2.mp3', 
        3: 'step3.mp3',
        4: 'step4.mp3', 
        5: 'step5.mp3', 
        6: 'step6.mp3', 
        7: 'step7.mp3',
      },
    }
  },

  // 项目四：角平分线
  ang_division: {
    title: '角平分线尺规作图',
    base64Path: './assets/ggb/ang_division.ggb.base64.txt',
    audioBasePath: './assets/audio/ang_division/',
    config: {
      ggbParams: {
        width: 1470, height: 647, showMenuBar: false, 
        showToolBar: false, appName: "classic",
      },
      audioMapping: {
        1: 'step1.mp3', 
        2: 'step2.mp3', 
        3: 'step3.mp3',
        4: 'step4.mp3', 
        5: 'step5.mp3', 
        6: 'step6.mp3', 
        7: 'step7.mp3',
        8: 'step8.mp3', 
        9: 'step9.mp3',
      },
    }
  },
  
  //项目五：面积法求线段
  excise_solve: {
    title: '通过面积计算求线段长度',
    base64Path: './assets/ggb/excise_solve.ggb.base64.txt',
    audioBasePath: './assets/audio/excise_solve/',
    config: {
      ggbParams: {
        width: 1470, height: 647, showMenuBar: false, 
        showToolBar: false, appName: "classic",
      },
      audioMapping: {
        1: 'step1.mp3', 
        2: 'step2.mp3', 
        3: 'step3.mp3',
        4: 'step4.mp3', 
        5: 'step5.mp3', 
        6: 'step6.mp3', 
        7: 'step7.mp3',
        8: 'step8.mp3',        
      },
    }
  },
  // 你可以在这里添加更多项目...
  // another_project: { ... }
};