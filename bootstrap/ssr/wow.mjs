/*! WOW - v1.0.1 - 2014-08-15
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function() {
  var a, b, c, d = function(a2, b2) {
    return function() {
      return a2.apply(b2, arguments);
    };
  }, e = [].indexOf || function(a2) {
    for (var b2 = 0, c2 = this.length; c2 > b2; b2++)
      if (b2 in this && this[b2] === a2)
        return b2;
    return -1;
  };
  b = function() {
    function a2() {
    }
    return a2.prototype.extend = function(a3, b2) {
      var c2, d2;
      for (c2 in b2)
        d2 = b2[c2], null == a3[c2] && (a3[c2] = d2);
      return a3;
    }, a2.prototype.isMobile = function(a3) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a3);
    }, a2;
  }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
    function a2() {
      this.keys = [], this.values = [];
    }
    return a2.prototype.get = function(a3) {
      var b2, c2, d2, e2, f;
      for (f = this.keys, b2 = d2 = 0, e2 = f.length; e2 > d2; b2 = ++d2)
        if (c2 = f[b2], c2 === a3)
          return this.values[b2];
    }, a2.prototype.set = function(a3, b2) {
      var c2, d2, e2, f, g;
      for (g = this.keys, c2 = e2 = 0, f = g.length; f > e2; c2 = ++e2)
        if (d2 = g[c2], d2 === a3)
          return void (this.values[c2] = b2);
      return this.keys.push(a3), this.values.push(b2);
    }, a2;
  }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
    function a2() {
      console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
    }
    return a2.notSupported = true, a2.prototype.observe = function() {
    }, a2;
  }()), this.WOW = function() {
    function f(a2) {
      null == a2 && (a2 = {}), this.scrollCallback = d(this.scrollCallback, this), this.scrollHandler = d(this.scrollHandler, this), this.start = d(this.start, this), this.scrolled = true, this.config = this.util().extend(a2, this.defaults), this.animationNameCache = new c();
    }
    return f.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: true, live: true }, f.prototype.init = function() {
      var a2;
      return this.element = window.document.documentElement, "interactive" === (a2 = document.readyState) || "complete" === a2 ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = [];
    }, f.prototype.start = function() {
      var b2, c2, d2, e2;
      if (this.stopped = false, this.boxes = function() {
        var a2, c3, d3, e3;
        for (d3 = this.element.querySelectorAll("." + this.config.boxClass), e3 = [], a2 = 0, c3 = d3.length; c3 > a2; a2++)
          b2 = d3[a2], e3.push(b2);
        return e3;
      }.call(this), this.all = function() {
        var a2, c3, d3, e3;
        for (d3 = this.boxes, e3 = [], a2 = 0, c3 = d3.length; c3 > a2; a2++)
          b2 = d3[a2], e3.push(b2);
        return e3;
      }.call(this), this.boxes.length)
        if (this.disabled())
          this.resetStyle();
        else {
          for (e2 = this.boxes, c2 = 0, d2 = e2.length; d2 > c2; c2++)
            b2 = e2[c2], this.applyStyle(b2, true);
          window.addEventListener("scroll", this.scrollHandler, false), window.addEventListener("resize", this.scrollHandler, false), this.interval = setInterval(this.scrollCallback, 50);
        }
      return this.config.live ? new a(function(a2) {
        return function(b3) {
          var c3, d3, e3, f2, g;
          for (g = [], e3 = 0, f2 = b3.length; f2 > e3; e3++)
            d3 = b3[e3], g.push(function() {
              var a3, b4, e4, f3;
              for (e4 = d3.addedNodes || [], f3 = [], a3 = 0, b4 = e4.length; b4 > a3; a3++)
                c3 = e4[a3], f3.push(this.doSync(c3));
              return f3;
            }.call(a2));
          return g;
        };
      }(this)).observe(document.body, { childList: true, subtree: true }) : void 0;
    }, f.prototype.stop = function() {
      return this.stopped = true, window.removeEventListener("scroll", this.scrollHandler, false), window.removeEventListener("resize", this.scrollHandler, false), null != this.interval ? clearInterval(this.interval) : void 0;
    }, f.prototype.sync = function() {
      return a.notSupported ? this.doSync(this.element) : void 0;
    }, f.prototype.doSync = function(a2) {
      var b2, c2, d2, f2, g;
      if (!this.stopped) {
        if (null == a2 && (a2 = this.element), 1 !== a2.nodeType)
          return;
        for (a2 = a2.parentNode || a2, f2 = a2.querySelectorAll("." + this.config.boxClass), g = [], c2 = 0, d2 = f2.length; d2 > c2; c2++)
          b2 = f2[c2], e.call(this.all, b2) < 0 ? (this.applyStyle(b2, true), this.boxes.push(b2), this.all.push(b2), g.push(this.scrolled = true)) : g.push(void 0);
        return g;
      }
    }, f.prototype.show = function(a2) {
      return this.applyStyle(a2), a2.className = "" + a2.className + " " + this.config.animateClass;
    }, f.prototype.applyStyle = function(a2, b2) {
      var c2, d2, e2;
      return d2 = a2.getAttribute("data-wow-duration"), c2 = a2.getAttribute("data-wow-delay"), e2 = a2.getAttribute("data-wow-iteration"), this.animate(function(f2) {
        return function() {
          return f2.customStyle(a2, b2, d2, c2, e2);
        };
      }(this));
    }, f.prototype.animate = function() {
      return "requestAnimationFrame" in window ? function(a2) {
        return window.requestAnimationFrame(a2);
      } : function(a2) {
        return a2();
      };
    }(), f.prototype.resetStyle = function() {
      var a2, b2, c2, d2, e2;
      for (d2 = this.boxes, e2 = [], b2 = 0, c2 = d2.length; c2 > b2; b2++)
        a2 = d2[b2], e2.push(a2.setAttribute("style", "visibility: visible;"));
      return e2;
    }, f.prototype.customStyle = function(a2, b2, c2, d2, e2) {
      return b2 && this.cacheAnimationName(a2), a2.style.visibility = b2 ? "hidden" : "visible", c2 && this.vendorSet(a2.style, { animationDuration: c2 }), d2 && this.vendorSet(a2.style, { animationDelay: d2 }), e2 && this.vendorSet(a2.style, { animationIterationCount: e2 }), this.vendorSet(a2.style, { animationName: b2 ? "none" : this.cachedAnimationName(a2) }), a2;
    }, f.prototype.vendors = ["moz", "webkit"], f.prototype.vendorSet = function(a2, b2) {
      var c2, d2, e2, f2;
      f2 = [];
      for (c2 in b2)
        d2 = b2[c2], a2["" + c2] = d2, f2.push(function() {
          var b3, f3, g, h;
          for (g = this.vendors, h = [], b3 = 0, f3 = g.length; f3 > b3; b3++)
            e2 = g[b3], h.push(a2["" + e2 + c2.charAt(0).toUpperCase() + c2.substr(1)] = d2);
          return h;
        }.call(this));
      return f2;
    }, f.prototype.vendorCSS = function(a2, b2) {
      var c2, d2, e2, f2, g, h;
      for (d2 = window.getComputedStyle(a2), c2 = d2.getPropertyCSSValue(b2), h = this.vendors, f2 = 0, g = h.length; g > f2; f2++)
        e2 = h[f2], c2 = c2 || d2.getPropertyCSSValue("-" + e2 + "-" + b2);
      return c2;
    }, f.prototype.animationName = function(a2) {
      var b2;
      try {
        b2 = this.vendorCSS(a2, "animation-name").cssText;
      } catch (c2) {
        b2 = window.getComputedStyle(a2).getPropertyValue("animation-name");
      }
      return "none" === b2 ? "" : b2;
    }, f.prototype.cacheAnimationName = function(a2) {
      return this.animationNameCache.set(a2, this.animationName(a2));
    }, f.prototype.cachedAnimationName = function(a2) {
      return this.animationNameCache.get(a2);
    }, f.prototype.scrollHandler = function() {
      return this.scrolled = true;
    }, f.prototype.scrollCallback = function() {
      var a2;
      return !this.scrolled || (this.scrolled = false, this.boxes = function() {
        var b2, c2, d2, e2;
        for (d2 = this.boxes, e2 = [], b2 = 0, c2 = d2.length; c2 > b2; b2++)
          a2 = d2[b2], a2 && (this.isVisible(a2) ? this.show(a2) : e2.push(a2));
        return e2;
      }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
    }, f.prototype.offsetTop = function(a2) {
      for (var b2; void 0 === a2.offsetTop; )
        a2 = a2.parentNode;
      for (b2 = a2.offsetTop; a2 = a2.offsetParent; )
        b2 += a2.offsetTop;
      return b2;
    }, f.prototype.isVisible = function(a2) {
      var b2, c2, d2, e2, f2;
      return c2 = a2.getAttribute("data-wow-offset") || this.config.offset, f2 = window.pageYOffset, e2 = f2 + Math.min(this.element.clientHeight, innerHeight) - c2, d2 = this.offsetTop(a2), b2 = d2 + a2.clientHeight, e2 >= d2 && b2 >= f2;
    }, f.prototype.util = function() {
      return null != this._util ? this._util : this._util = new b();
    }, f.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    }, f;
  }();
}).call(globalThis);
