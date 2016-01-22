
var rendererObject = {};

rendererObject.init = function(){


  return rendererObject.setRenderer();
};

rendererObject.setRenderer = function(){

  this.renderer = new THREE.WebGLRenderer();
  this.renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( this.renderer.domElement );

  return this.renderer;

};

rendererObject.getRenderer = function(){

  return this.renderer;

};

module.exports = rendererObject;
