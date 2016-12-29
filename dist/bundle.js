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

	eval("'use strict';\n\nvar _lodash = __webpack_require__(1);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log(_lodash2.default);\n\nvar canvas, clientHeight, clientWidth, source, canvasContext, createParticle, particle, particlesData;\n\ncanvas = document.getElementById('main-canvas');\nclientWidth = document.querySelector('body').clientWidth;\nclientHeight = document.querySelector('body').clientHeight;\nsource = {\n    x: clientWidth / 2,\n    y: clientHeight,\n    speed: 2\n};\ncanvas.width = clientWidth;\ncanvas.height = clientHeight;\ncanvasContext = canvas.getContext('2d', {\n    alpha: false\n});\nparticlesData = [];\n\nfunction createParticleImage() {\n    var particleCanvas, context, gradient;\n\n    particleCanvas = document.createElement('canvas');\n    particleCanvas.width = 20;\n    particleCanvas.height = 20;\n    context = particleCanvas.getContext('2d');\n    gradient = context.createRadialGradient(10, 10, 0, 10, 10, 10);\n    gradient.addColorStop(0, 'rgba(252, 194, 18, 1)');\n    gradient.addColorStop(1, 'rgba(252, 194, 18, 0)');\n    context.fillStyle = gradient;\n    context.fillRect(0, 0, 20, 20);\n\n    return particleCanvas;\n};\nparticle = createParticleImage();\nfunction makeNewParticle() {\n    var lifeExpectancy;\n    lifeExpectancy = Math.random() * 6 + 4;\n    return {\n        x: source.x,\n        y: source.y,\n        direction: Math.PI * Math.random(),\n        lifeLeft: lifeExpectancy,\n        lifeExpectancy: lifeExpectancy\n    };\n}\nfor (var i = 0; i < 1000; i++) {\n    particlesData.push(makeNewParticle());\n}\nfunction advanceX(x, direction) {\n    var newX;\n    newX = x + Math.cos(Math.PI - direction) * source.speed;\n    return newX;\n}\nfunction advanceY(y, direction) {\n    var newY;\n    newY = y - Math.sin(Math.PI - direction) * source.speed;\n    return newY;\n}\nfunction advanceTime() {\n    var length;\n    length = particlesData.length;\n    while (length--) {\n        var particleDatum = particlesData[length];\n        particleDatum.lifeLeft -= 0.015;\n        if (particleDatum.lifeLeft < 1) {\n            particlesData.splice(length, length - 1);\n            particlesData.push(makeNewParticle());\n            continue;\n        }\n        particleDatum.x = advanceX(particleDatum.x, particleDatum.direction);\n        particleDatum.y = advanceY(particleDatum.y, particleDatum.direction);\n    }\n}\nfunction render() {\n    canvasContext.clearRect(0, 0, clientWidth, clientHeight);\n    for (var i = 0; i < particlesData.length; i++) {\n        canvasContext.drawImage(particle, particlesData[i].x, particlesData[i].y);\n    }\n    requestAnimationFrame(render);\n}\nsetInterval(advanceTime, 15);\n\nrender();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzP2U3ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2xvZGFzaCA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG52YXIgX2xvZGFzaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2gpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zb2xlLmxvZyhfbG9kYXNoMi5kZWZhdWx0KTtcblxudmFyIGNhbnZhcywgY2xpZW50SGVpZ2h0LCBjbGllbnRXaWR0aCwgc291cmNlLCBjYW52YXNDb250ZXh0LCBjcmVhdGVQYXJ0aWNsZSwgcGFydGljbGUsIHBhcnRpY2xlc0RhdGE7XG5cbmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNhbnZhcycpO1xuY2xpZW50V2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xpZW50V2lkdGg7XG5jbGllbnRIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xpZW50SGVpZ2h0O1xuc291cmNlID0ge1xuICAgIHg6IGNsaWVudFdpZHRoIC8gMixcbiAgICB5OiBjbGllbnRIZWlnaHQsXG4gICAgc3BlZWQ6IDJcbn07XG5jYW52YXMud2lkdGggPSBjbGllbnRXaWR0aDtcbmNhbnZhcy5oZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG5jYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywge1xuICAgIGFscGhhOiBmYWxzZVxufSk7XG5wYXJ0aWNsZXNEYXRhID0gW107XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhcnRpY2xlSW1hZ2UoKSB7XG4gICAgdmFyIHBhcnRpY2xlQ2FudmFzLCBjb250ZXh0LCBncmFkaWVudDtcblxuICAgIHBhcnRpY2xlQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgcGFydGljbGVDYW52YXMud2lkdGggPSAyMDtcbiAgICBwYXJ0aWNsZUNhbnZhcy5oZWlnaHQgPSAyMDtcbiAgICBjb250ZXh0ID0gcGFydGljbGVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoMTAsIDEwLCAwLCAxMCwgMTAsIDEwKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjUyLCAxOTQsIDE4LCAxKScpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTIsIDE5NCwgMTgsIDApJyk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIDIwLCAyMCk7XG5cbiAgICByZXR1cm4gcGFydGljbGVDYW52YXM7XG59O1xucGFydGljbGUgPSBjcmVhdGVQYXJ0aWNsZUltYWdlKCk7XG5mdW5jdGlvbiBtYWtlTmV3UGFydGljbGUoKSB7XG4gICAgdmFyIGxpZmVFeHBlY3RhbmN5O1xuICAgIGxpZmVFeHBlY3RhbmN5ID0gTWF0aC5yYW5kb20oKSAqIDYgKyA0O1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHNvdXJjZS54LFxuICAgICAgICB5OiBzb3VyY2UueSxcbiAgICAgICAgZGlyZWN0aW9uOiBNYXRoLlBJICogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgbGlmZUxlZnQ6IGxpZmVFeHBlY3RhbmN5LFxuICAgICAgICBsaWZlRXhwZWN0YW5jeTogbGlmZUV4cGVjdGFuY3lcbiAgICB9O1xufVxuZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcbiAgICBwYXJ0aWNsZXNEYXRhLnB1c2gobWFrZU5ld1BhcnRpY2xlKCkpO1xufVxuZnVuY3Rpb24gYWR2YW5jZVgoeCwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIG5ld1g7XG4gICAgbmV3WCA9IHggKyBNYXRoLmNvcyhNYXRoLlBJIC0gZGlyZWN0aW9uKSAqIHNvdXJjZS5zcGVlZDtcbiAgICByZXR1cm4gbmV3WDtcbn1cbmZ1bmN0aW9uIGFkdmFuY2VZKHksIGRpcmVjdGlvbikge1xuICAgIHZhciBuZXdZO1xuICAgIG5ld1kgPSB5IC0gTWF0aC5zaW4oTWF0aC5QSSAtIGRpcmVjdGlvbikgKiBzb3VyY2Uuc3BlZWQ7XG4gICAgcmV0dXJuIG5ld1k7XG59XG5mdW5jdGlvbiBhZHZhbmNlVGltZSgpIHtcbiAgICB2YXIgbGVuZ3RoO1xuICAgIGxlbmd0aCA9IHBhcnRpY2xlc0RhdGEubGVuZ3RoO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICB2YXIgcGFydGljbGVEYXR1bSA9IHBhcnRpY2xlc0RhdGFbbGVuZ3RoXTtcbiAgICAgICAgcGFydGljbGVEYXR1bS5saWZlTGVmdCAtPSAwLjAxNTtcbiAgICAgICAgaWYgKHBhcnRpY2xlRGF0dW0ubGlmZUxlZnQgPCAxKSB7XG4gICAgICAgICAgICBwYXJ0aWNsZXNEYXRhLnNwbGljZShsZW5ndGgsIGxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgcGFydGljbGVzRGF0YS5wdXNoKG1ha2VOZXdQYXJ0aWNsZSgpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRpY2xlRGF0dW0ueCA9IGFkdmFuY2VYKHBhcnRpY2xlRGF0dW0ueCwgcGFydGljbGVEYXR1bS5kaXJlY3Rpb24pO1xuICAgICAgICBwYXJ0aWNsZURhdHVtLnkgPSBhZHZhbmNlWShwYXJ0aWNsZURhdHVtLnksIHBhcnRpY2xlRGF0dW0uZGlyZWN0aW9uKTtcbiAgICB9XG59XG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0aWNsZXNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhbnZhc0NvbnRleHQuZHJhd0ltYWdlKHBhcnRpY2xlLCBwYXJ0aWNsZXNEYXRhW2ldLngsIHBhcnRpY2xlc0RhdGFbaV0ueSk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xufVxuc2V0SW50ZXJ2YWwoYWR2YW5jZVRpbWUsIDE1KTtcblxucmVuZGVyKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {


/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = function(module) {\r\n\tif(!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t// module.parent = undefined by default\r\n\t\tmodule.children = [];\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/YzNjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);