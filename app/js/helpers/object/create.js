var THREE = require('three');
var ObjectAnimation = require('./animate');
function newObject(options) {

  try {

    var material = (typeof options.material === 'function') ? options.material() : options.material;

    var object = new THREE.Mesh(options.geometry, material);

    // Give each object a counter;
    object.counter = 0;

    // Add properties
    object.edges = createEdges(object, options.edges);
    object.grid = options.grid;
    object.gridSize = options.gridSize;

    // Place
    object.position.set(options.position.x,options.position.y,options.position.z);

    // Add animations
    object.render = options.render;

    // Start animations
    ObjectAnimation.add(object);

    return object;

  } catch (e) {
    console.log(e);
  }
}

function createEdges(object, options) {
  if (options && options) {
    return new THREE.EdgesHelper(object, options.color);
  }
}

newObject.prototype = Object.create(THREE.Mesh.prototype);

module.exports = newObject;
