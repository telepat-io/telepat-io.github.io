/*  Curve extension for canvas 2.3.1
 *  Epistemex (c) 2013-2014
 *  License: MIT
 */
CanvasRenderingContext2D.prototype.curve=CanvasRenderingContext2D.prototype.curve||function(h,t,f,c){t=(typeof t==="number")?t:0.5;f=f?f:25;var j,d=1,e=h.length,n=0,m=(e-2)*f+2+(c?2*f:0),k=new Float32Array(m),a=new Float32Array((f+2)*4),b=4;j=h.slice(0);if(c){j.unshift(h[e-1]);j.unshift(h[e-2]);j.push(h[0],h[1])}else{j.unshift(h[1]);j.unshift(h[0]);j.push(h[e-2],h[e-1])}a[0]=1;for(;d<f;d++){var o=d/f,p=o*o,r=p*o,q=r*2,s=p*3;a[b++]=q-s+1;a[b++]=s-q;a[b++]=r-2*p+o;a[b++]=r-p}a[++b]=1;g(j,a,e);if(c){j=[];j.push(h[e-4],h[e-3],h[e-2],h[e-1]);j.push(h[0],h[1],h[2],h[3]);g(j,a,4)}function g(G,z,B){for(var A=2,H;A<B;A+=2){var C=G[A],D=G[A+1],E=G[A+2],F=G[A+3],I=(E-G[A-2])*t,J=(F-G[A-1])*t,K=(G[A+4]-C)*t,L=(G[A+5]-D)*t;for(H=0;H<f;H++){var u=H<<2,v=z[u],w=z[u+1],x=z[u+2],y=z[u+3];k[n++]=v*C+w*E+x*I+y*K;k[n++]=v*D+w*F+x*J+y*L}}}e=c?0:h.length-2;k[n++]=h[e];k[n]=h[e+1];for(d=0,e=k.length;d<e;d+=2){this.lineTo(k[d],k[d+1])}return k};

function telepatHLSToRGB(h, s, l){
  var r, g, b;
  if(s == 0){
    r = g = b = l; // achromatic
  }else{
    var hue2rgb = function hue2rgb(p, q, t){
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function drawTelepatLogo(ctx) {
  var deltaSize = 3;
  var originalPoints, currentPoints, maskPoints, textPoints, gradientPoints;
  originalPoints = [
      [15,45,41,19,94,10,146,50,126,125,91,143,68,130,54,91],
      [27,45,73,22,120,37,135,68,113,121,89,134,70,119,60,88],
      [39,50,83,33,120,52,120,80,100,120,85,122,75,107,62,79],
      [50,52,85,42,110,58,110,83,98,108,87,110,78,98,73,80],
      [62,56,80,50,100,60,102,80,94,94,85,94,82,85,78,73]
    ];
  currentPoints = [[],[],[],[],[]];
  textPoints = [100, 55, 184, 80];
  gradientPoints = [50,50,150,150];

  ctx.fillStyle = 'black';
  var text = new Image();
  text.src = 'http://telepat.io/assets/images/telepat-logo-text.png';

  function draw(points) {
    ctx.beginPath();
    ctx.curve(points, 0.6, 30, true);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
  }

  draw(originalPoints);

  var frameCount = 0;
  setInterval(function () {
    frameCount++;

    for (var j=0; j<originalPoints.length; j++)
      for (var i=0; i<originalPoints[j].length; i++) {
        currentPoints[j][i] = originalPoints[j][i] + (deltaSize*Math.sin((frameCount + originalPoints[0][i])/10 - (j*Math.PI/8)))/(j*0.5 + 1);
      }

    var grad= ctx.createLinearGradient(gradientPoints[0], gradientPoints[1], gradientPoints[2], gradientPoints[3]);
    var rgbColor1 = telepatHLSToRGB((frameCount+500)%1000/1000, 0.5, 0.5);
    var rgbColor2 = telepatHLSToRGB((frameCount+700)%1000/1000, 0.5, 0.5);
    grad.addColorStop(0, "rgb("+rgbColor1[0]+","+rgbColor1[1]+","+rgbColor1[2]+")");
    grad.addColorStop(1, "rgb("+rgbColor2[0]+","+rgbColor2[1]+","+rgbColor2[2]+")");
    ctx.strokeStyle = grad;

    ctx.clearRect (0, 0, canvas.width, canvas.height);
    for (var j=0; j<currentPoints.length; j++)
      draw(currentPoints[j]);

    ctx.drawImage(text, textPoints[0], textPoints[1], textPoints[2], textPoints[3]);

  }, 50);
}

var canvas = null;

document.addEventListener('DOMContentLoaded', function() {
	var logoContainers = document.getElementsByClassName("telepat-logo");
	for (var i=0; i<logoContainers.length; i++) {
		canvas = document.createElement("canvas");
		canvas.style.backgroundColor = "black";
		canvas.style.marginTop = "10px";
		canvas.style.marginLeft = "10px";
		var height = logoContainers[i].getAttribute('data-height') || 80;
		canvas.height = height * 2;
		canvas.width = height * 3.6;
		logoContainers[i].appendChild(canvas);
		canvas.style.height = height + 'px';
		canvas.style.width = height * 1.8 + 'px';
		var ctx = canvas.getContext('2d');
		drawTelepatLogo(ctx);
	}
});
