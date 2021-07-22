!function(e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():e()}(function(){var n="undefined"!=typeof window?window:this,e=n.Glider=function(e,t){var i=this;if(e._glider)return e._glider;if(i.ele=e,i.ele.classList.add("glider"),(i.ele._glider=i).opt=Object.assign({},{slidesToScroll:1,slidesToShow:1,resizeLock:!0,duration:.5,easing:function(e,t,i,o,r){return o*(t/=r)*t+i}},t),i.animate_id=i.page=i.slide=0,i.arrows={},i._opt=i.opt,i.opt.skipTrack)i.track=i.ele.children[0];else for(i.track=document.createElement("div"),i.ele.appendChild(i.track);1!==i.ele.children.length;)i.track.appendChild(i.ele.children[0]);i.track.classList.add("glider-track"),i.init(),i.resize=i.init.bind(i,!0),i.event(i.ele,"add",{scroll:i.updateControls.bind(i)}),i.event(n,"add",{resize:i.resize})},t=e.prototype;return t.init=function(e,t){var i=this,o=0,r=0;i.slides=i.track.children,[].forEach.call(i.slides,function(e,t){e.classList.add("glider-slide"),e.setAttribute("data-gslide",t)}),i.containerWidth=i.ele.clientWidth;var s=i.settingsBreakpoint();if(t=t||s,"auto"===i.opt.slidesToShow||void 0!==i.opt._autoSlide){var l=i.containerWidth/i.opt.itemWidth;i.opt._autoSlide=i.opt.slidesToShow=i.opt.exactWidth?l:Math.max(1,Math.floor(l))}"auto"===i.opt.slidesToScroll&&(i.opt.slidesToScroll=Math.floor(i.opt.slidesToShow)),i.itemWidth=i.opt.exactWidth?i.opt.itemWidth:i.containerWidth/i.opt.slidesToShow,[].forEach.call(i.slides,function(e){e.style.height="auto",e.style.width=i.itemWidth+"px",o+=i.itemWidth,r=Math.max(e.offsetHeight,r)}),i.track.style.width=o+"px",i.trackWidth=o,i.isDrag=!1,i.preventClick=!1,i.opt.resizeLock&&i.scrollTo(i.slide*i.itemWidth,0),(s||t)&&(i.bindArrows(),i.buildDots(),i.bindDrag()),i.updateControls(),i.emit(e?"refresh":"loaded")},t.bindDrag=function(){var t=this;t.mouse=t.mouse||t.handleMouse.bind(t);function e(){t.mouseDown=void 0,t.ele.classList.remove("drag"),t.isDrag&&(t.preventClick=!0),t.isDrag=!1}var i={mouseup:e,mouseleave:e,mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.mouseDown=e.clientX,t.ele.classList.add("drag")},mousemove:t.mouse,click:function(e){t.preventClick&&(e.preventDefault(),e.stopPropagation()),t.preventClick=!1}};t.ele.classList.toggle("draggable",!0===t.opt.draggable),t.event(t.ele,"remove",i),t.opt.draggable&&t.event(t.ele,"add",i)},t.buildDots=function(){var e=this;if(e.opt.dots){if("string"==typeof e.opt.dots?e.dots=document.querySelector(e.opt.dots):e.dots=e.opt.dots,e.dots){e.dots.innerHTML="",e.dots.classList.add("glider-dots");for(var t=0;t<Math.ceil(e.slides.length/e.opt.slidesToShow);++t){var i=document.createElement("button");i.dataset.index=t,i.setAttribute("aria-label","Page "+(t+1)),i.setAttribute("role","tab"),i.className="glider-dot "+(t?"":"active"),e.event(i,"add",{click:e.scrollItem.bind(e,t,!0)}),e.dots.appendChild(i)}}}else e.dots&&(e.dots.innerHTML="")},t.bindArrows=function(){var i=this;i.opt.arrows?["prev","next"].forEach(function(e){var t=i.opt.arrows[e];t&&("string"==typeof t&&(t=document.querySelector(t)),t&&(t._func=t._func||i.scrollItem.bind(i,e),i.event(t,"remove",{click:t._func}),i.event(t,"add",{click:t._func}),i.arrows[e]=t))}):Object.keys(i.arrows).forEach(function(e){var t=i.arrows[e];i.event(t,"remove",{click:t._func})})},t.updateControls=function(e){var d=this;e&&!d.opt.scrollPropagate&&e.stopPropagation();var t=d.containerWidth>=d.trackWidth;d.opt.rewind||(d.arrows.prev&&(d.arrows.prev.classList.toggle("disabled",d.ele.scrollLeft<=0||t),d.arrows.prev.classList.contains("disabled")?d.arrows.prev.setAttribute("aria-disabled",!0):d.arrows.prev.setAttribute("aria-disabled",!1)),d.arrows.next&&(d.arrows.next.classList.toggle("disabled",Math.ceil(d.ele.scrollLeft+d.containerWidth)>=Math.floor(d.trackWidth)||t),d.arrows.next.classList.contains("disabled")?d.arrows.next.setAttribute("aria-disabled",!0):d.arrows.next.setAttribute("aria-disabled",!1))),d.slide=Math.round(d.ele.scrollLeft/d.itemWidth),d.page=Math.round(d.ele.scrollLeft/d.containerWidth);var c=d.slide+Math.floor(Math.floor(d.opt.slidesToShow)/2),h=Math.floor(d.opt.slidesToShow)%2?0:c+1;1===Math.floor(d.opt.slidesToShow)&&(h=0),d.ele.scrollLeft+d.containerWidth>=Math.floor(d.trackWidth)&&(d.page=d.dots?d.dots.children.length-1:0),[].forEach.call(d.slides,function(e,t){var i=e.classList,o=i.contains("visible"),r=d.ele.scrollLeft,s=d.ele.scrollLeft+d.containerWidth,l=d.itemWidth*t,a=l+d.itemWidth;[].forEach.call(i,function(e){/^left|right/.test(e)&&i.remove(e)}),i.toggle("active",d.slide===t),c===t||h&&h===t?i.add("center"):(i.remove("center"),i.add([t<c?"left":"right",Math.abs(t-(t<c?c:h||c))].join("-")));var n=Math.ceil(l)>=Math.floor(r)&&Math.floor(a)<=Math.ceil(s);i.toggle("visible",n),n!==o&&d.emit("slide-"+(n?"visible":"hidden"),{slide:t})}),d.dots&&[].forEach.call(d.dots.children,function(e,t){e.classList.toggle("active",d.page===t)}),e&&d.opt.scrollLock&&(clearTimeout(d.scrollLock),d.scrollLock=setTimeout(function(){clearTimeout(d.scrollLock),.02<Math.abs(d.ele.scrollLeft/d.itemWidth-d.slide)&&(d.mouseDown||d.trackWidth>d.containerWidth+d.ele.scrollLeft&&d.scrollItem(d.getCurrentSlide()))},d.opt.scrollLockDelay||250))},t.getCurrentSlide=function(){var e=this;return e.round(e.ele.scrollLeft/e.itemWidth)},t.scrollItem=function(e,t,i){i&&i.preventDefault();var o=this,r=e;if(++o.animate_id,!0===t)e*=o.containerWidth,e=Math.round(e/o.itemWidth)*o.itemWidth;else{if("string"==typeof e){var s="prev"===e;if(e=o.opt.slidesToScroll%1||o.opt.slidesToShow%1?o.getCurrentSlide():o.slide,s?e-=o.opt.slidesToScroll:e+=o.opt.slidesToScroll,o.opt.rewind){var l=o.ele.scrollLeft;e=s&&!l?o.slides.length:!s&&l+o.containerWidth>=Math.floor(o.trackWidth)?0:e}}e=Math.max(Math.min(e,o.slides.length),0),o.slide=e,e=o.itemWidth*e}return o.scrollTo(e,o.opt.duration*Math.abs(o.ele.scrollLeft-e),function(){o.updateControls(),o.emit("animated",{value:r,type:"string"==typeof r?"arrow":t?"dot":"slide"})}),!1},t.settingsBreakpoint=function(){var e=this,t=e._opt.responsive;if(t){t.sort(function(e,t){return t.breakpoint-e.breakpoint});for(var i=0;i<t.length;++i){var o=t[i];if(n.innerWidth>=o.breakpoint)return e.breakpoint!==o.breakpoint&&(e.opt=Object.assign({},e._opt,o.settings),e.breakpoint=o.breakpoint,!0)}}var r=0!==e.breakpoint;return e.opt=Object.assign({},e._opt),e.breakpoint=0,r},t.scrollTo=function(t,i,o){var r=this,s=(new Date).getTime(),l=r.animate_id,a=function(){var e=(new Date).getTime()-s;r.ele.scrollLeft=r.ele.scrollLeft+(t-r.ele.scrollLeft)*r.opt.easing(0,e,0,1,i),e<i&&l===r.animate_id?n.requestAnimationFrame(a):(r.ele.scrollLeft=t,o&&o.call(r))};n.requestAnimationFrame(a)},t.removeItem=function(e){var t=this;t.slides.length&&(t.track.removeChild(t.slides[e]),t.refresh(!0),t.emit("remove"))},t.addItem=function(e){this.track.appendChild(e),this.refresh(!0),this.emit("add")},t.handleMouse=function(e){var t=this;t.mouseDown&&(t.isDrag=!0,t.ele.scrollLeft+=(t.mouseDown-e.clientX)*(t.opt.dragVelocity||3.3),t.mouseDown=e.clientX)},t.round=function(e){var t=1/(this.opt.slidesToScroll%1||1);return Math.round(e*t)/t},t.refresh=function(e){this.init(!0,e)},t.setOption=function(t,e){var i=this;i.breakpoint&&!e?i._opt.responsive.forEach(function(e){e.breakpoint===i.breakpoint&&(e.settings=Object.assign({},e.settings,t))}):i._opt=Object.assign({},i._opt,t),i.breakpoint=0,i.settingsBreakpoint()},t.destroy=function(){function e(t){t.removeAttribute("style"),[].forEach.call(t.classList,function(e){/^glider/.test(e)&&t.classList.remove(e)})}var t=this,i=t.ele.cloneNode(!0);i.children[0].outerHTML=i.children[0].innerHTML,e(i),[].forEach.call(i.getElementsByTagName("*"),e),t.ele.parentNode.replaceChild(i,t.ele),t.event(n,"remove",{resize:t.resize}),t.emit("destroy")},t.emit=function(e,t){var i=new n.CustomEvent("glider-"+e,{bubbles:!this.opt.eventPropagate,detail:t});this.ele.dispatchEvent(i)},t.event=function(e,t,i){var o=e[t+"EventListener"].bind(e);Object.keys(i).forEach(function(e){o(e,i[e])})},e});

// SLIDER JS
window.addEventListener('load', function () {

  new Glider (document.querySelector('.testimonials__container--carousel'), {

      slidesToShow: 3,
      slidesToScroll: 3,
      draggable: true,
      dots: '.testimonials__indicators',
      rewind: true,
      duration: 0.6,
      arrows: {
          prev: '.testimonials__container--previous',
          next: '.testimonials__container--after'
      }
      
      ,

      responsive: [

          {
              breakpoint: 1152,
              settings: {
                  slidesToShow: 'auto',
                  slidesToScroll: 'auto',
                  itemWidth: 350,
                  rewind: true,
                  duration: 0.6
                  
              }
          }
          
          , 
          
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 'auto',
                  slidesToScroll: 'auto',
                  itemWidth: 350,
              }
          }

          , 
          
          {
              breakpoint: 834,
              settings: {
                  slidesToShow: 'auto',
                  slidesToScroll: 'auto',
                  itemWidth: 350,
              }
          }

          , 
          
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 'auto',
                  slidesToScroll: 'auto',
                  itemWidth: 350,
              }
          }

          , 
          
          {
              breakpoint: 425,
              settings: {
                  draggable: true,
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 424,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 423,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 422,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 421,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 420,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 419,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 418,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 417,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 416,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 415,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 414,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 413,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 412,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 411,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 410,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 409,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 408,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 407,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 406,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 405,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 404,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 403,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 402,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 401,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 400,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 399,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 398,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 397,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 396,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 395,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 394,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 393,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 392,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 391,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 390,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 389,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 388,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 387,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 386,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 385,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 384,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 383,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 382,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 381,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 380,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 379,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 378,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 377,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 376,
              settings: {
                  slidesToShow: '1.25',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 375,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 374,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 373,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 372,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 371,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 370,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 369,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 368,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 367,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 366,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 365,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 364,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 363,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 362,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 361,
              settings: {
                  slidesToShow: '1.15',
                  itemWidth: 450,
              }
          }
          , 
          
          {
              breakpoint: 360,
              settings: {
                  slidesToShow: '1.1',
                  itemWidth: 450,
              }
          }
          

      ]

  });
  
});