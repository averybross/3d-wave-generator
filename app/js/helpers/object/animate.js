var ObjectAnimation = {};

ObjectAnimation.objects = [];

ObjectAnimation.add = function(object){

  this.objects.push(object);

};

ObjectAnimation.render = function() {

  for (var i = 0; i < ObjectAnimation.objects.length; i++) {
    var obj = ObjectAnimation.objects[i];
    obj.render(obj);
  }

};

module.exports = ObjectAnimation;
