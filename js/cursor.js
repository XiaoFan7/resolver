// build time:Fri Aug 07 2020 14:41:04 GMT+0800 (GMT+08:00)
(function t(){var t=["#D61C59","#E7D84B","#1B8798"];var i=window.innerWidth;var n=window.innerHeight;var e={x:i/2,y:i/2};var o=[];function s(){h();u()}function h(){document.addEventListener("mousemove",r);document.addEventListener("touchmove",l);document.addEventListener("touchstart",l);window.addEventListener("resize",a)}function a(t){i=window.innerWidth;n=window.innerHeight}function l(i){if(i.touches.length>0){for(var n=0;n<i.touches.length;n++){c(i.touches[n].clientX,i.touches[n].clientY,t[Math.floor(Math.random()*t.length)])}}}function r(i){e.x=i.clientX;e.y=i.clientY;c(e.x,e.y,t[Math.floor(Math.random()*t.length)])}function c(t,i,n){var e=new f;e.init(t,i,n);o.push(e)}function d(){for(var t=0;t<o.length;t++){o[t].update()}for(var t=o.length-1;t>=0;t--){if(o[t].lifeSpan<0){o[t].die();o.splice(t,1)}}}function u(){requestAnimationFrame(u);d()}function f(){this.character="*";this.lifeSpan=120;this.initialStyles={position:"fixed",top:"0",display:"block",pointerEvents:"none","z-index":"10000000",fontSize:"20px","will-change":"transform"};this.init=function(t,i,n){this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1};this.position={x:t-10,y:i-20};this.initialStyles.color=n;console.log(n);this.element=document.createElement("span");this.element.innerHTML=this.character;m(this.element,this.initialStyles);this.update();document.body.appendChild(this.element)};this.update=function(){this.position.x+=this.velocity.x;this.position.y+=this.velocity.y;this.lifeSpan--;this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px,0) scale("+this.lifeSpan/120+")"};this.die=function(){this.element.parentNode.removeChild(this.element)}}function m(t,i){for(var n in i){t.style[n]=i[n]}}s()})();
//rebuild by neat 