/*!
 * Isotope PACKAGED v2.1.1
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */
(function(t) {
  function e() {
  }
  function i(t2) {
    function i2(e2) {
      e2.prototype.option || (e2.prototype.option = function(e3) {
        t2.isPlainObject(e3) && (this.options = t2.extend(true, this.options, e3));
      });
    }
    function n(e2, i3) {
      t2.fn[e2] = function(n2) {
        if ("string" == typeof n2) {
          for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
            var p = this[a], h = t2.data(p, e2);
            if (h)
              if (t2.isFunction(h[n2]) && "_" !== n2.charAt(0)) {
                var f = h[n2].apply(h, s);
                if (void 0 !== f)
                  return f;
              } else
                r("no such method '" + n2 + "' for " + e2 + " instance");
            else
              r("cannot call methods on " + e2 + " prior to initialization; attempted to call '" + n2 + "'");
          }
          return this;
        }
        return this.each(function() {
          var o2 = t2.data(this, e2);
          o2 ? (o2.option(n2), o2._init()) : (o2 = new i3(this, n2), t2.data(this, e2, o2));
        });
      };
    }
    if (t2) {
      var r = "undefined" == typeof console ? e : function(t3) {
        console.error(t3);
      };
      return t2.bridget = function(t3, e2) {
        i2(e2), n(t3, e2);
      }, t2.bridget;
    }
  }
  var o = Array.prototype.slice;
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : "object" == typeof exports ? i(require("jquery")) : i(t.jQuery);
})(window), function(t) {
  function e(e2) {
    var i2 = t.event;
    return i2.target = i2.target || i2.srcElement || e2, i2;
  }
  var i = document.documentElement, o = function() {
  };
  i.addEventListener ? o = function(t2, e2, i2) {
    t2.addEventListener(e2, i2, false);
  } : i.attachEvent && (o = function(t2, i2, o2) {
    t2[i2 + o2] = o2.handleEvent ? function() {
      var i3 = e(t2);
      o2.handleEvent.call(o2, i3);
    } : function() {
      var i3 = e(t2);
      o2.call(t2, i3);
    }, t2.attachEvent("on" + i2, t2[i2 + o2]);
  });
  var n = function() {
  };
  i.removeEventListener ? n = function(t2, e2, i2) {
    t2.removeEventListener(e2, i2, false);
  } : i.detachEvent && (n = function(t2, e2, i2) {
    t2.detachEvent("on" + e2, t2[e2 + i2]);
    try {
      delete t2[e2 + i2];
    } catch (o2) {
      t2[e2 + i2] = void 0;
    }
  });
  var r = { bind: o, unbind: n };
  "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r;
}(globalThis), function(t) {
  function e(t2) {
    "function" == typeof t2 && (e.isReady ? t2() : s.push(t2));
  }
  function i(t2) {
    var i2 = "readystatechange" === t2.type && "complete" !== r.readyState;
    e.isReady || i2 || o();
  }
  function o() {
    e.isReady = true;
    for (var t2 = 0, i2 = s.length; i2 > t2; t2++) {
      var o2 = s[t2];
      o2();
    }
  }
  function n(n2) {
    return "complete" === r.readyState ? o() : (n2.bind(r, "DOMContentLoaded", i), n2.bind(r, "readystatechange", i), n2.bind(t, "load", i)), e;
  }
  var r = t.document, s = [];
  e.isReady = false, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], n) : "object" == typeof exports ? module.exports = n(require("eventie")) : t.docReady = n(t.eventie);
}(window), function() {
  function t() {
  }
  function e(t2, e2) {
    for (var i2 = t2.length; i2--; )
      if (t2[i2].listener === e2)
        return i2;
    return -1;
  }
  function i(t2) {
    return function() {
      return this[t2].apply(this, arguments);
    };
  }
  var o = t.prototype, n = this, r = n.EventEmitter;
  o.getListeners = function(t2) {
    var e2, i2, o2 = this._getEvents();
    if (t2 instanceof RegExp) {
      e2 = {};
      for (i2 in o2)
        o2.hasOwnProperty(i2) && t2.test(i2) && (e2[i2] = o2[i2]);
    } else
      e2 = o2[t2] || (o2[t2] = []);
    return e2;
  }, o.flattenListeners = function(t2) {
    var e2, i2 = [];
    for (e2 = 0; t2.length > e2; e2 += 1)
      i2.push(t2[e2].listener);
    return i2;
  }, o.getListenersAsObject = function(t2) {
    var e2, i2 = this.getListeners(t2);
    return i2 instanceof Array && (e2 = {}, e2[t2] = i2), e2 || i2;
  }, o.addListener = function(t2, i2) {
    var o2, n2 = this.getListenersAsObject(t2), r2 = "object" == typeof i2;
    for (o2 in n2)
      n2.hasOwnProperty(o2) && -1 === e(n2[o2], i2) && n2[o2].push(r2 ? i2 : { listener: i2, once: false });
    return this;
  }, o.on = i("addListener"), o.addOnceListener = function(t2, e2) {
    return this.addListener(t2, { listener: e2, once: true });
  }, o.once = i("addOnceListener"), o.defineEvent = function(t2) {
    return this.getListeners(t2), this;
  }, o.defineEvents = function(t2) {
    for (var e2 = 0; t2.length > e2; e2 += 1)
      this.defineEvent(t2[e2]);
    return this;
  }, o.removeListener = function(t2, i2) {
    var o2, n2, r2 = this.getListenersAsObject(t2);
    for (n2 in r2)
      r2.hasOwnProperty(n2) && (o2 = e(r2[n2], i2), -1 !== o2 && r2[n2].splice(o2, 1));
    return this;
  }, o.off = i("removeListener"), o.addListeners = function(t2, e2) {
    return this.manipulateListeners(false, t2, e2);
  }, o.removeListeners = function(t2, e2) {
    return this.manipulateListeners(true, t2, e2);
  }, o.manipulateListeners = function(t2, e2, i2) {
    var o2, n2, r2 = t2 ? this.removeListener : this.addListener, s = t2 ? this.removeListeners : this.addListeners;
    if ("object" != typeof e2 || e2 instanceof RegExp)
      for (o2 = i2.length; o2--; )
        r2.call(this, e2, i2[o2]);
    else
      for (o2 in e2)
        e2.hasOwnProperty(o2) && (n2 = e2[o2]) && ("function" == typeof n2 ? r2.call(this, o2, n2) : s.call(this, o2, n2));
    return this;
  }, o.removeEvent = function(t2) {
    var e2, i2 = typeof t2, o2 = this._getEvents();
    if ("string" === i2)
      delete o2[t2];
    else if (t2 instanceof RegExp)
      for (e2 in o2)
        o2.hasOwnProperty(e2) && t2.test(e2) && delete o2[e2];
    else
      delete this._events;
    return this;
  }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function(t2, e2) {
    var i2, o2, n2, r2, s = this.getListenersAsObject(t2);
    for (n2 in s)
      if (s.hasOwnProperty(n2))
        for (o2 = s[n2].length; o2--; )
          i2 = s[n2][o2], i2.once === true && this.removeListener(t2, i2.listener), r2 = i2.listener.apply(this, e2 || []), r2 === this._getOnceReturnValue() && this.removeListener(t2, i2.listener);
    return this;
  }, o.trigger = i("emitEvent"), o.emit = function(t2) {
    var e2 = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(t2, e2);
  }, o.setOnceReturnValue = function(t2) {
    return this._onceReturnValue = t2, this;
  }, o._getOnceReturnValue = function() {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : true;
  }, o._getEvents = function() {
    return this._events || (this._events = {});
  }, t.noConflict = function() {
    return n.EventEmitter = r, t;
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
    return t;
  }) : "object" == typeof module && module.exports ? module.exports = t : n.EventEmitter = t;
}.call(globalThis), function(t) {
  function e(t2) {
    if (t2) {
      if ("string" == typeof o[t2])
        return t2;
      t2 = t2.charAt(0).toUpperCase() + t2.slice(1);
      for (var e2, n = 0, r = i.length; r > n; n++)
        if (e2 = i[n] + t2, "string" == typeof o[e2])
          return e2;
    }
  }
  var i = "Webkit Moz ms Ms O".split(" "), o = document.documentElement.style;
  "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
    return e;
  }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e;
}(window), function(t) {
  function e(t2) {
    var e2 = parseFloat(t2), i2 = -1 === t2.indexOf("%") && !isNaN(e2);
    return i2 && e2;
  }
  function i() {
  }
  function o() {
    for (var t2 = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e2 = 0, i2 = s.length; i2 > e2; e2++) {
      var o2 = s[e2];
      t2[o2] = 0;
    }
    return t2;
  }
  function n(i2) {
    function n2() {
      if (!d) {
        d = true;
        var o2 = t.getComputedStyle;
        if (p = function() {
          var t2 = o2 ? function(t3) {
            return o2(t3, null);
          } : function(t3) {
            return t3.currentStyle;
          };
          return function(e2) {
            var i3 = t2(e2);
            return i3 || r("Style returned " + i3 + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i3;
          };
        }(), h = i2("boxSizing")) {
          var n3 = document.createElement("div");
          n3.style.width = "200px", n3.style.padding = "1px 2px 3px 4px", n3.style.borderStyle = "solid", n3.style.borderWidth = "1px 2px 3px 4px", n3.style[h] = "border-box";
          var s2 = document.body || document.documentElement;
          s2.appendChild(n3);
          var a2 = p(n3);
          f = 200 === e(a2.width), s2.removeChild(n3);
        }
      }
    }
    function a(t2) {
      if (n2(), "string" == typeof t2 && (t2 = document.querySelector(t2)), t2 && "object" == typeof t2 && t2.nodeType) {
        var i3 = p(t2);
        if ("none" === i3.display)
          return o();
        var r2 = {};
        r2.width = t2.offsetWidth, r2.height = t2.offsetHeight;
        for (var a2 = r2.isBorderBox = !(!h || !i3[h] || "border-box" !== i3[h]), d2 = 0, l = s.length; l > d2; d2++) {
          var c = s[d2], y = i3[c];
          y = u(t2, y);
          var m = parseFloat(y);
          r2[c] = isNaN(m) ? 0 : m;
        }
        var g = r2.paddingLeft + r2.paddingRight, v = r2.paddingTop + r2.paddingBottom, _ = r2.marginLeft + r2.marginRight, I = r2.marginTop + r2.marginBottom, L = r2.borderLeftWidth + r2.borderRightWidth, z = r2.borderTopWidth + r2.borderBottomWidth, b = a2 && f, x = e(i3.width);
        x !== false && (r2.width = x + (b ? 0 : g + L));
        var S = e(i3.height);
        return S !== false && (r2.height = S + (b ? 0 : v + z)), r2.innerWidth = r2.width - (g + L), r2.innerHeight = r2.height - (v + z), r2.outerWidth = r2.width + _, r2.outerHeight = r2.height + I, r2;
      }
    }
    function u(e2, i3) {
      if (t.getComputedStyle || -1 === i3.indexOf("%"))
        return i3;
      var o2 = e2.style, n3 = o2.left, r2 = e2.runtimeStyle, s2 = r2 && r2.left;
      return s2 && (r2.left = e2.currentStyle.left), o2.left = i3, i3 = o2.pixelLeft, o2.left = n3, s2 && (r2.left = s2), i3;
    }
    var p, h, f, d = false;
    return a;
  }
  var r = "undefined" == typeof console ? i : function(t2) {
    console.error(t2);
  }, s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
  "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("desandro-get-style-property")) : t.getSize = n(t.getStyleProperty);
}(window), function(t) {
  function e(t2, e2) {
    return t2[s](e2);
  }
  function i(t2) {
    if (!t2.parentNode) {
      var e2 = document.createDocumentFragment();
      e2.appendChild(t2);
    }
  }
  function o(t2, e2) {
    i(t2);
    for (var o2 = t2.parentNode.querySelectorAll(e2), n2 = 0, r2 = o2.length; r2 > n2; n2++)
      if (o2[n2] === t2)
        return true;
    return false;
  }
  function n(t2, o2) {
    return i(t2), e(t2, o2);
  }
  var r, s = function() {
    if (t.matchesSelector)
      return "matchesSelector";
    for (var e2 = ["webkit", "moz", "ms", "o"], i2 = 0, o2 = e2.length; o2 > i2; i2++) {
      var n2 = e2[i2], r2 = n2 + "MatchesSelector";
      if (t[r2])
        return r2;
    }
  }();
  if (s) {
    var a = document.createElement("div"), u = e(a, "div");
    r = u ? e : n;
  } else
    r = o;
  "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
    return r;
  }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r;
}(Element.prototype), function(t) {
  function e(t2, e2) {
    for (var i2 in e2)
      t2[i2] = e2[i2];
    return t2;
  }
  function i(t2) {
    for (var e2 in t2)
      return false;
    return e2 = null, true;
  }
  function o(t2) {
    return t2.replace(/([A-Z])/g, function(t3) {
      return "-" + t3.toLowerCase();
    });
  }
  function n(t2, n2, r2) {
    function a(t3, e2) {
      t3 && (this.element = t3, this.layout = e2, this.position = { x: 0, y: 0 }, this._create());
    }
    var u = r2("transition"), p = r2("transform"), h = u && p, f = !!r2("perspective"), d = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[u], l = ["transform", "transition", "transitionDuration", "transitionProperty"], c = function() {
      for (var t3 = {}, e2 = 0, i2 = l.length; i2 > e2; e2++) {
        var o2 = l[e2], n3 = r2(o2);
        n3 && n3 !== o2 && (t3[o2] = n3);
      }
      return t3;
    }();
    e(a.prototype, t2.prototype), a.prototype._create = function() {
      this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" });
    }, a.prototype.handleEvent = function(t3) {
      var e2 = "on" + t3.type;
      this[e2] && this[e2](t3);
    }, a.prototype.getSize = function() {
      this.size = n2(this.element);
    }, a.prototype.css = function(t3) {
      var e2 = this.element.style;
      for (var i2 in t3) {
        var o2 = c[i2] || i2;
        e2[o2] = t3[i2];
      }
    }, a.prototype.getPosition = function() {
      var t3 = s(this.element), e2 = this.layout.options, i2 = e2.isOriginLeft, o2 = e2.isOriginTop, n3 = parseInt(t3[i2 ? "left" : "right"], 10), r3 = parseInt(t3[o2 ? "top" : "bottom"], 10);
      n3 = isNaN(n3) ? 0 : n3, r3 = isNaN(r3) ? 0 : r3;
      var a2 = this.layout.size;
      n3 -= i2 ? a2.paddingLeft : a2.paddingRight, r3 -= o2 ? a2.paddingTop : a2.paddingBottom, this.position.x = n3, this.position.y = r3;
    }, a.prototype.layoutPosition = function() {
      var t3 = this.layout.size, e2 = this.layout.options, i2 = {};
      e2.isOriginLeft ? (i2.left = this.position.x + t3.paddingLeft + "px", i2.right = "") : (i2.right = this.position.x + t3.paddingRight + "px", i2.left = ""), e2.isOriginTop ? (i2.top = this.position.y + t3.paddingTop + "px", i2.bottom = "") : (i2.bottom = this.position.y + t3.paddingBottom + "px", i2.top = ""), this.css(i2), this.emitEvent("layout", [this]);
    };
    var y = f ? function(t3, e2) {
      return "translate3d(" + t3 + "px, " + e2 + "px, 0)";
    } : function(t3, e2) {
      return "translate(" + t3 + "px, " + e2 + "px)";
    };
    a.prototype._transitionTo = function(t3, e2) {
      this.getPosition();
      var i2 = this.position.x, o2 = this.position.y, n3 = parseInt(t3, 10), r3 = parseInt(e2, 10), s2 = n3 === this.position.x && r3 === this.position.y;
      if (this.setPosition(t3, e2), s2 && !this.isTransitioning)
        return this.layoutPosition(), void 0;
      var a2 = t3 - i2, u2 = e2 - o2, p2 = {}, h2 = this.layout.options;
      a2 = h2.isOriginLeft ? a2 : -a2, u2 = h2.isOriginTop ? u2 : -u2, p2.transform = y(a2, u2), this.transition({ to: p2, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: true });
    }, a.prototype.goTo = function(t3, e2) {
      this.setPosition(t3, e2), this.layoutPosition();
    }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t3, e2) {
      this.position.x = parseInt(t3, 10), this.position.y = parseInt(e2, 10);
    }, a.prototype._nonTransition = function(t3) {
      this.css(t3.to), t3.isCleaning && this._removeStyles(t3.to);
      for (var e2 in t3.onTransitionEnd)
        t3.onTransitionEnd[e2].call(this);
    }, a.prototype._transition = function(t3) {
      if (!parseFloat(this.layout.options.transitionDuration))
        return this._nonTransition(t3), void 0;
      var e2 = this._transn;
      for (var i2 in t3.onTransitionEnd)
        e2.onEnd[i2] = t3.onTransitionEnd[i2];
      for (i2 in t3.to)
        e2.ingProperties[i2] = true, t3.isCleaning && (e2.clean[i2] = true);
      if (t3.from) {
        this.css(t3.from);
        this.element.offsetHeight;
      }
      this.enableTransition(t3.to), this.css(t3.to), this.isTransitioning = true;
    };
    var m = p && o(p) + ",opacity";
    a.prototype.enableTransition = function() {
      this.isTransitioning || (this.css({ transitionProperty: m, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(d, this, false));
    }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t3) {
      this.ontransitionend(t3);
    }, a.prototype.onotransitionend = function(t3) {
      this.ontransitionend(t3);
    };
    var g = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" };
    a.prototype.ontransitionend = function(t3) {
      if (t3.target === this.element) {
        var e2 = this._transn, o2 = g[t3.propertyName] || t3.propertyName;
        if (delete e2.ingProperties[o2], i(e2.ingProperties) && this.disableTransition(), o2 in e2.clean && (this.element.style[t3.propertyName] = "", delete e2.clean[o2]), o2 in e2.onEnd) {
          var n3 = e2.onEnd[o2];
          n3.call(this), delete e2.onEnd[o2];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }, a.prototype.disableTransition = function() {
      this.removeTransitionStyles(), this.element.removeEventListener(d, this, false), this.isTransitioning = false;
    }, a.prototype._removeStyles = function(t3) {
      var e2 = {};
      for (var i2 in t3)
        e2[i2] = "";
      this.css(e2);
    };
    var v = { transitionProperty: "", transitionDuration: "" };
    return a.prototype.removeTransitionStyles = function() {
      this.css(v);
    }, a.prototype.removeElem = function() {
      this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this]);
    }, a.prototype.remove = function() {
      if (!u || !parseFloat(this.layout.options.transitionDuration))
        return this.removeElem(), void 0;
      var t3 = this;
      this.on("transitionEnd", function() {
        return t3.removeElem(), true;
      }), this.hide();
    }, a.prototype.reveal = function() {
      delete this.isHidden, this.css({ display: "" });
      var t3 = this.layout.options;
      this.transition({ from: t3.hiddenStyle, to: t3.visibleStyle, isCleaning: true });
    }, a.prototype.hide = function() {
      this.isHidden = true, this.css({ display: "" });
      var t3 = this.layout.options;
      this.transition({ from: t3.visibleStyle, to: t3.hiddenStyle, isCleaning: true, onTransitionEnd: { opacity: function() {
        this.isHidden && this.css({ display: "none" });
      } } });
    }, a.prototype.destroy = function() {
      this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
    }, a;
  }
  var r = t.getComputedStyle, s = r ? function(t2) {
    return r(t2, null);
  } : function(t2) {
    return t2.currentStyle;
  };
  "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty));
}(window), function(t) {
  function e(t2, e2) {
    for (var i2 in e2)
      t2[i2] = e2[i2];
    return t2;
  }
  function i(t2) {
    return "[object Array]" === f.call(t2);
  }
  function o(t2) {
    var e2 = [];
    if (i(t2))
      e2 = t2;
    else if (t2 && "number" == typeof t2.length)
      for (var o2 = 0, n2 = t2.length; n2 > o2; o2++)
        e2.push(t2[o2]);
    else
      e2.push(t2);
    return e2;
  }
  function n(t2, e2) {
    var i2 = l(e2, t2);
    -1 !== i2 && e2.splice(i2, 1);
  }
  function r(t2) {
    return t2.replace(/(.)([A-Z])/g, function(t3, e2, i2) {
      return e2 + "-" + i2;
    }).toLowerCase();
  }
  function s(i2, s2, f2, l2, c, y) {
    function m(t2, i3) {
      if ("string" == typeof t2 && (t2 = a.querySelector(t2)), !t2 || !d(t2))
        return u && u.error("Bad " + this.constructor.namespace + " element: " + t2), void 0;
      this.element = t2, this.options = e({}, this.constructor.defaults), this.option(i3);
      var o2 = ++g;
      this.element.outlayerGUID = o2, v[o2] = this, this._create(), this.options.isInitLayout && this.layout();
    }
    var g = 0, v = {};
    return m.namespace = "outlayer", m.Item = y, m.defaults = { containerStyle: { position: "relative" }, isInitLayout: true, isOriginLeft: true, isOriginTop: true, isResizeBound: true, isResizingContainer: true, transitionDuration: "1s", hiddenStyle: { opacity: 0, transform: "scale(0.005) rotateX(180deg)" }, visibleStyle: { opacity: 1, transform: "scale(1) rotateX(0deg)" } }, e(m.prototype, f2.prototype), m.prototype.option = function(t2) {
      e(this.options, t2);
    }, m.prototype._create = function() {
      this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize();
    }, m.prototype.reloadItems = function() {
      this.items = this._itemize(this.element.children);
    }, m.prototype._itemize = function(t2) {
      for (var e2 = this._filterFindItemElements(t2), i3 = this.constructor.Item, o2 = [], n2 = 0, r2 = e2.length; r2 > n2; n2++) {
        var s3 = e2[n2], a2 = new i3(s3, this);
        o2.push(a2);
      }
      return o2;
    }, m.prototype._filterFindItemElements = function(t2) {
      t2 = o(t2);
      for (var e2 = this.options.itemSelector, i3 = [], n2 = 0, r2 = t2.length; r2 > n2; n2++) {
        var s3 = t2[n2];
        if (d(s3))
          if (e2) {
            c(s3, e2) && i3.push(s3);
            for (var a2 = s3.querySelectorAll(e2), u2 = 0, p2 = a2.length; p2 > u2; u2++)
              i3.push(a2[u2]);
          } else
            i3.push(s3);
      }
      return i3;
    }, m.prototype.getItemElements = function() {
      for (var t2 = [], e2 = 0, i3 = this.items.length; i3 > e2; e2++)
        t2.push(this.items[e2].element);
      return t2;
    }, m.prototype.layout = function() {
      this._resetLayout(), this._manageStamps();
      var t2 = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
      this.layoutItems(this.items, t2), this._isLayoutInited = true;
    }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
      this.getSize();
    }, m.prototype.getSize = function() {
      this.size = l2(this.element);
    }, m.prototype._getMeasurement = function(t2, e2) {
      var i3, o2 = this.options[t2];
      o2 ? ("string" == typeof o2 ? i3 = this.element.querySelector(o2) : d(o2) && (i3 = o2), this[t2] = i3 ? l2(i3)[e2] : o2) : this[t2] = 0;
    }, m.prototype.layoutItems = function(t2, e2) {
      t2 = this._getItemsForLayout(t2), this._layoutItems(t2, e2), this._postLayout();
    }, m.prototype._getItemsForLayout = function(t2) {
      for (var e2 = [], i3 = 0, o2 = t2.length; o2 > i3; i3++) {
        var n2 = t2[i3];
        n2.isIgnored || e2.push(n2);
      }
      return e2;
    }, m.prototype._layoutItems = function(t2, e2) {
      function i3() {
        o2.emitEvent("layoutComplete", [o2, t2]);
      }
      var o2 = this;
      if (!t2 || !t2.length)
        return i3(), void 0;
      this._itemsOn(t2, "layout", i3);
      for (var n2 = [], r2 = 0, s3 = t2.length; s3 > r2; r2++) {
        var a2 = t2[r2], u2 = this._getItemLayoutPosition(a2);
        u2.item = a2, u2.isInstant = e2 || a2.isLayoutInstant, n2.push(u2);
      }
      this._processLayoutQueue(n2);
    }, m.prototype._getItemLayoutPosition = function() {
      return { x: 0, y: 0 };
    }, m.prototype._processLayoutQueue = function(t2) {
      for (var e2 = 0, i3 = t2.length; i3 > e2; e2++) {
        var o2 = t2[e2];
        this._positionItem(o2.item, o2.x, o2.y, o2.isInstant);
      }
    }, m.prototype._positionItem = function(t2, e2, i3, o2) {
      o2 ? t2.goTo(e2, i3) : t2.moveTo(e2, i3);
    }, m.prototype._postLayout = function() {
      this.resizeContainer();
    }, m.prototype.resizeContainer = function() {
      if (this.options.isResizingContainer) {
        var t2 = this._getContainerSize();
        t2 && (this._setContainerMeasure(t2.width, true), this._setContainerMeasure(t2.height, false));
      }
    }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function(t2, e2) {
      if (void 0 !== t2) {
        var i3 = this.size;
        i3.isBorderBox && (t2 += e2 ? i3.paddingLeft + i3.paddingRight + i3.borderLeftWidth + i3.borderRightWidth : i3.paddingBottom + i3.paddingTop + i3.borderTopWidth + i3.borderBottomWidth), t2 = Math.max(t2, 0), this.element.style[e2 ? "width" : "height"] = t2 + "px";
      }
    }, m.prototype._itemsOn = function(t2, e2, i3) {
      function o2() {
        return n2++, n2 === r2 && i3.call(s3), true;
      }
      for (var n2 = 0, r2 = t2.length, s3 = this, a2 = 0, u2 = t2.length; u2 > a2; a2++) {
        var p2 = t2[a2];
        p2.on(e2, o2);
      }
    }, m.prototype.ignore = function(t2) {
      var e2 = this.getItem(t2);
      e2 && (e2.isIgnored = true);
    }, m.prototype.unignore = function(t2) {
      var e2 = this.getItem(t2);
      e2 && delete e2.isIgnored;
    }, m.prototype.stamp = function(t2) {
      if (t2 = this._find(t2)) {
        this.stamps = this.stamps.concat(t2);
        for (var e2 = 0, i3 = t2.length; i3 > e2; e2++) {
          var o2 = t2[e2];
          this.ignore(o2);
        }
      }
    }, m.prototype.unstamp = function(t2) {
      if (t2 = this._find(t2))
        for (var e2 = 0, i3 = t2.length; i3 > e2; e2++) {
          var o2 = t2[e2];
          n(o2, this.stamps), this.unignore(o2);
        }
    }, m.prototype._find = function(t2) {
      return t2 ? ("string" == typeof t2 && (t2 = this.element.querySelectorAll(t2)), t2 = o(t2)) : void 0;
    }, m.prototype._manageStamps = function() {
      if (this.stamps && this.stamps.length) {
        this._getBoundingRect();
        for (var t2 = 0, e2 = this.stamps.length; e2 > t2; t2++) {
          var i3 = this.stamps[t2];
          this._manageStamp(i3);
        }
      }
    }, m.prototype._getBoundingRect = function() {
      var t2 = this.element.getBoundingClientRect(), e2 = this.size;
      this._boundingRect = { left: t2.left + e2.paddingLeft + e2.borderLeftWidth, top: t2.top + e2.paddingTop + e2.borderTopWidth, right: t2.right - (e2.paddingRight + e2.borderRightWidth), bottom: t2.bottom - (e2.paddingBottom + e2.borderBottomWidth) };
    }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function(t2) {
      var e2 = t2.getBoundingClientRect(), i3 = this._boundingRect, o2 = l2(t2), n2 = { left: e2.left - i3.left - o2.marginLeft, top: e2.top - i3.top - o2.marginTop, right: i3.right - e2.right - o2.marginRight, bottom: i3.bottom - e2.bottom - o2.marginBottom };
      return n2;
    }, m.prototype.handleEvent = function(t2) {
      var e2 = "on" + t2.type;
      this[e2] && this[e2](t2);
    }, m.prototype.bindResize = function() {
      this.isResizeBound || (i2.bind(t, "resize", this), this.isResizeBound = true);
    }, m.prototype.unbindResize = function() {
      this.isResizeBound && i2.unbind(t, "resize", this), this.isResizeBound = false;
    }, m.prototype.onresize = function() {
      function t2() {
        e2.resize(), delete e2.resizeTimeout;
      }
      this.resizeTimeout && clearTimeout(this.resizeTimeout);
      var e2 = this;
      this.resizeTimeout = setTimeout(t2, 100);
    }, m.prototype.resize = function() {
      this.isResizeBound && this.needsResizeLayout() && this.layout();
    }, m.prototype.needsResizeLayout = function() {
      var t2 = l2(this.element), e2 = this.size && t2;
      return e2 && t2.innerWidth !== this.size.innerWidth;
    }, m.prototype.addItems = function(t2) {
      var e2 = this._itemize(t2);
      return e2.length && (this.items = this.items.concat(e2)), e2;
    }, m.prototype.appended = function(t2) {
      var e2 = this.addItems(t2);
      e2.length && (this.layoutItems(e2, true), this.reveal(e2));
    }, m.prototype.prepended = function(t2) {
      var e2 = this._itemize(t2);
      if (e2.length) {
        var i3 = this.items.slice(0);
        this.items = e2.concat(i3), this._resetLayout(), this._manageStamps(), this.layoutItems(e2, true), this.reveal(e2), this.layoutItems(i3);
      }
    }, m.prototype.reveal = function(t2) {
      var e2 = t2 && t2.length;
      if (e2)
        for (var i3 = 0; e2 > i3; i3++) {
          var o2 = t2[i3];
          o2.reveal();
        }
    }, m.prototype.hide = function(t2) {
      var e2 = t2 && t2.length;
      if (e2)
        for (var i3 = 0; e2 > i3; i3++) {
          var o2 = t2[i3];
          o2.hide();
        }
    }, m.prototype.getItem = function(t2) {
      for (var e2 = 0, i3 = this.items.length; i3 > e2; e2++) {
        var o2 = this.items[e2];
        if (o2.element === t2)
          return o2;
      }
    }, m.prototype.getItems = function(t2) {
      if (t2 && t2.length) {
        for (var e2 = [], i3 = 0, o2 = t2.length; o2 > i3; i3++) {
          var n2 = t2[i3], r2 = this.getItem(n2);
          r2 && e2.push(r2);
        }
        return e2;
      }
    }, m.prototype.remove = function(t2) {
      t2 = o(t2);
      var e2 = this.getItems(t2);
      if (e2 && e2.length) {
        this._itemsOn(e2, "remove", function() {
          this.emitEvent("removeComplete", [this, e2]);
        });
        for (var i3 = 0, r2 = e2.length; r2 > i3; i3++) {
          var s3 = e2[i3];
          s3.remove(), n(s3, this.items);
        }
      }
    }, m.prototype.destroy = function() {
      var t2 = this.element.style;
      t2.height = "", t2.position = "", t2.width = "";
      for (var e2 = 0, i3 = this.items.length; i3 > e2; e2++) {
        var o2 = this.items[e2];
        o2.destroy();
      }
      this.unbindResize();
      var n2 = this.element.outlayerGUID;
      delete v[n2], delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace);
    }, m.data = function(t2) {
      var e2 = t2 && t2.outlayerGUID;
      return e2 && v[e2];
    }, m.create = function(t2, i3) {
      function o2() {
        m.apply(this, arguments);
      }
      return Object.create ? o2.prototype = Object.create(m.prototype) : e(o2.prototype, m.prototype), o2.prototype.constructor = o2, o2.defaults = e({}, m.defaults), e(o2.defaults, i3), o2.prototype.settings = {}, o2.namespace = t2, o2.data = m.data, o2.Item = function() {
        y.apply(this, arguments);
      }, o2.Item.prototype = new y(), s2(function() {
        for (var e2 = r(t2), i4 = a.querySelectorAll(".js-" + e2), n2 = "data-" + e2 + "-options", s3 = 0, h2 = i4.length; h2 > s3; s3++) {
          var f3, d2 = i4[s3], l3 = d2.getAttribute(n2);
          try {
            f3 = l3 && JSON.parse(l3);
          } catch (c2) {
            u && u.error("Error parsing " + n2 + " on " + d2.nodeName.toLowerCase() + (d2.id ? "#" + d2.id : "") + ": " + c2);
            continue;
          }
          var y2 = new o2(d2, f3);
          p && p.data(d2, t2, y2);
        }
      }), p && p.bridget && p.bridget(t2, o2), o2;
    }, m.Item = y, m;
  }
  var a = t.document, u = t.console, p = t.jQuery, h = function() {
  }, f = Object.prototype.toString, d = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t2) {
    return t2 instanceof HTMLElement;
  } : function(t2) {
    return t2 && "object" == typeof t2 && 1 === t2.nodeType && "string" == typeof t2.nodeName;
  }, l = Array.prototype.indexOf ? function(t2, e2) {
    return t2.indexOf(e2);
  } : function(t2, e2) {
    for (var i2 = 0, o2 = t2.length; o2 > i2; i2++)
      if (t2[i2] === e2)
        return i2;
    return -1;
  };
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : "object" == typeof exports ? module.exports = s(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item);
}(window), function(t) {
  function e(t2) {
    function e2() {
      t2.Item.apply(this, arguments);
    }
    e2.prototype = new t2.Item(), e2.prototype._create = function() {
      this.id = this.layout.itemGUID++, t2.Item.prototype._create.call(this), this.sortData = {};
    }, e2.prototype.updateSortData = function() {
      if (!this.isIgnored) {
        this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
        var t3 = this.layout.options.getSortData, e3 = this.layout._sorters;
        for (var i2 in t3) {
          var o = e3[i2];
          this.sortData[i2] = o(this.element, this);
        }
      }
    };
    var i = e2.prototype.destroy;
    return e2.prototype.destroy = function() {
      i.apply(this, arguments), this.css({ display: "" });
    }, e2;
  }
  "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer));
}(window), function(t) {
  function e(t2, e2) {
    function i(t3) {
      this.isotope = t3, t3 && (this.options = t3.options[this.namespace], this.element = t3.element, this.items = t3.filteredItems, this.size = t3.size);
    }
    return function() {
      function t3(t4) {
        return function() {
          return e2.prototype[t4].apply(this.isotope, arguments);
        };
      }
      for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
        var s = o[n];
        i.prototype[s] = t3(s);
      }
    }(), i.prototype.needsVerticalResizeLayout = function() {
      var e3 = t2(this.isotope.element), i2 = this.isotope.size && e3;
      return i2 && e3.innerHeight !== this.isotope.size.innerHeight;
    }, i.prototype._getMeasurement = function() {
      this.isotope._getMeasurement.apply(this, arguments);
    }, i.prototype.getColumnWidth = function() {
      this.getSegmentSize("column", "Width");
    }, i.prototype.getRowHeight = function() {
      this.getSegmentSize("row", "Height");
    }, i.prototype.getSegmentSize = function(t3, e3) {
      var i2 = t3 + e3, o = "outer" + e3;
      if (this._getMeasurement(i2, o), !this[i2]) {
        var n = this.getFirstItemSize();
        this[i2] = n && n[o] || this.isotope.size["inner" + e3];
      }
    }, i.prototype.getFirstItemSize = function() {
      var e3 = this.isotope.filteredItems[0];
      return e3 && e3.element && t2(e3.element);
    }, i.prototype.layout = function() {
      this.isotope.layout.apply(this.isotope, arguments);
    }, i.prototype.getSize = function() {
      this.isotope.getSize(), this.size = this.isotope.size;
    }, i.modes = {}, i.create = function(t3, e3) {
      function o() {
        i.apply(this, arguments);
      }
      return o.prototype = new i(), e3 && (o.options = e3), o.prototype.namespace = t3, i.modes[t3] = o, o;
    }, i;
  }
  "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
}(window), function(t) {
  function e(t2, e2) {
    var o = t2.create("masonry");
    return o.prototype._resetLayout = function() {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
      var t3 = this.cols;
      for (this.colYs = []; t3--; )
        this.colYs.push(0);
      this.maxY = 0;
    }, o.prototype.measureColumns = function() {
      if (this.getContainerWidth(), !this.columnWidth) {
        var t3 = this.items[0], i2 = t3 && t3.element;
        this.columnWidth = i2 && e2(i2).outerWidth || this.containerWidth;
      }
      this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1);
    }, o.prototype.getContainerWidth = function() {
      var t3 = this.options.isFitWidth ? this.element.parentNode : this.element, i2 = e2(t3);
      this.containerWidth = i2 && i2.innerWidth;
    }, o.prototype._getItemLayoutPosition = function(t3) {
      t3.getSize();
      var e3 = t3.size.outerWidth % this.columnWidth, o2 = e3 && 1 > e3 ? "round" : "ceil", n = Math[o2](t3.size.outerWidth / this.columnWidth);
      n = Math.min(n, this.cols);
      for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = { x: this.columnWidth * a, y: s }, p = s + t3.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++)
        this.colYs[a + f] = p;
      return u;
    }, o.prototype._getColGroup = function(t3) {
      if (2 > t3)
        return this.colYs;
      for (var e3 = [], i2 = this.cols + 1 - t3, o2 = 0; i2 > o2; o2++) {
        var n = this.colYs.slice(o2, o2 + t3);
        e3[o2] = Math.max.apply(Math, n);
      }
      return e3;
    }, o.prototype._manageStamp = function(t3) {
      var i2 = e2(t3), o2 = this._getElementOffset(t3), n = this.options.isOriginLeft ? o2.left : o2.right, r = n + i2.outerWidth, s = Math.floor(n / this.columnWidth);
      s = Math.max(0, s);
      var a = Math.floor(r / this.columnWidth);
      a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
      for (var u = (this.options.isOriginTop ? o2.top : o2.bottom) + i2.outerHeight, p = s; a >= p; p++)
        this.colYs[p] = Math.max(u, this.colYs[p]);
    }, o.prototype._getContainerSize = function() {
      this.maxY = Math.max.apply(Math, this.colYs);
      var t3 = { height: this.maxY };
      return this.options.isFitWidth && (t3.width = this._getContainerFitWidth()), t3;
    }, o.prototype._getContainerFitWidth = function() {
      for (var t3 = 0, e3 = this.cols; --e3 && 0 === this.colYs[e3]; )
        t3++;
      return (this.cols - t3) * this.columnWidth - this.gutter;
    }, o.prototype.needsResizeLayout = function() {
      var t3 = this.containerWidth;
      return this.getContainerWidth(), t3 !== this.containerWidth;
    }, o;
  }
  var i = Array.prototype.indexOf ? function(t2, e2) {
    return t2.indexOf(e2);
  } : function(t2, e2) {
    for (var i2 = 0, o = t2.length; o > i2; i2++) {
      var n = t2[i2];
      if (n === e2)
        return i2;
    }
    return -1;
  };
  "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window), function(t) {
  function e(t2, e2) {
    for (var i2 in e2)
      t2[i2] = e2[i2];
    return t2;
  }
  function i(t2, i2) {
    var o = t2.create("masonry"), n = o.prototype._getElementOffset, r = o.prototype.layout, s = o.prototype._getMeasurement;
    e(o.prototype, i2.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
    var a = o.prototype.measureColumns;
    o.prototype.measureColumns = function() {
      this.items = this.isotope.filteredItems, a.call(this);
    };
    var u = o.prototype._manageStamp;
    return o.prototype._manageStamp = function() {
      this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments);
    }, o;
  }
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : "object" == typeof exports ? module.exports = i(require("../layout-mode"), require("masonry-layout")) : i(t.Isotope.LayoutMode, t.Masonry);
}(window), function(t) {
  function e(t2) {
    var e2 = t2.create("fitRows");
    return e2.prototype._resetLayout = function() {
      this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
    }, e2.prototype._getItemLayoutPosition = function(t3) {
      t3.getSize();
      var e3 = t3.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
      0 !== this.x && e3 + this.x > i && (this.x = 0, this.y = this.maxY);
      var o = { x: this.x, y: this.y };
      return this.maxY = Math.max(this.maxY, this.y + t3.size.outerHeight), this.x += e3, o;
    }, e2.prototype._getContainerSize = function() {
      return { height: this.maxY };
    }, e2;
  }
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window), function(t) {
  function e(t2) {
    var e2 = t2.create("vertical", { horizontalAlignment: 0 });
    return e2.prototype._resetLayout = function() {
      this.y = 0;
    }, e2.prototype._getItemLayoutPosition = function(t3) {
      t3.getSize();
      var e3 = (this.isotope.size.innerWidth - t3.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
      return this.y += t3.size.outerHeight, { x: e3, y: i };
    }, e2.prototype._getContainerSize = function() {
      return { height: this.y };
    }, e2;
  }
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window), function(t) {
  function e(t2, e2) {
    for (var i2 in e2)
      t2[i2] = e2[i2];
    return t2;
  }
  function i(t2) {
    return "[object Array]" === h.call(t2);
  }
  function o(t2) {
    var e2 = [];
    if (i(t2))
      e2 = t2;
    else if (t2 && "number" == typeof t2.length)
      for (var o2 = 0, n2 = t2.length; n2 > o2; o2++)
        e2.push(t2[o2]);
    else
      e2.push(t2);
    return e2;
  }
  function n(t2, e2) {
    var i2 = f(e2, t2);
    -1 !== i2 && e2.splice(i2, 1);
  }
  function r(t2, i2, r2, u2, h2) {
    function f2(t3, e2) {
      return function(i3, o2) {
        for (var n2 = 0, r3 = t3.length; r3 > n2; n2++) {
          var s2 = t3[n2], a2 = i3.sortData[s2], u3 = o2.sortData[s2];
          if (a2 > u3 || u3 > a2) {
            var p2 = void 0 !== e2[s2] ? e2[s2] : e2, h3 = p2 ? 1 : -1;
            return (a2 > u3 ? 1 : -1) * h3;
          }
        }
        return 0;
      };
    }
    var d = t2.create("isotope", { layoutMode: "masonry", isJQueryFiltering: true, sortAscending: true });
    d.Item = u2, d.LayoutMode = h2, d.prototype._create = function() {
      this.itemGUID = 0, this._sorters = {}, this._getSorters(), t2.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
      for (var e2 in h2.modes)
        this._initLayoutMode(e2);
    }, d.prototype.reloadItems = function() {
      this.itemGUID = 0, t2.prototype.reloadItems.call(this);
    }, d.prototype._itemize = function() {
      for (var e2 = t2.prototype._itemize.apply(this, arguments), i3 = 0, o2 = e2.length; o2 > i3; i3++) {
        var n2 = e2[i3];
        n2.id = this.itemGUID++;
      }
      return this._updateItemsSortData(e2), e2;
    }, d.prototype._initLayoutMode = function(t3) {
      var i3 = h2.modes[t3], o2 = this.options[t3] || {};
      this.options[t3] = i3.options ? e(i3.options, o2) : o2, this.modes[t3] = new i3(this);
    }, d.prototype.layout = function() {
      return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0);
    }, d.prototype._layout = function() {
      var t3 = this._getIsInstant();
      this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t3), this._isLayoutInited = true;
    }, d.prototype.arrange = function(t3) {
      function e2() {
        o2.reveal(i3.needReveal), o2.hide(i3.needHide);
      }
      this.option(t3), this._getIsInstant();
      var i3 = this._filter(this.items);
      this.filteredItems = i3.matches;
      var o2 = this;
      this._isInstant ? this._noTransition(e2) : e2(), this._sort(), this._layout();
    }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() {
      var t3 = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
      return this._isInstant = t3, t3;
    }, d.prototype._filter = function(t3) {
      var e2 = this.options.filter;
      e2 = e2 || "*";
      for (var i3 = [], o2 = [], n2 = [], r3 = this._getFilterTest(e2), s2 = 0, a2 = t3.length; a2 > s2; s2++) {
        var u3 = t3[s2];
        if (!u3.isIgnored) {
          var p2 = r3(u3);
          p2 && i3.push(u3), p2 && u3.isHidden ? o2.push(u3) : p2 || u3.isHidden || n2.push(u3);
        }
      }
      return { matches: i3, needReveal: o2, needHide: n2 };
    }, d.prototype._getFilterTest = function(t3) {
      return s && this.options.isJQueryFiltering ? function(e2) {
        return s(e2.element).is(t3);
      } : "function" == typeof t3 ? function(e2) {
        return t3(e2.element);
      } : function(e2) {
        return r2(e2.element, t3);
      };
    }, d.prototype.updateSortData = function(t3) {
      var e2;
      t3 ? (t3 = o(t3), e2 = this.getItems(t3)) : e2 = this.items, this._getSorters(), this._updateItemsSortData(e2);
    }, d.prototype._getSorters = function() {
      var t3 = this.options.getSortData;
      for (var e2 in t3) {
        var i3 = t3[e2];
        this._sorters[e2] = l(i3);
      }
    }, d.prototype._updateItemsSortData = function(t3) {
      for (var e2 = t3 && t3.length, i3 = 0; e2 && e2 > i3; i3++) {
        var o2 = t3[i3];
        o2.updateSortData();
      }
    };
    var l = function() {
      function t3(t4) {
        if ("string" != typeof t4)
          return t4;
        var i3 = a(t4).split(" "), o2 = i3[0], n2 = o2.match(/^\[(.+)\]$/), r3 = n2 && n2[1], s2 = e2(r3, o2), u3 = d.sortDataParsers[i3[1]];
        return t4 = u3 ? function(t5) {
          return t5 && u3(s2(t5));
        } : function(t5) {
          return t5 && s2(t5);
        };
      }
      function e2(t4, e3) {
        return t4 ? function(e4) {
          return e4.getAttribute(t4);
        } : function(t5) {
          var i3 = t5.querySelector(e3);
          return i3 && p(i3);
        };
      }
      return t3;
    }();
    d.sortDataParsers = { parseInt: function(t3) {
      return parseInt(t3, 10);
    }, parseFloat: function(t3) {
      return parseFloat(t3);
    } }, d.prototype._sort = function() {
      var t3 = this.options.sortBy;
      if (t3) {
        var e2 = [].concat.apply(t3, this.sortHistory), i3 = f2(e2, this.options.sortAscending);
        this.filteredItems.sort(i3), t3 !== this.sortHistory[0] && this.sortHistory.unshift(t3);
      }
    }, d.prototype._mode = function() {
      var t3 = this.options.layoutMode, e2 = this.modes[t3];
      if (!e2)
        throw Error("No layout mode: " + t3);
      return e2.options = this.options[t3], e2;
    }, d.prototype._resetLayout = function() {
      t2.prototype._resetLayout.call(this), this._mode()._resetLayout();
    }, d.prototype._getItemLayoutPosition = function(t3) {
      return this._mode()._getItemLayoutPosition(t3);
    }, d.prototype._manageStamp = function(t3) {
      this._mode()._manageStamp(t3);
    }, d.prototype._getContainerSize = function() {
      return this._mode()._getContainerSize();
    }, d.prototype.needsResizeLayout = function() {
      return this._mode().needsResizeLayout();
    }, d.prototype.appended = function(t3) {
      var e2 = this.addItems(t3);
      if (e2.length) {
        var i3 = this._filterRevealAdded(e2);
        this.filteredItems = this.filteredItems.concat(i3);
      }
    }, d.prototype.prepended = function(t3) {
      var e2 = this._itemize(t3);
      if (e2.length) {
        this._resetLayout(), this._manageStamps();
        var i3 = this._filterRevealAdded(e2);
        this.layoutItems(this.filteredItems), this.filteredItems = i3.concat(this.filteredItems), this.items = e2.concat(this.items);
      }
    }, d.prototype._filterRevealAdded = function(t3) {
      var e2 = this._filter(t3);
      return this.hide(e2.needHide), this.reveal(e2.matches), this.layoutItems(e2.matches, true), e2.matches;
    }, d.prototype.insert = function(t3) {
      var e2 = this.addItems(t3);
      if (e2.length) {
        var i3, o2, n2 = e2.length;
        for (i3 = 0; n2 > i3; i3++)
          o2 = e2[i3], this.element.appendChild(o2.element);
        var r3 = this._filter(e2).matches;
        for (i3 = 0; n2 > i3; i3++)
          e2[i3].isLayoutInstant = true;
        for (this.arrange(), i3 = 0; n2 > i3; i3++)
          delete e2[i3].isLayoutInstant;
        this.reveal(r3);
      }
    };
    var c = d.prototype.remove;
    return d.prototype.remove = function(t3) {
      t3 = o(t3);
      var e2 = this.getItems(t3);
      if (c.call(this, t3), e2 && e2.length)
        for (var i3 = 0, r3 = e2.length; r3 > i3; i3++) {
          var s2 = e2[i3];
          n(s2, this.filteredItems);
        }
    }, d.prototype.shuffle = function() {
      for (var t3 = 0, e2 = this.items.length; e2 > t3; t3++) {
        var i3 = this.items[t3];
        i3.sortData.random = Math.random();
      }
      this.options.sortBy = "random", this._sort(), this._layout();
    }, d.prototype._noTransition = function(t3) {
      var e2 = this.options.transitionDuration;
      this.options.transitionDuration = 0;
      var i3 = t3.call(this);
      return this.options.transitionDuration = e2, i3;
    }, d.prototype.getFilteredItemElements = function() {
      for (var t3 = [], e2 = 0, i3 = this.filteredItems.length; i3 > e2; e2++)
        t3.push(this.filteredItems[e2].element);
      return t3;
    }, d;
  }
  var s = t.jQuery, a = String.prototype.trim ? function(t2) {
    return t2.trim();
  } : function(t2) {
    return t2.replace(/^\s+|\s+$/g, "");
  }, u = document.documentElement, p = u.textContent ? function(t2) {
    return t2.textContent;
  } : function(t2) {
    return t2.innerText;
  }, h = Object.prototype.toString, f = Array.prototype.indexOf ? function(t2, e2) {
    return t2.indexOf(e2);
  } : function(t2, e2) {
    for (var i2 = 0, o2 = t2.length; o2 > i2; i2++)
      if (t2[i2] === e2)
        return i2;
    return -1;
  };
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : "object" == typeof exports ? module.exports = r(require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode);
}(window);
