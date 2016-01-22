var Stats = require('stats-js');
var stats = {};

stats.params = {

};
stats.setStats = function(){

  	this.stats = new Stats();
  	this.stats.setMode( 0 ); // 0: fps, 1: ms, 2: mb

  	// align top-left
  	this.stats.domElement.style.position = 'absolute';
  	this.stats.domElement.style.left = '0px';
  	this.stats.domElement.style.top = '0px';


  	document.body.appendChild( this.stats.domElement );

  return this.stats;

};

stats.resetParams = function(){
  stats.params = stats.defaultParams;
};

stats.getStats = function(){

  return stats.stats;
};

stats.init = function(){

  stats.resetParams();

  return stats.setStats();

};

module.exports = stats;
