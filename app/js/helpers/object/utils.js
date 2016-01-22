var objectHelpers = {};

objectHelpers.centerGroup = function(group){

  var maxTrans  = {x:0, y:0, z:0};
  var minTrans  = {x:0, y:0, z:0};
  var translate2Center = {x:-37, y:0, z:-37};

  group.applyMatrix( new THREE.Matrix4().makeTranslation(
        translate2Center.x, translate2Center.y, translate2Center.z)
  );
  translate2Center.x = minTrans.x + (maxTrans.x-minTrans.x)/2;
  translate2Center.y = minTrans.y + (maxTrans.y-minTrans.y)/2;
  translate2Center.z = minTrans.z + (maxTrans.z-minTrans.z)/2;

};
objectHelpers.clone = function(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null === obj || 'object' !== typeof obj) {return obj;}

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = objectHelpers.clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) { copy[attr] = objectHelpers.clone(obj[attr]); }
        }
        return copy;
    }

    throw new Error('Unable to copy obj! Its type isn\'t supported.');
};

module.exports = objectHelpers;
