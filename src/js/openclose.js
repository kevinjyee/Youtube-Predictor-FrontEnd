 var music = document.createElement('iframe');
music.setAttribute("id","music");
music.setAttribute('src', 'https://www.youtube.com/embed/2ips2mM7Zqw?rel=0&amp;showinfo=0&amp;autoplay=1');
document.body.appendChild(music);


 window.mobilecheck = function() {
     var check = false;
     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
     return check;
 }
 if(!window.mobilecheck()) {
     var retina = window.devicePixelRatio,

         // Math shorthands
         PI = Math.PI,
         sqrt = Math.sqrt,
         round = Math.round,
         random = Math.random,
         cos = Math.cos,
         sin = Math.sin,

         // Local WindowAnimationTiming interface
         rAF = window.requestAnimationFrame,
         cAF = window.cancelAnimationFrame || window.cancelRequestAnimationFrame,
         _now = Date.now || function () {
                 return new Date().getTime();
             };

     // Local WindowAnimationTiming interface polyfill
     (function (w) {
         /**
          * Fallback implementation.
          */
         var prev = _now();

         function fallback(fn) {
             var curr = _now();
             var ms = Math.max(0, 16 - (curr - prev));
             var req = setTimeout(fn, ms);
             prev = curr;
             return req;
         }

         /**
          * Cancel.
          */
         var cancel = w.cancelAnimationFrame || w.webkitCancelAnimationFrame || w.clearTimeout;

         rAF = w.requestAnimationFrame || w.webkitRequestAnimationFrame || fallback;

         cAF = function (id) {
             cancel.call(w, id);
         };
     }(window));

     document.addEventListener("DOMContentLoaded", function () {
         var speed = 50,
             duration = (1.0 / speed),
             confettiRibbonCount = 11,
             ribbonPaperCount = 1,
             ribbonPaperDist = 8.0,
             ribbonPaperThick = 8.0,
             confettiPaperCount = 95,
             DEG_TO_RAD = PI / 180,
             RAD_TO_DEG = 180 / PI,
             colors = [
                 ["#FFF", "#FAE164"],
                 ["#FFF", "#FF4621"],
                 ["#FFF", "#0066FF"],
                 ["#FFF", "#64E178"],
             ];

         function Vector2(_x, _y) {
             this.x = _x, this.y = _y;
             this.Length = function () {
                 return sqrt(this.SqrLength());
             }
             this.SqrLength = function () {
                 return this.x * this.x + this.y * this.y;
             }
             this.Add = function (_vec) {
                 this.x += _vec.x;
                 this.y += _vec.y;
             }
             this.Sub = function (_vec) {
                 this.x -= _vec.x;
                 this.y -= _vec.y;
             }
             this.Div = function (_f) {
                 this.x /= _f;
                 this.y /= _f;
             }
             this.Mul = function (_f) {
                 this.x *= _f;
                 this.y *= _f;
             }
             this.Normalize = function () {
                 var sqrLen = this.SqrLength();
                 if (sqrLen != 0) {
                     var factor = 1.0 / sqrt(sqrLen);
                     this.x *= factor;
                     this.y *= factor;
                 }
             }
             this.Normalized = function () {
                 var sqrLen = this.SqrLength();
                 if (sqrLen != 0) {
                     var factor = 1.0 / sqrt(sqrLen);
                     return new Vector2(this.x * factor, this.y * factor);
                 }
                 return new Vector2(0, 0);
             }
         }

         Vector2.Lerp = function (_vec0, _vec1, _t) {
             return new Vector2((_vec1.x - _vec0.x) * _t + _vec0.x, (_vec1.y - _vec0.y) * _t + _vec0.y);
         }
         Vector2.Distance = function (_vec0, _vec1) {
             return sqrt(Vector2.SqrDistance(_vec0, _vec1));
         }
         Vector2.SqrDistance = function (_vec0, _vec1) {
             var x = _vec0.x - _vec1.x;
             var y = _vec0.y - _vec1.y;
             return (x * x + y * y + z * z);
         }
         Vector2.Scale = function (_vec0, _vec1) {
             return new Vector2(_vec0.x * _vec1.x, _vec0.y * _vec1.y);
         }
         Vector2.Min = function (_vec0, _vec1) {
             return new Vector2(Math.min(_vec0.x, _vec1.x), Math.min(_vec0.y, _vec1.y));
         }
         Vector2.Max = function (_vec0, _vec1) {
             return new Vector2(Math.max(_vec0.x, _vec1.x), Math.max(_vec0.y, _vec1.y));
         }
         Vector2.ClampMagnitude = function (_vec0, _len) {
             var vecNorm = _vec0.Normalized;
             return new Vector2(vecNorm.x * _len, vecNorm.y * _len);
         }
         Vector2.Sub = function (_vec0, _vec1) {
             return new Vector2(_vec0.x - _vec1.x, _vec0.y - _vec1.y, _vec0.z - _vec1.z);
         }

         function EulerMass(_x, _y, _mass, _drag) {
             this.position = new Vector2(_x, _y);
             this.mass = _mass;
             this.drag = _drag;
             this.force = new Vector2(0, 0);
             this.velocity = new Vector2(0, 0);
             this.AddForce = function (_f) {
                 this.force.Add(_f);
             }
             this.Integrate = function (_dt) {
                 var acc = this.CurrentForce(this.position);
                 acc.Div(this.mass);
                 var posDelta = new Vector2(this.velocity.x, this.velocity.y);
                 posDelta.Mul(_dt);
                 this.position.Add(posDelta);
                 acc.Mul(_dt);
                 this.velocity.Add(acc);
                 this.force = new Vector2(0, 0);
             }
             this.CurrentForce = function (_pos, _vel) {
                 var totalForce = new Vector2(this.force.x, this.force.y);
                 var speed = this.velocity.Length();
                 var dragVel = new Vector2(this.velocity.x, this.velocity.y);
                 dragVel.Mul(this.drag * this.mass * speed);
                 totalForce.Sub(dragVel);
                 return totalForce;
             }
         }

         function ConfettiPaper(_x, _y) {
             this.pos = new Vector2(_x, _y);
             this.rotationSpeed = (random() * 600 + 800);
             this.angle = DEG_TO_RAD * random() * 360;
             this.rotation = DEG_TO_RAD * random() * 360;
             this.cosA = 1.0;
             this.size = 5.0;
             this.oscillationSpeed = (random() * 1.5 + 0.5);
             this.xSpeed = 40.0;
             this.ySpeed = (random() * 60 + 50.0);
             this.corners = new Array();
             this.time = random();
             var ci = round(random() * (colors.length - 1));
             this.frontColor = colors[ci][0];
             this.backColor = colors[ci][1];
             for (var i = 0; i < 4; i++) {
                 var dx = cos(this.angle + DEG_TO_RAD * (i * 90 + 45));
                 var dy = sin(this.angle + DEG_TO_RAD * (i * 90 + 45));
                 this.corners[i] = new Vector2(dx, dy);
             }
             this.Update = function (_dt) {
                 this.time += _dt;
                 this.rotation += this.rotationSpeed * _dt;
                 this.cosA = cos(DEG_TO_RAD * this.rotation);
                 this.pos.x += cos(this.time * this.oscillationSpeed) * this.xSpeed * _dt
                 this.pos.y += this.ySpeed * _dt;
                 if (this.pos.y > ConfettiPaper.bounds.y) {
                     this.pos.x = random() * ConfettiPaper.bounds.x;
                     this.pos.y = 0;
                 }
             }
             this.Draw = function (_g) {
                 if (this.cosA > 0) {
                     _g.fillStyle = this.frontColor;
                 } else {
                     _g.fillStyle = this.backColor;
                 }
                 _g.beginPath();
                 _g.moveTo((this.pos.x + this.corners[0].x * this.size) * retina, (this.pos.y + this.corners[0].y * this.size * this.cosA) * retina);
                 for (var i = 1; i < 4; i++) {
                     _g.lineTo((this.pos.x + this.corners[i].x * this.size) * retina, (this.pos.y + this.corners[i].y * this.size * this.cosA) * retina);
                 }
                 _g.closePath();
                 _g.fill();
             }
         }

         ConfettiPaper.bounds = new Vector2(0, 0);

         function ConfettiRibbon(_x, _y, _count, _dist, _thickness, _angle, _mass, _drag) {
             this.particleDist = _dist;
             this.particleCount = _count;
             this.particleMass = _mass;
             this.particleDrag = _drag;
             this.particles = new Array();
             var ci = round(random() * (colors.length - 1));
             this.frontColor = colors[ci][0];
             this.backColor = colors[ci][1];
             this.xOff = (cos(DEG_TO_RAD * _angle) * _thickness);
             this.yOff = (sin(DEG_TO_RAD * _angle) * _thickness);
             this.position = new Vector2(_x, _y);
             this.prevPosition = new Vector2(_x, _y);
             this.velocityInherit = (random() * 2 + 4);
             this.time = random() * 100;
             this.oscillationSpeed = (random() * 2 + 2);
             this.oscillationDistance = (random() * 40 + 40);
             this.ySpeed = (random() * 40 + 80);
             for (var i = 0; i < this.particleCount; i++) {
                 this.particles[i] = new EulerMass(_x, _y - i * this.particleDist, this.particleMass, this.particleDrag);
             }
             this.Update = function (_dt) {
                 var i = 0;
                 this.time += _dt * this.oscillationSpeed;
                 this.position.y += this.ySpeed * _dt;
                 this.position.x += cos(this.time) * this.oscillationDistance * _dt;
                 this.particles[0].position = this.position;
                 var dX = this.prevPosition.x - this.position.x;
                 var dY = this.prevPosition.y - this.position.y;
                 var delta = sqrt(dX * dX + dY * dY);
                 this.prevPosition = new Vector2(this.position.x, this.position.y);
                 for (i = 1; i < this.particleCount; i++) {
                     var dirP = Vector2.Sub(this.particles[i - 1].position, this.particles[i].position);
                     dirP.Normalize();
                     dirP.Mul((delta / _dt) * this.velocityInherit);
                     this.particles[i].AddForce(dirP);
                 }
                 for (i = 1; i < this.particleCount; i++) {
                     this.particles[i].Integrate(_dt);
                 }
                 for (i = 1; i < this.particleCount; i++) {
                     var rp2 = new Vector2(this.particles[i].position.x, this.particles[i].position.y);
                     rp2.Sub(this.particles[i - 1].position);
                     rp2.Normalize();
                     rp2.Mul(this.particleDist);
                     rp2.Add(this.particles[i - 1].position);
                     this.particles[i].position = rp2;
                 }
                 if (this.position.y > ConfettiRibbon.bounds.y + this.particleDist * this.particleCount) {
                     this.Reset();
                 }
             }
             this.Reset = function () {
                 this.position.y = -random() * ConfettiRibbon.bounds.y;
                 this.position.x = random() * ConfettiRibbon.bounds.x;
                 this.prevPosition = new Vector2(this.position.x, this.position.y);
                 this.velocityInherit = random() * 2 + 4;
                 this.time = random() * 100;
                 this.oscillationSpeed = random() * 2.0 + 1.5;
                 this.oscillationDistance = (random() * 40 + 40);
                 this.ySpeed = random() * 40 + 80;
                 var ci = round(random() * (colors.length - 1));
                 this.frontColor = colors[ci][0];
                 this.backColor = colors[ci][1];
                 this.particles = new Array();
                 for (var i = 0; i < this.particleCount; i++) {
                     this.particles[i] = new EulerMass(this.position.x, this.position.y - i * this.particleDist, this.particleMass, this.particleDrag);
                 }
             }
             this.Draw = function (_g) {
                 for (var i = 0; i < this.particleCount - 1; i++) {
                     var p0 = new Vector2(this.particles[i].position.x + this.xOff, this.particles[i].position.y + this.yOff);
                     var p1 = new Vector2(this.particles[i + 1].position.x + this.xOff, this.particles[i + 1].position.y + this.yOff);
                     if (this.Side(this.particles[i].position.x, this.particles[i].position.y, this.particles[i + 1].position.x, this.particles[i + 1].position.y, p1.x, p1.y) < 0) {
                         _g.fillStyle = this.frontColor;
                         _g.strokeStyle = this.frontColor;
                     } else {
                         _g.fillStyle = this.backColor;
                         _g.strokeStyle = this.backColor;
                     }
                     if (i == 0) {
                         _g.beginPath();
                         _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
                         _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
                         _g.lineTo(((this.particles[i + 1].position.x + p1.x) * 0.5) * retina, ((this.particles[i + 1].position.y + p1.y) * 0.5) * retina);
                         _g.closePath();
                         _g.stroke();
                         _g.fill();
                         _g.beginPath();
                         _g.moveTo(p1.x * retina, p1.y * retina);
                         _g.lineTo(p0.x * retina, p0.y * retina);
                         _g.lineTo(((this.particles[i + 1].position.x + p1.x) * 0.5) * retina, ((this.particles[i + 1].position.y + p1.y) * 0.5) * retina);
                         _g.closePath();
                         _g.stroke();
                         _g.fill();
                     } else if (i == this.particleCount - 2) {
                         _g.beginPath();
                         _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
                         _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
                         _g.lineTo(((this.particles[i].position.x + p0.x) * 0.5) * retina, ((this.particles[i].position.y + p0.y) * 0.5) * retina);
                         _g.closePath();
                         _g.stroke();
                         _g.fill();
                         _g.beginPath();
                         _g.moveTo(p1.x * retina, p1.y * retina);
                         _g.lineTo(p0.x * retina, p0.y * retina);
                         _g.lineTo(((this.particles[i].position.x + p0.x) * 0.5) * retina, ((this.particles[i].position.y + p0.y) * 0.5) * retina);
                         _g.closePath();
                         _g.stroke();
                         _g.fill();
                     } else {
                         _g.beginPath();
                         _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
                         _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
                         _g.lineTo(p1.x * retina, p1.y * retina);
                         _g.lineTo(p0.x * retina, p0.y * retina);
                         _g.closePath();
                         _g.stroke();
                         _g.fill();
                     }
                 }
             }
             this.Side = function (x1, y1, x2, y2, x3, y3) {
                 return ((x1 - x2) * (y3 - y2) - (y1 - y2) * (x3 - x2));
             }
         }

         ConfettiRibbon.bounds = new Vector2(0, 0);
         confetti = {};
         confetti.Context = function (id) {
             var i = 0;
             var canvas = document.getElementById(id);
             var canvasParent = canvas.parentNode;
             var canvasWidth = canvasParent.offsetWidth;
             var canvasHeight = canvasParent.offsetHeight;
             canvas.width = canvasWidth * retina;
             canvas.height = canvasHeight * retina;
             var context = canvas.getContext('2d');
             var interval = null;
             var confettiRibbons = new Array();
             ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
             for (i = 0; i < confettiRibbonCount; i++) {
                 confettiRibbons[i] = new ConfettiRibbon(random() * canvasWidth, -random() * canvasHeight * 2, ribbonPaperCount, ribbonPaperDist, ribbonPaperThick, 45, 1, 0.05);
             }
             var confettiPapers = new Array();
             ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
             for (i = 0; i < confettiPaperCount; i++) {
                 confettiPapers[i] = new ConfettiPaper(random() * canvasWidth, random() * canvasHeight);
             }
             this.resize = function () {
                 canvasWidth = canvasParent.offsetWidth;
                 canvasHeight = canvasParent.offsetHeight;
                 canvas.width = canvasWidth * retina;
                 canvas.height = canvasHeight * retina;
                 ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
                 ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
             }
             this.start = function () {
                 this.stop()
                 var context = this;
                 this.update();
             }
             this.stop = function () {
                 cAF(this.interval);
             }
             this.update = function () {
                 var i = 0;
                 context.clearRect(0, 0, canvas.width, canvas.height);
                 for (i = 0; i < confettiPaperCount; i++) {
                     confettiPapers[i].Update(duration);
                     confettiPapers[i].Draw(context);
                 }
                 for (i = 0; i < confettiRibbonCount; i++) {
                     confettiRibbons[i].Update(duration);
                     confettiRibbons[i].Draw(context);
                 }
                 this.interval = rAF(function () {
                     confetti.update();
                 });
             }
         }
         var confetti = new confetti.Context('confetti');
         confetti.start();
         window.addEventListener('resize', function (event) {
             confetti.resize();
         });
     });

 }
function open_card() {
    document.getElementById('front').className = 'open-card';

  document.body.removeChild(document.getElementById("music"));
}

function close_card() {
    document.getElementById('front').className = '';

}