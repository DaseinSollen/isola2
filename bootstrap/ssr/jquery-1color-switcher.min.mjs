(function(e) {
  var t, n = { hasPreview: true, defaultThemeId: "jssDefault", fullPath: "css/", cookie: { expires: 30, isManagingLoad: true } }, r = "jss_selected", i = {};
  i = { getItem: function(e2) {
    if (!e2) {
      return null;
    }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e2).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  }, setItem: function(e2, t2, n2, r2, i2, s) {
    if (!e2 || /^(?:expires|max\-age|path|domain|secure)$/i.test(e2)) {
      return false;
    }
    var o = "";
    if (n2) {
      switch (n2.constructor) {
        case Number:
          o = n2 === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n2;
          break;
        case String:
          o = "; expires=" + n2;
          break;
        case Date:
          o = "; expires=" + n2.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(e2) + "=" + encodeURIComponent(t2) + o + (i2 ? "; domain=" + i2 : "") + (r2 ? "; path=" + r2 : "") + (s ? "; secure" : "");
    return true;
  }, removeItem: function(e2, t2, n2) {
    if (!this.hasItem(e2)) {
      return false;
    }
    document.cookie = encodeURIComponent(e2) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (n2 ? "; domain=" + n2 : "") + (t2 ? "; path=" + t2 : "");
    return true;
  }, hasItem: function(e2) {
    if (!e2) {
      return false;
    }
    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(e2).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
  }, keys: function() {
    var e2 = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var t2 = e2.length, n2 = 0; n2 < t2; n2++) {
      e2[n2] = decodeURIComponent(e2[n2]);
    }
    return e2;
  } };
  t = function(e2, t2) {
    return this.init(e2, t2);
  };
  t.prototype = { $root: null, config: {}, $themeCss: null, defaultTheme: null, init: function(e2, t2) {
    this.$root = e2;
    this.config = t2 ? t2 : {};
    this.setDefaultTheme();
    if (this.defaultTheme) {
      if (this.config.cookie) {
        this.checkCookie();
      }
      if (this.config.hasPreview) {
        this.addHoverEvents();
      }
      this.addClickEvents();
    } else {
      this.$root.addClass("jssError error level0");
    }
  }, setDefaultTheme: function() {
    this.$themeCss = e("link[id=" + this.config.defaultThemeId + "]");
    if (this.$themeCss.length) {
      this.defaultTheme = this.$themeCss.attr("href");
    }
  }, resetStyle: function() {
    this.updateStyle(this.defaultTheme);
  }, updateStyle: function(e2) {
    this.$themeCss.attr("href", e2);
  }, getFullAssetPath: function(e2) {
    return this.config.fullPath + e2 + ".css";
  }, checkCookie: function() {
    var e2;
    if (this.config.cookie && this.config.cookie.isManagingLoad) {
      e2 = i.getItem(r);
      if (e2) {
        newStyle = this.getFullAssetPath(e2);
        this.updateStyle(newStyle);
        this.defaultTheme = newStyle;
      }
    }
  }, addHoverEvents: function() {
    var t2 = this;
    this.$root.find("a").hover(function() {
      var n2 = e(this).data("theme"), r2 = t2.getFullAssetPath(n2);
      t2.updateStyle(r2);
    }, function() {
      t2.resetStyle();
    });
  }, addClickEvents: function() {
    var t2 = this;
    this.$root.find("a").click(function() {
      var n2 = e(this).data("theme"), s = t2.getFullAssetPath(n2);
      t2.updateStyle(s);
      t2.defaultTheme = s;
      if (t2.config.cookie) {
        i.setItem(r, n2, t2.config.cookie.expires);
      }
    });
  } };
  e.fn.styleSwitcher = function(r2) {
    return new t(this, e.extend(true, n, r2));
  };
})(jQuery);
