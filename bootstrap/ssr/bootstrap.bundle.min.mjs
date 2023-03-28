/*!
  * Bootstrap v4.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e(t.bootstrap = {}, t.jQuery);
}(globalThis, function(t, p) {
  function i(t2, e2) {
    for (var n2 = 0; n2 < e2.length; n2++) {
      var i2 = e2[n2];
      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, i2.key, i2);
    }
  }
  function s(t2, e2, n2) {
    return e2 && i(t2.prototype, e2), n2 && i(t2, n2), t2;
  }
  function l(o2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = null != arguments[t2] ? arguments[t2] : {}, e2 = Object.keys(r2);
      "function" == typeof Object.getOwnPropertySymbols && (e2 = e2.concat(Object.getOwnPropertySymbols(r2).filter(function(t3) {
        return Object.getOwnPropertyDescriptor(r2, t3).enumerable;
      }))), e2.forEach(function(t3) {
        var e3, n2, i2;
        e3 = o2, i2 = r2[n2 = t3], n2 in e3 ? Object.defineProperty(e3, n2, { value: i2, enumerable: true, configurable: true, writable: true }) : e3[n2] = i2;
      });
    }
    return o2;
  }
  p = p && p.hasOwnProperty("default") ? p.default : p;
  var e = "transitionend";
  function n(t2) {
    var e2 = this, n2 = false;
    return p(this).one(m.TRANSITION_END, function() {
      n2 = true;
    }), setTimeout(function() {
      n2 || m.triggerTransitionEnd(e2);
    }, t2), this;
  }
  var m = { TRANSITION_END: "bsTransitionEnd", getUID: function(t2) {
    for (; t2 += ~~(1e6 * Math.random()), document.getElementById(t2); )
      ;
    return t2;
  }, getSelectorFromElement: function(t2) {
    var e2 = t2.getAttribute("data-target");
    if (!e2 || "#" === e2) {
      var n2 = t2.getAttribute("href");
      e2 = n2 && "#" !== n2 ? n2.trim() : "";
    }
    return e2 && document.querySelector(e2) ? e2 : null;
  }, getTransitionDurationFromElement: function(t2) {
    if (!t2)
      return 0;
    var e2 = p(t2).css("transition-duration"), n2 = p(t2).css("transition-delay"), i2 = parseFloat(e2), o2 = parseFloat(n2);
    return i2 || o2 ? (e2 = e2.split(",")[0], n2 = n2.split(",")[0], 1e3 * (parseFloat(e2) + parseFloat(n2))) : 0;
  }, reflow: function(t2) {
    return t2.offsetHeight;
  }, triggerTransitionEnd: function(t2) {
    p(t2).trigger(e);
  }, supportsTransitionEnd: function() {
    return Boolean(e);
  }, isElement: function(t2) {
    return (t2[0] || t2).nodeType;
  }, typeCheckConfig: function(t2, e2, n2) {
    for (var i2 in n2)
      if (Object.prototype.hasOwnProperty.call(n2, i2)) {
        var o2 = n2[i2], r2 = e2[i2], s2 = r2 && m.isElement(r2) ? "element" : (a2 = r2, {}.toString.call(a2).match(/\s([a-z]+)/i)[1].toLowerCase());
        if (!new RegExp(o2).test(s2))
          throw new Error(t2.toUpperCase() + ': Option "' + i2 + '" provided type "' + s2 + '" but expected type "' + o2 + '".');
      }
    var a2;
  }, findShadowRoot: function(t2) {
    if (!document.documentElement.attachShadow)
      return null;
    if ("function" != typeof t2.getRootNode)
      return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? m.findShadowRoot(t2.parentNode) : null;
    var e2 = t2.getRootNode();
    return e2 instanceof ShadowRoot ? e2 : null;
  } };
  p.fn.emulateTransitionEnd = n, p.event.special[m.TRANSITION_END] = { bindType: e, delegateType: e, handle: function(t2) {
    if (p(t2.target).is(this))
      return t2.handleObj.handler.apply(this, arguments);
  } };
  var o = "alert", r = "bs.alert", a = "." + r, c = p.fn[o], h = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, u = "alert", f = "fade", d = "show", g = function() {
    function i2(t3) {
      this._element = t3;
    }
    var t2 = i2.prototype;
    return t2.close = function(t3) {
      var e2 = this._element;
      t3 && (e2 = this._getRootElement(t3)), this._triggerCloseEvent(e2).isDefaultPrevented() || this._removeElement(e2);
    }, t2.dispose = function() {
      p.removeData(this._element, r), this._element = null;
    }, t2._getRootElement = function(t3) {
      var e2 = m.getSelectorFromElement(t3), n2 = false;
      return e2 && (n2 = document.querySelector(e2)), n2 || (n2 = p(t3).closest("." + u)[0]), n2;
    }, t2._triggerCloseEvent = function(t3) {
      var e2 = p.Event(h.CLOSE);
      return p(t3).trigger(e2), e2;
    }, t2._removeElement = function(e2) {
      var n2 = this;
      if (p(e2).removeClass(d), p(e2).hasClass(f)) {
        var t3 = m.getTransitionDurationFromElement(e2);
        p(e2).one(m.TRANSITION_END, function(t4) {
          return n2._destroyElement(e2, t4);
        }).emulateTransitionEnd(t3);
      } else
        this._destroyElement(e2);
    }, t2._destroyElement = function(t3) {
      p(t3).detach().trigger(h.CLOSED).remove();
    }, i2._jQueryInterface = function(n2) {
      return this.each(function() {
        var t3 = p(this), e2 = t3.data(r);
        e2 || (e2 = new i2(this), t3.data(r, e2)), "close" === n2 && e2[n2](this);
      });
    }, i2._handleDismiss = function(e2) {
      return function(t3) {
        t3 && t3.preventDefault(), e2.close(this);
      };
    }, s(i2, null, [{ key: "VERSION", get: function() {
      return "4.2.1";
    } }]), i2;
  }();
  p(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), p.fn[o] = g._jQueryInterface, p.fn[o].Constructor = g, p.fn[o].noConflict = function() {
    return p.fn[o] = c, g._jQueryInterface;
  };
  var _ = "button", v = "bs.button", y = "." + v, E = ".data-api", b = p.fn[_], w = "active", T = "btn", C = "focus", S = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', I = 'input:not([type="hidden"])', A = ".active", O = ".btn", N = { CLICK_DATA_API: "click" + y + E, FOCUS_BLUR_DATA_API: "focus" + y + E + " blur" + y + E }, k = function() {
    function n2(t3) {
      this._element = t3;
    }
    var t2 = n2.prototype;
    return t2.toggle = function() {
      var t3 = true, e2 = true, n3 = p(this._element).closest(D)[0];
      if (n3) {
        var i2 = this._element.querySelector(I);
        if (i2) {
          if ("radio" === i2.type)
            if (i2.checked && this._element.classList.contains(w))
              t3 = false;
            else {
              var o2 = n3.querySelector(A);
              o2 && p(o2).removeClass(w);
            }
          if (t3) {
            if (i2.hasAttribute("disabled") || n3.hasAttribute("disabled") || i2.classList.contains("disabled") || n3.classList.contains("disabled"))
              return;
            i2.checked = !this._element.classList.contains(w), p(i2).trigger("change");
          }
          i2.focus(), e2 = false;
        }
      }
      e2 && this._element.setAttribute("aria-pressed", !this._element.classList.contains(w)), t3 && p(this._element).toggleClass(w);
    }, t2.dispose = function() {
      p.removeData(this._element, v), this._element = null;
    }, n2._jQueryInterface = function(e2) {
      return this.each(function() {
        var t3 = p(this).data(v);
        t3 || (t3 = new n2(this), p(this).data(v, t3)), "toggle" === e2 && t3[e2]();
      });
    }, s(n2, null, [{ key: "VERSION", get: function() {
      return "4.2.1";
    } }]), n2;
  }();
  p(document).on(N.CLICK_DATA_API, S, function(t2) {
    t2.preventDefault();
    var e2 = t2.target;
    p(e2).hasClass(T) || (e2 = p(e2).closest(O)), k._jQueryInterface.call(p(e2), "toggle");
  }).on(N.FOCUS_BLUR_DATA_API, S, function(t2) {
    var e2 = p(t2.target).closest(O)[0];
    p(e2).toggleClass(C, /^focus(in)?$/.test(t2.type));
  }), p.fn[_] = k._jQueryInterface, p.fn[_].Constructor = k, p.fn[_].noConflict = function() {
    return p.fn[_] = b, k._jQueryInterface;
  };
  var L = "carousel", P = "bs.carousel", x = "." + P, H = ".data-api", j = p.fn[L], R = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true, touch: true }, F = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, M = "next", W = "prev", U = "left", B = "right", q = { SLIDE: "slide" + x, SLID: "slid" + x, KEYDOWN: "keydown" + x, MOUSEENTER: "mouseenter" + x, MOUSELEAVE: "mouseleave" + x, TOUCHSTART: "touchstart" + x, TOUCHMOVE: "touchmove" + x, TOUCHEND: "touchend" + x, POINTERDOWN: "pointerdown" + x, POINTERUP: "pointerup" + x, DRAG_START: "dragstart" + x, LOAD_DATA_API: "load" + x + H, CLICK_DATA_API: "click" + x + H }, K = "carousel", Q = "active", Y = "slide", V = "carousel-item-right", X = "carousel-item-left", z = "carousel-item-next", G = "carousel-item-prev", J = "pointer-event", Z = ".active", $ = ".active.carousel-item", tt = ".carousel-item", et = ".carousel-item img", nt = ".carousel-item-next, .carousel-item-prev", it = ".carousel-indicators", ot = "[data-slide], [data-slide-to]", rt = '[data-ride="carousel"]', st = { TOUCH: "touch", PEN: "pen" }, at = function() {
    function r2(t3, e2) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e2), this._element = t3, this._indicatorsElement = this._element.querySelector(it), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }
    var t2 = r2.prototype;
    return t2.next = function() {
      this._isSliding || this._slide(M);
    }, t2.nextWhenVisible = function() {
      !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next();
    }, t2.prev = function() {
      this._isSliding || this._slide(W);
    }, t2.pause = function(t3) {
      t3 || (this._isPaused = true), this._element.querySelector(nt) && (m.triggerTransitionEnd(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
    }, t2.cycle = function(t3) {
      t3 || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t2.to = function(t3) {
      var e2 = this;
      this._activeElement = this._element.querySelector($);
      var n2 = this._getItemIndex(this._activeElement);
      if (!(t3 > this._items.length - 1 || t3 < 0))
        if (this._isSliding)
          p(this._element).one(q.SLID, function() {
            return e2.to(t3);
          });
        else {
          if (n2 === t3)
            return this.pause(), void this.cycle();
          var i2 = n2 < t3 ? M : W;
          this._slide(i2, this._items[t3]);
        }
    }, t2.dispose = function() {
      p(this._element).off(x), p.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t2._getConfig = function(t3) {
      return t3 = l({}, R, t3), m.typeCheckConfig(L, t3, F), t3;
    }, t2._handleSwipe = function() {
      var t3 = Math.abs(this.touchDeltaX);
      if (!(t3 <= 40)) {
        var e2 = t3 / this.touchDeltaX;
        0 < e2 && this.prev(), e2 < 0 && this.next();
      }
    }, t2._addEventListeners = function() {
      var e2 = this;
      this._config.keyboard && p(this._element).on(q.KEYDOWN, function(t3) {
        return e2._keydown(t3);
      }), "hover" === this._config.pause && p(this._element).on(q.MOUSEENTER, function(t3) {
        return e2.pause(t3);
      }).on(q.MOUSELEAVE, function(t3) {
        return e2.cycle(t3);
      }), this._addTouchEventListeners();
    }, t2._addTouchEventListeners = function() {
      var n2 = this;
      if (this._touchSupported) {
        var e2 = function(t3) {
          n2._pointerEvent && st[t3.originalEvent.pointerType.toUpperCase()] ? n2.touchStartX = t3.originalEvent.clientX : n2._pointerEvent || (n2.touchStartX = t3.originalEvent.touches[0].clientX);
        }, i2 = function(t3) {
          n2._pointerEvent && st[t3.originalEvent.pointerType.toUpperCase()] && (n2.touchDeltaX = t3.originalEvent.clientX - n2.touchStartX), n2._handleSwipe(), "hover" === n2._config.pause && (n2.pause(), n2.touchTimeout && clearTimeout(n2.touchTimeout), n2.touchTimeout = setTimeout(function(t4) {
            return n2.cycle(t4);
          }, 500 + n2._config.interval));
        };
        p(this._element.querySelectorAll(et)).on(q.DRAG_START, function(t3) {
          return t3.preventDefault();
        }), this._pointerEvent ? (p(this._element).on(q.POINTERDOWN, function(t3) {
          return e2(t3);
        }), p(this._element).on(q.POINTERUP, function(t3) {
          return i2(t3);
        }), this._element.classList.add(J)) : (p(this._element).on(q.TOUCHSTART, function(t3) {
          return e2(t3);
        }), p(this._element).on(q.TOUCHMOVE, function(t3) {
          var e3;
          (e3 = t3).originalEvent.touches && 1 < e3.originalEvent.touches.length ? n2.touchDeltaX = 0 : n2.touchDeltaX = e3.originalEvent.touches[0].clientX - n2.touchStartX;
        }), p(this._element).on(q.TOUCHEND, function(t3) {
          return i2(t3);
        }));
      }
    }, t2._keydown = function(t3) {
      if (!/input|textarea/i.test(t3.target.tagName))
        switch (t3.which) {
          case 37:
            t3.preventDefault(), this.prev();
            break;
          case 39:
            t3.preventDefault(), this.next();
        }
    }, t2._getItemIndex = function(t3) {
      return this._items = t3 && t3.parentNode ? [].slice.call(t3.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t3);
    }, t2._getItemByDirection = function(t3, e2) {
      var n2 = t3 === M, i2 = t3 === W, o2 = this._getItemIndex(e2), r3 = this._items.length - 1;
      if ((i2 && 0 === o2 || n2 && o2 === r3) && !this._config.wrap)
        return e2;
      var s2 = (o2 + (t3 === W ? -1 : 1)) % this._items.length;
      return -1 === s2 ? this._items[this._items.length - 1] : this._items[s2];
    }, t2._triggerSlideEvent = function(t3, e2) {
      var n2 = this._getItemIndex(t3), i2 = this._getItemIndex(this._element.querySelector($)), o2 = p.Event(q.SLIDE, { relatedTarget: t3, direction: e2, from: i2, to: n2 });
      return p(this._element).trigger(o2), o2;
    }, t2._setActiveIndicatorElement = function(t3) {
      if (this._indicatorsElement) {
        var e2 = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
        p(e2).removeClass(Q);
        var n2 = this._indicatorsElement.children[this._getItemIndex(t3)];
        n2 && p(n2).addClass(Q);
      }
    }, t2._slide = function(t3, e2) {
      var n2, i2, o2, r3 = this, s2 = this._element.querySelector($), a2 = this._getItemIndex(s2), l2 = e2 || s2 && this._getItemByDirection(t3, s2), c2 = this._getItemIndex(l2), h2 = Boolean(this._interval);
      if (o2 = t3 === M ? (n2 = X, i2 = z, U) : (n2 = V, i2 = G, B), l2 && p(l2).hasClass(Q))
        this._isSliding = false;
      else if (!this._triggerSlideEvent(l2, o2).isDefaultPrevented() && s2 && l2) {
        this._isSliding = true, h2 && this.pause(), this._setActiveIndicatorElement(l2);
        var u2 = p.Event(q.SLID, { relatedTarget: l2, direction: o2, from: a2, to: c2 });
        if (p(this._element).hasClass(Y)) {
          p(l2).addClass(i2), m.reflow(l2), p(s2).addClass(n2), p(l2).addClass(n2);
          var f2 = parseInt(l2.getAttribute("data-interval"), 10);
          this._config.interval = f2 ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f2) : this._config.defaultInterval || this._config.interval;
          var d2 = m.getTransitionDurationFromElement(s2);
          p(s2).one(m.TRANSITION_END, function() {
            p(l2).removeClass(n2 + " " + i2).addClass(Q), p(s2).removeClass(Q + " " + i2 + " " + n2), r3._isSliding = false, setTimeout(function() {
              return p(r3._element).trigger(u2);
            }, 0);
          }).emulateTransitionEnd(d2);
        } else
          p(s2).removeClass(Q), p(l2).addClass(Q), this._isSliding = false, p(this._element).trigger(u2);
        h2 && this.cycle();
      }
    }, r2._jQueryInterface = function(i2) {
      return this.each(function() {
        var t3 = p(this).data(P), e2 = l({}, R, p(this).data());
        "object" == typeof i2 && (e2 = l({}, e2, i2));
        var n2 = "string" == typeof i2 ? i2 : e2.slide;
        if (t3 || (t3 = new r2(this, e2), p(this).data(P, t3)), "number" == typeof i2)
          t3.to(i2);
        else if ("string" == typeof n2) {
          if ("undefined" == typeof t3[n2])
            throw new TypeError('No method named "' + n2 + '"');
          t3[n2]();
        } else
          e2.interval && (t3.pause(), t3.cycle());
      });
    }, r2._dataApiClickHandler = function(t3) {
      var e2 = m.getSelectorFromElement(this);
      if (e2) {
        var n2 = p(e2)[0];
        if (n2 && p(n2).hasClass(K)) {
          var i2 = l({}, p(n2).data(), p(this).data()), o2 = this.getAttribute("data-slide-to");
          o2 && (i2.interval = false), r2._jQueryInterface.call(p(n2), i2), o2 && p(n2).data(P).to(o2), t3.preventDefault();
        }
      }
    }, s(r2, null, [{ key: "VERSION", get: function() {
      return "4.2.1";
    } }, { key: "Default", get: function() {
      return R;
    } }]), r2;
  }();
  p(document).on(q.CLICK_DATA_API, ot, at._dataApiClickHandler), p(window).on(q.LOAD_DATA_API, function() {
    for (var t2 = [].slice.call(document.querySelectorAll(rt)), e2 = 0, n2 = t2.length; e2 < n2; e2++) {
      var i2 = p(t2[e2]);
      at._jQueryInterface.call(i2, i2.data());
    }
  }), p.fn[L] = at._jQueryInterface, p.fn[L].Constructor = at, p.fn[L].noConflict = function() {
    return p.fn[L] = j, at._jQueryInterface;
  };
  var lt = "collapse", ct = "bs.collapse", ht = "." + ct, ut = p.fn[lt], ft = { toggle: true, parent: "" }, dt = { toggle: "boolean", parent: "(string|element)" }, pt = { SHOW: "show" + ht, SHOWN: "shown" + ht, HIDE: "hide" + ht, HIDDEN: "hidden" + ht, CLICK_DATA_API: "click" + ht + ".data-api" }, mt = "show", gt = "collapse", _t = "collapsing", vt = "collapsed", yt = "width", Et = "height", bt = ".show, .collapsing", wt = '[data-toggle="collapse"]', Tt = function() {
    function a2(e2, t3) {
      this._isTransitioning = false, this._element = e2, this._config = this._getConfig(t3), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e2.id + '"],[data-toggle="collapse"][data-target="#' + e2.id + '"]'));
      for (var n2 = [].slice.call(document.querySelectorAll(wt)), i2 = 0, o2 = n2.length; i2 < o2; i2++) {
        var r2 = n2[i2], s2 = m.getSelectorFromElement(r2), a3 = [].slice.call(document.querySelectorAll(s2)).filter(function(t4) {
          return t4 === e2;
        });
        null !== s2 && 0 < a3.length && (this._selector = s2, this._triggerArray.push(r2));
      }
      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }
    var t2 = a2.prototype;
    return t2.toggle = function() {
      p(this._element).hasClass(mt) ? this.hide() : this.show();
    }, t2.show = function() {
      var t3, e2, n2 = this;
      if (!this._isTransitioning && !p(this._element).hasClass(mt) && (this._parent && 0 === (t3 = [].slice.call(this._parent.querySelectorAll(bt)).filter(function(t4) {
        return "string" == typeof n2._config.parent ? t4.getAttribute("data-parent") === n2._config.parent : t4.classList.contains(gt);
      })).length && (t3 = null), !(t3 && (e2 = p(t3).not(this._selector).data(ct)) && e2._isTransitioning))) {
        var i2 = p.Event(pt.SHOW);
        if (p(this._element).trigger(i2), !i2.isDefaultPrevented()) {
          t3 && (a2._jQueryInterface.call(p(t3).not(this._selector), "hide"), e2 || p(t3).data(ct, null));
          var o2 = this._getDimension();
          p(this._element).removeClass(gt).addClass(_t), this._element.style[o2] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(vt).attr("aria-expanded", true), this.setTransitioning(true);
          var r2 = "scroll" + (o2[0].toUpperCase() + o2.slice(1)), s2 = m.getTransitionDurationFromElement(this._element);
          p(this._element).one(m.TRANSITION_END, function() {
            p(n2._element).removeClass(_t).addClass(gt).addClass(mt), n2._element.style[o2] = "", n2.setTransitioning(false), p(n2._element).trigger(pt.SHOWN);
          }).emulateTransitionEnd(s2), this._element.style[o2] = this._element[r2] + "px";
        }
      }
    }, t2.hide = function() {
      var t3 = this;
      if (!this._isTransitioning && p(this._element).hasClass(mt)) {
        var e2 = p.Event(pt.HIDE);
        if (p(this._element).trigger(e2), !e2.isDefaultPrevented()) {
          var n2 = this._getDimension();
          this._element.style[n2] = this._element.getBoundingClientRect()[n2] + "px", m.reflow(this._element), p(this._element).addClass(_t).removeClass(gt).removeClass(mt);
          var i2 = this._triggerArray.length;
          if (0 < i2)
            for (var o2 = 0; o2 < i2; o2++) {
              var r2 = this._triggerArray[o2], s2 = m.getSelectorFromElement(r2);
              if (null !== s2)
                p([].slice.call(document.querySelectorAll(s2))).hasClass(mt) || p(r2).addClass(vt).attr("aria-expanded", false);
            }
          this.setTransitioning(true);
          this._element.style[n2] = "";
          var a3 = m.getTransitionDurationFromElement(this._element);
          p(this._element).one(m.TRANSITION_END, function() {
            t3.setTransitioning(false), p(t3._element).removeClass(_t).addClass(gt).trigger(pt.HIDDEN);
          }).emulateTransitionEnd(a3);
        }
      }
    }, t2.setTransitioning = function(t3) {
      this._isTransitioning = t3;
    }, t2.dispose = function() {
      p.removeData(this._element, ct), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t2._getConfig = function(t3) {
      return (t3 = l({}, ft, t3)).toggle = Boolean(t3.toggle), m.typeCheckConfig(lt, t3, dt), t3;
    }, t2._getDimension = function() {
      return p(this._element).hasClass(yt) ? yt : Et;
    }, t2._getParent = function() {
      var t3, n2 = this;
      m.isElement(this._config.parent) ? (t3 = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t3 = this._config.parent[0])) : t3 = document.querySelector(this._config.parent);
      var e2 = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', i2 = [].slice.call(t3.querySelectorAll(e2));
      return p(i2).each(function(t4, e3) {
        n2._addAriaAndCollapsedClass(a2._getTargetFromElement(e3), [e3]);
      }), t3;
    }, t2._addAriaAndCollapsedClass = function(t3, e2) {
      var n2 = p(t3).hasClass(mt);
      e2.length && p(e2).toggleClass(vt, !n2).attr("aria-expanded", n2);
    }, a2._getTargetFromElement = function(t3) {
      var e2 = m.getSelectorFromElement(t3);
      return e2 ? document.querySelector(e2) : null;
    }, a2._jQueryInterface = function(i2) {
      return this.each(function() {
        var t3 = p(this), e2 = t3.data(ct), n2 = l({}, ft, t3.data(), "object" == typeof i2 && i2 ? i2 : {});
        if (!e2 && n2.toggle && /show|hide/.test(i2) && (n2.toggle = false), e2 || (e2 = new a2(this, n2), t3.data(ct, e2)), "string" == typeof i2) {
          if ("undefined" == typeof e2[i2])
            throw new TypeError('No method named "' + i2 + '"');
          e2[i2]();
        }
      });
    }, s(a2, null, [{ key: "VERSION", get: function() {
      return "4.2.1";
    } }, { key: "Default", get: function() {
      return ft;
    } }]), a2;
  }();
  p(document).on(pt.CLICK_DATA_API, wt, function(t2) {
    "A" === t2.currentTarget.tagName && t2.preventDefault();
    var n2 = p(this), e2 = m.getSelectorFromElement(this), i2 = [].slice.call(document.querySelectorAll(e2));
    p(i2).each(function() {
      var t3 = p(this), e3 = t3.data(ct) ? "toggle" : n2.data();
      Tt._jQueryInterface.call(t3, e3);
    });
  }), p.fn[lt] = Tt._jQueryInterface, p.fn[lt].Constructor = Tt, p.fn[lt].noConflict = function() {
    return p.fn[lt] = ut, Tt._jQueryInterface;
  };
  for (var Ct = "undefined" != typeof window && "undefined" != typeof document, St = ["Edge", "Trident", "Firefox"], Dt = 0, It = 0; It < St.length; It += 1)
    if (Ct && 0 <= navigator.userAgent.indexOf(St[It])) {
      Dt = 1;
      break;
    }
  var At = Ct && window.Promise ? function(t2) {
    var e2 = false;
    return function() {
      e2 || (e2 = true, window.Promise.resolve().then(function() {
        e2 = false, t2();
      }));
    };
  } : function(t2) {
    var e2 = false;
    return function() {
      e2 || (e2 = true, setTimeout(function() {
        e2 = false, t2();
      }, Dt));
    };
  };
  function Ot(t2) {
    return t2 && "[object Function]" === {}.toString.call(t2);
  }
  function Nt(t2, e2) {
    if (1 !== t2.nodeType)
      return [];
    var n2 = t2.ownerDocument.defaultView.getComputedStyle(t2, null);
    return e2 ? n2[e2] : n2;
  }
  function kt(t2) {
    return "HTML" === t2.nodeName ? t2 : t2.parentNode || t2.host;
  }
  function Lt(t2) {
    if (!t2)
      return document.body;
    switch (t2.nodeName) {
      case "HTML":
      case "BODY":
        return t2.ownerDocument.body;
      case "#document":
        return t2.body;
    }
    var e2 = Nt(t2), n2 = e2.overflow, i2 = e2.overflowX, o2 = e2.overflowY;
    return /(auto|scroll|overlay)/.test(n2 + o2 + i2) ? t2 : Lt(kt(t2));
  }
  var Pt = Ct && !(!window.MSInputMethodContext || !document.documentMode), xt = Ct && /MSIE 10/.test(navigator.userAgent);
  function Ht(t2) {
    return 11 === t2 ? Pt : 10 === t2 ? xt : Pt || xt;
  }
  function jt(t2) {
    if (!t2)
      return document.documentElement;
    for (var e2 = Ht(10) ? document.body : null, n2 = t2.offsetParent || null; n2 === e2 && t2.nextElementSibling; )
      n2 = (t2 = t2.nextElementSibling).offsetParent;
    var i2 = n2 && n2.nodeName;
    return i2 && "BODY" !== i2 && "HTML" !== i2 ? -1 !== ["TH", "TD", "TABLE"].indexOf(n2.nodeName) && "static" === Nt(n2, "position") ? jt(n2) : n2 : t2 ? t2.ownerDocument.documentElement : document.documentElement;
  }
  function Rt(t2) {
    return null !== t2.parentNode ? Rt(t2.parentNode) : t2;
  }
  function Ft(t2, e2) {
    if (!(t2 && t2.nodeType && e2 && e2.nodeType))
      return document.documentElement;
    var n2 = t2.compareDocumentPosition(e2) & Node.DOCUMENT_POSITION_FOLLOWING, i2 = n2 ? t2 : e2, o2 = n2 ? e2 : t2, r2 = document.createRange();
    r2.setStart(i2, 0), r2.setEnd(o2, 0);
    var s2, a2, l2 = r2.commonAncestorContainer;
    if (t2 !== l2 && e2 !== l2 || i2.contains(o2))
      return "BODY" === (a2 = (s2 = l2).nodeName) || "HTML" !== a2 && jt(s2.firstElementChild) !== s2 ? jt(l2) : l2;
    var c2 = Rt(t2);
    return c2.host ? Ft(c2.host, e2) : Ft(t2, Rt(e2).host);
  }
  function Mt(t2) {
    var e2 = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft", n2 = t2.nodeName;
    if ("BODY" !== n2 && "HTML" !== n2)
      return t2[e2];
    var i2 = t2.ownerDocument.documentElement;
    return (t2.ownerDocument.scrollingElement || i2)[e2];
  }
  function Wt(t2, e2) {
    var n2 = "x" === e2 ? "Left" : "Top", i2 = "Left" === n2 ? "Right" : "Bottom";
    return parseFloat(t2["border" + n2 + "Width"], 10) + parseFloat(t2["border" + i2 + "Width"], 10);
  }
  function Ut(t2, e2, n2, i2) {
    return Math.max(e2["offset" + t2], e2["scroll" + t2], n2["client" + t2], n2["offset" + t2], n2["scroll" + t2], Ht(10) ? parseInt(n2["offset" + t2]) + parseInt(i2["margin" + ("Height" === t2 ? "Top" : "Left")]) + parseInt(i2["margin" + ("Height" === t2 ? "Bottom" : "Right")]) : 0);
  }
  function Bt(t2) {
    var e2 = t2.body, n2 = t2.documentElement, i2 = Ht(10) && getComputedStyle(n2);
    return { height: Ut("Height", e2, n2, i2), width: Ut("Width", e2, n2, i2) };
  }
  var qt = function() {
    function i2(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var i3 = e2[n2];
        i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t2, i3.key, i3);
      }
    }
    return function(t2, e2, n2) {
      return e2 && i2(t2.prototype, e2), n2 && i2(t2, n2), t2;
    };
  }(), Kt = function(t2, e2, n2) {
    return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
  }, Qt = Object.assign || function(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var n2 = arguments[e2];
      for (var i2 in n2)
        Object.prototype.hasOwnProperty.call(n2, i2) && (t2[i2] = n2[i2]);
    }
    return t2;
  };
  function Yt(t2) {
    return Qt({}, t2, { right: t2.left + t2.width, bottom: t2.top + t2.height });
  }
  function Vt(t2) {
    var e2 = {};
    try {
      if (Ht(10)) {
        e2 = t2.getBoundingClientRect();
        var n2 = Mt(t2, "top"), i2 = Mt(t2, "left");
        e2.top += n2, e2.left += i2, e2.bottom += n2, e2.right += i2;
      } else
        e2 = t2.getBoundingClientRect();
    } catch (t3) {
    }
    var o2 = { left: e2.left, top: e2.top, width: e2.right - e2.left, height: e2.bottom - e2.top }, r2 = "HTML" === t2.nodeName ? Bt(t2.ownerDocument) : {}, s2 = r2.width || t2.clientWidth || o2.right - o2.left, a2 = r2.height || t2.clientHeight || o2.bottom - o2.top, l2 = t2.offsetWidth - s2, c2 = t2.offsetHeight - a2;
    if (l2 || c2) {
      var h2 = Nt(t2);
      l2 -= Wt(h2, "x"), c2 -= Wt(h2, "y"), o2.width -= l2, o2.height -= c2;
    }
    return Yt(o2);
  }
  function Xt(t2, e2) {
    var n2 = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i2 = Ht(10), o2 = "HTML" === e2.nodeName, r2 = Vt(t2), s2 = Vt(e2), a2 = Lt(t2), l2 = Nt(e2), c2 = parseFloat(l2.borderTopWidth, 10), h2 = parseFloat(l2.borderLeftWidth, 10);
    n2 && o2 && (s2.top = Math.max(s2.top, 0), s2.left = Math.max(s2.left, 0));
    var u2 = Yt({ top: r2.top - s2.top - c2, left: r2.left - s2.left - h2, width: r2.width, height: r2.height });
    if (u2.marginTop = 0, u2.marginLeft = 0, !i2 && o2) {
      var f2 = parseFloat(l2.marginTop, 10), d2 = parseFloat(l2.marginLeft, 10);
      u2.top -= c2 - f2, u2.bottom -= c2 - f2, u2.left -= h2 - d2, u2.right -= h2 - d2, u2.marginTop = f2, u2.marginLeft = d2;
    }
    return (i2 && !n2 ? e2.contains(a2) : e2 === a2 && "BODY" !== a2.nodeName) && (u2 = function(t3, e3) {
      var n3 = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i3 = Mt(e3, "top"), o3 = Mt(e3, "left"), r3 = n3 ? -1 : 1;
      return t3.top += i3 * r3, t3.bottom += i3 * r3, t3.left += o3 * r3, t3.right += o3 * r3, t3;
    }(u2, e2)), u2;
  }
  function zt(t2) {
    if (!t2 || !t2.parentElement || Ht())
      return document.documentElement;
    for (var e2 = t2.parentElement; e2 && "none" === Nt(e2, "transform"); )
      e2 = e2.parentElement;
    return e2 || document.documentElement;
  }
  function Gt(t2, e2, n2, i2) {
    var o2 = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], r2 = { top: 0, left: 0 }, s2 = o2 ? zt(t2) : Ft(t2, e2);
    if ("viewport" === i2)
      r2 = function(t3) {
        var e3 = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n3 = t3.ownerDocument.documentElement, i3 = Xt(t3, n3), o3 = Math.max(n3.clientWidth, window.innerWidth || 0), r3 = Math.max(n3.clientHeight, window.innerHeight || 0), s3 = e3 ? 0 : Mt(n3), a3 = e3 ? 0 : Mt(n3, "left");
        return Yt({ top: s3 - i3.top + i3.marginTop, left: a3 - i3.left + i3.marginLeft, width: o3, height: r3 });
      }(s2, o2);
    else {
      var a2 = void 0;
      "scrollParent" === i2 ? "BODY" === (a2 = Lt(kt(e2))).nodeName && (a2 = t2.ownerDocument.documentElement) : a2 = "window" === i2 ? t2.ownerDocument.documentElement : i2;
      var l2 = Xt(a2, s2, o2);
      if ("HTML" !== a2.nodeName || function t3(e3) {
        var n3 = e3.nodeName;
        return "BODY" !== n3 && "HTML" !== n3 && ("fixed" === Nt(e3, "position") || t3(kt(e3)));
      }(s2))
        r2 = l2;
      else {
        var c2 = Bt(t2.ownerDocument), h2 = c2.height, u2 = c2.width;
        r2.top += l2.top - l2.marginTop, r2.bottom = h2 + l2.top, r2.left += l2.left - l2.marginLeft, r2.right = u2 + l2.left;
      }
    }
    var f2 = "number" == typeof (n2 = n2 || 0);
    return r2.left += f2 ? n2 : n2.left || 0, r2.top += f2 ? n2 : n2.top || 0, r2.right -= f2 ? n2 : n2.right || 0, r2.bottom -= f2 ? n2 : n2.bottom || 0, r2;
  }
  function Jt(t2, e2, i2, n2, o2) {
    var r2 = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t2.indexOf("auto"))
      return t2;
    var s2 = Gt(i2, n2, r2, o2), a2 = { top: { width: s2.width, height: e2.top - s2.top }, right: { width: s2.right - e2.right, height: s2.height }, bottom: { width: s2.width, height: s2.bottom - e2.bottom }, left: { width: e2.left - s2.left, height: s2.height } }, l2 = Object.keys(a2).map(function(t3) {
      return Qt({ key: t3 }, a2[t3], { area: (e3 = a2[t3], e3.width * e3.height) });
      var e3;
    }).sort(function(t3, e3) {
      return e3.area - t3.area;
    }), c2 = l2.filter(function(t3) {
      var e3 = t3.width, n3 = t3.height;
      return e3 >= i2.clientWidth && n3 >= i2.clientHeight;
    }), h2 = 0 < c2.length ? c2[0].key : l2[0].key, u2 = t2.split("-")[1];
    return h2 + (u2 ? "-" + u2 : "");
  }
  function Zt(t2, e2, n2) {
    var i2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return Xt(n2, i2 ? zt(e2) : Ft(e2, n2), i2);
  }
  function $t(t2) {
    var e2 = t2.ownerDocument.defaultView.getComputedStyle(t2), n2 = parseFloat(e2.marginTop || 0) + parseFloat(e2.marginBottom || 0), i2 = parseFloat(e2.marginLeft || 0) + parseFloat(e2.marginRight || 0);
    return { width: t2.offsetWidth + i2, height: t2.offsetHeight + n2 };
  }
  function te(t2) {
    var e2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t2.replace(/left|right|bottom|top/g, function(t3) {
      return e2[t3];
    });
  }
  function ee(t2, e2, n2) {
    n2 = n2.split("-")[0];
    var i2 = $t(t2), o2 = { width: i2.width, height: i2.height }, r2 = -1 !== ["right", "left"].indexOf(n2), s2 = r2 ? "top" : "left", a2 = r2 ? "left" : "top", l2 = r2 ? "height" : "width", c2 = r2 ? "width" : "height";
    return o2[s2] = e2[s2] + e2[l2] / 2 - i2[l2] / 2, o2[a2] = n2 === a2 ? e2[a2] - i2[c2] : e2[te(a2)], o2;
  }
  function ne(t2, e2) {
    return Array.prototype.find ? t2.find(e2) : t2.filter(e2)[0];
  }
  function ie(t2, n2, e2) {
    return (void 0 === e2 ? t2 : t2.slice(0, function(t3, e3, n3) {
      if (Array.prototype.findIndex)
        return t3.findIndex(function(t4) {
          return t4[e3] === n3;
        });
      var i2 = ne(t3, function(t4) {
        return t4[e3] === n3;
      });
      return t3.indexOf(i2);
    }(t2, "name", e2))).forEach(function(t3) {
      t3.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var e3 = t3.function || t3.fn;
      t3.enabled && Ot(e3) && (n2.offsets.popper = Yt(n2.offsets.popper), n2.offsets.reference = Yt(n2.offsets.reference), n2 = e3(n2, t3));
    }), n2;
  }
  function oe(t2, n2) {
    return t2.some(function(t3) {
      var e2 = t3.name;
      return t3.enabled && e2 === n2;
    });
  }
  function re(t2) {
    for (var e2 = [false, "ms", "Webkit", "Moz", "O"], n2 = t2.charAt(0).toUpperCase() + t2.slice(1), i2 = 0; i2 < e2.length; i2++) {
      var o2 = e2[i2], r2 = o2 ? "" + o2 + n2 : t2;
      if ("undefined" != typeof document.body.style[r2])
        return r2;
    }
    return null;
  }
  function se(t2) {
    var e2 = t2.ownerDocument;
    return e2 ? e2.defaultView : window;
  }
  function ae(t2, e2, n2, i2) {
    n2.updateBound = i2, se(t2).addEventListener("resize", n2.updateBound, { passive: true });
    var o2 = Lt(t2);
    return function t3(e3, n3, i3, o3) {
      var r2 = "BODY" === e3.nodeName, s2 = r2 ? e3.ownerDocument.defaultView : e3;
      s2.addEventListener(n3, i3, { passive: true }), r2 || t3(Lt(s2.parentNode), n3, i3, o3), o3.push(s2);
    }(o2, "scroll", n2.updateBound, n2.scrollParents), n2.scrollElement = o2, n2.eventsEnabled = true, n2;
  }
  function le() {
    var t2, e2;
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t2 = this.reference, e2 = this.state, se(t2).removeEventListener("resize", e2.updateBound), e2.scrollParents.forEach(function(t3) {
      t3.removeEventListener("scroll", e2.updateBound);
    }), e2.updateBound = null, e2.scrollParents = [], e2.scrollElement = null, e2.eventsEnabled = false, e2));
  }
  function ce(t2) {
    return "" !== t2 && !isNaN(parseFloat(t2)) && isFinite(t2);
  }
  function he(n2, i2) {
    Object.keys(i2).forEach(function(t2) {
      var e2 = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t2) && ce(i2[t2]) && (e2 = "px"), n2.style[t2] = i2[t2] + e2;
    });
  }
  var ue = Ct && /Firefox/i.test(navigator.userAgent);
  function fe(t2, e2, n2) {
    var i2 = ne(t2, function(t3) {
      return t3.name === e2;
    }), o2 = !!i2 && t2.some(function(t3) {
      return t3.name === n2 && t3.enabled && t3.order < i2.order;
    });
    if (!o2) {
      var r2 = "`" + e2 + "`", s2 = "`" + n2 + "`";
      console.warn(s2 + " modifier is required by " + r2 + " modifier in order to work, be sure to include it before " + r2 + "!");
    }
    return o2;
  }
  var de = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], pe = de.slice(3);
  function me(t2) {
    var e2 = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n2 = pe.indexOf(t2), i2 = pe.slice(n2 + 1).concat(pe.slice(0, n2));
    return e2 ? i2.reverse() : i2;
  }
  var ge = "flip", _e = "clockwise", ve = "counterclockwise";
  function ye(t2, o2, r2, e2) {
    var s2 = [0, 0], a2 = -1 !== ["right", "left"].indexOf(e2), n2 = t2.split(/(\+|\-)/).map(function(t3) {
      return t3.trim();
    }), i2 = n2.indexOf(ne(n2, function(t3) {
      return -1 !== t3.search(/,|\s/);
    }));
    n2[i2] && -1 === n2[i2].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l2 = /\s*,\s*|\s+/, c2 = -1 !== i2 ? [n2.slice(0, i2).concat([n2[i2].split(l2)[0]]), [n2[i2].split(l2)[1]].concat(n2.slice(i2 + 1))] : [n2];
    return (c2 = c2.map(function(t3, e3) {
      var n3 = (1 === e3 ? !a2 : a2) ? "height" : "width", i3 = false;
      return t3.reduce(function(t4, e4) {
        return "" === t4[t4.length - 1] && -1 !== ["+", "-"].indexOf(e4) ? (t4[t4.length - 1] = e4, i3 = true, t4) : i3 ? (t4[t4.length - 1] += e4, i3 = false, t4) : t4.concat(e4);
      }, []).map(function(t4) {
        return function(t5, e4, n4, i4) {
          var o3 = t5.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r3 = +o3[1], s3 = o3[2];
          if (!r3)
            return t5;
          if (0 !== s3.indexOf("%"))
            return "vh" !== s3 && "vw" !== s3 ? r3 : ("vh" === s3 ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r3;
          var a3 = void 0;
          switch (s3) {
            case "%p":
              a3 = n4;
              break;
            case "%":
            case "%r":
            default:
              a3 = i4;
          }
          return Yt(a3)[e4] / 100 * r3;
        }(t4, n3, o2, r2);
      });
    })).forEach(function(n3, i3) {
      n3.forEach(function(t3, e3) {
        ce(t3) && (s2[i3] += t3 * ("-" === n3[e3 - 1] ? -1 : 1));
      });
    }), s2;
  }
  var Ee = { placement: "bottom", positionFixed: false, eventsEnabled: true, removeOnDestroy: false, onCreate: function() {
  }, onUpdate: function() {
  }, modifiers: { shift: { order: 100, enabled: true, fn: function(t2) {
    var e2 = t2.placement, n2 = e2.split("-")[0], i2 = e2.split("-")[1];
    if (i2) {
      var o2 = t2.offsets, r2 = o2.reference, s2 = o2.popper, a2 = -1 !== ["bottom", "top"].indexOf(n2), l2 = a2 ? "left" : "top", c2 = a2 ? "width" : "height", h2 = { start: Kt({}, l2, r2[l2]), end: Kt({}, l2, r2[l2] + r2[c2] - s2[c2]) };
      t2.offsets.popper = Qt({}, s2, h2[i2]);
    }
    return t2;
  } }, offset: { order: 200, enabled: true, fn: function(t2, e2) {
    var n2 = e2.offset, i2 = t2.placement, o2 = t2.offsets, r2 = o2.popper, s2 = o2.reference, a2 = i2.split("-")[0], l2 = void 0;
    return l2 = ce(+n2) ? [+n2, 0] : ye(n2, r2, s2, a2), "left" === a2 ? (r2.top += l2[0], r2.left -= l2[1]) : "right" === a2 ? (r2.top += l2[0], r2.left += l2[1]) : "top" === a2 ? (r2.left += l2[0], r2.top -= l2[1]) : "bottom" === a2 && (r2.left += l2[0], r2.top += l2[1]), t2.popper = r2, t2;
  }, offset: 0 }, preventOverflow: { order: 300, enabled: true, fn: function(t2, i2) {
    var e2 = i2.boundariesElement || jt(t2.instance.popper);
    t2.instance.reference === e2 && (e2 = jt(e2));
    var n2 = re("transform"), o2 = t2.instance.popper.style, r2 = o2.top, s2 = o2.left, a2 = o2[n2];
    o2.top = "", o2.left = "", o2[n2] = "";
    var l2 = Gt(t2.instance.popper, t2.instance.reference, i2.padding, e2, t2.positionFixed);
    o2.top = r2, o2.left = s2, o2[n2] = a2, i2.boundaries = l2;
    var c2 = i2.priority, h2 = t2.offsets.popper, u2 = { primary: function(t3) {
      var e3 = h2[t3];
      return h2[t3] < l2[t3] && !i2.escapeWithReference && (e3 = Math.max(h2[t3], l2[t3])), Kt({}, t3, e3);
    }, secondary: function(t3) {
      var e3 = "right" === t3 ? "left" : "top", n3 = h2[e3];
      return h2[t3] > l2[t3] && !i2.escapeWithReference && (n3 = Math.min(h2[e3], l2[t3] - ("right" === t3 ? h2.width : h2.height))), Kt({}, e3, n3);
    } };
    return c2.forEach(function(t3) {
      var e3 = -1 !== ["left", "top"].indexOf(t3) ? "primary" : "secondary";
      h2 = Qt({}, h2, u2[e3](t3));
    }), t2.offsets.popper = h2, t2;
  }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: true, fn: function(t2) {
    var e2 = t2.offsets, n2 = e2.popper, i2 = e2.reference, o2 = t2.placement.split("-")[0], r2 = Math.floor, s2 = -1 !== ["top", "bottom"].indexOf(o2), a2 = s2 ? "right" : "bottom", l2 = s2 ? "left" : "top", c2 = s2 ? "width" : "height";
    return n2[a2] < r2(i2[l2]) && (t2.offsets.popper[l2] = r2(i2[l2]) - n2[c2]), n2[l2] > r2(i2[a2]) && (t2.offsets.popper[l2] = r2(i2[a2])), t2;
  } }, arrow: { order: 500, enabled: true, fn: function(t2, e2) {
    var n2;
    if (!fe(t2.instance.modifiers, "arrow", "keepTogether"))
      return t2;
    var i2 = e2.element;
    if ("string" == typeof i2) {
      if (!(i2 = t2.instance.popper.querySelector(i2)))
        return t2;
    } else if (!t2.instance.popper.contains(i2))
      return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t2;
    var o2 = t2.placement.split("-")[0], r2 = t2.offsets, s2 = r2.popper, a2 = r2.reference, l2 = -1 !== ["left", "right"].indexOf(o2), c2 = l2 ? "height" : "width", h2 = l2 ? "Top" : "Left", u2 = h2.toLowerCase(), f2 = l2 ? "left" : "top", d2 = l2 ? "bottom" : "right", p2 = $t(i2)[c2];
    a2[d2] - p2 < s2[u2] && (t2.offsets.popper[u2] -= s2[u2] - (a2[d2] - p2)), a2[u2] + p2 > s2[d2] && (t2.offsets.popper[u2] += a2[u2] + p2 - s2[d2]), t2.offsets.popper = Yt(t2.offsets.popper);
    var m2 = a2[u2] + a2[c2] / 2 - p2 / 2, g2 = Nt(t2.instance.popper), _2 = parseFloat(g2["margin" + h2], 10), v2 = parseFloat(g2["border" + h2 + "Width"], 10), y2 = m2 - t2.offsets.popper[u2] - _2 - v2;
    return y2 = Math.max(Math.min(s2[c2] - p2, y2), 0), t2.arrowElement = i2, t2.offsets.arrow = (Kt(n2 = {}, u2, Math.round(y2)), Kt(n2, f2, ""), n2), t2;
  }, element: "[x-arrow]" }, flip: { order: 600, enabled: true, fn: function(p2, m2) {
    if (oe(p2.instance.modifiers, "inner"))
      return p2;
    if (p2.flipped && p2.placement === p2.originalPlacement)
      return p2;
    var g2 = Gt(p2.instance.popper, p2.instance.reference, m2.padding, m2.boundariesElement, p2.positionFixed), _2 = p2.placement.split("-")[0], v2 = te(_2), y2 = p2.placement.split("-")[1] || "", E2 = [];
    switch (m2.behavior) {
      case ge:
        E2 = [_2, v2];
        break;
      case _e:
        E2 = me(_2);
        break;
      case ve:
        E2 = me(_2, true);
        break;
      default:
        E2 = m2.behavior;
    }
    return E2.forEach(function(t2, e2) {
      if (_2 !== t2 || E2.length === e2 + 1)
        return p2;
      _2 = p2.placement.split("-")[0], v2 = te(_2);
      var n2, i2 = p2.offsets.popper, o2 = p2.offsets.reference, r2 = Math.floor, s2 = "left" === _2 && r2(i2.right) > r2(o2.left) || "right" === _2 && r2(i2.left) < r2(o2.right) || "top" === _2 && r2(i2.bottom) > r2(o2.top) || "bottom" === _2 && r2(i2.top) < r2(o2.bottom), a2 = r2(i2.left) < r2(g2.left), l2 = r2(i2.right) > r2(g2.right), c2 = r2(i2.top) < r2(g2.top), h2 = r2(i2.bottom) > r2(g2.bottom), u2 = "left" === _2 && a2 || "right" === _2 && l2 || "top" === _2 && c2 || "bottom" === _2 && h2, f2 = -1 !== ["top", "bottom"].indexOf(_2), d2 = !!m2.flipVariations && (f2 && "start" === y2 && a2 || f2 && "end" === y2 && l2 || !f2 && "start" === y2 && c2 || !f2 && "end" === y2 && h2);
      (s2 || u2 || d2) && (p2.flipped = true, (s2 || u2) && (_2 = E2[e2 + 1]), d2 && (y2 = "end" === (n2 = y2) ? "start" : "start" === n2 ? "end" : n2), p2.placement = _2 + (y2 ? "-" + y2 : ""), p2.offsets.popper = Qt({}, p2.offsets.popper, ee(p2.instance.popper, p2.offsets.reference, p2.placement)), p2 = ie(p2.instance.modifiers, p2, "flip"));
    }), p2;
  }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: false, fn: function(t2) {
    var e2 = t2.placement, n2 = e2.split("-")[0], i2 = t2.offsets, o2 = i2.popper, r2 = i2.reference, s2 = -1 !== ["left", "right"].indexOf(n2), a2 = -1 === ["top", "left"].indexOf(n2);
    return o2[s2 ? "left" : "top"] = r2[n2] - (a2 ? o2[s2 ? "width" : "height"] : 0), t2.placement = te(e2), t2.offsets.popper = Yt(o2), t2;
  } }, hide: { order: 800, enabled: true, fn: function(t2) {
    if (!fe(t2.instance.modifiers, "hide", "preventOverflow"))
      return t2;
    var e2 = t2.offsets.reference, n2 = ne(t2.instance.modifiers, function(t3) {
      return "preventOverflow" === t3.name;
    }).boundaries;
    if (e2.bottom < n2.top || e2.left > n2.right || e2.top > n2.bottom || e2.right < n2.left) {
      if (true === t2.hide)
        return t2;
      t2.hide = true, t2.attributes["x-out-of-boundaries"] = "";
    } else {
      if (false === t2.hide)
        return t2;
      t2.hide = false, t2.attributes["x-out-of-boundaries"] = false;
    }
    return t2;
  } }, computeStyle: { order: 850, enabled: true, fn: function(t2, e2) {
    var n2 = e2.x, i2 = e2.y, o2 = t2.offsets.popper, r2 = ne(t2.instance.modifiers, function(t3) {
      return "applyStyle" === t3.name;
    }).gpuAcceleration;
    void 0 !== r2 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
    var s2, a2, l2, c2, h2, u2, f2, d2, p2, m2, g2, _2, v2 = void 0 !== r2 ? r2 : e2.gpuAcceleration, y2 = jt(t2.instance.popper), E2 = Vt(y2), b2 = { position: o2.position }, w2 = (s2 = t2, a2 = window.devicePixelRatio < 2 || !ue, l2 = s2.offsets, c2 = l2.popper, h2 = l2.reference, u2 = -1 !== ["left", "right"].indexOf(s2.placement), f2 = -1 !== s2.placement.indexOf("-"), d2 = h2.width % 2 == c2.width % 2, p2 = h2.width % 2 == 1 && c2.width % 2 == 1, m2 = function(t3) {
      return t3;
    }, g2 = a2 ? u2 || f2 || d2 ? Math.round : Math.floor : m2, _2 = a2 ? Math.round : m2, { left: g2(p2 && !f2 && a2 ? c2.left - 1 : c2.left), top: _2(c2.top), bottom: _2(c2.bottom), right: g2(c2.right) }), T2 = "bottom" === n2 ? "top" : "bottom", C2 = "right" === i2 ? "left" : "right", S2 = re("transform"), D2 = void 0, I2 = void 0;
    if (I2 = "bottom" === T2 ? "HTML" === y2.nodeName ? -y2.clientHeight + w2.bottom : -E2.height + w2.bottom : w2.top, D2 = "right" === C2 ? "HTML" === y2.nodeName ? -y2.clientWidth + w2.right : -E2.width + w2.right : w2.left, v2 && S2)
      b2[S2] = "translate3d(" + D2 + "px, " + I2 + "px, 0)", b2[T2] = 0, b2[C2] = 0, b2.willChange = "transform";
    else {
      var A2 = "bottom" === T2 ? -1 : 1, O2 = "right" === C2 ? -1 : 1;
      b2[T2] = I2 * A2, b2[C2] = D2 * O2, b2.willChange = T2 + ", " + C2;
    }
    var N2 = { "x-placement": t2.placement };
    return t2.attributes = Qt({}, N2, t2.attributes), t2.styles = Qt({}, b2, t2.styles), t2.arrowStyles = Qt({}, t2.offsets.arrow, t2.arrowStyles), t2;
  }, gpuAcceleration: true, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: true, fn: function(t2) {
    var e2, n2;
    return he(t2.instance.popper, t2.styles), e2 = t2.instance.popper, n2 = t2.attributes, Object.keys(n2).forEach(function(t3) {
      false !== n2[t3] ? e2.setAttribute(t3, n2[t3]) : e2.removeAttribute(t3);
    }), t2.arrowElement && Object.keys(t2.arrowStyles).length && he(t2.arrowElement, t2.arrowStyles), t2;
  }, onLoad: function(t2, e2, n2, i2, o2) {
    var r2 = Zt(o2, e2, t2, n2.positionFixed), s2 = Jt(n2.placement, r2, e2, t2, n2.modifiers.flip.boundariesElement, n2.modifiers.flip.padding);
    return e2.setAttribute("x-placement", s2), he(e2, { position: n2.positionFixed ? "fixed" : "absolute" }), n2;
  }, gpuAcceleration: void 0 } } }, be = function() {
    function r2(t2, e2) {
      var n2 = this, i2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      !function(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }(this, r2), this.scheduleUpdate = function() {
        return requestAnimationFrame(n2.update);
      }, this.update = At(this.update.bind(this)), this.options = Qt({}, r2.Defaults, i2), this.state = { isDestroyed: false, isCreated: false, scrollParents: [] }, this.reference = t2 && t2.jquery ? t2[0] : t2, this.popper = e2 && e2.jquery ? e2[0] : e2, this.options.modifiers = {}, Object.keys(Qt({}, r2.Defaults.modifiers, i2.modifiers)).forEach(function(t3) {
        n2.options.modifiers[t3] = Qt({}, r2.Defaults.modifiers[t3] || {}, i2.modifiers ? i2.modifiers[t3] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function(t3) {
        return Qt({ name: t3 }, n2.options.modifiers[t3]);
      }).sort(function(t3, e3) {
        return t3.order - e3.order;
      }), this.modifiers.forEach(function(t3) {
        t3.enabled && Ot(t3.onLoad) && t3.onLoad(n2.reference, n2.popper, n2.options, t3, n2.state);
      }), this.update();
      var o2 = this.options.eventsEnabled;
      o2 && this.enableEventListeners(), this.state.eventsEnabled = o2;
    }
    return qt(r2, [{ key: "update", value: function() {
      return function() {
        if (!this.state.isDestroyed) {
          var t2 = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: false, offsets: {} };
          t2.offsets.reference = Zt(this.state, this.popper, this.reference, this.options.positionFixed), t2.placement = Jt(this.options.placement, t2.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t2.originalPlacement = t2.placement, t2.positionFixed = this.options.positionFixed, t2.offsets.popper = ee(this.popper, t2.offsets.reference, t2.placement), t2.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t2 = ie(this.modifiers, t2), this.state.isCreated ? this.options.onUpdate(t2) : (this.state.isCreated = true, this.options.onCreate(t2));
        }
      }.call(this);
    } }, { key: "destroy", value: function() {
      return function() {
        return this.state.isDestroyed = true, oe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[re("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
      }.call(this);
    } }, { key: "enableEventListeners", value: function() {
      return function() {
        this.state.eventsEnabled || (this.state = ae(this.reference, this.options, this.state, this.scheduleUpdate));
      }.call(this);
    } }, { key: "disableEventListeners", value: function() {
      return le.call(this);
    } }]), r2;
  }();
  be.Utils = ("undefined" != typeof window ? window : global).PopperUtils, be.placements = de, be.Defaults = Ee;
  var we = "dropdown", Te = "bs.dropdown", Ce = "." + Te, Se = ".data-api", De = p.fn[we], Ie = new RegExp("38|40|27"), Ae = { HIDE: "hide" + Ce, HIDDEN: "hidden" + Ce, SHOW: "show" + Ce, SHOWN: "shown" + Ce, CLICK: "click" + Ce, CLICK_DATA_API: "click" + Ce + Se, KEYDOWN_DATA_API: "keydown" + Ce + Se, KEYUP_DATA_API: "keyup" + Ce + Se }, Oe = "disabled", Ne = "show", ke = "dropup", Le = "dropright", Pe = "dropleft", xe = "dropdown-menu-right", He = "position-static", je = '[data-toggle="dropdown"]', Re = ".dropdown form", Fe = ".dropdown-menu", Me = ".navbar-nav", We = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ue = "top-start", Be = "top-end", qe = "bottom-start", Ke = "bottom-end", Qe = "right-start", Ye = "left-start", Ve = { offset: 0, flip: true, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Xe = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, ze = function() {
    function c2(t3, e2) {
      this._element = t3, this._popper = null, this._config = this._getConfig(e2), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }
    var t2 = c2.prototype;
    return t2.toggle = function() {
      if (!this._element.disabled && !p(this._element).hasClass(Oe)) {
        var t3 = c2._getParentFromElement(this._element), e2 = p(this._menu).hasClass(Ne);
        if (c2._clearMenus(), !e2) {
          var n2 = { relatedTarget: this._element }, i2 = p.Event(Ae.SHOW, n2);
          if (p(t3).trigger(i2), !i2.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof be)
                throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
              var o2 = this._element;
              "parent" === this._config.reference ? o2 = t3 : m.isElement(this._config.reference) && (o2 = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o2 = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(t3).addClass(He), this._popper = new be(o2, this._menu, this._getPopperConfig());
            }
            "ontouchstart" in document.documentElement && 0 === p(t3).closest(Me).length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", true), p(this._menu).toggleClass(Ne), p(t3).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, n2));
          }
        }
      }
    }, t2.show = function() {
      if (!(this._element.disabled || p(this._element).hasClass(Oe) || p(this._menu).hasClass(Ne))) {
        var t3 = { relatedTarget: this._element }, e2 = p.Event(Ae.SHOW, t3), n2 = c2._getParentFromElement(this._element);
        p(n2).trigger(e2), e2.isDefaultPrevented() || (p(this._menu).toggleClass(Ne), p(n2).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, t3)));
      }
    }, t2.hide = function() {
      if (!this._element.disabled && !p(this._element).hasClass(Oe) && p(this._menu).hasClass(Ne)) {
        var t3 = { relatedTarget: this._element }, e2 = p.Event(Ae.HIDE, t3), n2 = c2._getParentFromElement(this._element);
        p(n2).trigger(e2), e2.isDefaultPrevented() || (p(this._menu).toggleClass(Ne), p(n2).toggleClass(Ne).trigger(p.Event(Ae.HIDDEN, t3)));
      }
    }, t2.dispose = function() {
      p.removeData(this._element, Te), p(this._element).off(Ce), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t2.update = function() {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t2._addEventListeners = function() {
      var e2 = this;
      p(this._element).on(Ae.CLICK, function(t3) {
        t3.preventDefault(), t3.stopPropagation(), e2.toggle();
      });
    }, t2._getConfig = function(t3) {
      return t3 = l({}, this.constructor.Default, p(this._element).data(), t3), m.typeCheckConfig(we, t3, this.constructor.DefaultType), t3;
    }, t2._getMenuElement = function() {
      if (!this._menu) {
        var t3 = c2._getParentFromElement(this._element);
        t3 && (this._menu = t3.querySelector(Fe));
      }
      return this._menu;
    }, t2._getPlacement = function() {
      var t3 = p(this._element.parentNode), e2 = qe;
      return t3.hasClass(ke) ? (e2 = Ue, p(this._menu).hasClass(xe) && (e2 = Be)) : t3.hasClass(Le) ? e2 = Qe : t3.hasClass(Pe) ? e2 = Ye : p(this._menu).hasClass(xe) && (e2 = Ke), e2;
    }, t2._detectNavbar = function() {
      return 0 < p(this._element).closest(".navbar").length;
    }, t2._getPopperConfig = function() {
      var e2 = this, t3 = {};
      "function" == typeof this._config.offset ? t3.fn = function(t4) {
        return t4.offsets = l({}, t4.offsets, e2._config.offset(t4.offsets) || {}), t4;
      } : t3.offset = this._config.offset;
      var n2 = { placement: this._getPlacement(), modifiers: { offset: t3, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
      return "static" === this._config.display && (n2.modifiers.applyStyle = { enabled: false }), n2;
    }, c2._jQueryInterface = function(e2) {
      return this.each(function() {
        var t3 = p(this).data(Te);
        if (t3 || (t3 = new c2(this, "object" == typeof e2 ? e2 : null), p(this).data(Te, t3)), "string" == typeof e2) {
          if ("undefined" == typeof t3[e2])
            throw new TypeError('No method named "' + e2 + '"');
          t3[e2]();
        }
      });
    }, c2._clearMenus = function(t3) {
      if (!t3 || 3 !== t3.which && ("keyup" !== t3.type || 9 === t3.which))
        for (var e2 = [].slice.call(document.querySelectorAll(je)), n2 = 0, i2 = e2.length; n2 < i2; n2++) {
          var o2 = c2._getParentFromElement(e2[n2]), r2 = p(e2[n2]).data(Te), s2 = { relatedTarget: e2[n2] };
          if (t3 && "click" === t3.type && (s2.clickEvent = t3), r2) {
            var a2 = r2._menu;
            if (p(o2).hasClass(Ne) && !(t3 && ("click" === t3.type && /input|textarea/i.test(t3.target.tagName) || "keyup" === t3.type && 9 === t3.which) && p.contains(o2, t3.target))) {
              var l2 = p.Event(Ae.HIDE, s2);
              p(o2).trigger(l2), l2.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), e2[n2].setAttribute("aria-expanded", "false"), p(a2).removeClass(Ne), p(o2).removeClass(Ne).trigger(p.Event(Ae.HIDDEN, s2)));
            }
          }
        }
    }, c2._getParentFromElement = function(t3) {
      var e2, n2 = m.getSelectorFromElement(t3);
      return n2 && (e2 = document.querySelector(n2)), e2 || t3.parentNode;
    }, c2._dataApiKeydownHandler = function(t3) {
      if ((/input|textarea/i.test(t3.target.tagName) ? !(32 === t3.which || 27 !== t3.which && (40 !== t3.which && 38 !== t3.which || p(t3.target).closest(Fe).length)) : Ie.test(t3.which)) && (t3.preventDefault(), t3.stopPropagation(), !this.disabled && !p(this).hasClass(Oe))) {
        var e2 = c2._getParentFromElement(this), n2 = p(e2).hasClass(Ne);
        if (n2 && (!n2 || 27 !== t3.which && 32 !== t3.which)) {
          var i2 = [].slice.call(e2.querySelectorAll(We));
          if (0 !== i2.length) {
            var o2 = i2.indexOf(t3.target);
            38 === t3.which && 0 < o2 && o2--, 40 === t3.which && o2 < i2.length - 1 && o2++, o2 < 0 && (o2 = 0), i2[o2].focus();
          }
        } else {
          if (27 === t3.which) {
            var r2 = e2.querySelector(je);
            p(r2).trigger("focus");
          }
          p(this).trigger("click");
        }
      }
    }, s(c2, null, [{ key: "VERSION", get: function() {
      return "4.2.1";
    } }, { key: "Default", get: function() {
      return Ve;
    } }, { key: "DefaultType", get: function() {
      return Xe;
    } }]), c2;
  }();
  p(document).on(Ae.KEYDOWN_DATA_API, je, ze._dataApiKeydownHandler).on(Ae.KEYDOWN_DATA_API, Fe, ze._dataApiKeydownHandler).on(Ae.CLICK_DATA_API + " " + Ae.KEYUP_DATA_API, ze._clearMenus).on(Ae.CLICK_DATA_API, je, function(t2) {
    t2.preventDefault(), t2.stopPropagation(), ze._jQueryInterface.call(p(this), "toggle");
  }).on(Ae.CLICK_DATA_API, Re, function(t2) {
    t2.stopPropagation();
  }), p.fn[we] = ze._jQueryInterface, p.fn[we].Constructor = ze, p.fn[we].noConflict = function() {
    return p.fn[we] = De, ze._jQueryInterface;
  };
  var Ge = "modal", Je = "bs.modal", Ze = "." + Je, $e = p.fn[Ge], tn = { backdrop: true, keyboard: true, focus: true, show: true }, en = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, nn = { HIDE: "hide" + Ze, HIDDEN: "hidden" + Ze, SHOW: "show" + Ze, SHOWN: "shown" + Ze, FOCUSIN: "focusin" + Ze, RESIZE: "resize" + Ze, CLICK_DISMISS: "click.dismiss" + Ze, KEYDOWN_DISMISS: "keydown.dismiss" + Ze, MOUSEUP_DISMISS: "mouseup.dismiss" + Ze, MOUSEDOWN_DISMISS: "mousedown.dismiss" + Ze, CLICK_DATA_API: "click" + Ze + ".data-api" }, on = "modal-scrollbar-measure", rn = "modal-backdrop", sn = "modal-open", an = "fade", ln = "show", cn = ".modal-dialog", hn = '[data-toggle="modal"]', un = '[data-dismiss="modal"]', fn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", dn = ".sticky-top", pn = function() {
    function o2(t3, e2) {
      this._config = this._getConfig(e2), this._element = t3, this._dialog = t3.querySelector(cn), this._backdrop = null, this._isShown = false, this._isBodyOverflowing = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._scrollbarWidth = 0;
    }
    var t2 = o2.prototype;
    return t2.toggle = function(t3) {
      return this._isShown ? this.hide() : this.show(t3);
    }, t2.show = function(t3) {
      var e2 = this;
      if (!this._isShown && !this._isTransitioning) {
        p(this._element).hasClass(an) && (this._isTransitioning = true);
        var n2 = p.Event(nn.SHOW, { relatedTarget: t3 });
        p(this._element).trigger(n2), this._isShown || n2.isDefaultPrevented() || (this._isShown = true, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(nn.CLICK_DISMISS, un, function(t4) {
          return e2.hide(t4);
        }), p(this._dialog).on(nn.MOUSEDOWN_DISMISS, function() {
          p(e2._element).one(nn.MOUSEUP_DISMISS, function(t4) {
            p(t4.target).is(e2._element) && (e2._ignoreBackdropClick = true);
          });
        }), this._showBackdrop(function() {
          return e2._showElement(t3);
        }));
      }
    }, t2.hide = function(t3) {
      var e2 = this;
      if (t3 && t3.preventDefault(), this._isShown && !this._isTransitioning) {
        var n2 = p.Event(nn.HIDE);
        if (p(this._element).trigger(n2), this._isShown && !n2.isDefaultPrevented()) {
          this._isShown = false;
          var i2 = p(this._element).hasClass(an);
          if (i2 && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(nn.FOCUSIN), p(this._element).removeClass(ln), p(this._element).off(nn.CLICK_DISMISS), p(this._dialog).off(nn.MOUSEDOWN_DISMISS), i2) {
            var o3 = m.getTransitionDurationFromElement(this._element);
            p(this._element).one(m.TRANSITION_END, function(t4) {
              return e2._hideModal(t4);
            }).emulateTransitionEnd(o3);
          } else
            this._hideModal();
        }
      }
    }, t2.dispose = function() {
      [window, this._element, this._dialog].forEach(function(t3) {
        return p(t3).off(Ze);
      }), p(document).off(nn.FOCUSIN), p.removeData(this._element, Je), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t2.handleUpdate = function() {
      this._adjustDialog();
    }, t2._getConfig = function(t3) {
      return t3 = l({}, tn, t3), m.typeCheckConfig(Ge, t3, en), t3;
    }, t2._showElement = function(t3) {
      var e2 = this, n2 = p(this._element).hasClass(an);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.scrollTop = 0, n2 && m.reflow(this._element), p(this._element).addClass(ln), this._config.focus && this._enforceFocus();
      var i2 = p.Event(nn.SHOWN, { relatedTarget: t3 }), o3 = function() {
        e2._config.focus && e2._element.focus(), e2._isTransitioning = false, p(e2._element).trigger(i2);
      };
      if (n2) {
        var r2 = m.getTransitionDurationFromElement(this._dialog);
        p(this._dialog).one(m.TRANSITION_END, o3).emulateTransitionEnd(r2);
      } else
        o3();
    }, t2._enforceFocus = function() {
      var e2 = this;
      p(document).off(nn.FOCUSIN).on(nn.FOCUSIN, function(t3) {
        document !== t3.target && e2._element !== t3.target && 0 === p(e2._element).has(t3.target).length && e2._element.focus();
      });
    }, t2._setEscapeEvent = function() {
      var e2 = this;
      this._isShown && this._config.keyboard ? p(this._element).on(nn.KEYDOWN_DISMISS, function(t3) {
        27 === t3.which && (t3.preventDefault(), e2.hide());
      }) : this._isShown || p(this._element).off(nn.KEYDOWN_DISMISS);
    }, t2._setResizeEvent = function() {
      var e2 = this;
      this._isShown ? p(window).on(nn.RESIZE, function(t3) {
        return e2.handleUpdate(t3);
      }) : p(window).off(nn.RESIZE);
    }, t2._hideModal = function() {
      var t3 = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._isTransitioning = false, this._showBackdrop(function() {
        p(document.body).removeClass(sn), t3._resetAdjustments(), t3._resetScrollbar(), p(t3._element).trigger(nn.HIDDEN);
      });
    }, t2._removeBackdrop = function() {
      this._backdrop && (p(this._backdrop).remove(), this._backdrop = null);
    }, t2._showBackdrop = function(t3) {
      var e2 = this, n2 = p(this._element).hasClass(an) ? an : "";
      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = rn, n2 && this._backdrop.classList.add(n2), p(this._backdrop).appendTo(document.body), p(this._element).on(nn.CLICK_DISMISS, function(t4) {
          e2._ignoreBackdropClick ? e2._ignoreBackdropClick = false : t4.target === t4.currentTarget && ("static" === e2._config.backdrop ? e2._element.focus() : e2.hide());
        }), n2 && m.reflow(this._backdrop), p(this._backdrop).addClass(ln), !t3)
          return;
        if (!n2)
          return void t3();
        var i2 = m.getTransitionDurationFromElement(this._backdrop);
        p(this._backdrop).one(m.TRANSITION_END, t3).emulateTransitionEnd(i2);
      } else if (!this._isShown && this._backdrop) {
        p(this._backdrop).removeClass(ln);
        var o3 = function() {
          e2._removeBackdrop(), t3 && t3();
        };
        if (p(this._element).hasClass(an)) {
          var r2 = m.getTransitionDurationFromElement(this._backdrop);
          p(this._backdrop).one(m.TRANSITION_END, o3).emulateTransitionEnd(r2);
        } else
          o3();
      } else
        t3 && t3();
    }, t2._adjustDialog = function() {
      var t3 = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t3 && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t3 && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t2._resetAdjustments = function() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t2._checkScrollbar = function() {
      var t3 = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t3.left + t3.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t2._setScrollbar = function() {
      var o3 = this;
      if (this._isBodyOverflowing) {
        var t3 = [].slice.call(document.querySelectorAll(fn)), e2 = [].slice.call(document.querySelectorAll(dn));
        p(t3).each(function(t4, e3) {
          var n3 = e3.style.paddingRight, i3 = p(e3).css("padding-right");
          p(e3).data("padding-right", n3).css("padding-right", parseFloat(i3) + o3._scrollbarWidth + "px");
        }), p(e2).each(function(t4, e3) {
          var n3 = e3.style.marginRight, i3 = p(e3).css("margin-right");
          p(e3).data("margin-right", n3).css("margin-right", parseFloat(i3) - o3._scrollbarWidth + "px");
        });
        var n2 = document.body.style.paddingRight, i2 = p(document.body).css("padding-right");
        p(document.body).data("padding-right", n2).css("padding-right", parseFloat(i2) + this._scrollbarWidth + "px");
      }
      p(document.body).addClass(sn);
    }, t2._resetScrollbar = function() {
      var t3 = [].slice.call(document.querySelectorAll(fn));
      p(t3).each(function(t4, e3) {
        var n3 = p(e3).data("padding-right");
        p(e3).removeData("padding-right"), e3.style.paddingRight = n3 || "";
      });
      var e2 = [].slice.call(document.querySelectorAll("" + dn));
      p(e2).each(function(t4, e3) {
        var n3 = p(e3).data("margin-right");
        "undefined" != typeof n3 && p(e3).css("margin-right", n3).removeData("margin-right");
      });
      var n2 = p(document.body).data("padding-right");
      p(document.body).removeData("padding-right"), document.body.style.paddingRight = n2 || "";
    }, t2._getScrollbarWidth = function() {
      var t3 = document.createElement("div");
      t3.className = on, document.body.appendChild(t3);
      var e2 = t3.getBoundingClientRect().width - t3.clientWidth;
      return document.body.removeChild(t3), e2;
    }, o2._jQueryInterface = function(n2, i2) {
      return this.each(function() {
        var t3 = p(this).data(Je), e2 = l({}, tn, p(this).data(), "object" == typeof n2 && n2 ? n2 : {});
        if (t3 || (t3 = new o2(this, e2), p(this).data(Je, t3)), "string" == typeof n2) {
          if ("undefined" == typeof t3[n2])
            throw new TypeError('No method named "' + n2 + '"');
          t3[n2](i2);
        } else
          e2.show && t3.show(i2);
      });
    }, s(o2, null, [{ key: "VERSION", get: function() {
      return "4.2.1";
    } }, { key: "Default", get: function() {
      return tn;
    } }]), o2;
  }();
  p(document).on(nn.CLICK_DATA_API, hn, function(t2) {
    var e2, n2 = this, i2 = m.getSelectorFromElement(this);
    i2 && (e2 = document.querySelector(i2));
    var o2 = p(e2).data(Je) ? "toggle" : l({}, p(e2).data(), p(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t2.preventDefault();
    var r2 = p(e2).one(nn.SHOW, function(t3) {
      t3.isDefaultPrevented() || r2.one(nn.HIDDEN, function() {
        p(n2).is(":visible") && n2.focus();
      });
    });
    pn._jQueryInterface.call(p(e2), o2, this);
  }), p.fn[Ge] = pn._jQueryInterface, p.fn[Ge].Constructor = pn, p.fn[Ge].noConflict = function() {
    return p.fn[Ge] = $e, pn._jQueryInterface;
  };
  var mn = "tooltip", gn = "bs.tooltip", _n = "." + gn, vn = p.fn[mn], yn = "bs-tooltip", En = new RegExp("(^|\\s)" + yn + "\\S+", "g"), bn = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }, wn = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }, Tn = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: 0, container: false, fallbackPlacement: "flip", boundary: "scrollParent" }, Cn = "show", Sn = "out", Dn = { HIDE: "hide" + _n, HIDDEN: "hidden" + _n, SHOW: "show" + _n, SHOWN: "shown" + _n, INSERTED: "inserted" + _n, CLICK: "click" + _n, FOCUSIN: "focusin" + _n, FOCUSOUT: "focusout" + _n, MOUSEENTER: "mouseenter" + _n, MOUSELEAVE: "mouseleave" + _n }, In = "fade", An = "show", On = ".tooltip-inner", Nn = ".arrow", kn = "hover", Ln = "focus", Pn = "click", xn = "manual", Hn = function() {
    function i2(t3, e2) {
      if ("undefined" == typeof be)
        throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t3, this.config = this._getConfig(e2), this.tip = null, this._setListeners();
    }
    var t2 = i2.prototype;
    return t2.enable = function() {
      this._isEnabled = true;
    }, t2.disable = function() {
      this._isEnabled = false;
    }, t2.toggleEnabled = function() {
      this._isEnabled = !this._isEnabled;
    }, t2.toggle = function(t3) {
      if (this._isEnabled)
        if (t3) {
          var e2 = this.constructor.DATA_KEY, n2 = p(t3.currentTarget).data(e2);
          n2 || (n2 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), p(t3.currentTarget).data(e2, n2)), n2._activeTrigger.click = !n2._activeTrigger.click, n2._isWithActiveTrigger() ? n2._enter(null, n2) : n2._leave(null, n2);
        } else {
          if (p(this.getTipElement()).hasClass(An))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }, t2.dispose = function() {
      clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal"), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t2.show = function() {
      var e2 = this;
      if ("none" === p(this.element).css("display"))
        throw new Error("Please use show on visible elements");
      var t3 = p.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        p(this.element).trigger(t3);
        var n2 = m.findShadowRoot(this.element), i3 = p.contains(null !== n2 ? n2 : this.element.ownerDocument.documentElement, this.element);
        if (t3.isDefaultPrevented() || !i3)
          return;
        var o2 = this.getTipElement(), r2 = m.getUID(this.constructor.NAME);
        o2.setAttribute("id", r2), this.element.setAttribute("aria-describedby", r2), this.setContent(), this.config.animation && p(o2).addClass(In);
        var s2 = "function" == typeof this.config.placement ? this.config.placement.call(this, o2, this.element) : this.config.placement, a2 = this._getAttachment(s2);
        this.addAttachmentClass(a2);
        var l2 = this._getContainer();
        p(o2).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(o2).appendTo(l2), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new be(this.element, o2, { placement: a2, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Nn }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t4) {
          t4.originalPlacement !== t4.placement && e2._handlePopperPlacementChange(t4);
        }, onUpdate: function(t4) {
          return e2._handlePopperPlacementChange(t4);
        } }), p(o2).addClass(An), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
        var c2 = function() {
          e2.config.animation && e2._fixTransition();
          var t4 = e2._hoverState;
          e2._hoverState = null, p(e2.element).trigger(e2.constructor.Event.SHOWN), t4 === Sn && e2._leave(null, e2);
        };
        if (p(this.tip).hasClass(In)) {
          var h2 = m.getTransitionDurationFromElement(this.tip);
          p(this.tip).one(m.TRANSITION_END, c2).emulateTransitionEnd(h2);
        } else
          c2();
      }
    }, t2.hide = function(t3) {
      var e2 = this, n2 = this.getTipElement(), i3 = p.Event(this.constructor.Event.HIDE), o2 = function() {
        e2._hoverState !== Cn && n2.parentNode && n2.parentNode.removeChild(n2), e2._cleanTipClass(), e2.element.removeAttribute("aria-describedby"), p(e2.element).trigger(e2.constructor.Event.HIDDEN), null !== e2._popper && e2._popper.destroy(), t3 && t3();
      };
      if (p(this.element).trigger(i3), !i3.isDefaultPrevented()) {
        if (p(n2).removeClass(An), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger[Pn] = false, this._activeTrigger[Ln] = false, this._activeTrigger[kn] = false, p(this.tip).hasClass(In)) {
          var r2 = m.getTransitionDurationFromElement(n2);
          p(n2).one(m.TRANSITION_END, o2).emulateTransitionEnd(r2);
        } else
          o2();
        this._hoverState = "";
      }
    }, t2.update = function() {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t2.isWithContent = function() {
      return Boolean(this.getTitle());
    }, t2.addAttachmentClass = function(t3) {
      p(this.getTipElement()).addClass(yn + "-" + t3);
    }, t2.getTipElement = function() {
      return this.tip = this.tip || p(this.config.template)[0], this.tip;
    }, t2.setContent = function() {
      var t3 = this.getTipElement();
      this.setElementContent(p(t3.querySelectorAll(On)), this.getTitle()), p(t3).removeClass(In + " " + An);
    }, t2.setElementContent = function(t3, e2) {
      var n2 = this.config.html;
      "object" == typeof e2 && (e2.nodeType || e2.jquery) ? n2 ? p(e2).parent().is(t3) || t3.empty().append(e2) : t3.text(p(e2).text()) : t3[n2 ? "html" : "text"](e2);
    }, t2.getTitle = function() {
      var t3 = this.element.getAttribute("data-original-title");
      return t3 || (t3 = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t3;
    }, t2._getContainer = function() {
      return false === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container);
    }, t2._getAttachment = function(t3) {
      return wn[t3.toUpperCase()];
    }, t2._setListeners = function() {
      var i3 = this;
      this.config.trigger.split(" ").forEach(function(t3) {
        if ("click" === t3)
          p(i3.element).on(i3.constructor.Event.CLICK, i3.config.selector, function(t4) {
            return i3.toggle(t4);
          });
        else if (t3 !== xn) {
          var e2 = t3 === kn ? i3.constructor.Event.MOUSEENTER : i3.constructor.Event.FOCUSIN, n2 = t3 === kn ? i3.constructor.Event.MOUSELEAVE : i3.constructor.Event.FOCUSOUT;
          p(i3.element).on(e2, i3.config.selector, function(t4) {
            return i3._enter(t4);
          }).on(n2, i3.config.selector, function(t4) {
            return i3._leave(t4);
          });
        }
      }), p(this.element).closest(".modal").on("hide.bs.modal", function() {
        i3.element && i3.hide();
      }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, t2._fixTitle = function() {
      var t3 = typeof this.element.getAttribute("data-original-title");
      (this.element.getAttribute("title") || "string" !== t3) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t2._enter = function(t3, e2) {
      var n2 = this.constructor.DATA_KEY;
      (e2 = e2 || p(t3.currentTarget).data(n2)) || (e2 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), p(t3.currentTarget).data(n2, e2)), t3 && (e2._activeTrigger["focusin" === t3.type ? Ln : kn] = true), p(e2.getTipElement()).hasClass(An) || e2._hoverState === Cn ? e2._hoverState = Cn : (clearTimeout(e2._timeout), e2._hoverState = Cn, e2.config.delay && e2.config.delay.show ? e2._timeout = setTimeout(function() {
        e2._hoverState === Cn && e2.show();
      }, e2.config.delay.show) : e2.show());
    }, t2._leave = function(t3, e2) {
      var n2 = this.constructor.DATA_KEY;
      (e2 = e2 || p(t3.currentTarget).data(n2)) || (e2 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), p(t3.currentTarget).data(n2, e2)), t3 && (e2._activeTrigger["focusout" === t3.type ? Ln : kn] = false), e2._isWithActiveTrigger() || (clearTimeout(e2._timeout), e2._hoverState = Sn, e2.config.delay && e2.config.delay.hide ? e2._timeout = setTimeout(function() {
        e2._hoverState === Sn && e2.hide();
      }, e2.config.delay.hide) : e2.hide());
    }, t2._isWithActiveTrigger = function() {
      for (var t3 in this._activeTrigger)
        if (this._activeTrigger[t3])
          return true;
      return false;
    }, t2._getConfig = function(t3) {
      return "number" == typeof (t3 = l({}, this.constructor.Default, p(this.element).data(), "object" == typeof t3 && t3 ? t3 : {})).delay && (t3.delay = { show: t3.delay, hide: t3.delay }), "number" == typeof t3.title && (t3.title = t3.title.toString()), "number" == typeof t3.content && (t3.content = t3.content.toString()), m.typeCheckConfig(mn, t3, this.constructor.DefaultType), t3;
    }, t2._getDelegateConfig = function() {
      var t3 = {};
      if (this.config)
        for (var e2 in this.config)
          this.constructor.Default[e2] !== this.config[e2] && (t3[e2] = this.config[e2]);
      return t3;
    }, t2._cleanTipClass = function() {
      var t3 = p(this.getTipElement()), e2 = t3.attr("class").match(En);
      null !== e2 && e2.length && t3.removeClass(e2.join(""));
    }, t2._handlePopperPlacementChange = function(t3) {
      var e2 = t3.instance;
      this.tip = e2.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t3.placement));
    }, t2._fixTransition = function() {
      var t3 = this.getTipElement(), e2 = this.config.animation;
      null === t3.getAttribute("x-placement") && (p(t3).removeClass(In), this.config.animation = false, this.hide(), this.show(), this.config.animation = e2);
    }, i2._jQueryInterface = function(n2) {
      return this.each(function() {
        var t3 = p(this).data(gn), e2 = "object" == typeof n2 && n2;
        if ((t3 || !/dispose|hide/.test(n2)) && (t3 || (t3 = new i2(this, e2), p(this).data(gn, t3)), "string" == typeof n2)) {
          if ("undefined" == typeof t3[n2])
            throw new TypeError('No method named "' + n2 + '"');
          t3[n2]();
        }
      });
    }, s(i2, null, [{ key: "VERSION", get: function() {
      return "4.2.1";
    } }, { key: "Default", get: function() {
      return Tn;
    } }, { key: "NAME", get: function() {
      return mn;
    } }, { key: "DATA_KEY", get: function() {
      return gn;
    } }, { key: "Event", get: function() {
      return Dn;
    } }, { key: "EVENT_KEY", get: function() {
      return _n;
    } }, { key: "DefaultType", get: function() {
      return bn;
    } }]), i2;
  }();
  p.fn[mn] = Hn._jQueryInterface, p.fn[mn].Constructor = Hn, p.fn[mn].noConflict = function() {
    return p.fn[mn] = vn, Hn._jQueryInterface;
  };
  var jn = "popover", Rn = "bs.popover", Fn = "." + Rn, Mn = p.fn[jn], Wn = "bs-popover", Un = new RegExp("(^|\\s)" + Wn + "\\S+", "g"), Bn = l({}, Hn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), qn = l({}, Hn.DefaultType, { content: "(string|element|function)" }), Kn = "fade", Qn = "show", Yn = ".popover-header", Vn = ".popover-body", Xn = { HIDE: "hide" + Fn, HIDDEN: "hidden" + Fn, SHOW: "show" + Fn, SHOWN: "shown" + Fn, INSERTED: "inserted" + Fn, CLICK: "click" + Fn, FOCUSIN: "focusin" + Fn, FOCUSOUT: "focusout" + Fn, MOUSEENTER: "mouseenter" + Fn, MOUSELEAVE: "mouseleave" + Fn }, zn = function(t2) {
    var e2, n2;
    function i2() {
      return t2.apply(this, arguments) || this;
    }
    n2 = t2, (e2 = i2).prototype = Object.create(n2.prototype), (e2.prototype.constructor = e2).__proto__ = n2;
    var o2 = i2.prototype;
    return o2.isWithContent = function() {
      return this.getTitle() || this._getContent();
    }, o2.addAttachmentClass = function(t3) {
      p(this.getTipElement()).addClass(Wn + "-" + t3);
    }, o2.getTipElement = function() {
      return this.tip = this.tip || p(this.config.template)[0], this.tip;
    }, o2.setContent = function() {
      var t3 = p(this.getTipElement());
      this.setElementContent(t3.find(Yn), this.getTitle());
      var e3 = this._getContent();
      "function" == typeof e3 && (e3 = e3.call(this.element)), this.setElementContent(t3.find(Vn), e3), t3.removeClass(Kn + " " + Qn);
    }, o2._getContent = function() {
      return this.element.getAttribute("data-content") || this.config.content;
    }, o2._cleanTipClass = function() {
      var t3 = p(this.getTipElement()), e3 = t3.attr("class").match(Un);
      null !== e3 && 0 < e3.length && t3.removeClass(e3.join(""));
    }, i2._jQueryInterface = function(n3) {
      return this.each(function() {
        var t3 = p(this).data(Rn), e3 = "object" == typeof n3 ? n3 : null;
        if ((t3 || !/dispose|hide/.test(n3)) && (t3 || (t3 = new i2(this, e3), p(this).data(Rn, t3)), "string" == typeof n3)) {
          if ("undefined" == typeof t3[n3])
            throw new TypeError('No method named "' + n3 + '"');
          t3[n3]();
        }
      });
    }, s(i2, null, [{ key: "VERSION", get: function() {
      return "4.2.1";
    } }, { key: "Default", get: function() {
      return Bn;
    } }, { key: "NAME", get: function() {
      return jn;
    } }, { key: "DATA_KEY", get: function() {
      return Rn;
    } }, { key: "Event", get: function() {
      return Xn;
    } }, { key: "EVENT_KEY", get: function() {
      return Fn;
    } }, { key: "DefaultType", get: function() {
      return qn;
    } }]), i2;
  }(Hn);
  p.fn[jn] = zn._jQueryInterface, p.fn[jn].Constructor = zn, p.fn[jn].noConflict = function() {
    return p.fn[jn] = Mn, zn._jQueryInterface;
  };
  var Gn = "scrollspy", Jn = "bs.scrollspy", Zn = "." + Jn, $n = p.fn[Gn], ti = { offset: 10, method: "auto", target: "" }, ei = { offset: "number", method: "string", target: "(string|element)" }, ni = { ACTIVATE: "activate" + Zn, SCROLL: "scroll" + Zn, LOAD_DATA_API: "load" + Zn + ".data-api" }, ii = "dropdown-item", oi = "active", ri = '[data-spy="scroll"]', si = ".nav, .list-group", ai = ".nav-link", li = ".nav-item", ci = ".list-group-item", hi = ".dropdown", ui = ".dropdown-item", fi = ".dropdown-toggle", di = "offset", pi = "position", mi = function() {
    function n2(t3, e2) {
      var n3 = this;
      this._element = t3, this._scrollElement = "BODY" === t3.tagName ? window : t3, this._config = this._getConfig(e2), this._selector = this._config.target + " " + ai + "," + this._config.target + " " + ci + "," + this._config.target + " " + ui, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(ni.SCROLL, function(t4) {
        return n3._process(t4);
      }), this.refresh(), this._process();
    }
    var t2 = n2.prototype;
    return t2.refresh = function() {
      var e2 = this, t3 = this._scrollElement === this._scrollElement.window ? di : pi, o2 = "auto" === this._config.method ? t3 : this._config.method, r2 = o2 === pi ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t4) {
        var e3, n3 = m.getSelectorFromElement(t4);
        if (n3 && (e3 = document.querySelector(n3)), e3) {
          var i2 = e3.getBoundingClientRect();
          if (i2.width || i2.height)
            return [p(e3)[o2]().top + r2, n3];
        }
        return null;
      }).filter(function(t4) {
        return t4;
      }).sort(function(t4, e3) {
        return t4[0] - e3[0];
      }).forEach(function(t4) {
        e2._offsets.push(t4[0]), e2._targets.push(t4[1]);
      });
    }, t2.dispose = function() {
      p.removeData(this._element, Jn), p(this._scrollElement).off(Zn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t2._getConfig = function(t3) {
      if ("string" != typeof (t3 = l({}, ti, "object" == typeof t3 && t3 ? t3 : {})).target) {
        var e2 = p(t3.target).attr("id");
        e2 || (e2 = m.getUID(Gn), p(t3.target).attr("id", e2)), t3.target = "#" + e2;
      }
      return m.typeCheckConfig(Gn, t3, ei), t3;
    }, t2._getScrollTop = function() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t2._getScrollHeight = function() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t2._getOffsetHeight = function() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t2._process = function() {
      var t3 = this._getScrollTop() + this._config.offset, e2 = this._getScrollHeight(), n3 = this._config.offset + e2 - this._getOffsetHeight();
      if (this._scrollHeight !== e2 && this.refresh(), n3 <= t3) {
        var i2 = this._targets[this._targets.length - 1];
        this._activeTarget !== i2 && this._activate(i2);
      } else {
        if (this._activeTarget && t3 < this._offsets[0] && 0 < this._offsets[0])
          return this._activeTarget = null, void this._clear();
        for (var o2 = this._offsets.length; o2--; ) {
          this._activeTarget !== this._targets[o2] && t3 >= this._offsets[o2] && ("undefined" == typeof this._offsets[o2 + 1] || t3 < this._offsets[o2 + 1]) && this._activate(this._targets[o2]);
        }
      }
    }, t2._activate = function(e2) {
      this._activeTarget = e2, this._clear();
      var t3 = this._selector.split(",").map(function(t4) {
        return t4 + '[data-target="' + e2 + '"],' + t4 + '[href="' + e2 + '"]';
      }), n3 = p([].slice.call(document.querySelectorAll(t3.join(","))));
      n3.hasClass(ii) ? (n3.closest(hi).find(fi).addClass(oi), n3.addClass(oi)) : (n3.addClass(oi), n3.parents(si).prev(ai + ", " + ci).addClass(oi), n3.parents(si).prev(li).children(ai).addClass(oi)), p(this._scrollElement).trigger(ni.ACTIVATE, { relatedTarget: e2 });
    }, t2._clear = function() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function(t3) {
        return t3.classList.contains(oi);
      }).forEach(function(t3) {
        return t3.classList.remove(oi);
      });
    }, n2._jQueryInterface = function(e2) {
      return this.each(function() {
        var t3 = p(this).data(Jn);
        if (t3 || (t3 = new n2(this, "object" == typeof e2 && e2), p(this).data(Jn, t3)), "string" == typeof e2) {
          if ("undefined" == typeof t3[e2])
            throw new TypeError('No method named "' + e2 + '"');
          t3[e2]();
        }
      });
    }, s(n2, null, [{ key: "VERSION", get: function() {
      return "4.2.1";
    } }, { key: "Default", get: function() {
      return ti;
    } }]), n2;
  }();
  p(window).on(ni.LOAD_DATA_API, function() {
    for (var t2 = [].slice.call(document.querySelectorAll(ri)), e2 = t2.length; e2--; ) {
      var n2 = p(t2[e2]);
      mi._jQueryInterface.call(n2, n2.data());
    }
  }), p.fn[Gn] = mi._jQueryInterface, p.fn[Gn].Constructor = mi, p.fn[Gn].noConflict = function() {
    return p.fn[Gn] = $n, mi._jQueryInterface;
  };
  var gi = "bs.tab", _i = "." + gi, vi = p.fn.tab, yi = { HIDE: "hide" + _i, HIDDEN: "hidden" + _i, SHOW: "show" + _i, SHOWN: "shown" + _i, CLICK_DATA_API: "click" + _i + ".data-api" }, Ei = "dropdown-menu", bi = "active", wi = "disabled", Ti = "fade", Ci = "show", Si = ".dropdown", Di = ".nav, .list-group", Ii = ".active", Ai = "> li > .active", Oi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Ni = ".dropdown-toggle", ki = "> .dropdown-menu .active", Li = function() {
    function i2(t3) {
      this._element = t3;
    }
    var t2 = i2.prototype;
    return t2.show = function() {
      var n2 = this;
      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(bi) || p(this._element).hasClass(wi))) {
        var t3, i3, e2 = p(this._element).closest(Di)[0], o2 = m.getSelectorFromElement(this._element);
        if (e2) {
          var r2 = "UL" === e2.nodeName || "OL" === e2.nodeName ? Ai : Ii;
          i3 = (i3 = p.makeArray(p(e2).find(r2)))[i3.length - 1];
        }
        var s2 = p.Event(yi.HIDE, { relatedTarget: this._element }), a2 = p.Event(yi.SHOW, { relatedTarget: i3 });
        if (i3 && p(i3).trigger(s2), p(this._element).trigger(a2), !a2.isDefaultPrevented() && !s2.isDefaultPrevented()) {
          o2 && (t3 = document.querySelector(o2)), this._activate(this._element, e2);
          var l2 = function() {
            var t4 = p.Event(yi.HIDDEN, { relatedTarget: n2._element }), e3 = p.Event(yi.SHOWN, { relatedTarget: i3 });
            p(i3).trigger(t4), p(n2._element).trigger(e3);
          };
          t3 ? this._activate(t3, t3.parentNode, l2) : l2();
        }
      }
    }, t2.dispose = function() {
      p.removeData(this._element, gi), this._element = null;
    }, t2._activate = function(t3, e2, n2) {
      var i3 = this, o2 = (!e2 || "UL" !== e2.nodeName && "OL" !== e2.nodeName ? p(e2).children(Ii) : p(e2).find(Ai))[0], r2 = n2 && o2 && p(o2).hasClass(Ti), s2 = function() {
        return i3._transitionComplete(t3, o2, n2);
      };
      if (o2 && r2) {
        var a2 = m.getTransitionDurationFromElement(o2);
        p(o2).removeClass(Ci).one(m.TRANSITION_END, s2).emulateTransitionEnd(a2);
      } else
        s2();
    }, t2._transitionComplete = function(t3, e2, n2) {
      if (e2) {
        p(e2).removeClass(bi);
        var i3 = p(e2.parentNode).find(ki)[0];
        i3 && p(i3).removeClass(bi), "tab" === e2.getAttribute("role") && e2.setAttribute("aria-selected", false);
      }
      if (p(t3).addClass(bi), "tab" === t3.getAttribute("role") && t3.setAttribute("aria-selected", true), m.reflow(t3), p(t3).addClass(Ci), t3.parentNode && p(t3.parentNode).hasClass(Ei)) {
        var o2 = p(t3).closest(Si)[0];
        if (o2) {
          var r2 = [].slice.call(o2.querySelectorAll(Ni));
          p(r2).addClass(bi);
        }
        t3.setAttribute("aria-expanded", true);
      }
      n2 && n2();
    }, i2._jQueryInterface = function(n2) {
      return this.each(function() {
        var t3 = p(this), e2 = t3.data(gi);
        if (e2 || (e2 = new i2(this), t3.data(gi, e2)), "string" == typeof n2) {
          if ("undefined" == typeof e2[n2])
            throw new TypeError('No method named "' + n2 + '"');
          e2[n2]();
        }
      });
    }, s(i2, null, [{ key: "VERSION", get: function() {
      return "4.2.1";
    } }]), i2;
  }();
  p(document).on(yi.CLICK_DATA_API, Oi, function(t2) {
    t2.preventDefault(), Li._jQueryInterface.call(p(this), "show");
  }), p.fn.tab = Li._jQueryInterface, p.fn.tab.Constructor = Li, p.fn.tab.noConflict = function() {
    return p.fn.tab = vi, Li._jQueryInterface;
  };
  var Pi = "toast", xi = "bs.toast", Hi = "." + xi, ji = p.fn[Pi], Ri = { CLICK_DISMISS: "click.dismiss" + Hi, HIDE: "hide" + Hi, HIDDEN: "hidden" + Hi, SHOW: "show" + Hi, SHOWN: "shown" + Hi }, Fi = "fade", Mi = "hide", Wi = "show", Ui = "showing", Bi = { animation: "boolean", autohide: "boolean", delay: "number" }, qi = { animation: true, autohide: true, delay: 500 }, Ki = '[data-dismiss="toast"]', Qi = function() {
    function i2(t3, e2) {
      this._element = t3, this._config = this._getConfig(e2), this._timeout = null, this._setListeners();
    }
    var t2 = i2.prototype;
    return t2.show = function() {
      var t3 = this;
      p(this._element).trigger(Ri.SHOW), this._config.animation && this._element.classList.add(Fi);
      var e2 = function() {
        t3._element.classList.remove(Ui), t3._element.classList.add(Wi), p(t3._element).trigger(Ri.SHOWN), t3._config.autohide && t3.hide();
      };
      if (this._element.classList.remove(Mi), this._element.classList.add(Ui), this._config.animation) {
        var n2 = m.getTransitionDurationFromElement(this._element);
        p(this._element).one(m.TRANSITION_END, e2).emulateTransitionEnd(n2);
      } else
        e2();
    }, t2.hide = function(t3) {
      var e2 = this;
      this._element.classList.contains(Wi) && (p(this._element).trigger(Ri.HIDE), t3 ? this._close() : this._timeout = setTimeout(function() {
        e2._close();
      }, this._config.delay));
    }, t2.dispose = function() {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Wi) && this._element.classList.remove(Wi), p(this._element).off(Ri.CLICK_DISMISS), p.removeData(this._element, xi), this._element = null, this._config = null;
    }, t2._getConfig = function(t3) {
      return t3 = l({}, qi, p(this._element).data(), "object" == typeof t3 && t3 ? t3 : {}), m.typeCheckConfig(Pi, t3, this.constructor.DefaultType), t3;
    }, t2._setListeners = function() {
      var t3 = this;
      p(this._element).on(Ri.CLICK_DISMISS, Ki, function() {
        return t3.hide(true);
      });
    }, t2._close = function() {
      var t3 = this, e2 = function() {
        t3._element.classList.add(Mi), p(t3._element).trigger(Ri.HIDDEN);
      };
      if (this._element.classList.remove(Wi), this._config.animation) {
        var n2 = m.getTransitionDurationFromElement(this._element);
        p(this._element).one(m.TRANSITION_END, e2).emulateTransitionEnd(n2);
      } else
        e2();
    }, i2._jQueryInterface = function(n2) {
      return this.each(function() {
        var t3 = p(this), e2 = t3.data(xi);
        if (e2 || (e2 = new i2(this, "object" == typeof n2 && n2), t3.data(xi, e2)), "string" == typeof n2) {
          if ("undefined" == typeof e2[n2])
            throw new TypeError('No method named "' + n2 + '"');
          e2[n2](this);
        }
      });
    }, s(i2, null, [{ key: "VERSION", get: function() {
      return "4.2.1";
    } }, { key: "DefaultType", get: function() {
      return Bi;
    } }]), i2;
  }();
  p.fn[Pi] = Qi._jQueryInterface, p.fn[Pi].Constructor = Qi, p.fn[Pi].noConflict = function() {
    return p.fn[Pi] = ji, Qi._jQueryInterface;
  }, function() {
    if ("undefined" == typeof p)
      throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t2 = p.fn.jquery.split(" ")[0].split(".");
    if (t2[0] < 2 && t2[1] < 9 || 1 === t2[0] && 9 === t2[1] && t2[2] < 1 || 4 <= t2[0])
      throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(), t.Util = m, t.Alert = g, t.Button = k, t.Carousel = at, t.Collapse = Tt, t.Dropdown = ze, t.Modal = pn, t.Popover = zn, t.Scrollspy = mi, t.Tab = Li, t.Toast = Qi, t.Tooltip = Hn, Object.defineProperty(t, "__esModule", { value: true });
});
