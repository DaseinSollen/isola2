(function(window2, document2, $, undefined$1) {
  if (!$) {
    return;
  }
  if ($.fn.fancybox) {
    if ("console" in window2) {
      console.log("fancyBox already initialized");
    }
    return;
  }
  var defaults = {
    // Enable infinite gallery navigation
    loop: false,
    // Space around image, ignored if zoomed-in or viewport width is smaller than 800px
    margin: [44, 0],
    // Horizontal space between slides
    gutter: 50,
    // Enable keyboard navigation
    keyboard: true,
    // Should display navigation arrows at the screen edges
    arrows: true,
    // Should display infobar (counter and arrows at the top)
    infobar: true,
    // Should display toolbar (buttons at the top)
    toolbar: true,
    // What buttons should appear in the top right corner.
    // Buttons will be created using templates from `btnTpl` option
    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
    buttons: [
      "slideShow",
      "fullScreen",
      "thumbs",
      "share",
      //'download',
      //'zoom',
      "close"
    ],
    // Detect "idle" time in seconds
    idleTime: 3,
    // Should display buttons at top right corner of the content
    // If 'auto' - they will be created for content having type 'html', 'inline' or 'ajax'
    // Use template from `btnTpl.smallBtn` for customization
    smallBtn: "auto",
    // Disable right-click and use simple image protection for images
    protect: false,
    // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
    modal: false,
    image: {
      // Wait for images to load before displaying
      // Requires predefined image dimensions
      // If 'auto' - will zoom in thumbnail if 'width' and 'height' attributes are found
      preload: "auto"
    },
    ajax: {
      // Object containing settings for ajax request
      settings: {
        // This helps to indicate that request comes from the modal
        // Feel free to change naming
        data: {
          fancybox: true
        }
      }
    },
    iframe: {
      // Iframe template
      tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
      // Preload iframe before displaying it
      // This allows to calculate iframe content width and height
      // (note: Due to "Same Origin Policy", you can't get cross domain data).
      preload: true,
      // Custom CSS styling for iframe wrapping element
      // You can use this to set custom iframe dimensions
      css: {},
      // Iframe tag attributes
      attr: {
        scrolling: "auto"
      }
    },
    // Default content type if cannot be detected automatically
    defaultType: "image",
    // Open/close animation type
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    animationEffect: "zoom",
    // Duration in ms for open/close animation
    animationDuration: 500,
    // Should image change opacity while zooming
    // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
    zoomOpacity: "auto",
    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    transitionEffect: "fade",
    // Duration in ms for transition animation
    transitionDuration: 366,
    // Custom CSS class for slide element
    slideClass: "",
    // Custom CSS class for layout
    baseClass: "",
    // Base template for layout
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
    // Loading indicator template
    spinnerTpl: '<div class="fancybox-loading"></div>',
    // Error message template
    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
    btnTpl: {
      download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
      zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
      // This small close button will be appended to your html/inline/ajax content by default,
      // if "smallBtn" option is not set to false
      smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
      // Arrows
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',
      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'
    },
    // Container is injected into this element
    parentEl: "body",
    // Focus handling
    // ==============
    // Try to focus on the first focusable element after opening
    autoFocus: false,
    // Put focus back to active element after closing
    backFocus: true,
    // Do not let user to focus on element outside modal content
    trapFocus: true,
    // Module specific options
    // =======================
    fullScreen: {
      autoStart: false
    },
    // Set `touch: false` to disable dragging/swiping
    touch: {
      vertical: true,
      // Allow to drag content vertically
      momentum: true
      // Continue movement after releasing mouse/touch when panning
    },
    // Hash value when initializing manually,
    // set `false` to disable hash change
    hash: null,
    // Customize or add new media types
    // Example:
    /*
    media : {
        youtube : {
            params : {
                autoplay : 0
            }
        }
    }
    */
    media: {},
    slideShow: {
      autoStart: false,
      speed: 4e3
    },
    thumbs: {
      autoStart: false,
      // Display thumbnails on opening
      hideOnClose: true,
      // Hide thumbnail grid when closing animation starts
      parentEl: ".fancybox-container",
      // Container is injected into this element
      axis: "y"
      // Vertical (y) or horizontal (x) scrolling
    },
    // Use mousewheel to navigate gallery
    // If 'auto' - enabled for images only
    wheel: "auto",
    // Callbacks
    //==========
    // See Documentation/API/Events for more information
    // Example:
    /*
        afterShow: function( instance, current ) {
             console.info( 'Clicked element:' );
             console.info( current.opts.$orig );
        }
    */
    onInit: $.noop,
    // When instance has been initialized
    beforeLoad: $.noop,
    // Before the content of a slide is being loaded
    afterLoad: $.noop,
    // When the content of a slide is done loading
    beforeShow: $.noop,
    // Before open animation starts
    afterShow: $.noop,
    // When content is done loading and animating
    beforeClose: $.noop,
    // Before the instance attempts to close. Return false to cancel the close.
    afterClose: $.noop,
    // After instance has been closed
    onActivate: $.noop,
    // When instance is brought to front
    onDeactivate: $.noop,
    // When other instance has been activated
    // Interaction
    // ===========
    // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
    // each option can be string or method that returns value.
    //
    // Possible values:
    //   "close"           - close instance
    //   "next"            - move to next gallery item
    //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
    //   "toggleControls"  - show/hide controls
    //   "zoom"            - zoom image (if loaded)
    //   false             - do nothing
    // Clicked on the content
    clickContent: function(current, event) {
      return current.type === "image" ? "zoom" : false;
    },
    // Clicked on the slide
    clickSlide: "close",
    // Clicked on the background (backdrop) element
    clickOutside: "close",
    // Same as previous two, but for double click
    dblclickContent: false,
    dblclickSlide: false,
    dblclickOutside: false,
    // Custom options when mobile device is detected
    // =============================================
    mobile: {
      idleTime: false,
      margin: 0,
      clickContent: function(current, event) {
        return current.type === "image" ? "toggleControls" : false;
      },
      clickSlide: function(current, event) {
        return current.type === "image" ? "toggleControls" : "close";
      },
      dblclickContent: function(current, event) {
        return current.type === "image" ? "zoom" : false;
      },
      dblclickSlide: function(current, event) {
        return current.type === "image" ? "zoom" : false;
      }
    },
    // Internationalization
    // ============
    lang: "en",
    i18n: {
      "en": {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
        PLAY_START: "Start slideshow",
        PLAY_STOP: "Pause slideshow",
        FULL_SCREEN: "Full screen",
        THUMBS: "Thumbnails",
        DOWNLOAD: "Download",
        SHARE: "Share",
        ZOOM: "Zoom"
      },
      "de": {
        CLOSE: "Schliessen",
        NEXT: "Weiter",
        PREV: "Zurück",
        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
        PLAY_START: "Diaschau starten",
        PLAY_STOP: "Diaschau beenden",
        FULL_SCREEN: "Vollbild",
        THUMBS: "Vorschaubilder",
        DOWNLOAD: "Herunterladen",
        SHARE: "Teilen",
        ZOOM: "Maßstab"
      }
    }
  };
  var $W = $(window2);
  var $D = $(document2);
  var called = 0;
  var isQuery = function(obj) {
    return obj && obj.hasOwnProperty && obj instanceof $;
  };
  var requestAFrame = function() {
    return window2.requestAnimationFrame || window2.webkitRequestAnimationFrame || window2.mozRequestAnimationFrame || window2.oRequestAnimationFrame || // if all else fails, use setTimeout
    function(callback) {
      return window2.setTimeout(callback, 1e3 / 60);
    };
  }();
  var transitionEnd = function() {
    var t, el = document2.createElement("fakeelement");
    var transitions = {
      "transition": "transitionend",
      "OTransition": "oTransitionEnd",
      "MozTransition": "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    };
    for (t in transitions) {
      if (el.style[t] !== undefined$1) {
        return transitions[t];
      }
    }
    return "transitionend";
  }();
  var forceRedraw = function($el) {
    return $el && $el.length && $el[0].offsetHeight;
  };
  var FancyBox = function(content, opts, index) {
    var self2 = this;
    self2.opts = $.extend(true, { index }, $.fancybox.defaults, opts || {});
    if ($.fancybox.isMobile) {
      self2.opts = $.extend(true, {}, self2.opts, self2.opts.mobile);
    }
    if (opts && $.isArray(opts.buttons)) {
      self2.opts.buttons = opts.buttons;
    }
    self2.id = self2.opts.id || ++called;
    self2.group = [];
    self2.currIndex = parseInt(self2.opts.index, 10) || 0;
    self2.prevIndex = null;
    self2.prevPos = null;
    self2.currPos = 0;
    self2.firstRun = null;
    self2.createGroup(content);
    if (!self2.group.length) {
      return;
    }
    self2.$lastFocus = $(document2.activeElement).blur();
    self2.slides = {};
    self2.init();
  };
  $.extend(FancyBox.prototype, {
    // Create DOM structure
    // ====================
    init: function() {
      var self2 = this, firstItem = self2.group[self2.currIndex], firstItemOpts = firstItem.opts, scrollbarWidth = $.fancybox.scrollbarWidth, $scrollDiv, $container, buttonStr;
      self2.scrollTop = $D.scrollTop();
      self2.scrollLeft = $D.scrollLeft();
      if (!$.fancybox.getInstance()) {
        $("body").addClass("fancybox-active");
        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window2.MSStream) {
          if (firstItem.type !== "image") {
            $("body").css("top", $("body").scrollTop() * -1).addClass("fancybox-iosfix");
          }
        } else if (!$.fancybox.isMobile && document2.body.scrollHeight > window2.innerHeight) {
          if (scrollbarWidth === undefined$1) {
            $scrollDiv = $('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body");
            scrollbarWidth = $.fancybox.scrollbarWidth = $scrollDiv[0].offsetWidth - $scrollDiv[0].clientWidth;
            $scrollDiv.remove();
          }
          $("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + scrollbarWidth + "px; }</style>");
          $("body").addClass("compensate-for-scrollbar");
        }
      }
      buttonStr = "";
      $.each(firstItemOpts.buttons, function(index, value) {
        buttonStr += firstItemOpts.btnTpl[value] || "";
      });
      $container = $(
        self2.translate(
          self2,
          firstItemOpts.baseTpl.replace("{{buttons}}", buttonStr).replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
        )
      ).attr("id", "fancybox-container-" + self2.id).addClass("fancybox-is-hidden").addClass(firstItemOpts.baseClass).data("FancyBox", self2).appendTo(firstItemOpts.parentEl);
      self2.$refs = {
        container: $container
      };
      ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(item) {
        self2.$refs[item] = $container.find(".fancybox-" + item);
      });
      self2.trigger("onInit");
      self2.activate();
      self2.jumpTo(self2.currIndex);
    },
    // Simple i18n support - replaces object keys found in template
    // with corresponding values
    // ============================================================
    translate: function(obj, str) {
      var arr = obj.opts.i18n[obj.opts.lang];
      return str.replace(/\{\{(\w+)\}\}/g, function(match, n) {
        var value = arr[n];
        if (value === undefined$1) {
          return match;
        }
        return value;
      });
    },
    // Create array of gally item objects
    // Check if each object has valid type and content
    // ===============================================
    createGroup: function(content) {
      var self2 = this;
      var items = $.makeArray(content);
      $.each(items, function(i, item) {
        var obj = {}, opts = {}, $item, type, found, src, srcParts;
        if ($.isPlainObject(item)) {
          obj = item;
          opts = item.opts || item;
        } else if ($.type(item) === "object" && $(item).length) {
          $item = $(item);
          opts = $item.data();
          opts = $.extend({}, opts, opts.options || {});
          opts.$orig = $item;
          obj.src = opts.src || $item.attr("href");
          if (!obj.type && !obj.src) {
            obj.type = "inline";
            obj.src = item;
          }
        } else {
          obj = {
            type: "html",
            src: item + ""
          };
        }
        obj.opts = $.extend(true, {}, self2.opts, opts);
        if ($.isArray(opts.buttons)) {
          obj.opts.buttons = opts.buttons;
        }
        type = obj.type || obj.opts.type;
        src = obj.src || "";
        if (!type && src) {
          if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
            type = "image";
          } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
            type = "pdf";
          } else if (found = src.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) {
            type = "video";
            if (!obj.opts.videoFormat) {
              obj.opts.videoFormat = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
            }
          } else if (src.charAt(0) === "#") {
            type = "inline";
          }
        }
        if (type) {
          obj.type = type;
        } else {
          self2.trigger("objectNeedsType", obj);
        }
        obj.index = self2.group.length;
        if (obj.opts.$orig && !obj.opts.$orig.length) {
          delete obj.opts.$orig;
        }
        if (!obj.opts.$thumb && obj.opts.$orig) {
          obj.opts.$thumb = obj.opts.$orig.find("img:first");
        }
        if (obj.opts.$thumb && !obj.opts.$thumb.length) {
          delete obj.opts.$thumb;
        }
        if ($.type(obj.opts.caption) === "function") {
          obj.opts.caption = obj.opts.caption.apply(item, [self2, obj]);
        }
        if ($.type(self2.opts.caption) === "function") {
          obj.opts.caption = self2.opts.caption.apply(item, [self2, obj]);
        }
        if (!(obj.opts.caption instanceof $)) {
          obj.opts.caption = obj.opts.caption === undefined$1 ? "" : obj.opts.caption + "";
        }
        if (type === "ajax") {
          srcParts = src.split(/\s+/, 2);
          if (srcParts.length > 1) {
            obj.src = srcParts.shift();
            obj.opts.filter = srcParts.shift();
          }
        }
        if (obj.opts.smallBtn == "auto") {
          if ($.inArray(type, ["html", "inline", "ajax"]) > -1) {
            obj.opts.toolbar = false;
            obj.opts.smallBtn = true;
          } else {
            obj.opts.smallBtn = false;
          }
        }
        if (type === "pdf") {
          obj.type = "iframe";
          obj.opts.iframe.preload = false;
        }
        if (obj.opts.modal) {
          obj.opts = $.extend(true, obj.opts, {
            // Remove buttons
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            // Disable keyboard navigation
            keyboard: 0,
            // Disable some modules
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            // Disable click event handlers
            clickContent: false,
            clickSlide: false,
            clickOutside: false,
            dblclickContent: false,
            dblclickSlide: false,
            dblclickOutside: false
          });
        }
        self2.group.push(obj);
      });
    },
    // Attach an event handler functions for:
    //   - navigation buttons
    //   - browser scrolling, resizing;
    //   - focusing
    //   - keyboard
    //   - detect idle
    // ======================================
    addEvents: function() {
      var self2 = this;
      self2.removeEvents();
      self2.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
        e.stopPropagation();
        e.preventDefault();
        self2.close(e);
      }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(e) {
        e.stopPropagation();
        e.preventDefault();
        self2.previous();
      }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(e) {
        e.stopPropagation();
        e.preventDefault();
        self2.next();
      }).on("click.fb", "[data-fancybox-zoom]", function(e) {
        self2[self2.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
      });
      $W.on("orientationchange.fb resize.fb", function(e) {
        if (e && e.originalEvent && e.originalEvent.type === "resize") {
          requestAFrame(function() {
            self2.update();
          });
        } else {
          self2.$refs.stage.hide();
          setTimeout(function() {
            self2.$refs.stage.show();
            self2.update();
          }, 600);
        }
      });
      $D.on("focusin.fb", function(e) {
        var instance = $.fancybox ? $.fancybox.getInstance() : null;
        if (instance.isClosing || !instance.current || !instance.current.opts.trapFocus || $(e.target).hasClass("fancybox-container") || $(e.target).is(document2)) {
          return;
        }
        if (instance && $(e.target).css("position") !== "fixed" && !instance.$refs.container.has(e.target).length) {
          e.stopPropagation();
          instance.focus();
          $W.scrollTop(self2.scrollTop).scrollLeft(self2.scrollLeft);
        }
      });
      $D.on("keydown.fb", function(e) {
        var current = self2.current, keycode = e.keyCode || e.which;
        if (!current || !current.opts.keyboard) {
          return;
        }
        if ($(e.target).is("input") || $(e.target).is("textarea")) {
          return;
        }
        if (keycode === 8 || keycode === 27) {
          e.preventDefault();
          self2.close(e);
          return;
        }
        if (keycode === 37 || keycode === 38) {
          e.preventDefault();
          self2.previous();
          return;
        }
        if (keycode === 39 || keycode === 40) {
          e.preventDefault();
          self2.next();
          return;
        }
        self2.trigger("afterKeydown", e, keycode);
      });
      if (self2.group[self2.currIndex].opts.idleTime) {
        self2.idleSecondsCounter = 0;
        $D.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(e) {
          self2.idleSecondsCounter = 0;
          if (self2.isIdle) {
            self2.showControls();
          }
          self2.isIdle = false;
        });
        self2.idleInterval = window2.setInterval(function() {
          self2.idleSecondsCounter++;
          if (self2.idleSecondsCounter >= self2.group[self2.currIndex].opts.idleTime && !self2.isDragging) {
            self2.isIdle = true;
            self2.idleSecondsCounter = 0;
            self2.hideControls();
          }
        }, 1e3);
      }
    },
    // Remove events added by the core
    // ===============================
    removeEvents: function() {
      var self2 = this;
      $W.off("orientationchange.fb resize.fb");
      $D.off("focusin.fb keydown.fb .fb-idle");
      this.$refs.container.off(".fb-close .fb-prev .fb-next");
      if (self2.idleInterval) {
        window2.clearInterval(self2.idleInterval);
        self2.idleInterval = null;
      }
    },
    // Change to previous gallery item
    // ===============================
    previous: function(duration) {
      return this.jumpTo(this.currPos - 1, duration);
    },
    // Change to next gallery item
    // ===========================
    next: function(duration) {
      return this.jumpTo(this.currPos + 1, duration);
    },
    // Switch to selected gallery item
    // ===============================
    jumpTo: function(pos, duration, slide) {
      var self2 = this, firstRun, loop, current, previous, canvasWidth, currentPos, transitionProps;
      var groupLen = self2.group.length;
      if (self2.isDragging || self2.isClosing || self2.isAnimating && self2.firstRun) {
        return;
      }
      pos = parseInt(pos, 10);
      loop = self2.current ? self2.current.opts.loop : self2.opts.loop;
      if (!loop && (pos < 0 || pos >= groupLen)) {
        return false;
      }
      firstRun = self2.firstRun = self2.firstRun === null;
      if (groupLen < 2 && !firstRun && !!self2.isDragging) {
        return;
      }
      previous = self2.current;
      self2.prevIndex = self2.currIndex;
      self2.prevPos = self2.currPos;
      current = self2.createSlide(pos);
      if (groupLen > 1) {
        if (loop || current.index > 0) {
          self2.createSlide(pos - 1);
        }
        if (loop || current.index < groupLen - 1) {
          self2.createSlide(pos + 1);
        }
      }
      self2.current = current;
      self2.currIndex = current.index;
      self2.currPos = current.pos;
      self2.trigger("beforeShow", firstRun);
      self2.updateControls();
      currentPos = $.fancybox.getTranslate(current.$slide);
      current.isMoved = (currentPos.left !== 0 || currentPos.top !== 0) && !current.$slide.hasClass("fancybox-animated");
      current.forcedDuration = undefined$1;
      if ($.isNumeric(duration)) {
        current.forcedDuration = duration;
      } else {
        duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
      }
      duration = parseInt(duration, 10);
      if (firstRun) {
        if (current.opts.animationEffect && duration) {
          self2.$refs.container.css("transition-duration", duration + "ms");
        }
        self2.$refs.container.removeClass("fancybox-is-hidden");
        forceRedraw(self2.$refs.container);
        self2.$refs.container.addClass("fancybox-is-open");
        current.$slide.addClass("fancybox-slide--current");
        self2.loadSlide(current);
        self2.preload("image");
        return;
      }
      $.each(self2.slides, function(index, slide2) {
        $.fancybox.stop(slide2.$slide);
      });
      current.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current");
      if (current.isMoved) {
        canvasWidth = Math.round(current.$slide.width());
        $.each(self2.slides, function(index, slide2) {
          var pos2 = slide2.pos - current.pos;
          $.fancybox.animate(slide2.$slide, {
            top: 0,
            left: pos2 * canvasWidth + pos2 * slide2.opts.gutter
          }, duration, function() {
            slide2.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous");
            if (slide2.pos === self2.currPos) {
              current.isMoved = false;
              self2.complete();
            }
          });
        });
      } else {
        self2.$refs.stage.children().removeAttr("style");
      }
      if (current.isLoaded) {
        self2.revealContent(current);
      } else {
        self2.loadSlide(current);
      }
      self2.preload("image");
      if (previous.pos === current.pos) {
        return;
      }
      transitionProps = "fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous");
      previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous");
      previous.isComplete = false;
      if (!duration || !current.isMoved && !current.opts.transitionEffect) {
        return;
      }
      if (current.isMoved) {
        previous.$slide.addClass(transitionProps);
      } else {
        transitionProps = "fancybox-animated " + transitionProps + " fancybox-fx-" + current.opts.transitionEffect;
        $.fancybox.animate(previous.$slide, transitionProps, duration, function() {
          previous.$slide.removeClass(transitionProps).removeAttr("style");
        });
      }
    },
    // Create new "slide" element
    // These are gallery items  that are actually added to DOM
    // =======================================================
    createSlide: function(pos) {
      var self2 = this;
      var $slide;
      var index;
      index = pos % self2.group.length;
      index = index < 0 ? self2.group.length + index : index;
      if (!self2.slides[pos] && self2.group[index]) {
        $slide = $('<div class="fancybox-slide"></div>').appendTo(self2.$refs.stage);
        self2.slides[pos] = $.extend(true, {}, self2.group[index], {
          pos,
          $slide,
          isLoaded: false
        });
        self2.updateSlide(self2.slides[pos]);
      }
      return self2.slides[pos];
    },
    // Scale image to the actual size of the image
    // ===========================================
    scaleToActual: function(x, y, duration) {
      var self2 = this;
      var current = self2.current;
      var $what = current.$content;
      var imgPos, posX, posY, scaleX, scaleY;
      var canvasWidth = parseInt(current.$slide.width(), 10);
      var canvasHeight = parseInt(current.$slide.height(), 10);
      var newImgWidth = current.width;
      var newImgHeight = current.height;
      if (!(current.type == "image" && !current.hasError) || !$what || self2.isAnimating) {
        return;
      }
      $.fancybox.stop($what);
      self2.isAnimating = true;
      x = x === undefined$1 ? canvasWidth * 0.5 : x;
      y = y === undefined$1 ? canvasHeight * 0.5 : y;
      imgPos = $.fancybox.getTranslate($what);
      scaleX = newImgWidth / imgPos.width;
      scaleY = newImgHeight / imgPos.height;
      posX = canvasWidth * 0.5 - newImgWidth * 0.5;
      posY = canvasHeight * 0.5 - newImgHeight * 0.5;
      if (newImgWidth > canvasWidth) {
        posX = imgPos.left * scaleX - (x * scaleX - x);
        if (posX > 0) {
          posX = 0;
        }
        if (posX < canvasWidth - newImgWidth) {
          posX = canvasWidth - newImgWidth;
        }
      }
      if (newImgHeight > canvasHeight) {
        posY = imgPos.top * scaleY - (y * scaleY - y);
        if (posY > 0) {
          posY = 0;
        }
        if (posY < canvasHeight - newImgHeight) {
          posY = canvasHeight - newImgHeight;
        }
      }
      self2.updateCursor(newImgWidth, newImgHeight);
      $.fancybox.animate($what, {
        top: posY,
        left: posX,
        scaleX,
        scaleY
      }, duration || 330, function() {
        self2.isAnimating = false;
      });
      if (self2.SlideShow && self2.SlideShow.isActive) {
        self2.SlideShow.stop();
      }
    },
    // Scale image to fit inside parent element
    // ========================================
    scaleToFit: function(duration) {
      var self2 = this;
      var current = self2.current;
      var $what = current.$content;
      var end;
      if (!(current.type == "image" && !current.hasError) || !$what || self2.isAnimating) {
        return;
      }
      $.fancybox.stop($what);
      self2.isAnimating = true;
      end = self2.getFitPos(current);
      self2.updateCursor(end.width, end.height);
      $.fancybox.animate($what, {
        top: end.top,
        left: end.left,
        scaleX: end.width / $what.width(),
        scaleY: end.height / $what.height()
      }, duration || 330, function() {
        self2.isAnimating = false;
      });
    },
    // Calculate image size to fit inside viewport
    // ===========================================
    getFitPos: function(slide) {
      var self2 = this;
      var $what = slide.$content;
      var imgWidth = slide.width;
      var imgHeight = slide.height;
      var margin = slide.opts.margin;
      var canvasWidth, canvasHeight, minRatio, width, height;
      if (!$what || !$what.length || !imgWidth && !imgHeight) {
        return false;
      }
      if ($.type(margin) === "number") {
        margin = [margin, margin];
      }
      if (margin.length == 2) {
        margin = [margin[0], margin[1], margin[0], margin[1]];
      }
      canvasWidth = parseInt(self2.$refs.stage.width(), 10) - (margin[1] + margin[3]);
      canvasHeight = parseInt(self2.$refs.stage.height(), 10) - (margin[0] + margin[2]);
      minRatio = Math.min(1, canvasWidth / imgWidth, canvasHeight / imgHeight);
      width = Math.floor(minRatio * imgWidth);
      height = Math.floor(minRatio * imgHeight);
      return {
        top: Math.floor((canvasHeight - height) * 0.5) + margin[0],
        left: Math.floor((canvasWidth - width) * 0.5) + margin[3],
        width,
        height
      };
    },
    // Update content size and position for all slides
    // ==============================================
    update: function() {
      var self2 = this;
      $.each(self2.slides, function(key, slide) {
        self2.updateSlide(slide);
      });
    },
    // Update slide content position and size
    // ======================================
    updateSlide: function(slide, duration) {
      var self2 = this, $what = slide && slide.$content;
      if ($what && (slide.width || slide.height)) {
        self2.isAnimating = false;
        $.fancybox.stop($what);
        $.fancybox.setTranslate($what, self2.getFitPos(slide));
        if (slide.pos === self2.currPos) {
          self2.updateCursor();
        }
      }
      slide.$slide.trigger("refresh");
      self2.trigger("onUpdate", slide);
    },
    // Horizontally center slide
    // =========================
    centerSlide: function(slide, duration) {
      var self2 = this, canvasWidth, pos;
      if (self2.current) {
        canvasWidth = Math.round(slide.$slide.width());
        pos = slide.pos - self2.current.pos;
        $.fancybox.animate(slide.$slide, {
          top: 0,
          left: pos * canvasWidth + pos * slide.opts.gutter,
          opacity: 1
        }, duration === undefined$1 ? 0 : duration, null, false);
      }
    },
    // Update cursor style depending if content can be zoomed
    // ======================================================
    updateCursor: function(nextWidth, nextHeight) {
      var self2 = this;
      var isScaledDown;
      var $container = self2.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
      if (!self2.current || self2.isClosing) {
        return;
      }
      if (self2.isZoomable()) {
        $container.addClass("fancybox-is-zoomable");
        if (nextWidth !== undefined$1 && nextHeight !== undefined$1) {
          isScaledDown = nextWidth < self2.current.width && nextHeight < self2.current.height;
        } else {
          isScaledDown = self2.isScaledDown();
        }
        if (isScaledDown) {
          $container.addClass("fancybox-can-zoomIn");
        } else {
          if (self2.current.opts.touch) {
            $container.addClass("fancybox-can-drag");
          } else {
            $container.addClass("fancybox-can-zoomOut");
          }
        }
      } else if (self2.current.opts.touch) {
        $container.addClass("fancybox-can-drag");
      }
    },
    // Check if current slide is zoomable
    // ==================================
    isZoomable: function() {
      var self2 = this;
      var current = self2.current;
      var fitPos;
      if (!current || self2.isClosing) {
        return;
      }
      if (current.type === "image" && current.isLoaded && !current.hasError && (current.opts.clickContent === "zoom" || $.isFunction(current.opts.clickContent) && current.opts.clickContent(current) === "zoom")) {
        fitPos = self2.getFitPos(current);
        if (current.width > fitPos.width || current.height > fitPos.height) {
          return true;
        }
      }
      return false;
    },
    // Check if current image dimensions are smaller than actual
    // =========================================================
    isScaledDown: function() {
      var self2 = this;
      var current = self2.current;
      var $what = current.$content;
      var rez = false;
      if ($what) {
        rez = $.fancybox.getTranslate($what);
        rez = rez.width < current.width || rez.height < current.height;
      }
      return rez;
    },
    // Check if image dimensions exceed parent element
    // ===============================================
    canPan: function() {
      var self2 = this;
      var current = self2.current;
      var $what = current.$content;
      var rez = false;
      if ($what) {
        rez = self2.getFitPos(current);
        rez = Math.abs($what.width() - rez.width) > 1 || Math.abs($what.height() - rez.height) > 1;
      }
      return rez;
    },
    // Load content into the slide
    // ===========================
    loadSlide: function(slide) {
      var self2 = this, type, $slide;
      var ajaxLoad;
      if (slide.isLoading) {
        return;
      }
      if (slide.isLoaded) {
        return;
      }
      slide.isLoading = true;
      self2.trigger("beforeLoad", slide);
      type = slide.type;
      $slide = slide.$slide;
      $slide.off("refresh").trigger("onReset").addClass("fancybox-slide--" + (type || "unknown")).addClass(slide.opts.slideClass);
      switch (type) {
        case "image":
          self2.setImage(slide);
          break;
        case "iframe":
          self2.setIframe(slide);
          break;
        case "html":
          self2.setContent(slide, slide.src || slide.content);
          break;
        case "inline":
          if ($(slide.src).length) {
            self2.setContent(slide, $(slide.src));
          } else {
            self2.setError(slide);
          }
          break;
        case "ajax":
          self2.showLoading(slide);
          ajaxLoad = $.ajax($.extend({}, slide.opts.ajax.settings, {
            url: slide.src,
            success: function(data, textStatus) {
              if (textStatus === "success") {
                self2.setContent(slide, data);
              }
            },
            error: function(jqXHR, textStatus) {
              if (jqXHR && textStatus !== "abort") {
                self2.setError(slide);
              }
            }
          }));
          $slide.one("onReset", function() {
            ajaxLoad.abort();
          });
          break;
        case "video":
          self2.setContent(
            slide,
            '<video controls><source src="' + slide.src + '" type="' + slide.opts.videoFormat + `">Your browser doesn't support HTML5 video</video>`
          );
          break;
        default:
          self2.setError(slide);
          break;
      }
      return true;
    },
    // Use thumbnail image, if possible
    // ================================
    setImage: function(slide) {
      var self2 = this;
      var srcset = slide.opts.srcset || slide.opts.image.srcset;
      var found, temp, pxRatio, windowWidth;
      if (srcset) {
        pxRatio = window2.devicePixelRatio || 1;
        windowWidth = window2.innerWidth * pxRatio;
        temp = srcset.split(",").map(function(el2) {
          var ret = {};
          el2.trim().split(/\s+/).forEach(function(el3, i) {
            var value = parseInt(el3.substring(0, el3.length - 1), 10);
            if (i === 0) {
              return ret.url = el3;
            }
            if (value) {
              ret.value = value;
              ret.postfix = el3[el3.length - 1];
            }
          });
          return ret;
        });
        temp.sort(function(a, b) {
          return a.value - b.value;
        });
        for (var j = 0; j < temp.length; j++) {
          var el = temp[j];
          if (el.postfix === "w" && el.value >= windowWidth || el.postfix === "x" && el.value >= pxRatio) {
            found = el;
            break;
          }
        }
        if (!found && temp.length) {
          found = temp[temp.length - 1];
        }
        if (found) {
          slide.src = found.url;
          if (slide.width && slide.height && found.postfix == "w") {
            slide.height = slide.width / slide.height * found.value;
            slide.width = found.value;
          }
        }
      }
      slide.$content = $('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(slide.$slide);
      if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && (slide.opts.thumb || slide.opts.$thumb)) {
        slide.width = slide.opts.width;
        slide.height = slide.opts.height;
        slide.$ghost = $("<img />").one("error", function() {
          $(this).remove();
          slide.$ghost = null;
          self2.setBigImage(slide);
        }).one("load", function() {
          self2.afterLoad(slide);
          self2.setBigImage(slide);
        }).addClass("fancybox-image").appendTo(slide.$content).attr("src", slide.opts.thumb || slide.opts.$thumb.attr("src"));
      } else {
        self2.setBigImage(slide);
      }
    },
    // Create full-size image
    // ======================
    setBigImage: function(slide) {
      var self2 = this;
      var $img = $("<img />");
      slide.$image = $img.one("error", function() {
        self2.setError(slide);
      }).one("load", function() {
        clearTimeout(slide.timouts);
        slide.timouts = null;
        if (self2.isClosing) {
          return;
        }
        slide.width = slide.opts.width || this.naturalWidth;
        slide.height = slide.opts.height || this.naturalHeight;
        if (slide.opts.image.srcset) {
          $img.attr("sizes", "100vw").attr("srcset", slide.opts.image.srcset);
        }
        self2.hideLoading(slide);
        if (slide.$ghost) {
          slide.timouts = setTimeout(function() {
            slide.timouts = null;
            slide.$ghost.hide();
          }, Math.min(300, Math.max(1e3, slide.height / 1600)));
        } else {
          self2.afterLoad(slide);
        }
      }).addClass("fancybox-image").attr("src", slide.src).appendTo(slide.$content);
      if (($img[0].complete || $img[0].readyState == "complete") && $img[0].naturalWidth && $img[0].naturalHeight) {
        $img.trigger("load");
      } else if ($img[0].error) {
        $img.trigger("error");
      } else {
        slide.timouts = setTimeout(function() {
          if (!$img[0].complete && !slide.hasError) {
            self2.showLoading(slide);
          }
        }, 100);
      }
    },
    // Create iframe wrapper, iframe and bindings
    // ==========================================
    setIframe: function(slide) {
      var self2 = this, opts = slide.opts.iframe, $slide = slide.$slide, $iframe;
      slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>').css(opts.css).appendTo($slide);
      $iframe = $(opts.tpl.replace(/\{rnd\}/g, (/* @__PURE__ */ new Date()).getTime())).attr(opts.attr).appendTo(slide.$content);
      if (opts.preload) {
        self2.showLoading(slide);
        $iframe.on("load.fb error.fb", function(e) {
          this.isReady = 1;
          slide.$slide.trigger("refresh");
          self2.afterLoad(slide);
        });
        $slide.on("refresh.fb", function() {
          var $wrap = slide.$content, frameWidth = opts.css.width, frameHeight = opts.css.height, scrollWidth, $contents, $body;
          if ($iframe[0].isReady !== 1) {
            return;
          }
          try {
            $contents = $iframe.contents();
            $body = $contents.find("body");
          } catch (ignore) {
          }
          if ($body && $body.length) {
            if (frameWidth === undefined$1) {
              scrollWidth = $iframe[0].contentWindow.document.documentElement.scrollWidth;
              frameWidth = Math.ceil($body.outerWidth(true) + ($wrap.width() - scrollWidth));
              frameWidth += $wrap.outerWidth() - $wrap.innerWidth();
            }
            if (frameHeight === undefined$1) {
              frameHeight = Math.ceil($body.outerHeight(true));
              frameHeight += $wrap.outerHeight() - $wrap.innerHeight();
            }
            if (frameWidth) {
              $wrap.width(frameWidth);
            }
            if (frameHeight) {
              $wrap.height(frameHeight);
            }
          }
          $wrap.removeClass("fancybox-is-hidden");
        });
      } else {
        this.afterLoad(slide);
      }
      $iframe.attr("src", slide.src);
      if (slide.opts.smallBtn === true) {
        slide.$content.prepend(self2.translate(slide, slide.opts.btnTpl.smallBtn));
      }
      $slide.one("onReset", function() {
        try {
          $(this).find("iframe").hide().attr("src", "//about:blank");
        } catch (ignore) {
        }
        $(this).empty();
        slide.isLoaded = false;
      });
    },
    // Wrap and append content to the slide
    // ======================================
    setContent: function(slide, content) {
      var self2 = this;
      if (self2.isClosing) {
        return;
      }
      self2.hideLoading(slide);
      slide.$slide.empty();
      if (isQuery(content) && content.parent().length) {
        content.parent(".fancybox-slide--inline").trigger("onReset");
        slide.$placeholder = $("<div></div>").hide().insertAfter(content);
        content.css("display", "inline-block");
      } else if (!slide.hasError) {
        if ($.type(content) === "string") {
          content = $("<div>").append($.trim(content)).contents();
          if (content[0].nodeType === 3) {
            content = $("<div>").html(content);
          }
        }
        if (slide.opts.filter) {
          content = $("<div>").html(content).find(slide.opts.filter);
        }
      }
      slide.$slide.one("onReset", function() {
        $(this).find("video,audio").trigger("pause");
        if (slide.$placeholder) {
          slide.$placeholder.after(content.hide()).remove();
          slide.$placeholder = null;
        }
        if (slide.$smallBtn) {
          slide.$smallBtn.remove();
          slide.$smallBtn = null;
        }
        if (!slide.hasError) {
          $(this).empty();
          slide.isLoaded = false;
        }
      });
      slide.$content = $(content).appendTo(slide.$slide);
      this.afterLoad(slide);
    },
    // Display error message
    // =====================
    setError: function(slide) {
      slide.hasError = true;
      slide.$slide.removeClass("fancybox-slide--" + slide.type);
      this.setContent(slide, this.translate(slide, slide.opts.errorTpl));
    },
    // Show loading icon inside the slide
    // ==================================
    showLoading: function(slide) {
      var self2 = this;
      slide = slide || self2.current;
      if (slide && !slide.$spinner) {
        slide.$spinner = $(self2.opts.spinnerTpl).appendTo(slide.$slide);
      }
    },
    // Remove loading icon from the slide
    // ==================================
    hideLoading: function(slide) {
      var self2 = this;
      slide = slide || self2.current;
      if (slide && slide.$spinner) {
        slide.$spinner.remove();
        delete slide.$spinner;
      }
    },
    // Adjustments after slide content has been loaded
    // ===============================================
    afterLoad: function(slide) {
      var self2 = this;
      if (self2.isClosing) {
        return;
      }
      slide.isLoading = false;
      slide.isLoaded = true;
      self2.trigger("afterLoad", slide);
      self2.hideLoading(slide);
      if (slide.opts.smallBtn && !slide.$smallBtn) {
        slide.$smallBtn = $(self2.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content.filter("div,form").first());
      }
      if (slide.opts.protect && slide.$content && !slide.hasError) {
        slide.$content.on("contextmenu.fb", function(e) {
          if (e.button == 2) {
            e.preventDefault();
          }
          return true;
        });
        if (slide.type === "image") {
          $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
        }
      }
      self2.revealContent(slide);
    },
    // Make content visible
    // This method is called right after content has been loaded or
    // user navigates gallery and transition should start
    // ============================================================
    revealContent: function(slide) {
      var self2 = this;
      var $slide = slide.$slide;
      var effect, effectClassName, duration, opacity, end, start = false;
      effect = slide.opts[self2.firstRun ? "animationEffect" : "transitionEffect"];
      duration = slide.opts[self2.firstRun ? "animationDuration" : "transitionDuration"];
      duration = parseInt(slide.forcedDuration === undefined$1 ? duration : slide.forcedDuration, 10);
      if (slide.isMoved || slide.pos !== self2.currPos || !duration) {
        effect = false;
      }
      if (effect === "zoom" && !(slide.pos === self2.currPos && duration && slide.type === "image" && !slide.hasError && (start = self2.getThumbPos(slide)))) {
        effect = "fade";
      }
      if (effect === "zoom") {
        end = self2.getFitPos(slide);
        end.scaleX = end.width / start.width;
        end.scaleY = end.height / start.height;
        delete end.width;
        delete end.height;
        opacity = slide.opts.zoomOpacity;
        if (opacity == "auto") {
          opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
        }
        if (opacity) {
          start.opacity = 0.1;
          end.opacity = 1;
        }
        $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);
        forceRedraw(slide.$content);
        $.fancybox.animate(slide.$content, end, duration, function() {
          self2.complete();
        });
        return;
      }
      self2.updateSlide(slide);
      if (!effect) {
        forceRedraw($slide);
        slide.$content.removeClass("fancybox-is-hidden");
        if (slide.pos === self2.currPos) {
          self2.complete();
        }
        return;
      }
      $.fancybox.stop($slide);
      effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self2.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
      $slide.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(effectClassName);
      slide.$content.removeClass("fancybox-is-hidden");
      forceRedraw($slide);
      $.fancybox.animate($slide, "fancybox-slide--current", duration, function(e) {
        $slide.removeClass(effectClassName).removeAttr("style");
        if (slide.pos === self2.currPos) {
          self2.complete();
        }
      }, true);
    },
    // Check if we can and have to zoom from thumbnail
    //================================================
    getThumbPos: function(slide) {
      var self2 = this;
      var rez = false;
      var isElementVisible = function($el) {
        var element = $el[0];
        var elementRect = element.getBoundingClientRect();
        var parentRects = [];
        var visibleInAllParents;
        while (element.parentElement !== null) {
          if ($(element.parentElement).css("overflow") === "hidden" || $(element.parentElement).css("overflow") === "auto") {
            parentRects.push(element.parentElement.getBoundingClientRect());
          }
          element = element.parentElement;
        }
        visibleInAllParents = parentRects.every(function(parentRect) {
          var visiblePixelX = Math.min(elementRect.right, parentRect.right) - Math.max(elementRect.left, parentRect.left);
          var visiblePixelY = Math.min(elementRect.bottom, parentRect.bottom) - Math.max(elementRect.top, parentRect.top);
          return visiblePixelX > 0 && visiblePixelY > 0;
        });
        return visibleInAllParents && elementRect.bottom > 0 && elementRect.right > 0 && elementRect.left < $(window2).width() && elementRect.top < $(window2).height();
      };
      var $thumb = slide.opts.$thumb;
      var thumbPos = $thumb ? $thumb.offset() : 0;
      var slidePos;
      if (thumbPos && $thumb[0].ownerDocument === document2 && isElementVisible($thumb)) {
        slidePos = self2.$refs.stage.offset();
        rez = {
          top: thumbPos.top - slidePos.top + parseFloat($thumb.css("border-top-width") || 0),
          left: thumbPos.left - slidePos.left + parseFloat($thumb.css("border-left-width") || 0),
          width: $thumb.width(),
          height: $thumb.height(),
          scaleX: 1,
          scaleY: 1
        };
      }
      return rez;
    },
    // Final adjustments after current gallery item is moved to position
    // and it`s content is loaded
    // ==================================================================
    complete: function() {
      var self2 = this, current = self2.current, slides = {};
      if (current.isMoved || !current.isLoaded || current.isComplete) {
        return;
      }
      current.isComplete = true;
      current.$slide.siblings().trigger("onReset");
      self2.preload("inline");
      forceRedraw(current.$slide);
      current.$slide.addClass("fancybox-slide--complete");
      $.each(self2.slides, function(key, slide) {
        if (slide.pos >= self2.currPos - 1 && slide.pos <= self2.currPos + 1) {
          slides[slide.pos] = slide;
        } else if (slide) {
          $.fancybox.stop(slide.$slide);
          slide.$slide.off().remove();
        }
      });
      self2.slides = slides;
      self2.updateCursor();
      self2.trigger("afterShow");
      current.$slide.find("video,audio").first().trigger("play");
      if ($(document2.activeElement).is("[disabled]") || current.opts.autoFocus && !(current.type == "image" || current.type === "iframe")) {
        self2.focus();
      }
    },
    // Preload next and previous slides
    // ================================
    preload: function(type) {
      var self2 = this, next = self2.slides[self2.currPos + 1], prev = self2.slides[self2.currPos - 1];
      if (next && next.type === type) {
        self2.loadSlide(next);
      }
      if (prev && prev.type === type) {
        self2.loadSlide(prev);
      }
    },
    // Try to find and focus on the first focusable element
    // ====================================================
    focus: function() {
      var current = this.current;
      var $el;
      if (this.isClosing) {
        return;
      }
      if (current && current.isComplete) {
        $el = current.$slide.find("input[autofocus]:enabled:visible:first");
        if (!$el.length) {
          $el = current.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first");
        }
      }
      $el = $el && $el.length ? $el : this.$refs.container;
      $el.focus();
    },
    // Activates current instance - brings container to the front and enables keyboard,
    // notifies other instances about deactivating
    // =================================================================================
    activate: function() {
      var self2 = this;
      $(".fancybox-container").each(function() {
        var instance = $(this).data("FancyBox");
        if (instance && instance.id !== self2.id && !instance.isClosing) {
          instance.trigger("onDeactivate");
          instance.removeEvents();
          instance.isVisible = false;
        }
      });
      self2.isVisible = true;
      if (self2.current || self2.isIdle) {
        self2.update();
        self2.updateControls();
      }
      self2.trigger("onActivate");
      self2.addEvents();
    },
    // Start closing procedure
    // This will start "zoom-out" animation if needed and clean everything up afterwards
    // =================================================================================
    close: function(e, d) {
      var self2 = this;
      var current = self2.current;
      var effect, duration;
      var $what, opacity, start, end;
      var done = function() {
        self2.cleanUp(e);
      };
      if (self2.isClosing) {
        return false;
      }
      self2.isClosing = true;
      if (self2.trigger("beforeClose", e) === false) {
        self2.isClosing = false;
        requestAFrame(function() {
          self2.update();
        });
        return false;
      }
      self2.removeEvents();
      if (current.timouts) {
        clearTimeout(current.timouts);
      }
      $what = current.$content;
      effect = current.opts.animationEffect;
      duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;
      current.$slide.off(transitionEnd).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");
      current.$slide.siblings().trigger("onReset").remove();
      if (duration) {
        self2.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing");
      }
      self2.hideLoading(current);
      self2.hideControls();
      self2.updateCursor();
      if (effect === "zoom" && !(e !== true && $what && duration && current.type === "image" && !current.hasError && (end = self2.getThumbPos(current)))) {
        effect = "fade";
      }
      if (effect === "zoom") {
        $.fancybox.stop($what);
        start = $.fancybox.getTranslate($what);
        start.width = start.width * start.scaleX;
        start.height = start.height * start.scaleY;
        opacity = current.opts.zoomOpacity;
        if (opacity == "auto") {
          opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
        }
        if (opacity) {
          end.opacity = 0;
        }
        start.scaleX = start.width / end.width;
        start.scaleY = start.height / end.height;
        start.width = end.width;
        start.height = end.height;
        $.fancybox.setTranslate(current.$content, start);
        forceRedraw(current.$content);
        $.fancybox.animate(current.$content, end, duration, done);
        return true;
      }
      if (effect && duration) {
        if (e === true) {
          setTimeout(done, duration);
        } else {
          $.fancybox.animate(current.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + effect, duration, done);
        }
      } else {
        done();
      }
      return true;
    },
    // Final adjustments after removing the instance
    // =============================================
    cleanUp: function(e) {
      var self2 = this, $body = $("body"), instance, offset;
      self2.current.$slide.trigger("onReset");
      self2.$refs.container.empty().remove();
      self2.trigger("afterClose", e);
      if (self2.$lastFocus && !!self2.current.opts.backFocus) {
        self2.$lastFocus.focus();
      }
      self2.current = null;
      instance = $.fancybox.getInstance();
      if (instance) {
        instance.activate();
      } else {
        $W.scrollTop(self2.scrollTop).scrollLeft(self2.scrollLeft);
        $body.removeClass("fancybox-active compensate-for-scrollbar");
        if ($body.hasClass("fancybox-iosfix")) {
          offset = parseInt(document2.body.style.top, 10);
          $body.removeClass("fancybox-iosfix").css("top", "").scrollTop(offset * -1);
        }
        $("#fancybox-style-noscroll").remove();
      }
    },
    // Call callback and trigger an event
    // ==================================
    trigger: function(name, slide) {
      var args = Array.prototype.slice.call(arguments, 1), self2 = this, obj = slide && slide.opts ? slide : self2.current, rez;
      if (obj) {
        args.unshift(obj);
      } else {
        obj = self2;
      }
      args.unshift(self2);
      if ($.isFunction(obj.opts[name])) {
        rez = obj.opts[name].apply(obj, args);
      }
      if (rez === false) {
        return rez;
      }
      if (name === "afterClose" || !self2.$refs) {
        $D.trigger(name + ".fb", args);
      } else {
        self2.$refs.container.trigger(name + ".fb", args);
      }
    },
    // Update infobar values, navigation button states and reveal caption
    // ==================================================================
    updateControls: function(force) {
      var self2 = this;
      var current = self2.current, index = current.index, caption = current.opts.caption, $container = self2.$refs.container, $caption = self2.$refs.caption;
      current.$slide.trigger("refresh");
      self2.$caption = caption && caption.length ? $caption.html(caption) : null;
      if (!self2.isHiddenControls && !self2.isIdle) {
        self2.showControls();
      }
      $container.find("[data-fancybox-count]").html(self2.group.length);
      $container.find("[data-fancybox-index]").html(index + 1);
      $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
      $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self2.group.length - 1);
      if (current.type === "image") {
        $container.find("[data-fancybox-download]").attr("href", current.opts.image.src || current.src).show();
      } else {
        $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
      }
    },
    // Hide toolbar and caption
    // ========================
    hideControls: function() {
      this.isHiddenControls = true;
      this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav");
    },
    showControls: function() {
      var self2 = this;
      var opts = self2.current ? self2.current.opts : self2.opts;
      var $container = self2.$refs.container;
      self2.isHiddenControls = false;
      self2.idleSecondsCounter = 0;
      $container.toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons)).toggleClass("fancybox-show-infobar", !!(opts.infobar && self2.group.length > 1)).toggleClass("fancybox-show-nav", !!(opts.arrows && self2.group.length > 1)).toggleClass("fancybox-is-modal", !!opts.modal);
      if (self2.$caption) {
        $container.addClass("fancybox-show-caption ");
      } else {
        $container.removeClass("fancybox-show-caption");
      }
    },
    // Toggle toolbar and caption
    // ==========================
    toggleControls: function() {
      if (this.isHiddenControls) {
        this.showControls();
      } else {
        this.hideControls();
      }
    }
  });
  $.fancybox = {
    version: "3.2.10",
    defaults,
    // Get current instance and execute a command.
    //
    // Examples of usage:
    //
    //   $instance = $.fancybox.getInstance();
    //   $.fancybox.getInstance().jumpTo( 1 );
    //   $.fancybox.getInstance( 'jumpTo', 1 );
    //   $.fancybox.getInstance( function() {
    //       console.info( this.currIndex );
    //   });
    // ======================================================
    getInstance: function(command) {
      var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox");
      var args = Array.prototype.slice.call(arguments, 1);
      if (instance instanceof FancyBox) {
        if ($.type(command) === "string") {
          instance[command].apply(instance, args);
        } else if ($.type(command) === "function") {
          command.apply(instance, args);
        }
        return instance;
      }
      return false;
    },
    // Create new instance
    // ===================
    open: function(items, opts, index) {
      return new FancyBox(items, opts, index);
    },
    // Close current or all instances
    // ==============================
    close: function(all) {
      var instance = this.getInstance();
      if (instance) {
        instance.close();
        if (all === true) {
          this.close();
        }
      }
    },
    // Close instances and unbind all events
    // ==============================
    destroy: function() {
      this.close(true);
      $D.off("click.fb-start");
    },
    // Try to detect mobile devices
    // ============================
    isMobile: document2.createTouch !== undefined$1 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    // Detect if 'translate3d' support is available
    // ============================================
    use3d: function() {
      var div = document2.createElement("div");
      return window2.getComputedStyle && window2.getComputedStyle(div).getPropertyValue("transform") && !(document2.documentMode && document2.documentMode < 11);
    }(),
    // Helper function to get current visual state of an element
    // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
    // =====================================================================
    getTranslate: function($el) {
      var matrix;
      if (!$el || !$el.length) {
        return false;
      }
      matrix = $el.eq(0).css("transform");
      if (matrix && matrix.indexOf("matrix") !== -1) {
        matrix = matrix.split("(")[1];
        matrix = matrix.split(")")[0];
        matrix = matrix.split(",");
      } else {
        matrix = [];
      }
      if (matrix.length) {
        if (matrix.length > 10) {
          matrix = [matrix[13], matrix[12], matrix[0], matrix[5]];
        } else {
          matrix = [matrix[5], matrix[4], matrix[0], matrix[3]];
        }
        matrix = matrix.map(parseFloat);
      } else {
        matrix = [0, 0, 1, 1];
        var transRegex = /\.*translate\((.*)px,(.*)px\)/i;
        var transRez = transRegex.exec($el.eq(0).attr("style"));
        if (transRez) {
          matrix[0] = parseFloat(transRez[2]);
          matrix[1] = parseFloat(transRez[1]);
        }
      }
      return {
        top: matrix[0],
        left: matrix[1],
        scaleX: matrix[2],
        scaleY: matrix[3],
        opacity: parseFloat($el.css("opacity")),
        width: $el.width(),
        height: $el.height()
      };
    },
    // Shortcut for setting "translate3d" properties for element
    // Can set be used to set opacity, too
    // ========================================================
    setTranslate: function($el, props) {
      var str = "";
      var css = {};
      if (!$el || !props) {
        return;
      }
      if (props.left !== undefined$1 || props.top !== undefined$1) {
        str = (props.left === undefined$1 ? $el.position().left : props.left) + "px, " + (props.top === undefined$1 ? $el.position().top : props.top) + "px";
        if (this.use3d) {
          str = "translate3d(" + str + ", 0px)";
        } else {
          str = "translate(" + str + ")";
        }
      }
      if (props.scaleX !== undefined$1 && props.scaleY !== undefined$1) {
        str = (str.length ? str + " " : "") + "scale(" + props.scaleX + ", " + props.scaleY + ")";
      }
      if (str.length) {
        css.transform = str;
      }
      if (props.opacity !== undefined$1) {
        css.opacity = props.opacity;
      }
      if (props.width !== undefined$1) {
        css.width = props.width;
      }
      if (props.height !== undefined$1) {
        css.height = props.height;
      }
      return $el.css(css);
    },
    // Simple CSS transition handler
    // =============================
    animate: function($el, to, duration, callback, leaveAnimationName) {
      if ($.isFunction(duration)) {
        callback = duration;
        duration = null;
      }
      if (!$.isPlainObject(to)) {
        $el.removeAttr("style");
      }
      $el.on(transitionEnd, function(e) {
        if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
          return;
        }
        $.fancybox.stop($el);
        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined$1 && to.scaleY !== undefined$1) {
            $el.css("transition-duration", "");
            to.width = Math.round($el.width() * to.scaleX);
            to.height = Math.round($el.height() * to.scaleY);
            to.scaleX = 1;
            to.scaleY = 1;
            $.fancybox.setTranslate($el, to);
          }
          if (leaveAnimationName === false) {
            $el.removeAttr("style");
          }
        } else if (leaveAnimationName !== true) {
          $el.removeClass(to);
        }
        if ($.isFunction(callback)) {
          callback(e);
        }
      });
      if ($.isNumeric(duration)) {
        $el.css("transition-duration", duration + "ms");
      }
      if ($.isPlainObject(to)) {
        $.fancybox.setTranslate($el, to);
      } else {
        $el.addClass(to);
      }
      if (to.scaleX && $el.hasClass("fancybox-image-wrap")) {
        $el.parent().addClass("fancybox-is-scaling");
      }
      $el.data("timer", setTimeout(function() {
        $el.trigger("transitionend");
      }, duration + 16));
    },
    stop: function($el) {
      clearTimeout($el.data("timer"));
      $el.off("transitionend").css("transition-duration", "");
      if ($el.hasClass("fancybox-image-wrap")) {
        $el.parent().removeClass("fancybox-is-scaling");
      }
    }
  };
  function _run(e) {
    var $target = $(e.currentTarget), opts = e.data ? e.data.options : {}, value = $target.attr("data-fancybox") || "", index = 0, items = [];
    if (e.isDefaultPrevented()) {
      return;
    }
    e.preventDefault();
    if (value) {
      items = opts.selector ? $(opts.selector) : e.data ? e.data.items : [];
      items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
      index = items.index($target);
      if (index < 0) {
        index = 0;
      }
    } else {
      items = [$target];
    }
    $.fancybox.open(items, opts, index);
  }
  $.fn.fancybox = function(options) {
    var selector;
    options = options || {};
    selector = options.selector || false;
    if (selector) {
      $("body").off("click.fb-start", selector).on("click.fb-start", selector, {
        options
      }, _run);
    } else {
      this.off("click.fb-start").on("click.fb-start", {
        items: this,
        options
      }, _run);
    }
    return this;
  };
  $D.on("click.fb-start", "[data-fancybox]", _run);
})(window, document, window.jQuery || jQuery);
(function($) {
  var format = function(url, rez, params) {
    if (!url) {
      return;
    }
    params = params || "";
    if ($.type(params) === "object") {
      params = $.param(params, true);
    }
    $.each(rez, function(key, value) {
      url = url.replace("$" + key, value || "");
    });
    if (params.length) {
      url += (url.indexOf("?") > 0 ? "&" : "?") + params;
    }
    return url;
  };
  var defaults = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "//www.youtube.com/embed/$4",
      thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
    },
    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1,
        api: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },
    metacafe: {
      matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
      type: "iframe",
      url: "//www.metacafe.com/embed/$1/?ap=1"
    },
    dailymotion: {
      matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
      params: {
        additionalInfos: 0,
        autoStart: 1
      },
      type: "iframe",
      url: "//www.dailymotion.com/embed/video/$1"
    },
    vine: {
      matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
      type: "iframe",
      url: "//vine.co/v/$1/embed/simple"
    },
    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },
    // Examples:
    // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
    // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
    // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function(rez) {
        return "//maps.google." + rez[2] + "/?ll=" + (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12]) + "&output=" + (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
      }
    },
    // Examples:
    // https://www.google.com/maps/search/Empire+State+Building/
    // https://www.google.com/maps/search/?api=1&query=centurylink+field
    // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function(rez) {
        return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  };
  $(document).on("objectNeedsType.fb", function(e, instance, item) {
    var url = item.src || "", type = false, media, thumb, rez, params, urlParams, paramObj, provider;
    media = $.extend(true, {}, defaults, item.opts.media);
    $.each(media, function(providerName, providerOpts) {
      rez = url.match(providerOpts.matcher);
      if (!rez) {
        return;
      }
      type = providerOpts.type;
      paramObj = {};
      if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
        urlParams = rez[providerOpts.paramPlace];
        if (urlParams[0] == "?") {
          urlParams = urlParams.substring(1);
        }
        urlParams = urlParams.split("&");
        for (var m = 0; m < urlParams.length; ++m) {
          var p = urlParams[m].split("=", 2);
          if (p.length == 2) {
            paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
          }
        }
      }
      params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);
      url = $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);
      thumb = $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);
      if (providerName === "vimeo") {
        url = url.replace("&%23", "#");
      }
      return false;
    });
    if (type) {
      item.src = url;
      item.type = type;
      if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
        item.opts.thumb = thumb;
      }
      if (type === "iframe") {
        $.extend(true, item.opts, {
          iframe: {
            preload: false,
            attr: {
              scrolling: "no"
            }
          }
        });
        item.contentProvider = provider;
        item.opts.slideClass += " fancybox-slide--video";
      }
    } else if (url) {
      item.type = item.opts.defaultType;
    }
  });
})(window.jQuery || jQuery);
(function(window2, document2, $) {
  var requestAFrame = function() {
    return window2.requestAnimationFrame || window2.webkitRequestAnimationFrame || window2.mozRequestAnimationFrame || window2.oRequestAnimationFrame || // if all else fails, use setTimeout
    function(callback) {
      return window2.setTimeout(callback, 1e3 / 60);
    };
  }();
  var cancelAFrame = function() {
    return window2.cancelAnimationFrame || window2.webkitCancelAnimationFrame || window2.mozCancelAnimationFrame || window2.oCancelAnimationFrame || function(id) {
      window2.clearTimeout(id);
    };
  }();
  var pointers = function(e) {
    var result = [];
    e = e.originalEvent || e || window2.e;
    e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
    for (var key in e) {
      if (e[key].pageX) {
        result.push({ x: e[key].pageX, y: e[key].pageY });
      } else if (e[key].clientX) {
        result.push({ x: e[key].clientX, y: e[key].clientY });
      }
    }
    return result;
  };
  var distance = function(point2, point1, what) {
    if (!point1 || !point2) {
      return 0;
    }
    if (what === "x") {
      return point2.x - point1.x;
    } else if (what === "y") {
      return point2.y - point1.y;
    }
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  };
  var isClickable = function($el) {
    if ($el.is('a,area,button,[role="button"],input,label,select,summary,textarea') || $.isFunction($el.get(0).onclick) || $el.data("selectable")) {
      return true;
    }
    for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
      if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
        return true;
      }
    }
    return false;
  };
  var hasScrollbars = function(el) {
    var overflowY = window2.getComputedStyle(el)["overflow-y"];
    var overflowX = window2.getComputedStyle(el)["overflow-x"];
    var vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight;
    var horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;
    return vertical || horizontal;
  };
  var isScrollable = function($el) {
    var rez = false;
    while (true) {
      rez = hasScrollbars($el.get(0));
      if (rez) {
        break;
      }
      $el = $el.parent();
      if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
        break;
      }
    }
    return rez;
  };
  var Guestures = function(instance) {
    var self2 = this;
    self2.instance = instance;
    self2.$bg = instance.$refs.bg;
    self2.$stage = instance.$refs.stage;
    self2.$container = instance.$refs.container;
    self2.destroy();
    self2.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self2, "ontouchstart"));
  };
  Guestures.prototype.destroy = function() {
    this.$container.off(".fb.touch");
  };
  Guestures.prototype.ontouchstart = function(e) {
    var self2 = this;
    var $target = $(e.target);
    var instance = self2.instance;
    var current = instance.current;
    var $content = current.$content;
    var isTouchDevice = e.type == "touchstart";
    if (isTouchDevice) {
      self2.$container.off("mousedown.fb.touch");
    }
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }
    if (!$target.length || isClickable($target) || isClickable($target.parent())) {
      return;
    }
    if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
      return;
    }
    if (!current || self2.instance.isAnimating || self2.instance.isClosing) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
    self2.realPoints = self2.startPoints = pointers(e);
    if (!self2.startPoints) {
      return;
    }
    e.stopPropagation();
    self2.startEvent = e;
    self2.canTap = true;
    self2.$target = $target;
    self2.$content = $content;
    self2.opts = current.opts.touch;
    self2.isPanning = false;
    self2.isSwiping = false;
    self2.isZooming = false;
    self2.isScrolling = false;
    self2.sliderStartPos = self2.sliderLastPos || { top: 0, left: 0 };
    self2.contentStartPos = $.fancybox.getTranslate(self2.$content);
    self2.contentLastPos = null;
    self2.startTime = (/* @__PURE__ */ new Date()).getTime();
    self2.distanceX = self2.distanceY = self2.distance = 0;
    self2.canvasWidth = Math.round(current.$slide[0].clientWidth);
    self2.canvasHeight = Math.round(current.$slide[0].clientHeight);
    $(document2).off(".fb.touch").on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self2, "ontouchend")).on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self2, "ontouchmove"));
    if ($.fancybox.isMobile) {
      document2.addEventListener("scroll", self2.onscroll, true);
    }
    if (!(self2.opts || instance.canPan()) || !($target.is(self2.$stage) || self2.$stage.find($target).length)) {
      if ($target.is("img")) {
        e.preventDefault();
      }
      return;
    }
    if (!($.fancybox.isMobile && (isScrollable($target) || isScrollable($target.parent())))) {
      e.preventDefault();
    }
    if (self2.startPoints.length === 1) {
      if (current.type === "image" && (self2.contentStartPos.width > self2.canvasWidth + 1 || self2.contentStartPos.height > self2.canvasHeight + 1)) {
        $.fancybox.stop(self2.$content);
        self2.$content.css("transition-duration", "");
        self2.isPanning = true;
      } else {
        self2.isSwiping = true;
      }
      self2.$container.addClass("fancybox-controls--isGrabbing");
    }
    if (self2.startPoints.length === 2 && !instance.isAnimating && !current.hasError && current.type === "image" && (current.isLoaded || current.$ghost)) {
      self2.canTap = false;
      self2.isSwiping = false;
      self2.isPanning = false;
      self2.isZooming = true;
      $.fancybox.stop(self2.$content);
      self2.$content.css("transition-duration", "");
      self2.centerPointStartX = (self2.startPoints[0].x + self2.startPoints[1].x) * 0.5 - $(window2).scrollLeft();
      self2.centerPointStartY = (self2.startPoints[0].y + self2.startPoints[1].y) * 0.5 - $(window2).scrollTop();
      self2.percentageOfImageAtPinchPointX = (self2.centerPointStartX - self2.contentStartPos.left) / self2.contentStartPos.width;
      self2.percentageOfImageAtPinchPointY = (self2.centerPointStartY - self2.contentStartPos.top) / self2.contentStartPos.height;
      self2.startDistanceBetweenFingers = distance(self2.startPoints[0], self2.startPoints[1]);
    }
  };
  Guestures.prototype.onscroll = function(e) {
    self.isScrolling = true;
  };
  Guestures.prototype.ontouchmove = function(e) {
    var self2 = this, $target = $(e.target);
    if (self2.isScrolling || !($target.is(self2.$stage) || self2.$stage.find($target).length)) {
      self2.canTap = false;
      return;
    }
    self2.newPoints = pointers(e);
    if (!(self2.opts || self2.instance.canPan()) || !self2.newPoints || !self2.newPoints.length) {
      return;
    }
    if (!(self2.isSwiping && self2.isSwiping === true)) {
      e.preventDefault();
    }
    self2.distanceX = distance(self2.newPoints[0], self2.startPoints[0], "x");
    self2.distanceY = distance(self2.newPoints[0], self2.startPoints[0], "y");
    self2.distance = distance(self2.newPoints[0], self2.startPoints[0]);
    if (self2.distance > 0) {
      if (self2.isSwiping) {
        self2.onSwipe(e);
      } else if (self2.isPanning) {
        self2.onPan();
      } else if (self2.isZooming) {
        self2.onZoom();
      }
    }
  };
  Guestures.prototype.onSwipe = function(e) {
    var self2 = this, swiping = self2.isSwiping, left = self2.sliderStartPos.left || 0, angle;
    if (swiping === true) {
      if (Math.abs(self2.distance) > 10) {
        self2.canTap = false;
        if (self2.instance.group.length < 2 && self2.opts.vertical) {
          self2.isSwiping = "y";
        } else if (self2.instance.isDragging || self2.opts.vertical === false || self2.opts.vertical === "auto" && $(window2).width() > 800) {
          self2.isSwiping = "x";
        } else {
          angle = Math.abs(Math.atan2(self2.distanceY, self2.distanceX) * 180 / Math.PI);
          self2.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
        }
        self2.canTap = false;
        if (self2.isSwiping === "y" && $.fancybox.isMobile && (isScrollable(self2.$target) || isScrollable(self2.$target.parent()))) {
          self2.isScrolling = true;
          return;
        }
        self2.instance.isDragging = self2.isSwiping;
        self2.startPoints = self2.newPoints;
        $.each(self2.instance.slides, function(index, slide) {
          $.fancybox.stop(slide.$slide);
          slide.$slide.css("transition-duration", "");
          slide.inTransition = false;
          if (slide.pos === self2.instance.current.pos) {
            self2.sliderStartPos.left = $.fancybox.getTranslate(slide.$slide).left;
          }
        });
        if (self2.instance.SlideShow && self2.instance.SlideShow.isActive) {
          self2.instance.SlideShow.stop();
        }
      }
      return;
    }
    if (swiping == "x") {
      if (self2.distanceX > 0 && (self2.instance.group.length < 2 || self2.instance.current.index === 0 && !self2.instance.current.opts.loop)) {
        left = left + Math.pow(self2.distanceX, 0.8);
      } else if (self2.distanceX < 0 && (self2.instance.group.length < 2 || self2.instance.current.index === self2.instance.group.length - 1 && !self2.instance.current.opts.loop)) {
        left = left - Math.pow(-self2.distanceX, 0.8);
      } else {
        left = left + self2.distanceX;
      }
    }
    self2.sliderLastPos = {
      top: swiping == "x" ? 0 : self2.sliderStartPos.top + self2.distanceY,
      left
    };
    if (self2.requestId) {
      cancelAFrame(self2.requestId);
      self2.requestId = null;
    }
    self2.requestId = requestAFrame(function() {
      if (self2.sliderLastPos) {
        $.each(self2.instance.slides, function(index, slide) {
          var pos = slide.pos - self2.instance.currPos;
          $.fancybox.setTranslate(slide.$slide, {
            top: self2.sliderLastPos.top,
            left: self2.sliderLastPos.left + pos * self2.canvasWidth + pos * slide.opts.gutter
          });
        });
        self2.$container.addClass("fancybox-is-sliding");
      }
    });
  };
  Guestures.prototype.onPan = function() {
    var self2 = this;
    if (distance(self2.newPoints[0], self2.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
      self2.startPoints = self2.newPoints;
      return;
    }
    self2.canTap = false;
    self2.contentLastPos = self2.limitMovement();
    if (self2.requestId) {
      cancelAFrame(self2.requestId);
      self2.requestId = null;
    }
    self2.requestId = requestAFrame(function() {
      $.fancybox.setTranslate(self2.$content, self2.contentLastPos);
    });
  };
  Guestures.prototype.limitMovement = function() {
    var self2 = this;
    var canvasWidth = self2.canvasWidth;
    var canvasHeight = self2.canvasHeight;
    var distanceX = self2.distanceX;
    var distanceY = self2.distanceY;
    var contentStartPos = self2.contentStartPos;
    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;
    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;
    var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;
    if (currentWidth > canvasWidth) {
      newOffsetX = currentOffsetX + distanceX;
    } else {
      newOffsetX = currentOffsetX;
    }
    newOffsetY = currentOffsetY + distanceY;
    minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
    minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);
    maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
    maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);
    if (currentWidth > canvasWidth) {
      if (distanceX > 0 && newOffsetX > minTranslateX) {
        newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
      }
      if (distanceX < 0 && newOffsetX < maxTranslateX) {
        newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
      }
    }
    if (currentHeight > canvasHeight) {
      if (distanceY > 0 && newOffsetY > minTranslateY) {
        newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
      }
      if (distanceY < 0 && newOffsetY < maxTranslateY) {
        newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
      }
    }
    return {
      top: newOffsetY,
      left: newOffsetX,
      scaleX: contentStartPos.scaleX,
      scaleY: contentStartPos.scaleY
    };
  };
  Guestures.prototype.limitPosition = function(newOffsetX, newOffsetY, newWidth, newHeight) {
    var self2 = this;
    var canvasWidth = self2.canvasWidth;
    var canvasHeight = self2.canvasHeight;
    if (newWidth > canvasWidth) {
      newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
      newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
    } else {
      newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
    }
    if (newHeight > canvasHeight) {
      newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
      newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
    } else {
      newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
    }
    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };
  Guestures.prototype.onZoom = function() {
    var self2 = this;
    var currentWidth = self2.contentStartPos.width;
    var currentHeight = self2.contentStartPos.height;
    var currentOffsetX = self2.contentStartPos.left;
    var currentOffsetY = self2.contentStartPos.top;
    var endDistanceBetweenFingers = distance(self2.newPoints[0], self2.newPoints[1]);
    var pinchRatio = endDistanceBetweenFingers / self2.startDistanceBetweenFingers;
    var newWidth = Math.floor(currentWidth * pinchRatio);
    var newHeight = Math.floor(currentHeight * pinchRatio);
    var translateFromZoomingX = (currentWidth - newWidth) * self2.percentageOfImageAtPinchPointX;
    var translateFromZoomingY = (currentHeight - newHeight) * self2.percentageOfImageAtPinchPointY;
    var centerPointEndX = (self2.newPoints[0].x + self2.newPoints[1].x) / 2 - $(window2).scrollLeft();
    var centerPointEndY = (self2.newPoints[0].y + self2.newPoints[1].y) / 2 - $(window2).scrollTop();
    var translateFromTranslatingX = centerPointEndX - self2.centerPointStartX;
    var translateFromTranslatingY = centerPointEndY - self2.centerPointStartY;
    var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
    var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);
    var newPos = {
      top: newOffsetY,
      left: newOffsetX,
      scaleX: self2.contentStartPos.scaleX * pinchRatio,
      scaleY: self2.contentStartPos.scaleY * pinchRatio
    };
    self2.canTap = false;
    self2.newWidth = newWidth;
    self2.newHeight = newHeight;
    self2.contentLastPos = newPos;
    if (self2.requestId) {
      cancelAFrame(self2.requestId);
      self2.requestId = null;
    }
    self2.requestId = requestAFrame(function() {
      $.fancybox.setTranslate(self2.$content, self2.contentLastPos);
    });
  };
  Guestures.prototype.ontouchend = function(e) {
    var self2 = this;
    var dMs = Math.max((/* @__PURE__ */ new Date()).getTime() - self2.startTime, 1);
    var swiping = self2.isSwiping;
    var panning = self2.isPanning;
    var zooming = self2.isZooming;
    var scrolling = self2.isScrolling;
    self2.endPoints = pointers(e);
    self2.$container.removeClass("fancybox-controls--isGrabbing");
    $(document2).off(".fb.touch");
    document2.removeEventListener("scroll", self2.onscroll, true);
    if (self2.requestId) {
      cancelAFrame(self2.requestId);
      self2.requestId = null;
    }
    self2.isSwiping = false;
    self2.isPanning = false;
    self2.isZooming = false;
    self2.isScrolling = false;
    self2.instance.isDragging = false;
    if (self2.canTap) {
      return self2.onTap(e);
    }
    self2.speed = 366;
    self2.velocityX = self2.distanceX / dMs * 0.5;
    self2.velocityY = self2.distanceY / dMs * 0.5;
    self2.speedX = Math.max(self2.speed * 0.5, Math.min(self2.speed * 1.5, 1 / Math.abs(self2.velocityX) * self2.speed));
    if (panning) {
      self2.endPanning();
    } else if (zooming) {
      self2.endZooming();
    } else {
      self2.endSwiping(swiping, scrolling);
    }
    return;
  };
  Guestures.prototype.endSwiping = function(swiping, scrolling) {
    var self2 = this, ret = false, len = self2.instance.group.length;
    self2.sliderLastPos = null;
    if (swiping == "y" && !scrolling && Math.abs(self2.distanceY) > 50) {
      $.fancybox.animate(self2.instance.current.$slide, {
        top: self2.sliderStartPos.top + self2.distanceY + self2.velocityY * 150,
        opacity: 0
      }, 150);
      ret = self2.instance.close(true, 300);
    } else if (swiping == "x" && self2.distanceX > 50 && len > 1) {
      ret = self2.instance.previous(self2.speedX);
    } else if (swiping == "x" && self2.distanceX < -50 && len > 1) {
      ret = self2.instance.next(self2.speedX);
    }
    if (ret === false && (swiping == "x" || swiping == "y")) {
      if (scrolling || len < 2) {
        self2.instance.centerSlide(self2.instance.current, 150);
      } else {
        self2.instance.jumpTo(self2.instance.current.index);
      }
    }
    self2.$container.removeClass("fancybox-is-sliding");
  };
  Guestures.prototype.endPanning = function() {
    var self2 = this;
    var newOffsetX, newOffsetY, newPos;
    if (!self2.contentLastPos) {
      return;
    }
    if (self2.opts.momentum === false) {
      newOffsetX = self2.contentLastPos.left;
      newOffsetY = self2.contentLastPos.top;
    } else {
      newOffsetX = self2.contentLastPos.left + self2.velocityX * self2.speed;
      newOffsetY = self2.contentLastPos.top + self2.velocityY * self2.speed;
    }
    newPos = self2.limitPosition(newOffsetX, newOffsetY, self2.contentStartPos.width, self2.contentStartPos.height);
    newPos.width = self2.contentStartPos.width;
    newPos.height = self2.contentStartPos.height;
    $.fancybox.animate(self2.$content, newPos, 330);
  };
  Guestures.prototype.endZooming = function() {
    var self2 = this;
    var current = self2.instance.current;
    var newOffsetX, newOffsetY, newPos, reset;
    var newWidth = self2.newWidth;
    var newHeight = self2.newHeight;
    if (!self2.contentLastPos) {
      return;
    }
    newOffsetX = self2.contentLastPos.left;
    newOffsetY = self2.contentLastPos.top;
    reset = {
      top: newOffsetY,
      left: newOffsetX,
      width: newWidth,
      height: newHeight,
      scaleX: 1,
      scaleY: 1
    };
    $.fancybox.setTranslate(self2.$content, reset);
    if (newWidth < self2.canvasWidth && newHeight < self2.canvasHeight) {
      self2.instance.scaleToFit(150);
    } else if (newWidth > current.width || newHeight > current.height) {
      self2.instance.scaleToActual(self2.centerPointStartX, self2.centerPointStartY, 150);
    } else {
      newPos = self2.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);
      $.fancybox.setTranslate(self2.content, $.fancybox.getTranslate(self2.$content));
      $.fancybox.animate(self2.$content, newPos, 150);
    }
  };
  Guestures.prototype.onTap = function(e) {
    var self2 = this;
    var $target = $(e.target);
    var instance = self2.instance;
    var current = instance.current;
    var endPoints = e && pointers(e) || self2.startPoints;
    var tapX = endPoints[0] ? endPoints[0].x - self2.$stage.offset().left : 0;
    var tapY = endPoints[0] ? endPoints[0].y - self2.$stage.offset().top : 0;
    var where;
    var process = function(prefix) {
      var action = current.opts[prefix];
      if ($.isFunction(action)) {
        action = action.apply(instance, [current, e]);
      }
      if (!action) {
        return;
      }
      switch (action) {
        case "close":
          instance.close(self2.startEvent);
          break;
        case "toggleControls":
          instance.toggleControls(true);
          break;
        case "next":
          instance.next();
          break;
        case "nextOrClose":
          if (instance.group.length > 1) {
            instance.next();
          } else {
            instance.close(self2.startEvent);
          }
          break;
        case "zoom":
          if (current.type == "image" && (current.isLoaded || current.$ghost)) {
            if (instance.canPan()) {
              instance.scaleToFit();
            } else if (instance.isScaledDown()) {
              instance.scaleToActual(tapX, tapY);
            } else if (instance.group.length < 2) {
              instance.close(self2.startEvent);
            }
          }
          break;
      }
    };
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }
    if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
      return;
    }
    if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
      where = "Outside";
    } else if ($target.is(".fancybox-slide")) {
      where = "Slide";
    } else if (instance.current.$content && instance.current.$content.find($target).addBack().filter($target).length) {
      where = "Content";
    } else {
      return;
    }
    if (self2.tapped) {
      clearTimeout(self2.tapped);
      self2.tapped = null;
      if (Math.abs(tapX - self2.tapX) > 50 || Math.abs(tapY - self2.tapY) > 50) {
        return this;
      }
      process("dblclick" + where);
    } else {
      self2.tapX = tapX;
      self2.tapY = tapY;
      if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
        self2.tapped = setTimeout(function() {
          self2.tapped = null;
          process("click" + where);
        }, 500);
      } else {
        process("click" + where);
      }
    }
    return this;
  };
  $(document2).on("onActivate.fb", function(e, instance) {
    if (instance && !instance.Guestures) {
      instance.Guestures = new Guestures(instance);
    }
  });
})(window, document, window.jQuery || jQuery);
(function(document2, $) {
  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
    },
    slideShow: {
      autoStart: false,
      speed: 3e3
    }
  });
  var SlideShow = function(instance) {
    this.instance = instance;
    this.init();
  };
  $.extend(SlideShow.prototype, {
    timer: null,
    isActive: false,
    $button: null,
    init: function() {
      var self2 = this;
      self2.$button = self2.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
        self2.toggle();
      });
      if (self2.instance.group.length < 2 || !self2.instance.group[self2.instance.currIndex].opts.slideShow) {
        self2.$button.hide();
      }
    },
    set: function(force) {
      var self2 = this;
      if (self2.instance && self2.instance.current && (force === true || self2.instance.current.opts.loop || self2.instance.currIndex < self2.instance.group.length - 1)) {
        self2.timer = setTimeout(function() {
          if (self2.isActive) {
            self2.instance.jumpTo((self2.instance.currIndex + 1) % self2.instance.group.length);
          }
        }, self2.instance.current.opts.slideShow.speed);
      } else {
        self2.stop();
        self2.instance.idleSecondsCounter = 0;
        self2.instance.showControls();
      }
    },
    clear: function() {
      var self2 = this;
      clearTimeout(self2.timer);
      self2.timer = null;
    },
    start: function() {
      var self2 = this;
      var current = self2.instance.current;
      if (current) {
        self2.isActive = true;
        self2.$button.attr("title", current.opts.i18n[current.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause");
        self2.set(true);
      }
    },
    stop: function() {
      var self2 = this;
      var current = self2.instance.current;
      self2.clear();
      self2.$button.attr("title", current.opts.i18n[current.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play");
      self2.isActive = false;
    },
    toggle: function() {
      var self2 = this;
      if (self2.isActive) {
        self2.stop();
      } else {
        self2.start();
      }
    }
  });
  $(document2).on({
    "onInit.fb": function(e, instance) {
      if (instance && !instance.SlideShow) {
        instance.SlideShow = new SlideShow(instance);
      }
    },
    "beforeShow.fb": function(e, instance, current, firstRun) {
      var SlideShow2 = instance && instance.SlideShow;
      if (firstRun) {
        if (SlideShow2 && current.opts.slideShow.autoStart) {
          SlideShow2.start();
        }
      } else if (SlideShow2 && SlideShow2.isActive) {
        SlideShow2.clear();
      }
    },
    "afterShow.fb": function(e, instance, current) {
      var SlideShow2 = instance && instance.SlideShow;
      if (SlideShow2 && SlideShow2.isActive) {
        SlideShow2.set();
      }
    },
    "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
      var SlideShow2 = instance && instance.SlideShow;
      if (SlideShow2 && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document2.activeElement).is("button,a,input")) {
        keypress.preventDefault();
        SlideShow2.toggle();
      }
    },
    "beforeClose.fb onDeactivate.fb": function(e, instance) {
      var SlideShow2 = instance && instance.SlideShow;
      if (SlideShow2) {
        SlideShow2.stop();
      }
    }
  });
  $(document2).on("visibilitychange", function() {
    var instance = $.fancybox.getInstance();
    var SlideShow2 = instance && instance.SlideShow;
    if (SlideShow2 && SlideShow2.isActive) {
      if (document2.hidden) {
        SlideShow2.clear();
      } else {
        SlideShow2.set();
      }
    }
  });
})(document, window.jQuery || jQuery);
(function(document2, $) {
  var fn = function() {
    var fnMap = [
      [
        "requestFullscreen",
        "exitFullscreen",
        "fullscreenElement",
        "fullscreenEnabled",
        "fullscreenchange",
        "fullscreenerror"
      ],
      // new WebKit
      [
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitFullscreenElement",
        "webkitFullscreenEnabled",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      // old WebKit (Safari 5.1)
      [
        "webkitRequestFullScreen",
        "webkitCancelFullScreen",
        "webkitCurrentFullScreenElement",
        "webkitCancelFullScreen",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      [
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozFullScreenElement",
        "mozFullScreenEnabled",
        "mozfullscreenchange",
        "mozfullscreenerror"
      ],
      [
        "msRequestFullscreen",
        "msExitFullscreen",
        "msFullscreenElement",
        "msFullscreenEnabled",
        "MSFullscreenChange",
        "MSFullscreenError"
      ]
    ];
    var val;
    var ret = {};
    var i, j;
    for (i = 0; i < fnMap.length; i++) {
      val = fnMap[i];
      if (val && val[1] in document2) {
        for (j = 0; j < val.length; j++) {
          ret[fnMap[0][j]] = val[j];
        }
        return ret;
      }
    }
    return false;
  }();
  if (!fn) {
    if ($ && $.fancybox) {
      $.fancybox.defaults.btnTpl.fullScreen = false;
    }
    return;
  }
  var FullScreen = {
    request: function(elem) {
      elem = elem || document2.documentElement;
      elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
    },
    exit: function() {
      document2[fn.exitFullscreen]();
    },
    toggle: function(elem) {
      elem = elem || document2.documentElement;
      if (this.isFullscreen()) {
        this.exit();
      } else {
        this.request(elem);
      }
    },
    isFullscreen: function() {
      return Boolean(document2[fn.fullscreenElement]);
    },
    enabled: function() {
      return Boolean(document2[fn.fullscreenEnabled]);
    }
  };
  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'
    },
    fullScreen: {
      autoStart: false
    }
  });
  $(document2).on({
    "onInit.fb": function(e, instance) {
      var $container;
      if (instance && instance.group[instance.currIndex].opts.fullScreen) {
        $container = instance.$refs.container;
        $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e2) {
          e2.stopPropagation();
          e2.preventDefault();
          FullScreen.toggle($container[0]);
        });
        if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
          FullScreen.request($container[0]);
        }
        instance.FullScreen = FullScreen;
      } else if (instance) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      }
    },
    "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
      if (instance && instance.FullScreen && keycode === 70) {
        keypress.preventDefault();
        instance.FullScreen.toggle(instance.$refs.container[0]);
      }
    },
    "beforeClose.fb": function(instance) {
      if (instance && instance.FullScreen) {
        FullScreen.exit();
      }
    }
  });
  $(document2).on(fn.fullscreenchange, function() {
    var isFullscreen = FullScreen.isFullscreen(), instance = $.fancybox.getInstance();
    if (instance) {
      if (instance.current && instance.current.type === "image" && instance.isAnimating) {
        instance.current.$content.css("transition", "none");
        instance.isAnimating = false;
        instance.update(true, true, 0);
      }
      instance.trigger("onFullscreenChange", isFullscreen);
      instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);
    }
  });
})(document, window.jQuery || jQuery);
(function(document2, $) {
  $.fancybox.defaults = $.extend(true, {
    btnTpl: {
      thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
    },
    thumbs: {
      autoStart: false,
      // Display thumbnails on opening
      hideOnClose: true,
      // Hide thumbnail grid when closing animation starts
      parentEl: ".fancybox-container",
      // Container is injected into this element
      axis: "y"
      // Vertical (y) or horizontal (x) scrolling
    }
  }, $.fancybox.defaults);
  var FancyThumbs = function(instance) {
    this.init(instance);
  };
  $.extend(FancyThumbs.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: false,
    isActive: false,
    init: function(instance) {
      var self2 = this;
      self2.instance = instance;
      instance.Thumbs = self2;
      var first = instance.group[0], second = instance.group[1];
      self2.opts = instance.group[instance.currIndex].opts.thumbs;
      self2.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");
      if (self2.opts && first && second && ((first.type == "image" || first.opts.thumb || first.opts.$thumb) && (second.type == "image" || second.opts.thumb || second.opts.$thumb))) {
        self2.$button.show().on("click", function() {
          self2.toggle();
        });
        self2.isActive = true;
      } else {
        self2.$button.hide();
      }
    },
    create: function() {
      var self2 = this, instance = self2.instance, parentEl = self2.opts.parentEl, list, src;
      self2.$grid = $('<div class="fancybox-thumbs fancybox-thumbs-' + self2.opts.axis + '"></div>').appendTo(instance.$refs.container.find(parentEl).addBack().filter(parentEl));
      list = "<ul>";
      $.each(instance.group, function(i, item) {
        src = item.opts.thumb || (item.opts.$thumb ? item.opts.$thumb.attr("src") : null);
        if (!src && item.type === "image") {
          src = item.src;
        }
        if (src && src.length) {
          list += '<li data-index="' + i + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + src + '" /></li>';
        }
      });
      list += "</ul>";
      self2.$list = $(list).appendTo(self2.$grid).on("click", "li", function() {
        instance.jumpTo($(this).data("index"));
      });
      self2.$list.find("img").hide().one("load", function() {
        var $parent = $(this).parent().removeClass("fancybox-thumbs-loading"), thumbWidth = $parent.outerWidth(), thumbHeight = $parent.outerHeight(), width, height, widthRatio, heightRatio;
        width = this.naturalWidth || this.width;
        height = this.naturalHeight || this.height;
        widthRatio = width / thumbWidth;
        heightRatio = height / thumbHeight;
        if (widthRatio >= 1 && heightRatio >= 1) {
          if (widthRatio > heightRatio) {
            width = width / heightRatio;
            height = thumbHeight;
          } else {
            width = thumbWidth;
            height = height / widthRatio;
          }
        }
        $(this).css({
          width: Math.floor(width),
          height: Math.floor(height),
          "margin-top": height > thumbHeight ? Math.floor(thumbHeight * 0.3 - height * 0.3) : Math.floor(thumbHeight * 0.5 - height * 0.5),
          "margin-left": Math.floor(thumbWidth * 0.5 - width * 0.5)
        }).show();
      }).each(function() {
        this.src = $(this).data("src");
      });
      if (self2.opts.axis === "x") {
        self2.$list.width(parseInt(self2.$grid.css("padding-right")) + instance.group.length * self2.$list.children().eq(0).outerWidth(true) + "px");
      }
    },
    focus: function(duration) {
      var self2 = this, $list = self2.$list, thumb, thumbPos;
      if (self2.instance.current) {
        thumb = $list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + self2.instance.current.index + '"]').addClass("fancybox-thumbs-active");
        thumbPos = thumb.position();
        if (self2.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
          $list.stop().animate({ "scrollTop": $list.scrollTop() + thumbPos.top }, duration);
        } else if (self2.opts.axis === "x" && (thumbPos.left < $list.parent().scrollLeft() || thumbPos.left > $list.parent().scrollLeft() + ($list.parent().width() - thumb.outerWidth()))) {
          $list.parent().stop().animate({ "scrollLeft": thumbPos.left }, duration);
        }
      }
    },
    update: function() {
      this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
      if (this.isVisible) {
        if (!this.$grid) {
          this.create();
        }
        this.instance.trigger("onThumbsShow");
        this.focus(0);
      } else if (this.$grid) {
        this.instance.trigger("onThumbsHide");
      }
      this.instance.update();
    },
    hide: function() {
      this.isVisible = false;
      this.update();
    },
    show: function() {
      this.isVisible = true;
      this.update();
    },
    toggle: function() {
      this.isVisible = !this.isVisible;
      this.update();
    }
  });
  $(document2).on({
    "onInit.fb": function(e, instance) {
      var Thumbs;
      if (instance && !instance.Thumbs) {
        Thumbs = new FancyThumbs(instance);
        if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
          Thumbs.show();
        }
      }
    },
    "beforeShow.fb": function(e, instance, item, firstRun) {
      var Thumbs = instance && instance.Thumbs;
      if (Thumbs && Thumbs.isVisible) {
        Thumbs.focus(firstRun ? 0 : 250);
      }
    },
    "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
      var Thumbs = instance && instance.Thumbs;
      if (Thumbs && Thumbs.isActive && keycode === 71) {
        keypress.preventDefault();
        Thumbs.toggle();
      }
    },
    "beforeClose.fb": function(e, instance) {
      var Thumbs = instance && instance.Thumbs;
      if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
        Thumbs.$grid.hide();
      }
    }
  });
})(document, window.jQuery);
(function(document2, $) {
  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
    },
    share: {
      tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p class="fancybox-share__links"><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'
    }
  });
  function escapeHtml(string) {
    var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    return String(string).replace(/[&<>"'`=\/]/g, function(s) {
      return entityMap[s];
    });
  }
  $(document2).on("click", "[data-fancybox-share]", function() {
    var f = $.fancybox.getInstance(), url, tpl;
    if (f) {
      url = f.current.opts.hash === false ? f.current.src : window.location;
      tpl = f.current.opts.share.tpl.replace(/\{\{media\}\}/g, f.current.type === "image" ? encodeURIComponent(f.current.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(url)).replace(/\{\{url_raw\}\}/g, escapeHtml(url)).replace(/\{\{descr\}\}/g, f.$caption ? encodeURIComponent(f.$caption.text()) : "");
      $.fancybox.open({
        src: f.translate(f, tpl),
        type: "html",
        opts: {
          animationEffect: "fade",
          animationDuration: 250,
          afterLoad: function(instance, current) {
            current.$content.find(".fancybox-share__links a").click(function() {
              window.open(this.href, "Share", "width=550, height=450");
              return false;
            });
          }
        }
      });
    }
  });
})(document, window.jQuery || jQuery);
(function(document2, window2, $) {
  if (!$.escapeSelector) {
    $.escapeSelector = function(sel) {
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      var fcssescape = function(ch, asCodePoint) {
        if (asCodePoint) {
          if (ch === "\0") {
            return "�";
          }
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        return "\\" + ch;
      };
      return (sel + "").replace(rcssescape, fcssescape);
    };
  }
  var shouldCreateHistory = true;
  var currentHash = null;
  var timerID = null;
  function parseUrl() {
    var hash = window2.location.hash.substr(1);
    var rez = hash.split("-");
    var index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1;
    var gallery = rez.join("-");
    if (index < 1) {
      index = 1;
    }
    return {
      hash,
      index,
      gallery
    };
  }
  function triggerFromUrl(url) {
    var $el;
    if (url.gallery !== "") {
      $el = $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']").eq(url.index - 1);
      if (!$el.length) {
        $el = $("#" + $.escapeSelector(url.gallery));
      }
      if ($el.length) {
        shouldCreateHistory = false;
        $el.trigger("click");
      }
    }
  }
  function getGalleryID(instance) {
    var opts;
    if (!instance) {
      return false;
    }
    opts = instance.current ? instance.current.opts : instance.opts;
    return opts.hash || (opts.$orig ? opts.$orig.data("fancybox") : "");
  }
  $(function() {
    if ($.fancybox.defaults.hash === false) {
      return;
    }
    $(document2).on({
      "onInit.fb": function(e, instance) {
        var url, gallery;
        if (instance.group[instance.currIndex].opts.hash === false) {
          return;
        }
        url = parseUrl();
        gallery = getGalleryID(instance);
        if (gallery && url.gallery && gallery == url.gallery) {
          instance.currIndex = url.index - 1;
        }
      },
      "beforeShow.fb": function(e, instance, current) {
        var gallery;
        if (!current || current.opts.hash === false) {
          return;
        }
        gallery = getGalleryID(instance);
        if (gallery && gallery !== "") {
          if (window2.location.hash.indexOf(gallery) < 0) {
            instance.opts.origHash = window2.location.hash;
          }
          currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");
          if ("replaceState" in window2.history) {
            if (timerID) {
              clearTimeout(timerID);
            }
            timerID = setTimeout(function() {
              window2.history[shouldCreateHistory ? "pushState" : "replaceState"]({}, document2.title, window2.location.pathname + window2.location.search + "#" + currentHash);
              timerID = null;
              shouldCreateHistory = false;
            }, 300);
          } else {
            window2.location.hash = currentHash;
          }
        }
      },
      "beforeClose.fb": function(e, instance, current) {
        var gallery, origHash;
        if (timerID) {
          clearTimeout(timerID);
        }
        if (current.opts.hash === false) {
          return;
        }
        gallery = getGalleryID(instance);
        origHash = instance && instance.opts.origHash ? instance.opts.origHash : "";
        if (gallery && gallery !== "") {
          if ("replaceState" in history) {
            window2.history.replaceState({}, document2.title, window2.location.pathname + window2.location.search + origHash);
          } else {
            window2.location.hash = origHash;
            $(window2).scrollTop(instance.scrollTop).scrollLeft(instance.scrollLeft);
          }
        }
        currentHash = null;
      }
    });
    $(window2).on("hashchange.fb", function() {
      var url = parseUrl();
      if ($.fancybox.getInstance()) {
        if (currentHash && currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && currentHash == url.gallery)) {
          currentHash = null;
          $.fancybox.close();
        }
      } else if (url.gallery !== "") {
        triggerFromUrl(url);
      }
    });
    setTimeout(function() {
      triggerFromUrl(parseUrl());
    }, 50);
  });
})(document, window, window.jQuery || jQuery);
(function(document2, $) {
  var prevTime = (/* @__PURE__ */ new Date()).getTime();
  $(document2).on({
    "onInit.fb": function(e, instance, current) {
      instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(e2) {
        var current2 = instance.current, currTime = (/* @__PURE__ */ new Date()).getTime();
        if (instance.group.length < 1 || current2.opts.wheel === false || current2.opts.wheel === "auto" && current2.type !== "image") {
          return;
        }
        e2.preventDefault();
        e2.stopPropagation();
        if (current2.$slide.hasClass("fancybox-animated")) {
          return;
        }
        e2 = e2.originalEvent || e2;
        if (currTime - prevTime < 250) {
          return;
        }
        prevTime = currTime;
        instance[(-e2.deltaY || -e2.deltaX || e2.wheelDelta || -e2.detail) < 0 ? "next" : "previous"]();
      });
    }
  });
})(document, window.jQuery || jQuery);
