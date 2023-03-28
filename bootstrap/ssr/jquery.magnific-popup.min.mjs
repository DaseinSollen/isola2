/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
}(function(a) {
  var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function() {
  }, u = !!window.jQuery, v = a(window), w = function(a2, c2) {
    b.ev.on(o + a2 + p, c2);
  }, x = function(b2, c2, d2, e2) {
    var f2 = document.createElement("div");
    return f2.className = "mfp-" + b2, d2 && (f2.innerHTML = d2), e2 ? c2 && c2.appendChild(f2) : (f2 = a(f2), c2 && f2.appendTo(c2)), f2;
  }, y = function(c2, d2) {
    b.ev.triggerHandler(o + c2, d2), b.st.callbacks && (c2 = c2.charAt(0).toLowerCase() + c2.slice(1), b.st.callbacks[c2] && b.st.callbacks[c2].apply(b, a.isArray(d2) ? d2 : [d2]));
  }, z = function(c2) {
    return c2 === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c2), b.currTemplate.closeBtn;
  }, A = function() {
    a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
  }, B = function() {
    var a2 = document.createElement("p").style, b2 = ["ms", "O", "Moz", "Webkit"];
    if (void 0 !== a2.transition)
      return true;
    for (; b2.length; )
      if (b2.pop() + "Transition" in a2)
        return true;
    return false;
  };
  t.prototype = { constructor: t, init: function() {
    var c2 = navigator.appVersion;
    b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c2), b.isIOS = /iphone|ipad|ipod/gi.test(c2), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
  }, open: function(c2) {
    var e2;
    if (c2.isObj === false) {
      b.items = c2.items.toArray(), b.index = 0;
      var g2, h2 = c2.items;
      for (e2 = 0; e2 < h2.length; e2++)
        if (g2 = h2[e2], g2.parsed && (g2 = g2.el[0]), g2 === c2.el[0]) {
          b.index = e2;
          break;
        }
    } else
      b.items = a.isArray(c2.items) ? c2.items : [c2.items], b.index = c2.index || 0;
    if (b.isOpen)
      return void b.updateItemHTML();
    b.types = [], f = "", c2.mainEl && c2.mainEl.length ? b.ev = c2.mainEl.eq(0) : b.ev = d, c2.key ? (b.popupsCache[c2.key] || (b.popupsCache[c2.key] = {}), b.currTemplate = b.popupsCache[c2.key]) : b.currTemplate = {}, b.st = a.extend(true, {}, a.magnificPopup.defaults, c2), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = false, b.st.closeOnBgClick = false, b.st.showCloseBtn = false, b.st.enableEscapeKey = false), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
      b.close();
    }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a2) {
      b._checkIfClose(a2.target) && b.close();
    }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
    var i2 = a.magnificPopup.modules;
    for (e2 = 0; e2 < i2.length; e2++) {
      var j2 = i2[e2];
      j2 = j2.charAt(0).toUpperCase() + j2.slice(1), b["init" + j2].call(b);
    }
    y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a2, b2, c3, d2) {
      c3.close_replaceWith = z(d2.type);
    }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === false || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function(a2) {
      27 === a2.keyCode && b.close();
    }), v.on("resize" + p, function() {
      b.updateSize();
    }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
    var k2 = b.wH = v.height(), n2 = {};
    if (b.fixedContentPos && b._hasScrollBar(k2)) {
      var o2 = b._getScrollbarSize();
      o2 && (n2.marginRight = o2);
    }
    b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n2.overflow = "hidden");
    var r2 = b.st.mainClass;
    return b.isIE7 && (r2 += " mfp-ie7"), r2 && b._addClassToMFP(r2), b.updateItemHTML(), y("BuildControls"), a("html").css(n2), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
      b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
    }, 16), b.isOpen = true, b.updateSize(k2), y(m), c2;
  }, close: function() {
    b.isOpen && (y(i), b.isOpen = false, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
      b._close();
    }, b.st.removalDelay)) : b._close());
  }, _close: function() {
    y(h);
    var c2 = r + " " + q + " ";
    if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c2 += b.st.mainClass + " "), b._removeClassFromMFP(c2), b.fixedContentPos) {
      var e2 = { marginRight: "" };
      b.isIE7 ? a("body, html").css("overflow", "") : e2.overflow = "", a("html").css(e2);
    }
    d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== true || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
  }, updateSize: function(a2) {
    if (b.isIOS) {
      var c2 = document.documentElement.clientWidth / window.innerWidth, d2 = window.innerHeight * c2;
      b.wrap.css("height", d2), b.wH = d2;
    } else
      b.wH = a2 || v.height();
    b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
  }, updateItemHTML: function() {
    var c2 = b.items[b.index];
    b.contentContainer.detach(), b.content && b.content.detach(), c2.parsed || (c2 = b.parseEl(b.index));
    var d2 = c2.type;
    if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d2]), b.currItem = c2, !b.currTemplate[d2]) {
      var f2 = b.st[d2] ? b.st[d2].markup : false;
      y("FirstMarkupParse", f2), f2 ? b.currTemplate[d2] = a(f2) : b.currTemplate[d2] = true;
    }
    e && e !== c2.type && b.container.removeClass("mfp-" + e + "-holder");
    var g2 = b["get" + d2.charAt(0).toUpperCase() + d2.slice(1)](c2, b.currTemplate[d2]);
    b.appendContent(g2, d2), c2.preloaded = true, y(n, c2), e = c2.type, b.container.prepend(b.contentContainer), y("AfterChange");
  }, appendContent: function(a2, c2) {
    b.content = a2, a2 ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c2] === true ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a2 : b.content = "", y(k), b.container.addClass("mfp-" + c2 + "-holder"), b.contentContainer.append(b.content);
  }, parseEl: function(c2) {
    var d2, e2 = b.items[c2];
    if (e2.tagName ? e2 = { el: a(e2) } : (d2 = e2.type, e2 = { data: e2, src: e2.src }), e2.el) {
      for (var f2 = b.types, g2 = 0; g2 < f2.length; g2++)
        if (e2.el.hasClass("mfp-" + f2[g2])) {
          d2 = f2[g2];
          break;
        }
      e2.src = e2.el.attr("data-mfp-src"), e2.src || (e2.src = e2.el.attr("href"));
    }
    return e2.type = d2 || b.st.type || "inline", e2.index = c2, e2.parsed = true, b.items[c2] = e2, y("ElementParse", e2), b.items[c2];
  }, addGroup: function(a2, c2) {
    var d2 = function(d3) {
      d3.mfpEl = this, b._openClick(d3, a2, c2);
    };
    c2 || (c2 = {});
    var e2 = "click.magnificPopup";
    c2.mainEl = a2, c2.items ? (c2.isObj = true, a2.off(e2).on(e2, d2)) : (c2.isObj = false, c2.delegate ? a2.off(e2).on(e2, c2.delegate, d2) : (c2.items = a2, a2.off(e2).on(e2, d2)));
  }, _openClick: function(c2, d2, e2) {
    var f2 = void 0 !== e2.midClick ? e2.midClick : a.magnificPopup.defaults.midClick;
    if (f2 || !(2 === c2.which || c2.ctrlKey || c2.metaKey || c2.altKey || c2.shiftKey)) {
      var g2 = void 0 !== e2.disableOn ? e2.disableOn : a.magnificPopup.defaults.disableOn;
      if (g2) {
        if (a.isFunction(g2)) {
          if (!g2.call(b))
            return true;
        } else if (v.width() < g2)
          return true;
      }
      c2.type && (c2.preventDefault(), b.isOpen && c2.stopPropagation()), e2.el = a(c2.mfpEl), e2.delegate && (e2.items = d2.find(e2.delegate)), b.open(e2);
    }
  }, updateStatus: function(a2, d2) {
    if (b.preloader) {
      c !== a2 && b.container.removeClass("mfp-s-" + c), d2 || "loading" !== a2 || (d2 = b.st.tLoading);
      var e2 = { status: a2, text: d2 };
      y("UpdateStatus", e2), a2 = e2.status, d2 = e2.text, b.preloader.html(d2), b.preloader.find("a").on("click", function(a3) {
        a3.stopImmediatePropagation();
      }), b.container.addClass("mfp-s-" + a2), c = a2;
    }
  }, _checkIfClose: function(c2) {
    if (!a(c2).hasClass(s)) {
      var d2 = b.st.closeOnContentClick, e2 = b.st.closeOnBgClick;
      if (d2 && e2)
        return true;
      if (!b.content || a(c2).hasClass("mfp-close") || b.preloader && c2 === b.preloader[0])
        return true;
      if (c2 === b.content[0] || a.contains(b.content[0], c2)) {
        if (d2)
          return true;
      } else if (e2 && a.contains(document, c2))
        return true;
      return false;
    }
  }, _addClassToMFP: function(a2) {
    b.bgOverlay.addClass(a2), b.wrap.addClass(a2);
  }, _removeClassFromMFP: function(a2) {
    this.bgOverlay.removeClass(a2), b.wrap.removeClass(a2);
  }, _hasScrollBar: function(a2) {
    return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a2 || v.height());
  }, _setFocus: function() {
    (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
  }, _onFocusIn: function(c2) {
    return c2.target === b.wrap[0] || a.contains(b.wrap[0], c2.target) ? void 0 : (b._setFocus(), false);
  }, _parseMarkup: function(b2, c2, d2) {
    var e2;
    d2.data && (c2 = a.extend(d2.data, c2)), y(l, [b2, c2, d2]), a.each(c2, function(c3, d3) {
      if (void 0 === d3 || d3 === false)
        return true;
      if (e2 = c3.split("_"), e2.length > 1) {
        var f2 = b2.find(p + "-" + e2[0]);
        if (f2.length > 0) {
          var g2 = e2[1];
          "replaceWith" === g2 ? f2[0] !== d3[0] && f2.replaceWith(d3) : "img" === g2 ? f2.is("img") ? f2.attr("src", d3) : f2.replaceWith(a("<img>").attr("src", d3).attr("class", f2.attr("class"))) : f2.attr(e2[1], d3);
        }
      } else
        b2.find(p + "-" + c3).html(d3);
    });
  }, _getScrollbarSize: function() {
    if (void 0 === b.scrollbarSize) {
      var a2 = document.createElement("div");
      a2.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a2), b.scrollbarSize = a2.offsetWidth - a2.clientWidth, document.body.removeChild(a2);
    }
    return b.scrollbarSize;
  } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function(b2, c2) {
    return A(), b2 = b2 ? a.extend(true, {}, b2) : {}, b2.isObj = true, b2.index = c2 || 0, this.instance.open(b2);
  }, close: function() {
    return a.magnificPopup.instance && a.magnificPopup.instance.close();
  }, registerModule: function(b2, c2) {
    c2.options && (a.magnificPopup.defaults[b2] = c2.options), a.extend(this.proto, c2.proto), this.modules.push(b2);
  }, defaults: { disableOn: 0, key: null, midClick: false, mainClass: "", preloader: true, focus: "", closeOnContentClick: false, closeOnBgClick: true, closeBtnInside: true, showCloseBtn: true, enableEscapeKey: true, modal: false, alignTop: false, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: true } }, a.fn.magnificPopup = function(c2) {
    A();
    var d2 = a(this);
    if ("string" == typeof c2)
      if ("open" === c2) {
        var e2, f2 = u ? d2.data("magnificPopup") : d2[0].magnificPopup, g2 = parseInt(arguments[1], 10) || 0;
        f2.items ? e2 = f2.items[g2] : (e2 = d2, f2.delegate && (e2 = e2.find(f2.delegate)), e2 = e2.eq(g2)), b._openClick({ mfpEl: e2 }, d2, f2);
      } else
        b.isOpen && b[c2].apply(b, Array.prototype.slice.call(arguments, 1));
    else
      c2 = a.extend(true, {}, c2), u ? d2.data("magnificPopup", c2) : d2[0].magnificPopup = c2, b.addGroup(d2, c2);
    return d2;
  };
  var C, D, E, F = "inline", G = function() {
    E && (D.after(E.addClass(C)).detach(), E = null);
  };
  a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function() {
    b.types.push(F), w(h + "." + F, function() {
      G();
    });
  }, getInline: function(c2, d2) {
    if (G(), c2.src) {
      var e2 = b.st.inline, f2 = a(c2.src);
      if (f2.length) {
        var g2 = f2[0].parentNode;
        g2 && g2.tagName && (D || (C = e2.hiddenClass, D = x(C), C = "mfp-" + C), E = f2.after(D).detach().removeClass(C)), b.updateStatus("ready");
      } else
        b.updateStatus("error", e2.tNotFound), f2 = a("<div>");
      return c2.inlineElement = f2, f2;
    }
    return b.updateStatus("ready"), b._parseMarkup(d2, {}, c2), d2;
  } } });
  var H, I = "ajax", J = function() {
    H && a(document.body).removeClass(H);
  }, K = function() {
    J(), b.req && b.req.abort();
  };
  a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() {
    b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
  }, getAjax: function(c2) {
    H && a(document.body).addClass(H), b.updateStatus("loading");
    var d2 = a.extend({ url: c2.src, success: function(d3, e2, f2) {
      var g2 = { data: d3, xhr: f2 };
      y("ParseAjax", g2), b.appendContent(a(g2.data), I), c2.finished = true, J(), b._setFocus(), setTimeout(function() {
        b.wrap.addClass(q);
      }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
    }, error: function() {
      J(), c2.finished = c2.loadError = true, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c2.src));
    } }, b.st.ajax.settings);
    return b.req = a.ajax(d2), "";
  } } });
  var L, M = function(c2) {
    if (c2.data && void 0 !== c2.data.title)
      return c2.data.title;
    var d2 = b.st.image.titleSrc;
    if (d2) {
      if (a.isFunction(d2))
        return d2.call(b, c2);
      if (c2.el)
        return c2.el.attr(d2) || "";
    }
    return "";
  };
  a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: true, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function() {
    var c2 = b.st.image, d2 = ".image";
    b.types.push("image"), w(m + d2, function() {
      "image" === b.currItem.type && c2.cursor && a(document.body).addClass(c2.cursor);
    }), w(h + d2, function() {
      c2.cursor && a(document.body).removeClass(c2.cursor), v.off("resize" + p);
    }), w("Resize" + d2, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
  }, resizeImage: function() {
    var a2 = b.currItem;
    if (a2 && a2.img && b.st.image.verticalFit) {
      var c2 = 0;
      b.isLowIE && (c2 = parseInt(a2.img.css("padding-top"), 10) + parseInt(a2.img.css("padding-bottom"), 10)), a2.img.css("max-height", b.wH - c2);
    }
  }, _onImageHasSize: function(a2) {
    a2.img && (a2.hasSize = true, L && clearInterval(L), a2.isCheckingImgSize = false, y("ImageHasSize", a2), a2.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a2.imgHidden = false));
  }, findImageSize: function(a2) {
    var c2 = 0, d2 = a2.img[0], e2 = function(f2) {
      L && clearInterval(L), L = setInterval(function() {
        return d2.naturalWidth > 0 ? void b._onImageHasSize(a2) : (c2 > 200 && clearInterval(L), c2++, void (3 === c2 ? e2(10) : 40 === c2 ? e2(50) : 100 === c2 && e2(500)));
      }, f2);
    };
    e2(1);
  }, getImage: function(c2, d2) {
    var e2 = 0, f2 = function() {
      c2 && (c2.img[0].complete ? (c2.img.off(".mfploader"), c2 === b.currItem && (b._onImageHasSize(c2), b.updateStatus("ready")), c2.hasSize = true, c2.loaded = true, y("ImageLoadComplete")) : (e2++, 200 > e2 ? setTimeout(f2, 100) : g2()));
    }, g2 = function() {
      c2 && (c2.img.off(".mfploader"), c2 === b.currItem && (b._onImageHasSize(c2), b.updateStatus("error", h2.tError.replace("%url%", c2.src))), c2.hasSize = true, c2.loaded = true, c2.loadError = true);
    }, h2 = b.st.image, i2 = d2.find(".mfp-img");
    if (i2.length) {
      var j2 = document.createElement("img");
      j2.className = "mfp-img", c2.el && c2.el.find("img").length && (j2.alt = c2.el.find("img").attr("alt")), c2.img = a(j2).on("load.mfploader", f2).on("error.mfploader", g2), j2.src = c2.src, i2.is("img") && (c2.img = c2.img.clone()), j2 = c2.img[0], j2.naturalWidth > 0 ? c2.hasSize = true : j2.width || (c2.hasSize = false);
    }
    return b._parseMarkup(d2, { title: M(c2), img_replaceWith: c2.img }, c2), b.resizeImage(), c2.hasSize ? (L && clearInterval(L), c2.loadError ? (d2.addClass("mfp-loading"), b.updateStatus("error", h2.tError.replace("%url%", c2.src))) : (d2.removeClass("mfp-loading"), b.updateStatus("ready")), d2) : (b.updateStatus("loading"), c2.loading = true, c2.hasSize || (c2.imgHidden = true, d2.addClass("mfp-loading"), b.findImageSize(c2)), d2);
  } } });
  var N, O = function() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
  };
  a.magnificPopup.registerModule("zoom", { options: { enabled: false, easing: "ease-in-out", duration: 300, opener: function(a2) {
    return a2.is("img") ? a2 : a2.find("img");
  } }, proto: { initZoom: function() {
    var a2, c2 = b.st.zoom, d2 = ".zoom";
    if (c2.enabled && b.supportsTransition) {
      var e2, f2, g2 = c2.duration, j2 = function(a3) {
        var b2 = a3.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d3 = "all " + c2.duration / 1e3 + "s " + c2.easing, e3 = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f3 = "transition";
        return e3["-webkit-" + f3] = e3["-moz-" + f3] = e3["-o-" + f3] = e3[f3] = d3, b2.css(e3), b2;
      }, k2 = function() {
        b.content.css("visibility", "visible");
      };
      w("BuildControls" + d2, function() {
        if (b._allowZoom()) {
          if (clearTimeout(e2), b.content.css("visibility", "hidden"), a2 = b._getItemToZoom(), !a2)
            return void k2();
          f2 = j2(a2), f2.css(b._getOffset()), b.wrap.append(f2), e2 = setTimeout(function() {
            f2.css(b._getOffset(true)), e2 = setTimeout(function() {
              k2(), setTimeout(function() {
                f2.remove(), a2 = f2 = null, y("ZoomAnimationEnded");
              }, 16);
            }, g2);
          }, 16);
        }
      }), w(i + d2, function() {
        if (b._allowZoom()) {
          if (clearTimeout(e2), b.st.removalDelay = g2, !a2) {
            if (a2 = b._getItemToZoom(), !a2)
              return;
            f2 = j2(a2);
          }
          f2.css(b._getOffset(true)), b.wrap.append(f2), b.content.css("visibility", "hidden"), setTimeout(function() {
            f2.css(b._getOffset());
          }, 16);
        }
      }), w(h + d2, function() {
        b._allowZoom() && (k2(), f2 && f2.remove(), a2 = null);
      });
    }
  }, _allowZoom: function() {
    return "image" === b.currItem.type;
  }, _getItemToZoom: function() {
    return b.currItem.hasSize ? b.currItem.img : false;
  }, _getOffset: function(c2) {
    var d2;
    d2 = c2 ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
    var e2 = d2.offset(), f2 = parseInt(d2.css("padding-top"), 10), g2 = parseInt(d2.css("padding-bottom"), 10);
    e2.top -= a(window).scrollTop() - f2;
    var h2 = { width: d2.width(), height: (u ? d2.innerHeight() : d2[0].offsetHeight) - g2 - f2 };
    return O() ? h2["-moz-transform"] = h2.transform = "translate(" + e2.left + "px," + e2.top + "px)" : (h2.left = e2.left, h2.top = e2.top), h2;
  } } });
  var P = "iframe", Q = "//about:blank", R = function(a2) {
    if (b.currTemplate[P]) {
      var c2 = b.currTemplate[P].find("iframe");
      c2.length && (a2 || (c2[0].src = Q), b.isIE8 && c2.css("display", a2 ? "block" : "none"));
    }
  };
  a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() {
    b.types.push(P), w("BeforeChange", function(a2, b2, c2) {
      b2 !== c2 && (b2 === P ? R() : c2 === P && R(true));
    }), w(h + "." + P, function() {
      R();
    });
  }, getIframe: function(c2, d2) {
    var e2 = c2.src, f2 = b.st.iframe;
    a.each(f2.patterns, function() {
      return e2.indexOf(this.index) > -1 ? (this.id && (e2 = "string" == typeof this.id ? e2.substr(e2.lastIndexOf(this.id) + this.id.length, e2.length) : this.id.call(this, e2)), e2 = this.src.replace("%id%", e2), false) : void 0;
    });
    var g2 = {};
    return f2.srcAction && (g2[f2.srcAction] = e2), b._parseMarkup(d2, g2, c2), b.updateStatus("ready"), d2;
  } } });
  var S = function(a2) {
    var c2 = b.items.length;
    return a2 > c2 - 1 ? a2 - c2 : 0 > a2 ? c2 + a2 : a2;
  }, T = function(a2, b2, c2) {
    return a2.replace(/%curr%/gi, b2 + 1).replace(/%total%/gi, c2);
  };
  a.magnificPopup.registerModule("gallery", { options: { enabled: false, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: true, arrows: true, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() {
    var c2 = b.st.gallery, e2 = ".mfp-gallery";
    return b.direction = true, c2 && c2.enabled ? (f += " mfp-gallery", w(m + e2, function() {
      c2.navigateByImgClick && b.wrap.on("click" + e2, ".mfp-img", function() {
        return b.items.length > 1 ? (b.next(), false) : void 0;
      }), d.on("keydown" + e2, function(a2) {
        37 === a2.keyCode ? b.prev() : 39 === a2.keyCode && b.next();
      });
    }), w("UpdateStatus" + e2, function(a2, c3) {
      c3.text && (c3.text = T(c3.text, b.currItem.index, b.items.length));
    }), w(l + e2, function(a2, d2, e3, f2) {
      var g2 = b.items.length;
      e3.counter = g2 > 1 ? T(c2.tCounter, f2.index, g2) : "";
    }), w("BuildControls" + e2, function() {
      if (b.items.length > 1 && c2.arrows && !b.arrowLeft) {
        var d2 = c2.arrowMarkup, e3 = b.arrowLeft = a(d2.replace(/%title%/gi, c2.tPrev).replace(/%dir%/gi, "left")).addClass(s), f2 = b.arrowRight = a(d2.replace(/%title%/gi, c2.tNext).replace(/%dir%/gi, "right")).addClass(s);
        e3.click(function() {
          b.prev();
        }), f2.click(function() {
          b.next();
        }), b.container.append(e3.add(f2));
      }
    }), w(n + e2, function() {
      b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
        b.preloadNearbyImages(), b._preloadTimeout = null;
      }, 16);
    }), void w(h + e2, function() {
      d.off(e2), b.wrap.off("click" + e2), b.arrowRight = b.arrowLeft = null;
    })) : false;
  }, next: function() {
    b.direction = true, b.index = S(b.index + 1), b.updateItemHTML();
  }, prev: function() {
    b.direction = false, b.index = S(b.index - 1), b.updateItemHTML();
  }, goTo: function(a2) {
    b.direction = a2 >= b.index, b.index = a2, b.updateItemHTML();
  }, preloadNearbyImages: function() {
    var a2, c2 = b.st.gallery.preload, d2 = Math.min(c2[0], b.items.length), e2 = Math.min(c2[1], b.items.length);
    for (a2 = 1; a2 <= (b.direction ? e2 : d2); a2++)
      b._preloadItem(b.index + a2);
    for (a2 = 1; a2 <= (b.direction ? d2 : e2); a2++)
      b._preloadItem(b.index - a2);
  }, _preloadItem: function(c2) {
    if (c2 = S(c2), !b.items[c2].preloaded) {
      var d2 = b.items[c2];
      d2.parsed || (d2 = b.parseEl(c2)), y("LazyLoad", d2), "image" === d2.type && (d2.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
        d2.hasSize = true;
      }).on("error.mfploader", function() {
        d2.hasSize = true, d2.loadError = true, y("LazyLoadError", d2);
      }).attr("src", d2.src)), d2.preloaded = true;
    }
  } } });
  var U = "retina";
  a.magnificPopup.registerModule(U, { options: { replaceSrc: function(a2) {
    return a2.src.replace(/\.\w+$/, function(a3) {
      return "@2x" + a3;
    });
  }, ratio: 1 }, proto: { initRetina: function() {
    if (window.devicePixelRatio > 1) {
      var a2 = b.st.retina, c2 = a2.ratio;
      c2 = isNaN(c2) ? c2() : c2, c2 > 1 && (w("ImageHasSize." + U, function(a3, b2) {
        b2.img.css({ "max-width": b2.img[0].naturalWidth / c2, width: "100%" });
      }), w("ElementParse." + U, function(b2, d2) {
        d2.src = a2.replaceSrc(d2, c2);
      }));
    }
  } } }), A();
});
