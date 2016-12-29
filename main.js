import _ from 'lodash';
console.log(_);

var canvas,
clientHeight,
clientWidth,
source,
canvasContext,
createParticle,
particle,
particlesData;

canvas = document.getElementById('main-canvas');
clientWidth = document.querySelector('body').clientWidth;
clientHeight = document.querySelector('body').clientHeight;
source = {
    x: clientWidth / 2,
    y: clientHeight,
    speed: 2,
};
canvas.width = clientWidth;
canvas.height = clientHeight;
canvasContext = canvas.getContext('2d', {
    alpha: false
});
particlesData = [];

createParticleImage = function () { 
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
particle = createParticleImage();
function makeNewParticle () {
    var lifeExpectancy;
    lifeExpectancy = (Math.random() * 6) + 4;
    return {
        x: source.x,
        y: source.y,
        direction: Math.PI * Math.random(),
        lifeLeft: lifeExpectancy,
        lifeExpectancy: lifeExpectancy
    };
}
for (var i = 0; i < 1000; i++) {
    particlesData.push(makeNewParticle())
}
function advanceX (x, direction) {
    var newX;
    newX = x + (Math.cos(Math.PI - direction) * source.speed);
    return newX;
}
function advanceY (y, direction) {
    var newY;
    newY = y - (Math.sin(Math.PI - direction) * source.speed);
    return newY;
}
function advanceTime () {
    var length;
    length = particlesData.length;
    while (length--) {
        var particleDatum = particlesData[length];
        particleDatum.lifeLeft -= 0.015;
        if (particleDatum.lifeLeft < 1) {
            particlesData.splice(length, length - 1);
            particlesData.push(makeNewParticle());
            continue;
        }
        particleDatum.x = advanceX(particleDatum.x, particleDatum.direction);
        particleDatum.y = advanceY(particleDatum.y, particleDatum.direction);
    }
}
function render () {
    canvasContext.clearRect(0,0,clientWidth,clientHeight);
    for (var i = 0; i < particlesData.length; i++) {
        canvasContext.drawImage(particle, particlesData[i].x, particlesData[i].y);
    }
    requestAnimationFrame(render);
}
setInterval(advanceTime, 15);

render();
