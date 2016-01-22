var sceneManager = require('./scene');
var gui = require('./gui');

var stars = {};

stars.init = function(){
  var scene = sceneManager.getScene();

  this.stars = this.createStars(gui.params.radius * 100, 64);
  scene.add(this.stars);

  return this.stars;

};

stars.createStars = function(radius, segments){

	return new THREE.Mesh(
		new THREE.SphereGeometry(radius, segments, segments),
		new THREE.MeshBasicMaterial({
			map:  THREE.ImageUtils.loadTexture('images/galaxy_starfield.png'),
			side: THREE.BackSide
		})
	);
};
module.exports = stars;
