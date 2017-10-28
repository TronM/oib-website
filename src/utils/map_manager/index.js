let currentAk;
let mapInstance;

function init(ak) {
  return new Promise((resolve, reject) => {
    window.onload = function () {
      mapInstance = window.BMap;
      resolve(mapInstance);
    };
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `http://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=init`;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
function setAk(ak) {
  currentAk = ak;
}
function getAk() {
  return currentAk;
}
function getMapInstance() {
  return new Promise((resolve, reject) => {
    if (mapInstance) {
      resolve(mapInstance);
    } else {
      init(currentAk).then(resolve, reject);
    }
  });
}

export default {
  setAk,
  getAk,
  getMapInstance
};
