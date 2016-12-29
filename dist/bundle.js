/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _particle = __webpack_require__(1);\n\nvar _particle2 = _interopRequireDefault(_particle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log(_particle2.default);\n\n// var canvas,\n// clientHeight,\n// clientWidth,\n// source,\n// canvasContext,\n// createParticle,\n// particle,\n// particlesData;\n\n// canvas = document.getElementById('main-canvas');\n// clientWidth = document.querySelector('body').clientWidth;\n// clientHeight = document.querySelector('body').clientHeight;\n// source = {\n//     x: clientWidth / 2,\n//     y: clientHeight,\n//     speed: 2\n// };\n// canvas.width = clientWidth;\n// canvas.height = clientHeight;\n// canvasContext = canvas.getContext('2d', {\n//     alpha: false\n// });\n// particlesData = [];\n\n// function createParticleImage () { \n//     var particleCanvas,\n//     context,\n//     gradient;\n\n//     particleCanvas = document.createElement('canvas');\n//     particleCanvas.width = 20;\n//     particleCanvas.height = 20;\n//     context = particleCanvas.getContext('2d');\n//     gradient = context.createRadialGradient(10,10,0,10,10,10);\n//     gradient.addColorStop(0,'rgba(252, 194, 18, 1)');\n//     gradient.addColorStop(1,'rgba(252, 194, 18, 0)');\n//     context.fillStyle = gradient;\n//     context.fillRect(0,0,20,20);\n\n//     return particleCanvas;\n// };\n// particle = createParticleImage();\n// function makeNewParticle () {\n//     var lifeExpectancy;\n//     lifeExpectancy = (Math.random() * 6) + 4;\n//     return {\n//         x: source.x,\n//         y: source.y,\n//         direction: Math.PI * Math.random(),\n//         lifeLeft: lifeExpectancy,\n//         lifeExpectancy: lifeExpectancy\n//     };\n// }\n// for (var i = 0; i < 1000; i++) {\n//     particlesData.push(makeNewParticle())\n// }\n// function advanceX (x, direction) {\n//     var newX;\n//     newX = x + (Math.cos(Math.PI - direction) * source.speed);\n//     return newX;\n// }\n// function advanceY (y, direction) {\n//     var newY;\n//     newY = y - (Math.sin(Math.PI - direction) * source.speed);\n//     return newY;\n// }\n// function advanceTime () {\n//     var length;\n//     length = particlesData.length;\n//     while (length--) {\n//         var particleDatum = particlesData[length];\n//         particleDatum.lifeLeft -= 0.015;\n//         if (particleDatum.lifeLeft < 1) {\n//             particlesData.splice(length, length - 1);\n//             particlesData.push(makeNewParticle());\n//             continue;\n//         }\n//         particleDatum.x = advanceX(particleDatum.x, particleDatum.direction);\n//         particleDatum.y = advanceY(particleDatum.y, particleDatum.direction);\n//     }\n// }\n// function render () {\n//     canvasContext.clearRect(0,0,clientWidth,clientHeight);\n//     for (var i = 0; i < particlesData.length; i++) {\n//         canvasContext.drawImage(particle, particlesData[i].x, particlesData[i].y);\n//     }\n//     requestAnimationFrame(render);\n// }\n// setInterval(advanceTime, 15);\n\n// render();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzP2U3ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3BhcnRpY2xlID0gcmVxdWlyZSgnLi9lbnRpdGllcy9wYXJ0aWNsZXMvcGFydGljbGUnKTtcblxudmFyIF9wYXJ0aWNsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJ0aWNsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnNvbGUubG9nKF9wYXJ0aWNsZTIuZGVmYXVsdCk7XG5cbi8vIHZhciBjYW52YXMsXG4vLyBjbGllbnRIZWlnaHQsXG4vLyBjbGllbnRXaWR0aCxcbi8vIHNvdXJjZSxcbi8vIGNhbnZhc0NvbnRleHQsXG4vLyBjcmVhdGVQYXJ0aWNsZSxcbi8vIHBhcnRpY2xlLFxuLy8gcGFydGljbGVzRGF0YTtcblxuLy8gY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY2FudmFzJyk7XG4vLyBjbGllbnRXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGllbnRXaWR0aDtcbi8vIGNsaWVudEhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGllbnRIZWlnaHQ7XG4vLyBzb3VyY2UgPSB7XG4vLyAgICAgeDogY2xpZW50V2lkdGggLyAyLFxuLy8gICAgIHk6IGNsaWVudEhlaWdodCxcbi8vICAgICBzcGVlZDogMlxuLy8gfTtcbi8vIGNhbnZhcy53aWR0aCA9IGNsaWVudFdpZHRoO1xuLy8gY2FudmFzLmhlaWdodCA9IGNsaWVudEhlaWdodDtcbi8vIGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7XG4vLyAgICAgYWxwaGE6IGZhbHNlXG4vLyB9KTtcbi8vIHBhcnRpY2xlc0RhdGEgPSBbXTtcblxuLy8gZnVuY3Rpb24gY3JlYXRlUGFydGljbGVJbWFnZSAoKSB7IFxuLy8gICAgIHZhciBwYXJ0aWNsZUNhbnZhcyxcbi8vICAgICBjb250ZXh0LFxuLy8gICAgIGdyYWRpZW50O1xuXG4vLyAgICAgcGFydGljbGVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbi8vICAgICBwYXJ0aWNsZUNhbnZhcy53aWR0aCA9IDIwO1xuLy8gICAgIHBhcnRpY2xlQ2FudmFzLmhlaWdodCA9IDIwO1xuLy8gICAgIGNvbnRleHQgPSBwYXJ0aWNsZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gICAgIGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudCgxMCwxMCwwLDEwLDEwLDEwKTtcbi8vICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwncmdiYSgyNTIsIDE5NCwgMTgsIDEpJyk7XG4vLyAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsJ3JnYmEoMjUyLCAxOTQsIDE4LCAwKScpO1xuLy8gICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4vLyAgICAgY29udGV4dC5maWxsUmVjdCgwLDAsMjAsMjApO1xuXG4vLyAgICAgcmV0dXJuIHBhcnRpY2xlQ2FudmFzO1xuLy8gfTtcbi8vIHBhcnRpY2xlID0gY3JlYXRlUGFydGljbGVJbWFnZSgpO1xuLy8gZnVuY3Rpb24gbWFrZU5ld1BhcnRpY2xlICgpIHtcbi8vICAgICB2YXIgbGlmZUV4cGVjdGFuY3k7XG4vLyAgICAgbGlmZUV4cGVjdGFuY3kgPSAoTWF0aC5yYW5kb20oKSAqIDYpICsgNDtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICB4OiBzb3VyY2UueCxcbi8vICAgICAgICAgeTogc291cmNlLnksXG4vLyAgICAgICAgIGRpcmVjdGlvbjogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCksXG4vLyAgICAgICAgIGxpZmVMZWZ0OiBsaWZlRXhwZWN0YW5jeSxcbi8vICAgICAgICAgbGlmZUV4cGVjdGFuY3k6IGxpZmVFeHBlY3RhbmN5XG4vLyAgICAgfTtcbi8vIH1cbi8vIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XG4vLyAgICAgcGFydGljbGVzRGF0YS5wdXNoKG1ha2VOZXdQYXJ0aWNsZSgpKVxuLy8gfVxuLy8gZnVuY3Rpb24gYWR2YW5jZVggKHgsIGRpcmVjdGlvbikge1xuLy8gICAgIHZhciBuZXdYO1xuLy8gICAgIG5ld1ggPSB4ICsgKE1hdGguY29zKE1hdGguUEkgLSBkaXJlY3Rpb24pICogc291cmNlLnNwZWVkKTtcbi8vICAgICByZXR1cm4gbmV3WDtcbi8vIH1cbi8vIGZ1bmN0aW9uIGFkdmFuY2VZICh5LCBkaXJlY3Rpb24pIHtcbi8vICAgICB2YXIgbmV3WTtcbi8vICAgICBuZXdZID0geSAtIChNYXRoLnNpbihNYXRoLlBJIC0gZGlyZWN0aW9uKSAqIHNvdXJjZS5zcGVlZCk7XG4vLyAgICAgcmV0dXJuIG5ld1k7XG4vLyB9XG4vLyBmdW5jdGlvbiBhZHZhbmNlVGltZSAoKSB7XG4vLyAgICAgdmFyIGxlbmd0aDtcbi8vICAgICBsZW5ndGggPSBwYXJ0aWNsZXNEYXRhLmxlbmd0aDtcbi8vICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbi8vICAgICAgICAgdmFyIHBhcnRpY2xlRGF0dW0gPSBwYXJ0aWNsZXNEYXRhW2xlbmd0aF07XG4vLyAgICAgICAgIHBhcnRpY2xlRGF0dW0ubGlmZUxlZnQgLT0gMC4wMTU7XG4vLyAgICAgICAgIGlmIChwYXJ0aWNsZURhdHVtLmxpZmVMZWZ0IDwgMSkge1xuLy8gICAgICAgICAgICAgcGFydGljbGVzRGF0YS5zcGxpY2UobGVuZ3RoLCBsZW5ndGggLSAxKTtcbi8vICAgICAgICAgICAgIHBhcnRpY2xlc0RhdGEucHVzaChtYWtlTmV3UGFydGljbGUoKSk7XG4vLyAgICAgICAgICAgICBjb250aW51ZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBwYXJ0aWNsZURhdHVtLnggPSBhZHZhbmNlWChwYXJ0aWNsZURhdHVtLngsIHBhcnRpY2xlRGF0dW0uZGlyZWN0aW9uKTtcbi8vICAgICAgICAgcGFydGljbGVEYXR1bS55ID0gYWR2YW5jZVkocGFydGljbGVEYXR1bS55LCBwYXJ0aWNsZURhdHVtLmRpcmVjdGlvbik7XG4vLyAgICAgfVxuLy8gfVxuLy8gZnVuY3Rpb24gcmVuZGVyICgpIHtcbi8vICAgICBjYW52YXNDb250ZXh0LmNsZWFyUmVjdCgwLDAsY2xpZW50V2lkdGgsY2xpZW50SGVpZ2h0KTtcbi8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRpY2xlc0RhdGEubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgY2FudmFzQ29udGV4dC5kcmF3SW1hZ2UocGFydGljbGUsIHBhcnRpY2xlc0RhdGFbaV0ueCwgcGFydGljbGVzRGF0YVtpXS55KTtcbi8vICAgICB9XG4vLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4vLyB9XG4vLyBzZXRJbnRlcnZhbChhZHZhbmNlVGltZSwgMTUpO1xuXG4vLyByZW5kZXIoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nvar particle;\n\nparticle = {\n    name: 'b'\n};\n\nmodule.exports = particle;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9lbnRpdGllcy9wYXJ0aWNsZXMvcGFydGljbGUuanM/MzE3OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBwYXJ0aWNsZTtcblxucGFydGljbGUgPSB7XG4gICAgbmFtZTogJ2InXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnRpY2xlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2VudGl0aWVzL3BhcnRpY2xlcy9wYXJ0aWNsZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);