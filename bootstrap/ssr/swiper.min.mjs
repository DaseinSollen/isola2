!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t();
}(globalThis, function() {
  var f = "undefined" == typeof document ? { body: {}, addEventListener: function() {
  }, removeEventListener: function() {
  }, activeElement: { blur: function() {
  }, nodeName: "" }, querySelector: function() {
    return null;
  }, querySelectorAll: function() {
    return [];
  }, getElementById: function() {
    return null;
  }, createEvent: function() {
    return { initEvent: function() {
    } };
  }, createElement: function() {
    return { children: [], childNodes: [], style: {}, setAttribute: function() {
    }, getElementsByTagName: function() {
      return [];
    } };
  }, location: { hash: "" } } : document, J = "undefined" == typeof window ? { document: f, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function() {
    return this;
  }, addEventListener: function() {
  }, removeEventListener: function() {
  }, getComputedStyle: function() {
    return { getPropertyValue: function() {
      return "";
    } };
  }, Image: function() {
  }, Date: function() {
  }, screen: {}, setTimeout: function() {
  }, clearTimeout: function() {
  } } : window, l = function(e2) {
    for (var t2 = 0; t2 < e2.length; t2 += 1)
      this[t2] = e2[t2];
    return this.length = e2.length, this;
  };
  function L(e2, t2) {
    var a2 = [], i2 = 0;
    if (e2 && !t2 && e2 instanceof l)
      return e2;
    if (e2) {
      if ("string" == typeof e2) {
        var s2, r2, n2 = e2.trim();
        if (0 <= n2.indexOf("<") && 0 <= n2.indexOf(">")) {
          var o2 = "div";
          for (0 === n2.indexOf("<li") && (o2 = "ul"), 0 === n2.indexOf("<tr") && (o2 = "tbody"), 0 !== n2.indexOf("<td") && 0 !== n2.indexOf("<th") || (o2 = "tr"), 0 === n2.indexOf("<tbody") && (o2 = "table"), 0 === n2.indexOf("<option") && (o2 = "select"), (r2 = f.createElement(o2)).innerHTML = n2, i2 = 0; i2 < r2.childNodes.length; i2 += 1)
            a2.push(r2.childNodes[i2]);
        } else
          for (s2 = t2 || "#" !== e2[0] || e2.match(/[ .<>:~]/) ? (t2 || f).querySelectorAll(e2.trim()) : [f.getElementById(e2.trim().split("#")[1])], i2 = 0; i2 < s2.length; i2 += 1)
            s2[i2] && a2.push(s2[i2]);
      } else if (e2.nodeType || e2 === J || e2 === f)
        a2.push(e2);
      else if (0 < e2.length && e2[0].nodeType)
        for (i2 = 0; i2 < e2.length; i2 += 1)
          a2.push(e2[i2]);
    }
    return new l(a2);
  }
  function r(e2) {
    for (var t2 = [], a2 = 0; a2 < e2.length; a2 += 1)
      -1 === t2.indexOf(e2[a2]) && t2.push(e2[a2]);
    return t2;
  }
  L.fn = l.prototype, L.Class = l, L.Dom7 = l;
  var t = { addClass: function(e2) {
    if (void 0 === e2)
      return this;
    for (var t2 = e2.split(" "), a2 = 0; a2 < t2.length; a2 += 1)
      for (var i2 = 0; i2 < this.length; i2 += 1)
        void 0 !== this[i2] && void 0 !== this[i2].classList && this[i2].classList.add(t2[a2]);
    return this;
  }, removeClass: function(e2) {
    for (var t2 = e2.split(" "), a2 = 0; a2 < t2.length; a2 += 1)
      for (var i2 = 0; i2 < this.length; i2 += 1)
        void 0 !== this[i2] && void 0 !== this[i2].classList && this[i2].classList.remove(t2[a2]);
    return this;
  }, hasClass: function(e2) {
    return !!this[0] && this[0].classList.contains(e2);
  }, toggleClass: function(e2) {
    for (var t2 = e2.split(" "), a2 = 0; a2 < t2.length; a2 += 1)
      for (var i2 = 0; i2 < this.length; i2 += 1)
        void 0 !== this[i2] && void 0 !== this[i2].classList && this[i2].classList.toggle(t2[a2]);
    return this;
  }, attr: function(e2, t2) {
    var a2 = arguments;
    if (1 === arguments.length && "string" == typeof e2)
      return this[0] ? this[0].getAttribute(e2) : void 0;
    for (var i2 = 0; i2 < this.length; i2 += 1)
      if (2 === a2.length)
        this[i2].setAttribute(e2, t2);
      else
        for (var s2 in e2)
          this[i2][s2] = e2[s2], this[i2].setAttribute(s2, e2[s2]);
    return this;
  }, removeAttr: function(e2) {
    for (var t2 = 0; t2 < this.length; t2 += 1)
      this[t2].removeAttribute(e2);
    return this;
  }, data: function(e2, t2) {
    var a2;
    if (void 0 !== t2) {
      for (var i2 = 0; i2 < this.length; i2 += 1)
        (a2 = this[i2]).dom7ElementDataStorage || (a2.dom7ElementDataStorage = {}), a2.dom7ElementDataStorage[e2] = t2;
      return this;
    }
    if (a2 = this[0]) {
      if (a2.dom7ElementDataStorage && e2 in a2.dom7ElementDataStorage)
        return a2.dom7ElementDataStorage[e2];
      var s2 = a2.getAttribute("data-" + e2);
      return s2 || void 0;
    }
  }, transform: function(e2) {
    for (var t2 = 0; t2 < this.length; t2 += 1) {
      var a2 = this[t2].style;
      a2.webkitTransform = e2, a2.transform = e2;
    }
    return this;
  }, transition: function(e2) {
    "string" != typeof e2 && (e2 += "ms");
    for (var t2 = 0; t2 < this.length; t2 += 1) {
      var a2 = this[t2].style;
      a2.webkitTransitionDuration = e2, a2.transitionDuration = e2;
    }
    return this;
  }, on: function() {
    for (var e2, t2 = [], a2 = arguments.length; a2--; )
      t2[a2] = arguments[a2];
    var i2 = t2[0], r2 = t2[1], n2 = t2[2], s2 = t2[3];
    function o2(e3) {
      var t3 = e3.target;
      if (t3) {
        var a3 = e3.target.dom7EventData || [];
        if (a3.indexOf(e3) < 0 && a3.unshift(e3), L(t3).is(r2))
          n2.apply(t3, a3);
        else
          for (var i3 = L(t3).parents(), s3 = 0; s3 < i3.length; s3 += 1)
            L(i3[s3]).is(r2) && n2.apply(i3[s3], a3);
      }
    }
    function l2(e3) {
      var t3 = e3 && e3.target && e3.target.dom7EventData || [];
      t3.indexOf(e3) < 0 && t3.unshift(e3), n2.apply(this, t3);
    }
    "function" == typeof t2[1] && (i2 = (e2 = t2)[0], n2 = e2[1], s2 = e2[2], r2 = void 0), s2 || (s2 = false);
    for (var d2, p2 = i2.split(" "), c2 = 0; c2 < this.length; c2 += 1) {
      var u2 = this[c2];
      if (r2)
        for (d2 = 0; d2 < p2.length; d2 += 1) {
          var h2 = p2[d2];
          u2.dom7LiveListeners || (u2.dom7LiveListeners = {}), u2.dom7LiveListeners[h2] || (u2.dom7LiveListeners[h2] = []), u2.dom7LiveListeners[h2].push({ listener: n2, proxyListener: o2 }), u2.addEventListener(h2, o2, s2);
        }
      else
        for (d2 = 0; d2 < p2.length; d2 += 1) {
          var v2 = p2[d2];
          u2.dom7Listeners || (u2.dom7Listeners = {}), u2.dom7Listeners[v2] || (u2.dom7Listeners[v2] = []), u2.dom7Listeners[v2].push({ listener: n2, proxyListener: l2 }), u2.addEventListener(v2, l2, s2);
        }
    }
    return this;
  }, off: function() {
    for (var e2, t2 = [], a2 = arguments.length; a2--; )
      t2[a2] = arguments[a2];
    var i2 = t2[0], s2 = t2[1], r2 = t2[2], n2 = t2[3];
    "function" == typeof t2[1] && (i2 = (e2 = t2)[0], r2 = e2[1], n2 = e2[2], s2 = void 0), n2 || (n2 = false);
    for (var o2 = i2.split(" "), l2 = 0; l2 < o2.length; l2 += 1)
      for (var d2 = o2[l2], p2 = 0; p2 < this.length; p2 += 1) {
        var c2 = this[p2], u2 = void 0;
        if (!s2 && c2.dom7Listeners ? u2 = c2.dom7Listeners[d2] : s2 && c2.dom7LiveListeners && (u2 = c2.dom7LiveListeners[d2]), u2 && u2.length)
          for (var h2 = u2.length - 1; 0 <= h2; h2 -= 1) {
            var v2 = u2[h2];
            r2 && v2.listener === r2 ? (c2.removeEventListener(d2, v2.proxyListener, n2), u2.splice(h2, 1)) : r2 && v2.listener && v2.listener.dom7proxy && v2.listener.dom7proxy === r2 ? (c2.removeEventListener(d2, v2.proxyListener, n2), u2.splice(h2, 1)) : r2 || (c2.removeEventListener(d2, v2.proxyListener, n2), u2.splice(h2, 1));
          }
      }
    return this;
  }, trigger: function() {
    for (var e2 = [], t2 = arguments.length; t2--; )
      e2[t2] = arguments[t2];
    for (var a2 = e2[0].split(" "), i2 = e2[1], s2 = 0; s2 < a2.length; s2 += 1)
      for (var r2 = a2[s2], n2 = 0; n2 < this.length; n2 += 1) {
        var o2 = this[n2], l2 = void 0;
        try {
          l2 = new J.CustomEvent(r2, { detail: i2, bubbles: true, cancelable: true });
        } catch (e3) {
          (l2 = f.createEvent("Event")).initEvent(r2, true, true), l2.detail = i2;
        }
        o2.dom7EventData = e2.filter(function(e3, t3) {
          return 0 < t3;
        }), o2.dispatchEvent(l2), o2.dom7EventData = [], delete o2.dom7EventData;
      }
    return this;
  }, transitionEnd: function(t2) {
    var a2, i2 = ["webkitTransitionEnd", "transitionend"], s2 = this;
    function r2(e2) {
      if (e2.target === this)
        for (t2.call(this, e2), a2 = 0; a2 < i2.length; a2 += 1)
          s2.off(i2[a2], r2);
    }
    if (t2)
      for (a2 = 0; a2 < i2.length; a2 += 1)
        s2.on(i2[a2], r2);
    return this;
  }, outerWidth: function(e2) {
    if (0 < this.length) {
      if (e2) {
        var t2 = this.styles();
        return this[0].offsetWidth + parseFloat(t2.getPropertyValue("margin-right")) + parseFloat(t2.getPropertyValue("margin-left"));
      }
      return this[0].offsetWidth;
    }
    return null;
  }, outerHeight: function(e2) {
    if (0 < this.length) {
      if (e2) {
        var t2 = this.styles();
        return this[0].offsetHeight + parseFloat(t2.getPropertyValue("margin-top")) + parseFloat(t2.getPropertyValue("margin-bottom"));
      }
      return this[0].offsetHeight;
    }
    return null;
  }, offset: function() {
    if (0 < this.length) {
      var e2 = this[0], t2 = e2.getBoundingClientRect(), a2 = f.body, i2 = e2.clientTop || a2.clientTop || 0, s2 = e2.clientLeft || a2.clientLeft || 0, r2 = e2 === J ? J.scrollY : e2.scrollTop, n2 = e2 === J ? J.scrollX : e2.scrollLeft;
      return { top: t2.top + r2 - i2, left: t2.left + n2 - s2 };
    }
    return null;
  }, css: function(e2, t2) {
    var a2;
    if (1 === arguments.length) {
      if ("string" != typeof e2) {
        for (a2 = 0; a2 < this.length; a2 += 1)
          for (var i2 in e2)
            this[a2].style[i2] = e2[i2];
        return this;
      }
      if (this[0])
        return J.getComputedStyle(this[0], null).getPropertyValue(e2);
    }
    if (2 === arguments.length && "string" == typeof e2) {
      for (a2 = 0; a2 < this.length; a2 += 1)
        this[a2].style[e2] = t2;
      return this;
    }
    return this;
  }, each: function(e2) {
    if (!e2)
      return this;
    for (var t2 = 0; t2 < this.length; t2 += 1)
      if (false === e2.call(this[t2], t2, this[t2]))
        return this;
    return this;
  }, html: function(e2) {
    if (void 0 === e2)
      return this[0] ? this[0].innerHTML : void 0;
    for (var t2 = 0; t2 < this.length; t2 += 1)
      this[t2].innerHTML = e2;
    return this;
  }, text: function(e2) {
    if (void 0 === e2)
      return this[0] ? this[0].textContent.trim() : null;
    for (var t2 = 0; t2 < this.length; t2 += 1)
      this[t2].textContent = e2;
    return this;
  }, is: function(e2) {
    var t2, a2, i2 = this[0];
    if (!i2 || void 0 === e2)
      return false;
    if ("string" == typeof e2) {
      if (i2.matches)
        return i2.matches(e2);
      if (i2.webkitMatchesSelector)
        return i2.webkitMatchesSelector(e2);
      if (i2.msMatchesSelector)
        return i2.msMatchesSelector(e2);
      for (t2 = L(e2), a2 = 0; a2 < t2.length; a2 += 1)
        if (t2[a2] === i2)
          return true;
      return false;
    }
    if (e2 === f)
      return i2 === f;
    if (e2 === J)
      return i2 === J;
    if (e2.nodeType || e2 instanceof l) {
      for (t2 = e2.nodeType ? [e2] : e2, a2 = 0; a2 < t2.length; a2 += 1)
        if (t2[a2] === i2)
          return true;
      return false;
    }
    return false;
  }, index: function() {
    var e2, t2 = this[0];
    if (t2) {
      for (e2 = 0; null !== (t2 = t2.previousSibling); )
        1 === t2.nodeType && (e2 += 1);
      return e2;
    }
  }, eq: function(e2) {
    if (void 0 === e2)
      return this;
    var t2, a2 = this.length;
    return new l(a2 - 1 < e2 ? [] : e2 < 0 ? (t2 = a2 + e2) < 0 ? [] : [this[t2]] : [this[e2]]);
  }, append: function() {
    for (var e2, t2 = [], a2 = arguments.length; a2--; )
      t2[a2] = arguments[a2];
    for (var i2 = 0; i2 < t2.length; i2 += 1) {
      e2 = t2[i2];
      for (var s2 = 0; s2 < this.length; s2 += 1)
        if ("string" == typeof e2) {
          var r2 = f.createElement("div");
          for (r2.innerHTML = e2; r2.firstChild; )
            this[s2].appendChild(r2.firstChild);
        } else if (e2 instanceof l)
          for (var n2 = 0; n2 < e2.length; n2 += 1)
            this[s2].appendChild(e2[n2]);
        else
          this[s2].appendChild(e2);
    }
    return this;
  }, prepend: function(e2) {
    var t2, a2;
    for (t2 = 0; t2 < this.length; t2 += 1)
      if ("string" == typeof e2) {
        var i2 = f.createElement("div");
        for (i2.innerHTML = e2, a2 = i2.childNodes.length - 1; 0 <= a2; a2 -= 1)
          this[t2].insertBefore(i2.childNodes[a2], this[t2].childNodes[0]);
      } else if (e2 instanceof l)
        for (a2 = 0; a2 < e2.length; a2 += 1)
          this[t2].insertBefore(e2[a2], this[t2].childNodes[0]);
      else
        this[t2].insertBefore(e2, this[t2].childNodes[0]);
    return this;
  }, next: function(e2) {
    return 0 < this.length ? e2 ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e2) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([]);
  }, nextAll: function(e2) {
    var t2 = [], a2 = this[0];
    if (!a2)
      return new l([]);
    for (; a2.nextElementSibling; ) {
      var i2 = a2.nextElementSibling;
      e2 ? L(i2).is(e2) && t2.push(i2) : t2.push(i2), a2 = i2;
    }
    return new l(t2);
  }, prev: function(e2) {
    if (0 < this.length) {
      var t2 = this[0];
      return e2 ? t2.previousElementSibling && L(t2.previousElementSibling).is(e2) ? new l([t2.previousElementSibling]) : new l([]) : t2.previousElementSibling ? new l([t2.previousElementSibling]) : new l([]);
    }
    return new l([]);
  }, prevAll: function(e2) {
    var t2 = [], a2 = this[0];
    if (!a2)
      return new l([]);
    for (; a2.previousElementSibling; ) {
      var i2 = a2.previousElementSibling;
      e2 ? L(i2).is(e2) && t2.push(i2) : t2.push(i2), a2 = i2;
    }
    return new l(t2);
  }, parent: function(e2) {
    for (var t2 = [], a2 = 0; a2 < this.length; a2 += 1)
      null !== this[a2].parentNode && (e2 ? L(this[a2].parentNode).is(e2) && t2.push(this[a2].parentNode) : t2.push(this[a2].parentNode));
    return L(r(t2));
  }, parents: function(e2) {
    for (var t2 = [], a2 = 0; a2 < this.length; a2 += 1)
      for (var i2 = this[a2].parentNode; i2; )
        e2 ? L(i2).is(e2) && t2.push(i2) : t2.push(i2), i2 = i2.parentNode;
    return L(r(t2));
  }, closest: function(e2) {
    var t2 = this;
    return void 0 === e2 ? new l([]) : (t2.is(e2) || (t2 = t2.parents(e2).eq(0)), t2);
  }, find: function(e2) {
    for (var t2 = [], a2 = 0; a2 < this.length; a2 += 1)
      for (var i2 = this[a2].querySelectorAll(e2), s2 = 0; s2 < i2.length; s2 += 1)
        t2.push(i2[s2]);
    return new l(t2);
  }, children: function(e2) {
    for (var t2 = [], a2 = 0; a2 < this.length; a2 += 1)
      for (var i2 = this[a2].childNodes, s2 = 0; s2 < i2.length; s2 += 1)
        e2 ? 1 === i2[s2].nodeType && L(i2[s2]).is(e2) && t2.push(i2[s2]) : 1 === i2[s2].nodeType && t2.push(i2[s2]);
    return new l(r(t2));
  }, remove: function() {
    for (var e2 = 0; e2 < this.length; e2 += 1)
      this[e2].parentNode && this[e2].parentNode.removeChild(this[e2]);
    return this;
  }, add: function() {
    for (var e2 = [], t2 = arguments.length; t2--; )
      e2[t2] = arguments[t2];
    var a2, i2;
    for (a2 = 0; a2 < e2.length; a2 += 1) {
      var s2 = L(e2[a2]);
      for (i2 = 0; i2 < s2.length; i2 += 1)
        this[this.length] = s2[i2], this.length += 1;
    }
    return this;
  }, styles: function() {
    return this[0] ? J.getComputedStyle(this[0], null) : {};
  } };
  Object.keys(t).forEach(function(e2) {
    L.fn[e2] = t[e2];
  });
  var e, a, i, s, ee = { deleteProps: function(e2) {
    var t2 = e2;
    Object.keys(t2).forEach(function(e3) {
      try {
        t2[e3] = null;
      } catch (e4) {
      }
      try {
        delete t2[e3];
      } catch (e4) {
      }
    });
  }, nextTick: function(e2, t2) {
    return void 0 === t2 && (t2 = 0), setTimeout(e2, t2);
  }, now: function() {
    return Date.now();
  }, getTranslate: function(e2, t2) {
    var a2, i2, s2;
    void 0 === t2 && (t2 = "x");
    var r2 = J.getComputedStyle(e2, null);
    return J.WebKitCSSMatrix ? (6 < (i2 = r2.transform || r2.webkitTransform).split(",").length && (i2 = i2.split(", ").map(function(e3) {
      return e3.replace(",", ".");
    }).join(", ")), s2 = new J.WebKitCSSMatrix("none" === i2 ? "" : i2)) : a2 = (s2 = r2.MozTransform || r2.OTransform || r2.MsTransform || r2.msTransform || r2.transform || r2.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t2 && (i2 = J.WebKitCSSMatrix ? s2.m41 : 16 === a2.length ? parseFloat(a2[12]) : parseFloat(a2[4])), "y" === t2 && (i2 = J.WebKitCSSMatrix ? s2.m42 : 16 === a2.length ? parseFloat(a2[13]) : parseFloat(a2[5])), i2 || 0;
  }, parseUrlQuery: function(e2) {
    var t2, a2, i2, s2, r2 = {}, n2 = e2 || J.location.href;
    if ("string" == typeof n2 && n2.length)
      for (s2 = (a2 = (n2 = -1 < n2.indexOf("?") ? n2.replace(/\S*\?/, "") : "").split("&").filter(function(e3) {
        return "" !== e3;
      })).length, t2 = 0; t2 < s2; t2 += 1)
        i2 = a2[t2].replace(/#\S+/g, "").split("="), r2[decodeURIComponent(i2[0])] = void 0 === i2[1] ? void 0 : decodeURIComponent(i2[1]) || "";
    return r2;
  }, isObject: function(e2) {
    return "object" == typeof e2 && null !== e2 && e2.constructor && e2.constructor === Object;
  }, extend: function() {
    for (var e2 = [], t2 = arguments.length; t2--; )
      e2[t2] = arguments[t2];
    for (var a2 = Object(e2[0]), i2 = 1; i2 < e2.length; i2 += 1) {
      var s2 = e2[i2];
      if (null != s2)
        for (var r2 = Object.keys(Object(s2)), n2 = 0, o2 = r2.length; n2 < o2; n2 += 1) {
          var l2 = r2[n2], d2 = Object.getOwnPropertyDescriptor(s2, l2);
          void 0 !== d2 && d2.enumerable && (ee.isObject(a2[l2]) && ee.isObject(s2[l2]) ? ee.extend(a2[l2], s2[l2]) : !ee.isObject(a2[l2]) && ee.isObject(s2[l2]) ? (a2[l2] = {}, ee.extend(a2[l2], s2[l2])) : a2[l2] = s2[l2]);
        }
    }
    return a2;
  } }, te = (i = f.createElement("div"), { touch: J.Modernizr && true === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && f instanceof J.DocumentTouch), pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator && 0 < J.navigator.maxTouchPoints), prefixedPointerEvents: !!J.navigator.msPointerEnabled, transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a), transforms3d: J.Modernizr && true === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e), flexbox: function() {
    for (var e2 = i.style, t2 = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a2 = 0; a2 < t2.length; a2 += 1)
      if (t2[a2] in e2)
        return true;
    return false;
  }(), observer: "MutationObserver" in J || "WebkitMutationObserver" in J, passiveListener: function() {
    var e2 = false;
    try {
      var t2 = Object.defineProperty({}, "passive", { get: function() {
        e2 = true;
      } });
      J.addEventListener("testPassiveListener", null, t2);
    } catch (e3) {
    }
    return e2;
  }(), gestures: "ongesturestart" in J }), I = { isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g), isEdge: !!J.navigator.userAgent.match(/Edge/g), isSafari: (s = J.navigator.userAgent.toLowerCase(), 0 <= s.indexOf("safari") && s.indexOf("chrome") < 0 && s.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent) }, n = function(e2) {
    void 0 === e2 && (e2 = {});
    var t2 = this;
    t2.params = e2, t2.eventsListeners = {}, t2.params && t2.params.on && Object.keys(t2.params.on).forEach(function(e3) {
      t2.on(e3, t2.params.on[e3]);
    });
  }, o = { components: { configurable: true } };
  n.prototype.on = function(e2, t2, a2) {
    var i2 = this;
    if ("function" != typeof t2)
      return i2;
    var s2 = a2 ? "unshift" : "push";
    return e2.split(" ").forEach(function(e3) {
      i2.eventsListeners[e3] || (i2.eventsListeners[e3] = []), i2.eventsListeners[e3][s2](t2);
    }), i2;
  }, n.prototype.once = function(a2, i2, e2) {
    var s2 = this;
    if ("function" != typeof i2)
      return s2;
    function r2() {
      for (var e3 = [], t2 = arguments.length; t2--; )
        e3[t2] = arguments[t2];
      i2.apply(s2, e3), s2.off(a2, r2), r2.f7proxy && delete r2.f7proxy;
    }
    return r2.f7proxy = i2, s2.on(a2, r2, e2);
  }, n.prototype.off = function(e2, i2) {
    var s2 = this;
    return s2.eventsListeners && e2.split(" ").forEach(function(a2) {
      void 0 === i2 ? s2.eventsListeners[a2] = [] : s2.eventsListeners[a2] && s2.eventsListeners[a2].length && s2.eventsListeners[a2].forEach(function(e3, t2) {
        (e3 === i2 || e3.f7proxy && e3.f7proxy === i2) && s2.eventsListeners[a2].splice(t2, 1);
      });
    }), s2;
  }, n.prototype.emit = function() {
    for (var e2 = [], t2 = arguments.length; t2--; )
      e2[t2] = arguments[t2];
    var a2, i2, s2, r2 = this;
    return r2.eventsListeners && ("string" == typeof e2[0] || Array.isArray(e2[0]) ? (a2 = e2[0], i2 = e2.slice(1, e2.length), s2 = r2) : (a2 = e2[0].events, i2 = e2[0].data, s2 = e2[0].context || r2), (Array.isArray(a2) ? a2 : a2.split(" ")).forEach(function(e3) {
      if (r2.eventsListeners && r2.eventsListeners[e3]) {
        var t3 = [];
        r2.eventsListeners[e3].forEach(function(e4) {
          t3.push(e4);
        }), t3.forEach(function(e4) {
          e4.apply(s2, i2);
        });
      }
    })), r2;
  }, n.prototype.useModulesParams = function(a2) {
    var i2 = this;
    i2.modules && Object.keys(i2.modules).forEach(function(e2) {
      var t2 = i2.modules[e2];
      t2.params && ee.extend(a2, t2.params);
    });
  }, n.prototype.useModules = function(i2) {
    void 0 === i2 && (i2 = {});
    var s2 = this;
    s2.modules && Object.keys(s2.modules).forEach(function(e2) {
      var a2 = s2.modules[e2], t2 = i2[e2] || {};
      a2.instance && Object.keys(a2.instance).forEach(function(e3) {
        var t3 = a2.instance[e3];
        s2[e3] = "function" == typeof t3 ? t3.bind(s2) : t3;
      }), a2.on && s2.on && Object.keys(a2.on).forEach(function(e3) {
        s2.on(e3, a2.on[e3]);
      }), a2.create && a2.create.bind(s2)(t2);
    });
  }, o.components.set = function(e2) {
    this.use && this.use(e2);
  }, n.installModule = function(t2) {
    for (var e2 = [], a2 = arguments.length - 1; 0 < a2--; )
      e2[a2] = arguments[a2 + 1];
    var i2 = this;
    i2.prototype.modules || (i2.prototype.modules = {});
    var s2 = t2.name || Object.keys(i2.prototype.modules).length + "_" + ee.now();
    return (i2.prototype.modules[s2] = t2).proto && Object.keys(t2.proto).forEach(function(e3) {
      i2.prototype[e3] = t2.proto[e3];
    }), t2.static && Object.keys(t2.static).forEach(function(e3) {
      i2[e3] = t2.static[e3];
    }), t2.install && t2.install.apply(i2, e2), i2;
  }, n.use = function(e2) {
    for (var t2 = [], a2 = arguments.length - 1; 0 < a2--; )
      t2[a2] = arguments[a2 + 1];
    var i2 = this;
    return Array.isArray(e2) ? (e2.forEach(function(e3) {
      return i2.installModule(e3);
    }), i2) : i2.installModule.apply(i2, [e2].concat(t2));
  }, Object.defineProperties(n, o);
  var d = { updateSize: function() {
    var e2, t2, a2 = this, i2 = a2.$el;
    e2 = void 0 !== a2.params.width ? a2.params.width : i2[0].clientWidth, t2 = void 0 !== a2.params.height ? a2.params.height : i2[0].clientHeight, 0 === e2 && a2.isHorizontal() || 0 === t2 && a2.isVertical() || (e2 = e2 - parseInt(i2.css("padding-left"), 10) - parseInt(i2.css("padding-right"), 10), t2 = t2 - parseInt(i2.css("padding-top"), 10) - parseInt(i2.css("padding-bottom"), 10), ee.extend(a2, { width: e2, height: t2, size: a2.isHorizontal() ? e2 : t2 }));
  }, updateSlides: function() {
    var e2 = this, t2 = e2.params, a2 = e2.$wrapperEl, i2 = e2.size, s2 = e2.rtlTranslate, r2 = e2.wrongRTL, n2 = e2.virtual && t2.virtual.enabled, o2 = n2 ? e2.virtual.slides.length : e2.slides.length, l2 = a2.children("." + e2.params.slideClass), d2 = n2 ? e2.virtual.slides.length : l2.length, p2 = [], c2 = [], u2 = [], h2 = t2.slidesOffsetBefore;
    "function" == typeof h2 && (h2 = t2.slidesOffsetBefore.call(e2));
    var v2 = t2.slidesOffsetAfter;
    "function" == typeof v2 && (v2 = t2.slidesOffsetAfter.call(e2));
    var f2 = e2.snapGrid.length, m2 = e2.snapGrid.length, g2 = t2.spaceBetween, b2 = -h2, w2 = 0, y2 = 0;
    if (void 0 !== i2) {
      var x2, T2;
      "string" == typeof g2 && 0 <= g2.indexOf("%") && (g2 = parseFloat(g2.replace("%", "")) / 100 * i2), e2.virtualSize = -g2, s2 ? l2.css({ marginLeft: "", marginTop: "" }) : l2.css({ marginRight: "", marginBottom: "" }), 1 < t2.slidesPerColumn && (x2 = Math.floor(d2 / t2.slidesPerColumn) === d2 / e2.params.slidesPerColumn ? d2 : Math.ceil(d2 / t2.slidesPerColumn) * t2.slidesPerColumn, "auto" !== t2.slidesPerView && "row" === t2.slidesPerColumnFill && (x2 = Math.max(x2, t2.slidesPerView * t2.slidesPerColumn)));
      for (var E2, S2 = t2.slidesPerColumn, C2 = x2 / S2, M2 = Math.floor(d2 / t2.slidesPerColumn), z2 = 0; z2 < d2; z2 += 1) {
        T2 = 0;
        var P2 = l2.eq(z2);
        if (1 < t2.slidesPerColumn) {
          var k2 = void 0, $2 = void 0, L2 = void 0;
          "column" === t2.slidesPerColumnFill ? (L2 = z2 - ($2 = Math.floor(z2 / S2)) * S2, (M2 < $2 || $2 === M2 && L2 === S2 - 1) && S2 <= (L2 += 1) && (L2 = 0, $2 += 1), k2 = $2 + L2 * x2 / S2, P2.css({ "-webkit-box-ordinal-group": k2, "-moz-box-ordinal-group": k2, "-ms-flex-order": k2, "-webkit-order": k2, order: k2 })) : $2 = z2 - (L2 = Math.floor(z2 / C2)) * C2, P2.css("margin-" + (e2.isHorizontal() ? "top" : "left"), 0 !== L2 && t2.spaceBetween && t2.spaceBetween + "px").attr("data-swiper-column", $2).attr("data-swiper-row", L2);
        }
        if ("none" !== P2.css("display")) {
          if ("auto" === t2.slidesPerView) {
            var I2 = J.getComputedStyle(P2[0], null), D2 = P2[0].style.transform, O2 = P2[0].style.webkitTransform;
            if (D2 && (P2[0].style.transform = "none"), O2 && (P2[0].style.webkitTransform = "none"), t2.roundLengths)
              T2 = e2.isHorizontal() ? P2.outerWidth(true) : P2.outerHeight(true);
            else if (e2.isHorizontal()) {
              var A2 = parseFloat(I2.getPropertyValue("width")), H2 = parseFloat(I2.getPropertyValue("padding-left")), N2 = parseFloat(I2.getPropertyValue("padding-right")), G2 = parseFloat(I2.getPropertyValue("margin-left")), B2 = parseFloat(I2.getPropertyValue("margin-right")), X2 = I2.getPropertyValue("box-sizing");
              T2 = X2 && "border-box" === X2 ? A2 + G2 + B2 : A2 + H2 + N2 + G2 + B2;
            } else {
              var Y2 = parseFloat(I2.getPropertyValue("height")), V2 = parseFloat(I2.getPropertyValue("padding-top")), F2 = parseFloat(I2.getPropertyValue("padding-bottom")), R2 = parseFloat(I2.getPropertyValue("margin-top")), q2 = parseFloat(I2.getPropertyValue("margin-bottom")), W2 = I2.getPropertyValue("box-sizing");
              T2 = W2 && "border-box" === W2 ? Y2 + R2 + q2 : Y2 + V2 + F2 + R2 + q2;
            }
            D2 && (P2[0].style.transform = D2), O2 && (P2[0].style.webkitTransform = O2), t2.roundLengths && (T2 = Math.floor(T2));
          } else
            T2 = (i2 - (t2.slidesPerView - 1) * g2) / t2.slidesPerView, t2.roundLengths && (T2 = Math.floor(T2)), l2[z2] && (e2.isHorizontal() ? l2[z2].style.width = T2 + "px" : l2[z2].style.height = T2 + "px");
          l2[z2] && (l2[z2].swiperSlideSize = T2), u2.push(T2), t2.centeredSlides ? (b2 = b2 + T2 / 2 + w2 / 2 + g2, 0 === w2 && 0 !== z2 && (b2 = b2 - i2 / 2 - g2), 0 === z2 && (b2 = b2 - i2 / 2 - g2), Math.abs(b2) < 1e-3 && (b2 = 0), t2.roundLengths && (b2 = Math.floor(b2)), y2 % t2.slidesPerGroup == 0 && p2.push(b2), c2.push(b2)) : (t2.roundLengths && (b2 = Math.floor(b2)), y2 % t2.slidesPerGroup == 0 && p2.push(b2), c2.push(b2), b2 = b2 + T2 + g2), e2.virtualSize += T2 + g2, w2 = T2, y2 += 1;
        }
      }
      if (e2.virtualSize = Math.max(e2.virtualSize, i2) + v2, s2 && r2 && ("slide" === t2.effect || "coverflow" === t2.effect) && a2.css({ width: e2.virtualSize + t2.spaceBetween + "px" }), te.flexbox && !t2.setWrapperSize || (e2.isHorizontal() ? a2.css({ width: e2.virtualSize + t2.spaceBetween + "px" }) : a2.css({ height: e2.virtualSize + t2.spaceBetween + "px" })), 1 < t2.slidesPerColumn && (e2.virtualSize = (T2 + t2.spaceBetween) * x2, e2.virtualSize = Math.ceil(e2.virtualSize / t2.slidesPerColumn) - t2.spaceBetween, e2.isHorizontal() ? a2.css({ width: e2.virtualSize + t2.spaceBetween + "px" }) : a2.css({ height: e2.virtualSize + t2.spaceBetween + "px" }), t2.centeredSlides)) {
        E2 = [];
        for (var j2 = 0; j2 < p2.length; j2 += 1) {
          var U2 = p2[j2];
          t2.roundLengths && (U2 = Math.floor(U2)), p2[j2] < e2.virtualSize + p2[0] && E2.push(U2);
        }
        p2 = E2;
      }
      if (!t2.centeredSlides) {
        E2 = [];
        for (var K2 = 0; K2 < p2.length; K2 += 1) {
          var _2 = p2[K2];
          t2.roundLengths && (_2 = Math.floor(_2)), p2[K2] <= e2.virtualSize - i2 && E2.push(_2);
        }
        p2 = E2, 1 < Math.floor(e2.virtualSize - i2) - Math.floor(p2[p2.length - 1]) && p2.push(e2.virtualSize - i2);
      }
      if (0 === p2.length && (p2 = [0]), 0 !== t2.spaceBetween && (e2.isHorizontal() ? s2 ? l2.css({ marginLeft: g2 + "px" }) : l2.css({ marginRight: g2 + "px" }) : l2.css({ marginBottom: g2 + "px" })), t2.centerInsufficientSlides) {
        var Z2 = 0;
        if (u2.forEach(function(e3) {
          Z2 += e3 + (t2.spaceBetween ? t2.spaceBetween : 0);
        }), (Z2 -= t2.spaceBetween) < i2) {
          var Q2 = (i2 - Z2) / 2;
          p2.forEach(function(e3, t3) {
            p2[t3] = e3 - Q2;
          }), c2.forEach(function(e3, t3) {
            c2[t3] = e3 + Q2;
          });
        }
      }
      ee.extend(e2, { slides: l2, snapGrid: p2, slidesGrid: c2, slidesSizesGrid: u2 }), d2 !== o2 && e2.emit("slidesLengthChange"), p2.length !== f2 && (e2.params.watchOverflow && e2.checkOverflow(), e2.emit("snapGridLengthChange")), c2.length !== m2 && e2.emit("slidesGridLengthChange"), (t2.watchSlidesProgress || t2.watchSlidesVisibility) && e2.updateSlidesOffset();
    }
  }, updateAutoHeight: function(e2) {
    var t2, a2 = this, i2 = [], s2 = 0;
    if ("number" == typeof e2 ? a2.setTransition(e2) : true === e2 && a2.setTransition(a2.params.speed), "auto" !== a2.params.slidesPerView && 1 < a2.params.slidesPerView)
      for (t2 = 0; t2 < Math.ceil(a2.params.slidesPerView); t2 += 1) {
        var r2 = a2.activeIndex + t2;
        if (r2 > a2.slides.length)
          break;
        i2.push(a2.slides.eq(r2)[0]);
      }
    else
      i2.push(a2.slides.eq(a2.activeIndex)[0]);
    for (t2 = 0; t2 < i2.length; t2 += 1)
      if (void 0 !== i2[t2]) {
        var n2 = i2[t2].offsetHeight;
        s2 = s2 < n2 ? n2 : s2;
      }
    s2 && a2.$wrapperEl.css("height", s2 + "px");
  }, updateSlidesOffset: function() {
    for (var e2 = this.slides, t2 = 0; t2 < e2.length; t2 += 1)
      e2[t2].swiperSlideOffset = this.isHorizontal() ? e2[t2].offsetLeft : e2[t2].offsetTop;
  }, updateSlidesProgress: function(e2) {
    void 0 === e2 && (e2 = this && this.translate || 0);
    var t2 = this, a2 = t2.params, i2 = t2.slides, s2 = t2.rtlTranslate;
    if (0 !== i2.length) {
      void 0 === i2[0].swiperSlideOffset && t2.updateSlidesOffset();
      var r2 = -e2;
      s2 && (r2 = e2), i2.removeClass(a2.slideVisibleClass), t2.visibleSlidesIndexes = [], t2.visibleSlides = [];
      for (var n2 = 0; n2 < i2.length; n2 += 1) {
        var o2 = i2[n2], l2 = (r2 + (a2.centeredSlides ? t2.minTranslate() : 0) - o2.swiperSlideOffset) / (o2.swiperSlideSize + a2.spaceBetween);
        if (a2.watchSlidesVisibility) {
          var d2 = -(r2 - o2.swiperSlideOffset), p2 = d2 + t2.slidesSizesGrid[n2];
          (0 <= d2 && d2 < t2.size || 0 < p2 && p2 <= t2.size || d2 <= 0 && p2 >= t2.size) && (t2.visibleSlides.push(o2), t2.visibleSlidesIndexes.push(n2), i2.eq(n2).addClass(a2.slideVisibleClass));
        }
        o2.progress = s2 ? -l2 : l2;
      }
      t2.visibleSlides = L(t2.visibleSlides);
    }
  }, updateProgress: function(e2) {
    void 0 === e2 && (e2 = this && this.translate || 0);
    var t2 = this, a2 = t2.params, i2 = t2.maxTranslate() - t2.minTranslate(), s2 = t2.progress, r2 = t2.isBeginning, n2 = t2.isEnd, o2 = r2, l2 = n2;
    0 === i2 ? n2 = r2 = !(s2 = 0) : (r2 = (s2 = (e2 - t2.minTranslate()) / i2) <= 0, n2 = 1 <= s2), ee.extend(t2, { progress: s2, isBeginning: r2, isEnd: n2 }), (a2.watchSlidesProgress || a2.watchSlidesVisibility) && t2.updateSlidesProgress(e2), r2 && !o2 && t2.emit("reachBeginning toEdge"), n2 && !l2 && t2.emit("reachEnd toEdge"), (o2 && !r2 || l2 && !n2) && t2.emit("fromEdge"), t2.emit("progress", s2);
  }, updateSlidesClasses: function() {
    var e2, t2 = this, a2 = t2.slides, i2 = t2.params, s2 = t2.$wrapperEl, r2 = t2.activeIndex, n2 = t2.realIndex, o2 = t2.virtual && i2.virtual.enabled;
    a2.removeClass(i2.slideActiveClass + " " + i2.slideNextClass + " " + i2.slidePrevClass + " " + i2.slideDuplicateActiveClass + " " + i2.slideDuplicateNextClass + " " + i2.slideDuplicatePrevClass), (e2 = o2 ? t2.$wrapperEl.find("." + i2.slideClass + '[data-swiper-slide-index="' + r2 + '"]') : a2.eq(r2)).addClass(i2.slideActiveClass), i2.loop && (e2.hasClass(i2.slideDuplicateClass) ? s2.children("." + i2.slideClass + ":not(." + i2.slideDuplicateClass + ')[data-swiper-slide-index="' + n2 + '"]').addClass(i2.slideDuplicateActiveClass) : s2.children("." + i2.slideClass + "." + i2.slideDuplicateClass + '[data-swiper-slide-index="' + n2 + '"]').addClass(i2.slideDuplicateActiveClass));
    var l2 = e2.nextAll("." + i2.slideClass).eq(0).addClass(i2.slideNextClass);
    i2.loop && 0 === l2.length && (l2 = a2.eq(0)).addClass(i2.slideNextClass);
    var d2 = e2.prevAll("." + i2.slideClass).eq(0).addClass(i2.slidePrevClass);
    i2.loop && 0 === d2.length && (d2 = a2.eq(-1)).addClass(i2.slidePrevClass), i2.loop && (l2.hasClass(i2.slideDuplicateClass) ? s2.children("." + i2.slideClass + ":not(." + i2.slideDuplicateClass + ')[data-swiper-slide-index="' + l2.attr("data-swiper-slide-index") + '"]').addClass(i2.slideDuplicateNextClass) : s2.children("." + i2.slideClass + "." + i2.slideDuplicateClass + '[data-swiper-slide-index="' + l2.attr("data-swiper-slide-index") + '"]').addClass(i2.slideDuplicateNextClass), d2.hasClass(i2.slideDuplicateClass) ? s2.children("." + i2.slideClass + ":not(." + i2.slideDuplicateClass + ')[data-swiper-slide-index="' + d2.attr("data-swiper-slide-index") + '"]').addClass(i2.slideDuplicatePrevClass) : s2.children("." + i2.slideClass + "." + i2.slideDuplicateClass + '[data-swiper-slide-index="' + d2.attr("data-swiper-slide-index") + '"]').addClass(i2.slideDuplicatePrevClass));
  }, updateActiveIndex: function(e2) {
    var t2, a2 = this, i2 = a2.rtlTranslate ? a2.translate : -a2.translate, s2 = a2.slidesGrid, r2 = a2.snapGrid, n2 = a2.params, o2 = a2.activeIndex, l2 = a2.realIndex, d2 = a2.snapIndex, p2 = e2;
    if (void 0 === p2) {
      for (var c2 = 0; c2 < s2.length; c2 += 1)
        void 0 !== s2[c2 + 1] ? i2 >= s2[c2] && i2 < s2[c2 + 1] - (s2[c2 + 1] - s2[c2]) / 2 ? p2 = c2 : i2 >= s2[c2] && i2 < s2[c2 + 1] && (p2 = c2 + 1) : i2 >= s2[c2] && (p2 = c2);
      n2.normalizeSlideIndex && (p2 < 0 || void 0 === p2) && (p2 = 0);
    }
    if ((t2 = 0 <= r2.indexOf(i2) ? r2.indexOf(i2) : Math.floor(p2 / n2.slidesPerGroup)) >= r2.length && (t2 = r2.length - 1), p2 !== o2) {
      var u2 = parseInt(a2.slides.eq(p2).attr("data-swiper-slide-index") || p2, 10);
      ee.extend(a2, { snapIndex: t2, realIndex: u2, previousIndex: o2, activeIndex: p2 }), a2.emit("activeIndexChange"), a2.emit("snapIndexChange"), l2 !== u2 && a2.emit("realIndexChange"), a2.emit("slideChange");
    } else
      t2 !== d2 && (a2.snapIndex = t2, a2.emit("snapIndexChange"));
  }, updateClickedSlide: function(e2) {
    var t2 = this, a2 = t2.params, i2 = L(e2.target).closest("." + a2.slideClass)[0], s2 = false;
    if (i2)
      for (var r2 = 0; r2 < t2.slides.length; r2 += 1)
        t2.slides[r2] === i2 && (s2 = true);
    if (!i2 || !s2)
      return t2.clickedSlide = void 0, void (t2.clickedIndex = void 0);
    t2.clickedSlide = i2, t2.virtual && t2.params.virtual.enabled ? t2.clickedIndex = parseInt(L(i2).attr("data-swiper-slide-index"), 10) : t2.clickedIndex = L(i2).index(), a2.slideToClickedSlide && void 0 !== t2.clickedIndex && t2.clickedIndex !== t2.activeIndex && t2.slideToClickedSlide();
  } };
  var p = { getTranslate: function(e2) {
    void 0 === e2 && (e2 = this.isHorizontal() ? "x" : "y");
    var t2 = this.params, a2 = this.rtlTranslate, i2 = this.translate, s2 = this.$wrapperEl;
    if (t2.virtualTranslate)
      return a2 ? -i2 : i2;
    var r2 = ee.getTranslate(s2[0], e2);
    return a2 && (r2 = -r2), r2 || 0;
  }, setTranslate: function(e2, t2) {
    var a2 = this, i2 = a2.rtlTranslate, s2 = a2.params, r2 = a2.$wrapperEl, n2 = a2.progress, o2 = 0, l2 = 0;
    a2.isHorizontal() ? o2 = i2 ? -e2 : e2 : l2 = e2, s2.roundLengths && (o2 = Math.floor(o2), l2 = Math.floor(l2)), s2.virtualTranslate || (te.transforms3d ? r2.transform("translate3d(" + o2 + "px, " + l2 + "px, 0px)") : r2.transform("translate(" + o2 + "px, " + l2 + "px)")), a2.previousTranslate = a2.translate, a2.translate = a2.isHorizontal() ? o2 : l2;
    var d2 = a2.maxTranslate() - a2.minTranslate();
    (0 === d2 ? 0 : (e2 - a2.minTranslate()) / d2) !== n2 && a2.updateProgress(e2), a2.emit("setTranslate", a2.translate, t2);
  }, minTranslate: function() {
    return -this.snapGrid[0];
  }, maxTranslate: function() {
    return -this.snapGrid[this.snapGrid.length - 1];
  } };
  var c = { setTransition: function(e2, t2) {
    this.$wrapperEl.transition(e2), this.emit("setTransition", e2, t2);
  }, transitionStart: function(e2, t2) {
    void 0 === e2 && (e2 = true);
    var a2 = this, i2 = a2.activeIndex, s2 = a2.params, r2 = a2.previousIndex;
    s2.autoHeight && a2.updateAutoHeight();
    var n2 = t2;
    if (n2 || (n2 = r2 < i2 ? "next" : i2 < r2 ? "prev" : "reset"), a2.emit("transitionStart"), e2 && i2 !== r2) {
      if ("reset" === n2)
        return void a2.emit("slideResetTransitionStart");
      a2.emit("slideChangeTransitionStart"), "next" === n2 ? a2.emit("slideNextTransitionStart") : a2.emit("slidePrevTransitionStart");
    }
  }, transitionEnd: function(e2, t2) {
    void 0 === e2 && (e2 = true);
    var a2 = this, i2 = a2.activeIndex, s2 = a2.previousIndex;
    a2.animating = false, a2.setTransition(0);
    var r2 = t2;
    if (r2 || (r2 = s2 < i2 ? "next" : i2 < s2 ? "prev" : "reset"), a2.emit("transitionEnd"), e2 && i2 !== s2) {
      if ("reset" === r2)
        return void a2.emit("slideResetTransitionEnd");
      a2.emit("slideChangeTransitionEnd"), "next" === r2 ? a2.emit("slideNextTransitionEnd") : a2.emit("slidePrevTransitionEnd");
    }
  } };
  var u = { slideTo: function(e2, t2, a2, i2) {
    void 0 === e2 && (e2 = 0), void 0 === t2 && (t2 = this.params.speed), void 0 === a2 && (a2 = true);
    var s2 = this, r2 = e2;
    r2 < 0 && (r2 = 0);
    var n2 = s2.params, o2 = s2.snapGrid, l2 = s2.slidesGrid, d2 = s2.previousIndex, p2 = s2.activeIndex, c2 = s2.rtlTranslate;
    if (s2.animating && n2.preventInteractionOnTransition)
      return false;
    var u2 = Math.floor(r2 / n2.slidesPerGroup);
    u2 >= o2.length && (u2 = o2.length - 1), (p2 || n2.initialSlide || 0) === (d2 || 0) && a2 && s2.emit("beforeSlideChangeStart");
    var h2, v2 = -o2[u2];
    if (s2.updateProgress(v2), n2.normalizeSlideIndex)
      for (var f2 = 0; f2 < l2.length; f2 += 1)
        -Math.floor(100 * v2) >= Math.floor(100 * l2[f2]) && (r2 = f2);
    if (s2.initialized && r2 !== p2) {
      if (!s2.allowSlideNext && v2 < s2.translate && v2 < s2.minTranslate())
        return false;
      if (!s2.allowSlidePrev && v2 > s2.translate && v2 > s2.maxTranslate() && (p2 || 0) !== r2)
        return false;
    }
    return h2 = p2 < r2 ? "next" : r2 < p2 ? "prev" : "reset", c2 && -v2 === s2.translate || !c2 && v2 === s2.translate ? (s2.updateActiveIndex(r2), n2.autoHeight && s2.updateAutoHeight(), s2.updateSlidesClasses(), "slide" !== n2.effect && s2.setTranslate(v2), "reset" !== h2 && (s2.transitionStart(a2, h2), s2.transitionEnd(a2, h2)), false) : (0 !== t2 && te.transition ? (s2.setTransition(t2), s2.setTranslate(v2), s2.updateActiveIndex(r2), s2.updateSlidesClasses(), s2.emit("beforeTransitionStart", t2, i2), s2.transitionStart(a2, h2), s2.animating || (s2.animating = true, s2.onSlideToWrapperTransitionEnd || (s2.onSlideToWrapperTransitionEnd = function(e3) {
      s2 && !s2.destroyed && e3.target === this && (s2.$wrapperEl[0].removeEventListener("transitionend", s2.onSlideToWrapperTransitionEnd), s2.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s2.onSlideToWrapperTransitionEnd), s2.onSlideToWrapperTransitionEnd = null, delete s2.onSlideToWrapperTransitionEnd, s2.transitionEnd(a2, h2));
    }), s2.$wrapperEl[0].addEventListener("transitionend", s2.onSlideToWrapperTransitionEnd), s2.$wrapperEl[0].addEventListener("webkitTransitionEnd", s2.onSlideToWrapperTransitionEnd))) : (s2.setTransition(0), s2.setTranslate(v2), s2.updateActiveIndex(r2), s2.updateSlidesClasses(), s2.emit("beforeTransitionStart", t2, i2), s2.transitionStart(a2, h2), s2.transitionEnd(a2, h2)), true);
  }, slideToLoop: function(e2, t2, a2, i2) {
    void 0 === e2 && (e2 = 0), void 0 === t2 && (t2 = this.params.speed), void 0 === a2 && (a2 = true);
    var s2 = e2;
    return this.params.loop && (s2 += this.loopedSlides), this.slideTo(s2, t2, a2, i2);
  }, slideNext: function(e2, t2, a2) {
    void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true);
    var i2 = this, s2 = i2.params, r2 = i2.animating;
    return s2.loop ? !r2 && (i2.loopFix(), i2._clientLeft = i2.$wrapperEl[0].clientLeft, i2.slideTo(i2.activeIndex + s2.slidesPerGroup, e2, t2, a2)) : i2.slideTo(i2.activeIndex + s2.slidesPerGroup, e2, t2, a2);
  }, slidePrev: function(e2, t2, a2) {
    void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true);
    var i2 = this, s2 = i2.params, r2 = i2.animating, n2 = i2.snapGrid, o2 = i2.slidesGrid, l2 = i2.rtlTranslate;
    if (s2.loop) {
      if (r2)
        return false;
      i2.loopFix(), i2._clientLeft = i2.$wrapperEl[0].clientLeft;
    }
    function d2(e3) {
      return e3 < 0 ? -Math.floor(Math.abs(e3)) : Math.floor(e3);
    }
    var p2, c2 = d2(l2 ? i2.translate : -i2.translate), u2 = n2.map(function(e3) {
      return d2(e3);
    }), h2 = (o2.map(function(e3) {
      return d2(e3);
    }), n2[u2.indexOf(c2)], n2[u2.indexOf(c2) - 1]);
    return void 0 !== h2 && (p2 = o2.indexOf(h2)) < 0 && (p2 = i2.activeIndex - 1), i2.slideTo(p2, e2, t2, a2);
  }, slideReset: function(e2, t2, a2) {
    return void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true), this.slideTo(this.activeIndex, e2, t2, a2);
  }, slideToClosest: function(e2, t2, a2) {
    void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true);
    var i2 = this, s2 = i2.activeIndex, r2 = Math.floor(s2 / i2.params.slidesPerGroup);
    if (r2 < i2.snapGrid.length - 1) {
      var n2 = i2.rtlTranslate ? i2.translate : -i2.translate, o2 = i2.snapGrid[r2];
      (i2.snapGrid[r2 + 1] - o2) / 2 < n2 - o2 && (s2 = i2.params.slidesPerGroup);
    }
    return i2.slideTo(s2, e2, t2, a2);
  }, slideToClickedSlide: function() {
    var e2, t2 = this, a2 = t2.params, i2 = t2.$wrapperEl, s2 = "auto" === a2.slidesPerView ? t2.slidesPerViewDynamic() : a2.slidesPerView, r2 = t2.clickedIndex;
    if (a2.loop) {
      if (t2.animating)
        return;
      e2 = parseInt(L(t2.clickedSlide).attr("data-swiper-slide-index"), 10), a2.centeredSlides ? r2 < t2.loopedSlides - s2 / 2 || r2 > t2.slides.length - t2.loopedSlides + s2 / 2 ? (t2.loopFix(), r2 = i2.children("." + a2.slideClass + '[data-swiper-slide-index="' + e2 + '"]:not(.' + a2.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
        t2.slideTo(r2);
      })) : t2.slideTo(r2) : r2 > t2.slides.length - s2 ? (t2.loopFix(), r2 = i2.children("." + a2.slideClass + '[data-swiper-slide-index="' + e2 + '"]:not(.' + a2.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
        t2.slideTo(r2);
      })) : t2.slideTo(r2);
    } else
      t2.slideTo(r2);
  } };
  var h = { loopCreate: function() {
    var i2 = this, e2 = i2.params, t2 = i2.$wrapperEl;
    t2.children("." + e2.slideClass + "." + e2.slideDuplicateClass).remove();
    var s2 = t2.children("." + e2.slideClass);
    if (e2.loopFillGroupWithBlank) {
      var a2 = e2.slidesPerGroup - s2.length % e2.slidesPerGroup;
      if (a2 !== e2.slidesPerGroup) {
        for (var r2 = 0; r2 < a2; r2 += 1) {
          var n2 = L(f.createElement("div")).addClass(e2.slideClass + " " + e2.slideBlankClass);
          t2.append(n2);
        }
        s2 = t2.children("." + e2.slideClass);
      }
    }
    "auto" !== e2.slidesPerView || e2.loopedSlides || (e2.loopedSlides = s2.length), i2.loopedSlides = parseInt(e2.loopedSlides || e2.slidesPerView, 10), i2.loopedSlides += e2.loopAdditionalSlides, i2.loopedSlides > s2.length && (i2.loopedSlides = s2.length);
    var o2 = [], l2 = [];
    s2.each(function(e3, t3) {
      var a3 = L(t3);
      e3 < i2.loopedSlides && l2.push(t3), e3 < s2.length && e3 >= s2.length - i2.loopedSlides && o2.push(t3), a3.attr("data-swiper-slide-index", e3);
    });
    for (var d2 = 0; d2 < l2.length; d2 += 1)
      t2.append(L(l2[d2].cloneNode(true)).addClass(e2.slideDuplicateClass));
    for (var p2 = o2.length - 1; 0 <= p2; p2 -= 1)
      t2.prepend(L(o2[p2].cloneNode(true)).addClass(e2.slideDuplicateClass));
  }, loopFix: function() {
    var e2, t2 = this, a2 = t2.params, i2 = t2.activeIndex, s2 = t2.slides, r2 = t2.loopedSlides, n2 = t2.allowSlidePrev, o2 = t2.allowSlideNext, l2 = t2.snapGrid, d2 = t2.rtlTranslate;
    t2.allowSlidePrev = true, t2.allowSlideNext = true;
    var p2 = -l2[i2] - t2.getTranslate();
    i2 < r2 ? (e2 = s2.length - 3 * r2 + i2, e2 += r2, t2.slideTo(e2, 0, false, true) && 0 !== p2 && t2.setTranslate((d2 ? -t2.translate : t2.translate) - p2)) : ("auto" === a2.slidesPerView && 2 * r2 <= i2 || i2 >= s2.length - r2) && (e2 = -s2.length + i2 + r2, e2 += r2, t2.slideTo(e2, 0, false, true) && 0 !== p2 && t2.setTranslate((d2 ? -t2.translate : t2.translate) - p2));
    t2.allowSlidePrev = n2, t2.allowSlideNext = o2;
  }, loopDestroy: function() {
    var e2 = this.$wrapperEl, t2 = this.params, a2 = this.slides;
    e2.children("." + t2.slideClass + "." + t2.slideDuplicateClass + ",." + t2.slideClass + "." + t2.slideBlankClass).remove(), a2.removeAttr("data-swiper-slide-index");
  } };
  var v = { setGrabCursor: function(e2) {
    if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
      var t2 = this.el;
      t2.style.cursor = "move", t2.style.cursor = e2 ? "-webkit-grabbing" : "-webkit-grab", t2.style.cursor = e2 ? "-moz-grabbin" : "-moz-grab", t2.style.cursor = e2 ? "grabbing" : "grab";
    }
  }, unsetGrabCursor: function() {
    te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
  } };
  var m = { appendSlide: function(e2) {
    var t2 = this, a2 = t2.$wrapperEl, i2 = t2.params;
    if (i2.loop && t2.loopDestroy(), "object" == typeof e2 && "length" in e2)
      for (var s2 = 0; s2 < e2.length; s2 += 1)
        e2[s2] && a2.append(e2[s2]);
    else
      a2.append(e2);
    i2.loop && t2.loopCreate(), i2.observer && te.observer || t2.update();
  }, prependSlide: function(e2) {
    var t2 = this, a2 = t2.params, i2 = t2.$wrapperEl, s2 = t2.activeIndex;
    a2.loop && t2.loopDestroy();
    var r2 = s2 + 1;
    if ("object" == typeof e2 && "length" in e2) {
      for (var n2 = 0; n2 < e2.length; n2 += 1)
        e2[n2] && i2.prepend(e2[n2]);
      r2 = s2 + e2.length;
    } else
      i2.prepend(e2);
    a2.loop && t2.loopCreate(), a2.observer && te.observer || t2.update(), t2.slideTo(r2, 0, false);
  }, addSlide: function(e2, t2) {
    var a2 = this, i2 = a2.$wrapperEl, s2 = a2.params, r2 = a2.activeIndex;
    s2.loop && (r2 -= a2.loopedSlides, a2.loopDestroy(), a2.slides = i2.children("." + s2.slideClass));
    var n2 = a2.slides.length;
    if (e2 <= 0)
      a2.prependSlide(t2);
    else if (n2 <= e2)
      a2.appendSlide(t2);
    else {
      for (var o2 = e2 < r2 ? r2 + 1 : r2, l2 = [], d2 = n2 - 1; e2 <= d2; d2 -= 1) {
        var p2 = a2.slides.eq(d2);
        p2.remove(), l2.unshift(p2);
      }
      if ("object" == typeof t2 && "length" in t2) {
        for (var c2 = 0; c2 < t2.length; c2 += 1)
          t2[c2] && i2.append(t2[c2]);
        o2 = e2 < r2 ? r2 + t2.length : r2;
      } else
        i2.append(t2);
      for (var u2 = 0; u2 < l2.length; u2 += 1)
        i2.append(l2[u2]);
      s2.loop && a2.loopCreate(), s2.observer && te.observer || a2.update(), s2.loop ? a2.slideTo(o2 + a2.loopedSlides, 0, false) : a2.slideTo(o2, 0, false);
    }
  }, removeSlide: function(e2) {
    var t2 = this, a2 = t2.params, i2 = t2.$wrapperEl, s2 = t2.activeIndex;
    a2.loop && (s2 -= t2.loopedSlides, t2.loopDestroy(), t2.slides = i2.children("." + a2.slideClass));
    var r2, n2 = s2;
    if ("object" == typeof e2 && "length" in e2) {
      for (var o2 = 0; o2 < e2.length; o2 += 1)
        r2 = e2[o2], t2.slides[r2] && t2.slides.eq(r2).remove(), r2 < n2 && (n2 -= 1);
      n2 = Math.max(n2, 0);
    } else
      r2 = e2, t2.slides[r2] && t2.slides.eq(r2).remove(), r2 < n2 && (n2 -= 1), n2 = Math.max(n2, 0);
    a2.loop && t2.loopCreate(), a2.observer && te.observer || t2.update(), a2.loop ? t2.slideTo(n2 + t2.loopedSlides, 0, false) : t2.slideTo(n2, 0, false);
  }, removeAllSlides: function() {
    for (var e2 = [], t2 = 0; t2 < this.slides.length; t2 += 1)
      e2.push(t2);
    this.removeSlide(e2);
  } }, g = function() {
    var e2 = J.navigator.userAgent, t2 = { ios: false, android: false, androidChrome: false, desktop: false, windows: false, iphone: false, ipod: false, ipad: false, cordova: J.cordova || J.phonegap, phonegap: J.cordova || J.phonegap }, a2 = e2.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), i2 = e2.match(/(Android);?[\s\/]+([\d.]+)?/), s2 = e2.match(/(iPad).*OS\s([\d_]+)/), r2 = e2.match(/(iPod)(.*OS\s([\d_]+))?/), n2 = !s2 && e2.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    if (a2 && (t2.os = "windows", t2.osVersion = a2[2], t2.windows = true), i2 && !a2 && (t2.os = "android", t2.osVersion = i2[2], t2.android = true, t2.androidChrome = 0 <= e2.toLowerCase().indexOf("chrome")), (s2 || n2 || r2) && (t2.os = "ios", t2.ios = true), n2 && !r2 && (t2.osVersion = n2[2].replace(/_/g, "."), t2.iphone = true), s2 && (t2.osVersion = s2[2].replace(/_/g, "."), t2.ipad = true), r2 && (t2.osVersion = r2[3] ? r2[3].replace(/_/g, ".") : null, t2.iphone = true), t2.ios && t2.osVersion && 0 <= e2.indexOf("Version/") && "10" === t2.osVersion.split(".")[0] && (t2.osVersion = e2.toLowerCase().split("version/")[1].split(" ")[0]), t2.desktop = !(t2.os || t2.android || t2.webView), t2.webView = (n2 || s2 || r2) && e2.match(/.*AppleWebKit(?!.*Safari)/i), t2.os && "ios" === t2.os) {
      var o2 = t2.osVersion.split("."), l2 = f.querySelector('meta[name="viewport"]');
      t2.minimalUi = !t2.webView && (r2 || n2) && (1 * o2[0] == 7 ? 1 <= 1 * o2[1] : 7 < 1 * o2[0]) && l2 && 0 <= l2.getAttribute("content").indexOf("minimal-ui");
    }
    return t2.pixelRatio = J.devicePixelRatio || 1, t2;
  }();
  function b() {
    var e2 = this, t2 = e2.params, a2 = e2.el;
    if (!a2 || 0 !== a2.offsetWidth) {
      t2.breakpoints && e2.setBreakpoint();
      var i2 = e2.allowSlideNext, s2 = e2.allowSlidePrev, r2 = e2.snapGrid;
      if (e2.allowSlideNext = true, e2.allowSlidePrev = true, e2.updateSize(), e2.updateSlides(), t2.freeMode) {
        var n2 = Math.min(Math.max(e2.translate, e2.maxTranslate()), e2.minTranslate());
        e2.setTranslate(n2), e2.updateActiveIndex(), e2.updateSlidesClasses(), t2.autoHeight && e2.updateAutoHeight();
      } else
        e2.updateSlidesClasses(), ("auto" === t2.slidesPerView || 1 < t2.slidesPerView) && e2.isEnd && !e2.params.centeredSlides ? e2.slideTo(e2.slides.length - 1, 0, false, true) : e2.slideTo(e2.activeIndex, 0, false, true);
      e2.allowSlidePrev = s2, e2.allowSlideNext = i2, e2.params.watchOverflow && r2 !== e2.snapGrid && e2.checkOverflow();
    }
  }
  var w = { init: true, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventInteractionOnTransition: false, edgeSwipeDetection: false, edgeSwipeThreshold: 20, freeMode: false, freeModeMomentum: true, freeModeMomentumRatio: 1, freeModeMomentumBounce: true, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: false, freeModeMinimumVelocity: 0.02, autoHeight: false, setWrapperSize: false, virtualTranslate: false, effect: "slide", breakpoints: void 0, breakpointsInverse: false, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: true, centerInsufficientSlides: false, watchOverflow: false, roundLengths: false, touchRatio: 1, touchAngle: 45, simulateTouch: true, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, allowTouchMove: true, threshold: 0, touchMoveStopPropagation: true, touchStartPreventDefault: true, touchStartForcePreventDefault: false, touchReleaseOnEdges: false, uniqueNavElements: true, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, watchSlidesVisibility: false, grabCursor: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, preloadImages: true, updateOnImagesReady: true, loop: false, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: false, allowSlidePrev: true, allowSlideNext: true, swipeHandler: null, noSwiping: true, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: true, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: true }, y = { update: d, translate: p, transition: c, slide: u, loop: h, grabCursor: v, manipulation: m, events: { attachEvents: function() {
    var e2 = this, t2 = e2.params, a2 = e2.touchEvents, i2 = e2.el, s2 = e2.wrapperEl;
    e2.onTouchStart = function(e3) {
      var t3 = this, a3 = t3.touchEventsData, i3 = t3.params, s3 = t3.touches;
      if (!t3.animating || !i3.preventInteractionOnTransition) {
        var r3 = e3;
        if (r3.originalEvent && (r3 = r3.originalEvent), a3.isTouchEvent = "touchstart" === r3.type, (a3.isTouchEvent || !("which" in r3) || 3 !== r3.which) && !(!a3.isTouchEvent && "button" in r3 && 0 < r3.button || a3.isTouched && a3.isMoved)) {
          if (i3.noSwiping && L(r3.target).closest(i3.noSwipingSelector ? i3.noSwipingSelector : "." + i3.noSwipingClass)[0])
            t3.allowClick = true;
          else if (!i3.swipeHandler || L(r3).closest(i3.swipeHandler)[0]) {
            s3.currentX = "touchstart" === r3.type ? r3.targetTouches[0].pageX : r3.pageX, s3.currentY = "touchstart" === r3.type ? r3.targetTouches[0].pageY : r3.pageY;
            var n3 = s3.currentX, o3 = s3.currentY, l2 = i3.edgeSwipeDetection || i3.iOSEdgeSwipeDetection, d2 = i3.edgeSwipeThreshold || i3.iOSEdgeSwipeThreshold;
            if (!l2 || !(n3 <= d2 || n3 >= J.screen.width - d2)) {
              if (ee.extend(a3, { isTouched: true, isMoved: false, allowTouchCallbacks: true, isScrolling: void 0, startMoving: void 0 }), s3.startX = n3, s3.startY = o3, a3.touchStartTime = ee.now(), t3.allowClick = true, t3.updateSize(), t3.swipeDirection = void 0, 0 < i3.threshold && (a3.allowThresholdMove = false), "touchstart" !== r3.type) {
                var p2 = true;
                L(r3.target).is(a3.formElements) && (p2 = false), f.activeElement && L(f.activeElement).is(a3.formElements) && f.activeElement !== r3.target && f.activeElement.blur();
                var c2 = p2 && t3.allowTouchMove && i3.touchStartPreventDefault;
                (i3.touchStartForcePreventDefault || c2) && r3.preventDefault();
              }
              t3.emit("touchStart", r3);
            }
          }
        }
      }
    }.bind(e2), e2.onTouchMove = function(e3) {
      var t3 = this, a3 = t3.touchEventsData, i3 = t3.params, s3 = t3.touches, r3 = t3.rtlTranslate, n3 = e3;
      if (n3.originalEvent && (n3 = n3.originalEvent), a3.isTouched) {
        if (!a3.isTouchEvent || "mousemove" !== n3.type) {
          var o3 = "touchmove" === n3.type ? n3.targetTouches[0].pageX : n3.pageX, l2 = "touchmove" === n3.type ? n3.targetTouches[0].pageY : n3.pageY;
          if (n3.preventedByNestedSwiper)
            return s3.startX = o3, void (s3.startY = l2);
          if (!t3.allowTouchMove)
            return t3.allowClick = false, void (a3.isTouched && (ee.extend(s3, { startX: o3, startY: l2, currentX: o3, currentY: l2 }), a3.touchStartTime = ee.now()));
          if (a3.isTouchEvent && i3.touchReleaseOnEdges && !i3.loop) {
            if (t3.isVertical()) {
              if (l2 < s3.startY && t3.translate <= t3.maxTranslate() || l2 > s3.startY && t3.translate >= t3.minTranslate())
                return a3.isTouched = false, void (a3.isMoved = false);
            } else if (o3 < s3.startX && t3.translate <= t3.maxTranslate() || o3 > s3.startX && t3.translate >= t3.minTranslate())
              return;
          }
          if (a3.isTouchEvent && f.activeElement && n3.target === f.activeElement && L(n3.target).is(a3.formElements))
            return a3.isMoved = true, void (t3.allowClick = false);
          if (a3.allowTouchCallbacks && t3.emit("touchMove", n3), !(n3.targetTouches && 1 < n3.targetTouches.length)) {
            s3.currentX = o3, s3.currentY = l2;
            var d2, p2 = s3.currentX - s3.startX, c2 = s3.currentY - s3.startY;
            if (!(t3.params.threshold && Math.sqrt(Math.pow(p2, 2) + Math.pow(c2, 2)) < t3.params.threshold)) {
              if (void 0 === a3.isScrolling && (t3.isHorizontal() && s3.currentY === s3.startY || t3.isVertical() && s3.currentX === s3.startX ? a3.isScrolling = false : 25 <= p2 * p2 + c2 * c2 && (d2 = 180 * Math.atan2(Math.abs(c2), Math.abs(p2)) / Math.PI, a3.isScrolling = t3.isHorizontal() ? d2 > i3.touchAngle : 90 - d2 > i3.touchAngle)), a3.isScrolling && t3.emit("touchMoveOpposite", n3), void 0 === a3.startMoving && (s3.currentX === s3.startX && s3.currentY === s3.startY || (a3.startMoving = true)), a3.isScrolling)
                a3.isTouched = false;
              else if (a3.startMoving) {
                t3.allowClick = false, n3.preventDefault(), i3.touchMoveStopPropagation && !i3.nested && n3.stopPropagation(), a3.isMoved || (i3.loop && t3.loopFix(), a3.startTranslate = t3.getTranslate(), t3.setTransition(0), t3.animating && t3.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a3.allowMomentumBounce = false, !i3.grabCursor || true !== t3.allowSlideNext && true !== t3.allowSlidePrev || t3.setGrabCursor(true), t3.emit("sliderFirstMove", n3)), t3.emit("sliderMove", n3), a3.isMoved = true;
                var u2 = t3.isHorizontal() ? p2 : c2;
                s3.diff = u2, u2 *= i3.touchRatio, r3 && (u2 = -u2), t3.swipeDirection = 0 < u2 ? "prev" : "next", a3.currentTranslate = u2 + a3.startTranslate;
                var h2 = true, v2 = i3.resistanceRatio;
                if (i3.touchReleaseOnEdges && (v2 = 0), 0 < u2 && a3.currentTranslate > t3.minTranslate() ? (h2 = false, i3.resistance && (a3.currentTranslate = t3.minTranslate() - 1 + Math.pow(-t3.minTranslate() + a3.startTranslate + u2, v2))) : u2 < 0 && a3.currentTranslate < t3.maxTranslate() && (h2 = false, i3.resistance && (a3.currentTranslate = t3.maxTranslate() + 1 - Math.pow(t3.maxTranslate() - a3.startTranslate - u2, v2))), h2 && (n3.preventedByNestedSwiper = true), !t3.allowSlideNext && "next" === t3.swipeDirection && a3.currentTranslate < a3.startTranslate && (a3.currentTranslate = a3.startTranslate), !t3.allowSlidePrev && "prev" === t3.swipeDirection && a3.currentTranslate > a3.startTranslate && (a3.currentTranslate = a3.startTranslate), 0 < i3.threshold) {
                  if (!(Math.abs(u2) > i3.threshold || a3.allowThresholdMove))
                    return void (a3.currentTranslate = a3.startTranslate);
                  if (!a3.allowThresholdMove)
                    return a3.allowThresholdMove = true, s3.startX = s3.currentX, s3.startY = s3.currentY, a3.currentTranslate = a3.startTranslate, void (s3.diff = t3.isHorizontal() ? s3.currentX - s3.startX : s3.currentY - s3.startY);
                }
                i3.followFinger && ((i3.freeMode || i3.watchSlidesProgress || i3.watchSlidesVisibility) && (t3.updateActiveIndex(), t3.updateSlidesClasses()), i3.freeMode && (0 === a3.velocities.length && a3.velocities.push({ position: s3[t3.isHorizontal() ? "startX" : "startY"], time: a3.touchStartTime }), a3.velocities.push({ position: s3[t3.isHorizontal() ? "currentX" : "currentY"], time: ee.now() })), t3.updateProgress(a3.currentTranslate), t3.setTranslate(a3.currentTranslate));
              }
            }
          }
        }
      } else
        a3.startMoving && a3.isScrolling && t3.emit("touchMoveOpposite", n3);
    }.bind(e2), e2.onTouchEnd = function(e3) {
      var t3 = this, a3 = t3.touchEventsData, i3 = t3.params, s3 = t3.touches, r3 = t3.rtlTranslate, n3 = t3.$wrapperEl, o3 = t3.slidesGrid, l2 = t3.snapGrid, d2 = e3;
      if (d2.originalEvent && (d2 = d2.originalEvent), a3.allowTouchCallbacks && t3.emit("touchEnd", d2), a3.allowTouchCallbacks = false, !a3.isTouched)
        return a3.isMoved && i3.grabCursor && t3.setGrabCursor(false), a3.isMoved = false, void (a3.startMoving = false);
      i3.grabCursor && a3.isMoved && a3.isTouched && (true === t3.allowSlideNext || true === t3.allowSlidePrev) && t3.setGrabCursor(false);
      var p2, c2 = ee.now(), u2 = c2 - a3.touchStartTime;
      if (t3.allowClick && (t3.updateClickedSlide(d2), t3.emit("tap", d2), u2 < 300 && 300 < c2 - a3.lastClickTime && (a3.clickTimeout && clearTimeout(a3.clickTimeout), a3.clickTimeout = ee.nextTick(function() {
        t3 && !t3.destroyed && t3.emit("click", d2);
      }, 300)), u2 < 300 && c2 - a3.lastClickTime < 300 && (a3.clickTimeout && clearTimeout(a3.clickTimeout), t3.emit("doubleTap", d2))), a3.lastClickTime = ee.now(), ee.nextTick(function() {
        t3.destroyed || (t3.allowClick = true);
      }), !a3.isTouched || !a3.isMoved || !t3.swipeDirection || 0 === s3.diff || a3.currentTranslate === a3.startTranslate)
        return a3.isTouched = false, a3.isMoved = false, void (a3.startMoving = false);
      if (a3.isTouched = false, a3.isMoved = false, a3.startMoving = false, p2 = i3.followFinger ? r3 ? t3.translate : -t3.translate : -a3.currentTranslate, i3.freeMode) {
        if (p2 < -t3.minTranslate())
          return void t3.slideTo(t3.activeIndex);
        if (p2 > -t3.maxTranslate())
          return void (t3.slides.length < l2.length ? t3.slideTo(l2.length - 1) : t3.slideTo(t3.slides.length - 1));
        if (i3.freeModeMomentum) {
          if (1 < a3.velocities.length) {
            var h2 = a3.velocities.pop(), v2 = a3.velocities.pop(), f2 = h2.position - v2.position, m2 = h2.time - v2.time;
            t3.velocity = f2 / m2, t3.velocity /= 2, Math.abs(t3.velocity) < i3.freeModeMinimumVelocity && (t3.velocity = 0), (150 < m2 || 300 < ee.now() - h2.time) && (t3.velocity = 0);
          } else
            t3.velocity = 0;
          t3.velocity *= i3.freeModeMomentumVelocityRatio, a3.velocities.length = 0;
          var g2 = 1e3 * i3.freeModeMomentumRatio, b2 = t3.velocity * g2, w2 = t3.translate + b2;
          r3 && (w2 = -w2);
          var y2, x2, T2 = false, E2 = 20 * Math.abs(t3.velocity) * i3.freeModeMomentumBounceRatio;
          if (w2 < t3.maxTranslate())
            i3.freeModeMomentumBounce ? (w2 + t3.maxTranslate() < -E2 && (w2 = t3.maxTranslate() - E2), y2 = t3.maxTranslate(), T2 = true, a3.allowMomentumBounce = true) : w2 = t3.maxTranslate(), i3.loop && i3.centeredSlides && (x2 = true);
          else if (w2 > t3.minTranslate())
            i3.freeModeMomentumBounce ? (w2 - t3.minTranslate() > E2 && (w2 = t3.minTranslate() + E2), y2 = t3.minTranslate(), T2 = true, a3.allowMomentumBounce = true) : w2 = t3.minTranslate(), i3.loop && i3.centeredSlides && (x2 = true);
          else if (i3.freeModeSticky) {
            for (var S2, C2 = 0; C2 < l2.length; C2 += 1)
              if (l2[C2] > -w2) {
                S2 = C2;
                break;
              }
            w2 = -(w2 = Math.abs(l2[S2] - w2) < Math.abs(l2[S2 - 1] - w2) || "next" === t3.swipeDirection ? l2[S2] : l2[S2 - 1]);
          }
          if (x2 && t3.once("transitionEnd", function() {
            t3.loopFix();
          }), 0 !== t3.velocity)
            g2 = r3 ? Math.abs((-w2 - t3.translate) / t3.velocity) : Math.abs((w2 - t3.translate) / t3.velocity);
          else if (i3.freeModeSticky)
            return void t3.slideToClosest();
          i3.freeModeMomentumBounce && T2 ? (t3.updateProgress(y2), t3.setTransition(g2), t3.setTranslate(w2), t3.transitionStart(true, t3.swipeDirection), t3.animating = true, n3.transitionEnd(function() {
            t3 && !t3.destroyed && a3.allowMomentumBounce && (t3.emit("momentumBounce"), t3.setTransition(i3.speed), t3.setTranslate(y2), n3.transitionEnd(function() {
              t3 && !t3.destroyed && t3.transitionEnd();
            }));
          })) : t3.velocity ? (t3.updateProgress(w2), t3.setTransition(g2), t3.setTranslate(w2), t3.transitionStart(true, t3.swipeDirection), t3.animating || (t3.animating = true, n3.transitionEnd(function() {
            t3 && !t3.destroyed && t3.transitionEnd();
          }))) : t3.updateProgress(w2), t3.updateActiveIndex(), t3.updateSlidesClasses();
        } else if (i3.freeModeSticky)
          return void t3.slideToClosest();
        (!i3.freeModeMomentum || u2 >= i3.longSwipesMs) && (t3.updateProgress(), t3.updateActiveIndex(), t3.updateSlidesClasses());
      } else {
        for (var M2 = 0, z2 = t3.slidesSizesGrid[0], P2 = 0; P2 < o3.length; P2 += i3.slidesPerGroup)
          void 0 !== o3[P2 + i3.slidesPerGroup] ? p2 >= o3[P2] && p2 < o3[P2 + i3.slidesPerGroup] && (z2 = o3[(M2 = P2) + i3.slidesPerGroup] - o3[P2]) : p2 >= o3[P2] && (M2 = P2, z2 = o3[o3.length - 1] - o3[o3.length - 2]);
        var k2 = (p2 - o3[M2]) / z2;
        if (u2 > i3.longSwipesMs) {
          if (!i3.longSwipes)
            return void t3.slideTo(t3.activeIndex);
          "next" === t3.swipeDirection && (k2 >= i3.longSwipesRatio ? t3.slideTo(M2 + i3.slidesPerGroup) : t3.slideTo(M2)), "prev" === t3.swipeDirection && (k2 > 1 - i3.longSwipesRatio ? t3.slideTo(M2 + i3.slidesPerGroup) : t3.slideTo(M2));
        } else {
          if (!i3.shortSwipes)
            return void t3.slideTo(t3.activeIndex);
          "next" === t3.swipeDirection && t3.slideTo(M2 + i3.slidesPerGroup), "prev" === t3.swipeDirection && t3.slideTo(M2);
        }
      }
    }.bind(e2), e2.onClick = function(e3) {
      this.allowClick || (this.params.preventClicks && e3.preventDefault(), this.params.preventClicksPropagation && this.animating && (e3.stopPropagation(), e3.stopImmediatePropagation()));
    }.bind(e2);
    var r2 = "container" === t2.touchEventsTarget ? i2 : s2, n2 = !!t2.nested;
    if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
      if (te.touch) {
        var o2 = !("touchstart" !== a2.start || !te.passiveListener || !t2.passiveListeners) && { passive: true, capture: false };
        r2.addEventListener(a2.start, e2.onTouchStart, o2), r2.addEventListener(a2.move, e2.onTouchMove, te.passiveListener ? { passive: false, capture: n2 } : n2), r2.addEventListener(a2.end, e2.onTouchEnd, o2);
      }
      (t2.simulateTouch && !g.ios && !g.android || t2.simulateTouch && !te.touch && g.ios) && (r2.addEventListener("mousedown", e2.onTouchStart, false), f.addEventListener("mousemove", e2.onTouchMove, n2), f.addEventListener("mouseup", e2.onTouchEnd, false));
    } else
      r2.addEventListener(a2.start, e2.onTouchStart, false), f.addEventListener(a2.move, e2.onTouchMove, n2), f.addEventListener(a2.end, e2.onTouchEnd, false);
    (t2.preventClicks || t2.preventClicksPropagation) && r2.addEventListener("click", e2.onClick, true), e2.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b, true);
  }, detachEvents: function() {
    var e2 = this, t2 = e2.params, a2 = e2.touchEvents, i2 = e2.el, s2 = e2.wrapperEl, r2 = "container" === t2.touchEventsTarget ? i2 : s2, n2 = !!t2.nested;
    if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
      if (te.touch) {
        var o2 = !("onTouchStart" !== a2.start || !te.passiveListener || !t2.passiveListeners) && { passive: true, capture: false };
        r2.removeEventListener(a2.start, e2.onTouchStart, o2), r2.removeEventListener(a2.move, e2.onTouchMove, n2), r2.removeEventListener(a2.end, e2.onTouchEnd, o2);
      }
      (t2.simulateTouch && !g.ios && !g.android || t2.simulateTouch && !te.touch && g.ios) && (r2.removeEventListener("mousedown", e2.onTouchStart, false), f.removeEventListener("mousemove", e2.onTouchMove, n2), f.removeEventListener("mouseup", e2.onTouchEnd, false));
    } else
      r2.removeEventListener(a2.start, e2.onTouchStart, false), f.removeEventListener(a2.move, e2.onTouchMove, n2), f.removeEventListener(a2.end, e2.onTouchEnd, false);
    (t2.preventClicks || t2.preventClicksPropagation) && r2.removeEventListener("click", e2.onClick, true), e2.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b);
  } }, breakpoints: { setBreakpoint: function() {
    var e2 = this, t2 = e2.activeIndex, a2 = e2.initialized, i2 = e2.loopedSlides;
    void 0 === i2 && (i2 = 0);
    var s2 = e2.params, r2 = s2.breakpoints;
    if (r2 && (!r2 || 0 !== Object.keys(r2).length)) {
      var n2 = e2.getBreakpoint(r2);
      if (n2 && e2.currentBreakpoint !== n2) {
        var o2 = n2 in r2 ? r2[n2] : void 0;
        o2 && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e3) {
          var t3 = o2[e3];
          void 0 !== t3 && (o2[e3] = "slidesPerView" !== e3 || "AUTO" !== t3 && "auto" !== t3 ? "slidesPerView" === e3 ? parseFloat(t3) : parseInt(t3, 10) : "auto");
        });
        var l2 = o2 || e2.originalParams, d2 = l2.direction && l2.direction !== s2.direction, p2 = s2.loop && (l2.slidesPerView !== s2.slidesPerView || d2);
        d2 && a2 && e2.changeDirection(), ee.extend(e2.params, l2), ee.extend(e2, { allowTouchMove: e2.params.allowTouchMove, allowSlideNext: e2.params.allowSlideNext, allowSlidePrev: e2.params.allowSlidePrev }), e2.currentBreakpoint = n2, p2 && a2 && (e2.loopDestroy(), e2.loopCreate(), e2.updateSlides(), e2.slideTo(t2 - i2 + e2.loopedSlides, 0, false)), e2.emit("breakpoint", l2);
      }
    }
  }, getBreakpoint: function(e2) {
    if (e2) {
      var t2 = false, a2 = [];
      Object.keys(e2).forEach(function(e3) {
        a2.push(e3);
      }), a2.sort(function(e3, t3) {
        return parseInt(e3, 10) - parseInt(t3, 10);
      });
      for (var i2 = 0; i2 < a2.length; i2 += 1) {
        var s2 = a2[i2];
        this.params.breakpointsInverse ? s2 <= J.innerWidth && (t2 = s2) : s2 >= J.innerWidth && !t2 && (t2 = s2);
      }
      return t2 || "max";
    }
  } }, checkOverflow: { checkOverflow: function() {
    var e2 = this, t2 = e2.isLocked;
    e2.isLocked = 1 === e2.snapGrid.length, e2.allowSlideNext = !e2.isLocked, e2.allowSlidePrev = !e2.isLocked, t2 !== e2.isLocked && e2.emit(e2.isLocked ? "lock" : "unlock"), t2 && t2 !== e2.isLocked && (e2.isEnd = false, e2.navigation.update());
  } }, classes: { addClasses: function() {
    var t2 = this.classNames, a2 = this.params, e2 = this.rtl, i2 = this.$el, s2 = [];
    s2.push("initialized"), s2.push(a2.direction), a2.freeMode && s2.push("free-mode"), te.flexbox || s2.push("no-flexbox"), a2.autoHeight && s2.push("autoheight"), e2 && s2.push("rtl"), 1 < a2.slidesPerColumn && s2.push("multirow"), g.android && s2.push("android"), g.ios && s2.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s2.push("wp8-" + a2.direction), s2.forEach(function(e3) {
      t2.push(a2.containerModifierClass + e3);
    }), i2.addClass(t2.join(" "));
  }, removeClasses: function() {
    var e2 = this.$el, t2 = this.classNames;
    e2.removeClass(t2.join(" "));
  } }, images: { loadImage: function(e2, t2, a2, i2, s2, r2) {
    var n2;
    function o2() {
      r2 && r2();
    }
    e2.complete && s2 ? o2() : t2 ? ((n2 = new J.Image()).onload = o2, n2.onerror = o2, i2 && (n2.sizes = i2), a2 && (n2.srcset = a2), t2 && (n2.src = t2)) : o2();
  }, preloadImages: function() {
    var e2 = this;
    function t2() {
      null != e2 && e2 && !e2.destroyed && (void 0 !== e2.imagesLoaded && (e2.imagesLoaded += 1), e2.imagesLoaded === e2.imagesToLoad.length && (e2.params.updateOnImagesReady && e2.update(), e2.emit("imagesReady")));
    }
    e2.imagesToLoad = e2.$el.find("img");
    for (var a2 = 0; a2 < e2.imagesToLoad.length; a2 += 1) {
      var i2 = e2.imagesToLoad[a2];
      e2.loadImage(i2, i2.currentSrc || i2.getAttribute("src"), i2.srcset || i2.getAttribute("srcset"), i2.sizes || i2.getAttribute("sizes"), true, t2);
    }
  } } }, x = {}, T = function(u2) {
    function h2() {
      for (var e3, t2, s2, a2 = [], i2 = arguments.length; i2--; )
        a2[i2] = arguments[i2];
      1 === a2.length && a2[0].constructor && a2[0].constructor === Object ? s2 = a2[0] : (t2 = (e3 = a2)[0], s2 = e3[1]), s2 || (s2 = {}), s2 = ee.extend({}, s2), t2 && !s2.el && (s2.el = t2), u2.call(this, s2), Object.keys(y).forEach(function(t3) {
        Object.keys(y[t3]).forEach(function(e4) {
          h2.prototype[e4] || (h2.prototype[e4] = y[t3][e4]);
        });
      });
      var r2 = this;
      void 0 === r2.modules && (r2.modules = {}), Object.keys(r2.modules).forEach(function(e4) {
        var t3 = r2.modules[e4];
        if (t3.params) {
          var a3 = Object.keys(t3.params)[0], i3 = t3.params[a3];
          if ("object" != typeof i3 || null === i3)
            return;
          if (!(a3 in s2 && "enabled" in i3))
            return;
          true === s2[a3] && (s2[a3] = { enabled: true }), "object" != typeof s2[a3] || "enabled" in s2[a3] || (s2[a3].enabled = true), s2[a3] || (s2[a3] = { enabled: false });
        }
      });
      var n2 = ee.extend({}, w);
      r2.useModulesParams(n2), r2.params = ee.extend({}, n2, x, s2), r2.originalParams = ee.extend({}, r2.params), r2.passedParams = ee.extend({}, s2);
      var o2 = (r2.$ = L)(r2.params.el);
      if (t2 = o2[0]) {
        if (1 < o2.length) {
          var l2 = [];
          return o2.each(function(e4, t3) {
            var a3 = ee.extend({}, s2, { el: t3 });
            l2.push(new h2(a3));
          }), l2;
        }
        t2.swiper = r2, o2.data("swiper", r2);
        var d2, p2, c2 = o2.children("." + r2.params.wrapperClass);
        return ee.extend(r2, { $el: o2, el: t2, $wrapperEl: c2, wrapperEl: c2[0], classNames: [], slides: L(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function() {
          return "horizontal" === r2.params.direction;
        }, isVertical: function() {
          return "vertical" === r2.params.direction;
        }, rtl: "rtl" === t2.dir.toLowerCase() || "rtl" === o2.css("direction"), rtlTranslate: "horizontal" === r2.params.direction && ("rtl" === t2.dir.toLowerCase() || "rtl" === o2.css("direction")), wrongRTL: "-webkit-box" === c2.css("display"), activeIndex: 0, realIndex: 0, isBeginning: true, isEnd: false, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: false, allowSlideNext: r2.params.allowSlideNext, allowSlidePrev: r2.params.allowSlidePrev, touchEvents: (d2 = ["touchstart", "touchmove", "touchend"], p2 = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? p2 = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p2 = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r2.touchEventsTouch = { start: d2[0], move: d2[1], end: d2[2] }, r2.touchEventsDesktop = { start: p2[0], move: p2[1], end: p2[2] }, te.touch || !r2.params.simulateTouch ? r2.touchEventsTouch : r2.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: ee.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: true, allowTouchMove: r2.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), r2.useModules(), r2.params.init && r2.init(), r2;
      }
    }
    u2 && (h2.__proto__ = u2);
    var e2 = { extendedDefaults: { configurable: true }, defaults: { configurable: true }, Class: { configurable: true }, $: { configurable: true } };
    return ((h2.prototype = Object.create(u2 && u2.prototype)).constructor = h2).prototype.slidesPerViewDynamic = function() {
      var e3 = this, t2 = e3.params, a2 = e3.slides, i2 = e3.slidesGrid, s2 = e3.size, r2 = e3.activeIndex, n2 = 1;
      if (t2.centeredSlides) {
        for (var o2, l2 = a2[r2].swiperSlideSize, d2 = r2 + 1; d2 < a2.length; d2 += 1)
          a2[d2] && !o2 && (n2 += 1, s2 < (l2 += a2[d2].swiperSlideSize) && (o2 = true));
        for (var p2 = r2 - 1; 0 <= p2; p2 -= 1)
          a2[p2] && !o2 && (n2 += 1, s2 < (l2 += a2[p2].swiperSlideSize) && (o2 = true));
      } else
        for (var c2 = r2 + 1; c2 < a2.length; c2 += 1)
          i2[c2] - i2[r2] < s2 && (n2 += 1);
      return n2;
    }, h2.prototype.update = function() {
      var a2 = this;
      if (a2 && !a2.destroyed) {
        var e3 = a2.snapGrid, t2 = a2.params;
        t2.breakpoints && a2.setBreakpoint(), a2.updateSize(), a2.updateSlides(), a2.updateProgress(), a2.updateSlidesClasses(), a2.params.freeMode ? (i2(), a2.params.autoHeight && a2.updateAutoHeight()) : (("auto" === a2.params.slidesPerView || 1 < a2.params.slidesPerView) && a2.isEnd && !a2.params.centeredSlides ? a2.slideTo(a2.slides.length - 1, 0, false, true) : a2.slideTo(a2.activeIndex, 0, false, true)) || i2(), t2.watchOverflow && e3 !== a2.snapGrid && a2.checkOverflow(), a2.emit("update");
      }
      function i2() {
        var e4 = a2.rtlTranslate ? -1 * a2.translate : a2.translate, t3 = Math.min(Math.max(e4, a2.maxTranslate()), a2.minTranslate());
        a2.setTranslate(t3), a2.updateActiveIndex(), a2.updateSlidesClasses();
      }
    }, h2.prototype.changeDirection = function(a2, e3) {
      void 0 === e3 && (e3 = true);
      var t2 = this, i2 = t2.params.direction;
      return a2 || (a2 = "horizontal" === i2 ? "vertical" : "horizontal"), a2 === i2 || "horizontal" !== a2 && "vertical" !== a2 || ("vertical" === i2 && (t2.$el.removeClass(t2.params.containerModifierClass + "vertical wp8-vertical").addClass("" + t2.params.containerModifierClass + a2), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t2.$el.addClass(t2.params.containerModifierClass + "wp8-" + a2)), "horizontal" === i2 && (t2.$el.removeClass(t2.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + t2.params.containerModifierClass + a2), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t2.$el.addClass(t2.params.containerModifierClass + "wp8-" + a2)), t2.params.direction = a2, t2.slides.each(function(e4, t3) {
        "vertical" === a2 ? t3.style.width = "" : t3.style.height = "";
      }), t2.emit("changeDirection"), e3 && t2.update()), t2;
    }, h2.prototype.init = function() {
      var e3 = this;
      e3.initialized || (e3.emit("beforeInit"), e3.params.breakpoints && e3.setBreakpoint(), e3.addClasses(), e3.params.loop && e3.loopCreate(), e3.updateSize(), e3.updateSlides(), e3.params.watchOverflow && e3.checkOverflow(), e3.params.grabCursor && e3.setGrabCursor(), e3.params.preloadImages && e3.preloadImages(), e3.params.loop ? e3.slideTo(e3.params.initialSlide + e3.loopedSlides, 0, e3.params.runCallbacksOnInit) : e3.slideTo(e3.params.initialSlide, 0, e3.params.runCallbacksOnInit), e3.attachEvents(), e3.initialized = true, e3.emit("init"));
    }, h2.prototype.destroy = function(e3, t2) {
      void 0 === e3 && (e3 = true), void 0 === t2 && (t2 = true);
      var a2 = this, i2 = a2.params, s2 = a2.$el, r2 = a2.$wrapperEl, n2 = a2.slides;
      return void 0 === a2.params || a2.destroyed || (a2.emit("beforeDestroy"), a2.initialized = false, a2.detachEvents(), i2.loop && a2.loopDestroy(), t2 && (a2.removeClasses(), s2.removeAttr("style"), r2.removeAttr("style"), n2 && n2.length && n2.removeClass([i2.slideVisibleClass, i2.slideActiveClass, i2.slideNextClass, i2.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a2.emit("destroy"), Object.keys(a2.eventsListeners).forEach(function(e4) {
        a2.off(e4);
      }), false !== e3 && (a2.$el[0].swiper = null, a2.$el.data("swiper", null), ee.deleteProps(a2)), a2.destroyed = true), null;
    }, h2.extendDefaults = function(e3) {
      ee.extend(x, e3);
    }, e2.extendedDefaults.get = function() {
      return x;
    }, e2.defaults.get = function() {
      return w;
    }, e2.Class.get = function() {
      return u2;
    }, e2.$.get = function() {
      return L;
    }, Object.defineProperties(h2, e2), h2;
  }(n), E = { name: "device", proto: { device: g }, static: { device: g } }, S = { name: "support", proto: { support: te }, static: { support: te } }, C = { name: "browser", proto: { browser: I }, static: { browser: I } }, M = { name: "resize", create: function() {
    var e2 = this;
    ee.extend(e2, { resize: { resizeHandler: function() {
      e2 && !e2.destroyed && e2.initialized && (e2.emit("beforeResize"), e2.emit("resize"));
    }, orientationChangeHandler: function() {
      e2 && !e2.destroyed && e2.initialized && e2.emit("orientationchange");
    } } });
  }, on: { init: function() {
    J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler);
  }, destroy: function() {
    J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
  } } }, z = { func: J.MutationObserver || J.WebkitMutationObserver, attach: function(e2, t2) {
    void 0 === t2 && (t2 = {});
    var a2 = this, i2 = new z.func(function(e3) {
      if (1 !== e3.length) {
        var t3 = function() {
          a2.emit("observerUpdate", e3[0]);
        };
        J.requestAnimationFrame ? J.requestAnimationFrame(t3) : J.setTimeout(t3, 0);
      } else
        a2.emit("observerUpdate", e3[0]);
    });
    i2.observe(e2, { attributes: void 0 === t2.attributes || t2.attributes, childList: void 0 === t2.childList || t2.childList, characterData: void 0 === t2.characterData || t2.characterData }), a2.observer.observers.push(i2);
  }, init: function() {
    var e2 = this;
    if (te.observer && e2.params.observer) {
      if (e2.params.observeParents)
        for (var t2 = e2.$el.parents(), a2 = 0; a2 < t2.length; a2 += 1)
          e2.observer.attach(t2[a2]);
      e2.observer.attach(e2.$el[0], { childList: e2.params.observeSlideChildren }), e2.observer.attach(e2.$wrapperEl[0], { attributes: false });
    }
  }, destroy: function() {
    this.observer.observers.forEach(function(e2) {
      e2.disconnect();
    }), this.observer.observers = [];
  } }, P = { name: "observer", params: { observer: false, observeParents: false, observeSlideChildren: false }, create: function() {
    ee.extend(this, { observer: { init: z.init.bind(this), attach: z.attach.bind(this), destroy: z.destroy.bind(this), observers: [] } });
  }, on: { init: function() {
    this.observer.init();
  }, destroy: function() {
    this.observer.destroy();
  } } }, k = { update: function(e2) {
    var t2 = this, a2 = t2.params, i2 = a2.slidesPerView, s2 = a2.slidesPerGroup, r2 = a2.centeredSlides, n2 = t2.params.virtual, o2 = n2.addSlidesBefore, l2 = n2.addSlidesAfter, d2 = t2.virtual, p2 = d2.from, c2 = d2.to, u2 = d2.slides, h2 = d2.slidesGrid, v2 = d2.renderSlide, f2 = d2.offset;
    t2.updateActiveIndex();
    var m2, g2, b2, w2 = t2.activeIndex || 0;
    m2 = t2.rtlTranslate ? "right" : t2.isHorizontal() ? "left" : "top", r2 ? (g2 = Math.floor(i2 / 2) + s2 + o2, b2 = Math.floor(i2 / 2) + s2 + l2) : (g2 = i2 + (s2 - 1) + o2, b2 = s2 + l2);
    var y2 = Math.max((w2 || 0) - b2, 0), x2 = Math.min((w2 || 0) + g2, u2.length - 1), T2 = (t2.slidesGrid[y2] || 0) - (t2.slidesGrid[0] || 0);
    function E2() {
      t2.updateSlides(), t2.updateProgress(), t2.updateSlidesClasses(), t2.lazy && t2.params.lazy.enabled && t2.lazy.load();
    }
    if (ee.extend(t2.virtual, { from: y2, to: x2, offset: T2, slidesGrid: t2.slidesGrid }), p2 === y2 && c2 === x2 && !e2)
      return t2.slidesGrid !== h2 && T2 !== f2 && t2.slides.css(m2, T2 + "px"), void t2.updateProgress();
    if (t2.params.virtual.renderExternal)
      return t2.params.virtual.renderExternal.call(t2, { offset: T2, from: y2, to: x2, slides: function() {
        for (var e3 = [], t3 = y2; t3 <= x2; t3 += 1)
          e3.push(u2[t3]);
        return e3;
      }() }), void E2();
    var S2 = [], C2 = [];
    if (e2)
      t2.$wrapperEl.find("." + t2.params.slideClass).remove();
    else
      for (var M2 = p2; M2 <= c2; M2 += 1)
        (M2 < y2 || x2 < M2) && t2.$wrapperEl.find("." + t2.params.slideClass + '[data-swiper-slide-index="' + M2 + '"]').remove();
    for (var z2 = 0; z2 < u2.length; z2 += 1)
      y2 <= z2 && z2 <= x2 && (void 0 === c2 || e2 ? C2.push(z2) : (c2 < z2 && C2.push(z2), z2 < p2 && S2.push(z2)));
    C2.forEach(function(e3) {
      t2.$wrapperEl.append(v2(u2[e3], e3));
    }), S2.sort(function(e3, t3) {
      return t3 - e3;
    }).forEach(function(e3) {
      t2.$wrapperEl.prepend(v2(u2[e3], e3));
    }), t2.$wrapperEl.children(".swiper-slide").css(m2, T2 + "px"), E2();
  }, renderSlide: function(e2, t2) {
    var a2 = this, i2 = a2.params.virtual;
    if (i2.cache && a2.virtual.cache[t2])
      return a2.virtual.cache[t2];
    var s2 = i2.renderSlide ? L(i2.renderSlide.call(a2, e2, t2)) : L('<div class="' + a2.params.slideClass + '" data-swiper-slide-index="' + t2 + '">' + e2 + "</div>");
    return s2.attr("data-swiper-slide-index") || s2.attr("data-swiper-slide-index", t2), i2.cache && (a2.virtual.cache[t2] = s2), s2;
  }, appendSlide: function(e2) {
    if ("object" == typeof e2 && "length" in e2)
      for (var t2 = 0; t2 < e2.length; t2 += 1)
        e2[t2] && this.virtual.slides.push(e2[t2]);
    else
      this.virtual.slides.push(e2);
    this.virtual.update(true);
  }, prependSlide: function(e2) {
    var t2 = this, a2 = t2.activeIndex, i2 = a2 + 1, s2 = 1;
    if (Array.isArray(e2)) {
      for (var r2 = 0; r2 < e2.length; r2 += 1)
        e2[r2] && t2.virtual.slides.unshift(e2[r2]);
      i2 = a2 + e2.length, s2 = e2.length;
    } else
      t2.virtual.slides.unshift(e2);
    if (t2.params.virtual.cache) {
      var n2 = t2.virtual.cache, o2 = {};
      Object.keys(n2).forEach(function(e3) {
        o2[parseInt(e3, 10) + s2] = n2[e3];
      }), t2.virtual.cache = o2;
    }
    t2.virtual.update(true), t2.slideTo(i2, 0);
  }, removeSlide: function(e2) {
    var t2 = this;
    if (null != e2) {
      var a2 = t2.activeIndex;
      if (Array.isArray(e2))
        for (var i2 = e2.length - 1; 0 <= i2; i2 -= 1)
          t2.virtual.slides.splice(e2[i2], 1), t2.params.virtual.cache && delete t2.virtual.cache[e2[i2]], e2[i2] < a2 && (a2 -= 1), a2 = Math.max(a2, 0);
      else
        t2.virtual.slides.splice(e2, 1), t2.params.virtual.cache && delete t2.virtual.cache[e2], e2 < a2 && (a2 -= 1), a2 = Math.max(a2, 0);
      t2.virtual.update(true), t2.slideTo(a2, 0);
    }
  }, removeAllSlides: function() {
    var e2 = this;
    e2.virtual.slides = [], e2.params.virtual.cache && (e2.virtual.cache = {}), e2.virtual.update(true), e2.slideTo(0, 0);
  } }, $ = { name: "virtual", params: { virtual: { enabled: false, slides: [], cache: true, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } }, create: function() {
    var e2 = this;
    ee.extend(e2, { virtual: { update: k.update.bind(e2), appendSlide: k.appendSlide.bind(e2), prependSlide: k.prependSlide.bind(e2), removeSlide: k.removeSlide.bind(e2), removeAllSlides: k.removeAllSlides.bind(e2), renderSlide: k.renderSlide.bind(e2), slides: e2.params.virtual.slides, cache: {} } });
  }, on: { beforeInit: function() {
    var e2 = this;
    if (e2.params.virtual.enabled) {
      e2.classNames.push(e2.params.containerModifierClass + "virtual");
      var t2 = { watchSlidesProgress: true };
      ee.extend(e2.params, t2), ee.extend(e2.originalParams, t2), e2.params.initialSlide || e2.virtual.update();
    }
  }, setTranslate: function() {
    this.params.virtual.enabled && this.virtual.update();
  } } }, D = { handle: function(e2) {
    var t2 = this, a2 = t2.rtlTranslate, i2 = e2;
    i2.originalEvent && (i2 = i2.originalEvent);
    var s2 = i2.keyCode || i2.charCode;
    if (!t2.allowSlideNext && (t2.isHorizontal() && 39 === s2 || t2.isVertical() && 40 === s2))
      return false;
    if (!t2.allowSlidePrev && (t2.isHorizontal() && 37 === s2 || t2.isVertical() && 38 === s2))
      return false;
    if (!(i2.shiftKey || i2.altKey || i2.ctrlKey || i2.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
      if (t2.params.keyboard.onlyInViewport && (37 === s2 || 39 === s2 || 38 === s2 || 40 === s2)) {
        var r2 = false;
        if (0 < t2.$el.parents("." + t2.params.slideClass).length && 0 === t2.$el.parents("." + t2.params.slideActiveClass).length)
          return;
        var n2 = J.innerWidth, o2 = J.innerHeight, l2 = t2.$el.offset();
        a2 && (l2.left -= t2.$el[0].scrollLeft);
        for (var d2 = [[l2.left, l2.top], [l2.left + t2.width, l2.top], [l2.left, l2.top + t2.height], [l2.left + t2.width, l2.top + t2.height]], p2 = 0; p2 < d2.length; p2 += 1) {
          var c2 = d2[p2];
          0 <= c2[0] && c2[0] <= n2 && 0 <= c2[1] && c2[1] <= o2 && (r2 = true);
        }
        if (!r2)
          return;
      }
      t2.isHorizontal() ? (37 !== s2 && 39 !== s2 || (i2.preventDefault ? i2.preventDefault() : i2.returnValue = false), (39 === s2 && !a2 || 37 === s2 && a2) && t2.slideNext(), (37 === s2 && !a2 || 39 === s2 && a2) && t2.slidePrev()) : (38 !== s2 && 40 !== s2 || (i2.preventDefault ? i2.preventDefault() : i2.returnValue = false), 40 === s2 && t2.slideNext(), 38 === s2 && t2.slidePrev()), t2.emit("keyPress", s2);
    }
  }, enable: function() {
    this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = true);
  }, disable: function() {
    this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = false);
  } }, O = { name: "keyboard", params: { keyboard: { enabled: false, onlyInViewport: true } }, create: function() {
    ee.extend(this, { keyboard: { enabled: false, enable: D.enable.bind(this), disable: D.disable.bind(this), handle: D.handle.bind(this) } });
  }, on: { init: function() {
    this.params.keyboard.enabled && this.keyboard.enable();
  }, destroy: function() {
    this.keyboard.enabled && this.keyboard.disable();
  } } };
  var A = { lastScrollTime: ee.now(), event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
    var e2 = "onwheel", t2 = e2 in f;
    if (!t2) {
      var a2 = f.createElement("div");
      a2.setAttribute(e2, "return;"), t2 = "function" == typeof a2[e2];
    }
    return !t2 && f.implementation && f.implementation.hasFeature && true !== f.implementation.hasFeature("", "") && (t2 = f.implementation.hasFeature("Events.wheel", "3.0")), t2;
  }() ? "wheel" : "mousewheel", normalize: function(e2) {
    var t2 = 0, a2 = 0, i2 = 0, s2 = 0;
    return "detail" in e2 && (a2 = e2.detail), "wheelDelta" in e2 && (a2 = -e2.wheelDelta / 120), "wheelDeltaY" in e2 && (a2 = -e2.wheelDeltaY / 120), "wheelDeltaX" in e2 && (t2 = -e2.wheelDeltaX / 120), "axis" in e2 && e2.axis === e2.HORIZONTAL_AXIS && (t2 = a2, a2 = 0), i2 = 10 * t2, s2 = 10 * a2, "deltaY" in e2 && (s2 = e2.deltaY), "deltaX" in e2 && (i2 = e2.deltaX), (i2 || s2) && e2.deltaMode && (1 === e2.deltaMode ? (i2 *= 40, s2 *= 40) : (i2 *= 800, s2 *= 800)), i2 && !t2 && (t2 = i2 < 1 ? -1 : 1), s2 && !a2 && (a2 = s2 < 1 ? -1 : 1), { spinX: t2, spinY: a2, pixelX: i2, pixelY: s2 };
  }, handleMouseEnter: function() {
    this.mouseEntered = true;
  }, handleMouseLeave: function() {
    this.mouseEntered = false;
  }, handle: function(e2) {
    var t2 = e2, a2 = this, i2 = a2.params.mousewheel;
    if (!a2.mouseEntered && !i2.releaseOnEdges)
      return true;
    t2.originalEvent && (t2 = t2.originalEvent);
    var s2 = 0, r2 = a2.rtlTranslate ? -1 : 1, n2 = A.normalize(t2);
    if (i2.forceToAxis)
      if (a2.isHorizontal()) {
        if (!(Math.abs(n2.pixelX) > Math.abs(n2.pixelY)))
          return true;
        s2 = n2.pixelX * r2;
      } else {
        if (!(Math.abs(n2.pixelY) > Math.abs(n2.pixelX)))
          return true;
        s2 = n2.pixelY;
      }
    else
      s2 = Math.abs(n2.pixelX) > Math.abs(n2.pixelY) ? -n2.pixelX * r2 : -n2.pixelY;
    if (0 === s2)
      return true;
    if (i2.invert && (s2 = -s2), a2.params.freeMode) {
      a2.params.loop && a2.loopFix();
      var o2 = a2.getTranslate() + s2 * i2.sensitivity, l2 = a2.isBeginning, d2 = a2.isEnd;
      if (o2 >= a2.minTranslate() && (o2 = a2.minTranslate()), o2 <= a2.maxTranslate() && (o2 = a2.maxTranslate()), a2.setTransition(0), a2.setTranslate(o2), a2.updateProgress(), a2.updateActiveIndex(), a2.updateSlidesClasses(), (!l2 && a2.isBeginning || !d2 && a2.isEnd) && a2.updateSlidesClasses(), a2.params.freeModeSticky && (clearTimeout(a2.mousewheel.timeout), a2.mousewheel.timeout = ee.nextTick(function() {
        a2.slideToClosest();
      }, 300)), a2.emit("scroll", t2), a2.params.autoplay && a2.params.autoplayDisableOnInteraction && a2.autoplay.stop(), o2 === a2.minTranslate() || o2 === a2.maxTranslate())
        return true;
    } else {
      if (60 < ee.now() - a2.mousewheel.lastScrollTime)
        if (s2 < 0)
          if (a2.isEnd && !a2.params.loop || a2.animating) {
            if (i2.releaseOnEdges)
              return true;
          } else
            a2.slideNext(), a2.emit("scroll", t2);
        else if (a2.isBeginning && !a2.params.loop || a2.animating) {
          if (i2.releaseOnEdges)
            return true;
        } else
          a2.slidePrev(), a2.emit("scroll", t2);
      a2.mousewheel.lastScrollTime = new J.Date().getTime();
    }
    return t2.preventDefault ? t2.preventDefault() : t2.returnValue = false, false;
  }, enable: function() {
    var e2 = this;
    if (!A.event)
      return false;
    if (e2.mousewheel.enabled)
      return false;
    var t2 = e2.$el;
    return "container" !== e2.params.mousewheel.eventsTarged && (t2 = L(e2.params.mousewheel.eventsTarged)), t2.on("mouseenter", e2.mousewheel.handleMouseEnter), t2.on("mouseleave", e2.mousewheel.handleMouseLeave), t2.on(A.event, e2.mousewheel.handle), e2.mousewheel.enabled = true;
  }, disable: function() {
    var e2 = this;
    if (!A.event)
      return false;
    if (!e2.mousewheel.enabled)
      return false;
    var t2 = e2.$el;
    return "container" !== e2.params.mousewheel.eventsTarged && (t2 = L(e2.params.mousewheel.eventsTarged)), t2.off(A.event, e2.mousewheel.handle), !(e2.mousewheel.enabled = false);
  } }, H = { update: function() {
    var e2 = this, t2 = e2.params.navigation;
    if (!e2.params.loop) {
      var a2 = e2.navigation, i2 = a2.$nextEl, s2 = a2.$prevEl;
      s2 && 0 < s2.length && (e2.isBeginning ? s2.addClass(t2.disabledClass) : s2.removeClass(t2.disabledClass), s2[e2.params.watchOverflow && e2.isLocked ? "addClass" : "removeClass"](t2.lockClass)), i2 && 0 < i2.length && (e2.isEnd ? i2.addClass(t2.disabledClass) : i2.removeClass(t2.disabledClass), i2[e2.params.watchOverflow && e2.isLocked ? "addClass" : "removeClass"](t2.lockClass));
    }
  }, onPrevClick: function(e2) {
    e2.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
  }, onNextClick: function(e2) {
    e2.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
  }, init: function() {
    var e2, t2, a2 = this, i2 = a2.params.navigation;
    (i2.nextEl || i2.prevEl) && (i2.nextEl && (e2 = L(i2.nextEl), a2.params.uniqueNavElements && "string" == typeof i2.nextEl && 1 < e2.length && 1 === a2.$el.find(i2.nextEl).length && (e2 = a2.$el.find(i2.nextEl))), i2.prevEl && (t2 = L(i2.prevEl), a2.params.uniqueNavElements && "string" == typeof i2.prevEl && 1 < t2.length && 1 === a2.$el.find(i2.prevEl).length && (t2 = a2.$el.find(i2.prevEl))), e2 && 0 < e2.length && e2.on("click", a2.navigation.onNextClick), t2 && 0 < t2.length && t2.on("click", a2.navigation.onPrevClick), ee.extend(a2.navigation, { $nextEl: e2, nextEl: e2 && e2[0], $prevEl: t2, prevEl: t2 && t2[0] }));
  }, destroy: function() {
    var e2 = this, t2 = e2.navigation, a2 = t2.$nextEl, i2 = t2.$prevEl;
    a2 && a2.length && (a2.off("click", e2.navigation.onNextClick), a2.removeClass(e2.params.navigation.disabledClass)), i2 && i2.length && (i2.off("click", e2.navigation.onPrevClick), i2.removeClass(e2.params.navigation.disabledClass));
  } }, N = { update: function() {
    var e2 = this, t2 = e2.rtl, s2 = e2.params.pagination;
    if (s2.el && e2.pagination.el && e2.pagination.$el && 0 !== e2.pagination.$el.length) {
      var r2, a2 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.slides.length : e2.slides.length, i2 = e2.pagination.$el, n2 = e2.params.loop ? Math.ceil((a2 - 2 * e2.loopedSlides) / e2.params.slidesPerGroup) : e2.snapGrid.length;
      if (e2.params.loop ? ((r2 = Math.ceil((e2.activeIndex - e2.loopedSlides) / e2.params.slidesPerGroup)) > a2 - 1 - 2 * e2.loopedSlides && (r2 -= a2 - 2 * e2.loopedSlides), n2 - 1 < r2 && (r2 -= n2), r2 < 0 && "bullets" !== e2.params.paginationType && (r2 = n2 + r2)) : r2 = void 0 !== e2.snapIndex ? e2.snapIndex : e2.activeIndex || 0, "bullets" === s2.type && e2.pagination.bullets && 0 < e2.pagination.bullets.length) {
        var o2, l2, d2, p2 = e2.pagination.bullets;
        if (s2.dynamicBullets && (e2.pagination.bulletSize = p2.eq(0)[e2.isHorizontal() ? "outerWidth" : "outerHeight"](true), i2.css(e2.isHorizontal() ? "width" : "height", e2.pagination.bulletSize * (s2.dynamicMainBullets + 4) + "px"), 1 < s2.dynamicMainBullets && void 0 !== e2.previousIndex && (e2.pagination.dynamicBulletIndex += r2 - e2.previousIndex, e2.pagination.dynamicBulletIndex > s2.dynamicMainBullets - 1 ? e2.pagination.dynamicBulletIndex = s2.dynamicMainBullets - 1 : e2.pagination.dynamicBulletIndex < 0 && (e2.pagination.dynamicBulletIndex = 0)), o2 = r2 - e2.pagination.dynamicBulletIndex, d2 = ((l2 = o2 + (Math.min(p2.length, s2.dynamicMainBullets) - 1)) + o2) / 2), p2.removeClass(s2.bulletActiveClass + " " + s2.bulletActiveClass + "-next " + s2.bulletActiveClass + "-next-next " + s2.bulletActiveClass + "-prev " + s2.bulletActiveClass + "-prev-prev " + s2.bulletActiveClass + "-main"), 1 < i2.length)
          p2.each(function(e3, t3) {
            var a3 = L(t3), i3 = a3.index();
            i3 === r2 && a3.addClass(s2.bulletActiveClass), s2.dynamicBullets && (o2 <= i3 && i3 <= l2 && a3.addClass(s2.bulletActiveClass + "-main"), i3 === o2 && a3.prev().addClass(s2.bulletActiveClass + "-prev").prev().addClass(s2.bulletActiveClass + "-prev-prev"), i3 === l2 && a3.next().addClass(s2.bulletActiveClass + "-next").next().addClass(s2.bulletActiveClass + "-next-next"));
          });
        else if (p2.eq(r2).addClass(s2.bulletActiveClass), s2.dynamicBullets) {
          for (var c2 = p2.eq(o2), u2 = p2.eq(l2), h2 = o2; h2 <= l2; h2 += 1)
            p2.eq(h2).addClass(s2.bulletActiveClass + "-main");
          c2.prev().addClass(s2.bulletActiveClass + "-prev").prev().addClass(s2.bulletActiveClass + "-prev-prev"), u2.next().addClass(s2.bulletActiveClass + "-next").next().addClass(s2.bulletActiveClass + "-next-next");
        }
        if (s2.dynamicBullets) {
          var v2 = Math.min(p2.length, s2.dynamicMainBullets + 4), f2 = (e2.pagination.bulletSize * v2 - e2.pagination.bulletSize) / 2 - d2 * e2.pagination.bulletSize, m2 = t2 ? "right" : "left";
          p2.css(e2.isHorizontal() ? m2 : "top", f2 + "px");
        }
      }
      if ("fraction" === s2.type && (i2.find("." + s2.currentClass).text(s2.formatFractionCurrent(r2 + 1)), i2.find("." + s2.totalClass).text(s2.formatFractionTotal(n2))), "progressbar" === s2.type) {
        var g2;
        g2 = s2.progressbarOpposite ? e2.isHorizontal() ? "vertical" : "horizontal" : e2.isHorizontal() ? "horizontal" : "vertical";
        var b2 = (r2 + 1) / n2, w2 = 1, y2 = 1;
        "horizontal" === g2 ? w2 = b2 : y2 = b2, i2.find("." + s2.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w2 + ") scaleY(" + y2 + ")").transition(e2.params.speed);
      }
      "custom" === s2.type && s2.renderCustom ? (i2.html(s2.renderCustom(e2, r2 + 1, n2)), e2.emit("paginationRender", e2, i2[0])) : e2.emit("paginationUpdate", e2, i2[0]), i2[e2.params.watchOverflow && e2.isLocked ? "addClass" : "removeClass"](s2.lockClass);
    }
  }, render: function() {
    var e2 = this, t2 = e2.params.pagination;
    if (t2.el && e2.pagination.el && e2.pagination.$el && 0 !== e2.pagination.$el.length) {
      var a2 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.slides.length : e2.slides.length, i2 = e2.pagination.$el, s2 = "";
      if ("bullets" === t2.type) {
        for (var r2 = e2.params.loop ? Math.ceil((a2 - 2 * e2.loopedSlides) / e2.params.slidesPerGroup) : e2.snapGrid.length, n2 = 0; n2 < r2; n2 += 1)
          t2.renderBullet ? s2 += t2.renderBullet.call(e2, n2, t2.bulletClass) : s2 += "<" + t2.bulletElement + ' class="' + t2.bulletClass + '"></' + t2.bulletElement + ">";
        i2.html(s2), e2.pagination.bullets = i2.find("." + t2.bulletClass);
      }
      "fraction" === t2.type && (s2 = t2.renderFraction ? t2.renderFraction.call(e2, t2.currentClass, t2.totalClass) : '<span class="' + t2.currentClass + '"></span> / <span class="' + t2.totalClass + '"></span>', i2.html(s2)), "progressbar" === t2.type && (s2 = t2.renderProgressbar ? t2.renderProgressbar.call(e2, t2.progressbarFillClass) : '<span class="' + t2.progressbarFillClass + '"></span>', i2.html(s2)), "custom" !== t2.type && e2.emit("paginationRender", e2.pagination.$el[0]);
    }
  }, init: function() {
    var a2 = this, e2 = a2.params.pagination;
    if (e2.el) {
      var t2 = L(e2.el);
      0 !== t2.length && (a2.params.uniqueNavElements && "string" == typeof e2.el && 1 < t2.length && 1 === a2.$el.find(e2.el).length && (t2 = a2.$el.find(e2.el)), "bullets" === e2.type && e2.clickable && t2.addClass(e2.clickableClass), t2.addClass(e2.modifierClass + e2.type), "bullets" === e2.type && e2.dynamicBullets && (t2.addClass("" + e2.modifierClass + e2.type + "-dynamic"), a2.pagination.dynamicBulletIndex = 0, e2.dynamicMainBullets < 1 && (e2.dynamicMainBullets = 1)), "progressbar" === e2.type && e2.progressbarOpposite && t2.addClass(e2.progressbarOppositeClass), e2.clickable && t2.on("click", "." + e2.bulletClass, function(e3) {
        e3.preventDefault();
        var t3 = L(this).index() * a2.params.slidesPerGroup;
        a2.params.loop && (t3 += a2.loopedSlides), a2.slideTo(t3);
      }), ee.extend(a2.pagination, { $el: t2, el: t2[0] }));
    }
  }, destroy: function() {
    var e2 = this, t2 = e2.params.pagination;
    if (t2.el && e2.pagination.el && e2.pagination.$el && 0 !== e2.pagination.$el.length) {
      var a2 = e2.pagination.$el;
      a2.removeClass(t2.hiddenClass), a2.removeClass(t2.modifierClass + t2.type), e2.pagination.bullets && e2.pagination.bullets.removeClass(t2.bulletActiveClass), t2.clickable && a2.off("click", "." + t2.bulletClass);
    }
  } }, G = { setTranslate: function() {
    var e2 = this;
    if (e2.params.scrollbar.el && e2.scrollbar.el) {
      var t2 = e2.scrollbar, a2 = e2.rtlTranslate, i2 = e2.progress, s2 = t2.dragSize, r2 = t2.trackSize, n2 = t2.$dragEl, o2 = t2.$el, l2 = e2.params.scrollbar, d2 = s2, p2 = (r2 - s2) * i2;
      a2 ? 0 < (p2 = -p2) ? (d2 = s2 - p2, p2 = 0) : r2 < -p2 + s2 && (d2 = r2 + p2) : p2 < 0 ? (d2 = s2 + p2, p2 = 0) : r2 < p2 + s2 && (d2 = r2 - p2), e2.isHorizontal() ? (te.transforms3d ? n2.transform("translate3d(" + p2 + "px, 0, 0)") : n2.transform("translateX(" + p2 + "px)"), n2[0].style.width = d2 + "px") : (te.transforms3d ? n2.transform("translate3d(0px, " + p2 + "px, 0)") : n2.transform("translateY(" + p2 + "px)"), n2[0].style.height = d2 + "px"), l2.hide && (clearTimeout(e2.scrollbar.timeout), o2[0].style.opacity = 1, e2.scrollbar.timeout = setTimeout(function() {
        o2[0].style.opacity = 0, o2.transition(400);
      }, 1e3));
    }
  }, setTransition: function(e2) {
    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e2);
  }, updateSize: function() {
    var e2 = this;
    if (e2.params.scrollbar.el && e2.scrollbar.el) {
      var t2 = e2.scrollbar, a2 = t2.$dragEl, i2 = t2.$el;
      a2[0].style.width = "", a2[0].style.height = "";
      var s2, r2 = e2.isHorizontal() ? i2[0].offsetWidth : i2[0].offsetHeight, n2 = e2.size / e2.virtualSize, o2 = n2 * (r2 / e2.size);
      s2 = "auto" === e2.params.scrollbar.dragSize ? r2 * n2 : parseInt(e2.params.scrollbar.dragSize, 10), e2.isHorizontal() ? a2[0].style.width = s2 + "px" : a2[0].style.height = s2 + "px", i2[0].style.display = 1 <= n2 ? "none" : "", e2.params.scrollbar.hide && (i2[0].style.opacity = 0), ee.extend(t2, { trackSize: r2, divider: n2, moveDivider: o2, dragSize: s2 }), t2.$el[e2.params.watchOverflow && e2.isLocked ? "addClass" : "removeClass"](e2.params.scrollbar.lockClass);
    }
  }, setDragPosition: function(e2) {
    var t2, a2 = this, i2 = a2.scrollbar, s2 = a2.rtlTranslate, r2 = i2.$el, n2 = i2.dragSize, o2 = i2.trackSize;
    t2 = ((a2.isHorizontal() ? "touchstart" === e2.type || "touchmove" === e2.type ? e2.targetTouches[0].pageX : e2.pageX || e2.clientX : "touchstart" === e2.type || "touchmove" === e2.type ? e2.targetTouches[0].pageY : e2.pageY || e2.clientY) - r2.offset()[a2.isHorizontal() ? "left" : "top"] - n2 / 2) / (o2 - n2), t2 = Math.max(Math.min(t2, 1), 0), s2 && (t2 = 1 - t2);
    var l2 = a2.minTranslate() + (a2.maxTranslate() - a2.minTranslate()) * t2;
    a2.updateProgress(l2), a2.setTranslate(l2), a2.updateActiveIndex(), a2.updateSlidesClasses();
  }, onDragStart: function(e2) {
    var t2 = this, a2 = t2.params.scrollbar, i2 = t2.scrollbar, s2 = t2.$wrapperEl, r2 = i2.$el, n2 = i2.$dragEl;
    t2.scrollbar.isTouched = true, e2.preventDefault(), e2.stopPropagation(), s2.transition(100), n2.transition(100), i2.setDragPosition(e2), clearTimeout(t2.scrollbar.dragTimeout), r2.transition(0), a2.hide && r2.css("opacity", 1), t2.emit("scrollbarDragStart", e2);
  }, onDragMove: function(e2) {
    var t2 = this.scrollbar, a2 = this.$wrapperEl, i2 = t2.$el, s2 = t2.$dragEl;
    this.scrollbar.isTouched && (e2.preventDefault ? e2.preventDefault() : e2.returnValue = false, t2.setDragPosition(e2), a2.transition(0), i2.transition(0), s2.transition(0), this.emit("scrollbarDragMove", e2));
  }, onDragEnd: function(e2) {
    var t2 = this, a2 = t2.params.scrollbar, i2 = t2.scrollbar.$el;
    t2.scrollbar.isTouched && (t2.scrollbar.isTouched = false, a2.hide && (clearTimeout(t2.scrollbar.dragTimeout), t2.scrollbar.dragTimeout = ee.nextTick(function() {
      i2.css("opacity", 0), i2.transition(400);
    }, 1e3)), t2.emit("scrollbarDragEnd", e2), a2.snapOnRelease && t2.slideToClosest());
  }, enableDraggable: function() {
    var e2 = this;
    if (e2.params.scrollbar.el) {
      var t2 = e2.scrollbar, a2 = e2.touchEventsTouch, i2 = e2.touchEventsDesktop, s2 = e2.params, r2 = t2.$el[0], n2 = !(!te.passiveListener || !s2.passiveListeners) && { passive: false, capture: false }, o2 = !(!te.passiveListener || !s2.passiveListeners) && { passive: true, capture: false };
      te.touch ? (r2.addEventListener(a2.start, e2.scrollbar.onDragStart, n2), r2.addEventListener(a2.move, e2.scrollbar.onDragMove, n2), r2.addEventListener(a2.end, e2.scrollbar.onDragEnd, o2)) : (r2.addEventListener(i2.start, e2.scrollbar.onDragStart, n2), f.addEventListener(i2.move, e2.scrollbar.onDragMove, n2), f.addEventListener(i2.end, e2.scrollbar.onDragEnd, o2));
    }
  }, disableDraggable: function() {
    var e2 = this;
    if (e2.params.scrollbar.el) {
      var t2 = e2.scrollbar, a2 = e2.touchEventsTouch, i2 = e2.touchEventsDesktop, s2 = e2.params, r2 = t2.$el[0], n2 = !(!te.passiveListener || !s2.passiveListeners) && { passive: false, capture: false }, o2 = !(!te.passiveListener || !s2.passiveListeners) && { passive: true, capture: false };
      te.touch ? (r2.removeEventListener(a2.start, e2.scrollbar.onDragStart, n2), r2.removeEventListener(a2.move, e2.scrollbar.onDragMove, n2), r2.removeEventListener(a2.end, e2.scrollbar.onDragEnd, o2)) : (r2.removeEventListener(i2.start, e2.scrollbar.onDragStart, n2), f.removeEventListener(i2.move, e2.scrollbar.onDragMove, n2), f.removeEventListener(i2.end, e2.scrollbar.onDragEnd, o2));
    }
  }, init: function() {
    var e2 = this;
    if (e2.params.scrollbar.el) {
      var t2 = e2.scrollbar, a2 = e2.$el, i2 = e2.params.scrollbar, s2 = L(i2.el);
      e2.params.uniqueNavElements && "string" == typeof i2.el && 1 < s2.length && 1 === a2.find(i2.el).length && (s2 = a2.find(i2.el));
      var r2 = s2.find("." + e2.params.scrollbar.dragClass);
      0 === r2.length && (r2 = L('<div class="' + e2.params.scrollbar.dragClass + '"></div>'), s2.append(r2)), ee.extend(t2, { $el: s2, el: s2[0], $dragEl: r2, dragEl: r2[0] }), i2.draggable && t2.enableDraggable();
    }
  }, destroy: function() {
    this.scrollbar.disableDraggable();
  } }, B = { setTransform: function(e2, t2) {
    var a2 = this.rtl, i2 = L(e2), s2 = a2 ? -1 : 1, r2 = i2.attr("data-swiper-parallax") || "0", n2 = i2.attr("data-swiper-parallax-x"), o2 = i2.attr("data-swiper-parallax-y"), l2 = i2.attr("data-swiper-parallax-scale"), d2 = i2.attr("data-swiper-parallax-opacity");
    if (n2 || o2 ? (n2 = n2 || "0", o2 = o2 || "0") : this.isHorizontal() ? (n2 = r2, o2 = "0") : (o2 = r2, n2 = "0"), n2 = 0 <= n2.indexOf("%") ? parseInt(n2, 10) * t2 * s2 + "%" : n2 * t2 * s2 + "px", o2 = 0 <= o2.indexOf("%") ? parseInt(o2, 10) * t2 + "%" : o2 * t2 + "px", null != d2) {
      var p2 = d2 - (d2 - 1) * (1 - Math.abs(t2));
      i2[0].style.opacity = p2;
    }
    if (null == l2)
      i2.transform("translate3d(" + n2 + ", " + o2 + ", 0px)");
    else {
      var c2 = l2 - (l2 - 1) * (1 - Math.abs(t2));
      i2.transform("translate3d(" + n2 + ", " + o2 + ", 0px) scale(" + c2 + ")");
    }
  }, setTranslate: function() {
    var i2 = this, e2 = i2.$el, t2 = i2.slides, s2 = i2.progress, r2 = i2.snapGrid;
    e2.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e3, t3) {
      i2.parallax.setTransform(t3, s2);
    }), t2.each(function(e3, t3) {
      var a2 = t3.progress;
      1 < i2.params.slidesPerGroup && "auto" !== i2.params.slidesPerView && (a2 += Math.ceil(e3 / 2) - s2 * (r2.length - 1)), a2 = Math.min(Math.max(a2, -1), 1), L(t3).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e4, t4) {
        i2.parallax.setTransform(t4, a2);
      });
    });
  }, setTransition: function(s2) {
    void 0 === s2 && (s2 = this.params.speed);
    this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e2, t2) {
      var a2 = L(t2), i2 = parseInt(a2.attr("data-swiper-parallax-duration"), 10) || s2;
      0 === s2 && (i2 = 0), a2.transition(i2);
    });
  } }, X = { getDistanceBetweenTouches: function(e2) {
    if (e2.targetTouches.length < 2)
      return 1;
    var t2 = e2.targetTouches[0].pageX, a2 = e2.targetTouches[0].pageY, i2 = e2.targetTouches[1].pageX, s2 = e2.targetTouches[1].pageY;
    return Math.sqrt(Math.pow(i2 - t2, 2) + Math.pow(s2 - a2, 2));
  }, onGestureStart: function(e2) {
    var t2 = this, a2 = t2.params.zoom, i2 = t2.zoom, s2 = i2.gesture;
    if (i2.fakeGestureTouched = false, i2.fakeGestureMoved = false, !te.gestures) {
      if ("touchstart" !== e2.type || "touchstart" === e2.type && e2.targetTouches.length < 2)
        return;
      i2.fakeGestureTouched = true, s2.scaleStart = X.getDistanceBetweenTouches(e2);
    }
    s2.$slideEl && s2.$slideEl.length || (s2.$slideEl = L(e2.target).closest(".swiper-slide"), 0 === s2.$slideEl.length && (s2.$slideEl = t2.slides.eq(t2.activeIndex)), s2.$imageEl = s2.$slideEl.find("img, svg, canvas"), s2.$imageWrapEl = s2.$imageEl.parent("." + a2.containerClass), s2.maxRatio = s2.$imageWrapEl.attr("data-swiper-zoom") || a2.maxRatio, 0 !== s2.$imageWrapEl.length) ? (s2.$imageEl.transition(0), t2.zoom.isScaling = true) : s2.$imageEl = void 0;
  }, onGestureChange: function(e2) {
    var t2 = this.params.zoom, a2 = this.zoom, i2 = a2.gesture;
    if (!te.gestures) {
      if ("touchmove" !== e2.type || "touchmove" === e2.type && e2.targetTouches.length < 2)
        return;
      a2.fakeGestureMoved = true, i2.scaleMove = X.getDistanceBetweenTouches(e2);
    }
    i2.$imageEl && 0 !== i2.$imageEl.length && (a2.scale = te.gestures ? e2.scale * a2.currentScale : i2.scaleMove / i2.scaleStart * a2.currentScale, a2.scale > i2.maxRatio && (a2.scale = i2.maxRatio - 1 + Math.pow(a2.scale - i2.maxRatio + 1, 0.5)), a2.scale < t2.minRatio && (a2.scale = t2.minRatio + 1 - Math.pow(t2.minRatio - a2.scale + 1, 0.5)), i2.$imageEl.transform("translate3d(0,0,0) scale(" + a2.scale + ")"));
  }, onGestureEnd: function(e2) {
    var t2 = this.params.zoom, a2 = this.zoom, i2 = a2.gesture;
    if (!te.gestures) {
      if (!a2.fakeGestureTouched || !a2.fakeGestureMoved)
        return;
      if ("touchend" !== e2.type || "touchend" === e2.type && e2.changedTouches.length < 2 && !g.android)
        return;
      a2.fakeGestureTouched = false, a2.fakeGestureMoved = false;
    }
    i2.$imageEl && 0 !== i2.$imageEl.length && (a2.scale = Math.max(Math.min(a2.scale, i2.maxRatio), t2.minRatio), i2.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a2.scale + ")"), a2.currentScale = a2.scale, a2.isScaling = false, 1 === a2.scale && (i2.$slideEl = void 0));
  }, onTouchStart: function(e2) {
    var t2 = this.zoom, a2 = t2.gesture, i2 = t2.image;
    a2.$imageEl && 0 !== a2.$imageEl.length && (i2.isTouched || (g.android && e2.preventDefault(), i2.isTouched = true, i2.touchesStart.x = "touchstart" === e2.type ? e2.targetTouches[0].pageX : e2.pageX, i2.touchesStart.y = "touchstart" === e2.type ? e2.targetTouches[0].pageY : e2.pageY));
  }, onTouchMove: function(e2) {
    var t2 = this, a2 = t2.zoom, i2 = a2.gesture, s2 = a2.image, r2 = a2.velocity;
    if (i2.$imageEl && 0 !== i2.$imageEl.length && (t2.allowClick = false, s2.isTouched && i2.$slideEl)) {
      s2.isMoved || (s2.width = i2.$imageEl[0].offsetWidth, s2.height = i2.$imageEl[0].offsetHeight, s2.startX = ee.getTranslate(i2.$imageWrapEl[0], "x") || 0, s2.startY = ee.getTranslate(i2.$imageWrapEl[0], "y") || 0, i2.slideWidth = i2.$slideEl[0].offsetWidth, i2.slideHeight = i2.$slideEl[0].offsetHeight, i2.$imageWrapEl.transition(0), t2.rtl && (s2.startX = -s2.startX, s2.startY = -s2.startY));
      var n2 = s2.width * a2.scale, o2 = s2.height * a2.scale;
      if (!(n2 < i2.slideWidth && o2 < i2.slideHeight)) {
        if (s2.minX = Math.min(i2.slideWidth / 2 - n2 / 2, 0), s2.maxX = -s2.minX, s2.minY = Math.min(i2.slideHeight / 2 - o2 / 2, 0), s2.maxY = -s2.minY, s2.touchesCurrent.x = "touchmove" === e2.type ? e2.targetTouches[0].pageX : e2.pageX, s2.touchesCurrent.y = "touchmove" === e2.type ? e2.targetTouches[0].pageY : e2.pageY, !s2.isMoved && !a2.isScaling) {
          if (t2.isHorizontal() && (Math.floor(s2.minX) === Math.floor(s2.startX) && s2.touchesCurrent.x < s2.touchesStart.x || Math.floor(s2.maxX) === Math.floor(s2.startX) && s2.touchesCurrent.x > s2.touchesStart.x))
            return void (s2.isTouched = false);
          if (!t2.isHorizontal() && (Math.floor(s2.minY) === Math.floor(s2.startY) && s2.touchesCurrent.y < s2.touchesStart.y || Math.floor(s2.maxY) === Math.floor(s2.startY) && s2.touchesCurrent.y > s2.touchesStart.y))
            return void (s2.isTouched = false);
        }
        e2.preventDefault(), e2.stopPropagation(), s2.isMoved = true, s2.currentX = s2.touchesCurrent.x - s2.touchesStart.x + s2.startX, s2.currentY = s2.touchesCurrent.y - s2.touchesStart.y + s2.startY, s2.currentX < s2.minX && (s2.currentX = s2.minX + 1 - Math.pow(s2.minX - s2.currentX + 1, 0.8)), s2.currentX > s2.maxX && (s2.currentX = s2.maxX - 1 + Math.pow(s2.currentX - s2.maxX + 1, 0.8)), s2.currentY < s2.minY && (s2.currentY = s2.minY + 1 - Math.pow(s2.minY - s2.currentY + 1, 0.8)), s2.currentY > s2.maxY && (s2.currentY = s2.maxY - 1 + Math.pow(s2.currentY - s2.maxY + 1, 0.8)), r2.prevPositionX || (r2.prevPositionX = s2.touchesCurrent.x), r2.prevPositionY || (r2.prevPositionY = s2.touchesCurrent.y), r2.prevTime || (r2.prevTime = Date.now()), r2.x = (s2.touchesCurrent.x - r2.prevPositionX) / (Date.now() - r2.prevTime) / 2, r2.y = (s2.touchesCurrent.y - r2.prevPositionY) / (Date.now() - r2.prevTime) / 2, Math.abs(s2.touchesCurrent.x - r2.prevPositionX) < 2 && (r2.x = 0), Math.abs(s2.touchesCurrent.y - r2.prevPositionY) < 2 && (r2.y = 0), r2.prevPositionX = s2.touchesCurrent.x, r2.prevPositionY = s2.touchesCurrent.y, r2.prevTime = Date.now(), i2.$imageWrapEl.transform("translate3d(" + s2.currentX + "px, " + s2.currentY + "px,0)");
      }
    }
  }, onTouchEnd: function() {
    var e2 = this.zoom, t2 = e2.gesture, a2 = e2.image, i2 = e2.velocity;
    if (t2.$imageEl && 0 !== t2.$imageEl.length) {
      if (!a2.isTouched || !a2.isMoved)
        return a2.isTouched = false, void (a2.isMoved = false);
      a2.isTouched = false, a2.isMoved = false;
      var s2 = 300, r2 = 300, n2 = i2.x * s2, o2 = a2.currentX + n2, l2 = i2.y * r2, d2 = a2.currentY + l2;
      0 !== i2.x && (s2 = Math.abs((o2 - a2.currentX) / i2.x)), 0 !== i2.y && (r2 = Math.abs((d2 - a2.currentY) / i2.y));
      var p2 = Math.max(s2, r2);
      a2.currentX = o2, a2.currentY = d2;
      var c2 = a2.width * e2.scale, u2 = a2.height * e2.scale;
      a2.minX = Math.min(t2.slideWidth / 2 - c2 / 2, 0), a2.maxX = -a2.minX, a2.minY = Math.min(t2.slideHeight / 2 - u2 / 2, 0), a2.maxY = -a2.minY, a2.currentX = Math.max(Math.min(a2.currentX, a2.maxX), a2.minX), a2.currentY = Math.max(Math.min(a2.currentY, a2.maxY), a2.minY), t2.$imageWrapEl.transition(p2).transform("translate3d(" + a2.currentX + "px, " + a2.currentY + "px,0)");
    }
  }, onTransitionEnd: function() {
    var e2 = this.zoom, t2 = e2.gesture;
    t2.$slideEl && this.previousIndex !== this.activeIndex && (t2.$imageEl.transform("translate3d(0,0,0) scale(1)"), t2.$imageWrapEl.transform("translate3d(0,0,0)"), e2.scale = 1, e2.currentScale = 1, t2.$slideEl = void 0, t2.$imageEl = void 0, t2.$imageWrapEl = void 0);
  }, toggle: function(e2) {
    var t2 = this.zoom;
    t2.scale && 1 !== t2.scale ? t2.out() : t2.in(e2);
  }, in: function(e2) {
    var t2, a2, i2, s2, r2, n2, o2, l2, d2, p2, c2, u2, h2, v2, f2, m2, g2 = this, b2 = g2.zoom, w2 = g2.params.zoom, y2 = b2.gesture, x2 = b2.image;
    (y2.$slideEl || (y2.$slideEl = g2.clickedSlide ? L(g2.clickedSlide) : g2.slides.eq(g2.activeIndex), y2.$imageEl = y2.$slideEl.find("img, svg, canvas"), y2.$imageWrapEl = y2.$imageEl.parent("." + w2.containerClass)), y2.$imageEl && 0 !== y2.$imageEl.length) && (y2.$slideEl.addClass("" + w2.zoomedSlideClass), void 0 === x2.touchesStart.x && e2 ? (t2 = "touchend" === e2.type ? e2.changedTouches[0].pageX : e2.pageX, a2 = "touchend" === e2.type ? e2.changedTouches[0].pageY : e2.pageY) : (t2 = x2.touchesStart.x, a2 = x2.touchesStart.y), b2.scale = y2.$imageWrapEl.attr("data-swiper-zoom") || w2.maxRatio, b2.currentScale = y2.$imageWrapEl.attr("data-swiper-zoom") || w2.maxRatio, e2 ? (f2 = y2.$slideEl[0].offsetWidth, m2 = y2.$slideEl[0].offsetHeight, i2 = y2.$slideEl.offset().left + f2 / 2 - t2, s2 = y2.$slideEl.offset().top + m2 / 2 - a2, o2 = y2.$imageEl[0].offsetWidth, l2 = y2.$imageEl[0].offsetHeight, d2 = o2 * b2.scale, p2 = l2 * b2.scale, h2 = -(c2 = Math.min(f2 / 2 - d2 / 2, 0)), v2 = -(u2 = Math.min(m2 / 2 - p2 / 2, 0)), (r2 = i2 * b2.scale) < c2 && (r2 = c2), h2 < r2 && (r2 = h2), (n2 = s2 * b2.scale) < u2 && (n2 = u2), v2 < n2 && (n2 = v2)) : n2 = r2 = 0, y2.$imageWrapEl.transition(300).transform("translate3d(" + r2 + "px, " + n2 + "px,0)"), y2.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b2.scale + ")"));
  }, out: function() {
    var e2 = this, t2 = e2.zoom, a2 = e2.params.zoom, i2 = t2.gesture;
    i2.$slideEl || (i2.$slideEl = e2.clickedSlide ? L(e2.clickedSlide) : e2.slides.eq(e2.activeIndex), i2.$imageEl = i2.$slideEl.find("img, svg, canvas"), i2.$imageWrapEl = i2.$imageEl.parent("." + a2.containerClass)), i2.$imageEl && 0 !== i2.$imageEl.length && (t2.scale = 1, t2.currentScale = 1, i2.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i2.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i2.$slideEl.removeClass("" + a2.zoomedSlideClass), i2.$slideEl = void 0);
  }, enable: function() {
    var e2 = this, t2 = e2.zoom;
    if (!t2.enabled) {
      t2.enabled = true;
      var a2 = !("touchstart" !== e2.touchEvents.start || !te.passiveListener || !e2.params.passiveListeners) && { passive: true, capture: false };
      te.gestures ? (e2.$wrapperEl.on("gesturestart", ".swiper-slide", t2.onGestureStart, a2), e2.$wrapperEl.on("gesturechange", ".swiper-slide", t2.onGestureChange, a2), e2.$wrapperEl.on("gestureend", ".swiper-slide", t2.onGestureEnd, a2)) : "touchstart" === e2.touchEvents.start && (e2.$wrapperEl.on(e2.touchEvents.start, ".swiper-slide", t2.onGestureStart, a2), e2.$wrapperEl.on(e2.touchEvents.move, ".swiper-slide", t2.onGestureChange, a2), e2.$wrapperEl.on(e2.touchEvents.end, ".swiper-slide", t2.onGestureEnd, a2)), e2.$wrapperEl.on(e2.touchEvents.move, "." + e2.params.zoom.containerClass, t2.onTouchMove);
    }
  }, disable: function() {
    var e2 = this, t2 = e2.zoom;
    if (t2.enabled) {
      e2.zoom.enabled = false;
      var a2 = !("touchstart" !== e2.touchEvents.start || !te.passiveListener || !e2.params.passiveListeners) && { passive: true, capture: false };
      te.gestures ? (e2.$wrapperEl.off("gesturestart", ".swiper-slide", t2.onGestureStart, a2), e2.$wrapperEl.off("gesturechange", ".swiper-slide", t2.onGestureChange, a2), e2.$wrapperEl.off("gestureend", ".swiper-slide", t2.onGestureEnd, a2)) : "touchstart" === e2.touchEvents.start && (e2.$wrapperEl.off(e2.touchEvents.start, ".swiper-slide", t2.onGestureStart, a2), e2.$wrapperEl.off(e2.touchEvents.move, ".swiper-slide", t2.onGestureChange, a2), e2.$wrapperEl.off(e2.touchEvents.end, ".swiper-slide", t2.onGestureEnd, a2)), e2.$wrapperEl.off(e2.touchEvents.move, "." + e2.params.zoom.containerClass, t2.onTouchMove);
    }
  } }, Y = { loadInSlide: function(e2, l2) {
    void 0 === l2 && (l2 = true);
    var d2 = this, p2 = d2.params.lazy;
    if (void 0 !== e2 && 0 !== d2.slides.length) {
      var c2 = d2.virtual && d2.params.virtual.enabled ? d2.$wrapperEl.children("." + d2.params.slideClass + '[data-swiper-slide-index="' + e2 + '"]') : d2.slides.eq(e2), t2 = c2.find("." + p2.elementClass + ":not(." + p2.loadedClass + "):not(." + p2.loadingClass + ")");
      !c2.hasClass(p2.elementClass) || c2.hasClass(p2.loadedClass) || c2.hasClass(p2.loadingClass) || (t2 = t2.add(c2[0])), 0 !== t2.length && t2.each(function(e3, t3) {
        var i2 = L(t3);
        i2.addClass(p2.loadingClass);
        var s2 = i2.attr("data-background"), r2 = i2.attr("data-src"), n2 = i2.attr("data-srcset"), o2 = i2.attr("data-sizes");
        d2.loadImage(i2[0], r2 || s2, n2, o2, false, function() {
          if (null != d2 && d2 && (!d2 || d2.params) && !d2.destroyed) {
            if (s2 ? (i2.css("background-image", 'url("' + s2 + '")'), i2.removeAttr("data-background")) : (n2 && (i2.attr("srcset", n2), i2.removeAttr("data-srcset")), o2 && (i2.attr("sizes", o2), i2.removeAttr("data-sizes")), r2 && (i2.attr("src", r2), i2.removeAttr("data-src"))), i2.addClass(p2.loadedClass).removeClass(p2.loadingClass), c2.find("." + p2.preloaderClass).remove(), d2.params.loop && l2) {
              var e4 = c2.attr("data-swiper-slide-index");
              if (c2.hasClass(d2.params.slideDuplicateClass)) {
                var t4 = d2.$wrapperEl.children('[data-swiper-slide-index="' + e4 + '"]:not(.' + d2.params.slideDuplicateClass + ")");
                d2.lazy.loadInSlide(t4.index(), false);
              } else {
                var a2 = d2.$wrapperEl.children("." + d2.params.slideDuplicateClass + '[data-swiper-slide-index="' + e4 + '"]');
                d2.lazy.loadInSlide(a2.index(), false);
              }
            }
            d2.emit("lazyImageReady", c2[0], i2[0]);
          }
        }), d2.emit("lazyImageLoad", c2[0], i2[0]);
      });
    }
  }, load: function() {
    var i2 = this, t2 = i2.$wrapperEl, a2 = i2.params, s2 = i2.slides, e2 = i2.activeIndex, r2 = i2.virtual && a2.virtual.enabled, n2 = a2.lazy, o2 = a2.slidesPerView;
    function l2(e3) {
      if (r2) {
        if (t2.children("." + a2.slideClass + '[data-swiper-slide-index="' + e3 + '"]').length)
          return true;
      } else if (s2[e3])
        return true;
      return false;
    }
    function d2(e3) {
      return r2 ? L(e3).attr("data-swiper-slide-index") : L(e3).index();
    }
    if ("auto" === o2 && (o2 = 0), i2.lazy.initialImageLoaded || (i2.lazy.initialImageLoaded = true), i2.params.watchSlidesVisibility)
      t2.children("." + a2.slideVisibleClass).each(function(e3, t3) {
        var a3 = r2 ? L(t3).attr("data-swiper-slide-index") : L(t3).index();
        i2.lazy.loadInSlide(a3);
      });
    else if (1 < o2)
      for (var p2 = e2; p2 < e2 + o2; p2 += 1)
        l2(p2) && i2.lazy.loadInSlide(p2);
    else
      i2.lazy.loadInSlide(e2);
    if (n2.loadPrevNext)
      if (1 < o2 || n2.loadPrevNextAmount && 1 < n2.loadPrevNextAmount) {
        for (var c2 = n2.loadPrevNextAmount, u2 = o2, h2 = Math.min(e2 + u2 + Math.max(c2, u2), s2.length), v2 = Math.max(e2 - Math.max(u2, c2), 0), f2 = e2 + o2; f2 < h2; f2 += 1)
          l2(f2) && i2.lazy.loadInSlide(f2);
        for (var m2 = v2; m2 < e2; m2 += 1)
          l2(m2) && i2.lazy.loadInSlide(m2);
      } else {
        var g2 = t2.children("." + a2.slideNextClass);
        0 < g2.length && i2.lazy.loadInSlide(d2(g2));
        var b2 = t2.children("." + a2.slidePrevClass);
        0 < b2.length && i2.lazy.loadInSlide(d2(b2));
      }
  } }, V = { LinearSpline: function(e2, t2) {
    var a2, i2, s2, r2, n2, o2 = function(e3, t3) {
      for (i2 = -1, a2 = e3.length; 1 < a2 - i2; )
        e3[s2 = a2 + i2 >> 1] <= t3 ? i2 = s2 : a2 = s2;
      return a2;
    };
    return this.x = e2, this.y = t2, this.lastIndex = e2.length - 1, this.interpolate = function(e3) {
      return e3 ? (n2 = o2(this.x, e3), r2 = n2 - 1, (e3 - this.x[r2]) * (this.y[n2] - this.y[r2]) / (this.x[n2] - this.x[r2]) + this.y[r2]) : 0;
    }, this;
  }, getInterpolateFunction: function(e2) {
    var t2 = this;
    t2.controller.spline || (t2.controller.spline = t2.params.loop ? new V.LinearSpline(t2.slidesGrid, e2.slidesGrid) : new V.LinearSpline(t2.snapGrid, e2.snapGrid));
  }, setTranslate: function(e2, t2) {
    var a2, i2, s2 = this, r2 = s2.controller.control;
    function n2(e3) {
      var t3 = s2.rtlTranslate ? -s2.translate : s2.translate;
      "slide" === s2.params.controller.by && (s2.controller.getInterpolateFunction(e3), i2 = -s2.controller.spline.interpolate(-t3)), i2 && "container" !== s2.params.controller.by || (a2 = (e3.maxTranslate() - e3.minTranslate()) / (s2.maxTranslate() - s2.minTranslate()), i2 = (t3 - s2.minTranslate()) * a2 + e3.minTranslate()), s2.params.controller.inverse && (i2 = e3.maxTranslate() - i2), e3.updateProgress(i2), e3.setTranslate(i2, s2), e3.updateActiveIndex(), e3.updateSlidesClasses();
    }
    if (Array.isArray(r2))
      for (var o2 = 0; o2 < r2.length; o2 += 1)
        r2[o2] !== t2 && r2[o2] instanceof T && n2(r2[o2]);
    else
      r2 instanceof T && t2 !== r2 && n2(r2);
  }, setTransition: function(t2, e2) {
    var a2, i2 = this, s2 = i2.controller.control;
    function r2(e3) {
      e3.setTransition(t2, i2), 0 !== t2 && (e3.transitionStart(), e3.params.autoHeight && ee.nextTick(function() {
        e3.updateAutoHeight();
      }), e3.$wrapperEl.transitionEnd(function() {
        s2 && (e3.params.loop && "slide" === i2.params.controller.by && e3.loopFix(), e3.transitionEnd());
      }));
    }
    if (Array.isArray(s2))
      for (a2 = 0; a2 < s2.length; a2 += 1)
        s2[a2] !== e2 && s2[a2] instanceof T && r2(s2[a2]);
    else
      s2 instanceof T && e2 !== s2 && r2(s2);
  } }, F = { makeElFocusable: function(e2) {
    return e2.attr("tabIndex", "0"), e2;
  }, addElRole: function(e2, t2) {
    return e2.attr("role", t2), e2;
  }, addElLabel: function(e2, t2) {
    return e2.attr("aria-label", t2), e2;
  }, disableEl: function(e2) {
    return e2.attr("aria-disabled", true), e2;
  }, enableEl: function(e2) {
    return e2.attr("aria-disabled", false), e2;
  }, onEnterKey: function(e2) {
    var t2 = this, a2 = t2.params.a11y;
    if (13 === e2.keyCode) {
      var i2 = L(e2.target);
      t2.navigation && t2.navigation.$nextEl && i2.is(t2.navigation.$nextEl) && (t2.isEnd && !t2.params.loop || t2.slideNext(), t2.isEnd ? t2.a11y.notify(a2.lastSlideMessage) : t2.a11y.notify(a2.nextSlideMessage)), t2.navigation && t2.navigation.$prevEl && i2.is(t2.navigation.$prevEl) && (t2.isBeginning && !t2.params.loop || t2.slidePrev(), t2.isBeginning ? t2.a11y.notify(a2.firstSlideMessage) : t2.a11y.notify(a2.prevSlideMessage)), t2.pagination && i2.is("." + t2.params.pagination.bulletClass) && i2[0].click();
    }
  }, notify: function(e2) {
    var t2 = this.a11y.liveRegion;
    0 !== t2.length && (t2.html(""), t2.html(e2));
  }, updateNavigation: function() {
    var e2 = this;
    if (!e2.params.loop) {
      var t2 = e2.navigation, a2 = t2.$nextEl, i2 = t2.$prevEl;
      i2 && 0 < i2.length && (e2.isBeginning ? e2.a11y.disableEl(i2) : e2.a11y.enableEl(i2)), a2 && 0 < a2.length && (e2.isEnd ? e2.a11y.disableEl(a2) : e2.a11y.enableEl(a2));
    }
  }, updatePagination: function() {
    var i2 = this, s2 = i2.params.a11y;
    i2.pagination && i2.params.pagination.clickable && i2.pagination.bullets && i2.pagination.bullets.length && i2.pagination.bullets.each(function(e2, t2) {
      var a2 = L(t2);
      i2.a11y.makeElFocusable(a2), i2.a11y.addElRole(a2, "button"), i2.a11y.addElLabel(a2, s2.paginationBulletMessage.replace(/{{index}}/, a2.index() + 1));
    });
  }, init: function() {
    var e2 = this;
    e2.$el.append(e2.a11y.liveRegion);
    var t2, a2, i2 = e2.params.a11y;
    e2.navigation && e2.navigation.$nextEl && (t2 = e2.navigation.$nextEl), e2.navigation && e2.navigation.$prevEl && (a2 = e2.navigation.$prevEl), t2 && (e2.a11y.makeElFocusable(t2), e2.a11y.addElRole(t2, "button"), e2.a11y.addElLabel(t2, i2.nextSlideMessage), t2.on("keydown", e2.a11y.onEnterKey)), a2 && (e2.a11y.makeElFocusable(a2), e2.a11y.addElRole(a2, "button"), e2.a11y.addElLabel(a2, i2.prevSlideMessage), a2.on("keydown", e2.a11y.onEnterKey)), e2.pagination && e2.params.pagination.clickable && e2.pagination.bullets && e2.pagination.bullets.length && e2.pagination.$el.on("keydown", "." + e2.params.pagination.bulletClass, e2.a11y.onEnterKey);
  }, destroy: function() {
    var e2, t2, a2 = this;
    a2.a11y.liveRegion && 0 < a2.a11y.liveRegion.length && a2.a11y.liveRegion.remove(), a2.navigation && a2.navigation.$nextEl && (e2 = a2.navigation.$nextEl), a2.navigation && a2.navigation.$prevEl && (t2 = a2.navigation.$prevEl), e2 && e2.off("keydown", a2.a11y.onEnterKey), t2 && t2.off("keydown", a2.a11y.onEnterKey), a2.pagination && a2.params.pagination.clickable && a2.pagination.bullets && a2.pagination.bullets.length && a2.pagination.$el.off("keydown", "." + a2.params.pagination.bulletClass, a2.a11y.onEnterKey);
  } }, R = { init: function() {
    var e2 = this;
    if (e2.params.history) {
      if (!J.history || !J.history.pushState)
        return e2.params.history.enabled = false, void (e2.params.hashNavigation.enabled = true);
      var t2 = e2.history;
      t2.initialized = true, t2.paths = R.getPathValues(), (t2.paths.key || t2.paths.value) && (t2.scrollToSlide(0, t2.paths.value, e2.params.runCallbacksOnInit), e2.params.history.replaceState || J.addEventListener("popstate", e2.history.setHistoryPopState));
    }
  }, destroy: function() {
    this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState);
  }, setHistoryPopState: function() {
    this.history.paths = R.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, false);
  }, getPathValues: function() {
    var e2 = J.location.pathname.slice(1).split("/").filter(function(e3) {
      return "" !== e3;
    }), t2 = e2.length;
    return { key: e2[t2 - 2], value: e2[t2 - 1] };
  }, setHistory: function(e2, t2) {
    if (this.history.initialized && this.params.history.enabled) {
      var a2 = this.slides.eq(t2), i2 = R.slugify(a2.attr("data-history"));
      J.location.pathname.includes(e2) || (i2 = e2 + "/" + i2);
      var s2 = J.history.state;
      s2 && s2.value === i2 || (this.params.history.replaceState ? J.history.replaceState({ value: i2 }, null, i2) : J.history.pushState({ value: i2 }, null, i2));
    }
  }, slugify: function(e2) {
    return e2.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  }, scrollToSlide: function(e2, t2, a2) {
    var i2 = this;
    if (t2)
      for (var s2 = 0, r2 = i2.slides.length; s2 < r2; s2 += 1) {
        var n2 = i2.slides.eq(s2);
        if (R.slugify(n2.attr("data-history")) === t2 && !n2.hasClass(i2.params.slideDuplicateClass)) {
          var o2 = n2.index();
          i2.slideTo(o2, e2, a2);
        }
      }
    else
      i2.slideTo(0, e2, a2);
  } }, q = { onHashCange: function() {
    var e2 = this, t2 = f.location.hash.replace("#", "");
    if (t2 !== e2.slides.eq(e2.activeIndex).attr("data-hash")) {
      var a2 = e2.$wrapperEl.children("." + e2.params.slideClass + '[data-hash="' + t2 + '"]').index();
      if (void 0 === a2)
        return;
      e2.slideTo(a2);
    }
  }, setHash: function() {
    var e2 = this;
    if (e2.hashNavigation.initialized && e2.params.hashNavigation.enabled)
      if (e2.params.hashNavigation.replaceState && J.history && J.history.replaceState)
        J.history.replaceState(null, null, "#" + e2.slides.eq(e2.activeIndex).attr("data-hash") || "");
      else {
        var t2 = e2.slides.eq(e2.activeIndex), a2 = t2.attr("data-hash") || t2.attr("data-history");
        f.location.hash = a2 || "";
      }
  }, init: function() {
    var e2 = this;
    if (!(!e2.params.hashNavigation.enabled || e2.params.history && e2.params.history.enabled)) {
      e2.hashNavigation.initialized = true;
      var t2 = f.location.hash.replace("#", "");
      if (t2)
        for (var a2 = 0, i2 = e2.slides.length; a2 < i2; a2 += 1) {
          var s2 = e2.slides.eq(a2);
          if ((s2.attr("data-hash") || s2.attr("data-history")) === t2 && !s2.hasClass(e2.params.slideDuplicateClass)) {
            var r2 = s2.index();
            e2.slideTo(r2, 0, e2.params.runCallbacksOnInit, true);
          }
        }
      e2.params.hashNavigation.watchState && L(J).on("hashchange", e2.hashNavigation.onHashCange);
    }
  }, destroy: function() {
    this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange);
  } }, W = { run: function() {
    var e2 = this, t2 = e2.slides.eq(e2.activeIndex), a2 = e2.params.autoplay.delay;
    t2.attr("data-swiper-autoplay") && (a2 = t2.attr("data-swiper-autoplay") || e2.params.autoplay.delay), e2.autoplay.timeout = ee.nextTick(function() {
      e2.params.autoplay.reverseDirection ? e2.params.loop ? (e2.loopFix(), e2.slidePrev(e2.params.speed, true, true), e2.emit("autoplay")) : e2.isBeginning ? e2.params.autoplay.stopOnLastSlide ? e2.autoplay.stop() : (e2.slideTo(e2.slides.length - 1, e2.params.speed, true, true), e2.emit("autoplay")) : (e2.slidePrev(e2.params.speed, true, true), e2.emit("autoplay")) : e2.params.loop ? (e2.loopFix(), e2.slideNext(e2.params.speed, true, true), e2.emit("autoplay")) : e2.isEnd ? e2.params.autoplay.stopOnLastSlide ? e2.autoplay.stop() : (e2.slideTo(0, e2.params.speed, true, true), e2.emit("autoplay")) : (e2.slideNext(e2.params.speed, true, true), e2.emit("autoplay"));
    }, a2);
  }, start: function() {
    var e2 = this;
    return void 0 === e2.autoplay.timeout && (!e2.autoplay.running && (e2.autoplay.running = true, e2.emit("autoplayStart"), e2.autoplay.run(), true));
  }, stop: function() {
    var e2 = this;
    return !!e2.autoplay.running && (void 0 !== e2.autoplay.timeout && (e2.autoplay.timeout && (clearTimeout(e2.autoplay.timeout), e2.autoplay.timeout = void 0), e2.autoplay.running = false, e2.emit("autoplayStop"), true));
  }, pause: function(e2) {
    var t2 = this;
    t2.autoplay.running && (t2.autoplay.paused || (t2.autoplay.timeout && clearTimeout(t2.autoplay.timeout), t2.autoplay.paused = true, 0 !== e2 && t2.params.autoplay.waitForTransition ? (t2.$wrapperEl[0].addEventListener("transitionend", t2.autoplay.onTransitionEnd), t2.$wrapperEl[0].addEventListener("webkitTransitionEnd", t2.autoplay.onTransitionEnd)) : (t2.autoplay.paused = false, t2.autoplay.run())));
  } }, j = { setTranslate: function() {
    for (var e2 = this, t2 = e2.slides, a2 = 0; a2 < t2.length; a2 += 1) {
      var i2 = e2.slides.eq(a2), s2 = -i2[0].swiperSlideOffset;
      e2.params.virtualTranslate || (s2 -= e2.translate);
      var r2 = 0;
      e2.isHorizontal() || (r2 = s2, s2 = 0);
      var n2 = e2.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i2[0].progress), 0) : 1 + Math.min(Math.max(i2[0].progress, -1), 0);
      i2.css({ opacity: n2 }).transform("translate3d(" + s2 + "px, " + r2 + "px, 0px)");
    }
  }, setTransition: function(e2) {
    var a2 = this, t2 = a2.slides, i2 = a2.$wrapperEl;
    if (t2.transition(e2), a2.params.virtualTranslate && 0 !== e2) {
      var s2 = false;
      t2.transitionEnd(function() {
        if (!s2 && a2 && !a2.destroyed) {
          s2 = true, a2.animating = false;
          for (var e3 = ["webkitTransitionEnd", "transitionend"], t3 = 0; t3 < e3.length; t3 += 1)
            i2.trigger(e3[t3]);
        }
      });
    }
  } }, U = { setTranslate: function() {
    var e2, t2 = this, a2 = t2.$el, i2 = t2.$wrapperEl, s2 = t2.slides, r2 = t2.width, n2 = t2.height, o2 = t2.rtlTranslate, l2 = t2.size, d2 = t2.params.cubeEffect, p2 = t2.isHorizontal(), c2 = t2.virtual && t2.params.virtual.enabled, u2 = 0;
    d2.shadow && (p2 ? (0 === (e2 = i2.find(".swiper-cube-shadow")).length && (e2 = L('<div class="swiper-cube-shadow"></div>'), i2.append(e2)), e2.css({ height: r2 + "px" })) : 0 === (e2 = a2.find(".swiper-cube-shadow")).length && (e2 = L('<div class="swiper-cube-shadow"></div>'), a2.append(e2)));
    for (var h2 = 0; h2 < s2.length; h2 += 1) {
      var v2 = s2.eq(h2), f2 = h2;
      c2 && (f2 = parseInt(v2.attr("data-swiper-slide-index"), 10));
      var m2 = 90 * f2, g2 = Math.floor(m2 / 360);
      o2 && (m2 = -m2, g2 = Math.floor(-m2 / 360));
      var b2 = Math.max(Math.min(v2[0].progress, 1), -1), w2 = 0, y2 = 0, x2 = 0;
      f2 % 4 == 0 ? (w2 = 4 * -g2 * l2, x2 = 0) : (f2 - 1) % 4 == 0 ? (w2 = 0, x2 = 4 * -g2 * l2) : (f2 - 2) % 4 == 0 ? (w2 = l2 + 4 * g2 * l2, x2 = l2) : (f2 - 3) % 4 == 0 && (w2 = -l2, x2 = 3 * l2 + 4 * l2 * g2), o2 && (w2 = -w2), p2 || (y2 = w2, w2 = 0);
      var T2 = "rotateX(" + (p2 ? 0 : -m2) + "deg) rotateY(" + (p2 ? m2 : 0) + "deg) translate3d(" + w2 + "px, " + y2 + "px, " + x2 + "px)";
      if (b2 <= 1 && -1 < b2 && (u2 = 90 * f2 + 90 * b2, o2 && (u2 = 90 * -f2 - 90 * b2)), v2.transform(T2), d2.slideShadows) {
        var E2 = p2 ? v2.find(".swiper-slide-shadow-left") : v2.find(".swiper-slide-shadow-top"), S2 = p2 ? v2.find(".swiper-slide-shadow-right") : v2.find(".swiper-slide-shadow-bottom");
        0 === E2.length && (E2 = L('<div class="swiper-slide-shadow-' + (p2 ? "left" : "top") + '"></div>'), v2.append(E2)), 0 === S2.length && (S2 = L('<div class="swiper-slide-shadow-' + (p2 ? "right" : "bottom") + '"></div>'), v2.append(S2)), E2.length && (E2[0].style.opacity = Math.max(-b2, 0)), S2.length && (S2[0].style.opacity = Math.max(b2, 0));
      }
    }
    if (i2.css({ "-webkit-transform-origin": "50% 50% -" + l2 / 2 + "px", "-moz-transform-origin": "50% 50% -" + l2 / 2 + "px", "-ms-transform-origin": "50% 50% -" + l2 / 2 + "px", "transform-origin": "50% 50% -" + l2 / 2 + "px" }), d2.shadow)
      if (p2)
        e2.transform("translate3d(0px, " + (r2 / 2 + d2.shadowOffset) + "px, " + -r2 / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d2.shadowScale + ")");
      else {
        var C2 = Math.abs(u2) - 90 * Math.floor(Math.abs(u2) / 90), M2 = 1.5 - (Math.sin(2 * C2 * Math.PI / 360) / 2 + Math.cos(2 * C2 * Math.PI / 360) / 2), z2 = d2.shadowScale, P2 = d2.shadowScale / M2, k2 = d2.shadowOffset;
        e2.transform("scale3d(" + z2 + ", 1, " + P2 + ") translate3d(0px, " + (n2 / 2 + k2) + "px, " + -n2 / 2 / P2 + "px) rotateX(-90deg)");
      }
    var $2 = I.isSafari || I.isUiWebView ? -l2 / 2 : 0;
    i2.transform("translate3d(0px,0," + $2 + "px) rotateX(" + (t2.isHorizontal() ? 0 : u2) + "deg) rotateY(" + (t2.isHorizontal() ? -u2 : 0) + "deg)");
  }, setTransition: function(e2) {
    var t2 = this.$el;
    this.slides.transition(e2).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e2), this.params.cubeEffect.shadow && !this.isHorizontal() && t2.find(".swiper-cube-shadow").transition(e2);
  } }, K = { setTranslate: function() {
    for (var e2 = this, t2 = e2.slides, a2 = e2.rtlTranslate, i2 = 0; i2 < t2.length; i2 += 1) {
      var s2 = t2.eq(i2), r2 = s2[0].progress;
      e2.params.flipEffect.limitRotation && (r2 = Math.max(Math.min(s2[0].progress, 1), -1));
      var n2 = -180 * r2, o2 = 0, l2 = -s2[0].swiperSlideOffset, d2 = 0;
      if (e2.isHorizontal() ? a2 && (n2 = -n2) : (d2 = l2, o2 = -n2, n2 = l2 = 0), s2[0].style.zIndex = -Math.abs(Math.round(r2)) + t2.length, e2.params.flipEffect.slideShadows) {
        var p2 = e2.isHorizontal() ? s2.find(".swiper-slide-shadow-left") : s2.find(".swiper-slide-shadow-top"), c2 = e2.isHorizontal() ? s2.find(".swiper-slide-shadow-right") : s2.find(".swiper-slide-shadow-bottom");
        0 === p2.length && (p2 = L('<div class="swiper-slide-shadow-' + (e2.isHorizontal() ? "left" : "top") + '"></div>'), s2.append(p2)), 0 === c2.length && (c2 = L('<div class="swiper-slide-shadow-' + (e2.isHorizontal() ? "right" : "bottom") + '"></div>'), s2.append(c2)), p2.length && (p2[0].style.opacity = Math.max(-r2, 0)), c2.length && (c2[0].style.opacity = Math.max(r2, 0));
      }
      s2.transform("translate3d(" + l2 + "px, " + d2 + "px, 0px) rotateX(" + o2 + "deg) rotateY(" + n2 + "deg)");
    }
  }, setTransition: function(e2) {
    var a2 = this, t2 = a2.slides, i2 = a2.activeIndex, s2 = a2.$wrapperEl;
    if (t2.transition(e2).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e2), a2.params.virtualTranslate && 0 !== e2) {
      var r2 = false;
      t2.eq(i2).transitionEnd(function() {
        if (!r2 && a2 && !a2.destroyed) {
          r2 = true, a2.animating = false;
          for (var e3 = ["webkitTransitionEnd", "transitionend"], t3 = 0; t3 < e3.length; t3 += 1)
            s2.trigger(e3[t3]);
        }
      });
    }
  } }, _ = { setTranslate: function() {
    for (var e2 = this, t2 = e2.width, a2 = e2.height, i2 = e2.slides, s2 = e2.$wrapperEl, r2 = e2.slidesSizesGrid, n2 = e2.params.coverflowEffect, o2 = e2.isHorizontal(), l2 = e2.translate, d2 = o2 ? t2 / 2 - l2 : a2 / 2 - l2, p2 = o2 ? n2.rotate : -n2.rotate, c2 = n2.depth, u2 = 0, h2 = i2.length; u2 < h2; u2 += 1) {
      var v2 = i2.eq(u2), f2 = r2[u2], m2 = (d2 - v2[0].swiperSlideOffset - f2 / 2) / f2 * n2.modifier, g2 = o2 ? p2 * m2 : 0, b2 = o2 ? 0 : p2 * m2, w2 = -c2 * Math.abs(m2), y2 = o2 ? 0 : n2.stretch * m2, x2 = o2 ? n2.stretch * m2 : 0;
      Math.abs(x2) < 1e-3 && (x2 = 0), Math.abs(y2) < 1e-3 && (y2 = 0), Math.abs(w2) < 1e-3 && (w2 = 0), Math.abs(g2) < 1e-3 && (g2 = 0), Math.abs(b2) < 1e-3 && (b2 = 0);
      var T2 = "translate3d(" + x2 + "px," + y2 + "px," + w2 + "px)  rotateX(" + b2 + "deg) rotateY(" + g2 + "deg)";
      if (v2.transform(T2), v2[0].style.zIndex = 1 - Math.abs(Math.round(m2)), n2.slideShadows) {
        var E2 = o2 ? v2.find(".swiper-slide-shadow-left") : v2.find(".swiper-slide-shadow-top"), S2 = o2 ? v2.find(".swiper-slide-shadow-right") : v2.find(".swiper-slide-shadow-bottom");
        0 === E2.length && (E2 = L('<div class="swiper-slide-shadow-' + (o2 ? "left" : "top") + '"></div>'), v2.append(E2)), 0 === S2.length && (S2 = L('<div class="swiper-slide-shadow-' + (o2 ? "right" : "bottom") + '"></div>'), v2.append(S2)), E2.length && (E2[0].style.opacity = 0 < m2 ? m2 : 0), S2.length && (S2[0].style.opacity = 0 < -m2 ? -m2 : 0);
      }
    }
    (te.pointerEvents || te.prefixedPointerEvents) && (s2[0].style.perspectiveOrigin = d2 + "px 50%");
  }, setTransition: function(e2) {
    this.slides.transition(e2).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e2);
  } }, Z = { init: function() {
    var e2 = this, t2 = e2.params.thumbs, a2 = e2.constructor;
    t2.swiper instanceof a2 ? (e2.thumbs.swiper = t2.swiper, ee.extend(e2.thumbs.swiper.originalParams, { watchSlidesProgress: true, slideToClickedSlide: false }), ee.extend(e2.thumbs.swiper.params, { watchSlidesProgress: true, slideToClickedSlide: false })) : ee.isObject(t2.swiper) && (e2.thumbs.swiper = new a2(ee.extend({}, t2.swiper, { watchSlidesVisibility: true, watchSlidesProgress: true, slideToClickedSlide: false })), e2.thumbs.swiperCreated = true), e2.thumbs.swiper.$el.addClass(e2.params.thumbs.thumbsContainerClass), e2.thumbs.swiper.on("tap", e2.thumbs.onThumbClick);
  }, onThumbClick: function() {
    var e2 = this, t2 = e2.thumbs.swiper;
    if (t2) {
      var a2 = t2.clickedIndex, i2 = t2.clickedSlide;
      if (!(i2 && L(i2).hasClass(e2.params.thumbs.slideThumbActiveClass) || null == a2)) {
        var s2;
        if (s2 = t2.params.loop ? parseInt(L(t2.clickedSlide).attr("data-swiper-slide-index"), 10) : a2, e2.params.loop) {
          var r2 = e2.activeIndex;
          e2.slides.eq(r2).hasClass(e2.params.slideDuplicateClass) && (e2.loopFix(), e2._clientLeft = e2.$wrapperEl[0].clientLeft, r2 = e2.activeIndex);
          var n2 = e2.slides.eq(r2).prevAll('[data-swiper-slide-index="' + s2 + '"]').eq(0).index(), o2 = e2.slides.eq(r2).nextAll('[data-swiper-slide-index="' + s2 + '"]').eq(0).index();
          s2 = void 0 === n2 ? o2 : void 0 === o2 ? n2 : o2 - r2 < r2 - n2 ? o2 : n2;
        }
        e2.slideTo(s2);
      }
    }
  }, update: function(e2) {
    var t2 = this, a2 = t2.thumbs.swiper;
    if (a2) {
      var i2 = "auto" === a2.params.slidesPerView ? a2.slidesPerViewDynamic() : a2.params.slidesPerView;
      if (t2.realIndex !== a2.realIndex) {
        var s2, r2 = a2.activeIndex;
        if (a2.params.loop) {
          a2.slides.eq(r2).hasClass(a2.params.slideDuplicateClass) && (a2.loopFix(), a2._clientLeft = a2.$wrapperEl[0].clientLeft, r2 = a2.activeIndex);
          var n2 = a2.slides.eq(r2).prevAll('[data-swiper-slide-index="' + t2.realIndex + '"]').eq(0).index(), o2 = a2.slides.eq(r2).nextAll('[data-swiper-slide-index="' + t2.realIndex + '"]').eq(0).index();
          s2 = void 0 === n2 ? o2 : void 0 === o2 ? n2 : o2 - r2 == r2 - n2 ? r2 : o2 - r2 < r2 - n2 ? o2 : n2;
        } else
          s2 = t2.realIndex;
        a2.visibleSlidesIndexes.indexOf(s2) < 0 && (a2.params.centeredSlides ? s2 = r2 < s2 ? s2 - Math.floor(i2 / 2) + 1 : s2 + Math.floor(i2 / 2) - 1 : r2 < s2 && (s2 = s2 - i2 + 1), a2.slideTo(s2, e2 ? 0 : void 0));
      }
      var l2 = 1, d2 = t2.params.thumbs.slideThumbActiveClass;
      if (1 < t2.params.slidesPerView && !t2.params.centeredSlides && (l2 = t2.params.slidesPerView), a2.slides.removeClass(d2), a2.params.loop)
        for (var p2 = 0; p2 < l2; p2 += 1)
          a2.$wrapperEl.children('[data-swiper-slide-index="' + (t2.realIndex + p2) + '"]').addClass(d2);
      else
        for (var c2 = 0; c2 < l2; c2 += 1)
          a2.slides.eq(t2.realIndex + c2).addClass(d2);
    }
  } }, Q = [E, S, C, M, P, $, O, { name: "mousewheel", params: { mousewheel: { enabled: false, releaseOnEdges: false, invert: false, forceToAxis: false, sensitivity: 1, eventsTarged: "container" } }, create: function() {
    var e2 = this;
    ee.extend(e2, { mousewheel: { enabled: false, enable: A.enable.bind(e2), disable: A.disable.bind(e2), handle: A.handle.bind(e2), handleMouseEnter: A.handleMouseEnter.bind(e2), handleMouseLeave: A.handleMouseLeave.bind(e2), lastScrollTime: ee.now() } });
  }, on: { init: function() {
    this.params.mousewheel.enabled && this.mousewheel.enable();
  }, destroy: function() {
    this.mousewheel.enabled && this.mousewheel.disable();
  } } }, { name: "navigation", params: { navigation: { nextEl: null, prevEl: null, hideOnClick: false, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }, create: function() {
    var e2 = this;
    ee.extend(e2, { navigation: { init: H.init.bind(e2), update: H.update.bind(e2), destroy: H.destroy.bind(e2), onNextClick: H.onNextClick.bind(e2), onPrevClick: H.onPrevClick.bind(e2) } });
  }, on: { init: function() {
    this.navigation.init(), this.navigation.update();
  }, toEdge: function() {
    this.navigation.update();
  }, fromEdge: function() {
    this.navigation.update();
  }, destroy: function() {
    this.navigation.destroy();
  }, click: function(e2) {
    var t2, a2 = this, i2 = a2.navigation, s2 = i2.$nextEl, r2 = i2.$prevEl;
    !a2.params.navigation.hideOnClick || L(e2.target).is(r2) || L(e2.target).is(s2) || (s2 ? t2 = s2.hasClass(a2.params.navigation.hiddenClass) : r2 && (t2 = r2.hasClass(a2.params.navigation.hiddenClass)), true === t2 ? a2.emit("navigationShow", a2) : a2.emit("navigationHide", a2), s2 && s2.toggleClass(a2.params.navigation.hiddenClass), r2 && r2.toggleClass(a2.params.navigation.hiddenClass));
  } } }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: false, hideOnClick: false, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: false, type: "bullets", dynamicBullets: false, dynamicMainBullets: 1, formatFractionCurrent: function(e2) {
    return e2;
  }, formatFractionTotal: function(e2) {
    return e2;
  }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function() {
    var e2 = this;
    ee.extend(e2, { pagination: { init: N.init.bind(e2), render: N.render.bind(e2), update: N.update.bind(e2), destroy: N.destroy.bind(e2), dynamicBulletIndex: 0 } });
  }, on: { init: function() {
    this.pagination.init(), this.pagination.render(), this.pagination.update();
  }, activeIndexChange: function() {
    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
  }, snapIndexChange: function() {
    this.params.loop || this.pagination.update();
  }, slidesLengthChange: function() {
    this.params.loop && (this.pagination.render(), this.pagination.update());
  }, snapGridLengthChange: function() {
    this.params.loop || (this.pagination.render(), this.pagination.update());
  }, destroy: function() {
    this.pagination.destroy();
  }, click: function(e2) {
    var t2 = this;
    t2.params.pagination.el && t2.params.pagination.hideOnClick && 0 < t2.pagination.$el.length && !L(e2.target).hasClass(t2.params.pagination.bulletClass) && (true === t2.pagination.$el.hasClass(t2.params.pagination.hiddenClass) ? t2.emit("paginationShow", t2) : t2.emit("paginationHide", t2), t2.pagination.$el.toggleClass(t2.params.pagination.hiddenClass));
  } } }, { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: false, draggable: false, snapOnRelease: true, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function() {
    var e2 = this;
    ee.extend(e2, { scrollbar: { init: G.init.bind(e2), destroy: G.destroy.bind(e2), updateSize: G.updateSize.bind(e2), setTranslate: G.setTranslate.bind(e2), setTransition: G.setTransition.bind(e2), enableDraggable: G.enableDraggable.bind(e2), disableDraggable: G.disableDraggable.bind(e2), setDragPosition: G.setDragPosition.bind(e2), onDragStart: G.onDragStart.bind(e2), onDragMove: G.onDragMove.bind(e2), onDragEnd: G.onDragEnd.bind(e2), isTouched: false, timeout: null, dragTimeout: null } });
  }, on: { init: function() {
    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
  }, update: function() {
    this.scrollbar.updateSize();
  }, resize: function() {
    this.scrollbar.updateSize();
  }, observerUpdate: function() {
    this.scrollbar.updateSize();
  }, setTranslate: function() {
    this.scrollbar.setTranslate();
  }, setTransition: function(e2) {
    this.scrollbar.setTransition(e2);
  }, destroy: function() {
    this.scrollbar.destroy();
  } } }, { name: "parallax", params: { parallax: { enabled: false } }, create: function() {
    ee.extend(this, { parallax: { setTransform: B.setTransform.bind(this), setTranslate: B.setTranslate.bind(this), setTransition: B.setTransition.bind(this) } });
  }, on: { beforeInit: function() {
    this.params.parallax.enabled && (this.params.watchSlidesProgress = true, this.originalParams.watchSlidesProgress = true);
  }, init: function() {
    this.params.parallax.enabled && this.parallax.setTranslate();
  }, setTranslate: function() {
    this.params.parallax.enabled && this.parallax.setTranslate();
  }, setTransition: function(e2) {
    this.params.parallax.enabled && this.parallax.setTransition(e2);
  } } }, { name: "zoom", params: { zoom: { enabled: false, maxRatio: 3, minRatio: 1, toggle: true, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }, create: function() {
    var i2 = this, t2 = { enabled: false, scale: 1, currentScale: 1, isScaling: false, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } };
    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e2) {
      t2[e2] = X[e2].bind(i2);
    }), ee.extend(i2, { zoom: t2 });
    var s2 = 1;
    Object.defineProperty(i2.zoom, "scale", { get: function() {
      return s2;
    }, set: function(e2) {
      if (s2 !== e2) {
        var t3 = i2.zoom.gesture.$imageEl ? i2.zoom.gesture.$imageEl[0] : void 0, a2 = i2.zoom.gesture.$slideEl ? i2.zoom.gesture.$slideEl[0] : void 0;
        i2.emit("zoomChange", e2, t3, a2);
      }
      s2 = e2;
    } });
  }, on: { init: function() {
    this.params.zoom.enabled && this.zoom.enable();
  }, destroy: function() {
    this.zoom.disable();
  }, touchStart: function(e2) {
    this.zoom.enabled && this.zoom.onTouchStart(e2);
  }, touchEnd: function(e2) {
    this.zoom.enabled && this.zoom.onTouchEnd(e2);
  }, doubleTap: function(e2) {
    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e2);
  }, transitionEnd: function() {
    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
  } } }, { name: "lazy", params: { lazy: { enabled: false, loadPrevNext: false, loadPrevNextAmount: 1, loadOnTransitionStart: false, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function() {
    ee.extend(this, { lazy: { initialImageLoaded: false, load: Y.load.bind(this), loadInSlide: Y.loadInSlide.bind(this) } });
  }, on: { beforeInit: function() {
    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = false);
  }, init: function() {
    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
  }, scroll: function() {
    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
  }, resize: function() {
    this.params.lazy.enabled && this.lazy.load();
  }, scrollbarDragMove: function() {
    this.params.lazy.enabled && this.lazy.load();
  }, transitionStart: function() {
    var e2 = this;
    e2.params.lazy.enabled && (e2.params.lazy.loadOnTransitionStart || !e2.params.lazy.loadOnTransitionStart && !e2.lazy.initialImageLoaded) && e2.lazy.load();
  }, transitionEnd: function() {
    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
  } } }, { name: "controller", params: { controller: { control: void 0, inverse: false, by: "slide" } }, create: function() {
    var e2 = this;
    ee.extend(e2, { controller: { control: e2.params.controller.control, getInterpolateFunction: V.getInterpolateFunction.bind(e2), setTranslate: V.setTranslate.bind(e2), setTransition: V.setTransition.bind(e2) } });
  }, on: { update: function() {
    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
  }, resize: function() {
    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
  }, observerUpdate: function() {
    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
  }, setTranslate: function(e2, t2) {
    this.controller.control && this.controller.setTranslate(e2, t2);
  }, setTransition: function(e2, t2) {
    this.controller.control && this.controller.setTransition(e2, t2);
  } } }, { name: "a11y", params: { a11y: { enabled: true, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } }, create: function() {
    var t2 = this;
    ee.extend(t2, { a11y: { liveRegion: L('<span class="' + t2.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(F).forEach(function(e2) {
      t2.a11y[e2] = F[e2].bind(t2);
    });
  }, on: { init: function() {
    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
  }, toEdge: function() {
    this.params.a11y.enabled && this.a11y.updateNavigation();
  }, fromEdge: function() {
    this.params.a11y.enabled && this.a11y.updateNavigation();
  }, paginationUpdate: function() {
    this.params.a11y.enabled && this.a11y.updatePagination();
  }, destroy: function() {
    this.params.a11y.enabled && this.a11y.destroy();
  } } }, { name: "history", params: { history: { enabled: false, replaceState: false, key: "slides" } }, create: function() {
    var e2 = this;
    ee.extend(e2, { history: { init: R.init.bind(e2), setHistory: R.setHistory.bind(e2), setHistoryPopState: R.setHistoryPopState.bind(e2), scrollToSlide: R.scrollToSlide.bind(e2), destroy: R.destroy.bind(e2) } });
  }, on: { init: function() {
    this.params.history.enabled && this.history.init();
  }, destroy: function() {
    this.params.history.enabled && this.history.destroy();
  }, transitionEnd: function() {
    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
  } } }, { name: "hash-navigation", params: { hashNavigation: { enabled: false, replaceState: false, watchState: false } }, create: function() {
    var e2 = this;
    ee.extend(e2, { hashNavigation: { initialized: false, init: q.init.bind(e2), destroy: q.destroy.bind(e2), setHash: q.setHash.bind(e2), onHashCange: q.onHashCange.bind(e2) } });
  }, on: { init: function() {
    this.params.hashNavigation.enabled && this.hashNavigation.init();
  }, destroy: function() {
    this.params.hashNavigation.enabled && this.hashNavigation.destroy();
  }, transitionEnd: function() {
    this.hashNavigation.initialized && this.hashNavigation.setHash();
  } } }, { name: "autoplay", params: { autoplay: { enabled: false, delay: 3e3, waitForTransition: true, disableOnInteraction: true, stopOnLastSlide: false, reverseDirection: false } }, create: function() {
    var t2 = this;
    ee.extend(t2, { autoplay: { running: false, paused: false, run: W.run.bind(t2), start: W.start.bind(t2), stop: W.stop.bind(t2), pause: W.pause.bind(t2), onTransitionEnd: function(e2) {
      t2 && !t2.destroyed && t2.$wrapperEl && e2.target === this && (t2.$wrapperEl[0].removeEventListener("transitionend", t2.autoplay.onTransitionEnd), t2.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t2.autoplay.onTransitionEnd), t2.autoplay.paused = false, t2.autoplay.running ? t2.autoplay.run() : t2.autoplay.stop());
    } } });
  }, on: { init: function() {
    this.params.autoplay.enabled && this.autoplay.start();
  }, beforeTransitionStart: function(e2, t2) {
    this.autoplay.running && (t2 || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e2) : this.autoplay.stop());
  }, sliderFirstMove: function() {
    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
  }, destroy: function() {
    this.autoplay.running && this.autoplay.stop();
  } } }, { name: "effect-fade", params: { fadeEffect: { crossFade: false } }, create: function() {
    ee.extend(this, { fadeEffect: { setTranslate: j.setTranslate.bind(this), setTransition: j.setTransition.bind(this) } });
  }, on: { beforeInit: function() {
    var e2 = this;
    if ("fade" === e2.params.effect) {
      e2.classNames.push(e2.params.containerModifierClass + "fade");
      var t2 = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: true };
      ee.extend(e2.params, t2), ee.extend(e2.originalParams, t2);
    }
  }, setTranslate: function() {
    "fade" === this.params.effect && this.fadeEffect.setTranslate();
  }, setTransition: function(e2) {
    "fade" === this.params.effect && this.fadeEffect.setTransition(e2);
  } } }, { name: "effect-cube", params: { cubeEffect: { slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94 } }, create: function() {
    ee.extend(this, { cubeEffect: { setTranslate: U.setTranslate.bind(this), setTransition: U.setTransition.bind(this) } });
  }, on: { beforeInit: function() {
    var e2 = this;
    if ("cube" === e2.params.effect) {
      e2.classNames.push(e2.params.containerModifierClass + "cube"), e2.classNames.push(e2.params.containerModifierClass + "3d");
      var t2 = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: true, resistanceRatio: 0, spaceBetween: 0, centeredSlides: false, virtualTranslate: true };
      ee.extend(e2.params, t2), ee.extend(e2.originalParams, t2);
    }
  }, setTranslate: function() {
    "cube" === this.params.effect && this.cubeEffect.setTranslate();
  }, setTransition: function(e2) {
    "cube" === this.params.effect && this.cubeEffect.setTransition(e2);
  } } }, { name: "effect-flip", params: { flipEffect: { slideShadows: true, limitRotation: true } }, create: function() {
    ee.extend(this, { flipEffect: { setTranslate: K.setTranslate.bind(this), setTransition: K.setTransition.bind(this) } });
  }, on: { beforeInit: function() {
    var e2 = this;
    if ("flip" === e2.params.effect) {
      e2.classNames.push(e2.params.containerModifierClass + "flip"), e2.classNames.push(e2.params.containerModifierClass + "3d");
      var t2 = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: true };
      ee.extend(e2.params, t2), ee.extend(e2.originalParams, t2);
    }
  }, setTranslate: function() {
    "flip" === this.params.effect && this.flipEffect.setTranslate();
  }, setTransition: function(e2) {
    "flip" === this.params.effect && this.flipEffect.setTransition(e2);
  } } }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true } }, create: function() {
    ee.extend(this, { coverflowEffect: { setTranslate: _.setTranslate.bind(this), setTransition: _.setTransition.bind(this) } });
  }, on: { beforeInit: function() {
    var e2 = this;
    "coverflow" === e2.params.effect && (e2.classNames.push(e2.params.containerModifierClass + "coverflow"), e2.classNames.push(e2.params.containerModifierClass + "3d"), e2.params.watchSlidesProgress = true, e2.originalParams.watchSlidesProgress = true);
  }, setTranslate: function() {
    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
  }, setTransition: function(e2) {
    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e2);
  } } }, { name: "thumbs", params: { thumbs: { swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } }, create: function() {
    ee.extend(this, { thumbs: { swiper: null, init: Z.init.bind(this), update: Z.update.bind(this), onThumbClick: Z.onThumbClick.bind(this) } });
  }, on: { beforeInit: function() {
    var e2 = this.params.thumbs;
    e2 && e2.swiper && (this.thumbs.init(), this.thumbs.update(true));
  }, slideChange: function() {
    this.thumbs.swiper && this.thumbs.update();
  }, update: function() {
    this.thumbs.swiper && this.thumbs.update();
  }, resize: function() {
    this.thumbs.swiper && this.thumbs.update();
  }, observerUpdate: function() {
    this.thumbs.swiper && this.thumbs.update();
  }, setTransition: function(e2) {
    var t2 = this.thumbs.swiper;
    t2 && t2.setTransition(e2);
  }, beforeDestroy: function() {
    var e2 = this.thumbs.swiper;
    e2 && this.thumbs.swiperCreated && e2 && e2.destroy();
  } } }];
  return void 0 === T.use && (T.use = T.Class.use, T.installModule = T.Class.installModule), T.use(Q), T;
});
