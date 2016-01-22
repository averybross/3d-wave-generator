var gui = require('./gui');
var sceneManager = require('./scene');
var objectCreate = require('../helpers/object/create');
var objectUtils = require('../helpers/object/utils');
var grid = {};

var scene;

grid.init = function(){

  scene = sceneManager.getScene();

  this.grid = grid.createGrid();

  objectUtils.centerGroup(this.grid);

  scene.add(this.grid);

  return this.grid;
};

grid.createGrid = function(){


  var group = new THREE.Group();

  var grid = {};

  var objectSettings = {
    geometry: new THREE.BoxGeometry( 0.3, 0.3, 0.3 ),
    material: function() {
      return new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    },
    position: new THREE.Vector3(0,0,0),
    render: function(object) {
      var height =  Math.sin(((object.grid[1]/(gui.params.waveLength*object.gridSize[1])) + object.counter)*Math.PI) - Math.cos(((object.grid[0]/(gui.params.waveLength*object.gridSize[0])) + object.counter)*Math.PI);
      object.position.setY(height*gui.params.waveHeight);
      object.material.color.setRGB(height*0.35+0.3, 0.4 , 0.8);
      object.counter += gui.params.waveSpeed;
    }
  };

  var currentSettings;
  var x;
  var y;
  var height;

  var options = {
    columns:25,
    rows:25,
    cell: {
      width: 1,
      padding:0.1
    }
  };

  for (x = 0; x < options.columns; x++) {
      grid[x] = {};
    for (y = 0; y < options.rows; y++) {

      currentSettings = (JSON.parse(JSON.stringify(objectSettings)));

      objectSettings.grid = [x,y];
      objectSettings.gridSize = [options.columns,options.rows];

      height = (Math.sin(x/(options.columns/10) * Math.PI * 2) + Math.sin(y/(options.rows/10) * Math.PI * 2)) /2;

      objectSettings.position = new THREE.Vector3(x*3,height-10,y*3);

      var cell = objectCreate(objectSettings);
      group.add(cell);
      if (cell.edges) {
        scene.add( cell.edges );
      }
      grid[x][y] = cell;
    }
  }

  return group;

};

grid.getGrid = function(){

  return this.grid;

};

module.exports = grid;
