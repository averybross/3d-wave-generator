var OrbitControls = require('three-orbit-controls')(THREE);
var gui = require('./gui');
var cameraManager = require('./camera');
var rendererManager = require('./renderer');
var controlsObject = {};

controlsObject.init = function(){


  return controlsObject.setControls();
};

controlsObject.setControls = function(){

  this.controls = new OrbitControls( cameraManager.getCamera(), rendererManager.getRenderer().domElement );

	this.controls.minDistance = gui.params.radius * 1.1;
	this.controls.maxDistance = gui.params.radius * 20;

	this.controls.rotateSpeed = 1.0;
	this.controls.zoomSpeed = 1.2;

	this.controls.enableZoom = true;

	this.controls.enableDamping = true;
	this.controls.dampingFactor = 0.3;

	this.controls.keys = [ 65, 83, 68 ];

  return this.controls;

};

controlsObject.getControls = function(){

  return this.controls;

};

module.exports = controlsObject;
