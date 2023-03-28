!function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery);
}(function(a) {
  function b(b2) {
    var g2 = b2 || window.event, h2 = i.call(arguments, 1), j2 = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
    if (b2 = a.event.fix(g2), b2.type = "mousewheel", "detail" in g2 && (m = -1 * g2.detail), "wheelDelta" in g2 && (m = g2.wheelDelta), "wheelDeltaY" in g2 && (m = g2.wheelDeltaY), "wheelDeltaX" in g2 && (l = -1 * g2.wheelDeltaX), "axis" in g2 && g2.axis === g2.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j2 = 0 === m ? l : m, "deltaY" in g2 && (m = -1 * g2.deltaY, j2 = m), "deltaX" in g2 && (l = g2.deltaX, 0 === m && (j2 = -1 * l)), 0 !== m || 0 !== l) {
      if (1 === g2.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");
        j2 *= q, m *= q, l *= q;
      } else if (2 === g2.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");
        j2 *= r, m *= r, l *= r;
      }
      if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g2, n) && (f /= 40)), d(g2, n) && (j2 /= 40, l /= 40, m /= 40), j2 = Math[j2 >= 1 ? "floor" : "ceil"](j2 / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
        var s = this.getBoundingClientRect();
        o = b2.clientX - s.left, p = b2.clientY - s.top;
      }
      return b2.deltaX = l, b2.deltaY = m, b2.deltaFactor = f, b2.offsetX = o, b2.offsetY = p, b2.deltaMode = 0, h2.unshift(b2, j2, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h2);
    }
  }
  function c() {
    f = null;
  }
  function d(a2, b2) {
    return k.settings.adjustOldDeltas && "mousewheel" === a2.type && b2 % 120 === 0;
  }
  var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
  if (a.event.fixHooks)
    for (var j = g.length; j; )
      a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  var k = a.event.special.mousewheel = { version: "3.1.12", setup: function() {
    if (this.addEventListener)
      for (var c2 = h.length; c2; )
        this.addEventListener(h[--c2], b, false);
    else
      this.onmousewheel = b;
    a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
  }, teardown: function() {
    if (this.removeEventListener)
      for (var c2 = h.length; c2; )
        this.removeEventListener(h[--c2], b, false);
    else
      this.onmousewheel = null;
    a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
  }, getLineHeight: function(b2) {
    var c2 = a(b2), d2 = c2["offsetParent" in a.fn ? "offsetParent" : "parent"]();
    return d2.length || (d2 = a("body")), parseInt(d2.css("fontSize"), 10) || parseInt(c2.css("fontSize"), 10) || 16;
  }, getPageHeight: function(b2) {
    return a(b2).height();
  }, settings: { adjustOldDeltas: true, normalizeOffset: true } };
  a.fn.extend({ mousewheel: function(a2) {
    return a2 ? this.bind("mousewheel", a2) : this.trigger("mousewheel");
  }, unmousewheel: function(a2) {
    return this.unbind("mousewheel", a2);
  } });
});
!function(e) {
  "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document);
}(function(e) {
  !function(t) {
    var o = "function" == typeof define && define.amd, a = "undefined" != typeof module && module.exports, n = "https:" == document.location.protocol ? "https:" : "http:", i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
    o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t();
  }(function() {
    var t, o = "mCustomScrollbar", a = "mCS", n = ".mCustomScrollbar", i = { setTop: 0, setLeft: 0, axis: "y", scrollbarPosition: "inside", scrollInertia: 950, autoDraggerLength: true, alwaysShowScrollbar: 0, snapOffset: 0, mouseWheel: { enable: true, scrollAmount: "auto", axis: "y", deltaFactor: "auto", disableOver: ["select", "option", "keygen", "datalist", "textarea"] }, scrollButtons: { scrollType: "stepless", scrollAmount: "auto" }, keyboard: { enable: true, scrollType: "stepless", scrollAmount: "auto" }, contentTouchScroll: 25, advanced: { autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']", updateOnContentResize: true, updateOnImageLoad: true, autoUpdateTimeout: 60 }, theme: "light", callbacks: { onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: true } }, r = 0, l = {}, s = window.attachEvent && !window.addEventListener ? 1 : 0, c = false, d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], u = { init: function(t2) {
      var t2 = e.extend(true, {}, i, t2), o2 = f.call(this);
      if (t2.live) {
        var s2 = t2.liveSelector || this.selector || n, c2 = e(s2);
        if ("off" === t2.live)
          return void m(s2);
        l[s2] = setTimeout(function() {
          c2.mCustomScrollbar(t2), "once" === t2.live && c2.length && m(s2);
        }, 500);
      } else
        m(s2);
      return t2.setWidth = t2.set_width ? t2.set_width : t2.setWidth, t2.setHeight = t2.set_height ? t2.set_height : t2.setHeight, t2.axis = t2.horizontalScroll ? "x" : p(t2.axis), t2.scrollInertia = t2.scrollInertia > 0 && t2.scrollInertia < 17 ? 17 : t2.scrollInertia, "object" != typeof t2.mouseWheel && 1 == t2.mouseWheel && (t2.mouseWheel = { enable: true, scrollAmount: "auto", axis: "y", preventDefault: false, deltaFactor: "auto", normalizeDelta: false, invert: false }), t2.mouseWheel.scrollAmount = t2.mouseWheelPixels ? t2.mouseWheelPixels : t2.mouseWheel.scrollAmount, t2.mouseWheel.normalizeDelta = t2.advanced.normalizeMouseWheelDelta ? t2.advanced.normalizeMouseWheelDelta : t2.mouseWheel.normalizeDelta, t2.scrollButtons.scrollType = g(t2.scrollButtons.scrollType), h(t2), e(o2).each(function() {
        var o3 = e(this);
        if (!o3.data(a)) {
          o3.data(a, { idx: ++r, opt: t2, scrollRatio: { y: null, x: null }, overflowed: null, contentReset: { y: null, x: null }, bindEvents: false, tweenRunning: false, sequential: {}, langDir: o3.css("direction"), cbOffsets: null, trigger: null });
          var n2 = o3.data(a), i2 = n2.opt, l2 = o3.data("mcs-axis"), s3 = o3.data("mcs-scrollbar-position"), c3 = o3.data("mcs-theme");
          l2 && (i2.axis = l2), s3 && (i2.scrollbarPosition = s3), c3 && (i2.theme = c3, h(i2)), v.call(this), e("#mCSB_" + n2.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o3);
        }
      });
    }, update: function(t2, o2) {
      var n2 = t2 || f.call(this);
      return e(n2).each(function() {
        var t3 = e(this);
        if (t3.data(a)) {
          var n3 = t3.data(a), i2 = n3.opt, r2 = e("#mCSB_" + n3.idx + "_container"), l2 = [e("#mCSB_" + n3.idx + "_dragger_vertical"), e("#mCSB_" + n3.idx + "_dragger_horizontal")];
          if (!r2.length)
            return;
          n3.tweenRunning && V(t3), t3.hasClass(d[3]) && t3.removeClass(d[3]), t3.hasClass(d[4]) && t3.removeClass(d[4]), S.call(this), _.call(this), "y" === i2.axis || i2.advanced.autoExpandHorizontalScroll || r2.css("width", x(r2.children())), n3.overflowed = B.call(this), O.call(this), i2.autoDraggerLength && b.call(this), C.call(this), k.call(this);
          var s2 = [Math.abs(r2[0].offsetTop), Math.abs(r2[0].offsetLeft)];
          "x" !== i2.axis && (n3.overflowed[0] ? l2[0].height() > l2[0].parent().height() ? T.call(this) : (Q(t3, s2[0].toString(), { dir: "y", dur: 0, overwrite: "none" }), n3.contentReset.y = null) : (T.call(this), "y" === i2.axis ? M.call(this) : "yx" === i2.axis && n3.overflowed[1] && Q(t3, s2[1].toString(), { dir: "x", dur: 0, overwrite: "none" }))), "y" !== i2.axis && (n3.overflowed[1] ? l2[1].width() > l2[1].parent().width() ? T.call(this) : (Q(t3, s2[1].toString(), { dir: "x", dur: 0, overwrite: "none" }), n3.contentReset.x = null) : (T.call(this), "x" === i2.axis ? M.call(this) : "yx" === i2.axis && n3.overflowed[0] && Q(t3, s2[0].toString(), { dir: "y", dur: 0, overwrite: "none" }))), o2 && n3 && (2 === o2 && i2.callbacks.onImageLoad && "function" == typeof i2.callbacks.onImageLoad ? i2.callbacks.onImageLoad.call(this) : 3 === o2 && i2.callbacks.onSelectorChange && "function" == typeof i2.callbacks.onSelectorChange ? i2.callbacks.onSelectorChange.call(this) : i2.callbacks.onUpdate && "function" == typeof i2.callbacks.onUpdate && i2.callbacks.onUpdate.call(this)), X.call(this);
        }
      });
    }, scrollTo: function(t2, o2) {
      if ("undefined" != typeof t2 && null != t2) {
        var n2 = f.call(this);
        return e(n2).each(function() {
          var n3 = e(this);
          if (n3.data(a)) {
            var i2 = n3.data(a), r2 = i2.opt, l2 = { trigger: "external", scrollInertia: r2.scrollInertia, scrollEasing: "mcsEaseInOut", moveDragger: false, timeout: 60, callbacks: true, onStart: true, onUpdate: true, onComplete: true }, s2 = e.extend(true, {}, l2, o2), c2 = Y.call(this, t2), d2 = s2.scrollInertia > 0 && s2.scrollInertia < 17 ? 17 : s2.scrollInertia;
            c2[0] = j.call(this, c2[0], "y"), c2[1] = j.call(this, c2[1], "x"), s2.moveDragger && (c2[0] *= i2.scrollRatio.y, c2[1] *= i2.scrollRatio.x), s2.dur = d2, setTimeout(function() {
              null !== c2[0] && "undefined" != typeof c2[0] && "x" !== r2.axis && i2.overflowed[0] && (s2.dir = "y", s2.overwrite = "all", Q(n3, c2[0].toString(), s2)), null !== c2[1] && "undefined" != typeof c2[1] && "y" !== r2.axis && i2.overflowed[1] && (s2.dir = "x", s2.overwrite = "none", Q(n3, c2[1].toString(), s2));
            }, s2.timeout);
          }
        });
      }
    }, stop: function() {
      var t2 = f.call(this);
      return e(t2).each(function() {
        var t3 = e(this);
        t3.data(a) && V(t3);
      });
    }, disable: function(t2) {
      var o2 = f.call(this);
      return e(o2).each(function() {
        var o3 = e(this);
        if (o3.data(a)) {
          {
            o3.data(a);
          }
          X.call(this, "remove"), M.call(this), t2 && T.call(this), O.call(this, true), o3.addClass(d[3]);
        }
      });
    }, destroy: function() {
      var t2 = f.call(this);
      return e(t2).each(function() {
        var n2 = e(this);
        if (n2.data(a)) {
          var i2 = n2.data(a), r2 = i2.opt, l2 = e("#mCSB_" + i2.idx), s2 = e("#mCSB_" + i2.idx + "_container"), c2 = e(".mCSB_" + i2.idx + "_scrollbar");
          r2.live && m(r2.liveSelector || e(t2).selector), X.call(this, "remove"), M.call(this), T.call(this), n2.removeData(a), Z(this, "mcs"), c2.remove(), s2.find("img." + d[2]).removeClass(d[2]), l2.replaceWith(s2.contents()), n2.removeClass(o + " _" + a + "_" + i2.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4]);
        }
      });
    } }, f = function() {
      return "object" != typeof e(this) || e(this).length < 1 ? n : this;
    }, h = function(t2) {
      var o2 = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"], a2 = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"], n2 = ["minimal", "minimal-dark"], i2 = ["minimal", "minimal-dark"], r2 = ["minimal", "minimal-dark"];
      t2.autoDraggerLength = e.inArray(t2.theme, o2) > -1 ? false : t2.autoDraggerLength, t2.autoExpandScrollbar = e.inArray(t2.theme, a2) > -1 ? false : t2.autoExpandScrollbar, t2.scrollButtons.enable = e.inArray(t2.theme, n2) > -1 ? false : t2.scrollButtons.enable, t2.autoHideScrollbar = e.inArray(t2.theme, i2) > -1 ? true : t2.autoHideScrollbar, t2.scrollbarPosition = e.inArray(t2.theme, r2) > -1 ? "outside" : t2.scrollbarPosition;
    }, m = function(e2) {
      l[e2] && (clearTimeout(l[e2]), Z(l, e2));
    }, p = function(e2) {
      return "yx" === e2 || "xy" === e2 || "auto" === e2 ? "yx" : "x" === e2 || "horizontal" === e2 ? "x" : "y";
    }, g = function(e2) {
      return "stepped" === e2 || "pixels" === e2 || "step" === e2 || "click" === e2 ? "stepped" : "stepless";
    }, v = function() {
      var t2 = e(this), n2 = t2.data(a), i2 = n2.opt, r2 = i2.autoExpandScrollbar ? " " + d[1] + "_expand" : "", l2 = ["<div id='mCSB_" + n2.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n2.idx + "_scrollbar mCS-" + i2.theme + " mCSB_scrollTools_vertical" + r2 + "'><div class='" + d[12] + "'><div id='mCSB_" + n2.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n2.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n2.idx + "_scrollbar mCS-" + i2.theme + " mCSB_scrollTools_horizontal" + r2 + "'><div class='" + d[12] + "'><div id='mCSB_" + n2.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"], s2 = "yx" === i2.axis ? "mCSB_vertical_horizontal" : "x" === i2.axis ? "mCSB_horizontal" : "mCSB_vertical", c2 = "yx" === i2.axis ? l2[0] + l2[1] : "x" === i2.axis ? l2[1] : l2[0], u2 = "yx" === i2.axis ? "<div id='mCSB_" + n2.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "", f2 = i2.autoHideScrollbar ? " " + d[6] : "", h2 = "x" !== i2.axis && "rtl" === n2.langDir ? " " + d[7] : "";
      i2.setWidth && t2.css("width", i2.setWidth), i2.setHeight && t2.css("height", i2.setHeight), i2.setLeft = "y" !== i2.axis && "rtl" === n2.langDir ? "989999px" : i2.setLeft, t2.addClass(o + " _" + a + "_" + n2.idx + f2 + h2).wrapInner("<div id='mCSB_" + n2.idx + "' class='mCustomScrollBox mCS-" + i2.theme + " " + s2 + "'><div id='mCSB_" + n2.idx + "_container' class='mCSB_container' style='position:relative; top:" + i2.setTop + "; left:" + i2.setLeft + ";' dir=" + n2.langDir + " /></div>");
      var m2 = e("#mCSB_" + n2.idx), p2 = e("#mCSB_" + n2.idx + "_container");
      "y" === i2.axis || i2.advanced.autoExpandHorizontalScroll || p2.css("width", x(p2.children())), "outside" === i2.scrollbarPosition ? ("static" === t2.css("position") && t2.css("position", "relative"), t2.css("overflow", "visible"), m2.addClass("mCSB_outside").after(c2)) : (m2.addClass("mCSB_inside").append(c2), p2.wrap(u2)), w.call(this);
      var g2 = [e("#mCSB_" + n2.idx + "_dragger_vertical"), e("#mCSB_" + n2.idx + "_dragger_horizontal")];
      g2[0].css("min-height", g2[0].height()), g2[1].css("min-width", g2[1].width());
    }, x = function(t2) {
      return Math.max.apply(Math, t2.map(function() {
        return e(this).outerWidth(true);
      }).get());
    }, _ = function() {
      var t2 = e(this), o2 = t2.data(a), n2 = o2.opt, i2 = e("#mCSB_" + o2.idx + "_container");
      n2.advanced.autoExpandHorizontalScroll && "y" !== n2.axis && i2.css({ position: "absolute", width: "auto" }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({ width: Math.ceil(i2[0].getBoundingClientRect().right + 0.4) - Math.floor(i2[0].getBoundingClientRect().left), position: "relative" }).unwrap();
    }, w = function() {
      var t2 = e(this), o2 = t2.data(a), n2 = o2.opt, i2 = e(".mCSB_" + o2.idx + "_scrollbar:first"), r2 = te(n2.scrollButtons.tabindex) ? "tabindex='" + n2.scrollButtons.tabindex + "'" : "", l2 = ["<a href='#' class='" + d[13] + "' oncontextmenu='return false;' " + r2 + " />", "<a href='#' class='" + d[14] + "' oncontextmenu='return false;' " + r2 + " />", "<a href='#' class='" + d[15] + "' oncontextmenu='return false;' " + r2 + " />", "<a href='#' class='" + d[16] + "' oncontextmenu='return false;' " + r2 + " />"], s2 = ["x" === n2.axis ? l2[2] : l2[0], "x" === n2.axis ? l2[3] : l2[1], l2[2], l2[3]];
      n2.scrollButtons.enable && i2.prepend(s2[0]).append(s2[1]).next(".mCSB_scrollTools").prepend(s2[2]).append(s2[3]);
    }, S = function() {
      var t2 = e(this), o2 = t2.data(a), n2 = e("#mCSB_" + o2.idx), i2 = t2.css("max-height") || "none", r2 = -1 !== i2.indexOf("%"), l2 = t2.css("box-sizing");
      if ("none" !== i2) {
        var s2 = r2 ? t2.parent().height() * parseInt(i2) / 100 : parseInt(i2);
        "border-box" === l2 && (s2 -= t2.innerHeight() - t2.height() + (t2.outerHeight() - t2.innerHeight())), n2.css("max-height", Math.round(s2));
      }
    }, b = function() {
      var t2 = e(this), o2 = t2.data(a), n2 = e("#mCSB_" + o2.idx), i2 = e("#mCSB_" + o2.idx + "_container"), r2 = [e("#mCSB_" + o2.idx + "_dragger_vertical"), e("#mCSB_" + o2.idx + "_dragger_horizontal")], l2 = [n2.height() / i2.outerHeight(false), n2.width() / i2.outerWidth(false)], c2 = [parseInt(r2[0].css("min-height")), Math.round(l2[0] * r2[0].parent().height()), parseInt(r2[1].css("min-width")), Math.round(l2[1] * r2[1].parent().width())], d2 = s && c2[1] < c2[0] ? c2[0] : c2[1], u2 = s && c2[3] < c2[2] ? c2[2] : c2[3];
      r2[0].css({ height: d2, "max-height": r2[0].parent().height() - 10 }).find(".mCSB_dragger_bar").css({ "line-height": c2[0] + "px" }), r2[1].css({ width: u2, "max-width": r2[1].parent().width() - 10 });
    }, C = function() {
      var t2 = e(this), o2 = t2.data(a), n2 = e("#mCSB_" + o2.idx), i2 = e("#mCSB_" + o2.idx + "_container"), r2 = [e("#mCSB_" + o2.idx + "_dragger_vertical"), e("#mCSB_" + o2.idx + "_dragger_horizontal")], l2 = [i2.outerHeight(false) - n2.height(), i2.outerWidth(false) - n2.width()], s2 = [l2[0] / (r2[0].parent().height() - r2[0].height()), l2[1] / (r2[1].parent().width() - r2[1].width())];
      o2.scrollRatio = { y: s2[0], x: s2[1] };
    }, y = function(e2, t2, o2) {
      var a2 = o2 ? d[0] + "_expanded" : "", n2 = e2.closest(".mCSB_scrollTools");
      "active" === t2 ? (e2.toggleClass(d[0] + " " + a2), n2.toggleClass(d[1]), e2[0]._draggable = e2[0]._draggable ? 0 : 1) : e2[0]._draggable || ("hide" === t2 ? (e2.removeClass(d[0]), n2.removeClass(d[1])) : (e2.addClass(d[0]), n2.addClass(d[1])));
    }, B = function() {
      var t2 = e(this), o2 = t2.data(a), n2 = e("#mCSB_" + o2.idx), i2 = e("#mCSB_" + o2.idx + "_container"), r2 = null == o2.overflowed ? i2.height() : i2.outerHeight(false), l2 = null == o2.overflowed ? i2.width() : i2.outerWidth(false);
      return [r2 > n2.height(), l2 > n2.width()];
    }, T = function() {
      var t2 = e(this), o2 = t2.data(a), n2 = o2.opt, i2 = e("#mCSB_" + o2.idx), r2 = e("#mCSB_" + o2.idx + "_container"), l2 = [e("#mCSB_" + o2.idx + "_dragger_vertical"), e("#mCSB_" + o2.idx + "_dragger_horizontal")];
      if (V(t2), ("x" !== n2.axis && !o2.overflowed[0] || "y" === n2.axis && o2.overflowed[0]) && (l2[0].add(r2).css("top", 0), Q(t2, "_resetY")), "y" !== n2.axis && !o2.overflowed[1] || "x" === n2.axis && o2.overflowed[1]) {
        var s2 = dx = 0;
        "rtl" === o2.langDir && (s2 = i2.width() - r2.outerWidth(false), dx = Math.abs(s2 / o2.scrollRatio.x)), r2.css("left", s2), l2[1].css("left", dx), Q(t2, "_resetX");
      }
    }, k = function() {
      function t2() {
        r2 = setTimeout(function() {
          e.event.special.mousewheel ? (clearTimeout(r2), W.call(o2[0])) : t2();
        }, 100);
      }
      var o2 = e(this), n2 = o2.data(a), i2 = n2.opt;
      if (!n2.bindEvents) {
        if (R.call(this), i2.contentTouchScroll && D.call(this), E.call(this), i2.mouseWheel.enable) {
          var r2;
          t2();
        }
        P.call(this), H.call(this), i2.advanced.autoScrollOnFocus && z.call(this), i2.scrollButtons.enable && U.call(this), i2.keyboard.enable && F.call(this), n2.bindEvents = true;
      }
    }, M = function() {
      var t2 = e(this), o2 = t2.data(a), n2 = o2.opt, i2 = a + "_" + o2.idx, r2 = ".mCSB_" + o2.idx + "_scrollbar", l2 = e("#mCSB_" + o2.idx + ",#mCSB_" + o2.idx + "_container,#mCSB_" + o2.idx + "_container_wrapper," + r2 + " ." + d[12] + ",#mCSB_" + o2.idx + "_dragger_vertical,#mCSB_" + o2.idx + "_dragger_horizontal," + r2 + ">a"), s2 = e("#mCSB_" + o2.idx + "_container");
      n2.advanced.releaseDraggableSelectors && l2.add(e(n2.advanced.releaseDraggableSelectors)), o2.bindEvents && (e(document).unbind("." + i2), l2.each(function() {
        e(this).unbind("." + i2);
      }), clearTimeout(t2[0]._focusTimeout), Z(t2[0], "_focusTimeout"), clearTimeout(o2.sequential.step), Z(o2.sequential, "step"), clearTimeout(s2[0].onCompleteTimeout), Z(s2[0], "onCompleteTimeout"), o2.bindEvents = false);
    }, O = function(t2) {
      var o2 = e(this), n2 = o2.data(a), i2 = n2.opt, r2 = e("#mCSB_" + n2.idx + "_container_wrapper"), l2 = r2.length ? r2 : e("#mCSB_" + n2.idx + "_container"), s2 = [e("#mCSB_" + n2.idx + "_scrollbar_vertical"), e("#mCSB_" + n2.idx + "_scrollbar_horizontal")], c2 = [s2[0].find(".mCSB_dragger"), s2[1].find(".mCSB_dragger")];
      "x" !== i2.axis && (n2.overflowed[0] && !t2 ? (s2[0].add(c2[0]).add(s2[0].children("a")).css("display", "block"), l2.removeClass(d[8] + " " + d[10])) : (i2.alwaysShowScrollbar ? (2 !== i2.alwaysShowScrollbar && c2[0].css("display", "none"), l2.removeClass(d[10])) : (s2[0].css("display", "none"), l2.addClass(d[10])), l2.addClass(d[8]))), "y" !== i2.axis && (n2.overflowed[1] && !t2 ? (s2[1].add(c2[1]).add(s2[1].children("a")).css("display", "block"), l2.removeClass(d[9] + " " + d[11])) : (i2.alwaysShowScrollbar ? (2 !== i2.alwaysShowScrollbar && c2[1].css("display", "none"), l2.removeClass(d[11])) : (s2[1].css("display", "none"), l2.addClass(d[11])), l2.addClass(d[9]))), n2.overflowed[0] || n2.overflowed[1] ? o2.removeClass(d[5]) : o2.addClass(d[5]);
    }, I = function(e2) {
      var t2 = e2.type;
      switch (t2) {
        case "pointerdown":
        case "MSPointerDown":
        case "pointermove":
        case "MSPointerMove":
        case "pointerup":
        case "MSPointerUp":
          return e2.target.ownerDocument !== document ? [e2.originalEvent.screenY, e2.originalEvent.screenX, false] : [e2.originalEvent.pageY, e2.originalEvent.pageX, false];
        case "touchstart":
        case "touchmove":
        case "touchend":
          var o2 = e2.originalEvent.touches[0] || e2.originalEvent.changedTouches[0], a2 = e2.originalEvent.touches.length || e2.originalEvent.changedTouches.length;
          return e2.target.ownerDocument !== document ? [o2.screenY, o2.screenX, a2 > 1] : [o2.pageY, o2.pageX, a2 > 1];
        default:
          return [e2.pageY, e2.pageX, false];
      }
    }, R = function() {
      function t2(e2) {
        var t3 = m2.find("iframe");
        if (t3.length) {
          var o3 = e2 ? "auto" : "none";
          t3.css("pointer-events", o3);
        }
      }
      function o2(e2, t3, o3, a2) {
        if (m2[0].idleTimer = u2.scrollInertia < 233 ? 250 : 0, n2.attr("id") === h2[1])
          var i3 = "x", r3 = (n2[0].offsetLeft - t3 + a2) * d2.scrollRatio.x;
        else
          var i3 = "y", r3 = (n2[0].offsetTop - e2 + o3) * d2.scrollRatio.y;
        Q(l2, r3.toString(), { dir: i3, drag: true });
      }
      var n2, i2, r2, l2 = e(this), d2 = l2.data(a), u2 = d2.opt, f2 = a + "_" + d2.idx, h2 = ["mCSB_" + d2.idx + "_dragger_vertical", "mCSB_" + d2.idx + "_dragger_horizontal"], m2 = e("#mCSB_" + d2.idx + "_container"), p2 = e("#" + h2[0] + ",#" + h2[1]), g2 = u2.advanced.releaseDraggableSelectors ? p2.add(e(u2.advanced.releaseDraggableSelectors)) : p2;
      p2.bind("mousedown." + f2 + " touchstart." + f2 + " pointerdown." + f2 + " MSPointerDown." + f2, function(o3) {
        if (o3.stopImmediatePropagation(), o3.preventDefault(), $(o3)) {
          c = true, s && (document.onselectstart = function() {
            return false;
          }), t2(false), V(l2), n2 = e(this);
          var a2 = n2.offset(), d3 = I(o3)[0] - a2.top, f3 = I(o3)[1] - a2.left, h3 = n2.height() + a2.top, m3 = n2.width() + a2.left;
          h3 > d3 && d3 > 0 && m3 > f3 && f3 > 0 && (i2 = d3, r2 = f3), y(n2, "active", u2.autoExpandScrollbar);
        }
      }).bind("touchmove." + f2, function(e2) {
        e2.stopImmediatePropagation(), e2.preventDefault();
        var t3 = n2.offset(), a2 = I(e2)[0] - t3.top, l3 = I(e2)[1] - t3.left;
        o2(i2, r2, a2, l3);
      }), e(document).bind("mousemove." + f2 + " pointermove." + f2 + " MSPointerMove." + f2, function(e2) {
        if (n2) {
          var t3 = n2.offset(), a2 = I(e2)[0] - t3.top, l3 = I(e2)[1] - t3.left;
          if (i2 === a2)
            return;
          o2(i2, r2, a2, l3);
        }
      }).add(g2).bind("mouseup." + f2 + " touchend." + f2 + " pointerup." + f2 + " MSPointerUp." + f2, function(e2) {
        n2 && (y(n2, "active", u2.autoExpandScrollbar), n2 = null), c = false, s && (document.onselectstart = null), t2(true);
      });
    }, D = function() {
      function o2(e2) {
        if (!ee(e2) || c || I(e2)[2])
          return void (t = 0);
        t = 1, S2 = 0, b2 = 0, C2.removeClass("mCS_touch_action");
        var o3 = M2.offset();
        d2 = I(e2)[0] - o3.top, u2 = I(e2)[1] - o3.left, A2 = [I(e2)[0], I(e2)[1]];
      }
      function n2(e2) {
        if (ee(e2) && !c && !I(e2)[2] && (e2.stopImmediatePropagation(), !b2 || S2)) {
          p2 = J();
          var t2 = k2.offset(), o3 = I(e2)[0] - t2.top, a2 = I(e2)[1] - t2.left, n3 = "mcsLinearOut";
          if (R2.push(o3), D2.push(a2), A2[2] = Math.abs(I(e2)[0] - A2[0]), A2[3] = Math.abs(I(e2)[1] - A2[1]), y2.overflowed[0])
            var i3 = O2[0].parent().height() - O2[0].height(), r3 = d2 - o3 > 0 && o3 - d2 > -(i3 * y2.scrollRatio.y) && (2 * A2[3] < A2[2] || "yx" === B2.axis);
          if (y2.overflowed[1])
            var l3 = O2[1].parent().width() - O2[1].width(), f3 = u2 - a2 > 0 && a2 - u2 > -(l3 * y2.scrollRatio.x) && (2 * A2[2] < A2[3] || "yx" === B2.axis);
          r3 || f3 ? (e2.preventDefault(), S2 = 1) : (b2 = 1, C2.addClass("mCS_touch_action")), _2 = "yx" === B2.axis ? [d2 - o3, u2 - a2] : "x" === B2.axis ? [null, u2 - a2] : [d2 - o3, null], M2[0].idleTimer = 250, y2.overflowed[0] && s2(_2[0], E2, n3, "y", "all", true), y2.overflowed[1] && s2(_2[1], E2, n3, "x", W2, true);
        }
      }
      function i2(e2) {
        if (!ee(e2) || c || I(e2)[2])
          return void (t = 0);
        t = 1, e2.stopImmediatePropagation(), V(C2), m2 = J();
        var o3 = k2.offset();
        f2 = I(e2)[0] - o3.top, h2 = I(e2)[1] - o3.left, R2 = [], D2 = [];
      }
      function r2(e2) {
        if (ee(e2) && !c && !I(e2)[2]) {
          e2.stopImmediatePropagation(), S2 = 0, b2 = 0, g2 = J();
          var t2 = k2.offset(), o3 = I(e2)[0] - t2.top, a2 = I(e2)[1] - t2.left;
          if (!(g2 - p2 > 30)) {
            x2 = 1e3 / (g2 - m2);
            var n3 = "mcsEaseOut", i3 = 2.5 > x2, r3 = i3 ? [R2[R2.length - 2], D2[D2.length - 2]] : [0, 0];
            v2 = i3 ? [o3 - r3[0], a2 - r3[1]] : [o3 - f2, a2 - h2];
            var d3 = [Math.abs(v2[0]), Math.abs(v2[1])];
            x2 = i3 ? [Math.abs(v2[0] / 4), Math.abs(v2[1] / 4)] : [x2, x2];
            var u3 = [Math.abs(M2[0].offsetTop) - v2[0] * l2(d3[0] / x2[0], x2[0]), Math.abs(M2[0].offsetLeft) - v2[1] * l2(d3[1] / x2[1], x2[1])];
            _2 = "yx" === B2.axis ? [u3[0], u3[1]] : "x" === B2.axis ? [null, u3[1]] : [u3[0], null], w2 = [4 * d3[0] + B2.scrollInertia, 4 * d3[1] + B2.scrollInertia];
            var C3 = parseInt(B2.contentTouchScroll) || 0;
            _2[0] = d3[0] > C3 ? _2[0] : 0, _2[1] = d3[1] > C3 ? _2[1] : 0, y2.overflowed[0] && s2(_2[0], w2[0], n3, "y", W2, false), y2.overflowed[1] && s2(_2[1], w2[1], n3, "x", W2, false);
          }
        }
      }
      function l2(e2, t2) {
        var o3 = [1.5 * t2, 2 * t2, t2 / 1.5, t2 / 2];
        return e2 > 90 ? t2 > 4 ? o3[0] : o3[3] : e2 > 60 ? t2 > 3 ? o3[3] : o3[2] : e2 > 30 ? t2 > 8 ? o3[1] : t2 > 6 ? o3[0] : t2 > 4 ? t2 : o3[2] : t2 > 8 ? t2 : o3[3];
      }
      function s2(e2, t2, o3, a2, n3, i3) {
        e2 && Q(C2, e2.toString(), { dur: t2, scrollEasing: o3, dir: a2, overwrite: n3, drag: i3 });
      }
      var d2, u2, f2, h2, m2, p2, g2, v2, x2, _2, w2, S2, b2, C2 = e(this), y2 = C2.data(a), B2 = y2.opt, T2 = a + "_" + y2.idx, k2 = e("#mCSB_" + y2.idx), M2 = e("#mCSB_" + y2.idx + "_container"), O2 = [e("#mCSB_" + y2.idx + "_dragger_vertical"), e("#mCSB_" + y2.idx + "_dragger_horizontal")], R2 = [], D2 = [], E2 = 0, W2 = "yx" === B2.axis ? "none" : "all", A2 = [], P2 = M2.find("iframe"), z2 = ["touchstart." + T2 + " pointerdown." + T2 + " MSPointerDown." + T2, "touchmove." + T2 + " pointermove." + T2 + " MSPointerMove." + T2, "touchend." + T2 + " pointerup." + T2 + " MSPointerUp." + T2];
      M2.bind(z2[0], function(e2) {
        o2(e2);
      }).bind(z2[1], function(e2) {
        n2(e2);
      }), k2.bind(z2[0], function(e2) {
        i2(e2);
      }).bind(z2[2], function(e2) {
        r2(e2);
      }), P2.length && P2.each(function() {
        e(this).load(function() {
          L(this) && e(this.contentDocument || this.contentWindow.document).bind(z2[0], function(e2) {
            o2(e2), i2(e2);
          }).bind(z2[1], function(e2) {
            n2(e2);
          }).bind(z2[2], function(e2) {
            r2(e2);
          });
        });
      });
    }, E = function() {
      function o2() {
        return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0;
      }
      function n2(e2, t2, o3) {
        d2.type = o3 && i2 ? "stepped" : "stepless", d2.scrollAmount = 10, q(r2, e2, t2, "mcsLinearOut", o3 ? 60 : null);
      }
      var i2, r2 = e(this), l2 = r2.data(a), s2 = l2.opt, d2 = l2.sequential, u2 = a + "_" + l2.idx, f2 = e("#mCSB_" + l2.idx + "_container"), h2 = f2.parent();
      f2.bind("mousedown." + u2, function(e2) {
        t || i2 || (i2 = 1, c = true);
      }).add(document).bind("mousemove." + u2, function(e2) {
        if (!t && i2 && o2()) {
          var a2 = f2.offset(), r3 = I(e2)[0] - a2.top + f2[0].offsetTop, c2 = I(e2)[1] - a2.left + f2[0].offsetLeft;
          r3 > 0 && r3 < h2.height() && c2 > 0 && c2 < h2.width() ? d2.step && n2("off", null, "stepped") : ("x" !== s2.axis && l2.overflowed[0] && (0 > r3 ? n2("on", 38) : r3 > h2.height() && n2("on", 40)), "y" !== s2.axis && l2.overflowed[1] && (0 > c2 ? n2("on", 37) : c2 > h2.width() && n2("on", 39)));
        }
      }).bind("mouseup." + u2, function(e2) {
        t || (i2 && (i2 = 0, n2("off", null)), c = false);
      });
    }, W = function() {
      function t2(t3, a2) {
        if (V(o2), !A(o2, t3.target)) {
          var r3 = "auto" !== i2.mouseWheel.deltaFactor ? parseInt(i2.mouseWheel.deltaFactor) : s && t3.deltaFactor < 100 ? 100 : t3.deltaFactor || 100;
          if ("x" === i2.axis || "x" === i2.mouseWheel.axis)
            var d3 = "x", u2 = [Math.round(r3 * n2.scrollRatio.x), parseInt(i2.mouseWheel.scrollAmount)], f2 = "auto" !== i2.mouseWheel.scrollAmount ? u2[1] : u2[0] >= l2.width() ? 0.9 * l2.width() : u2[0], h2 = Math.abs(e("#mCSB_" + n2.idx + "_container")[0].offsetLeft), m2 = c2[1][0].offsetLeft, p2 = c2[1].parent().width() - c2[1].width(), g2 = t3.deltaX || t3.deltaY || a2;
          else
            var d3 = "y", u2 = [Math.round(r3 * n2.scrollRatio.y), parseInt(i2.mouseWheel.scrollAmount)], f2 = "auto" !== i2.mouseWheel.scrollAmount ? u2[1] : u2[0] >= l2.height() ? 0.9 * l2.height() : u2[0], h2 = Math.abs(e("#mCSB_" + n2.idx + "_container")[0].offsetTop), m2 = c2[0][0].offsetTop, p2 = c2[0].parent().height() - c2[0].height(), g2 = t3.deltaY || a2;
          "y" === d3 && !n2.overflowed[0] || "x" === d3 && !n2.overflowed[1] || ((i2.mouseWheel.invert || t3.webkitDirectionInvertedFromDevice) && (g2 = -g2), i2.mouseWheel.normalizeDelta && (g2 = 0 > g2 ? -1 : 1), (g2 > 0 && 0 !== m2 || 0 > g2 && m2 !== p2 || i2.mouseWheel.preventDefault) && (t3.stopImmediatePropagation(), t3.preventDefault()), Q(o2, (h2 - g2 * f2).toString(), { dir: d3 }));
        }
      }
      if (e(this).data(a)) {
        var o2 = e(this), n2 = o2.data(a), i2 = n2.opt, r2 = a + "_" + n2.idx, l2 = e("#mCSB_" + n2.idx), c2 = [e("#mCSB_" + n2.idx + "_dragger_vertical"), e("#mCSB_" + n2.idx + "_dragger_horizontal")], d2 = e("#mCSB_" + n2.idx + "_container").find("iframe");
        d2.length && d2.each(function() {
          e(this).load(function() {
            L(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r2, function(e2, o3) {
              t2(e2, o3);
            });
          });
        }), l2.bind("mousewheel." + r2, function(e2, o3) {
          t2(e2, o3);
        });
      }
    }, L = function(e2) {
      var t2 = null;
      try {
        var o2 = e2.contentDocument || e2.contentWindow.document;
        t2 = o2.body.innerHTML;
      } catch (a2) {
      }
      return null !== t2;
    }, A = function(t2, o2) {
      var n2 = o2.nodeName.toLowerCase(), i2 = t2.data(a).opt.mouseWheel.disableOver, r2 = ["select", "textarea"];
      return e.inArray(n2, i2) > -1 && !(e.inArray(n2, r2) > -1 && !e(o2).is(":focus"));
    }, P = function() {
      var t2 = e(this), o2 = t2.data(a), n2 = a + "_" + o2.idx, i2 = e("#mCSB_" + o2.idx + "_container"), r2 = i2.parent(), l2 = e(".mCSB_" + o2.idx + "_scrollbar ." + d[12]);
      l2.bind("touchstart." + n2 + " pointerdown." + n2 + " MSPointerDown." + n2, function(e2) {
        c = true;
      }).bind("touchend." + n2 + " pointerup." + n2 + " MSPointerUp." + n2, function(e2) {
        c = false;
      }).bind("click." + n2, function(a2) {
        if (e(a2.target).hasClass(d[12]) || e(a2.target).hasClass("mCSB_draggerRail")) {
          V(t2);
          var n3 = e(this), l3 = n3.find(".mCSB_dragger");
          if (n3.parent(".mCSB_scrollTools_horizontal").length > 0) {
            if (!o2.overflowed[1])
              return;
            var s2 = "x", c2 = a2.pageX > l3.offset().left ? -1 : 1, u2 = Math.abs(i2[0].offsetLeft) - 0.9 * c2 * r2.width();
          } else {
            if (!o2.overflowed[0])
              return;
            var s2 = "y", c2 = a2.pageY > l3.offset().top ? -1 : 1, u2 = Math.abs(i2[0].offsetTop) - 0.9 * c2 * r2.height();
          }
          Q(t2, u2.toString(), { dir: s2, scrollEasing: "mcsEaseInOut" });
        }
      });
    }, z = function() {
      var t2 = e(this), o2 = t2.data(a), n2 = o2.opt, i2 = a + "_" + o2.idx, r2 = e("#mCSB_" + o2.idx + "_container"), l2 = r2.parent();
      r2.bind("focusin." + i2, function(o3) {
        var a2 = e(document.activeElement), i3 = r2.find(".mCustomScrollBox").length, s2 = 0;
        a2.is(n2.advanced.autoScrollOnFocus) && (V(t2), clearTimeout(t2[0]._focusTimeout), t2[0]._focusTimer = i3 ? (s2 + 17) * i3 : 0, t2[0]._focusTimeout = setTimeout(function() {
          var e2 = [oe(a2)[0], oe(a2)[1]], o4 = [r2[0].offsetTop, r2[0].offsetLeft], i4 = [o4[0] + e2[0] >= 0 && o4[0] + e2[0] < l2.height() - a2.outerHeight(false), o4[1] + e2[1] >= 0 && o4[0] + e2[1] < l2.width() - a2.outerWidth(false)], c2 = "yx" !== n2.axis || i4[0] || i4[1] ? "all" : "none";
          "x" === n2.axis || i4[0] || Q(t2, e2[0].toString(), { dir: "y", scrollEasing: "mcsEaseInOut", overwrite: c2, dur: s2 }), "y" === n2.axis || i4[1] || Q(t2, e2[1].toString(), { dir: "x", scrollEasing: "mcsEaseInOut", overwrite: c2, dur: s2 });
        }, t2[0]._focusTimer));
      });
    }, H = function() {
      var t2 = e(this), o2 = t2.data(a), n2 = a + "_" + o2.idx, i2 = e("#mCSB_" + o2.idx + "_container").parent();
      i2.bind("scroll." + n2, function(t3) {
        (0 !== i2.scrollTop() || 0 !== i2.scrollLeft()) && e(".mCSB_" + o2.idx + "_scrollbar").css("visibility", "hidden");
      });
    }, U = function() {
      var t2 = e(this), o2 = t2.data(a), n2 = o2.opt, i2 = o2.sequential, r2 = a + "_" + o2.idx, l2 = ".mCSB_" + o2.idx + "_scrollbar", s2 = e(l2 + ">a");
      s2.bind("mousedown." + r2 + " touchstart." + r2 + " pointerdown." + r2 + " MSPointerDown." + r2 + " mouseup." + r2 + " touchend." + r2 + " pointerup." + r2 + " MSPointerUp." + r2 + " mouseout." + r2 + " pointerout." + r2 + " MSPointerOut." + r2 + " click." + r2, function(a2) {
        function r3(e2, o3) {
          i2.scrollAmount = n2.snapAmount || n2.scrollButtons.scrollAmount, q(t2, e2, o3);
        }
        if (a2.preventDefault(), $(a2)) {
          var l3 = e(this).attr("class");
          switch (i2.type = n2.scrollButtons.scrollType, a2.type) {
            case "mousedown":
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
              if ("stepped" === i2.type)
                return;
              c = true, o2.tweenRunning = false, r3("on", l3);
              break;
            case "mouseup":
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseout":
            case "pointerout":
            case "MSPointerOut":
              if ("stepped" === i2.type)
                return;
              c = false, i2.dir && r3("off", l3);
              break;
            case "click":
              if ("stepped" !== i2.type || o2.tweenRunning)
                return;
              r3("on", l3);
          }
        }
      });
    }, F = function() {
      function t2(t3) {
        function a2(e2, t4) {
          r2.type = i2.keyboard.scrollType, r2.scrollAmount = i2.snapAmount || i2.keyboard.scrollAmount, "stepped" === r2.type && n2.tweenRunning || q(o2, e2, t4);
        }
        switch (t3.type) {
          case "blur":
            n2.tweenRunning && r2.dir && a2("off", null);
            break;
          case "keydown":
          case "keyup":
            var l3 = t3.keyCode ? t3.keyCode : t3.which, s3 = "on";
            if ("x" !== i2.axis && (38 === l3 || 40 === l3) || "y" !== i2.axis && (37 === l3 || 39 === l3)) {
              if ((38 === l3 || 40 === l3) && !n2.overflowed[0] || (37 === l3 || 39 === l3) && !n2.overflowed[1])
                return;
              "keyup" === t3.type && (s3 = "off"), e(document.activeElement).is(u2) || (t3.preventDefault(), t3.stopImmediatePropagation(), a2(s3, l3));
            } else if (33 === l3 || 34 === l3) {
              if ((n2.overflowed[0] || n2.overflowed[1]) && (t3.preventDefault(), t3.stopImmediatePropagation()), "keyup" === t3.type) {
                V(o2);
                var f3 = 34 === l3 ? -1 : 1;
                if ("x" === i2.axis || "yx" === i2.axis && n2.overflowed[1] && !n2.overflowed[0])
                  var h3 = "x", m2 = Math.abs(c2[0].offsetLeft) - 0.9 * f3 * d2.width();
                else
                  var h3 = "y", m2 = Math.abs(c2[0].offsetTop) - 0.9 * f3 * d2.height();
                Q(o2, m2.toString(), { dir: h3, scrollEasing: "mcsEaseInOut" });
              }
            } else if ((35 === l3 || 36 === l3) && !e(document.activeElement).is(u2) && ((n2.overflowed[0] || n2.overflowed[1]) && (t3.preventDefault(), t3.stopImmediatePropagation()), "keyup" === t3.type)) {
              if ("x" === i2.axis || "yx" === i2.axis && n2.overflowed[1] && !n2.overflowed[0])
                var h3 = "x", m2 = 35 === l3 ? Math.abs(d2.width() - c2.outerWidth(false)) : 0;
              else
                var h3 = "y", m2 = 35 === l3 ? Math.abs(d2.height() - c2.outerHeight(false)) : 0;
              Q(o2, m2.toString(), { dir: h3, scrollEasing: "mcsEaseInOut" });
            }
        }
      }
      var o2 = e(this), n2 = o2.data(a), i2 = n2.opt, r2 = n2.sequential, l2 = a + "_" + n2.idx, s2 = e("#mCSB_" + n2.idx), c2 = e("#mCSB_" + n2.idx + "_container"), d2 = c2.parent(), u2 = "input,textarea,select,datalist,keygen,[contenteditable='true']", f2 = c2.find("iframe"), h2 = ["blur." + l2 + " keydown." + l2 + " keyup." + l2];
      f2.length && f2.each(function() {
        e(this).load(function() {
          L(this) && e(this.contentDocument || this.contentWindow.document).bind(h2[0], function(e2) {
            t2(e2);
          });
        });
      }), s2.attr("tabindex", "0").bind(h2[0], function(e2) {
        t2(e2);
      });
    }, q = function(t2, o2, n2, i2, r2) {
      function l2(e2) {
        var o3 = "stepped" !== f2.type, a2 = r2 ? r2 : e2 ? o3 ? p2 / 1.5 : g2 : 1e3 / 60, n3 = e2 ? o3 ? 7.5 : 40 : 2.5, s3 = [Math.abs(h2[0].offsetTop), Math.abs(h2[0].offsetLeft)], d2 = [c2.scrollRatio.y > 10 ? 10 : c2.scrollRatio.y, c2.scrollRatio.x > 10 ? 10 : c2.scrollRatio.x], u3 = "x" === f2.dir[0] ? s3[1] + f2.dir[1] * d2[1] * n3 : s3[0] + f2.dir[1] * d2[0] * n3, m3 = "x" === f2.dir[0] ? s3[1] + f2.dir[1] * parseInt(f2.scrollAmount) : s3[0] + f2.dir[1] * parseInt(f2.scrollAmount), v2 = "auto" !== f2.scrollAmount ? m3 : u3, x2 = i2 ? i2 : e2 ? o3 ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear", _2 = e2 ? true : false;
        return e2 && 17 > a2 && (v2 = "x" === f2.dir[0] ? s3[1] : s3[0]), Q(t2, v2.toString(), { dir: f2.dir[0], scrollEasing: x2, dur: a2, onComplete: _2 }), e2 ? void (f2.dir = false) : (clearTimeout(f2.step), void (f2.step = setTimeout(function() {
          l2();
        }, a2)));
      }
      function s2() {
        clearTimeout(f2.step), Z(f2, "step"), V(t2);
      }
      var c2 = t2.data(a), u2 = c2.opt, f2 = c2.sequential, h2 = e("#mCSB_" + c2.idx + "_container"), m2 = "stepped" === f2.type ? true : false, p2 = u2.scrollInertia < 26 ? 26 : u2.scrollInertia, g2 = u2.scrollInertia < 1 ? 17 : u2.scrollInertia;
      switch (o2) {
        case "on":
          if (f2.dir = [n2 === d[16] || n2 === d[15] || 39 === n2 || 37 === n2 ? "x" : "y", n2 === d[13] || n2 === d[15] || 38 === n2 || 37 === n2 ? -1 : 1], V(t2), te(n2) && "stepped" === f2.type)
            return;
          l2(m2);
          break;
        case "off":
          s2(), (m2 || c2.tweenRunning && f2.dir) && l2(true);
      }
    }, Y = function(t2) {
      var o2 = e(this).data(a).opt, n2 = [];
      return "function" == typeof t2 && (t2 = t2()), t2 instanceof Array ? n2 = t2.length > 1 ? [t2[0], t2[1]] : "x" === o2.axis ? [null, t2[0]] : [t2[0], null] : (n2[0] = t2.y ? t2.y : t2.x || "x" === o2.axis ? null : t2, n2[1] = t2.x ? t2.x : t2.y || "y" === o2.axis ? null : t2), "function" == typeof n2[0] && (n2[0] = n2[0]()), "function" == typeof n2[1] && (n2[1] = n2[1]()), n2;
    }, j = function(t2, o2) {
      if (null != t2 && "undefined" != typeof t2) {
        var n2 = e(this), i2 = n2.data(a), r2 = i2.opt, l2 = e("#mCSB_" + i2.idx + "_container"), s2 = l2.parent(), c2 = typeof t2;
        o2 || (o2 = "x" === r2.axis ? "x" : "y");
        var d2 = "x" === o2 ? l2.outerWidth(false) : l2.outerHeight(false), f2 = "x" === o2 ? l2[0].offsetLeft : l2[0].offsetTop, h2 = "x" === o2 ? "left" : "top";
        switch (c2) {
          case "function":
            return t2();
          case "object":
            var m2 = t2.jquery ? t2 : e(t2);
            if (!m2.length)
              return;
            return "x" === o2 ? oe(m2)[1] : oe(m2)[0];
          case "string":
          case "number":
            if (te(t2))
              return Math.abs(t2);
            if (-1 !== t2.indexOf("%"))
              return Math.abs(d2 * parseInt(t2) / 100);
            if (-1 !== t2.indexOf("-="))
              return Math.abs(f2 - parseInt(t2.split("-=")[1]));
            if (-1 !== t2.indexOf("+=")) {
              var p2 = f2 + parseInt(t2.split("+=")[1]);
              return p2 >= 0 ? 0 : Math.abs(p2);
            }
            if (-1 !== t2.indexOf("px") && te(t2.split("px")[0]))
              return Math.abs(t2.split("px")[0]);
            if ("top" === t2 || "left" === t2)
              return 0;
            if ("bottom" === t2)
              return Math.abs(s2.height() - l2.outerHeight(false));
            if ("right" === t2)
              return Math.abs(s2.width() - l2.outerWidth(false));
            if ("first" === t2 || "last" === t2) {
              var m2 = l2.find(":" + t2);
              return "x" === o2 ? oe(m2)[1] : oe(m2)[0];
            }
            return e(t2).length ? "x" === o2 ? oe(e(t2))[1] : oe(e(t2))[0] : (l2.css(h2, t2), void u.update.call(null, n2[0]));
        }
      }
    }, X = function(t2) {
      function o2() {
        return clearTimeout(h2[0].autoUpdate), 0 === s2.parents("html").length ? void (s2 = null) : void (h2[0].autoUpdate = setTimeout(function() {
          return f2.advanced.updateOnSelectorChange && (m2 = r2(), m2 !== w2) ? (l2(3), void (w2 = m2)) : (f2.advanced.updateOnContentResize && (p2 = [h2.outerHeight(false), h2.outerWidth(false), v2.height(), v2.width(), _2()[0], _2()[1]], (p2[0] !== S2[0] || p2[1] !== S2[1] || p2[2] !== S2[2] || p2[3] !== S2[3] || p2[4] !== S2[4] || p2[5] !== S2[5]) && (l2(p2[0] !== S2[0] || p2[1] !== S2[1]), S2 = p2)), f2.advanced.updateOnImageLoad && (g2 = n2(), g2 !== b2 && (h2.find("img").each(function() {
            i2(this);
          }), b2 = g2)), void ((f2.advanced.updateOnSelectorChange || f2.advanced.updateOnContentResize || f2.advanced.updateOnImageLoad) && o2()));
        }, f2.advanced.autoUpdateTimeout));
      }
      function n2() {
        var e2 = 0;
        return f2.advanced.updateOnImageLoad && (e2 = h2.find("img").length), e2;
      }
      function i2(t3) {
        function o3(e2, t4) {
          return function() {
            return t4.apply(e2, arguments);
          };
        }
        function a2() {
          this.onload = null, e(t3).addClass(d[2]), l2(2);
        }
        if (e(t3).hasClass(d[2]))
          return void l2();
        var n3 = new Image();
        n3.onload = o3(n3, a2), n3.src = t3.src;
      }
      function r2() {
        f2.advanced.updateOnSelectorChange === true && (f2.advanced.updateOnSelectorChange = "*");
        var t3 = 0, o3 = h2.find(f2.advanced.updateOnSelectorChange);
        return f2.advanced.updateOnSelectorChange && o3.length > 0 && o3.each(function() {
          t3 += e(this).height() + e(this).width();
        }), t3;
      }
      function l2(e2) {
        clearTimeout(h2[0].autoUpdate), u.update.call(null, s2[0], e2);
      }
      var s2 = e(this), c2 = s2.data(a), f2 = c2.opt, h2 = e("#mCSB_" + c2.idx + "_container");
      if (t2)
        return clearTimeout(h2[0].autoUpdate), void Z(h2[0], "autoUpdate");
      var m2, p2, g2, v2 = h2.parent(), x2 = [e("#mCSB_" + c2.idx + "_scrollbar_vertical"), e("#mCSB_" + c2.idx + "_scrollbar_horizontal")], _2 = function() {
        return [x2[0].is(":visible") ? x2[0].outerHeight(true) : 0, x2[1].is(":visible") ? x2[1].outerWidth(true) : 0];
      }, w2 = r2(), S2 = [h2.outerHeight(false), h2.outerWidth(false), v2.height(), v2.width(), _2()[0], _2()[1]], b2 = n2();
      o2();
    }, N = function(e2, t2, o2) {
      return Math.round(e2 / t2) * t2 - o2;
    }, V = function(t2) {
      var o2 = t2.data(a), n2 = e("#mCSB_" + o2.idx + "_container,#mCSB_" + o2.idx + "_container_wrapper,#mCSB_" + o2.idx + "_dragger_vertical,#mCSB_" + o2.idx + "_dragger_horizontal");
      n2.each(function() {
        K.call(this);
      });
    }, Q = function(t2, o2, n2) {
      function i2(e2) {
        return s2 && c2.callbacks[e2] && "function" == typeof c2.callbacks[e2];
      }
      function r2() {
        return [c2.callbacks.alwaysTriggerOffsets || _2 >= w2[0] + b2, c2.callbacks.alwaysTriggerOffsets || -C2 >= _2];
      }
      function l2() {
        var e2 = [h2[0].offsetTop, h2[0].offsetLeft], o3 = [v2[0].offsetTop, v2[0].offsetLeft], a2 = [h2.outerHeight(false), h2.outerWidth(false)], i3 = [f2.height(), f2.width()];
        t2[0].mcs = { content: h2, top: e2[0], left: e2[1], draggerTop: o3[0], draggerLeft: o3[1], topPct: Math.round(100 * Math.abs(e2[0]) / (Math.abs(a2[0]) - i3[0])), leftPct: Math.round(100 * Math.abs(e2[1]) / (Math.abs(a2[1]) - i3[1])), direction: n2.dir };
      }
      var s2 = t2.data(a), c2 = s2.opt, d2 = {
        trigger: "internal",
        dir: "y",
        scrollEasing: "mcsEaseOut",
        drag: false,
        dur: c2.scrollInertia,
        overwrite: "all",
        callbacks: true,
        onStart: true,
        onUpdate: true,
        onComplete: true
      }, n2 = e.extend(d2, n2), u2 = [n2.dur, n2.drag ? 0 : n2.dur], f2 = e("#mCSB_" + s2.idx), h2 = e("#mCSB_" + s2.idx + "_container"), m2 = h2.parent(), p2 = c2.callbacks.onTotalScrollOffset ? Y.call(t2, c2.callbacks.onTotalScrollOffset) : [0, 0], g2 = c2.callbacks.onTotalScrollBackOffset ? Y.call(t2, c2.callbacks.onTotalScrollBackOffset) : [0, 0];
      if (s2.trigger = n2.trigger, (0 !== m2.scrollTop() || 0 !== m2.scrollLeft()) && (e(".mCSB_" + s2.idx + "_scrollbar").css("visibility", "visible"), m2.scrollTop(0).scrollLeft(0)), "_resetY" !== o2 || s2.contentReset.y || (i2("onOverflowYNone") && c2.callbacks.onOverflowYNone.call(t2[0]), s2.contentReset.y = 1), "_resetX" !== o2 || s2.contentReset.x || (i2("onOverflowXNone") && c2.callbacks.onOverflowXNone.call(t2[0]), s2.contentReset.x = 1), "_resetY" !== o2 && "_resetX" !== o2) {
        switch (!s2.contentReset.y && t2[0].mcs || !s2.overflowed[0] || (i2("onOverflowY") && c2.callbacks.onOverflowY.call(t2[0]), s2.contentReset.x = null), !s2.contentReset.x && t2[0].mcs || !s2.overflowed[1] || (i2("onOverflowX") && c2.callbacks.onOverflowX.call(t2[0]), s2.contentReset.x = null), c2.snapAmount && (o2 = N(o2, c2.snapAmount, c2.snapOffset)), n2.dir) {
          case "x":
            var v2 = e("#mCSB_" + s2.idx + "_dragger_horizontal"), x2 = "left", _2 = h2[0].offsetLeft, w2 = [f2.width() - h2.outerWidth(false), v2.parent().width() - v2.width()], S2 = [o2, 0 === o2 ? 0 : o2 / s2.scrollRatio.x], b2 = p2[1], C2 = g2[1], B2 = b2 > 0 ? b2 / s2.scrollRatio.x : 0, T2 = C2 > 0 ? C2 / s2.scrollRatio.x : 0;
            break;
          case "y":
            var v2 = e("#mCSB_" + s2.idx + "_dragger_vertical"), x2 = "top", _2 = h2[0].offsetTop, w2 = [f2.height() - h2.outerHeight(false), v2.parent().height() - v2.height()], S2 = [o2, 0 === o2 ? 0 : o2 / s2.scrollRatio.y], b2 = p2[0], C2 = g2[0], B2 = b2 > 0 ? b2 / s2.scrollRatio.y : 0, T2 = C2 > 0 ? C2 / s2.scrollRatio.y : 0;
        }
        S2[1] < 0 || 0 === S2[0] && 0 === S2[1] ? S2 = [0, 0] : S2[1] >= w2[1] ? S2 = [w2[0], w2[1]] : S2[0] = -S2[0], t2[0].mcs || (l2(), i2("onInit") && c2.callbacks.onInit.call(t2[0])), clearTimeout(h2[0].onCompleteTimeout), (s2.tweenRunning || !(0 === _2 && S2[0] >= 0 || _2 === w2[0] && S2[0] <= w2[0])) && (G(v2[0], x2, Math.round(S2[1]), u2[1], n2.scrollEasing), G(h2[0], x2, Math.round(S2[0]), u2[0], n2.scrollEasing, n2.overwrite, { onStart: function() {
          n2.callbacks && n2.onStart && !s2.tweenRunning && (i2("onScrollStart") && (l2(), c2.callbacks.onScrollStart.call(t2[0])), s2.tweenRunning = true, y(v2), s2.cbOffsets = r2());
        }, onUpdate: function() {
          n2.callbacks && n2.onUpdate && i2("whileScrolling") && (l2(), c2.callbacks.whileScrolling.call(t2[0]));
        }, onComplete: function() {
          if (n2.callbacks && n2.onComplete) {
            "yx" === c2.axis && clearTimeout(h2[0].onCompleteTimeout);
            var e2 = h2[0].idleTimer || 0;
            h2[0].onCompleteTimeout = setTimeout(function() {
              i2("onScroll") && (l2(), c2.callbacks.onScroll.call(t2[0])), i2("onTotalScroll") && S2[1] >= w2[1] - B2 && s2.cbOffsets[0] && (l2(), c2.callbacks.onTotalScroll.call(t2[0])), i2("onTotalScrollBack") && S2[1] <= T2 && s2.cbOffsets[1] && (l2(), c2.callbacks.onTotalScrollBack.call(t2[0])), s2.tweenRunning = false, h2[0].idleTimer = 0, y(v2, "hide");
            }, e2);
          }
        } }));
      }
    }, G = function(e2, t2, o2, a2, n2, i2, r2) {
      function l2() {
        S2.stop || (x2 || m2.call(), x2 = J() - v2, s2(), x2 >= S2.time && (S2.time = x2 > S2.time ? x2 + f2 - (x2 - S2.time) : x2 + f2 - 1, S2.time < x2 + 1 && (S2.time = x2 + 1)), S2.time < a2 ? S2.id = h2(l2) : g2.call());
      }
      function s2() {
        a2 > 0 ? (S2.currVal = u2(S2.time, _2, b2, a2, n2), w2[t2] = Math.round(S2.currVal) + "px") : w2[t2] = o2 + "px", p2.call();
      }
      function c2() {
        f2 = 1e3 / 60, S2.time = x2 + f2, h2 = window.requestAnimationFrame ? window.requestAnimationFrame : function(e3) {
          return s2(), setTimeout(e3, 0.01);
        }, S2.id = h2(l2);
      }
      function d2() {
        null != S2.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S2.id) : clearTimeout(S2.id), S2.id = null);
      }
      function u2(e3, t3, o3, a3, n3) {
        switch (n3) {
          case "linear":
          case "mcsLinear":
            return o3 * e3 / a3 + t3;
          case "mcsLinearOut":
            return e3 /= a3, e3--, o3 * Math.sqrt(1 - e3 * e3) + t3;
          case "easeInOutSmooth":
            return e3 /= a3 / 2, 1 > e3 ? o3 / 2 * e3 * e3 + t3 : (e3--, -o3 / 2 * (e3 * (e3 - 2) - 1) + t3);
          case "easeInOutStrong":
            return e3 /= a3 / 2, 1 > e3 ? o3 / 2 * Math.pow(2, 10 * (e3 - 1)) + t3 : (e3--, o3 / 2 * (-Math.pow(2, -10 * e3) + 2) + t3);
          case "easeInOut":
          case "mcsEaseInOut":
            return e3 /= a3 / 2, 1 > e3 ? o3 / 2 * e3 * e3 * e3 + t3 : (e3 -= 2, o3 / 2 * (e3 * e3 * e3 + 2) + t3);
          case "easeOutSmooth":
            return e3 /= a3, e3--, -o3 * (e3 * e3 * e3 * e3 - 1) + t3;
          case "easeOutStrong":
            return o3 * (-Math.pow(2, -10 * e3 / a3) + 1) + t3;
          case "easeOut":
          case "mcsEaseOut":
          default:
            var i3 = (e3 /= a3) * e3, r3 = i3 * e3;
            return t3 + o3 * (0.499999999999997 * r3 * i3 + -2.5 * i3 * i3 + 5.5 * r3 + -6.5 * i3 + 4 * e3);
        }
      }
      e2._mTween || (e2._mTween = { top: {}, left: {} });
      var f2, h2, r2 = r2 || {}, m2 = r2.onStart || function() {
      }, p2 = r2.onUpdate || function() {
      }, g2 = r2.onComplete || function() {
      }, v2 = J(), x2 = 0, _2 = e2.offsetTop, w2 = e2.style, S2 = e2._mTween[t2];
      "left" === t2 && (_2 = e2.offsetLeft);
      var b2 = o2 - _2;
      S2.stop = 0, "none" !== i2 && d2(), c2();
    }, J = function() {
      return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (/* @__PURE__ */ new Date()).getTime();
    }, K = function() {
      var e2 = this;
      e2._mTween || (e2._mTween = { top: {}, left: {} });
      for (var t2 = ["top", "left"], o2 = 0; o2 < t2.length; o2++) {
        var a2 = t2[o2];
        e2._mTween[a2].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e2._mTween[a2].id) : clearTimeout(e2._mTween[a2].id), e2._mTween[a2].id = null, e2._mTween[a2].stop = 1);
      }
    }, Z = function(e2, t2) {
      try {
        delete e2[t2];
      } catch (o2) {
        e2[t2] = null;
      }
    }, $ = function(e2) {
      return !(e2.which && 1 !== e2.which);
    }, ee = function(e2) {
      var t2 = e2.originalEvent.pointerType;
      return !(t2 && "touch" !== t2 && 2 !== t2);
    }, te = function(e2) {
      return !isNaN(parseFloat(e2)) && isFinite(e2);
    }, oe = function(e2) {
      var t2 = e2.parents(".mCSB_container");
      return [e2.offset().top - t2.offset().top, e2.offset().left - t2.offset().left];
    };
    e.fn[o] = function(t2) {
      return u[t2] ? u[t2].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t2 && t2 ? void e.error("Method " + t2 + " does not exist") : u.init.apply(this, arguments);
    }, e[o] = function(t2) {
      return u[t2] ? u[t2].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t2 && t2 ? void e.error("Method " + t2 + " does not exist") : u.init.apply(this, arguments);
    }, e[o].defaults = i, window[o] = true, e(window).load(function() {
      e(n)[o](), e.extend(e.expr[":"], { mcsInView: e.expr[":"].mcsInView || function(t2) {
        var o2, a2, n2 = e(t2), i2 = n2.parents(".mCSB_container");
        if (i2.length)
          return o2 = i2.parent(), a2 = [i2[0].offsetTop, i2[0].offsetLeft], a2[0] + oe(n2)[0] >= 0 && a2[0] + oe(n2)[0] < o2.height() - n2.outerHeight(false) && a2[1] + oe(n2)[1] >= 0 && a2[1] + oe(n2)[1] < o2.width() - n2.outerWidth(false);
      }, mcsOverflow: e.expr[":"].mcsOverflow || function(t2) {
        var o2 = e(t2).data(a);
        if (o2)
          return o2.overflowed[0] || o2.overflowed[1];
      } });
    });
  });
});
