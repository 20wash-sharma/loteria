!function(t,e,o,s){"use strict";var a,r=0,n=function(){var t,e=s.userAgent,o=/msie\s\d+/i;return e.search(o)>0&&(t=o.exec(e).toString(),t=t.split(" ")[1],9>t)?!0:!1}(),i="ontouchstart"in o||s.msMaxTouchPoints>0,l=function(t){return"Number"==typeof t?isNaN(t)?null:t:(t=parseFloat(t),isNaN(t)?null:t)},p={init:function(s){var p='<span class="irs"><span class="irs-line"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>',m='<span class="irs-slider single"></span>',f='<span class="irs-diapason"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>',u='<span class="irs-disable-mask"></span>';return this.each(function(){var d=t.extend({min:null,max:null,from:null,to:null,type:"single",step:null,prefix:"",postfix:"",maxPostfix:"",hasGrid:!1,hideMinMax:!1,hideFromTo:!1,prettify:!0,disable:!1,values:null,onChange:null,onLoad:null,onFinish:null},s),x=t(this),h=this,y=!1,c=null;if(!x.data("isActive")){x.data("isActive",!0),r+=1,this.pluginCount=r,x.prop("value")&&(c=x.prop("value").split(";")),"single"===d.type?c&&c.length>1?("number"!=typeof d.min?d.min=parseFloat(c[0]):"number"!=typeof d.from&&(d.from=parseFloat(c[0])),"number"!=typeof d.max&&(d.max=parseFloat(c[1]))):c&&1===c.length&&"number"!=typeof d.from&&(d.from=parseFloat(c[0])):"double"===d.type&&(c&&c.length>1?("number"!=typeof d.min?d.min=parseFloat(c[0]):"number"!=typeof d.from&&(d.from=parseFloat(c[0])),"number"!=typeof d.max?d.max=parseFloat(c[1]):"number"!=typeof d.to&&(d.to=parseFloat(c[1]))):c&&1===c.length&&("number"!=typeof d.min?d.min=parseFloat(c[0]):"number"!=typeof d.from&&(d.from=parseFloat(c[0])))),"number"==typeof x.data("min")&&(d.min=parseFloat(x.data("min"))),"number"==typeof x.data("max")&&(d.max=parseFloat(x.data("max"))),"number"==typeof x.data("from")&&(d.from=parseFloat(x.data("from"))),"number"==typeof x.data("to")&&(d.to=parseFloat(x.data("to"))),x.data("step")&&(d.step=parseFloat(x.data("step"))),x.data("type")&&(d.type=x.data("type")),x.data("prefix")&&(d.prefix=x.data("prefix")),x.data("postfix")&&(d.postfix=x.data("postfix")),x.data("maxpostfix")&&(d.maxPostfix=x.data("maxpostfix")),x.data("hasgrid")&&(d.hasGrid=x.data("hasgrid")),x.data("hideminmax")&&(d.hideMinMax=x.data("hideminmax")),x.data("hidefromto")&&(d.hideFromTo=x.data("hidefromto")),x.data("prettify")&&(d.prettify=x.data("prettify")),x.data("disable")&&(d.disable=x.data("disable")),x.data("values")&&(d.values=x.data("values").split(",")),d.min=l(d.min),d.min||0===d.min||(d.min=10),d.max=l(d.max),d.max||0===d.max||(d.max=100),"[object Array]"!==Object.prototype.toString.call(d.values)&&(d.values=null),d.values&&d.values.length>0&&(d.min=0,d.max=d.values.length-1,d.step=1,y=!0),d.from=l(d.from),d.from||0===d.from||(d.from=d.min),d.to=l(d.to),d.to||0===d.to||(d.to=d.max),d.step=l(d.step),d.step||(d.step=1),d.from<d.min&&(d.from=d.min),d.from>d.max&&(d.from=d.min),d.to<d.min&&(d.to=d.max),d.to>d.max&&(d.to=d.max),"double"===d.type&&(d.from>d.to&&(d.from=d.to),d.to<d.from&&(d.to=d.from));var b=function(t){var e=t.toString();return d.prettify&&(e=e.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")),e},g='<span class="irs" id="irs-'+this.pluginCount+'"></span>';x[0].style.display="none",x.before(g);var v,N,X,C,M,P,F,w,_,I,k,A,D=x.prev(),S=t(e.body),T=t(o),W=!1,j=!1,E=!0,G={},L=0,V=0,Q=0,R=0,O=0,$=0,q=0,z=0,B=0,H=0,J=0;parseInt(d.step,10)!==parseFloat(d.step)&&(J=d.step.toString().split(".")[1],J=Math.pow(10,J.length)),this.updateData=function(e){E=!0,d=t.extend(d,e),K()},this.removeSlider=function(){D.find("*").off(),T.off("mouseup.irs"+h.pluginCount),S.off("mouseup.irs"+h.pluginCount),S.off("mousemove.irs"+h.pluginCount),D.html("").remove(),x.data("isActive",!1),x.show()};var K=function(){D.find("*").off(),T.off("mouseup.irs"+h.pluginCount),S.off("mouseup.irs"+h.pluginCount),S.off("mousemove.irs"+h.pluginCount),D.html(""),U()},U=function(){D.html(p),v=D.find(".irs"),N=v.find(".irs-min"),X=v.find(".irs-max"),C=v.find(".irs-from"),M=v.find(".irs-to"),P=v.find(".irs-single"),A=D.find(".irs-grid"),d.hideMinMax&&(N[0].style.display="none",X[0].style.display="none",V=0,Q=0),d.hideFromTo&&(C[0].style.display="none",M[0].style.display="none",P[0].style.display="none"),d.hideMinMax||(d.values?(N.html(d.prefix+d.values[0]+d.postfix),X.html(d.prefix+d.values[d.values.length-1]+d.maxPostfix+d.postfix)):(N.html(d.prefix+b(d.min)+d.postfix),X.html(d.prefix+b(d.max)+d.maxPostfix+d.postfix)),V=N.outerWidth(),Q=X.outerWidth()),"single"===d.type?(v.append(m),F=v.find(".single"),F.on("mousedown",function(e){e.preventDefault(),e.stopPropagation(),Z(e,t(this),null),W=!0,j=!0,a=h.pluginCount,n&&t("*").prop("unselectable",!0)}),i&&F.on("touchstart",function(e){e.preventDefault(),e.stopPropagation(),Z(e.originalEvent.touches[0],t(this),null),W=!0,j=!0,a=h.pluginCount})):"double"===d.type&&(v.append(f),w=v.find(".from"),_=v.find(".to"),k=v.find(".irs-diapason"),te(),w.on("mousedown",function(e){e.preventDefault(),e.stopPropagation(),t(this).addClass("last"),_.removeClass("last"),Z(e,t(this),"from"),W=!0,j=!0,a=h.pluginCount,n&&t("*").prop("unselectable",!0)}),_.on("mousedown",function(e){e.preventDefault(),e.stopPropagation(),t(this).addClass("last"),w.removeClass("last"),Z(e,t(this),"to"),W=!0,j=!0,a=h.pluginCount,n&&t("*").prop("unselectable",!0)}),i&&(w.on("touchstart",function(e){e.preventDefault(),e.stopPropagation(),t(this).addClass("last"),_.removeClass("last"),Z(e.originalEvent.touches[0],t(this),"from"),W=!0,j=!0,a=h.pluginCount}),_.on("touchstart",function(e){e.preventDefault(),e.stopPropagation(),t(this).addClass("last"),w.removeClass("last"),Z(e.originalEvent.touches[0],t(this),"to"),W=!0,j=!0,a=h.pluginCount})),d.to===d.max&&w.addClass("last"));var e=function(){a===h.pluginCount&&W&&(j=!1,W=!1,I.removeAttr("id"),I=null,"double"===d.type&&te(),oe(),n&&t("*").prop("unselectable",!1))};T.on("mouseup.irs"+h.pluginCount,function(){e()}),S.on("mousemove.irs"+h.pluginCount,function(t){W&&(L=t.pageX,ee())}),D.on("mousedown",function(){a=h.pluginCount}),D.on("mouseup",function(t){a===h.pluginCount&&(W||d.disable||ae(t.pageX))}),i&&(T.on("touchend",function(){W&&(j=!1,W=!1,I.removeAttr("id"),I=null,"double"===d.type&&te(),oe())}),T.on("touchmove",function(t){W&&(L=t.originalEvent.touches[0].pageX,ee())})),Y(),se(),d.hasGrid&&ne(),d.disable?ie():le()},Y=function(){R=v.width(),$=F?F.width():w.width(),O=R-$},Z=function(t,e,o){Y(),E=!1,I=e,I.attr("id","irs-active-slider");var s=I.offset().left,a=t.pageX-s;H=s+a-I.position().left,"single"===d.type?q=v.width()-$:"double"===d.type&&("from"===o?(z=0,B=parseInt(_.css("left"),10)):(z=parseInt(w.css("left"),10),B=v.width()-$))},te=function(){var e=w.width(),o=t.data(w[0],"x")||parseInt(w[0].style.left,10)||w.position().left,s=t.data(_[0],"x")||parseInt(_[0].style.left,10)||_.position().left,a=o+e/2,r=s-o;k[0].style.left=a+"px",k[0].style.width=r+"px"},ee=function(e){var o,s=L-H;s=e?e:L-H,"single"===d.type?(0>s&&(s=0),s>q&&(s=q)):"double"===d.type&&(z>s&&(s=z),s>B&&(s=B),te()),t.data(I[0],"x",s),oe(),o=Math.round(s),I[0].style.left=o+"px"},oe=function(){var e,o,s={input:x,slider:D,min:d.min,max:d.max,fromNumber:0,toNumber:0,fromPers:0,toPers:0,fromX:0,fromX_pure:0,toX:0,toX_pure:0},a=d.max-d.min;"single"===d.type?(s.fromX=t.data(F[0],"x")||parseInt(F[0].style.left,10)||F.position().left,s.fromPers=s.fromX/O*100,e=a/100*s.fromPers+d.min,s.fromNumber=Math.round(e/d.step)*d.step,s.fromNumber<d.min&&(s.fromNumber=d.min),s.fromNumber>d.max&&(s.fromNumber=d.max),J&&(s.fromNumber=parseInt(s.fromNumber*J,10)/J),y&&(s.fromValue=d.values[s.fromNumber])):"double"===d.type&&(s.fromX=t.data(w[0],"x")||parseInt(w[0].style.left,10)||w.position().left,s.fromPers=s.fromX/O*100,e=a/100*s.fromPers+d.min,s.fromNumber=Math.round(e/d.step)*d.step,s.fromNumber<d.min&&(s.fromNumber=d.min),s.toX=t.data(_[0],"x")||parseInt(_[0].style.left,10)||_.position().left,s.toPers=s.toX/O*100,o=a/100*s.toPers+d.min,s.toNumber=Math.round(o/d.step)*d.step,s.toNumber>d.max&&(s.toNumber=d.max),J&&(s.fromNumber=parseInt(s.fromNumber*J,10)/J,s.toNumber=parseInt(s.toNumber*J,10)/J),y&&(s.fromValue=d.values[s.fromNumber],s.toValue=d.values[s.toNumber])),G=s,re()},se=function(){var e={input:x,slider:D,min:d.min,max:d.max,fromNumber:d.from,toNumber:d.to,fromPers:0,toPers:0,fromX:0,fromX_pure:0,toX:0,toX_pure:0},o=d.max-d.min;"single"===d.type?(e.fromPers=0!==o?(e.fromNumber-d.min)/o*100:0,e.fromX_pure=O/100*e.fromPers,e.fromX=Math.round(e.fromX_pure),F[0].style.left=e.fromX+"px",t.data(F[0],"x",e.fromX_pure)):"double"===d.type&&(e.fromPers=0!==o?(e.fromNumber-d.min)/o*100:0,e.fromX_pure=O/100*e.fromPers,e.fromX=Math.round(e.fromX_pure),w[0].style.left=e.fromX+"px",t.data(w[0],"x",e.fromX_pure),e.toPers=0!==o?(e.toNumber-d.min)/o*100:1,e.toX_pure=O/100*e.toPers,e.toX=Math.round(e.toX_pure),_[0].style.left=e.toX+"px",t.data(_[0],"x",e.toX_pure),te()),G=e,re()},ae=function(t){var e=t-D.offset().left,o=G.toX-G.fromX,s=G.fromX+o/2;z=0,q=v.width()-$,B=v.width()-$,"single"===d.type?(I=F,I.attr("id","irs-active-slider"),ee(e)):"double"===d.type&&(I=s>=e?w:_,I.attr("id","irs-active-slider"),ee(e),te()),I.removeAttr("id"),I=null},re=function(){var t,e,o,s,a,r,n,i,l,p=$/2,m="";"single"===d.type?(m=G.fromNumber===d.max?d.maxPostfix:"",d.hideText||(C[0].style.display="none",M[0].style.display="none",n=y?d.prefix+d.values[G.fromNumber]+m+d.postfix:d.prefix+b(G.fromNumber)+m+d.postfix,P.html(n),i=P.outerWidth(),l=G.fromX-i/2+p,0>l&&(l=0),l>R-i&&(l=R-i),P[0].style.left=l+"px",d.hideMinMax||d.hideFromTo||(N[0].style.display=V>l?"none":"block",X[0].style.display=l+i>R-Q?"none":"block")),x.attr("value",parseFloat(G.fromNumber))):"double"===d.type&&(m=G.fromNumber===d.max?d.maxPostfix:"",m=G.toNumber===d.max?d.maxPostfix:"",d.hideText||(y?(t=d.prefix+d.values[G.fromNumber]+d.postfix,s=d.prefix+d.values[G.toNumber]+m+d.postfix,n=G.fromNumber!==G.toNumber?d.prefix+d.values[G.fromNumber]+" � "+d.prefix+d.values[G.toNumber]+m+d.postfix:d.prefix+d.values[G.fromNumber]+m+d.postfix):(t=d.prefix+b(G.fromNumber)+d.postfix,s=d.prefix+b(G.toNumber)+m+d.postfix,n=G.fromNumber!==G.toNumber?d.prefix+b(G.fromNumber)+" � "+d.prefix+b(G.toNumber)+m+d.postfix:d.prefix+b(G.fromNumber)+m+d.postfix),C.html(t),M.html(s),P.html(n),e=C.outerWidth(),o=G.fromX-e/2+p,0>o&&(o=0),o>R-e&&(o=R-e),C[0].style.left=o+"px",a=M.outerWidth(),r=G.toX-a/2+p,0>r&&(r=0),r>R-a&&(r=R-a),M[0].style.left=r+"px",i=P.outerWidth(),l=G.fromX+(G.toX-G.fromX)/2-i/2+p,0>l&&(l=0),l>R-i&&(l=R-i),P[0].style.left=l+"px",r>o+e?(P[0].style.display="none",C[0].style.display="block",M[0].style.display="block"):(P[0].style.display="block",C[0].style.display="none",M[0].style.display="none"),d.hideMinMax||d.hideFromTo||(N[0].style.display=V>l||V>o?"none":"block",X[0].style.display=l+i>R-Q||r+a>R-Q?"none":"block")),x.attr("value",parseFloat(G.fromNumber)+";"+parseFloat(G.toNumber))),"function"!=typeof d.onFinish||j||E||d.onFinish.call(this,G),"function"!=typeof d.onChange||E||d.onChange.call(this,G),"function"==typeof d.onLoad&&!j&&E&&(d.onLoad.call(this,G),E=!1)},ne=function(){D.addClass("irs-with-grid");var t,e="",o=0,s=0,a="",r=20,n=4;for(t=0;r>=t;t+=1)o=Math.floor(R/r*t),o>=R&&(o=R-1),a+='<span class="irs-grid-pol small" style="left: '+o+'px;"></span>';for(t=0;n>=t;t+=1)o=Math.floor(R/n*t),o>=R&&(o=R-1),a+='<span class="irs-grid-pol" style="left: '+o+'px;"></span>',J?(e=d.min+(d.max-d.min)/n*t,e=e/d.step*d.step,e=parseInt(e*J,10)/J):(e=Math.round(d.min+(d.max-d.min)/n*t),e=Math.round(e/d.step)*d.step,e=b(e)),y&&(d.hideMinMax?(e=Math.round(d.min+(d.max-d.min)/n*t),e=Math.round(e/d.step)*d.step,e=0===t||t===n?d.values[e]:""):e=""),0===t?(s=o,a+='<span class="irs-grid-text" style="left: '+s+'px; text-align: left;">'+e+"</span>"):t===n?(s=o-100,a+='<span class="irs-grid-text" style="left: '+s+'px; text-align: right;">'+e+"</span>"):(s=o-50,a+='<span class="irs-grid-text" style="left: '+s+'px;">'+e+"</span>");A.html(a)},ie=function(){D.addClass("irs-disabled"),D.append(u)},le=function(){D.removeClass("irs-disabled"),D.find(".irs-disable-mask").remove()};U()}})},update:function(t){return this.each(function(){this.updateData(t)})},remove:function(){return this.each(function(){this.removeSlider()})}};t.fn.ionRangeSlider=function(e){return p[e]?p[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist for jQuery.ionRangeSlider"):p.init.apply(this,arguments)}}(jQuery,document,window,navigator);