/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
 * http://jqueryvalidation.org/
 * Copyright (c) 2015 JĆĀ¶rn Zaefferer; Licensed MIT */
!function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
}(function(a) {
  a.extend(a.fn, { validate: function(b2) {
    if (!this.length)
      return void (b2 && b2.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
    var c2 = a.data(this[0], "validator");
    return c2 ? c2 : (this.attr("novalidate", "novalidate"), c2 = new a.validator(b2, this[0]), a.data(this[0], "validator", c2), c2.settings.onsubmit && (this.on("click.validate", ":submit", function(b3) {
      c2.settings.submitHandler && (c2.submitButton = b3.target), a(this).hasClass("cancel") && (c2.cancelSubmit = true), void 0 !== a(this).attr("formnovalidate") && (c2.cancelSubmit = true);
    }), this.on("submit.validate", function(b3) {
      function d() {
        var d2, e;
        return c2.settings.submitHandler ? (c2.submitButton && (d2 = a("<input type='hidden'/>").attr("name", c2.submitButton.name).val(a(c2.submitButton).val()).appendTo(c2.currentForm)), e = c2.settings.submitHandler.call(c2, c2.currentForm, b3), c2.submitButton && d2.remove(), void 0 !== e ? e : false) : true;
      }
      return c2.settings.debug && b3.preventDefault(), c2.cancelSubmit ? (c2.cancelSubmit = false, d()) : c2.form() ? c2.pendingRequest ? (c2.formSubmitted = true, false) : d() : (c2.focusInvalid(), false);
    })), c2);
  }, valid: function() {
    var b2, c2, d;
    return a(this[0]).is("form") ? b2 = this.validate().form() : (d = [], b2 = true, c2 = a(this[0].form).validate(), this.each(function() {
      b2 = c2.element(this) && b2, d = d.concat(c2.errorList);
    }), c2.errorList = d), b2;
  }, rules: function(b2, c2) {
    var d, e, f, g, h, i, j = this[0];
    if (b2)
      switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b2) {
        case "add":
          a.extend(f, a.validator.normalizeRule(c2)), delete f.messages, e[j.name] = f, c2.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c2.messages));
          break;
        case "remove":
          return c2 ? (i = {}, a.each(c2.split(/\s/), function(b3, c3) {
            i[c3] = f[c3], delete f[c3], "required" === c3 && a(j).removeAttr("aria-required");
          }), i) : (delete e[j.name], f);
      }
    return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({ required: h }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, { remote: h })), g;
  } }), a.extend(a.expr[":"], { blank: function(b2) {
    return !a.trim("" + a(b2).val());
  }, filled: function(b2) {
    return !!a.trim("" + a(b2).val());
  }, unchecked: function(b2) {
    return !a(b2).prop("checked");
  } }), a.validator = function(b2, c2) {
    this.settings = a.extend(true, {}, a.validator.defaults, b2), this.currentForm = c2, this.init();
  }, a.validator.format = function(b2, c2) {
    return 1 === arguments.length ? function() {
      var c3 = a.makeArray(arguments);
      return c3.unshift(b2), a.validator.format.apply(this, c3);
    } : (arguments.length > 2 && c2.constructor !== Array && (c2 = a.makeArray(arguments).slice(1)), c2.constructor !== Array && (c2 = [c2]), a.each(c2, function(a2, c3) {
      b2 = b2.replace(new RegExp("\\{" + a2 + "\\}", "g"), function() {
        return c3;
      });
    }), b2);
  }, a.extend(a.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusCleanup: false, focusInvalid: true, errorContainer: a([]), errorLabelContainer: a([]), onsubmit: true, ignore: ":hidden", ignoreTitle: false, onfocusin: function(a2) {
    this.lastActive = a2, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a2, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a2)));
  }, onfocusout: function(a2) {
    this.checkable(a2) || !(a2.name in this.submitted) && this.optional(a2) || this.element(a2);
  }, onkeyup: function(b2, c2) {
    var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
    9 === c2.which && "" === this.elementValue(b2) || -1 !== a.inArray(c2.keyCode, d) || (b2.name in this.submitted || b2 === this.lastElement) && this.element(b2);
  }, onclick: function(a2) {
    a2.name in this.submitted ? this.element(a2) : a2.parentNode.name in this.submitted && this.element(a2.parentNode);
  }, highlight: function(b2, c2, d) {
    "radio" === b2.type ? this.findByName(b2.name).addClass(c2).removeClass(d) : a(b2).addClass(c2).removeClass(d);
  }, unhighlight: function(b2, c2, d) {
    "radio" === b2.type ? this.findByName(b2.name).removeClass(c2).addClass(d) : a(b2).removeClass(c2).addClass(d);
  } }, setDefaults: function(b2) {
    a.extend(a.validator.defaults, b2);
  }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date ( ISO ).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: a.validator.format("Please enter no more than {0} characters."), minlength: a.validator.format("Please enter at least {0} characters."), rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."), range: a.validator.format("Please enter a value between {0} and {1}."), max: a.validator.format("Please enter a value less than or equal to {0}."), min: a.validator.format("Please enter a value greater than or equal to {0}.") }, autoCreateRanges: false, prototype: { init: function() {
    function b2(b3) {
      var c3 = a.data(this.form, "validator"), d2 = "on" + b3.type.replace(/^validate/, ""), e = c3.settings;
      e[d2] && !a(this).is(e.ignore) && e[d2].call(c3, this, b3);
    }
    this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
    var c2, d = this.groups = {};
    a.each(this.settings.groups, function(b3, c3) {
      "string" == typeof c3 && (c3 = c3.split(/\s/)), a.each(c3, function(a2, c4) {
        d[c4] = b3;
      });
    }), c2 = this.settings.rules, a.each(c2, function(b3, d2) {
      c2[b3] = a.validator.normalizeRule(d2);
    }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", b2).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b2), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
  }, form: function() {
    return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
  }, checkForm: function() {
    this.prepareForm();
    for (var a2 = 0, b2 = this.currentElements = this.elements(); b2[a2]; a2++)
      this.check(b2[a2]);
    return this.valid();
  }, element: function(b2) {
    var c2 = this.clean(b2), d = this.validationTargetFor(c2), e = true;
    return this.lastElement = d, void 0 === d ? delete this.invalid[c2.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== false, e ? delete this.invalid[d.name] : this.invalid[d.name] = true), a(b2).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e;
  }, showErrors: function(b2) {
    if (b2) {
      a.extend(this.errorMap, b2), this.errorList = [];
      for (var c2 in b2)
        this.errorList.push({ message: b2[c2], element: this.findByName(c2)[0] });
      this.successList = a.grep(this.successList, function(a2) {
        return !(a2.name in b2);
      });
    }
    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
  }, resetForm: function() {
    a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
    var b2, c2 = this.elements().removeData("previousValue").removeAttr("aria-invalid");
    if (this.settings.unhighlight)
      for (b2 = 0; c2[b2]; b2++)
        this.settings.unhighlight.call(this, c2[b2], this.settings.errorClass, "");
    else
      c2.removeClass(this.settings.errorClass);
  }, numberOfInvalids: function() {
    return this.objectLength(this.invalid);
  }, objectLength: function(a2) {
    var b2, c2 = 0;
    for (b2 in a2)
      c2++;
    return c2;
  }, hideErrors: function() {
    this.hideThese(this.toHide);
  }, hideThese: function(a2) {
    a2.not(this.containers).text(""), this.addWrapper(a2).hide();
  }, valid: function() {
    return 0 === this.size();
  }, size: function() {
    return this.errorList.length;
  }, focusInvalid: function() {
    if (this.settings.focusInvalid)
      try {
        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
      } catch (b2) {
      }
  }, findLastActive: function() {
    var b2 = this.lastActive;
    return b2 && 1 === a.grep(this.errorList, function(a2) {
      return a2.element.name === b2.name;
    }).length && b2;
  }, elements: function() {
    var b2 = this, c2 = {};
    return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
      return !this.name && b2.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c2 || !b2.objectLength(a(this).rules()) ? false : (c2[this.name] = true, true);
    });
  }, clean: function(b2) {
    return a(b2)[0];
  }, errors: function() {
    var b2 = this.settings.errorClass.split(" ").join(".");
    return a(this.settings.errorElement + "." + b2, this.errorContext);
  }, reset: function() {
    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([]);
  }, prepareForm: function() {
    this.reset(), this.toHide = this.errors().add(this.containers);
  }, prepareElement: function(a2) {
    this.reset(), this.toHide = this.errorsFor(a2);
  }, elementValue: function(b2) {
    var c2, d = a(b2), e = b2.type;
    return "radio" === e || "checkbox" === e ? this.findByName(b2.name).filter(":checked").val() : "number" === e && "undefined" != typeof b2.validity ? b2.validity.badInput ? false : d.val() : (c2 = d.val(), "string" == typeof c2 ? c2.replace(/\r/g, "") : c2);
  }, check: function(b2) {
    b2 = this.validationTargetFor(this.clean(b2));
    var c2, d, e, f = a(b2).rules(), g = a.map(f, function(a2, b3) {
      return b3;
    }).length, h = false, i = this.elementValue(b2);
    for (d in f) {
      e = { method: d, parameters: f[d] };
      try {
        if (c2 = a.validator.methods[d].call(this, i, b2, e.parameters), "dependency-mismatch" === c2 && 1 === g) {
          h = true;
          continue;
        }
        if (h = false, "pending" === c2)
          return void (this.toHide = this.toHide.not(this.errorsFor(b2)));
        if (!c2)
          return this.formatAndAdd(b2, e), false;
      } catch (j) {
        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b2.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b2.id + ", check the '" + e.method + "' method."), j;
      }
    }
    if (!h)
      return this.objectLength(f) && this.successList.push(b2), true;
  }, customDataMessage: function(b2, c2) {
    return a(b2).data("msg" + c2.charAt(0).toUpperCase() + c2.substring(1).toLowerCase()) || a(b2).data("msg");
  }, customMessage: function(a2, b2) {
    var c2 = this.settings.messages[a2];
    return c2 && (c2.constructor === String ? c2 : c2[b2]);
  }, findDefined: function() {
    for (var a2 = 0; a2 < arguments.length; a2++)
      if (void 0 !== arguments[a2])
        return arguments[a2];
    return void 0;
  }, defaultMessage: function(b2, c2) {
    return this.findDefined(this.customMessage(b2.name, c2), this.customDataMessage(b2, c2), !this.settings.ignoreTitle && b2.title || void 0, a.validator.messages[c2], "<strong>Warning: No message defined for " + b2.name + "</strong>");
  }, formatAndAdd: function(b2, c2) {
    var d = this.defaultMessage(b2, c2.method), e = /\$?\{(\d+)\}/g;
    "function" == typeof d ? d = d.call(this, c2.parameters, b2) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c2.parameters)), this.errorList.push({ message: d, element: b2, method: c2.method }), this.errorMap[b2.name] = d, this.submitted[b2.name] = d;
  }, addWrapper: function(a2) {
    return this.settings.wrapper && (a2 = a2.add(a2.parent(this.settings.wrapper))), a2;
  }, defaultShowErrors: function() {
    var a2, b2, c2;
    for (a2 = 0; this.errorList[a2]; a2++)
      c2 = this.errorList[a2], this.settings.highlight && this.settings.highlight.call(this, c2.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c2.element, c2.message);
    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
      for (a2 = 0; this.successList[a2]; a2++)
        this.showLabel(this.successList[a2]);
    if (this.settings.unhighlight)
      for (a2 = 0, b2 = this.validElements(); b2[a2]; a2++)
        this.settings.unhighlight.call(this, b2[a2], this.settings.errorClass, this.settings.validClass);
    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
  }, validElements: function() {
    return this.currentElements.not(this.invalidElements());
  }, invalidElements: function() {
    return a(this.errorList).map(function() {
      return this.element;
    });
  }, showLabel: function(b2, c2) {
    var d, e, f, g = this.errorsFor(b2), h = this.idOrName(b2), i = a(b2).attr("aria-describedby");
    g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c2)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c2 || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b2)) : d.insertAfter(b2), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b2).attr("aria-describedby", i), e = this.groups[b2.name], e && a.each(this.groups, function(b3, c3) {
      c3 === e && a("[name='" + b3 + "']", this.currentForm).attr("aria-describedby", g.attr("id"));
    }))), !c2 && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b2)), this.toShow = this.toShow.add(g);
  }, errorsFor: function(b2) {
    var c2 = this.idOrName(b2), d = a(b2).attr("aria-describedby"), e = "label[for='" + c2 + "'], label[for='" + c2 + "'] *";
    return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e);
  }, idOrName: function(a2) {
    return this.groups[a2.name] || (this.checkable(a2) ? a2.name : a2.id || a2.name);
  }, validationTargetFor: function(b2) {
    return this.checkable(b2) && (b2 = this.findByName(b2.name)), a(b2).not(this.settings.ignore)[0];
  }, checkable: function(a2) {
    return /radio|checkbox/i.test(a2.type);
  }, findByName: function(b2) {
    return a(this.currentForm).find("[name='" + b2 + "']");
  }, getLength: function(b2, c2) {
    switch (c2.nodeName.toLowerCase()) {
      case "select":
        return a("option:selected", c2).length;
      case "input":
        if (this.checkable(c2))
          return this.findByName(c2.name).filter(":checked").length;
    }
    return b2.length;
  }, depend: function(a2, b2) {
    return this.dependTypes[typeof a2] ? this.dependTypes[typeof a2](a2, b2) : true;
  }, dependTypes: { "boolean": function(a2) {
    return a2;
  }, string: function(b2, c2) {
    return !!a(b2, c2.form).length;
  }, "function": function(a2, b2) {
    return a2(b2);
  } }, optional: function(b2) {
    var c2 = this.elementValue(b2);
    return !a.validator.methods.required.call(this, c2, b2) && "dependency-mismatch";
  }, startRequest: function(a2) {
    this.pending[a2.name] || (this.pendingRequest++, this.pending[a2.name] = true);
  }, stopRequest: function(b2, c2) {
    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b2.name], c2 && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = false) : !c2 && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = false);
  }, previousValue: function(b2) {
    return a.data(b2, "previousValue") || a.data(b2, "previousValue", { old: null, valid: true, message: this.defaultMessage(b2, "remote") });
  }, destroy: function() {
    this.resetForm(), a(this.currentForm).off(".validate").removeData("validator");
  } }, classRuleSettings: { required: { required: true }, email: { email: true }, url: { url: true }, date: { date: true }, dateISO: { dateISO: true }, number: { number: true }, digits: { digits: true }, creditcard: { creditcard: true } }, addClassRules: function(b2, c2) {
    b2.constructor === String ? this.classRuleSettings[b2] = c2 : a.extend(this.classRuleSettings, b2);
  }, classRules: function(b2) {
    var c2 = {}, d = a(b2).attr("class");
    return d && a.each(d.split(" "), function() {
      this in a.validator.classRuleSettings && a.extend(c2, a.validator.classRuleSettings[this]);
    }), c2;
  }, normalizeAttributeRule: function(a2, b2, c2, d) {
    /min|max/.test(c2) && (null === b2 || /number|range|text/.test(b2)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a2[c2] = d : b2 === c2 && "range" !== b2 && (a2[c2] = true);
  }, attributeRules: function(b2) {
    var c2, d, e = {}, f = a(b2), g = b2.getAttribute("type");
    for (c2 in a.validator.methods)
      "required" === c2 ? (d = b2.getAttribute(c2), "" === d && (d = true), d = !!d) : d = f.attr(c2), this.normalizeAttributeRule(e, g, c2, d);
    return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
  }, dataRules: function(b2) {
    var c2, d, e = {}, f = a(b2), g = b2.getAttribute("type");
    for (c2 in a.validator.methods)
      d = f.data("rule" + c2.charAt(0).toUpperCase() + c2.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c2, d);
    return e;
  }, staticRules: function(b2) {
    var c2 = {}, d = a.data(b2.form, "validator");
    return d.settings.rules && (c2 = a.validator.normalizeRule(d.settings.rules[b2.name]) || {}), c2;
  }, normalizeRules: function(b2, c2) {
    return a.each(b2, function(d, e) {
      if (e === false)
        return void delete b2[d];
      if (e.param || e.depends) {
        var f = true;
        switch (typeof e.depends) {
          case "string":
            f = !!a(e.depends, c2.form).length;
            break;
          case "function":
            f = e.depends.call(c2, c2);
        }
        f ? b2[d] = void 0 !== e.param ? e.param : true : delete b2[d];
      }
    }), a.each(b2, function(d, e) {
      b2[d] = a.isFunction(e) ? e(c2) : e;
    }), a.each(["minlength", "maxlength"], function() {
      b2[this] && (b2[this] = Number(b2[this]));
    }), a.each(["rangelength", "range"], function() {
      var c3;
      b2[this] && (a.isArray(b2[this]) ? b2[this] = [Number(b2[this][0]), Number(b2[this][1])] : "string" == typeof b2[this] && (c3 = b2[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b2[this] = [Number(c3[0]), Number(c3[1])]));
    }), a.validator.autoCreateRanges && (null != b2.min && null != b2.max && (b2.range = [b2.min, b2.max], delete b2.min, delete b2.max), null != b2.minlength && null != b2.maxlength && (b2.rangelength = [b2.minlength, b2.maxlength], delete b2.minlength, delete b2.maxlength)), b2;
  }, normalizeRule: function(b2) {
    if ("string" == typeof b2) {
      var c2 = {};
      a.each(b2.split(/\s/), function() {
        c2[this] = true;
      }), b2 = c2;
    }
    return b2;
  }, addMethod: function(b2, c2, d) {
    a.validator.methods[b2] = c2, a.validator.messages[b2] = void 0 !== d ? d : a.validator.messages[b2], c2.length < 3 && a.validator.addClassRules(b2, a.validator.normalizeRule(b2));
  }, methods: { required: function(b2, c2, d) {
    if (!this.depend(d, c2))
      return "dependency-mismatch";
    if ("select" === c2.nodeName.toLowerCase()) {
      var e = a(c2).val();
      return e && e.length > 0;
    }
    return this.checkable(c2) ? this.getLength(b2, c2) > 0 : b2.length > 0;
  }, email: function(a2, b2) {
    return this.optional(b2) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a2);
  }, url: function(a2, b2) {
    return this.optional(b2) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a2);
  }, date: function(a2, b2) {
    return this.optional(b2) || !/Invalid|NaN/.test(new Date(a2).toString());
  }, dateISO: function(a2, b2) {
    return this.optional(b2) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a2);
  }, number: function(a2, b2) {
    return this.optional(b2) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a2);
  }, digits: function(a2, b2) {
    return this.optional(b2) || /^\d+$/.test(a2);
  }, creditcard: function(a2, b2) {
    if (this.optional(b2))
      return "dependency-mismatch";
    if (/[^0-9 \-]+/.test(a2))
      return false;
    var c2, d, e = 0, f = 0, g = false;
    if (a2 = a2.replace(/\D/g, ""), a2.length < 13 || a2.length > 19)
      return false;
    for (c2 = a2.length - 1; c2 >= 0; c2--)
      d = a2.charAt(c2), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
    return e % 10 === 0;
  }, minlength: function(b2, c2, d) {
    var e = a.isArray(b2) ? b2.length : this.getLength(b2, c2);
    return this.optional(c2) || e >= d;
  }, maxlength: function(b2, c2, d) {
    var e = a.isArray(b2) ? b2.length : this.getLength(b2, c2);
    return this.optional(c2) || d >= e;
  }, rangelength: function(b2, c2, d) {
    var e = a.isArray(b2) ? b2.length : this.getLength(b2, c2);
    return this.optional(c2) || e >= d[0] && e <= d[1];
  }, min: function(a2, b2, c2) {
    return this.optional(b2) || a2 >= c2;
  }, max: function(a2, b2, c2) {
    return this.optional(b2) || c2 >= a2;
  }, range: function(a2, b2, c2) {
    return this.optional(b2) || a2 >= c2[0] && a2 <= c2[1];
  }, equalTo: function(b2, c2, d) {
    var e = a(d);
    return this.settings.onfocusout && e.off(".validate-equalTo").on("blur.validate-equalTo", function() {
      a(c2).valid();
    }), b2 === e.val();
  }, remote: function(b2, c2, d) {
    if (this.optional(c2))
      return "dependency-mismatch";
    var e, f, g = this.previousValue(c2);
    return this.settings.messages[c2.name] || (this.settings.messages[c2.name] = {}), g.originalMessage = this.settings.messages[c2.name].remote, this.settings.messages[c2.name].remote = g.message, d = "string" == typeof d && { url: d } || d, g.old === b2 ? g.valid : (g.old = b2, e = this, this.startRequest(c2), f = {}, f[c2.name] = b2, a.ajax(a.extend(true, { mode: "abort", port: "validate" + c2.name, dataType: "json", data: f, context: e.currentForm, success: function(d2) {
      var f2, h, i, j = d2 === true || "true" === d2;
      e.settings.messages[c2.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c2), e.formSubmitted = i, e.successList.push(c2), delete e.invalid[c2.name], e.showErrors()) : (f2 = {}, h = d2 || e.defaultMessage(c2, "remote"), f2[c2.name] = g.message = a.isFunction(h) ? h(b2) : h, e.invalid[c2.name] = true, e.showErrors(f2)), g.valid = j, e.stopRequest(c2, j);
    } }, d)), "pending");
  } } });
  var b, c = {};
  a.ajaxPrefilter ? a.ajaxPrefilter(function(a2, b2, d) {
    var e = a2.port;
    "abort" === a2.mode && (c[e] && c[e].abort(), c[e] = d);
  }) : (b = a.ajax, a.ajax = function(d) {
    var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
    return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments);
  });
});
!function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto);
}(function(e) {
  function t(t2) {
    var r2 = t2.data;
    t2.isDefaultPrevented() || (t2.preventDefault(), e(t2.target).ajaxSubmit(r2));
  }
  function r(t2) {
    var r2 = t2.target, a2 = e(r2);
    if (!a2.is("[type=submit],[type=image]")) {
      var n2 = a2.closest("[type=submit]");
      if (0 === n2.length)
        return;
      r2 = n2[0];
    }
    var i2 = this;
    if (i2.clk = r2, "image" == r2.type)
      if (void 0 !== t2.offsetX)
        i2.clk_x = t2.offsetX, i2.clk_y = t2.offsetY;
      else if ("function" == typeof e.fn.offset) {
        var o = a2.offset();
        i2.clk_x = t2.pageX - o.left, i2.clk_y = t2.pageY - o.top;
      } else
        i2.clk_x = t2.pageX - r2.offsetLeft, i2.clk_y = t2.pageY - r2.offsetTop;
    setTimeout(function() {
      i2.clk = i2.clk_x = i2.clk_y = null;
    }, 100);
  }
  function a() {
    if (e.fn.ajaxSubmit.debug) {
      var t2 = "[jquery.form] " + Array.prototype.join.call(arguments, "");
      window.console && window.console.log ? window.console.log(t2) : window.opera && window.opera.postError && window.opera.postError(t2);
    }
  }
  var n = {};
  n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
  var i = !!e.fn.prop;
  e.fn.attr2 = function() {
    if (!i)
      return this.attr.apply(this, arguments);
    var e2 = this.prop.apply(this, arguments);
    return e2 && e2.jquery || "string" == typeof e2 ? e2 : this.attr.apply(this, arguments);
  }, e.fn.ajaxSubmit = function(t2) {
    function r2(r3) {
      var a2, n2, i2 = e.param(r3, t2.traditional).split("&"), o2 = i2.length, s2 = [];
      for (a2 = 0; o2 > a2; a2++)
        i2[a2] = i2[a2].replace(/\+/g, " "), n2 = i2[a2].split("="), s2.push([decodeURIComponent(n2[0]), decodeURIComponent(n2[1])]);
      return s2;
    }
    function o(a2) {
      for (var n2 = new FormData(), i2 = 0; i2 < a2.length; i2++)
        n2.append(a2[i2].name, a2[i2].value);
      if (t2.extraData) {
        var o2 = r2(t2.extraData);
        for (i2 = 0; i2 < o2.length; i2++)
          o2[i2] && n2.append(o2[i2][0], o2[i2][1]);
      }
      t2.data = null;
      var s2 = e.extend(true, {}, e.ajaxSettings, t2, { contentType: false, processData: false, cache: false, type: u || "POST" });
      t2.uploadProgress && (s2.xhr = function() {
        var r3 = e.ajaxSettings.xhr();
        return r3.upload && r3.upload.addEventListener("progress", function(e2) {
          var r4 = 0, a3 = e2.loaded || e2.position, n3 = e2.total;
          e2.lengthComputable && (r4 = Math.ceil(a3 / n3 * 100)), t2.uploadProgress(e2, a3, n3, r4);
        }, false), r3;
      }), s2.data = null;
      var c2 = s2.beforeSend;
      return s2.beforeSend = function(e2, r3) {
        t2.formData ? r3.data = t2.formData : r3.data = n2, c2 && c2.call(this, e2, r3);
      }, e.ajax(s2);
    }
    function s(r3) {
      function n2(e2) {
        var t3 = null;
        try {
          e2.contentWindow && (t3 = e2.contentWindow.document);
        } catch (r4) {
          a("cannot get iframe.contentWindow document: " + r4);
        }
        if (t3)
          return t3;
        try {
          t3 = e2.contentDocument ? e2.contentDocument : e2.document;
        } catch (r4) {
          a("cannot get iframe.contentDocument: " + r4), t3 = e2.document;
        }
        return t3;
      }
      function o2() {
        function t3() {
          try {
            var e2 = n2(g2).readyState;
            a("state = " + e2), e2 && "uninitialized" == e2.toLowerCase() && setTimeout(t3, 50);
          } catch (r5) {
            a("Server abort: ", r5, " (", r5.name, ")"), s2(k2), j2 && clearTimeout(j2), j2 = void 0;
          }
        }
        var r4 = f.attr2("target"), i2 = f.attr2("action"), o3 = "multipart/form-data", c3 = f.attr("enctype") || f.attr("encoding") || o3;
        w2.setAttribute("target", p2), (!u || /post/i.test(u)) && w2.setAttribute("method", "POST"), i2 != m2.url && w2.setAttribute("action", m2.url), m2.skipEncodingOverride || u && !/post/i.test(u) || f.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }), m2.timeout && (j2 = setTimeout(function() {
          T2 = true, s2(D2);
        }, m2.timeout));
        var l3 = [];
        try {
          if (m2.extraData)
            for (var d3 in m2.extraData)
              m2.extraData.hasOwnProperty(d3) && (e.isPlainObject(m2.extraData[d3]) && m2.extraData[d3].hasOwnProperty("name") && m2.extraData[d3].hasOwnProperty("value") ? l3.push(e('<input type="hidden" name="' + m2.extraData[d3].name + '">').val(m2.extraData[d3].value).appendTo(w2)[0]) : l3.push(e('<input type="hidden" name="' + d3 + '">').val(m2.extraData[d3]).appendTo(w2)[0]));
          m2.iframeTarget || v2.appendTo("body"), g2.attachEvent ? g2.attachEvent("onload", s2) : g2.addEventListener("load", s2, false), setTimeout(t3, 15);
          try {
            w2.submit();
          } catch (h2) {
            var x3 = document.createElement("form").submit;
            x3.apply(w2);
          }
        } finally {
          w2.setAttribute("action", i2), w2.setAttribute("enctype", c3), r4 ? w2.setAttribute("target", r4) : f.removeAttr("target"), e(l3).remove();
        }
      }
      function s2(t3) {
        if (!x2.aborted && !F) {
          if (M = n2(g2), M || (a("cannot access response document"), t3 = k2), t3 === D2 && x2)
            return x2.abort("timeout"), void S2.reject(x2, "timeout");
          if (t3 == k2 && x2)
            return x2.abort("server abort"), void S2.reject(x2, "error", "server abort");
          if (M && M.location.href != m2.iframeSrc || T2) {
            g2.detachEvent ? g2.detachEvent("onload", s2) : g2.removeEventListener("load", s2, false);
            var r4, i2 = "success";
            try {
              if (T2)
                throw "timeout";
              var o3 = "xml" == m2.dataType || M.XMLDocument || e.isXMLDoc(M);
              if (a("isXml=" + o3), !o3 && window.opera && (null === M.body || !M.body.innerHTML) && --O)
                return a("requeing onLoad callback, DOM not available"), void setTimeout(s2, 250);
              var u2 = M.body ? M.body : M.documentElement;
              x2.responseText = u2 ? u2.innerHTML : null, x2.responseXML = M.XMLDocument ? M.XMLDocument : M, o3 && (m2.dataType = "xml"), x2.getResponseHeader = function(e2) {
                var t4 = { "content-type": m2.dataType };
                return t4[e2.toLowerCase()];
              }, u2 && (x2.status = Number(u2.getAttribute("status")) || x2.status, x2.statusText = u2.getAttribute("statusText") || x2.statusText);
              var c3 = (m2.dataType || "").toLowerCase(), l3 = /(json|script|text)/.test(c3);
              if (l3 || m2.textarea) {
                var f2 = M.getElementsByTagName("textarea")[0];
                if (f2)
                  x2.responseText = f2.value, x2.status = Number(f2.getAttribute("status")) || x2.status, x2.statusText = f2.getAttribute("statusText") || x2.statusText;
                else if (l3) {
                  var p3 = M.getElementsByTagName("pre")[0], h2 = M.getElementsByTagName("body")[0];
                  p3 ? x2.responseText = p3.textContent ? p3.textContent : p3.innerText : h2 && (x2.responseText = h2.textContent ? h2.textContent : h2.innerText);
                }
              } else
                "xml" == c3 && !x2.responseXML && x2.responseText && (x2.responseXML = X(x2.responseText));
              try {
                E2 = _(x2, c3, m2);
              } catch (y3) {
                i2 = "parsererror", x2.error = r4 = y3 || i2;
              }
            } catch (y3) {
              a("error caught: ", y3), i2 = "error", x2.error = r4 = y3 || i2;
            }
            x2.aborted && (a("upload aborted"), i2 = null), x2.status && (i2 = x2.status >= 200 && x2.status < 300 || 304 === x2.status ? "success" : "error"), "success" === i2 ? (m2.success && m2.success.call(m2.context, E2, "success", x2), S2.resolve(x2.responseText, "success", x2), d2 && e.event.trigger("ajaxSuccess", [x2, m2])) : i2 && (void 0 === r4 && (r4 = x2.statusText), m2.error && m2.error.call(m2.context, x2, i2, r4), S2.reject(x2, "error", r4), d2 && e.event.trigger("ajaxError", [x2, m2, r4])), d2 && e.event.trigger("ajaxComplete", [x2, m2]), d2 && !--e.active && e.event.trigger("ajaxStop"), m2.complete && m2.complete.call(m2.context, x2, i2), F = true, m2.timeout && clearTimeout(j2), setTimeout(function() {
              m2.iframeTarget ? v2.attr("src", m2.iframeSrc) : v2.remove(), x2.responseXML = null;
            }, 100);
          }
        }
      }
      var c2, l2, m2, d2, p2, v2, g2, x2, y2, b2, T2, j2, w2 = f[0], S2 = e.Deferred();
      if (S2.abort = function(e2) {
        x2.abort(e2);
      }, r3)
        for (l2 = 0; l2 < h.length; l2++)
          c2 = e(h[l2]), i ? c2.prop("disabled", false) : c2.removeAttr("disabled");
      if (m2 = e.extend(true, {}, e.ajaxSettings, t2), m2.context = m2.context || m2, p2 = "jqFormIO" + (/* @__PURE__ */ new Date()).getTime(), m2.iframeTarget ? (v2 = e(m2.iframeTarget), b2 = v2.attr2("name"), b2 ? p2 = b2 : v2.attr2("name", p2)) : (v2 = e('<iframe name="' + p2 + '" src="' + m2.iframeSrc + '" />'), v2.css({ position: "absolute", top: "-1000px", left: "-1000px" })), g2 = v2[0], x2 = { aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function() {
      }, getResponseHeader: function() {
      }, setRequestHeader: function() {
      }, abort: function(t3) {
        var r4 = "timeout" === t3 ? "timeout" : "aborted";
        a("aborting upload... " + r4), this.aborted = 1;
        try {
          g2.contentWindow.document.execCommand && g2.contentWindow.document.execCommand("Stop");
        } catch (n3) {
        }
        v2.attr("src", m2.iframeSrc), x2.error = r4, m2.error && m2.error.call(m2.context, x2, r4, t3), d2 && e.event.trigger("ajaxError", [x2, m2, r4]), m2.complete && m2.complete.call(m2.context, x2, r4);
      } }, d2 = m2.global, d2 && 0 === e.active++ && e.event.trigger("ajaxStart"), d2 && e.event.trigger("ajaxSend", [x2, m2]), m2.beforeSend && m2.beforeSend.call(m2.context, x2, m2) === false)
        return m2.global && e.active--, S2.reject(), S2;
      if (x2.aborted)
        return S2.reject(), S2;
      y2 = w2.clk, y2 && (b2 = y2.name, b2 && !y2.disabled && (m2.extraData = m2.extraData || {}, m2.extraData[b2] = y2.value, "image" == y2.type && (m2.extraData[b2 + ".x"] = w2.clk_x, m2.extraData[b2 + ".y"] = w2.clk_y)));
      var D2 = 1, k2 = 2, A2 = e("meta[name=csrf-token]").attr("content"), L2 = e("meta[name=csrf-param]").attr("content");
      L2 && A2 && (m2.extraData = m2.extraData || {}, m2.extraData[L2] = A2), m2.forceSync ? o2() : setTimeout(o2, 10);
      var E2, M, F, O = 50, X = e.parseXML || function(e2, t3) {
        return window.ActiveXObject ? (t3 = new ActiveXObject("Microsoft.XMLDOM"), t3.async = "false", t3.loadXML(e2)) : t3 = new DOMParser().parseFromString(e2, "text/xml"), t3 && t3.documentElement && "parsererror" != t3.documentElement.nodeName ? t3 : null;
      }, C = e.parseJSON || function(e2) {
        return window.eval("(" + e2 + ")");
      }, _ = function(t3, r4, a2) {
        var n3 = t3.getResponseHeader("content-type") || "", i2 = "xml" === r4 || !r4 && n3.indexOf("xml") >= 0, o3 = i2 ? t3.responseXML : t3.responseText;
        return i2 && "parsererror" === o3.documentElement.nodeName && e.error && e.error("parsererror"), a2 && a2.dataFilter && (o3 = a2.dataFilter(o3, r4)), "string" == typeof o3 && ("json" === r4 || !r4 && n3.indexOf("json") >= 0 ? o3 = C(o3) : ("script" === r4 || !r4 && n3.indexOf("javascript") >= 0) && e.globalEval(o3)), o3;
      };
      return S2;
    }
    if (!this.length)
      return a("ajaxSubmit: skipping submit process - no element selected"), this;
    var u, c, l, f = this;
    "function" == typeof t2 ? t2 = { success: t2 } : void 0 === t2 && (t2 = {}), u = t2.type || this.attr2("method"), c = t2.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t2 = e.extend(true, { url: l, success: e.ajaxSettings.success, type: u || e.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, t2);
    var m = {};
    if (this.trigger("form-pre-serialize", [this, t2, m]), m.veto)
      return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
    if (t2.beforeSerialize && t2.beforeSerialize(this, t2) === false)
      return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
    var d = t2.traditional;
    void 0 === d && (d = e.ajaxSettings.traditional);
    var p, h = [], v = this.formToArray(t2.semantic, h);
    if (t2.data && (t2.extraData = t2.data, p = e.param(t2.data, d)), t2.beforeSubmit && t2.beforeSubmit(v, this, t2) === false)
      return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
    if (this.trigger("form-submit-validate", [v, this, t2, m]), m.veto)
      return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
    var g = e.param(v, d);
    p && (g = g ? g + "&" + p : p), "GET" == t2.type.toUpperCase() ? (t2.url += (t2.url.indexOf("?") >= 0 ? "&" : "?") + g, t2.data = null) : t2.data = g;
    var x = [];
    if (t2.resetForm && x.push(function() {
      f.resetForm();
    }), t2.clearForm && x.push(function() {
      f.clearForm(t2.includeHidden);
    }), !t2.dataType && t2.target) {
      var y = t2.success || function() {
      };
      x.push(function(r3) {
        var a2 = t2.replaceTarget ? "replaceWith" : "html";
        e(t2.target)[a2](r3).each(y, arguments);
      });
    } else
      t2.success && x.push(t2.success);
    if (t2.success = function(e2, r3, a2) {
      for (var n2 = t2.context || this, i2 = 0, o2 = x.length; o2 > i2; i2++)
        x[i2].apply(n2, [e2, r3, a2 || f, f]);
    }, t2.error) {
      var b = t2.error;
      t2.error = function(e2, r3, a2) {
        var n2 = t2.context || this;
        b.apply(n2, [e2, r3, a2, f]);
      };
    }
    if (t2.complete) {
      var T = t2.complete;
      t2.complete = function(e2, r3) {
        var a2 = t2.context || this;
        T.apply(a2, [e2, r3, f]);
      };
    }
    var j = e("input[type=file]:enabled", this).filter(function() {
      return "" !== e(this).val();
    }), w = j.length > 0, S = "multipart/form-data", D = f.attr("enctype") == S || f.attr("encoding") == S, k = n.fileapi && n.formdata;
    a("fileAPI :" + k);
    var A, L = (w || D) && !k;
    t2.iframe !== false && (t2.iframe || L) ? t2.closeKeepAlive ? e.get(t2.closeKeepAlive, function() {
      A = s(v);
    }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t2), f.removeData("jqxhr").data("jqxhr", A);
    for (var E = 0; E < h.length; E++)
      h[E] = null;
    return this.trigger("form-submit-notify", [this, t2]), this;
  }, e.fn.ajaxForm = function(n2) {
    if (n2 = n2 || {}, n2.delegation = n2.delegation && e.isFunction(e.fn.on), !n2.delegation && 0 === this.length) {
      var i2 = { s: this.selector, c: this.context };
      return !e.isReady && i2.s ? (a("DOM not ready, queuing ajaxForm"), e(function() {
        e(i2.s, i2.c).ajaxForm(n2);
      }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this);
    }
    return n2.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n2, t).on("click.form-plugin", this.selector, n2, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n2, t).bind("click.form-plugin", n2, r);
  }, e.fn.ajaxFormUnbind = function() {
    return this.unbind("submit.form-plugin click.form-plugin");
  }, e.fn.formToArray = function(t2, r2) {
    var a2 = [];
    if (0 === this.length)
      return a2;
    var i2, o = this[0], s = this.attr("id"), u = t2 ? o.getElementsByTagName("*") : o.elements;
    if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i2 = e(':input[form="' + s + '"]').get(), i2.length && (u = (u || []).concat(i2))), !u || !u.length)
      return a2;
    var c, l, f, m, d, p, h;
    for (c = 0, p = u.length; p > c; c++)
      if (d = u[c], f = d.name, f && !d.disabled)
        if (t2 && o.clk && "image" == d.type)
          o.clk == d && (a2.push({ name: f, value: e(d).val(), type: d.type }), a2.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y }));
        else if (m = e.fieldValue(d, true), m && m.constructor == Array)
          for (r2 && r2.push(d), l = 0, h = m.length; h > l; l++)
            a2.push({ name: f, value: m[l] });
        else if (n.fileapi && "file" == d.type) {
          r2 && r2.push(d);
          var v = d.files;
          if (v.length)
            for (l = 0; l < v.length; l++)
              a2.push({ name: f, value: v[l], type: d.type });
          else
            a2.push({ name: f, value: "", type: d.type });
        } else
          null !== m && "undefined" != typeof m && (r2 && r2.push(d), a2.push({ name: f, value: m, type: d.type, required: d.required }));
    if (!t2 && o.clk) {
      var g = e(o.clk), x = g[0];
      f = x.name, f && !x.disabled && "image" == x.type && (a2.push({ name: f, value: g.val() }), a2.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y }));
    }
    return a2;
  }, e.fn.formSerialize = function(t2) {
    return e.param(this.formToArray(t2));
  }, e.fn.fieldSerialize = function(t2) {
    var r2 = [];
    return this.each(function() {
      var a2 = this.name;
      if (a2) {
        var n2 = e.fieldValue(this, t2);
        if (n2 && n2.constructor == Array)
          for (var i2 = 0, o = n2.length; o > i2; i2++)
            r2.push({ name: a2, value: n2[i2] });
        else
          null !== n2 && "undefined" != typeof n2 && r2.push({ name: this.name, value: n2 });
      }
    }), e.param(r2);
  }, e.fn.fieldValue = function(t2) {
    for (var r2 = [], a2 = 0, n2 = this.length; n2 > a2; a2++) {
      var i2 = this[a2], o = e.fieldValue(i2, t2);
      null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r2, o) : r2.push(o));
    }
    return r2;
  }, e.fieldValue = function(t2, r2) {
    var a2 = t2.name, n2 = t2.type, i2 = t2.tagName.toLowerCase();
    if (void 0 === r2 && (r2 = true), r2 && (!a2 || t2.disabled || "reset" == n2 || "button" == n2 || ("checkbox" == n2 || "radio" == n2) && !t2.checked || ("submit" == n2 || "image" == n2) && t2.form && t2.form.clk != t2 || "select" == i2 && -1 == t2.selectedIndex))
      return null;
    if ("select" == i2) {
      var o = t2.selectedIndex;
      if (0 > o)
        return null;
      for (var s = [], u = t2.options, c = "select-one" == n2, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
        var m = u[f];
        if (m.selected) {
          var d = m.value;
          if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c)
            return d;
          s.push(d);
        }
      }
      return s;
    }
    return e(t2).val();
  }, e.fn.clearForm = function(t2) {
    return this.each(function() {
      e("input,select,textarea", this).clearFields(t2);
    });
  }, e.fn.clearFields = e.fn.clearInputs = function(t2) {
    var r2 = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
    return this.each(function() {
      var a2 = this.type, n2 = this.tagName.toLowerCase();
      r2.test(a2) || "textarea" == n2 ? this.value = "" : "checkbox" == a2 || "radio" == a2 ? this.checked = false : "select" == n2 ? this.selectedIndex = -1 : "file" == a2 ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(true)) : e(this).val("") : t2 && (t2 === true && /hidden/.test(a2) || "string" == typeof t2 && e(this).is(t2)) && (this.value = "");
    });
  }, e.fn.resetForm = function() {
    return this.each(function() {
      ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset();
    });
  }, e.fn.enable = function(e2) {
    return void 0 === e2 && (e2 = true), this.each(function() {
      this.disabled = !e2;
    });
  }, e.fn.selected = function(t2) {
    return void 0 === t2 && (t2 = true), this.each(function() {
      var r2 = this.type;
      if ("checkbox" == r2 || "radio" == r2)
        this.checked = t2;
      else if ("option" == this.tagName.toLowerCase()) {
        var a2 = e(this).parent("select");
        t2 && a2[0] && "select-one" == a2[0].type && a2.find("option").selected(false), this.selected = t2;
      }
    });
  }, e.fn.ajaxSubmit.debug = false;
});
