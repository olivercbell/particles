import _ from 'underscore';
import Vector from 'entities/vector/Vector';

var Particle;

Particle = function (position, velocity, acceleration, options) {
    this.position = position || new Vector(0, 0);
    this.initialX = position.x;
    this.initialY = position.y;
    this.velocity = velocity || new Vector(0, 0);
    this.acceleration = acceleration || new Vector(0, 0);
    this.anchors = [];
    _.extend(this, options);
};

Particle.prototype = {
    move: function () {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    },

    submitToFields: function (fields) {
        var totalAccelerationX,
            totalAccelerationY;

        totalAccelerationX = 0;
        totalAccelerationY = 0;

        for (var i = 0; i < fields.length; i++) {
            var field,
                vectorX,
                vectorY,
                force;

            field = fields[i];
            
            vectorX = field.position.x - this.position.x;
            vectorY = field.position.y - this.position.y;
            
            force = field.mass / Math.pow((vectorX * vectorX + vectorY * vectorY + 1000),field.powerDiminish);
            
            totalAccelerationX += vectorX * force;
            totalAccelerationY += vectorY * force;
        }
        this.acceleration = new Vector(totalAccelerationX, totalAccelerationY);
    },

    addAnchor: function (x, y, mass) {
        this.anchors.push({
            position: new Vector(x, y),
            force: mass
        });
    },

    submitToAnchors: function () {
        var totalAccelerationX,
            totalAccelerationY;

        totalAccelerationX = 0;
        totalAccelerationY = 0;

        for (var i = 0; i < this.anchors.length; i++) {
            var anchor,
            vectorX,
            vectorY,
            force;

            anchor = this.anchors[i];
            
            vectorX = anchor.position.x - this.position.x;
            vectorY = anchor.position.y - this.position.y;
            
            if (vectorX && vectorY) {
                force = anchor.force;
            } else {
                force = 0;
            }
            
            totalAccelerationX += vectorX * force;
            totalAccelerationY += vectorY * force;
        }
        
        this.acceleration.add(new Vector(totalAccelerationX, totalAccelerationY));
    }
};

module.exports = Particle;