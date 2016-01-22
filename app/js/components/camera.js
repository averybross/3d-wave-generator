var cameraManager = {};

cameraManager.init = function() {

  return cameraManager.setCamera();

};

cameraManager.setCamera = function(){

  var width  = window.innerWidth,
		height = window.innerHeight;

  this.camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
  this.camera.position.x = 180;
  this.camera.position.y = 120;
  this.camera.position.z = 180;

  return this.camera;

};

cameraManager.getCamera = function(){
  return this.camera;
};

module.exports = cameraManager;
