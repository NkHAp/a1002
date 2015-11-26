function siteMainFn() {
    ! function() {
        (function() {
            var t, e, i, n = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                },
                s = [].indexOf || function(t) {
                    for (var e = 0, i = this.length; i > e; e++)
                        if (e in this && this[e] === t) return e;
                    return -1
                };
            e = function() {
                function t() {}
                return t.prototype.extend = function(t, e) {
                    var i, n;
                    for (i in e) n = e[i], null == t[i] && (t[i] = n);
                    return t
                }, t.prototype.isMobile = function(t) {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
                }, t
            }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
                function t() {
                    this.keys = [], this.values = []
                }
                return t.prototype.get = function(t) {
                    var e, i, n, s, o;
                    for (o = this.keys, e = n = 0, s = o.length; s > n; e = ++n)
                        if (i = o[e], i === t) return this.values[e]
                }, t.prototype.set = function(t, e) {
                    var i, n, s, o, a;
                    for (a = this.keys, i = s = 0, o = a.length; o > s; i = ++s)
                        if (n = a[i], n === t) return void(this.values[i] = e);
                    return this.keys.push(t), this.values.push(e)
                }, t
            }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
                function t() {
                    console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
                }
                return t.notSupported = !0, t.prototype.observe = function() {}, t
            }()), this.WOW = function() {
                function o(t) {
                    null == t && (t = {}), this.scrollCallback = n(this.scrollCallback, this), this.scrollHandler = n(this.scrollHandler, this), this.start = n(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new i
                }
                return o.prototype.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0
                }, o.prototype.init = function() {
                    var t;
                    return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = []
                }, o.prototype.start = function() {
                    var e, i, n, s;
                    if (this.stopped = !1, this.boxes = function() {
                            var t, i, n, s;
                            for (n = this.element.querySelectorAll("." + this.config.boxClass), s = [], t = 0, i = n.length; i > t; t++) e = n[t], s.push(e);
                            return s
                        }.call(this), this.all = function() {
                            var t, i, n, s;
                            for (n = this.boxes, s = [], t = 0, i = n.length; i > t; t++) e = n[t], s.push(e);
                            return s
                        }.call(this), this.boxes.length)
                        if (this.disabled()) this.resetStyle();
                        else {
                            for (s = this.boxes, i = 0, n = s.length; n > i; i++) e = s[i], this.applyStyle(e, !0);
                            window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
                        }
                    return this.config.live ? new t(function(t) {
                        return function(e) {
                            var i, n, s, o, a;
                            for (a = [], s = 0, o = e.length; o > s; s++) n = e[s], a.push(function() {
                                var t, e, s, o;
                                for (s = n.addedNodes || [], o = [], t = 0, e = s.length; e > t; t++) i = s[t], o.push(this.doSync(i));
                                return o
                            }.call(t));
                            return a
                        }
                    }(this)).observe(document.body, {
                        childList: !0,
                        subtree: !0
                    }) : void 0
                }, o.prototype.stop = function() {
                    return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
                }, o.prototype.sync = function() {
                    return t.notSupported ? this.doSync(this.element) : void 0
                }, o.prototype.doSync = function(t) {
                    var e, i, n, o, a;
                    if (!this.stopped) {
                        if (null == t && (t = this.element), 1 !== t.nodeType) return;
                        for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), a = [], i = 0, n = o.length; n > i; i++) e = o[i], s.call(this.all, e) < 0 ? (this.applyStyle(e, !0), this.boxes.push(e), this.all.push(e), a.push(this.scrolled = !0)) : a.push(void 0);
                        return a
                    }
                }, o.prototype.show = function(t) {
                    return this.applyStyle(t), t.className = "" + t.className + " " + this.config.animateClass
                }, o.prototype.applyStyle = function(t, e) {
                    var i, n, s;
                    return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), s = t.getAttribute("data-wow-iteration"), this.animate(function(o) {
                        return function() {
                            return o.customStyle(t, e, n, i, s)
                        }
                    }(this))
                }, o.prototype.animate = function() {
                    return "requestAnimationFrame" in window ? function(t) {
                        return window.requestAnimationFrame(t)
                    } : function(t) {
                        return t()
                    }
                }(), o.prototype.resetStyle = function() {
                    var t, e, i, n, s;
                    for (n = this.boxes, s = [], e = 0, i = n.length; i > e; e++) t = n[e], s.push(t.setAttribute("style", "visibility: visible;"));
                    return s
                }, o.prototype.customStyle = function(t, e, i, n, s) {
                    return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                        animationDuration: i
                    }), n && this.vendorSet(t.style, {
                        animationDelay: n
                    }), s && this.vendorSet(t.style, {
                        animationIterationCount: s
                    }), this.vendorSet(t.style, {
                        animationName: e ? "none" : this.cachedAnimationName(t)
                    }), t
                }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
                    var i, n, s, o;
                    o = [];
                    for (i in e) n = e[i], t["" + i] = n, o.push(function() {
                        var e, o, a, r;
                        for (a = this.vendors, r = [], e = 0, o = a.length; o > e; e++) s = a[e], r.push(t["" + s + i.charAt(0).toUpperCase() + i.substr(1)] = n);
                        return r
                    }.call(this));
                    return o
                }, o.prototype.vendorCSS = function(t, e) {
                    var i, n, s, o, a, r;
                    for (n = window.getComputedStyle(t), i = n.getPropertyCSSValue(e), r = this.vendors, o = 0, a = r.length; a > o; o++) s = r[o], i = i || n.getPropertyCSSValue("-" + s + "-" + e);
                    return i
                }, o.prototype.animationName = function(t) {
                    var e;
                    try {
                        e = this.vendorCSS(t, "animation-name").cssText
                    } catch (i) {
                        e = window.getComputedStyle(t).getPropertyValue("animation-name")
                    }
                    return "none" === e ? "" : e
                }, o.prototype.cacheAnimationName = function(t) {
                    return this.animationNameCache.set(t, this.animationName(t))
                }, o.prototype.cachedAnimationName = function(t) {
                    return this.animationNameCache.get(t)
                }, o.prototype.scrollHandler = function() {
                    return this.scrolled = !0
                }, o.prototype.scrollCallback = function() {
                    var t;
                    return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                        var e, i, n, s;
                        for (n = this.boxes, s = [], e = 0, i = n.length; i > e; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : s.push(t));
                        return s
                    }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
                }, o.prototype.offsetTop = function(t) {
                    for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                    for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                    return e
                }, o.prototype.isVisible = function(t) {
                    var e, i, n, s, o;
                    return i = t.getAttribute("data-wow-offset") || this.config.offset, o = window.pageYOffset, s = o + Math.min(this.element.clientHeight, innerHeight) - i, n = this.offsetTop(t), e = n + t.clientHeight, s >= n && e >= o
                }, o.prototype.util = function() {
                    return null != this._util ? this._util : this._util = new e
                }, o.prototype.disabled = function() {
                    return !this.config.mobile && this.util().isMobile(navigator.userAgent)
                }, o
            }()
        }).call(this)
    }(jQuery),
    function($) {
        eval(function(t, e, i, n, s, o) {
            if (s = function(t) {
                    return (e > t ? "" : s(parseInt(t / e))) + ((t %= e) > 35 ? String.fromCharCode(t + 29) : t.toString(36))
                }, !"".replace(/^/, String)) {
                for (; i--;) o[s(i)] = n[i] || s(i);
                n = [function(t) {
                    return o[t]
                }], s = function() {
                    return "\\w+"
                }, i = 1
            }
            for (; i--;) n[i] && (t = t.replace(new RegExp("\\b" + s(i) + "\\b", "g"), n[i]));
            return t
        }('7(F 3v.2K!=="9"){3v.2K=9(e){9 t(){}t.5C=e;q 5B t}}(9(e,t,n,r){b i={1K:9(t,n){b r=c;r.6=e.3F({},e.3g.28.6,t);r.27=t;b i=n;b s=e(n);r.$k=s;r.3G()},3G:9(){b t=c;7(F t.6.2Y==="9"){t.6.2Y.U(c,[t.$k])}7(F t.6.38==="3a"){b n=t.6.38;9 r(e){7(F t.6.3d==="9"){t.6.3d.U(c,[e])}p{b n="";1Z(b r 3x e["h"]){n+=e["h"][r]["1W"]}t.$k.29(n)}t.2R()}e.5w(n,r)}p{t.2R()}},2R:9(e){b t=c;t.$k.A({23:0});t.2n=t.6.v;t.3M();t.5p=0;t.21;t.1L()},1L:9(){b e=c;7(e.$k.1Q().14===0){q d}e.1M();e.3T();e.$V=e.$k.1Q();e.J=e.$V.14;e.3Z();e.$L=e.$k.Z(".h-1W");e.$H=e.$k.Z(".h-1g");e.3e="R";e.1i=0;e.m=0;e.40();e.42()},42:9(){b e=c;e.2H();e.2I();e.4c();e.2L();e.4e();e.4f();e.22();e.4l();7(e.6.2j!==d){e.4o(e.6.2j)}7(e.6.N===j){e.6.N=4I}e.1b();e.$k.Z(".h-1g").A("4D","4E");7(!e.$k.2x(":32")){e.37()}p{e.$k.A("23",1)}e.5j=d;e.2l();7(F e.6.3b==="9"){e.6.3b.U(c,[e.$k])}},2l:9(){b e=c;7(e.6.1J===j){e.1J()}7(e.6.1q===j){e.1q()}7(e.6.2g===j){e.2g()}7(F e.6.3i==="9"){e.6.3i.U(c,[e.$k])}},3j:9(){b e=c;7(F e.6.3l==="9"){e.6.3l.U(c,[e.$k])}e.37();e.2H();e.2I();e.4C();e.2L();e.2l();7(F e.6.3o==="9"){e.6.3o.U(c,[e.$k])}},4B:9(e){b t=c;19(9(){t.3j()},0)},37:9(){b e=c;7(e.$k.2x(":32")===d){e.$k.A({23:0});1a(e.1u);1a(e.21)}p{q d}e.21=4z(9(){7(e.$k.2x(":32")){e.4B();e.$k.4y({23:1},2E);1a(e.21)}},4J)},3Z:9(){b e=c;e.$V.4U(\'<M K="h-1g">\').4u(\'<M K="h-1W"></M>\');e.$k.Z(".h-1g").4u(\'<M K="h-1g-4t">\');e.1D=e.$k.Z(".h-1g-4t");e.$k.A("4D","4E")},1M:9(){b e=c;b t=e.$k.1H(e.6.1M);b n=e.$k.1H(e.6.24);e.$k.w("h-4s",e.$k.2c("2d")).w("h-4r",e.$k.2c("K"));7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.24)}},2H:9(){b t=c;7(t.6.2V===d){q d}7(t.6.4q===j){t.6.v=t.2n=1;t.6.1v=d;t.6.1I=d;t.6.1X=d;t.6.1A=d;t.6.1E=d;q d}b n=e(t.6.4p).1h();7(n>(t.6.1v[0]||t.2n)){t.6.v=t.2n}7(n<=t.6.1v[0]&&t.6.1v!==d){t.6.v=t.6.1v[1]}7(n<=t.6.1I[0]&&t.6.1I!==d){t.6.v=t.6.1I[1]}7(n<=t.6.1X[0]&&t.6.1X!==d){t.6.v=t.6.1X[1]}7(n<=t.6.1A[0]&&t.6.1A!==d){t.6.v=t.6.1A[1]}7(n<=t.6.1E[0]&&t.6.1E!==d){t.6.v=t.6.1E[1]}7(t.6.v>t.J){t.6.v=t.J}},4e:9(){b n=c,r;7(n.6.2V!==j){q d}b i=e(t).1h();n.33=9(){7(e(t).1h()!==i){7(n.6.N!==d){1a(n.1u)}4V(r);r=19(9(){i=e(t).1h();n.3j()},n.6.4n)}};e(t).4m(n.33)},4C:9(){b e=c;7(e.B.1j===j){7(e.D[e.m]>e.2a){e.1k(e.D[e.m])}p{e.1k(0);e.m=0}}p{7(e.D[e.m]>e.2a){e.16(e.D[e.m])}p{e.16(0);e.m=0}}7(e.6.N!==d){e.3f()}},4i:9(){b t=c;b n=0;b r=t.J-t.6.v;t.$L.2h(9(i){b s=e(c);s.A({1h:t.P}).w("h-1W",3k(i));7(i%t.6.v===0||i===r){7(!(i>r)){n+=1}}s.w("h-2y",n)})},4h:9(){b e=c;b t=0;b t=e.$L.14*e.P;e.$H.A({1h:t*2,X:0});e.4i()},2I:9(){b e=c;e.4g();e.4h();e.4b();e.3t()},4g:9(){b e=c;e.P=1P.57(e.$k.1h()/e.6.v)},3t:9(){b e=c;e.E=e.J-e.6.v;b t=e.J*e.P-e.6.v*e.P;t=t*-1;e.2a=t;q t},47:9(){q 0},4b:9(){b e=c;e.D=[0];b t=0;1Z(b n=0;n<e.J;n++){t+=e.P;e.D.58(-t)}},4c:9(){b t=c;7(t.6.25===j||t.6.1t===j){t.G=e(\'<M K="h-59"/>\').5a("5b",!t.B.Y).5d(t.$k)}7(t.6.1t===j){t.3V()}7(t.6.25===j){t.3R()}},3R:9(){b t=c;b n=e(\'<M K="h-5l"/>\');t.G.1e(n);t.1s=e("<M/>",{"K":"h-1o",29:t.6.2P[0]||""});t.1z=e("<M/>",{"K":"h-R",29:t.6.2P[1]||""});n.1e(t.1s).1e(t.1z);n.z("2s.G 2u.G",\'M[K^="h"]\',9(n){n.1r();7(e(c).1H("h-R")){t.R()}p{t.1o()}})},3V:9(){b t=c;t.1p=e(\'<M K="h-1t"/>\');t.G.1e(t.1p);t.1p.z("2s.G 2u.G",".h-1n",9(n){n.1r();7(3k(e(c).w("h-1n"))!==t.m){t.1m(3k(e(c).w("h-1n")),j)}})},3J:9(){b t=c;7(t.6.1t===d){q d}t.1p.29("");b n=0;b r=t.J-t.J%t.6.v;1Z(b i=0;i<t.J;i++){7(i%t.6.v===0){n+=1;7(r===i){b s=t.J-t.6.v}b o=e("<M/>",{"K":"h-1n"});b u=e("<3H></3H>",{5x:t.6.31===j?n:"","K":t.6.31===j?"h-5y":""});o.1e(u);o.w("h-1n",r===i?s:i);o.w("h-2y",n);t.1p.1e(o)}}t.2O()},2O:9(){b t=c;7(t.6.1t===d){q d}t.1p.Z(".h-1n").2h(9(n,r){7(e(c).w("h-2y")===e(t.$L[t.m]).w("h-2y")){t.1p.Z(".h-1n").S("2e");e(c).I("2e")}})},36:9(){b e=c;7(e.6.25===d){q d}7(e.6.2f===d){7(e.m===0&&e.E===0){e.1s.I("15");e.1z.I("15")}p 7(e.m===0&&e.E!==0){e.1s.I("15");e.1z.S("15")}p 7(e.m===e.E){e.1s.S("15");e.1z.I("15")}p 7(e.m!==0&&e.m!==e.E){e.1s.S("15");e.1z.S("15")}}},2L:9(){b e=c;e.3J();e.36();7(e.G){7(e.6.v===e.J){e.G.3E()}p{e.G.3B()}}},5A:9(){b e=c;7(e.G){e.G.3c()}},R:9(e){b t=c;7(t.1S){q d}t.1T=t.m;t.m+=t.6.1U===j?t.6.v:1;7(t.m>t.E+(t.6.1U==j?t.6.v-1:0)){7(t.6.2f===j){t.m=0;e="2m"}p{t.m=t.E;q d}}t.1m(t.m,e)},1o:9(e){b t=c;7(t.1S){q d}t.1T=t.m;7(t.6.1U===j&&t.m>0&&t.m<t.6.v){t.m=0}p{t.m-=t.6.1U===j?t.6.v:1}7(t.m<0){7(t.6.2f===j){t.m=t.E;e="2m"}p{t.m=0;q d}}t.1m(t.m,e)},1m:9(e,t,n){b r=c;7(r.1S){q d}r.3h();7(F r.6.1V==="9"){r.6.1V.U(c,[r.$k])}7(e>=r.E){e=r.E}p 7(e<=0){e=0}r.m=r.h.m=e;7(r.6.2j!==d&&n!=="4w"&&r.6.v===1&&r.B.1j===j){r.1x(0);7(r.B.1j===j){r.1k(r.D[e])}p{r.16(r.D[e],1)}r.3z();r.2q();q d}b i=r.D[e];7(r.B.1j===j){r.1Y=d;7(t===j){r.1x("1y");19(9(){r.1Y=j},r.6.1y)}p 7(t==="2m"){r.1x(r.6.2t);19(9(){r.1Y=j},r.6.2t)}p{r.1x("1f");19(9(){r.1Y=j},r.6.1f)}r.1k(i)}p{7(t===j){r.16(i,r.6.1y)}p 7(t==="2m"){r.16(i,r.6.2t)}p{r.16(i,r.6.1f)}}r.2q()},3h:9(){b e=c;e.1i=e.h.1i=e.1T===r?e.m:e.1T;e.1T=r},3r:9(e){b t=c;t.3h();7(F t.6.1V==="9"){t.6.1V.U(c,[t.$k])}7(e>=t.E||e===-1){e=t.E}p 7(e<=0){e=0}t.1x(0);7(t.B.1j===j){t.1k(t.D[e])}p{t.16(t.D[e],1)}t.m=t.h.m=e;t.2q()},2q:9(){b e=c;e.2O();e.36();e.2l();7(F e.6.3s==="9"){e.6.3s.U(c,[e.$k])}7(e.6.N!==d){e.3f()}},W:9(){b e=c;e.3u="W";1a(e.1u)},3f:9(){b e=c;7(e.3u!=="W"){e.1b()}},1b:9(){b e=c;e.3u="1b";7(e.6.N===d){q d}1a(e.1u);e.1u=4z(9(){e.R(j)},e.6.N)},1x:9(e){b t=c;7(e==="1f"){t.$H.A(t.2w(t.6.1f))}p 7(e==="1y"){t.$H.A(t.2w(t.6.1y))}p 7(F e!=="3a"){t.$H.A(t.2w(e))}},2w:9(e){b t=c;q{"-1G-1d":"2p "+e+"1w 2i","-1R-1d":"2p "+e+"1w 2i","-o-1d":"2p "+e+"1w 2i",1d:"2p "+e+"1w 2i"}},3C:9(){q{"-1G-1d":"","-1R-1d":"","-o-1d":"",1d:""}},3D:9(e){q{"-1G-O":"1l("+e+"T, C, C)","-1R-O":"1l("+e+"T, C, C)","-o-O":"1l("+e+"T, C, C)","-1w-O":"1l("+e+"T, C, C)",O:"1l("+e+"T, C,C)"}},1k:9(e){b t=c;t.$H.A(t.3D(e))},3I:9(e){b t=c;t.$H.A({X:e})},16:9(e,t){b n=c;n.26=d;n.$H.W(j,j).4y({X:e},{5r:t||n.6.1f,3L:9(){n.26=j}})},3M:9(){b e=c;b r="1l(C, C, C)",i=n.5q("M");i.2d.3N="  -1R-O:"+r+"; -1w-O:"+r+"; -o-O:"+r+"; -1G-O:"+r+"; O:"+r;b s=/1l\\(C, C, C\\)/g,o=i.2d.3N.5n(s),u=o!==18&&o.14===1;b a="4F"3x t||5h.5e;e.B={1j:u,Y:a}},4f:9(){b e=c;7(e.6.1C!==d||e.6.1B!==d){e.3X();e.3Y()}},3T:9(){b e=c;b t=["s","e","x"];e.13={};7(e.6.1C===j&&e.6.1B===j){t=["41.h 2b.h","2A.h 44.h","2s.h 45.h 2u.h"]}p 7(e.6.1C===d&&e.6.1B===j){t=["41.h","2A.h","2s.h 45.h"]}p 7(e.6.1C===j&&e.6.1B===d){t=["2b.h","44.h","2u.h"]}e.13["46"]=t[0];e.13["2z"]=t[1];e.13["3w"]=t[2]},3Y:9(){b t=c;t.$k.z("55.h",9(e){e.1r()});t.$k.z("2b.4a",9(t){q e(t.1c).2x("54, 52, 51, 4Y")})},3X:9(){9 o(e){7(e.3p){q{x:e.3p[0].3m,y:e.3p[0].4j}}p{7(e.3m!==r){q{x:e.3m,y:e.4j}}p{q{x:e.4X,y:e.4W}}}}9 u(t){7(t==="z"){e(n).z(i.13["2z"],f);e(n).z(i.13["3w"],l)}p 7(t==="Q"){e(n).Q(i.13["2z"]);e(n).Q(i.13["3w"])}}9 a(n){b n=n.35||n||t.34;7(i.26===d&&!i.6.30){q d}7(i.1Y===d&&!i.6.30){q d}7(i.6.N!==d){1a(i.1u)}7(i.B.Y!==j&&!i.$H.1H("2W")){i.$H.I("2W")}i.11=0;i.12=0;e(c).A(i.3C());b r=e(c).2k();s.2J=r.X;s.2G=o(n).x-r.X;s.2F=o(n).y-r.4H;u("z");s.2o=d;s.2C=n.1c||n.4A}9 f(r){b r=r.35||r||t.34;i.11=o(r).x-s.2G;i.3q=o(r).y-s.2F;i.12=i.11-s.2J;7(F i.6.3n==="9"&&s.39!==j&&i.12!==0){s.39=j;i.6.3n.U(c)}7(i.12>8||i.12<-8&&i.B.Y===j){r.1r?r.1r():r.4G=d;s.2o=j}7((i.3q>10||i.3q<-10)&&s.2o===d){e(n).Q("2A.h")}b u=9(){q i.12/5};b a=9(){q i.2a+i.12/5};i.11=1P.3t(1P.47(i.11,u()),a());7(i.B.1j===j){i.1k(i.11)}p{i.3I(i.11)}}9 l(n){b n=n.35||n||t.34;n.1c=n.1c||n.4A;s.39=d;7(i.B.Y!==j){i.$H.S("2W")}7(i.12!==0){b r=i.4x();i.1m(r,d,"4w");7(s.2C===n.1c&&i.B.Y!==j){e(n.1c).z("2X.3y",9(t){t.4K();t.4L();t.1r();e(n.1c).Q("2X.3y")});b o=e.4M(n.1c,"4N")["2X"];b a=o.4O();o.4P(0,0,a)}}u("Q")}b i=c;b s={2G:0,2F:0,4Q:0,2J:0,2k:18,4R:18,4S:18,2o:18,4T:18,2C:18};i.26=j;i.$k.z(i.13["46"],".h-1g",a)},4x:9(){b e=c,t;b t=e.4v();7(t>e.E){e.m=e.E;t=e.E}p 7(e.11>=0){t=0;e.m=0}q t},4v:9(){b t=c;b n=t.D;b r=t.11;b i=18;e.2h(n,9(e,s){7(r-t.P/20>n[e+1]&&r-t.P/20<s&&t.2Q()==="X"){i=s;t.m=e}p 7(r+t.P/20<s&&r+t.P/20>n[e+1]&&t.2Q()==="4k"){i=n[e+1];t.m=e+1}});q t.m},2Q:9(){b e=c,t;7(e.12<0){t="4k";e.3e="R"}p{t="X";e.3e="1o"}q t},40:9(){b e=c;e.$k.z("h.R",9(){e.R()});e.$k.z("h.1o",9(){e.1o()});e.$k.z("h.1b",9(t,n){e.6.N=n;e.1b();e.2N="1b"});e.$k.z("h.W",9(){e.W();e.2N="W"});e.$k.z("h.1m",9(t,n){e.1m(n)});e.$k.z("h.3r",9(t,n){e.3r(n)})},22:9(){b e=c;7(e.6.22===j&&e.B.Y!==j&&e.6.N!==d){e.$k.z("4Z",9(){e.W()});e.$k.z("50",9(){7(e.2N!=="W"){e.1b()}})}},1J:9(){b t=c;7(t.6.1J===d){q d}1Z(b n=0;n<t.J;n++){b i=e(t.$L[n]);7(i.w("h-17")==="17"){4d}b s=i.w("h-1W"),o=i.Z(".53"),u;7(F o.w("2r")!=="3a"){i.w("h-17","17");4d}7(i.w("h-17")===r){o.3E();i.I("49").w("h-17","56")}7(t.6.48===j){u=s>=t.m}p{u=j}7(u&&s<t.m+t.6.v&&o.14){t.43(i,o)}}},43:9(e,t){9 i(){r+=1;7(n.2D(t.2B(0))){s()}p 7(r<=2v){19(i,2v)}p{s()}}9 s(){e.w("h-17","17").S("49");t.5c("w-2r");n.6.3W==="3U"?t.5f(5g):t.3B()}b n=c,r=0;t[0].2r=t.w("2r");i()},1q:9(){9 s(){i+=1;7(t.2D(n.2B(0))){o()}p 7(i<=2v){19(s,2v)}p{t.1D.A("2S","")}}9 o(){b n=e(t.$L[t.m]).2S();t.1D.A("2S",n+"T");7(!t.1D.1H("1q")){19(9(){t.1D.I("1q")},0)}}b t=c;b n=e(t.$L[t.m]).Z("5i");7(n.2B(0)!==r){b i=0;s()}p{o()}},2D:9(e){7(!e.3L){q d}7(F e.3S!=="5k"&&e.3S==0){q d}q j},2g:9(){b t=c;t.$L.S("2e");1Z(b n=t.m;n<t.m+t.6.v;n++){e(t.$L[n]).I("2e")}},4o:9(e){b t=c;t.3Q="h-"+e+"-5m";t.3P="h-"+e+"-3x"},3z:9(){9 u(e,t){q{2k:"5o",X:e+"T"}}b e=c;e.1S=j;b t=e.3Q,n=e.3P,r=e.$L.1O(e.m),i=e.$L.1O(e.1i),s=1P.3O(e.D[e.m])+e.D[e.1i],o=1P.3O(e.D[e.m])+e.P/2;e.$H.I("h-1F").A({"-1G-O-1F":o+"T","-1R-3K-1F":o+"T","3K-1F":o+"T"});b a="5s 5t 5u 5v";i.A(u(s,10)).I(t).z(a,9(){e.2T=j;i.Q(a);e.2U(i,t)});r.I(n).z(a,9(){e.2Z=j;r.Q(a);e.2U(r,n)})},2U:9(e,t){b n=c;e.A({2k:"",X:""}).S(t);7(n.2T&&n.2Z){n.$H.S("h-1F");n.2T=d;n.2Z=d;n.1S=d}},4l:9(){b e=c;e.h={27:e.27,5z:e.$k,V:e.$V,L:e.$L,m:e.m,1i:e.1i,Y:e.B.Y,B:e.B}},3A:9(){b r=c;r.$k.Q(".h h 2b.4a");e(n).Q(".h h");e(t).Q("4m",r.33)},1N:9(){b e=c;7(e.$k.1Q().14!==0){e.$H.2M();e.$V.2M().2M();7(e.G){e.G.3c()}}e.3A();e.$k.2c("2d",e.$k.w("h-4s")||"").2c("K",e.$k.w("h-4r"))},5D:9(){b e=c;e.W();1a(e.21);e.1N();e.$k.5E()},5F:9(t){b n=c;b r=e.3F({},n.27,t);n.1N();n.1K(r,n.$k)},5G:9(e,t){b n=c,i;7(!e){q d}7(n.$k.1Q().14===0){n.$k.1e(e);n.1L();q d}n.1N();7(t===r||t===-1){i=-1}p{i=t}7(i>=n.$V.14||i===-1){n.$V.1O(-1).5H(e)}p{n.$V.1O(i).5I(e)}n.1L()},5J:9(e){b t=c,n;7(t.$k.1Q().14===0){q d}7(e===r||e===-1){n=-1}p{n=e}t.1N();t.$V.1O(n).3c();t.1L()}};e.3g.28=9(t){q c.2h(9(){7(e(c).w("h-1K")===j){q d}e(c).w("h-1K",j);b n=3v.2K(i);n.1K(t,c);e.w(c,"28",n)})};e.3g.28.6={v:5,1v:[5K,4],1I:[5L,3],1X:[5M,2],1A:d,1E:[5N,1],4q:d,1f:2E,1y:5O,2t:5P,N:d,22:d,25:d,2P:["1o","R"],2f:j,1U:d,1t:j,31:d,2V:j,4n:2E,4p:t,1M:"h-5Q",24:"h-24",1J:d,48:j,3W:"3U",1q:d,38:d,3d:d,30:j,1C:j,1B:j,2g:d,2j:d,3l:d,3o:d,2Y:d,3b:d,1V:d,3s:d,3i:d,3n:d}})(5R,5S,5T)', 62, 366, "||||||options|if||function||var|this|false||||owl||true|elem||currentItem|||else|return|||||items|data|||on|css|browser|0px|positionsInArray|maximumItem|typeof|owlControls|owlWrapper|addClass|itemsAmount|class|owlItems|div|autoPlay|transform|itemWidth|off|next|removeClass|px|apply|userItems|stop|left|isTouch|find||newPosX|newRelativeX|ev_types|length|disabled|css2slide|loaded|null|setTimeout|clearInterval|play|target|transition|append|slideSpeed|wrapper|width|prevItem|support3d|transition3d|translate3d|goTo|page|prev|paginationWrapper|autoHeight|preventDefault|buttonPrev|pagination|autoPlayInterval|itemsDesktop|ms|swapSpeed|paginationSpeed|buttonNext|itemsTabletSmall|touchDrag|mouseDrag|wrapperOuter|itemsMobile|origin|webkit|hasClass|itemsDesktopSmall|lazyLoad|init|setVars|baseClass|unWrap|eq|Math|children|moz|isTransition|storePrevItem|scrollPerPage|beforeMove|item|itemsTablet|isCss3Finish|for||checkVisible|stopOnHover|opacity|theme|navigation|isCssFinish|userOptions|owlCarousel|html|maximumPixels|mousedown|attr|style|active|rewindNav|addClassActive|each|ease|transitionStyle|position|eachMoveUpdate|rewind|orignalItems|sliding|all|afterGo|src|touchend|rewindSpeed|mouseup|100|addCssSpeed|is|roundPages|move|touchmove|get|targetElement|completeImg|200|offsetY|offsetX|updateItems|calculateAll|relativePos|create|updateControls|unwrap|hoverStatus|checkPagination|navigationText|moveDirection|logIn|height|endPrev|clearTransStyle|responsive|grabbing|click|beforeInit|endCurrent|dragBeforeAnimFinish|paginationNumbers|visible|resizer|event|originalEvent|checkNavigation|watchVisibility|jsonPath|dragging|string|afterInit|remove|jsonSuccess|playDirection|checkAp|fn|getPrevItem|afterAction|updateVars|Number|beforeUpdate|pageX|startDragging|afterUpdate|touches|newPosY|jumpTo|afterMove|max|apStatus|Object|end|in|disable|singleItemTransition|clearEvents|show|removeTransition|doTranslate|hide|extend|loadContent|span|css2move|updatePagination|perspective|complete|checkBrowser|cssText|abs|inClass|outClass|buildButtons|naturalWidth|eventTypes|fade|buildPagination|lazyEffect|gestures|disabledEvents|wrapItems|customEvents|touchstart|onStartup|lazyPreload|mousemove|touchcancel|start|min|lazyFollow|loading|disableTextSelect|loops|buildControls|continue|response|moveEvents|calculateWidth|appendWrapperSizes|appendItemsSizes|pageY|right|owlStatus|resize|responsiveRefreshRate|transitionTypes|responsiveBaseWidth|singleItem|originalClasses|originalStyles|outer|wrap|improveClosest|drag|getNewPosition|animate|setInterval|srcElement|reload|updatePosition|display|block|ontouchstart|returnValue|top|5e3|500|stopImmediatePropagation|stopPropagation|_data|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|wrapAll|clearTimeout|clientY|clientX|option|mouseover|mouseout|select|textarea|lazyOwl|input|dragstart|checked|round|push|controls|toggleClass|clickable|removeAttr|appendTo|msMaxTouchPoints|fadeIn|400|navigator|img|onstartup|undefined|buttons|out|match|relative|wrapperWidth|createElement|duration|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|text|numbers|baseElement|destroyControls|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document".split("|"), 0, {}))
    }(jQuery),
    function(t) {
        ! function(e, i, n, s) {
            n.swipebox = function(o, a) {
                var r = {
                        useCSS: !0,
                        hideBarsDelay: 3e3
                    },
                    l = this,
                    h = n(o),
                    o = o,
                    c = o.selector,
                    d = n(c),
                    u = i.createTouch !== s || "ontouchstart" in e || "onmsgesturechange" in e || navigator.msMaxTouchPoints,
                    p = !!e.SVGSVGElement,
                    f = '<div id="swipebox-overlay">                    <div id="swipebox-slider"></div>                    <div id="swipebox-caption"></div>                   <div id="swipebox-action">                      <a id="swipebox-close"></a>                     <a id="swipebox-prev"></a>                      <a id="swipebox-next"></a>                  </div>          </div>';
                l.settings = {}, l.init = function() {
                    l.settings = n.extend({}, r, a), d.click(function(t) {
                        t.preventDefault(), t.stopPropagation(), index = h.index(n(this)), g.target = n(t.target), g.init(index)
                    })
                };
                var g = {
                    init: function(t) {
                        this.target.trigger("swipebox-start"), this.build(), this.openSlide(t), this.openImg(t), this.preloadImg(t + 1), this.preloadImg(t - 1)
                    },
                    build: function() {
                        var t = this;
                        if (n("body").append(f), t.doCssTrans() && (n("#swipebox-slider").css({
                                "-webkit-transition": "left 0.4s ease",
                                "-moz-transition": "left 0.4s ease",
                                "-o-transition": "left 0.4s ease",
                                "-khtml-transition": "left 0.4s ease",
                                transition: "left 0.4s ease"
                            }), n("#swipebox-overlay").css({
                                "-webkit-transition": "opacity 1s ease",
                                "-moz-transition": "opacity 1s ease",
                                "-o-transition": "opacity 1s ease",
                                "-khtml-transition": "opacity 1s ease",
                                transition: "opacity 1s ease"
                            }), n("#swipebox-action, #swipebox-caption").css({
                                "-webkit-transition": "0.5s",
                                "-moz-transition": "0.5s",
                                "-o-transition": "0.5s",
                                "-khtml-transition": "0.5s",
                                transition: "0.5s"
                            })), p) {
                            var i = n("#swipebox-action #swipebox-close").css("background-image");
                            i = i.replace("png", "svg"), n("#swipebox-action #swipebox-prev,#swipebox-action #swipebox-next,#swipebox-action #swipebox-close").css({
                                "background-image": i
                            })
                        }
                        h.each(function() {
                            n("#swipebox-slider").append('<div class="slide"></div>')
                        }), t.setDim(), t.actions(), t.keyboard(), t.gesture(), t.animBars(), n(e).resize(function() {
                            t.setDim()
                        }).resize()
                    },
                    setDim: function() {
                        var t = {
                            width: n(e).width(),
                            height: e.innerHeight ? e.innerHeight : n(e).height()
                        };
                        n("#swipebox-overlay").css(t)
                    },
                    supportTransition: function() {
                        for (var t = "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" "), e = 0; e < t.length; e++)
                            if (i.createElement("div").style[t[e]] !== s) return t[e];
                        return !1
                    },
                    doCssTrans: function() {
                        return l.settings.useCSS && this.supportTransition() ? !0 : void 0
                    },
                    gesture: function() {
                        if (u) {
                            var t = this,
                                e = null,
                                i = 10,
                                s = {},
                                o = {},
                                a = n("#swipebox-caption, #swipebox-action");
                            a.addClass("visible-bars"), t.setTimeout(), n("body").bind("touchstart", function(t) {
                                return n(this).addClass("touching"), o = t.originalEvent.targetTouches[0], s.pageX = t.originalEvent.targetTouches[0].pageX, n(".touching").bind("touchmove", function(t) {
                                    t.preventDefault(), t.stopPropagation(), o = t.originalEvent.targetTouches[0]
                                }), !1
                            }).bind("touchend", function(r) {
                                r.preventDefault(), r.stopPropagation(), e = o.pageX - s.pageX, e >= i ? t.getPrev() : -i >= e ? t.getNext() : a.hasClass("visible-bars") ? (t.clearTimeout(), t.hideBars()) : (t.showBars(), t.setTimeout()), n(".touching").off("touchmove").removeClass("touching")
                            })
                        }
                    },
                    setTimeout: function() {
                        if (l.settings.hideBarsDelay > 0) {
                            var t = this;
                            t.clearTimeout(), t.timeout = e.setTimeout(function() {
                                t.hideBars()
                            }, l.settings.hideBarsDelay)
                        }
                    },
                    clearTimeout: function() {
                        e.clearTimeout(this.timeout), this.timeout = null
                    },
                    showBars: function() {
                        var t = n("#swipebox-caption, #swipebox-action");
                        this.doCssTrans() ? t.addClass("visible-bars") : (n("#swipebox-caption").animate({
                            top: 0
                        }, 500), n("#swipebox-action").animate({
                            bottom: 0
                        }, 500), setTimeout(function() {
                            t.addClass("visible-bars")
                        }, 1e3))
                    },
                    hideBars: function() {
                        var t = n("#swipebox-caption, #swipebox-action");
                        this.doCssTrans() ? t.removeClass("visible-bars") : (n("#swipebox-caption").animate({
                            top: "-50px"
                        }, 500), n("#swipebox-action").animate({
                            bottom: "-50px"
                        }, 500), setTimeout(function() {
                            t.removeClass("visible-bars")
                        }, 1e3))
                    },
                    animBars: function() {
                        var t = this,
                            e = n("#swipebox-caption, #swipebox-action");
                        e.addClass("visible-bars"), t.setTimeout(), n("#swipebox-slider").click(function() {
                            e.hasClass("visible-bars") || (t.showBars(), t.setTimeout())
                        }), n("#swipebox-action").hover(function() {
                            t.showBars(), e.addClass("force-visible-bars"), t.clearTimeout()
                        }, function() {
                            e.removeClass("force-visible-bars"), t.setTimeout()
                        })
                    },
                    keyboard: function() {
                        var t = this;
                        n(e).bind("keyup", function(e) {
                            e.preventDefault(), e.stopPropagation(), 37 == e.keyCode ? t.getPrev() : 39 == e.keyCode ? t.getNext() : 27 == e.keyCode && t.closeSlide()
                        })
                    },
                    actions: function() {
                        var e = this;
                        h.length < 2 ? n("#swipebox-prev, #swipebox-next").hide() : (n("#swipebox-prev").bind("click touchend", function(t) {
                            t.preventDefault(), t.stopPropagation(), e.getPrev(), e.setTimeout()
                        }), n("#swipebox-next").bind("click touchend", function(t) {
                            t.preventDefault(), t.stopPropagation(), e.getNext(), e.setTimeout()
                        })), n("#swipebox-close").bind("click touchend", function() {
                            e.closeSlide(), t(".gallery").delay(1).show(0), t(".portfolio-wide").delay(1).show(0)
                        })
                    },
                    setSlide: function(t, e) {
                        e = e || !1;
                        var i = n("#swipebox-slider");
                        this.doCssTrans() ? i.css({
                            left: 100 * -t + "%"
                        }) : i.animate({
                            left: 100 * -t + "%"
                        }), n("#swipebox-slider .slide").removeClass("current"), n("#swipebox-slider .slide").eq(t).addClass("current"), this.setTitle(t), e && i.fadeIn(), n("#swipebox-prev, #swipebox-next").removeClass("disabled"), 0 == t ? n("#swipebox-prev").addClass("disabled") : t == h.length - 1 && n("#swipebox-next").addClass("disabled")
                    },
                    openSlide: function(t) {
                        n("html").addClass("swipebox"), n(e).trigger("resize"), this.setSlide(t, !0)
                    },
                    preloadImg: function(t) {
                        var e = this;
                        setTimeout(function() {
                            e.openImg(t)
                        }, 1e3)
                    },
                    openImg: function(t) {
                        var e = this;
                        return 0 > t || t >= h.length ? !1 : void e.loadImg(h.eq(t).attr("href"), function() {
                            n("#swipebox-slider .slide").eq(t).html(this)
                        })
                    },
                    setTitle: function(t) {
                        n("#swipebox-caption").empty(), h.eq(t).attr("title") && n("#swipebox-caption").append(h.eq(t).attr("title"))
                    },
                    loadImg: function(t, e) {
                        var i = n("<img>").on("load", function() {
                            e.call(i)
                        });
                        i.attr("src", t)
                    },
                    getNext: function() {
                        var t = this;
                        index = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current")), index + 1 < h.length ? (index++, t.setSlide(index), t.preloadImg(index + 1)) : (n("#swipebox-slider").addClass("rightSpring"), setTimeout(function() {
                            n("#swipebox-slider").removeClass("rightSpring")
                        }, 500))
                    },
                    getPrev: function() {
                        var t = this;
                        index = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current")), index > 0 ? (index--, t.setSlide(index), t.preloadImg(index - 1)) : (n("#swipebox-slider").addClass("leftSpring"), setTimeout(function() {
                            n("#swipebox-slider").removeClass("leftSpring")
                        }, 500))
                    },
                    closeSlide: function() {
                        var t = this;
                        n(e).trigger("resize"), n("html").removeClass("swipebox"), t.destroy()
                    },
                    destroy: function() {
                        var t = this;
                        n(e).unbind("keyup"), n("body").unbind("touchstart"), n("body").unbind("touchmove"), n("body").unbind("touchend"), n("#swipebox-slider").unbind(), n("#swipebox-overlay").remove(), h.removeData("_swipebox"), t.target.trigger("swipebox-destroy")
                    }
                };
                l.init()
            }, n.fn.swipebox = function(t) {
                if (!n.data(this, "_swipebox")) {
                    var e = new n.swipebox(this, t);
                    this.data("_swipebox", e)
                }
            }
        }(window, document, jQuery)
    }(jQuery),
    function(t) {
        var e = {
            upKey: 38,
            downKey: 40,
            easing: "linear",
            scrollTime: 600,
            activeClass: "active",
            onPageChange: null,
            topOffset: 0
        };
        t.scrollIt = function(i) {
            var n = t.extend(e, i),
                s = 0,
                o = t("[data-scroll-index]:last").attr("data-scroll-index"),
                a = function(e) {
                    if (!(0 > e || e > o)) {
                        var i = t("[data-scroll-index=" + e + "]").offset().top + n.topOffset + 1;
                        t("html,body").animate({
                            scrollTop: i
                        }, n.scrollTime, n.easing)
                    }
                },
                r = function(e) {
                    var i = t(e.target).closest("[data-scroll-nav]").attr("data-scroll-nav") || t(e.target).closest("[data-scroll-goto]").attr("data-scroll-goto");
                    a(parseInt(i))
                },
                l = function(e) {
                    var i = e.which;
                    return !t("html,body").is(":animated") || i != n.upKey && i != n.downKey ? i == n.upKey && s > 0 ? (a(parseInt(s) - 1), !1) : i == n.downKey && o > s ? (a(parseInt(s) + 1), !1) : !0 : !1
                },
                h = function(e) {
                    n.onPageChange && e && s != e && n.onPageChange(e), s = e, t("[data-scroll-nav]").removeClass(n.activeClass), t("[data-scroll-nav=" + e + "]").addClass(n.activeClass)
                },
                c = function() {
                    var e = t(window).scrollTop(),
                        i = t("[data-scroll-index]").filter(function(i, s) {
                            return e >= t(s).offset().top + n.topOffset && e < t(s).offset().top + n.topOffset + t(s).outerHeight()
                        }),
                        s = i.first().attr("data-scroll-index");
                    h(s)
                };
            t(window).on("scroll", c).scroll(), t(window).on("keydown", l), t("body").on("click", "[data-scroll-nav], [data-scroll-goto]", function(t) {
                t.preventDefault(), r(t)
            })
        }
    }(jQuery),
    function() {
        (function(t, e) {
            "use strict";
            var i = i || function(i) {
                var n = {
                        dragger: null,
                        disable: "",
                        addBodyClasses: !0,
                        hyperextensible: !0,
                        resistance: .5,
                        flickThreshold: 50,
                        transitionSpeed: .35,
                        easing: "ease-in-out",
                        maxPosition: 266,
                        minPosition: -266,
                        tapToClose: !1,
                        touchToDrag: !1,
                        slideIntent: 40,
                        minDragDistance: 5
                    },
                    s = {
                        simpleStates: {
                            opening: null,
                            towards: null,
                            hyperExtending: null,
                            halfway: null,
                            flick: null,
                            translation: {
                                absolute: 0,
                                relative: 0,
                                sinceDirectionChange: 0,
                                percentage: 0
                            }
                        }
                    },
                    o = {},
                    a = {
                        hasTouch: null === e.ontouchstart,
                        eventType: function(t) {
                            var e = {
                                down: a.hasTouch ? "touchstart" : "mousedown",
                                move: a.hasTouch ? "touchmove" : "mousemove",
                                up: a.hasTouch ? "touchend" : "mouseup",
                                out: a.hasTouch ? "touchcancel" : "mouseout"
                            };
                            return e[t]
                        },
                        page: function(t, e) {
                            return a.hasTouch && e.touches.length && e.touches[0] ? e.touches[0]["page" + t] : e["page" + t]
                        },
                        klass: {
                            has: function(t, e) {
                                return -1 !== t.className.indexOf(e)
                            },
                            add: function(t, e) {
                                !a.klass.has(t, e) && n.addBodyClasses && (t.className += " " + e)
                            },
                            remove: function(t, e) {
                                n.addBodyClasses && (t.className = t.className.replace(e, "").replace(/^\s+|\s+$/g, ""))
                            }
                        },
                        dispatchEvent: function(t) {
                            return "function" == typeof o[t] ? o[t].call() : void 0
                        },
                        vendor: function() {
                            var t, i = e.createElement("div"),
                                n = "webkit Moz O ms".split(" ");
                            for (t in n)
                                if ("undefined" != typeof i.style[n[t] + "Transition"]) return n[t]
                        },
                        transitionCallback: function() {
                            return "Moz" === s.vendor || "ms" === s.vendor ? "transitionend" : s.vendor + "TransitionEnd"
                        },
                        canTransform: function() {
                            return "undefined" != typeof n.element.style[s.vendor + "Transform"]
                        },
                        deepExtend: function(t, e) {
                            var i;
                            for (i in e) e[i] && e[i].constructor && e[i].constructor === Object ? (t[i] = t[i] || {}, a.deepExtend(t[i], e[i])) : t[i] = e[i];
                            return t
                        },
                        angleOfDrag: function(t, e) {
                            var i, n;
                            return n = Math.atan2(-(s.startDragY - e), s.startDragX - t), 0 > n && (n += 2 * Math.PI), i = Math.floor(n * (180 / Math.PI) - 180), 0 > i && i > -180 && (i = 360 - Math.abs(i)), Math.abs(i)
                        },
                        events: {
                            addEvent: function(t, e, i) {
                                return t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent ? t.attachEvent("on" + e, i) : void 0
                            },
                            removeEvent: function(t, e, i) {
                                return t.addEventListener ? t.removeEventListener(e, i, !1) : t.attachEvent ? t.detachEvent("on" + e, i) : void 0
                            },
                            prevent: function(t) {
                                t.preventDefault ? t.preventDefault() : t.returnValue = !1
                            }
                        },
                        parentUntil: function(t, e) {
                            for (var i = "string" == typeof e; t.parentNode;) {
                                if (i && t.getAttribute && t.getAttribute(e)) return t;
                                if (!i && t === e) return t;
                                t = t.parentNode
                            }
                            return null
                        }
                    },
                    r = {
                        translate: {
                            get: {
                                matrix: function(e) {
                                    if (a.canTransform()) {
                                        var i = t.getComputedStyle(n.element)[s.vendor + "Transform"].match(/\((.*)\)/),
                                            o = 8;
                                        return i ? (i = i[1].split(","), 16 === i.length && (e += o), parseInt(i[e], 10)) : 0
                                    }
                                    return parseInt(n.element.style.left, 10)
                                }
                            },
                            easeCallback: function() {
                                n.element.style[s.vendor + "Transition"] = "", s.translation = r.translate.get.matrix(4), s.easing = !1, clearInterval(s.animatingInterval), 0 === s.easingTo && (a.klass.remove(e.body, "snapjs-right"), a.klass.remove(e.body, "snapjs-left")), a.dispatchEvent("animated"), a.events.removeEvent(n.element, a.transitionCallback(), r.translate.easeCallback)
                            },
                            easeTo: function(t) {
                                a.canTransform() ? (s.easing = !0, s.easingTo = t, n.element.style[s.vendor + "Transition"] = "all " + n.transitionSpeed + "s " + n.easing, s.animatingInterval = setInterval(function() {
                                    a.dispatchEvent("animating")
                                }, 1), a.events.addEvent(n.element, a.transitionCallback(), r.translate.easeCallback), r.translate.x(t)) : (s.translation = t, r.translate.x(t)), 0 === t && (n.element.style[s.vendor + "Transform"] = "")
                            },
                            x: function(i) {
                                if (!("left" === n.disable && i > 0 || "right" === n.disable && 0 > i))
                                    if (n.hyperextensible || (i === n.maxPosition || i > n.maxPosition ? i = n.maxPosition : (i === n.minPosition || i < n.minPosition) && (i = n.minPosition)), i = parseInt(i, 10), isNaN(i) && (i = 0), a.canTransform()) {
                                        var o = "translate3d(" + i + "px, 0,0)";
                                        n.element.style[s.vendor + "Transform"] = o
                                    } else n.element.style.width = (t.innerWidth || e.documentElement.clientWidth) + "px", n.element.style.left = i + "px", n.element.style.right = ""
                            }
                        },
                        drag: {
                            listen: function() {
                                s.translation = 0, s.easing = !1, a.events.addEvent(n.element, a.eventType("down"), r.drag.startDrag), a.events.addEvent(n.element, a.eventType("move"), r.drag.dragging), a.events.addEvent(n.element, a.eventType("up"), r.drag.endDrag)
                            },
                            stopListening: function() {
                                a.events.removeEvent(n.element, a.eventType("down"), r.drag.startDrag), a.events.removeEvent(n.element, a.eventType("move"), r.drag.dragging), a.events.removeEvent(n.element, a.eventType("up"), r.drag.endDrag)
                            },
                            startDrag: function(t) {
                                var e = t.target ? t.target : t.srcElement,
                                    i = a.parentUntil(e, "data-snap-ignore");
                                if (i) return void a.dispatchEvent("ignore");
                                if (n.dragger) {
                                    var o = a.parentUntil(e, n.dragger);
                                    if (!o && s.translation !== n.minPosition && s.translation !== n.maxPosition) return
                                }
                                a.dispatchEvent("start"), n.element.style[s.vendor + "Transition"] = "", s.isDragging = !0, s.hasIntent = null, s.intentChecked = !1, s.startDragX = a.page("X", t), s.startDragY = a.page("Y", t), s.dragWatchers = {
                                    current: 0,
                                    last: 0,
                                    hold: 0,
                                    state: ""
                                }, s.simpleStates = {
                                    opening: null,
                                    towards: null,
                                    hyperExtending: null,
                                    halfway: null,
                                    flick: null,
                                    translation: {
                                        absolute: 0,
                                        relative: 0,
                                        sinceDirectionChange: 0,
                                        percentage: 0
                                    }
                                }
                            },
                            dragging: function(t) {
                                if (s.isDragging && n.touchToDrag) {
                                    var i, o = a.page("X", t),
                                        l = a.page("Y", t),
                                        h = s.translation,
                                        c = r.translate.get.matrix(4),
                                        d = o - s.startDragX,
                                        u = c > 0,
                                        p = d;
                                    if (s.intentChecked && !s.hasIntent) return;
                                    if (n.addBodyClasses && (c > 0 ? (a.klass.add(e.body, "snapjs-left"), a.klass.remove(e.body, "snapjs-right")) : 0 > c && (a.klass.add(e.body, "snapjs-right"), a.klass.remove(e.body, "snapjs-left"))), s.hasIntent === !1 || null === s.hasIntent) {
                                        var f = a.angleOfDrag(o, l),
                                            g = f >= 0 && f <= n.slideIntent || 360 >= f && f > 360 - n.slideIntent,
                                            m = f >= 180 && f <= 180 + n.slideIntent || 180 >= f && f >= 180 - n.slideIntent;
                                        s.hasIntent = m || g ? !0 : !1, s.intentChecked = !0
                                    }
                                    if (n.minDragDistance >= Math.abs(o - s.startDragX) || s.hasIntent === !1) return;
                                    a.events.prevent(t), a.dispatchEvent("drag"), s.dragWatchers.current = o, s.dragWatchers.last > o ? ("left" !== s.dragWatchers.state && (s.dragWatchers.state = "left", s.dragWatchers.hold = o), s.dragWatchers.last = o) : s.dragWatchers.last < o && ("right" !== s.dragWatchers.state && (s.dragWatchers.state = "right", s.dragWatchers.hold = o), s.dragWatchers.last = o), u ? (n.maxPosition < c && (i = (c - n.maxPosition) * n.resistance, p = d - i), s.simpleStates = {
                                        opening: "left",
                                        towards: s.dragWatchers.state,
                                        hyperExtending: n.maxPosition < c,
                                        halfway: c > n.maxPosition / 2,
                                        flick: Math.abs(s.dragWatchers.current - s.dragWatchers.hold) > n.flickThreshold,
                                        translation: {
                                            absolute: c,
                                            relative: d,
                                            sinceDirectionChange: s.dragWatchers.current - s.dragWatchers.hold,
                                            percentage: c / n.maxPosition * 100
                                        }
                                    }) : (n.minPosition > c && (i = (c - n.minPosition) * n.resistance, p = d - i), s.simpleStates = {
                                        opening: "right",
                                        towards: s.dragWatchers.state,
                                        hyperExtending: n.minPosition > c,
                                        halfway: c < n.minPosition / 2,
                                        flick: Math.abs(s.dragWatchers.current - s.dragWatchers.hold) > n.flickThreshold,
                                        translation: {
                                            absolute: c,
                                            relative: d,
                                            sinceDirectionChange: s.dragWatchers.current - s.dragWatchers.hold,
                                            percentage: c / n.minPosition * 100
                                        }
                                    }), r.translate.x(p + h)
                                }
                            },
                            endDrag: function(t) {
                                if (s.isDragging) {
                                    a.dispatchEvent("end");
                                    var e = r.translate.get.matrix(4);
                                    if (0 === s.dragWatchers.current && 0 !== e && n.tapToClose) return a.dispatchEvent("close"), a.events.prevent(t), r.translate.easeTo(0), s.isDragging = !1, void(s.startDragX = 0);
                                    "left" === s.simpleStates.opening ? s.simpleStates.halfway || s.simpleStates.hyperExtending || s.simpleStates.flick ? s.simpleStates.flick && "left" === s.simpleStates.towards ? r.translate.easeTo(0) : (s.simpleStates.flick && "right" === s.simpleStates.towards || s.simpleStates.halfway || s.simpleStates.hyperExtending) && r.translate.easeTo(n.maxPosition) : r.translate.easeTo(0) : "right" === s.simpleStates.opening && (s.simpleStates.halfway || s.simpleStates.hyperExtending || s.simpleStates.flick ? s.simpleStates.flick && "right" === s.simpleStates.towards ? r.translate.easeTo(0) : (s.simpleStates.flick && "left" === s.simpleStates.towards || s.simpleStates.halfway || s.simpleStates.hyperExtending) && r.translate.easeTo(n.minPosition) : r.translate.easeTo(0)), s.isDragging = !1, s.startDragX = a.page("X", t)
                                }
                            }
                        }
                    },
                    l = function(t) {
                        t.element && (a.deepExtend(n, t), s.vendor = a.vendor(), r.drag.listen())
                    };
                this.open = function(t) {
                    a.dispatchEvent("open"), a.klass.remove(e.body, "snapjs-expand-left"), a.klass.remove(e.body, "snapjs-expand-right"), "left" === t ? (s.simpleStates.opening = "left", s.simpleStates.towards = "right", a.klass.add(e.body, "snapjs-left"), a.klass.remove(e.body, "snapjs-right"), r.translate.easeTo(n.maxPosition)) : "right" === t && (s.simpleStates.opening = "right", s.simpleStates.towards = "left", a.klass.remove(e.body, "snapjs-left"), a.klass.add(e.body, "snapjs-right"), r.translate.easeTo(n.minPosition))
                }, this.close = function() {
                    a.dispatchEvent("close"), r.translate.easeTo(0)
                }, this.expand = function(i) {
                    var n = t.innerWidth || e.documentElement.clientWidth;
                    "left" === i ? (a.dispatchEvent("expandLeft"), a.klass.add(e.body, "snapjs-expand-left"), a.klass.remove(e.body, "snapjs-expand-right")) : (a.dispatchEvent("expandRight"), a.klass.add(e.body, "snapjs-expand-right"), a.klass.remove(e.body, "snapjs-expand-left"), n *= -1), r.translate.easeTo(n)
                }, this.on = function(t, e) {
                    return o[t] = e, this
                }, this.off = function(t) {
                    o[t] && (o[t] = !1)
                }, this.enable = function() {
                    a.dispatchEvent("enable"), r.drag.listen()
                }, this.disable = function() {
                    a.dispatchEvent("disable"), r.drag.stopListening()
                }, this.settings = function(t) {
                    a.deepExtend(n, t)
                }, this.state = function() {
                    var t, e = r.translate.get.matrix(4);
                    return t = e === n.maxPosition ? "left" : e === n.minPosition ? "right" : "closed", {
                        state: t,
                        info: s.simpleStates
                    }
                }, l(i)
            };
            "undefined" != typeof module && module.exports && (module.exports = i), "undefined" == typeof ender && (this.Snap = i), "function" == typeof define && define.amd && define("snap", [], function() {
                return i
            })
        }).call(this, window, document)
    }(jQuery),
    function() {
        (function() {
            ! function(t) {
                return t.countdown = function(e, i) {
                    var n, s = this;
                    return this.el = e, this.$el = t(e), this.$el.data("countdown", this), this.init = function() {
                        return s.options = t.extend({}, t.countdown.defaultOptions, i), s.options.refresh && (s.interval = setInterval(function() {
                            return s.render()
                        }, s.options.refresh)), s.render(), s
                    }, n = function(e) {
                        var i, n;
                        return e = Date.parse(t.isPlainObject(s.options.date) ? s.options.date : new Date(s.options.date)), n = (e - Date.parse(new Date)) / 1e3, 0 >= n && (n = 0, s.interval && s.stop(), s.options.onEnd.apply(s)), i = {
                            years: 0,
                            days: 0,
                            hours: 0,
                            min: 0,
                            sec: 0,
                            millisec: 0
                        }, n >= 31557600 && (i.years = Math.floor(n / 31557600), n -= 365.25 * i.years * 86400), n >= 86400 && (i.days = Math.floor(n / 86400), n -= 86400 * i.days), n >= 3600 && (i.hours = Math.floor(n / 3600), n -= 3600 * i.hours), n >= 60 && (i.min = Math.floor(n / 60), n -= 60 * i.min), i.sec = n, i
                    }, this.leadingZeros = function(t, e) {
                        for (null == e && (e = 2), t = String(t); t.length < e;) t = "0" + t;
                        return t
                    }, this.update = function(t) {
                        return s.options.date = t, s
                    }, this.render = function() {
                        return s.options.render.apply(s, [n(s.options.date)]), s
                    }, this.stop = function() {
                        return s.interval && clearInterval(s.interval), s.interval = null, s
                    }, this.start = function(e) {
                        return null == e && (e = s.options.refresh || t.countdown.defaultOptions.refresh), s.interval && clearInterval(s.interval), s.render(), s.options.refresh = e, s.interval = setInterval(function() {
                            return s.render()
                        }, s.options.refresh), s
                    }, this.init()
                }, t.countdown.defaultOptions = {
                    date: "June 7, 2087 15:03:25",
                    refresh: 1e3,
                    onEnd: t.noop,
                    render: function(e) {
                        return t(this.el).html("" + e.years + " years, " + e.days + " days, " + this.leadingZeros(e.hours) + " hours, " + this.leadingZeros(e.min) + " min and " + this.leadingZeros(e.sec) + " sec")
                    }
                }, void(t.fn.countdown = function(e) {
                    return t.each(this, function(i, n) {
                        var s;
                        return s = t(n), s.data("countdown") ? void 0 : s.data("countdown", new t.countdown(n, e))
                    })
                })
            }(jQuery)
        }).call(this)
    }(jQuery),
    function() {
        ! function() {
            "use strict";

            function t(i, n) {
                function s(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                var o;
                if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = i, this.tapDelay = n.tapDelay || 200, !t.notNeeded(i)) {
                    for (var a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], r = this, l = 0, h = a.length; h > l; l++) r[a[l]] = s(r[a[l]], r);
                    e && (i.addEventListener("mouseover", this.onMouse, !0), i.addEventListener("mousedown", this.onMouse, !0), i.addEventListener("mouseup", this.onMouse, !0)), i.addEventListener("click", this.onClick, !0), i.addEventListener("touchstart", this.onTouchStart, !1), i.addEventListener("touchmove", this.onTouchMove, !1), i.addEventListener("touchend", this.onTouchEnd, !1), i.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (i.removeEventListener = function(t, e, n) {
                        var s = Node.prototype.removeEventListener;
                        "click" === t ? s.call(i, t, e.hijacked || e, n) : s.call(i, t, e, n)
                    }, i.addEventListener = function(t, e, n) {
                        var s = Node.prototype.addEventListener;
                        "click" === t ? s.call(i, t, e.hijacked || (e.hijacked = function(t) {
                            t.propagationStopped || e(t)
                        }), n) : s.call(i, t, e, n)
                    }), "function" == typeof i.onclick && (o = i.onclick, i.addEventListener("click", function(t) {
                        o(t)
                    }, !1), i.onclick = null)
                }
            }
            var e = navigator.userAgent.indexOf("Android") > 0,
                i = /iP(ad|hone|od)/.test(navigator.userAgent),
                n = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
                s = i && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
                o = navigator.userAgent.indexOf("BB10") > 0;
            t.prototype.needsClick = function(t) {
                switch (t.nodeName.toLowerCase()) {
                    case "button":
                    case "select":
                    case "textarea":
                        if (t.disabled) return !0;
                        break;
                    case "input":
                        if (i && "file" === t.type || t.disabled) return !0;
                        break;
                    case "label":
                    case "video":
                        return !0
                }
                return /\bneedsclick\b/.test(t.className)
            }, t.prototype.needsFocus = function(t) {
                switch (t.nodeName.toLowerCase()) {
                    case "textarea":
                        return !0;
                    case "select":
                        return !e;
                    case "input":
                        switch (t.type) {
                            case "button":
                            case "checkbox":
                            case "file":
                            case "image":
                            case "radio":
                            case "submit":
                                return !1
                        }
                        return !t.disabled && !t.readOnly;
                    default:
                        return /\bneedsfocus\b/.test(t.className)
                }
            }, t.prototype.sendClick = function(t, e) {
                var i, n;
                document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
            }, t.prototype.determineEventType = function(t) {
                return e && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
            }, t.prototype.focus = function(t) {
                var e;
                i && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
            }, t.prototype.updateScrollParent = function(t) {
                var e, i;
                if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
                    i = t;
                    do {
                        if (i.scrollHeight > i.offsetHeight) {
                            e = i, t.fastClickScrollParent = i;
                            break
                        }
                        i = i.parentElement
                    } while (i)
                }
                e && (e.fastClickLastScrollTop = e.scrollTop)
            }, t.prototype.getTargetElementFromEventTarget = function(t) {
                return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
            }, t.prototype.onTouchStart = function(t) {
                var e, s, o;
                if (t.targetTouches.length > 1) return !0;
                if (e = this.getTargetElementFromEventTarget(t.target), s = t.targetTouches[0], i) {
                    if (o = window.getSelection(), o.rangeCount && !o.isCollapsed) return !0;
                    if (!n) {
                        if (s.identifier && s.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                        this.lastTouchIdentifier = s.identifier, this.updateScrollParent(e)
                    }
                }
                return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = s.pageX, this.touchStartY = s.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
            }, t.prototype.touchHasMoved = function(t) {
                var e = t.changedTouches[0],
                    i = this.touchBoundary;
                return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i ? !0 : !1
            }, t.prototype.onTouchMove = function(t) {
                return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
            }, t.prototype.findControl = function(t) {
                return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
            }, t.prototype.onTouchEnd = function(t) {
                var o, a, r, l, h, c = this.targetElement;
                if (!this.trackingClick) return !0;
                if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
                if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, a = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (h = t.changedTouches[0], c = document.elementFromPoint(h.pageX - window.pageXOffset, h.pageY - window.pageYOffset) || c, c.fastClickScrollParent = this.targetElement.fastClickScrollParent), r = c.tagName.toLowerCase(), "label" === r) {
                    if (o = this.findControl(c)) {
                        if (this.focus(c), e) return !1;
                        c = o
                    }
                } else if (this.needsFocus(c)) return t.timeStamp - a > 100 || i && window.top !== window && "input" === r ? (this.targetElement = null, !1) : (this.focus(c), this.sendClick(c, t), i && "select" === r || (this.targetElement = null, t.preventDefault()), !1);
                return i && !n && (l = c.fastClickScrollParent, l && l.fastClickLastScrollTop !== l.scrollTop) ? !0 : (this.needsClick(c) || (t.preventDefault(), this.sendClick(c, t)), !1)
            }, t.prototype.onTouchCancel = function() {
                this.trackingClick = !1, this.targetElement = null
            }, t.prototype.onMouse = function(t) {
                return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0
            }, t.prototype.onClick = function(t) {
                var e;
                return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e)
            }, t.prototype.destroy = function() {
                var t = this.layer;
                e && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
            }, t.notNeeded = function(t) {
                var i, n, s;
                if ("undefined" == typeof window.ontouchstart) return !0;
                if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                    if (!e) return !0;
                    if (i = document.querySelector("meta[name=viewport]")) {
                        if (-1 !== i.content.indexOf("user-scalable=no")) return !0;
                        if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                    }
                }
                if (o && (s = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), s[1] >= 10 && s[2] >= 3 && (i = document.querySelector("meta[name=viewport]")))) {
                    if (-1 !== i.content.indexOf("user-scalable=no")) return !0;
                    if (document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
                return "none" === t.style.msTouchAction ? !0 : !1
            }, t.attach = function(e, i) {
                return new t(e, i)
            }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
                return t
            }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
        }()
    }(jQuery),
    function() {
        (function() {
            "use strict";
            var t = this,
                e = t.Chart,
                i = function(t) {
                    return this.canvas = t.canvas, this.ctx = t, this.width = t.canvas.width, this.height = t.canvas.height, this.aspectRatio = this.width / this.height, n.retinaScale(this), this
                };
            i.defaults = {
                global: {
                    animation: !0,
                    animationSteps: 60,
                    animationEasing: "easeOutQuart",
                    showScale: !0,
                    scaleOverride: !1,
                    scaleSteps: null,
                    scaleStepWidth: null,
                    scaleStartValue: null,
                    scaleLineColor: "rgba(0,0,0,.1)",
                    scaleLineWidth: 1,
                    scaleShowLabels: !0,
                    scaleLabel: "<%=value%>",
                    scaleIntegersOnly: !0,
                    scaleBeginAtZero: !1,
                    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    scaleFontSize: 12,
                    scaleFontStyle: "normal",
                    scaleFontColor: "#666",
                    responsive: !1,
                    maintainAspectRatio: !0,
                    showTooltips: !0,
                    customTooltips: !1,
                    tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
                    tooltipFillColor: "rgba(0,0,0,0.8)",
                    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    tooltipFontSize: 14,
                    tooltipFontStyle: "normal",
                    tooltipFontColor: "#fff",
                    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    tooltipTitleFontSize: 14,
                    tooltipTitleFontStyle: "bold",
                    tooltipTitleFontColor: "#fff",
                    tooltipYPadding: 6,
                    tooltipXPadding: 6,
                    tooltipCaretSize: 8,
                    tooltipCornerRadius: 6,
                    tooltipXOffset: 10,
                    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
                    multiTooltipTemplate: "<%= value %>",
                    multiTooltipKeyBackground: "#fff",
                    onAnimationProgress: function() {},
                    onAnimationComplete: function() {}
                }
            }, i.types = {};
            var n = i.helpers = {},
                s = n.each = function(t, e, i) {
                    var n = Array.prototype.slice.call(arguments, 3);
                    if (t)
                        if (t.length === +t.length) {
                            var s;
                            for (s = 0; s < t.length; s++) e.apply(i, [t[s], s].concat(n))
                        } else
                            for (var o in t) e.apply(i, [t[o], o].concat(n))
                },
                o = n.clone = function(t) {
                    var e = {};
                    return s(t, function(i, n) {
                        t.hasOwnProperty(n) && (e[n] = i)
                    }), e
                },
                a = n.extend = function(t) {
                    return s(Array.prototype.slice.call(arguments, 1), function(e) {
                        s(e, function(i, n) {
                            e.hasOwnProperty(n) && (t[n] = i)
                        })
                    }), t
                },
                r = n.merge = function() {
                    var t = Array.prototype.slice.call(arguments, 0);
                    return t.unshift({}), a.apply(null, t)
                },
                l = n.indexOf = function(t, e) {
                    if (Array.prototype.indexOf) return t.indexOf(e);
                    for (var i = 0; i < t.length; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                h = (n.where = function(t, e) {
                    var i = [];
                    return n.each(t, function(t) {
                        e(t) && i.push(t)
                    }), i
                }, n.findNextWhere = function(t, e, i) {
                    i || (i = -1);
                    for (var n = i + 1; n < t.length; n++) {
                        var s = t[n];
                        if (e(s)) return s
                    }
                }, n.findPreviousWhere = function(t, e, i) {
                    i || (i = t.length);
                    for (var n = i - 1; n >= 0; n--) {
                        var s = t[n];
                        if (e(s)) return s
                    }
                }, n.inherits = function(t) {
                    var e = this,
                        i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                            return e.apply(this, arguments)
                        },
                        n = function() {
                            this.constructor = i
                        };
                    return n.prototype = e.prototype, i.prototype = new n, i.extend = h, t && a(i.prototype, t), i.__super__ = e.prototype, i
                }),
                c = n.noop = function() {},
                d = n.uid = function() {
                    var t = 0;
                    return function() {
                        return "chart-" + t++
                    }
                }(),
                u = n.warn = function(t) {
                    window.console && "function" == typeof window.console.warn && console.warn(t)
                },
                p = n.amd = "function" == typeof define && define.amd,
                f = n.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                },
                g = n.max = function(t) {
                    return Math.max.apply(Math, t)
                },
                m = n.min = function(t) {
                    return Math.min.apply(Math, t)
                },
                v = (n.cap = function(t, e, i) {
                    if (f(e)) {
                        if (t > e) return e
                    } else if (f(i) && i > t) return i;
                    return t
                }, n.getDecimalPlaces = function(t) {
                    return t % 1 !== 0 && f(t) ? t.toString().split(".")[1].length : 0
                }),
                b = n.radians = function(t) {
                    return t * (Math.PI / 180)
                },
                w = (n.getAngleFromPoint = function(t, e) {
                    var i = e.x - t.x,
                        n = e.y - t.y,
                        s = Math.sqrt(i * i + n * n),
                        o = 2 * Math.PI + Math.atan2(n, i);
                    return 0 > i && 0 > n && (o += 2 * Math.PI), {
                        angle: o,
                        distance: s
                    }
                }, n.aliasPixel = function(t) {
                    return t % 2 === 0 ? 0 : .5
                }),
                y = (n.splineCurve = function(t, e, i, n) {
                    var s = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
                        o = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
                        a = n * s / (s + o),
                        r = n * o / (s + o);
                    return {
                        inner: {
                            x: e.x - a * (i.x - t.x),
                            y: e.y - a * (i.y - t.y)
                        },
                        outer: {
                            x: e.x + r * (i.x - t.x),
                            y: e.y + r * (i.y - t.y)
                        }
                    }
                }, n.calculateOrderOfMagnitude = function(t) {
                    return Math.floor(Math.log(t) / Math.LN10)
                }),
                x = (n.calculateScaleRange = function(t, e, i, n, s) {
                    var o = 2,
                        a = Math.floor(e / (1.5 * i)),
                        r = o >= a,
                        l = g(t),
                        h = m(t);
                    l === h && (l += .5, h >= .5 && !n ? h -= .5 : l += .5);
                    for (var c = Math.abs(l - h), d = y(c), u = Math.ceil(l / (1 * Math.pow(10, d))) * Math.pow(10, d), p = n ? 0 : Math.floor(h / (1 * Math.pow(10, d))) * Math.pow(10, d), f = u - p, v = Math.pow(10, d), b = Math.round(f / v);
                        (b > a || a > 2 * b) && !r;)
                        if (b > a) v *= 2, b = Math.round(f / v), b % 1 !== 0 && (r = !0);
                        else if (s && d >= 0) {
                        if (v / 2 % 1 !== 0) break;
                        v /= 2, b = Math.round(f / v)
                    } else v /= 2, b = Math.round(f / v);
                    return r && (b = o, v = f / b), {
                        steps: b,
                        stepValue: v,
                        min: p,
                        max: p + b * v
                    }
                }, n.template = function(t, e) {
                    function i(t, e) {
                        var i = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("    ").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("   ").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : n[t] = n[t];
                        return e ? i(e) : i
                    }
                    if (t instanceof Function) return t(e);
                    var n = {};
                    return i(t, e)
                }),
                C = (n.generateLabels = function(t, e, i, n) {
                    var o = new Array(e);
                    return labelTemplateString && s(o, function(e, s) {
                        o[s] = x(t, {
                            value: i + n * (s + 1)
                        })
                    }), o
                }, n.easingEffects = {
                    linear: function(t) {
                        return t
                    },
                    easeInQuad: function(t) {
                        return t * t
                    },
                    easeOutQuad: function(t) {
                        return -1 * t * (t - 2)
                    },
                    easeInOutQuad: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    easeInCubic: function(t) {
                        return t * t * t
                    },
                    easeOutCubic: function(t) {
                        return 1 * ((t = t / 1 - 1) * t * t + 1)
                    },
                    easeInOutCubic: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    easeInQuart: function(t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function(t) {
                        return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                    },
                    easeInOutQuart: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    },
                    easeInQuint: function(t) {
                        return 1 * (t /= 1) * t * t * t * t
                    },
                    easeOutQuint: function(t) {
                        return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                    },
                    easeInOutQuint: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    easeInSine: function(t) {
                        return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                    },
                    easeOutSine: function(t) {
                        return 1 * Math.sin(t / 1 * (Math.PI / 2))
                    },
                    easeInOutSine: function(t) {
                        return -.5 * (Math.cos(Math.PI * t / 1) - 1)
                    },
                    easeInExpo: function(t) {
                        return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                    },
                    easeOutExpo: function(t) {
                        return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                    },
                    easeInOutExpo: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                    },
                    easeInCirc: function(t) {
                        return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                    },
                    easeOutCirc: function(t) {
                        return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                    },
                    easeInOutCirc: function(t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeInElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i)))
                    },
                    easeOutElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - e) * Math.PI / i) + 1)
                    },
                    easeInOutElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .3 * 1.5), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 1 > t ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i) * .5 + 1)
                    },
                    easeInBack: function(t) {
                        var e = 1.70158;
                        return 1 * (t /= 1) * t * ((e + 1) * t - e)
                    },
                    easeOutBack: function(t) {
                        var e = 1.70158;
                        return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                    },
                    easeInOutBack: function(t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? .5 * t * t * (((e *= 1.525) + 1) * t - e) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                    },
                    easeInBounce: function(t) {
                        return 1 - C.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function(t) {
                        return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                    },
                    easeInOutBounce: function(t) {
                        return .5 > t ? .5 * C.easeInBounce(2 * t) : .5 * C.easeOutBounce(2 * t - 1) + .5
                    }
                }),
                S = n.requestAnimFrame = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                        return window.setTimeout(t, 1e3 / 60)
                    }
                }(),
                k = (n.cancelAnimFrame = function() {
                    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                        return window.clearTimeout(t, 1e3 / 60)
                    }
                }(), n.animationLoop = function(t, e, i, n, s, o) {
                    var a = 0,
                        r = C[i] || C.linear,
                        l = function() {
                            a++;
                            var i = a / e,
                                h = r(i);
                            t.call(o, h, i, a), n.call(o, h, i), e > a ? o.animationFrame = S(l) : s.apply(o)
                        };
                    S(l)
                }, n.getRelativePosition = function(t) {
                    var e, i, n = t.originalEvent || t,
                        s = t.currentTarget || t.srcElement,
                        o = s.getBoundingClientRect();
                    return n.touches ? (e = n.touches[0].clientX - o.left, i = n.touches[0].clientY - o.top) : (e = n.clientX - o.left, i = n.clientY - o.top), {
                        x: e,
                        y: i
                    }
                }, n.addEvent = function(t, e, i) {
                    t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
                }),
                P = n.removeEvent = function(t, e, i) {
                    t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = c
                },
                T = (n.bindEvents = function(t, e, i) {
                    t.events || (t.events = {}), s(e, function(e) {
                        t.events[e] = function() {
                            i.apply(t, arguments)
                        }, k(t.chart.canvas, e, t.events[e])
                    })
                }, n.unbindEvents = function(t, e) {
                    s(e, function(e, i) {
                        P(t.chart.canvas, i, e)
                    })
                }),
                L = n.getMaximumWidth = function(t) {
                    var e = t.parentNode;
                    return e.clientWidth
                },
                E = n.getMaximumHeight = function(t) {
                    var e = t.parentNode;
                    return e.clientHeight
                },
                A = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function(t) {
                    var e = t.ctx,
                        i = t.canvas.width,
                        n = t.canvas.height;
                    window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = n + "px", e.canvas.height = n * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio))
                }),
                M = n.clear = function(t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                },
                F = n.fontString = function(t, e, i) {
                    return e + " " + t + "px " + i
                },
                I = n.longestText = function(t, e, i) {
                    t.font = e;
                    var n = 0;
                    return s(i, function(e) {
                        var i = t.measureText(e).width;
                        n = i > n ? i : n
                    }), n
                },
                W = n.drawRoundedRectangle = function(t, e, i, n, s, o) {
                    t.beginPath(), t.moveTo(e + o, i), t.lineTo(e + n - o, i), t.quadraticCurveTo(e + n, i, e + n, i + o), t.lineTo(e + n, i + s - o), t.quadraticCurveTo(e + n, i + s, e + n - o, i + s), t.lineTo(e + o, i + s), t.quadraticCurveTo(e, i + s, e, i + s - o), t.lineTo(e, i + o), t.quadraticCurveTo(e, i, e + o, i), t.closePath()
                };
            i.instances = {}, i.Type = function(t, e, n) {
                this.options = e, this.chart = n, this.id = d(), i.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t)
            }, a(i.Type.prototype, {
                initialize: function() {
                    return this
                },
                clear: function() {
                    return M(this.chart), this
                },
                stop: function() {
                    return n.cancelAnimFrame.call(t, this.animationFrame), this
                },
                resize: function(t) {
                    this.stop();
                    var e = this.chart.canvas,
                        i = L(this.chart.canvas),
                        n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : E(this.chart.canvas);
                    return e.width = this.chart.width = i, e.height = this.chart.height = n, A(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
                },
                reflow: c,
                render: function(t) {
                    return t && this.reflow(), this.options.animation && !t ? n.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
                },
                generateLegend: function() {
                    return x(this.options.legendTemplate, this)
                },
                destroy: function() {
                    this.clear(), T(this, this.events);
                    var t = this.chart.canvas;
                    t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete i.instances[this.id]
                },
                showTooltip: function(t, e) {
                    "undefined" == typeof this.activeElements && (this.activeElements = []);
                    var o = function(t) {
                        var e = !1;
                        return t.length !== this.activeElements.length ? e = !0 : (s(t, function(t, i) {
                            t !== this.activeElements[i] && (e = !0)
                        }, this), e)
                    }.call(this, t);
                    if (o || e) {
                        if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
                            if (this.datasets && this.datasets.length > 1) {
                                for (var a, r, h = this.datasets.length - 1; h >= 0 && (a = this.datasets[h].points || this.datasets[h].bars || this.datasets[h].segments, r = l(a, t[0]), -1 === r); h--);
                                var c = [],
                                    d = [],
                                    u = function() {
                                        var t, e, i, s, o, a = [],
                                            l = [],
                                            h = [];
                                        return n.each(this.datasets, function(e) {
                                            t = e.points || e.bars || e.segments, t[r] && t[r].hasValue() && a.push(t[r])
                                        }), n.each(a, function(t) {
                                            l.push(t.x), h.push(t.y), c.push(n.template(this.options.multiTooltipTemplate, t)), d.push({
                                                fill: t._saved.fillColor || t.fillColor,
                                                stroke: t._saved.strokeColor || t.strokeColor
                                            })
                                        }, this), o = m(h), i = g(h), s = m(l), e = g(l), {
                                            x: s > this.chart.width / 2 ? s : e,
                                            y: (o + i) / 2
                                        }
                                    }.call(this, r);
                                new i.MultiTooltip({
                                    x: u.x,
                                    y: u.y,
                                    xPadding: this.options.tooltipXPadding,
                                    yPadding: this.options.tooltipYPadding,
                                    xOffset: this.options.tooltipXOffset,
                                    fillColor: this.options.tooltipFillColor,
                                    textColor: this.options.tooltipFontColor,
                                    fontFamily: this.options.tooltipFontFamily,
                                    fontStyle: this.options.tooltipFontStyle,
                                    fontSize: this.options.tooltipFontSize,
                                    titleTextColor: this.options.tooltipTitleFontColor,
                                    titleFontFamily: this.options.tooltipTitleFontFamily,
                                    titleFontStyle: this.options.tooltipTitleFontStyle,
                                    titleFontSize: this.options.tooltipTitleFontSize,
                                    cornerRadius: this.options.tooltipCornerRadius,
                                    labels: c,
                                    legendColors: d,
                                    legendColorBackground: this.options.multiTooltipKeyBackground,
                                    title: t[0].label,
                                    chart: this.chart,
                                    ctx: this.chart.ctx,
                                    custom: this.options.customTooltips
                                }).draw()
                            } else s(t, function(t) {
                                var e = t.tooltipPosition();
                                new i.Tooltip({
                                    x: Math.round(e.x),
                                    y: Math.round(e.y),
                                    xPadding: this.options.tooltipXPadding,
                                    yPadding: this.options.tooltipYPadding,
                                    fillColor: this.options.tooltipFillColor,
                                    textColor: this.options.tooltipFontColor,
                                    fontFamily: this.options.tooltipFontFamily,
                                    fontStyle: this.options.tooltipFontStyle,
                                    fontSize: this.options.tooltipFontSize,
                                    caretHeight: this.options.tooltipCaretSize,
                                    cornerRadius: this.options.tooltipCornerRadius,
                                    text: x(this.options.tooltipTemplate, t),
                                    chart: this.chart,
                                    custom: this.options.customTooltips
                                }).draw()
                            }, this);
                        return this
                    }
                },
                toBase64Image: function() {
                    return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
                }
            }), i.Type.extend = function(t) {
                var e = this,
                    n = function() {
                        return e.apply(this, arguments)
                    };
                if (n.prototype = o(e.prototype), a(n.prototype, t), n.extend = i.Type.extend, t.name || e.prototype.name) {
                    var s = t.name || e.prototype.name,
                        l = i.defaults[e.prototype.name] ? o(i.defaults[e.prototype.name]) : {};
                    i.defaults[s] = a(l, t.defaults), i.types[s] = n, i.prototype[s] = function(t, e) {
                        var o = r(i.defaults.global, i.defaults[s], e || {});
                        return new n(t, o, this)
                    }
                } else u("Name not provided for this chart, so it hasn't been registered");
                return e
            }, i.Element = function(t) {
                a(this, t), this.initialize.apply(this, arguments), this.save()
            }, a(i.Element.prototype, {
                initialize: function() {},
                restore: function(t) {
                    return t ? s(t, function(t) {
                        this[t] = this._saved[t]
                    }, this) : a(this, this._saved), this
                },
                save: function() {
                    return this._saved = o(this), delete this._saved._saved, this
                },
                update: function(t) {
                    return s(t, function(t, e) {
                        this._saved[e] = this[e], this[e] = t
                    }, this), this
                },
                transition: function(t, e) {
                    return s(t, function(t, i) {
                        this[i] = (t - this._saved[i]) * e + this._saved[i]
                    }, this), this
                },
                tooltipPosition: function() {
                    return {
                        x: this.x,
                        y: this.y
                    }
                },
                hasValue: function() {
                    return f(this.value)
                }
            }), i.Element.extend = h, i.Point = i.Element.extend({
                display: !0,
                inRange: function(t, e) {
                    var i = this.hitDetectionRadius + this.radius;
                    return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2)
                },
                draw: function() {
                    if (this.display) {
                        var t = this.ctx;
                        t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
                    }
                }
            }), i.Arc = i.Element.extend({
                inRange: function(t, e) {
                    var i = n.getAngleFromPoint(this, {
                            x: t,
                            y: e
                        }),
                        s = i.angle >= this.startAngle && i.angle <= this.endAngle,
                        o = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
                    return s && o
                },
                tooltipPosition: function() {
                    var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
                        e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                    return {
                        x: this.x + Math.cos(t) * e,
                        y: this.y + Math.sin(t) * e
                    }
                },
                draw: function() {
                    var t = this.ctx;
                    t.beginPath(), t.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), t.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.lineJoin = "bevel", this.showStroke && t.stroke()
                }
            }), i.Rectangle = i.Element.extend({
                draw: function() {
                    var t = this.ctx,
                        e = this.width / 2,
                        i = this.x - e,
                        n = this.x + e,
                        s = this.base - (this.base - this.y),
                        o = this.strokeWidth / 2;
                    this.showStroke && (i += o, n -= o, s += o), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), t.lineTo(i, s), t.lineTo(n, s), t.lineTo(n, this.base), t.fill(), this.showStroke && t.stroke()
                },
                height: function() {
                    return this.base - this.y
                },
                inRange: function(t, e) {
                    return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
                }
            }), i.Tooltip = i.Element.extend({
                draw: function() {
                    var t = this.chart.ctx;
                    t.font = F(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
                    var e = this.caretPadding = 2,
                        i = t.measureText(this.text).width + 2 * this.xPadding,
                        n = this.fontSize + 2 * this.yPadding,
                        s = n + this.caretHeight + e;
                    this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - s < 0 && (this.yAlign = "below");
                    var o = this.x - i / 2,
                        a = this.y - s;
                    if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
                    else {
                        switch (this.yAlign) {
                            case "above":
                                t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
                                break;
                            case "below":
                                a = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill()
                        }
                        switch (this.xAlign) {
                            case "left":
                                o = this.x - i + (this.cornerRadius + this.caretHeight);
                                break;
                            case "right":
                                o = this.x - (this.cornerRadius + this.caretHeight)
                        }
                        W(t, o, a, i, n, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, o + i / 2, a + n / 2)
                    }
                }
            }), i.MultiTooltip = i.Element.extend({
                initialize: function() {
                    this.font = F(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = F(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
                    var t = this.ctx.measureText(this.title).width,
                        e = I(this.ctx, this.font, this.labels) + this.fontSize + 3,
                        i = g([e, t]);
                    this.width = i + 2 * this.xPadding;
                    var n = this.height / 2;
                    this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
                },
                getLineHeight: function(t) {
                    var e = this.y - this.height / 2 + this.yPadding,
                        i = t - 1;
                    return 0 === t ? e + this.titleFontSize / 2 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + 1.5 * this.titleFontSize
                },
                draw: function() {
                    if (this.custom) this.custom(this);
                    else {
                        W(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                        var t = this.ctx;
                        t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, n.each(this.labels, function(e, i) {
                            t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                        }, this)
                    }
                }
            }), i.Scale = i.Element.extend({
                initialize: function() {
                    this.fit()
                },
                buildYLabels: function() {
                    this.yLabels = [];
                    for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(x(this.templateString, {
                        value: (this.min + e * this.stepValue).toFixed(t)
                    }));
                    this.yLabelWidth = this.display && this.showLabels ? I(this.ctx, this.font, this.yLabels) : 0
                },
                addXLabel: function(t) {
                    this.xLabels.push(t), this.valuesCount++, this.fit()
                },
                removeXLabel: function() {
                    this.xLabels.shift(), this.valuesCount--, this.fit()
                },
                fit: function() {
                    this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
                    var t, e = this.endPoint - this.startPoint;
                    for (this.calculateYRange(e), this.buildYLabels(), this.calculateXLabelRotation(); e > this.endPoint - this.startPoint;) e = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(e), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation()
                },
                calculateXLabelRotation: function() {
                    this.ctx.font = this.font;
                    var t, e, i = this.ctx.measureText(this.xLabels[0]).width,
                        n = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
                    if (this.xScalePaddingRight = n / 2 + 3, this.xScalePaddingLeft = i / 2 > this.yLabelWidth + 10 ? i / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                        var s, o = I(this.ctx, this.font, this.xLabels);
                        this.xLabelWidth = o;
                        for (var a = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > a && 0 === this.xLabelRotation || this.xLabelWidth > a && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) s = Math.cos(b(this.xLabelRotation)), t = s * i, e = s * n, t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = s * o;
                        this.xLabelRotation > 0 && (this.endPoint -= Math.sin(b(this.xLabelRotation)) * o + 3)
                    } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
                },
                calculateYRange: c,
                drawingArea: function() {
                    return this.startPoint - this.endPoint
                },
                calculateY: function(t) {
                    var e = this.drawingArea() / (this.min - this.max);
                    return this.endPoint - e * (t - this.min)
                },
                calculateX: function(t) {
                    var e = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                        i = e / (this.valuesCount - (this.offsetGridLines ? 0 : 1)),
                        n = i * t + this.xScalePaddingLeft;
                    return this.offsetGridLines && (n += i / 2), Math.round(n)
                },
                update: function(t) {
                    n.extend(this, t), this.fit()
                },
                draw: function() {
                    var t = this.ctx,
                        e = (this.endPoint - this.startPoint) / this.steps,
                        i = Math.round(this.xScalePaddingLeft);
                    this.display && (t.fillStyle = this.textColor, t.font = this.font, s(this.yLabels, function(s, o) {
                        var a = this.endPoint - e * o,
                            r = Math.round(a),
                            l = this.showHorizontalLines;
                        t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(s, i - 10, a), 0 !== o || l || (l = !0), l && t.beginPath(), o > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), r += n.aliasPixel(t.lineWidth), l && (t.moveTo(i, r), t.lineTo(this.width, r), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(i - 5, r), t.lineTo(i, r), t.stroke(), t.closePath()
                    }, this), s(this.xLabels, function(e, i) {
                        var n = this.calculateX(i) + w(this.lineWidth),
                            s = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + w(this.lineWidth),
                            o = this.xLabelRotation > 0,
                            a = this.showVerticalLines;
                        0 !== i || a || (a = !0), a && t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), a && (t.moveTo(s, this.endPoint), t.lineTo(s, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(s, this.endPoint), t.lineTo(s, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(n, o ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * b(this.xLabelRotation)), t.font = this.font, t.textAlign = o ? "right" : "center", t.textBaseline = o ? "middle" : "top", t.fillText(e, 0, 0), t.restore()
                    }, this))
                }
            }), i.RadialScale = i.Element.extend({
                initialize: function() {
                    this.size = m([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
                },
                calculateCenterOffset: function(t) {
                    var e = this.drawingArea / (this.max - this.min);
                    return (t - this.min) * e
                },
                update: function() {
                    this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
                },
                buildYLabels: function() {
                    this.yLabels = [];
                    for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(x(this.templateString, {
                        value: (this.min + e * this.stepValue).toFixed(t)
                    }))
                },
                getCircumference: function() {
                    return 2 * Math.PI / this.valuesCount
                },
                setScaleSize: function() {
                    var t, e, i, n, s, o, a, r, l, h, c, d, u = m([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                        p = this.width,
                        g = 0;
                    for (this.ctx.font = F(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e = 0; e < this.valuesCount; e++) t = this.getPointPosition(e, u), i = this.ctx.measureText(x(this.templateString, {
                        value: this.labels[e]
                    })).width + 5, 0 === e || e === this.valuesCount / 2 ? (n = i / 2, t.x + n > p && (p = t.x + n, s = e), t.x - n < g && (g = t.x - n, a = e)) : e < this.valuesCount / 2 ? t.x + i > p && (p = t.x + i, s = e) : e > this.valuesCount / 2 && t.x - i < g && (g = t.x - i, a = e);
                    l = g, h = Math.ceil(p - this.width), o = this.getIndexAngle(s), r = this.getIndexAngle(a), c = h / Math.sin(o + Math.PI / 2), d = l / Math.sin(r + Math.PI / 2), c = f(c) ? c : 0, d = f(d) ? d : 0, this.drawingArea = u - (d + c) / 2, this.setCenterPoint(d, c)
                },
                setCenterPoint: function(t, e) {
                    var i = this.width - e - this.drawingArea,
                        n = t + this.drawingArea;
                    this.xCenter = (n + i) / 2, this.yCenter = this.height / 2
                },
                getIndexAngle: function(t) {
                    var e = 2 * Math.PI / this.valuesCount;
                    return t * e - Math.PI / 2
                },
                getPointPosition: function(t, e) {
                    var i = this.getIndexAngle(t);
                    return {
                        x: Math.cos(i) * e + this.xCenter,
                        y: Math.sin(i) * e + this.yCenter
                    }
                },
                draw: function() {
                    if (this.display) {
                        var t = this.ctx;
                        if (s(this.yLabels, function(e, i) {
                                if (i > 0) {
                                    var n, s = i * (this.drawingArea / this.steps),
                                        o = this.yCenter - s;
                                    if (this.lineWidth > 0)
                                        if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, s, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                        else {
                                            t.beginPath();
                                            for (var a = 0; a < this.valuesCount; a++) n = this.getPointPosition(a, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === a ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y);
                                            t.closePath(), t.stroke()
                                        }
                                    if (this.showLabels) {
                                        if (t.font = F(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                            var r = t.measureText(e).width;
                                            t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - r / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, r + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                        }
                                        t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, o)
                                    }
                                }
                            }, this), !this.lineArc) {
                            t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                            for (var e = this.valuesCount - 1; e >= 0; e--) {
                                if (this.angleLineWidth > 0) {
                                    var i = this.getPointPosition(e, this.calculateCenterOffset(this.max));
                                    t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(i.x, i.y), t.stroke(), t.closePath()
                                }
                                var n = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                                t.font = F(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                                var o = this.labels.length,
                                    a = this.labels.length / 2,
                                    r = a / 2,
                                    l = r > e || e > o - r,
                                    h = e === r || e === o - r;
                                t.textAlign = 0 === e ? "center" : e === a ? "center" : a > e ? "left" : "right", t.textBaseline = h ? "middle" : l ? "bottom" : "top", t.fillText(this.labels[e], n.x, n.y)
                            }
                        }
                    }
                }
            }), n.addEvent(window, "resize", function() {
                var t;
                return function() {
                    clearTimeout(t), t = setTimeout(function() {
                        s(i.instances, function(t) {
                            t.options.responsive && t.resize(t.render, !0)
                        })
                    }, 50)
                }
            }()), p ? define(function() {
                return i
            }) : "object" == typeof module && module.exports && (module.exports = i), t.Chart = i, i.noConflict = function() {
                return t.Chart = e, i
            }
        }).call(this),
            function() {
                "use strict";
                var t = this,
                    e = t.Chart,
                    i = e.helpers,
                    n = {
                        scaleBeginAtZero: !0,
                        scaleShowGridLines: !0,
                        scaleGridLineColor: "rgba(0,0,0,.05)",
                        scaleGridLineWidth: 1,
                        scaleShowHorizontalLines: !0,
                        scaleShowVerticalLines: !0,
                        barShowStroke: !0,
                        barStrokeWidth: 2,
                        barValueSpacing: 5,
                        barDatasetSpacing: 1,
                        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
                    };
                e.Type.extend({
                    name: "Bar",
                    defaults: n,
                    initialize: function(t) {
                        var n = this.options;
                        this.ScaleClass = e.Scale.extend({
                            offsetGridLines: !0,
                            calculateBarX: function(t, e, i) {
                                var s = this.calculateBaseWidth(),
                                    o = this.calculateX(i) - s / 2,
                                    a = this.calculateBarWidth(t);
                                return o + a * e + e * n.barDatasetSpacing + a / 2
                            },
                            calculateBaseWidth: function() {
                                return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing
                            },
                            calculateBarWidth: function(t) {
                                var e = this.calculateBaseWidth() - (t - 1) * n.barDatasetSpacing;
                                return e / t
                            }
                        }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                            var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                            this.eachBars(function(t) {
                                t.restore(["fillColor", "strokeColor"])
                            }), i.each(e, function(t) {
                                t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                            }), this.showTooltip(e)
                        }), this.BarClass = e.Rectangle.extend({
                            strokeWidth: this.options.barStrokeWidth,
                            showStroke: this.options.barShowStroke,
                            ctx: this.chart.ctx
                        }), i.each(t.datasets, function(e) {
                            var n = {
                                label: e.label || null,
                                fillColor: e.fillColor,
                                strokeColor: e.strokeColor,
                                bars: []
                            };
                            this.datasets.push(n), i.each(e.data, function(i, s) {
                                n.bars.push(new this.BarClass({
                                    value: i,
                                    label: t.labels[s],
                                    datasetLabel: e.label,
                                    strokeColor: e.strokeColor,
                                    fillColor: e.fillColor,
                                    highlightFill: e.highlightFill || e.fillColor,
                                    highlightStroke: e.highlightStroke || e.strokeColor
                                }))
                            }, this)
                        }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, e, n) {
                            i.extend(t, {
                                width: this.scale.calculateBarWidth(this.datasets.length),
                                x: this.scale.calculateBarX(this.datasets.length, n, e),
                                y: this.scale.endPoint
                            }), t.save()
                        }, this), this.render()
                    },
                    update: function() {
                        this.scale.update(), i.each(this.activeElements, function(t) {
                            t.restore(["fillColor", "strokeColor"])
                        }), this.eachBars(function(t) {
                            t.save()
                        }), this.render()
                    },
                    eachBars: function(t) {
                        i.each(this.datasets, function(e, n) {
                            i.each(e.bars, t, this, n)
                        }, this)
                    },
                    getBarsAtEvent: function(t) {
                        for (var e, n = [], s = i.getRelativePosition(t), o = function(t) {
                                n.push(t.bars[e])
                            }, a = 0; a < this.datasets.length; a++)
                            for (e = 0; e < this.datasets[a].bars.length; e++)
                                if (this.datasets[a].bars[e].inRange(s.x, s.y)) return i.each(this.datasets, o), n;
                        return n
                    },
                    buildScale: function(t) {
                        var e = this,
                            n = function() {
                                var t = [];
                                return e.eachBars(function(e) {
                                    t.push(e.value)
                                }), t
                            },
                            s = {
                                templateString: this.options.scaleLabel,
                                height: this.chart.height,
                                width: this.chart.width,
                                ctx: this.chart.ctx,
                                textColor: this.options.scaleFontColor,
                                fontSize: this.options.scaleFontSize,
                                fontStyle: this.options.scaleFontStyle,
                                fontFamily: this.options.scaleFontFamily,
                                valuesCount: t.length,
                                beginAtZero: this.options.scaleBeginAtZero,
                                integersOnly: this.options.scaleIntegersOnly,
                                calculateYRange: function(t) {
                                    var e = i.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                                    i.extend(this, e)
                                },
                                xLabels: t,
                                font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                                lineWidth: this.options.scaleLineWidth,
                                lineColor: this.options.scaleLineColor,
                                showHorizontalLines: this.options.scaleShowHorizontalLines,
                                showVerticalLines: this.options.scaleShowVerticalLines,
                                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                                padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                                showLabels: this.options.scaleShowLabels,
                                display: this.options.showScale
                            };
                        this.options.scaleOverride && i.extend(s, {
                            calculateYRange: i.noop,
                            steps: this.options.scaleSteps,
                            stepValue: this.options.scaleStepWidth,
                            min: this.options.scaleStartValue,
                            max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                        }), this.scale = new this.ScaleClass(s)
                    },
                    addData: function(t, e) {
                        i.each(t, function(t, i) {
                            this.datasets[i].bars.push(new this.BarClass({
                                value: t,
                                label: e,
                                x: this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1),
                                y: this.scale.endPoint,
                                width: this.scale.calculateBarWidth(this.datasets.length),
                                base: this.scale.endPoint,
                                strokeColor: this.datasets[i].strokeColor,
                                fillColor: this.datasets[i].fillColor
                            }))
                        }, this), this.scale.addXLabel(e), this.update()
                    },
                    removeData: function() {
                        this.scale.removeXLabel(), i.each(this.datasets, function(t) {
                            t.bars.shift()
                        }, this), this.update()
                    },
                    reflow: function() {
                        i.extend(this.BarClass.prototype, {
                            y: this.scale.endPoint,
                            base: this.scale.endPoint
                        });
                        var t = i.extend({
                            height: this.chart.height,
                            width: this.chart.width
                        });
                        this.scale.update(t)
                    },
                    draw: function(t) {
                        var e = t || 1;
                        this.clear(), this.chart.ctx, this.scale.draw(e), i.each(this.datasets, function(t, n) {
                            i.each(t.bars, function(t, i) {
                                t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                                    x: this.scale.calculateBarX(this.datasets.length, n, i),
                                    y: this.scale.calculateY(t.value),
                                    width: this.scale.calculateBarWidth(this.datasets.length)
                                }, e).draw())
                            }, this)
                        }, this)
                    }
                })
            }.call(this),
            function() {
                "use strict";
                var t = this,
                    e = t.Chart,
                    i = e.helpers,
                    n = {
                        segmentShowStroke: !0,
                        segmentStrokeColor: "#fff",
                        segmentStrokeWidth: 2,
                        percentageInnerCutout: 50,
                        animationSteps: 100,
                        animationEasing: "easeOutBounce",
                        animateRotate: !0,
                        animateScale: !1,
                        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
                    };
                e.Type.extend({
                    name: "Doughnut",
                    defaults: n,
                    initialize: function(t) {
                        this.segments = [], this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({
                            ctx: this.chart.ctx,
                            x: this.chart.width / 2,
                            y: this.chart.height / 2
                        }), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                            var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                            i.each(this.segments, function(t) {
                                t.restore(["fillColor"])
                            }), i.each(e, function(t) {
                                t.fillColor = t.highlightColor
                            }), this.showTooltip(e)
                        }), this.calculateTotal(t), i.each(t, function(t, e) {
                            this.addData(t, e, !0)
                        }, this), this.render()
                    },
                    getSegmentsAtEvent: function(t) {
                        var e = [],
                            n = i.getRelativePosition(t);
                        return i.each(this.segments, function(t) {
                            t.inRange(n.x, n.y) && e.push(t)
                        }, this), e
                    },
                    addData: function(t, e, i) {
                        var n = e || this.segments.length;
                        this.segments.splice(n, 0, new this.SegmentArc({
                            value: t.value,
                            outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                            innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                            fillColor: t.color,
                            highlightColor: t.highlight || t.color,
                            showStroke: this.options.segmentShowStroke,
                            strokeWidth: this.options.segmentStrokeWidth,
                            strokeColor: this.options.segmentStrokeColor,
                            startAngle: 1.5 * Math.PI,
                            circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                            label: t.label
                        })), i || (this.reflow(), this.update())
                    },
                    calculateCircumference: function(t) {
                        return 2 * Math.PI * (t / this.total)
                    },
                    calculateTotal: function(t) {
                        this.total = 0, i.each(t, function(t) {
                            this.total += t.value
                        }, this)
                    },
                    update: function() {
                        this.calculateTotal(this.segments), i.each(this.activeElements, function(t) {
                            t.restore(["fillColor"])
                        }), i.each(this.segments, function(t) {
                            t.save()
                        }), this.render()
                    },
                    removeData: function(t) {
                        var e = i.isNumber(t) ? t : this.segments.length - 1;
                        this.segments.splice(e, 1), this.reflow(), this.update()
                    },
                    reflow: function() {
                        i.extend(this.SegmentArc.prototype, {
                            x: this.chart.width / 2,
                            y: this.chart.height / 2
                        }), this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, i.each(this.segments, function(t) {
                            t.update({
                                outerRadius: this.outerRadius,
                                innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                            })
                        }, this)
                    },
                    draw: function(t) {
                        var e = t ? t : 1;
                        this.clear(), i.each(this.segments, function(t, i) {
                            t.transition({
                                circumference: this.calculateCircumference(t.value),
                                outerRadius: this.outerRadius,
                                innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                            }, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle)
                        }, this)
                    }
                }), e.types.Doughnut.extend({
                    name: "Pie",
                    defaults: i.merge(n, {
                        percentageInnerCutout: 0
                    })
                })
            }.call(this),
            function() {
                "use strict";
                var t = this,
                    e = t.Chart,
                    i = e.helpers,
                    n = {
                        scaleShowGridLines: !0,
                        scaleGridLineColor: "rgba(0,0,0,.05)",
                        scaleGridLineWidth: 1,
                        scaleShowHorizontalLines: !0,
                        scaleShowVerticalLines: !0,
                        bezierCurve: !0,
                        bezierCurveTension: .4,
                        pointDot: !0,
                        pointDotRadius: 4,
                        pointDotStrokeWidth: 1,
                        pointHitDetectionRadius: 20,
                        datasetStroke: !0,
                        datasetStrokeWidth: 2,
                        datasetFill: !0,
                        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
                    };
                e.Type.extend({
                    name: "Line",
                    defaults: n,
                    initialize: function(t) {
                        this.PointClass = e.Point.extend({
                            strokeWidth: this.options.pointDotStrokeWidth,
                            radius: this.options.pointDotRadius,
                            display: this.options.pointDot,
                            hitDetectionRadius: this.options.pointHitDetectionRadius,
                            ctx: this.chart.ctx,
                            inRange: function(t) {
                                return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                            }
                        }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                            var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                            this.eachPoints(function(t) {
                                t.restore(["fillColor", "strokeColor"])
                            }), i.each(e, function(t) {
                                t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                            }), this.showTooltip(e)
                        }), i.each(t.datasets, function(e) {
                            var n = {
                                label: e.label || null,
                                fillColor: e.fillColor,
                                strokeColor: e.strokeColor,
                                pointColor: e.pointColor,
                                pointStrokeColor: e.pointStrokeColor,
                                points: []
                            };
                            this.datasets.push(n), i.each(e.data, function(i, s) {
                                n.points.push(new this.PointClass({
                                    value: i,
                                    label: t.labels[s],
                                    datasetLabel: e.label,
                                    strokeColor: e.pointStrokeColor,
                                    fillColor: e.pointColor,
                                    highlightFill: e.pointHighlightFill || e.pointColor,
                                    highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                                }))
                            }, this), this.buildScale(t.labels), this.eachPoints(function(t, e) {
                                i.extend(t, {
                                    x: this.scale.calculateX(e),
                                    y: this.scale.endPoint
                                }), t.save()
                            }, this)
                        }, this), this.render()
                    },
                    update: function() {
                        this.scale.update(), i.each(this.activeElements, function(t) {
                            t.restore(["fillColor", "strokeColor"])
                        }), this.eachPoints(function(t) {
                            t.save()
                        }), this.render()
                    },
                    eachPoints: function(t) {
                        i.each(this.datasets, function(e) {
                            i.each(e.points, t, this)
                        }, this)
                    },
                    getPointsAtEvent: function(t) {
                        var e = [],
                            n = i.getRelativePosition(t);
                        return i.each(this.datasets, function(t) {
                            i.each(t.points, function(t) {
                                t.inRange(n.x, n.y) && e.push(t)
                            })
                        }, this), e
                    },
                    buildScale: function(t) {
                        var n = this,
                            s = function() {
                                var t = [];
                                return n.eachPoints(function(e) {
                                    t.push(e.value)
                                }), t
                            },
                            o = {
                                templateString: this.options.scaleLabel,
                                height: this.chart.height,
                                width: this.chart.width,
                                ctx: this.chart.ctx,
                                textColor: this.options.scaleFontColor,
                                fontSize: this.options.scaleFontSize,
                                fontStyle: this.options.scaleFontStyle,
                                fontFamily: this.options.scaleFontFamily,
                                valuesCount: t.length,
                                beginAtZero: this.options.scaleBeginAtZero,
                                integersOnly: this.options.scaleIntegersOnly,
                                calculateYRange: function(t) {
                                    var e = i.calculateScaleRange(s(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                                    i.extend(this, e)
                                },
                                xLabels: t,
                                font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                                lineWidth: this.options.scaleLineWidth,
                                lineColor: this.options.scaleLineColor,
                                showHorizontalLines: this.options.scaleShowHorizontalLines,
                                showVerticalLines: this.options.scaleShowVerticalLines,
                                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                                padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                                showLabels: this.options.scaleShowLabels,
                                display: this.options.showScale
                            };
                        this.options.scaleOverride && i.extend(o, {
                            calculateYRange: i.noop,
                            steps: this.options.scaleSteps,
                            stepValue: this.options.scaleStepWidth,
                            min: this.options.scaleStartValue,
                            max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                        }), this.scale = new e.Scale(o)
                    },
                    addData: function(t, e) {
                        i.each(t, function(t, i) {
                            this.datasets[i].points.push(new this.PointClass({
                                value: t,
                                label: e,
                                x: this.scale.calculateX(this.scale.valuesCount + 1),
                                y: this.scale.endPoint,
                                strokeColor: this.datasets[i].pointStrokeColor,
                                fillColor: this.datasets[i].pointColor
                            }))
                        }, this), this.scale.addXLabel(e), this.update()
                    },
                    removeData: function() {
                        this.scale.removeXLabel(), i.each(this.datasets, function(t) {
                            t.points.shift()
                        }, this), this.update()
                    },
                    reflow: function() {
                        var t = i.extend({
                            height: this.chart.height,
                            width: this.chart.width
                        });
                        this.scale.update(t)
                    },
                    draw: function(t) {
                        var e = t || 1;
                        this.clear();
                        var n = this.chart.ctx,
                            s = function(t) {
                                return null !== t.value
                            },
                            o = function(t, e, n) {
                                return i.findNextWhere(e, s, n) || t
                            },
                            a = function(t, e, n) {
                                return i.findPreviousWhere(e, s, n) || t
                            };
                        this.scale.draw(e), i.each(this.datasets, function(t) {
                            var r = i.where(t.points, s);
                            i.each(t.points, function(t, i) {
                                t.hasValue() && t.transition({
                                    y: this.scale.calculateY(t.value),
                                    x: this.scale.calculateX(i)
                                }, e)
                            }, this), this.options.bezierCurve && i.each(r, function(t, e) {
                                var n = e > 0 && e < r.length - 1 ? this.options.bezierCurveTension : 0;
                                t.controlPoints = i.splineCurve(a(t, r, e), t, o(t, r, e), n), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                            }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(r, function(t, e) {
                                if (0 === e) n.moveTo(t.x, t.y);
                                else if (this.options.bezierCurve) {
                                    var i = a(t, r, e);
                                    n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                                } else n.lineTo(t.x, t.y)
                            }, this), n.stroke(), this.options.datasetFill && r.length > 0 && (n.lineTo(r[r.length - 1].x, this.scale.endPoint), n.lineTo(r[0].x, this.scale.endPoint), n.fillStyle = t.fillColor, n.closePath(), n.fill()), i.each(r, function(t) {
                                t.draw()
                            })
                        }, this)
                    }
                })
            }.call(this),
            function() {
                "use strict";
                var t = this,
                    e = t.Chart,
                    i = e.helpers,
                    n = {
                        scaleShowLabelBackdrop: !0,
                        scaleBackdropColor: "rgba(255,255,255,0.75)",
                        scaleBeginAtZero: !0,
                        scaleBackdropPaddingY: 2,
                        scaleBackdropPaddingX: 2,
                        scaleShowLine: !0,
                        segmentShowStroke: !0,
                        segmentStrokeColor: "#fff",
                        segmentStrokeWidth: 2,
                        animationSteps: 100,
                        animationEasing: "easeOutBounce",
                        animateRotate: !0,
                        animateScale: !1,
                        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
                    };
                e.Type.extend({
                    name: "PolarArea",
                    defaults: n,
                    initialize: function(t) {
                        this.segments = [], this.SegmentArc = e.Arc.extend({
                            showStroke: this.options.segmentShowStroke,
                            strokeWidth: this.options.segmentStrokeWidth,
                            strokeColor: this.options.segmentStrokeColor,
                            ctx: this.chart.ctx,
                            innerRadius: 0,
                            x: this.chart.width / 2,
                            y: this.chart.height / 2
                        }), this.scale = new e.RadialScale({
                            display: this.options.showScale,
                            fontStyle: this.options.scaleFontStyle,
                            fontSize: this.options.scaleFontSize,
                            fontFamily: this.options.scaleFontFamily,
                            fontColor: this.options.scaleFontColor,
                            showLabels: this.options.scaleShowLabels,
                            showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                            backdropColor: this.options.scaleBackdropColor,
                            backdropPaddingY: this.options.scaleBackdropPaddingY,
                            backdropPaddingX: this.options.scaleBackdropPaddingX,
                            lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                            lineColor: this.options.scaleLineColor,
                            lineArc: !0,
                            width: this.chart.width,
                            height: this.chart.height,
                            xCenter: this.chart.width / 2,
                            yCenter: this.chart.height / 2,
                            ctx: this.chart.ctx,
                            templateString: this.options.scaleLabel,
                            valuesCount: t.length
                        }), this.updateScaleRange(t), this.scale.update(), i.each(t, function(t, e) {
                            this.addData(t, e, !0)
                        }, this), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                            var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                            i.each(this.segments, function(t) {
                                t.restore(["fillColor"])
                            }), i.each(e, function(t) {
                                t.fillColor = t.highlightColor
                            }), this.showTooltip(e)
                        }), this.render()
                    },
                    getSegmentsAtEvent: function(t) {
                        var e = [],
                            n = i.getRelativePosition(t);
                        return i.each(this.segments, function(t) {
                            t.inRange(n.x, n.y) && e.push(t)
                        }, this), e
                    },
                    addData: function(t, e, i) {
                        var n = e || this.segments.length;
                        this.segments.splice(n, 0, new this.SegmentArc({
                            fillColor: t.color,
                            highlightColor: t.highlight || t.color,
                            label: t.label,
                            value: t.value,
                            outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                            circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                            startAngle: 1.5 * Math.PI
                        })), i || (this.reflow(), this.update())
                    },
                    removeData: function(t) {
                        var e = i.isNumber(t) ? t : this.segments.length - 1;
                        this.segments.splice(e, 1), this.reflow(), this.update()
                    },
                    calculateTotal: function(t) {
                        this.total = 0, i.each(t, function(t) {
                            this.total += t.value
                        }, this), this.scale.valuesCount = this.segments.length
                    },
                    updateScaleRange: function(t) {
                        var e = [];
                        i.each(t, function(t) {
                            e.push(t.value)
                        });
                        var n = this.options.scaleOverride ? {
                            steps: this.options.scaleSteps,
                            stepValue: this.options.scaleStepWidth,
                            min: this.options.scaleStartValue,
                            max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                        } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                        i.extend(this.scale, n, {
                            size: i.min([this.chart.width, this.chart.height]),
                            xCenter: this.chart.width / 2,
                            yCenter: this.chart.height / 2
                        })
                    },
                    update: function() {
                        this.calculateTotal(this.segments), i.each(this.segments, function(t) {
                            t.save()
                        }), this.render()
                    },
                    reflow: function() {
                        i.extend(this.SegmentArc.prototype, {
                            x: this.chart.width / 2,
                            y: this.chart.height / 2
                        }), this.updateScaleRange(this.segments), this.scale.update(), i.extend(this.scale, {
                            xCenter: this.chart.width / 2,
                            yCenter: this.chart.height / 2
                        }), i.each(this.segments, function(t) {
                            t.update({
                                outerRadius: this.scale.calculateCenterOffset(t.value)
                            })
                        }, this)
                    },
                    draw: function(t) {
                        var e = t || 1;
                        this.clear(), i.each(this.segments, function(t, i) {
                            t.transition({
                                circumference: this.scale.getCircumference(),
                                outerRadius: this.scale.calculateCenterOffset(t.value)
                            }, e), t.endAngle = t.startAngle + t.circumference, 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle), t.draw()
                        }, this), this.scale.draw()
                    }
                })
            }.call(this),
            function() {
                "use strict";
                var t = this,
                    e = t.Chart,
                    i = e.helpers;
                e.Type.extend({
                    name: "Radar",
                    defaults: {
                        scaleShowLine: !0,
                        angleShowLineOut: !0,
                        scaleShowLabels: !1,
                        scaleBeginAtZero: !0,
                        angleLineColor: "rgba(0,0,0,.1)",
                        angleLineWidth: 1,
                        pointLabelFontFamily: "'Arial'",
                        pointLabelFontStyle: "normal",
                        pointLabelFontSize: 10,
                        pointLabelFontColor: "#666",
                        pointDot: !0,
                        pointDotRadius: 3,
                        pointDotStrokeWidth: 1,
                        pointHitDetectionRadius: 20,
                        datasetStroke: !0,
                        datasetStrokeWidth: 2,
                        datasetFill: !0,
                        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
                    },
                    initialize: function(t) {
                        this.PointClass = e.Point.extend({
                            strokeWidth: this.options.pointDotStrokeWidth,
                            radius: this.options.pointDotRadius,
                            display: this.options.pointDot,
                            hitDetectionRadius: this.options.pointHitDetectionRadius,
                            ctx: this.chart.ctx
                        }), this.datasets = [], this.buildScale(t), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                            var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                            this.eachPoints(function(t) {
                                t.restore(["fillColor", "strokeColor"])
                            }), i.each(e, function(t) {
                                t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                            }), this.showTooltip(e)
                        }), i.each(t.datasets, function(e) {
                            var n = {
                                label: e.label || null,
                                fillColor: e.fillColor,
                                strokeColor: e.strokeColor,
                                pointColor: e.pointColor,
                                pointStrokeColor: e.pointStrokeColor,
                                points: []
                            };
                            this.datasets.push(n), i.each(e.data, function(i, s) {
                                var o;
                                this.scale.animation || (o = this.scale.getPointPosition(s, this.scale.calculateCenterOffset(i))), n.points.push(new this.PointClass({
                                    value: i,
                                    label: t.labels[s],
                                    datasetLabel: e.label,
                                    x: this.options.animation ? this.scale.xCenter : o.x,
                                    y: this.options.animation ? this.scale.yCenter : o.y,
                                    strokeColor: e.pointStrokeColor,
                                    fillColor: e.pointColor,
                                    highlightFill: e.pointHighlightFill || e.pointColor,
                                    highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                                }))
                            }, this)
                        }, this), this.render()
                    },
                    eachPoints: function(t) {
                        i.each(this.datasets, function(e) {
                            i.each(e.points, t, this)
                        }, this)
                    },
                    getPointsAtEvent: function(t) {
                        var e = i.getRelativePosition(t),
                            n = i.getAngleFromPoint({
                                x: this.scale.xCenter,
                                y: this.scale.yCenter
                            }, e),
                            s = 2 * Math.PI / this.scale.valuesCount,
                            o = Math.round((n.angle - 1.5 * Math.PI) / s),
                            a = [];
                        return (o >= this.scale.valuesCount || 0 > o) && (o = 0), n.distance <= this.scale.drawingArea && i.each(this.datasets, function(t) {
                            a.push(t.points[o])
                        }), a
                    },
                    buildScale: function(t) {
                        this.scale = new e.RadialScale({
                            display: this.options.showScale,
                            fontStyle: this.options.scaleFontStyle,
                            fontSize: this.options.scaleFontSize,
                            fontFamily: this.options.scaleFontFamily,
                            fontColor: this.options.scaleFontColor,
                            showLabels: this.options.scaleShowLabels,
                            showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                            backdropColor: this.options.scaleBackdropColor,
                            backdropPaddingY: this.options.scaleBackdropPaddingY,
                            backdropPaddingX: this.options.scaleBackdropPaddingX,
                            lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                            lineColor: this.options.scaleLineColor,
                            angleLineColor: this.options.angleLineColor,
                            angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                            pointLabelFontColor: this.options.pointLabelFontColor,
                            pointLabelFontSize: this.options.pointLabelFontSize,
                            pointLabelFontFamily: this.options.pointLabelFontFamily,
                            pointLabelFontStyle: this.options.pointLabelFontStyle,
                            height: this.chart.height,
                            width: this.chart.width,
                            xCenter: this.chart.width / 2,
                            yCenter: this.chart.height / 2,
                            ctx: this.chart.ctx,
                            templateString: this.options.scaleLabel,
                            labels: t.labels,
                            valuesCount: t.datasets[0].data.length
                        }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
                    },
                    updateScaleRange: function(t) {
                        var e = function() {
                                var e = [];
                                return i.each(t, function(t) {
                                    t.data ? e = e.concat(t.data) : i.each(t.points, function(t) {
                                        e.push(t.value)
                                    })
                                }), e
                            }(),
                            n = this.options.scaleOverride ? {
                                steps: this.options.scaleSteps,
                                stepValue: this.options.scaleStepWidth,
                                min: this.options.scaleStartValue,
                                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                            } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                        i.extend(this.scale, n)
                    },
                    addData: function(t, e) {
                        this.scale.valuesCount++, i.each(t, function(t, i) {
                            var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                            this.datasets[i].points.push(new this.PointClass({
                                value: t,
                                label: e,
                                x: n.x,
                                y: n.y,
                                strokeColor: this.datasets[i].pointStrokeColor,
                                fillColor: this.datasets[i].pointColor
                            }))
                        }, this), this.scale.labels.push(e), this.reflow(), this.update()
                    },
                    removeData: function() {
                        this.scale.valuesCount--, this.scale.labels.shift(), i.each(this.datasets, function(t) {
                            t.points.shift()
                        }, this), this.reflow(), this.update()
                    },
                    update: function() {
                        this.eachPoints(function(t) {
                            t.save()
                        }), this.reflow(), this.render()
                    },
                    reflow: function() {
                        i.extend(this.scale, {
                            width: this.chart.width,
                            height: this.chart.height,
                            size: i.min([this.chart.width, this.chart.height]),
                            xCenter: this.chart.width / 2,
                            yCenter: this.chart.height / 2
                        }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
                    },
                    draw: function(t) {
                        var e = t || 1,
                            n = this.chart.ctx;
                        this.clear(), this.scale.draw(), i.each(this.datasets, function(t) {
                            i.each(t.points, function(t, i) {
                                t.hasValue() && t.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(t.value)), e)
                            }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(t.points, function(t, e) {
                                0 === e ? n.moveTo(t.x, t.y) : n.lineTo(t.x, t.y)
                            }, this), n.closePath(), n.stroke(), n.fillStyle = t.fillColor, n.fill(), i.each(t.points, function(t) {
                                t.hasValue() && t.draw()
                            })
                        }, this)
                    }
                })
            }.call(this)
    }(jQuery),
    function() {
        var t = (jQuery.noConflict(), "false");
        jQuery(document).ready(function(e) {
            function i(i) {
                t = "true";
                var n = e("#" + i).serialize();
                e.post(e("#" + i).attr("action"), n, function() {
                    e("#" + i).hide(), e("#formSuccessMessageWrap").fadeIn(500)
                })
            }

            function n(n, s) {
                e(".formValidationError").hide(), e(".fieldHasError").removeClass("fieldHasError"), e("#" + n + " .requiredField").each(function(o) {
                    if ("" == e(this).val() || e(this).val() == e(this).attr("data-dummy")) return e(this).val(e(this).attr("data-dummy")), e(this).focus(), e(this).addClass("fieldHasError"), e("#" + e(this).attr("id") + "Error").fadeIn(300), !1;
                    if (e(this).hasClass("requiredEmailField")) {
                        var a = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                            r = "#" + e(this).attr("id");
                        if (!a.test(e(r).val())) return e(r).focus(), e(r).addClass("fieldHasError"), e(r + "Error2").fadeIn(300), !1
                    }
                    "false" == t && o == e("#" + n + " .requiredField").length - 1 && i(n, s)
                })
            }
            e("#formSuccessMessageWrap").hide(0), e(".formValidationError").fadeOut(0), e('input[type="text"], input[type="password"], textarea').focus(function() {
                e(this).val() == e(this).attr("data-dummy") && e(this).val("")
            }), e("input, textarea").blur(function() {
                "" == e(this).val() && e(this).val(e(this).attr("data-dummy"))
            }), e("#contactSubmitButton").click(function() {
                return n(e(this).attr("data-formId")), !1
            })
        })
    }(jQuery),
    function() {
        ! function(t) {
            "use strict";

            function e(t) {
                return null !== t && t === t.window
            }

            function i(t) {
                return e(t) ? t : 9 === t.nodeType && t.defaultView
            }

            function n(t) {
                var e, n, s = {
                        top: 0,
                        left: 0
                    },
                    o = t && t.ownerDocument;
                return e = o.documentElement, "undefined" != typeof t.getBoundingClientRect && (s = t.getBoundingClientRect()), n = i(o), {
                    top: s.top + n.pageYOffset - e.clientTop,
                    left: s.left + n.pageXOffset - e.clientLeft
                }
            }

            function s(t) {
                var e = "";
                for (var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
                return e
            }

            function o(t) {
                if (c.allowEvent(t) === !1) return null;
                for (var e = null, i = t.target || t.srcElement; null !== i.parentElement;) {
                    if (-1 !== i.className.indexOf("waves-effect")) {
                        e = i;
                        break
                    }
                    i = i.parentElement
                }
                return e
            }

            function a(e) {
                var i = o(e);
                null !== i && (h.show(e, i), "ontouchstart" in t && (i.addEventListener("touchend", h.hide, !1), i.addEventListener("touchcancel", h.hide, !1)), i.addEventListener("mouseup", h.hide, !1), i.addEventListener("mouseleave", h.hide, !1))
            }
            var r = r || {},
                l = document.querySelectorAll.bind(document),
                h = {
                    duration: 750,
                    show: function(t, e) {
                        if (2 === t.button) return !1;
                        var i = e || this,
                            o = document.createElement("div");
                        o.className = "waves-ripple", i.appendChild(o);
                        var a = n(i),
                            r = t.pageY - a.top,
                            l = t.pageX - a.left,
                            c = "scale(" + i.clientWidth / 100 * 3 + ")";
                        "touches" in t && (r = t.touches[0].pageY - a.top, l = t.touches[0].pageX - a.left), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-scale", c), o.setAttribute("data-x", l), o.setAttribute("data-y", r);
                        var d = {
                            top: r + "px",
                            left: l + "px"
                        };
                        o.className = o.className + " waves-notransition", o.setAttribute("style", s(d)), o.className = o.className.replace("waves-notransition", ""), d["-webkit-transform"] = c, d["-moz-transform"] = c, d["-ms-transform"] = c, d["-o-transform"] = c, d.transform = c, d.opacity = "1", d["-webkit-transition-duration"] = h.duration + "ms", d["-moz-transition-duration"] = h.duration + "ms", d["-o-transition-duration"] = h.duration + "ms", d["transition-duration"] = h.duration + "ms", o.setAttribute("style", s(d))
                    },
                    hide: function(t) {
                        c.touchup(t);
                        var e = this,
                            i = (1.4 * e.clientWidth, null),
                            n = e.getElementsByClassName("waves-ripple");
                        if (!(n.length > 0)) return !1;
                        i = n[n.length - 1];
                        var o = i.getAttribute("data-x"),
                            a = i.getAttribute("data-y"),
                            r = i.getAttribute("data-scale"),
                            l = Date.now() - Number(i.getAttribute("data-hold")),
                            d = 350 - l;
                        0 > d && (d = 0), setTimeout(function() {
                            var t = {
                                top: a + "px",
                                left: o + "px",
                                opacity: "0",
                                "-webkit-transition-duration": h.duration + "ms",
                                "-moz-transition-duration": h.duration + "ms",
                                "-o-transition-duration": h.duration + "ms",
                                "transition-duration": h.duration + "ms",
                                "-webkit-transform": r,
                                "-moz-transform": r,
                                "-ms-transform": r,
                                "-o-transform": r,
                                transform: r
                            };
                            i.setAttribute("style", s(t)), setTimeout(function() {
                                try {
                                    e.removeChild(i)
                                } catch (t) {
                                    return !1
                                }
                            }, h.duration)
                        }, d)
                    },
                    wrapInput: function(t) {
                        for (var e = 0; e < t.length; e++) {
                            var i = t[e];
                            if ("input" === i.tagName.toLowerCase()) {
                                var n = i.parentNode;
                                if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect")) continue;
                                var s = document.createElement("i");
                                s.className = i.className + " waves-input-wrapper";
                                var o = i.getAttribute("style");
                                o || (o = ""), s.setAttribute("style", o), i.className = "waves-button-input", i.removeAttribute("style"), n.replaceChild(s, i), s.appendChild(i)
                            }
                        }
                    }
                },
                c = {
                    touches: 0,
                    allowEvent: function(t) {
                        var e = !0;
                        return "touchstart" === t.type ? c.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function() {
                            c.touches > 0 && (c.touches -= 1)
                        }, 500) : "mousedown" === t.type && c.touches > 0 && (e = !1), e
                    },
                    touchup: function(t) {
                        c.allowEvent(t)
                    }
                };
            r.displayEffect = function(e) {
                e = e || {}, "duration" in e && (h.duration = e.duration), h.wrapInput(l(".waves-effect")), "ontouchstart" in t && document.body.addEventListener("touchstart", a, !1), document.body.addEventListener("mousedown", a, !1)
            }, r.attach = function(e) {
                "input" === e.tagName.toLowerCase() && (h.wrapInput([e]), e = e.parentElement), "ontouchstart" in t && e.addEventListener("touchstart", a, !1), e.addEventListener("mousedown", a, !1)
            }, t.Waves = r
        }(window)
    }(jQuery),
    function(t) {
        t(window).load(function() {
            t("#status").fadeOut(), t("#preloader").delay(300).fadeOut("medium")
        }), t(document).ready(function() {
            function e(t) {
                k = t, i(), n()
            }

            function i() {
                C = t("<div>", {
                    id: "progressBar"
                }), S = t("<div>", {
                    id: "bar"
                }), C.append(S).prependTo(k)
            }

            function n() {
                L = 0, P = !1, T = setInterval(s, 4)
            }

            function s() {
                P === !1 && (L += 1 / E, S.css({
                    width: L + "%"
                }), L >= 100 && k.trigger("owl.next"))
            }

            function o() {
                P = !0
            }

            function a() {
                clearTimeout(T), n()
            }

            function r() {
                A = t(window).height(), t(".coverpage").css({
                    height: A + 1
                })
            }

            function l() {
                M = t(window).width(), F = t(window).height(), t(".coverpage-image").css({
                    height: F - 60,
                    width: M
                }), t(".landing-page").css({
                    height: F - 1,
                    width: M
                }), t(".slider-image").css({
                    height: F - 60,
                    width: M
                })
            }
            window.addEventListener("load", function() {
                FastClick.attach(document.body)
            }, !1), t(".menu-wrapper").addClass("hide-menu-wrapper");
            var h = t(".menu");
            h.owlCarousel({
                autoPlay: !1,
                scrollPerPage: !0,
                pagination: !1,
                rewindSpeed: 0,
                items: 15,
                itemsDesktop: [1199, 6],
                itemsDesktopSmall: [979, 5],
                itemsTablet: [768, 4],
                itemsMobile: [560, 3]
            });
            var c = document.getElementById("selected"),
                d = t(".menu a").index(c);
            h.trigger("owl.jumpTo", d);
            var u = 0;
            window.setInterval(function() {
                u = 0
            }, 500), t(".menu").on("DOMMouseScroll mousewheel", function(t) {
                if (t.originalEvent.detail > 0 || t.originalEvent.wheelDelta < 0)
                    for (; 0 == u;) h.trigger("owl.next"), u++;
                else
                    for (; 0 == u;) h.trigger("owl.prev"), u++
            }), t(".deploy-submenu").click(function() {
                return t(this).toggleClass("active-submenu"), t(this).parent().find(".submenu").toggleClass("active-submenu-items"), !1
            }), t(".swipebox").click(function() {
                t(".gallery").hide(0), t(".portfolio-wide").hide(0)
            }), t(".open-menu").click(function() {
                return t(".header, .menu-wrapper").removeClass("hide-header-right"), t(".header, .menu-wrapper").addClass("hide-header-left"), t(".menu-wrapper").addClass("hide-menu-wrapper"), t(".open-slide").removeClass("active-slide"), "left" == p.state().state ? p.close() : p.open("left"), !1
            }), t(".open-more").click(function() {
                return t(".header, .menu-wrapper").removeClass("hide-header-left"), t(".header, .menu-wrapper").addClass("hide-header-right"), t(".menu-wrapper").addClass("hide-menu-wrapper"), t(".open-slide").removeClass("active-slide"), "right" == p.state().state ? p.close() : p.open("right"), !1
            }), t(".sidebar-close, .all-elements").click(function() {
                t(".header, .menu-wrapper").removeClass("hide-header-left"), t(".header, .menu-wrapper").removeClass("hide-header-right"), t(".menu-wrapper").addClass("hide-menu-wrapper"), t(".open-slide").removeClass("active-slide"), p.close()
            });
            var p = new Snap({
                element: document.getElementById("content")
            });
            t(".show-share-bottom").click(function() {
                return t(".share-bottom").toggleClass("active-share-bottom"), !1
            }), t(".close-share-bottom, #content, .open-menu, .open-more").click(function() {
                t(".share-bottom").removeClass("active-share-bottom")
            });
            var f = "June 7, 2015 15:03:25";
            t(".countdown").countdown({
                date: f,
                render: function(e) {
                    t(this.el).html("<div class='countdown-box box-years'><div class='countdown-years'>" + this.leadingZeros(e.years, 2) + "</div><span>years</span></div><div class='countdown-box box-days'><div class='countdown-days'>" + this.leadingZeros(e.days, 2) + "</div><span>days</span></div><div class='countdown-box box-hours'><div class='countdown-hours'>" + this.leadingZeros(e.hours, 2) + "</div><span>hours</span></div><div class='countdown-box box-minutes'><div class='countdown-minutes'>" + this.leadingZeros(e.min, 2) + "</div><span>min</span></div><div class='countdown-box box-seconds'><div class='countdown-seconds'>" + this.leadingZeros(e.sec, 2) + "</div><span>sec</span></div>")
                }
            });
            var g = new WOW({
                boxClass: "animate",
                animateClass: "animated",
                offset: 0,
                mobile: !0
            });
            g.init(), t(".footer-up").click(function() {
                return t("#content").animate({
                    scrollTop: 0
                }, 800, "easeInOutQuad"), !1
            }), t(".adaptive-one-activate").click(function() {
                return t(".portfolio-adaptive").removeClass("adaptive-three"), t(".portfolio-adaptive").removeClass("adaptive-two"), t(".portfolio-adaptive").addClass("adaptive-one"), t(this).addClass("active-adaptive-style"), t(".adaptive-two-activate, .adaptive-three-activate").removeClass("active-adaptive-style"), !1
            }), t(".adaptive-two-activate").click(function() {
                return t(".portfolio-adaptive").removeClass("adaptive-three"), t(".portfolio-adaptive").addClass("adaptive-two"), t(".portfolio-adaptive").removeClass("adaptive-one"), t(this).addClass("active-adaptive-style"), t(".adaptive-three-activate, .adaptive-one-activate").removeClass("active-adaptive-style"), !1
            }), t(".adaptive-three-activate").click(function() {
                return t(".portfolio-adaptive").addClass("adaptive-three"), t(".portfolio-adaptive").removeClass("adaptive-two"), t(".portfolio-adaptive").removeClass("adaptive-one"), t(this).addClass("active-adaptive-style"), t(".adaptive-two-activate, .adaptive-one-activate").removeClass("active-adaptive-style"), !1
            }), t(".open-sharebox").click(function() {
                t(".sharebox-wrapper").fadeIn(200)
            }), t(".close-sharebox").click(function() {
                t(".sharebox-wrapper").fadeOut(200)
            }), t(".open-loginbox").click(function() {
                t(".loginbox-wrapper").fadeIn(200)
            }), t(".close-loginbox").click(function() {
                t(".loginbox-wrapper").fadeOut(200)
            }), t(".checkbox-one").click(function() {
                return t(this).toggleClass("checkbox-one-checked"), !1
            }), t(".checkbox-two").click(function() {
                return t(this).toggleClass("checkbox-two-checked"), !1
            }), t(".checkbox-three").click(function() {
                return t(this).toggleClass("checkbox-three-checked"), !1
            }), t(".radio-one").click(function() {
                return t(this).toggleClass("radio-one-checked"), !1
            }), t(".radio-two").click(function() {
                return t(this).toggleClass("radio-two-checked"), !1
            }), t(".switch-1").click(function() {
                return t(this).toggleClass("switch-1-on"), !1
            }), t(".switch-2").click(function() {
                return t(this).toggleClass("switch-2-on"), !1
            }), t(".switch-3").click(function() {
                return t(this).toggleClass("switch-3-on"), !1
            }), t(".switch, .switch-icon").click(function() {
                return t(this).parent().find(".switch-box-content").slideToggle(200), t(this).parent().find(".switch-box-subtitle").slideToggle(200), !1
            }), t(".tap-dismiss-notification").click(function() {
                return t(this).slideUp(200), !1
            }), t(".close-big-notification").click(function() {
                return t(this).parent().slideUp(200), !1
            }), t(".notification-top").addClass("show-notification-top"), t(".hide-top-notification").click(function() {
                t(".notification-top").removeClass("show-notification-top")
            }), t(".tab-but-1").click(function() {
                return t(".tab-but").removeClass("tab-active"), t(".tab-but-1").addClass("tab-active"), t(".tab-content").slideUp(200), t(".tab-content-1").slideDown(200), !1
            }), t(".tab-but-2").click(function() {
                return t(".tab-but").removeClass("tab-active"), t(".tab-but-2").addClass("tab-active"), t(".tab-content").slideUp(200), t(".tab-content-2").slideDown(200), !1
            }), t(".tab-but-3").click(function() {
                return t(".tab-but").removeClass("tab-active"), t(".tab-but-3").addClass("tab-active"), t(".tab-content").slideUp(200), t(".tab-content-3").slideDown(200), !1
            }), t(".tab-but-4").click(function() {
                return t(".tab-but").removeClass("tab-active"), t(".tab-but-4").addClass("tab-active"), t(".tab-content").slideUp(200), t(".tab-content-4").slideDown(200), !1
            }), t(".tab-but-5").click(function() {
                return t(".tab-but").removeClass("tab-active"), t(".tab-but-5").addClass("tab-active"), t(".tab-content").slideUp(200), t(".tab-content-5").slideDown(200), !1
            }), t(".deploy-toggle-1").click(function() {
                return t(this).parent().find(".toggle-content").slideToggle(200), t(this).toggleClass("toggle-1-active"), !1
            }), t(".deploy-toggle-2").click(function() {
                return t(this).parent().find(".toggle-content").slideToggle(200), t(this).toggleClass("toggle-2-active"), !1
            }), t(".deploy-toggle-3").click(function() {
                return t(this).parent().find(".toggle-content").slideToggle(200), t(this).find("em strong").toggleClass("toggle-3-active-ball"), t(this).find("em").toggleClass("toggle-3-active-background"), !1
            }), t(".submenu-nav-deploy").click(function() {
                return t(this).toggleClass("submenu-nav-deploy-active"), t(this).parent().find(".submenu-nav-items").slideToggle(200), !1
            }), t(".sliding-door-top").click(function() {
                return t(this).animate({
                    left: "101%"
                }, 500, "easeInOutExpo"), !1
            }), t(".sliding-door-bottom a em").click(function() {
                return t(this).parent().parent().parent().find(".sliding-door-top").animate({
                    left: "0px"
                }, 500, "easeOutBounce"), !1
            });
            var m = navigator.userAgent.toLowerCase().indexOf("iphone"),
                v = navigator.userAgent.toLowerCase().indexOf("ipad"),
                b = navigator.userAgent.toLowerCase().indexOf("ipod"),
                w = navigator.userAgent.toLowerCase().indexOf("android");
            m > -1 && (t(".ipod-detected").hide(), t(".ipad-detected").hide(), t(".iphone-detected").show(), t(".android-detected").hide()), v > -1 && (t(".ipod-detected").hide(), t(".ipad-detected").show(), t(".iphone-detected").hide(), t(".android-detected").hide()), b > -1 && (t(".ipod-detected").show(), t(".ipad-detected").hide(), t(".iphone-detected").hide(), t(".android-detected").hide()), w > -1 && (t(".ipod-detected").hide(), t(".ipad-detected").hide(), t(".iphone-detected").hide(), t(".android-detected").show()),
                function(t, e, i) {
                    if (i in e && e[i]) {
                        var n, s = t.location,
                            o = /^(a|html)$/i;
                        t.addEventListener("click", function(t) {
                            for (n = t.target; !o.test(n.nodeName);) n = n.parentNode;
                            "href" in n && (n.href.indexOf("http") || ~n.href.indexOf(s.host)) && (t.preventDefault(), s.href = n.href)
                        }, !1)
                    }
                }(document, window.navigator, "standalone");
            var y = t(".staff-slider");
            y.owlCarousel({
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 2],
                itemsTabletSmall: [480, 1],
                itemsMobile: [370, 1],
                singleItem: !1,
                itemsScaleUp: !1,
                slideSpeed: 250,
                paginationSpeed: 250,
                rewindSpeed: 250,
                pagination: !1,
                autoPlay: !1,
                autoHeight: !1
            }), t(".next-staff").click(function() {
                return y.trigger("owl.next"), !1
            }), t(".prev-staff").click(function() {
                return y.trigger("owl.prev"), !1
            });
            var x = t(".quote-slider");
            x.owlCarousel({
                items: 1,
                itemsDesktop: [1199, 1],
                itemsDesktopSmall: [980, 1],
                itemsTablet: [768, 1],
                itemsTabletSmall: [480, 1],
                itemsMobile: [370, 1],
                singleItem: !1,
                itemsScaleUp: !1,
                slideSpeed: 800,
                paginationSpeed: 300,
                rewindSpeed: 250,
                pagination: !1,
                autoPlay: !0
            }), t(".next-quote").click(function() {
                return x.trigger("owl.next"), !1
            }), t(".prev-quote").click(function() {
                return x.trigger("owl.prev"), !1
            }), t(".swipebox").swipebox({
                useCSS: !0,
                hideBarsDelay: 3e3
            }), t(".wide-gallery-item").swipebox({
                useCSS: !0,
                hideBarsDelay: 3e3
            });
            var C, S, k, P, T, L, E = 7;
            t(".homepage-slider").owlCarousel({
                slideSpeed: 500,
                paginationSpeed: 500,
                singleItem: !0,
                pagination: !1,
                afterInit: e,
                afterMove: a,
                startDragging: o
            }), t(".next-home").click(function() {
                return t(".homepage-slider").trigger("owl.next"), !1
            }), t(".prev-home").click(function() {
                return t(".homepage-slider").trigger("owl.prev"), !1
            });
            var A = 0;
            r(), t(window).resize(function() {
                r()
            }), t.scrollIt();
            var M = 0,
                F = 0;
            l(), t(window).resize(l), t(".full-slider").owlCarousel({
                slideSpeed: 500,
                paginationSpeed: 500,
                singleItem: !0,
                pagination: !0,
                afterMove: a,
                afterInit: null,
                startDragging: o
            }), t(".coverpage-slider").owlCarousel({
                slideSpeed: 500,
                paginationSpeed: 500,
                singleItem: !0,
                pagination: !0,
                afterInit: e,
                afterMove: a,
                startDragging: o
            })
        })
    }(jQuery);
    var j = jQuery.noConflict();
    j(document).ready(function() {
        j(".open-slide").click(function() {
            j(".menu-wrapper").toggleClass("hide-menu-wrapper"), j(".menu-wrapper em").delay(2500).slideUp(300), j(this).toggleClass("active-slide"), j(".header").toggleClass("move-header")
        })
    });
};