import Vector from 'entities/vector/vector';

var Field;

Field = function (point, mass, powerDiminish) {
    this.position = point || new Vector(0, 0);
    this.powerDiminish = powerDiminish || 1.5;
    this.setMass(mass);
};

Field.prototype = {
    setMass: function (mass) {
        this.mass = mass || 100;
        this.drawColor = mass < 0 ? '255,0,0' : '0,255,0';
    }
};

return Field;