import Vector from 'entities/vector/Vector';
import Particle from 'entities/particle/Particle';

var Emitter;

Emitter = function (point, velocity, spread) {
    this.position = point;
    this.velocity = velocity;
    this.spread = spread || Math.PI / 32;
};

Emitter.prototype = {
    emitParticle: function () {
        // Use an angle randomized over the spread so we have more of a "spray"
        var angle = this.velocity.getAngle() + this.spread - (Math.random() * this.spread * 2);
        
        // The magnitude of the emitter's velocity
        var magnitude = this.velocity.getMagnitude();
        
        // The emitter's position
        var position = new Vector(this.position.x, this.position.y);
        
        // New velocity based off of the calculated angle and magnitude
        var velocity = Vector.prototype.fromAngle(angle, magnitude);
        
        // return our new Particle!
        return new Particle(position, velocity, new Vector(0, 0), {
            randomKey: Math.random()
        });
    }
};

module.exports = Emitter;