global.THREE = require('three');
var animateObject = require('./helpers/object/animate');
var sceneManager = require('./components/scene');
var guiManager = require('./components/gui');
var statsManager = require('./components/stats');
var cameraManager = require('./components/camera');
var controlsManager = require('./components/controls');
var rendererManager = require('./components/renderer');
var grid = require('./components/grid');
var stars = require('./components/stars');

var stats;

var scene,
		controls,
		camera,
		gui,
		renderer,
		grid;

init();
animate();

function init() {
	stats = statsManager.init();
	// console.log(stats);
	scene = sceneManager.init();
	// console.log(scene);
	camera = cameraManager.init();
	// console.log(camera);
	gui = guiManager.init();
	// console.log(gui);
	renderer = rendererManager.init();
	// console.log(renderer);
	controls = controlsManager.init();
	// console.log(controls);
	grid = grid.init();
	// console.log(grid);
	stars = stars.init();
	// console.log(stars);
}

function animate() {

		stats.begin();

    animateObject.render();
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );

		stats.end();

}
