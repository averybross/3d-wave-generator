var dat = require('dat-gui');

var gui = {};

gui.params = {

};

gui.defaultParams = {
  radius: 4,
  segments: 32,
  waveSpeed: 0.007,
  waveHeight: 2.9999,
  waveLength: 0.021,
  positionX: 0.00,
  positionY: 0.00,
  positionZ: 0.00
};

gui.init = function() {

  gui.params = gui.defaultParams;

  return gui.createGui();

};

gui.createGui = function(){

  var gui = new dat.GUI();
  var guiWaveFolder = gui.addFolder('Wave');

  guiWaveFolder.open();

  guiWaveFolder.add( this.params , 'waveSpeed', 0, 0.1 ).step(0.00001).listen().onChange(function(value) {
    this.params.waveSpeed = value;
  });
  guiWaveFolder.add( this.params , 'waveLength', 0, 0.1 ).step(0.00001).listen().onChange(function(value) {
    this.params.waveLength = value;
  });
  guiWaveFolder.add( this.params , 'waveHeight', 0, 3 ).step(0.01).listen().onChange(function(value) {
    this.params.waveHeight = value;
  });

	return gui;

};

module.exports = gui;
