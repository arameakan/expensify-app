function mixin(sourceObj, targetObj) {
  for (const key in sourceObj) {
    // obly copy if not already present
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }
  return targetObj;
}

var Vehicle = {
  engines: 1,

  ignition: function() {
    console.log("Turning on my engine");
  },

  drive: function() {
    this.ignition();
    console.log("Steering and moving forward!");
  }
};
var Car = mixin(Vehicle, {
  wheels: 4,
  drive: function() {
    Vehicle.drive.call(this);
    console.log(`Rolling on all ${wheels} wheels`);
  }
});
