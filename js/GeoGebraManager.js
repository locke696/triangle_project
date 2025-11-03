// js/GeoGebraManager.js
export class GeoGebraManager {
  constructor(containerId) {
    this.containerId = containerId;
    this.api = null;
    this.updateCallback = null;
  }

  async init(base64String, ggbParams) {
    return new Promise((resolve, reject) => {
      const params = {
        id: this.containerId,
        ...ggbParams,
        ggbBase64: base64String,
        appletOnLoad: (api) => {
          this.api = api;
          api.registerUpdateListener((objName) => {
            if (this.updateCallback) this.updateCallback(objName);
          });
          resolve(api);
        }
      };

      const views = {
        is3D: 0, AV: 1, SV: 0, CV: 0, EV2: 0,
        CP: 0, PC: 0, DA: 0, FI: 0, macro: 0
      };

      const applet = new GGBApplet(params, '5.0', views);
      applet.inject(this.containerId);
    });
  }

  getValue(name) {
    return this.api ? this.api.getValue(name) : null;
  }

  setValue(name, value) {
    if (this.api) this.api.setValue(name, value);
  }

  startAnimation() { if (this.api) this.api.startAnimation(); }
  stopAnimation() { if (this.api) this.api.stopAnimation(); }

  onUpdate(callback) {
    this.updateCallback = callback;
  }

  async loadBase64(filePath = './assets/ggb/current.ggb.base64.txt') {
    const response = await fetch(filePath);
    const text = await response.text();
    return text.trim();
  }
}