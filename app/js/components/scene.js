var scene = {};

scene.init = function(){
  //console.log('init start', scene);

  return scene.createScene();

};

scene.createScene = function(){
  //console.log('createScene start', scene);

  var newScene = new THREE.Scene();
  scene.scene = newScene;

  //console.log('createScene end', scene);
  return scene.scene;

};

scene.getScene = function(){
  //console.log('getScene start', scene);

  return scene.scene;

};

module.exports = scene;
