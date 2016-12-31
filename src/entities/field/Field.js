import Vector from 'entities/vector/Vector';

var Field;

Field = function (point, mass, powerDiminish) {
    this.position = point || new Vector(0, 0);
    this.powerDiminish = powerDiminish || 1.5;
    this.setMass(mass);
};

Field.prototype = {
    setMass: function (mass) {
        this.mass = mass || 100;
    }
};

module.exports = Field;