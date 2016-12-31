import Particle from 'entities/particle/Particle';
import Vector from 'entities/vector/Vector';
import Emitter from 'entities/emitter/Emitter';
import Field from 'entities/field/Field';
import _ from 'underscore';

var canvas,
clientHeight,
clientWidth,
source,
attractor,
canvasContext,
createParticle,
particleImage,
particles;

canvas = document.getElementById('main-canvas');
clientWidth = document.querySelector('body').clientWidth;
clientHeight = document.querySelector('body').clientHeight;
source = new Emitter(new Vector(clientWidth / 2, clientHeight), new Vector(0, -2));
attractor = new Field(new Vector(clientWidth / 2 + 20, clientHeight / 2), 10000);
canvas.width = clientWidth;
canvas.height = clientHeight;
canvasContext = canvas.getContext('2d', {
    alpha: false
});
particles = [];

function createParticleImage () { 
    var particleCanvas,
    context,
    gradient;

    particleCanvas = document.createElement('canvas');
    particleCanvas.width = 20;
    particleCanvas.height = 20;
    context = particleCanvas.getContext('2d');
    gradient = context.createRadialGradient(10,10,0,10,10,10);
    gradient.addColorStop(0,'rgba(252, 194, 18, 1)');
    gradient.addColorStop(1,'rgba(252, 194, 18, 0)');
    context.fillStyle = gradient;
    context.fillRect(0,0,20,20);

    return particleCanvas;
};
particleImage = createParticleImage();
for (var i = 0; i < 1000; i++) {
    particles.push(source.emitParticle())
}
function advanceTime () {
    var length,
        newParticles;
    newParticles = [];
    length = particles.length;
    while (length--) {
        var particle = particles[length];
        if (particleShouldDie(particle)) {
            newParticles.push(source.emitParticle());
            continue;
        }
        particle.submitToFields([attractor]);
        particle.move();
        newParticles.push(particle);
    }
    particles = newParticles;
}
function particleShouldDie (particle) {
    var deathDistance;

    deathDistance = clientHeight / 2 + (particle.randomKey * (clientHeight / 2));
    return source.position.difference(particle.position).getMagnitude() > deathDistance;
}
function render () {
    canvasContext.clearRect(0,0,clientWidth,clientHeight);
    for (var i = 0; i < particles.length; i++) {
        canvasContext.drawImage(
            particleImage,
            getParticleX(particles[i]),
            getParticleY(particles[i]),
            getParticleSize(particles[i]),
            getParticleSize(particles[i])
        );
    }
    requestAnimationFrame(render);
}
function getParticleX (particle) {
    return particle.position.x - getParticleSize(particle) / 2;
}
function getParticleY (particle) {
    return particle.position.y - getParticleSize(particle) / 2;
}
function getParticleSize (particle) {
    var distance,
        deathDistance;
    distance = source.position.difference(particle.position).getMagnitude();
    if (distance < clientHeight / 2) {
        return 20;
    }
    deathDistance = clientHeight / 2 + (particle.randomKey * (clientHeight / 2));
    return (((distance - clientHeight / 2) / (deathDistance - clientHeight / 2)) * 20) + 20;
}
setInterval(advanceTime, 15);

console.log('ready');

render();
