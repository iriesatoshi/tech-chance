/*
 * ƒuƒƒbƒNŠJ•Âˆ—
 * 2015/12/21 ƒ{ƒ^ƒ“‰æ‘œ‚Ì”ñ•\Ž¦ˆ—‚ðs‚í‚È‚¢
 */
/*
 * Return the classList property of e, if it has one.
 * Otherwise, return an object that simulates the DOMTokenList API for e.
 * The returned object has contains(), add(), remove(), toggle() and toString()
 * methods for testing and altering the set of classes of the element e.
 * If the classList property is natively supported, the returned object is
 * array-like and has length and array index properties. The simulated
 * DOMTokenList is not array-like, but has a toArray() method that returns
 * a true-array snapshot of the element's class names.
 */

function classList(e) {
    if (e.classList) return e.classList;   // Return e.classList if it exists
    else return new CSSClassList(e);       // Otherwise try to fake it
}

// CSSClassList is a JavaScript class that simulates DOMTokenList
function CSSClassList(e) { this.e = e; }

// Return true if e.className contains the class c, false otherwise
CSSClassList.prototype.contains = function(c) {
    // Check that c is a valid class name
    if (c.length === 0 || c.indexOf(" ") != -1)
        throw new Error("Invalid class name: '" + c + "'");
    // Check common cases first
    var classes = this.e.className;
    if (!classes) return false;       // e has no classes at all
    if (classes === c) return true;   // e has one class that matches exactly

    // Otherwise, use a RegExp to search for c as a word by itself
    // \b in a regular expression requires a match at a word boundary.
    return classes.search("\\b" + c + "\\b") != -1;
};

// Add c to the e.className if it is not already present
CSSClassList.prototype.add = function(c) {
    if (this.contains(c)) return;            // Do nothing if already present
    var classes = this.e.className;
    if (classes && classes[classes.length-1] != " ")
        c = " " + c;                         // Add a space if we need one
    this.e.className += c;                   // Add c to the className
};

// Remove all occurrences of c from e.className
CSSClassList.prototype.remove = function(c) {
    // Make sure c is a valid class name
    if (c.length === 0 || c.indexOf(" ") != -1)
        throw new Error("Invalid class name: '" + c + "'");
    // Remove all occurances of c as a word, plus any trailing space
    var pattern = new RegExp("\\b" + c + "\\b\\s*", "g");
    this.e.className = this.e.className.replace(pattern, "");
};

// Add c to e.className if it is not already present and return true.
// Otherwise, remove all occurrences of c from e.className and return false.
CSSClassList.prototype.toggle = function(c) {
    if (this.contains(c)) {  // If e.className contains c
        this.remove(c);      // then remove it.
        return false;
    }
    else {                   // Otherwise:
        this.add(c);         // add it.
        return true;
    }
};

// Return e.className itself
CSSClassList.prototype.toString = function() { return this.e.className; };

// Return of the names in e.className
CSSClassList.prototype.toArray = function() {
    return this.e.className.match(/\b\w+\b/g) || [];
};
function do_onoff(hdr, item)
{
  var e = document.getElementById(hdr);
  var e2 = document.getElementById(item);
  if (e2.style.display == 'none') {
    e2.style.display = '';
    classList(e).remove('close');
    classList(e).add('open');
  } else {
    e2.style.display = 'none';
    classList(e).remove('open');
    classList(e).add('close');
  }
}
function open_close(hdr, item)
{
  var e = document.getElementById(hdr);
  var e2 = document.getElementById(item);
  e.addEventListener("click", function() { do_onoff(hdr, item); }, false);

  classList(e).remove('open');
  classList(e).add('close');
  if (classList(e).contains('open')) {
//    e.style.display = '';
    e2.style.display = '';
  }
  if (classList(e).contains('close')) {
//    e.style.display = '';
    e2.style.display = 'none';
  }

}
function OCisSmartPhone()
{
  return (
    (navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) ||
    navigator.userAgent.indexOf('iPod') > 0 ||
    navigator.userAgent.indexOf('Android') > 0);
}
function OCdisplayWidth()
{
  return window.parent.screen.width;
}
function OCwindowWidth()
{
  if (window.screen.width < window.innerWidth) {
    return window.screen.width;
  }
  return window.innerWidth;
}

/*
 * Roll Image
 *
 * Version 1.0 2012/11/19 Crytus corporation
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 h=0;7 9="";7 i;7 s;7 t=\'\';7 8;7 p=0;7 c;7 u;7 C=6;7 V=4;d v(){3(p){9="5";3(f.j&&b(8.a.5)>(i-t)){8.a.5=b(8.a.5)-h+"w"}k{9="q";l=m("x();",y);H}}n=m("v();",D)}d x(){3(p){9="q";3(f.j&&b(8.a.5)<0){8.a.5=b(8.a.5)+h+"w"}k{9="5";n=m("v();",y);H}}l=m("x();",D)}d I(e){3(c){J(c);c=z}7 A=o.K?K.E:e.E?e.E:"";A-=s-((o.L)?L:f.W.X);7 M=(i-C)/2;7 N=(i+C)/2;3(A>N){h=1;3(o.l)B(l);3(9!="5")v()}k 3(A<M){h=1;3(o.n)B(n);3(9!="q")x()}k{h=0}}d F(O){u=z;9=O}d P(G){3(p){3(f.j){3(9=="5"){3(b(8.a.5)>(i-t)){8.a.5=b(8.a.5)-G+"w"}k{9="";u=m("F(\'q\');",y)}}3(9=="q"){3(b(8.a.5)<0){8.a.5=b(8.a.5)+G+"w"}k{9="";u=m("F(\'5\');",y)}}}}}d Y(Q,R){3(f.j){7 g=f.j(Q);3(g){i=b(g.a.S);s=g.T;7 r=g.U;Z(r!=z){s+=r.T;r=r.U}8=f.j(R);t=b(8.a.S);g.10=d(e){3(o.n)B(n);3(o.l)B(l);9="";3(c){J(c);c=z}};g.11=d(e){I(e)};p=1;9="5";c=12("P(1);",D)}}}',62,65,'|||if||left||var|roll_content|roll_movestate|style|parseInt|roll_timer_init|function||document|roll_body|roll_speed|roll_width|getElementById|else|righttime|setTimeout|lefttime|window|roll_ready|right|parentEl|roll_offset|roll_content_width|roll_time|roll_moveleft|px|roll_moveright|1000|null|curposx|clearTimeout|roll_stop|30|clientX|roll_change|speed|return|roll_motion|clearInterval|event|pageXOffset|leftbound|rightbound|dir|roll_initial|window_id|roll_image|width|offsetLeft|offsetParent|roll_max|body|scrollLeft|roll_images|while|onmousemove|onmouseout|setInterval'.split('|'),0,{}));

// •\Ž¦‘‹‚Æ•\Ž¦“à—e‚ÌID‚ðŽw’è‚µ‚ÄŠJŽn
roll_images("roll_window", "roll_contents");

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/*
 * Simple Slide viewer 1.0
 *
 * Copyright (c) 2011 Crytus corporation All right reserved.
  *
 * IE10‘Î‰ž 2013/07/22
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 b=0;6 c=1;6 s=P;6 t=Q;6 R=10;6 g=-1;4(u.h===n){h=3}4(u.o===n){o=2}4(u.a===n){a=S}6 j=D;/*@T@4(@U==10)j=D;@w j=V;@W@*/y z(v){4(v<=a){6 E=7.8(\'k\').X;6 F=7.8(\'k\').Y;6 Z=v*E/a;6 11=v*F/a;4(j){7.8(\'9\').e.G=\'H(p=\'+(v*12/a)+\')\'}w{7.8(\'9\').e.p=13(v)/a}}}y A(){4(b==0){4((c>=9.B)||(c>=5)){c=0;4(g>0){g--;4(g==0){14}}}4(j){7.8(\'9\').e.G=\'H(p=0)\'}w{7.8(\'9\').e.p=0}7.8(\'k\').l=7.8(\'9\').l;7.8(\'9\').l=9[c];4(7.8(\'m\')){7.8(\'m\').15=m[c]}c++}z(b);b+=1;4(b>=t){b=0;7.8(\'k\').e.16=\'I\';7.8(\'k\').e.17=\'I\'}J(\'A()\',s)}y K(){6 d=7;4(!d.q){d.q=r C()}6 i;L(i=0;i<9.B;i++){d.q[i]=r 18;d.q[i].l=9[i]}}6 9=r C();6 m=r C();6 x;6 f=7.19(\'1a\');L(x=0;x<f.B;x++){4(f[x].1b=="1c"){9.M(f[x].l);4(f[x].N!==n){m.M(f[x].N)}}}4(7.8(\'O\')){g=1d(7.8(\'O\').1e)}b=a;K();z(b);4(h){s=(h*1f)/a;4(o){t=a+(o*a)/h}}J(\'A()\',1);',62,78,'||||if||var|document|getElementById|slide_image|slide_step|slide_count|slide_num||style|items|slide_loop_counter|slide_speed||is_ie|slide_image2|src|slide_link|undefined|slide_stay|opacity|slide_p|new|slide_tick|slide_tick_end|window||else||function|slide_change|slide_timefunc2|length|Array|false|max_width|max_height|filter|alpha|0px|setTimeout|preload_slide|for|push|title|slide_loop|50|150|slide_num_func|200|cc_on|_jscript_version|true|end|width|height|dw||dh|100|parseFloat|return|href|left|top|Image|getElementsByTagName|img|className|slide_file|parseInt|value|1000'.split('|'),0,{}))
