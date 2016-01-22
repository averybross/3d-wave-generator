var cameraManager = {};

cameraManager.init = function() {

  return cameraManager.setCamera();

};

cameraManager.setCamera = function(){

  var width  = window.innerWidth,
		height = window.innerHeight;

  this.camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
  this.camera.position.z = 1.5;

  return this.camera;

};

cameraManager.getCamera = function(){
  return this.camera;
};

module.exports = cameraManager;
