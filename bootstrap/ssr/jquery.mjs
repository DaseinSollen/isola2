/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
(function(global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ? factory(global, true) : function(w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(w);
    };
  } else {
    factory(global);
  }
})(typeof window !== "undefined" ? window : globalThis, function(window2, noGlobal) {
  var deletedIds = [];
  var document = window2.document;
  var slice = deletedIds.slice;
  var concat = deletedIds.concat;
  var push = deletedIds.push;
  var indexOf = deletedIds.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var support = {};
  var version = "1.12.4", jQuery = function(selector, context) {
    return new jQuery.fn.init(selector, context);
  }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
    return letter.toUpperCase();
  };
  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // Start with an empty selector
    selector: "",
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function() {
      return slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function(num) {
      return num != null ? (
        // Return just the one element from the set
        num < 0 ? this[num + this.length] : this[num]
      ) : (
        // Return all the elements in a clean array
        slice.call(this)
      );
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function(elems) {
      var ret = jQuery.merge(this.constructor(), elems);
      ret.prevObject = this;
      ret.context = this.context;
      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function(callback) {
      return jQuery.each(this, callback);
    },
    map: function(callback) {
      return this.pushStack(jQuery.map(this, function(elem, i2) {
        return callback.call(elem, i2, elem);
      }));
    },
    slice: function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(i2) {
      var len = this.length, j = +i2 + (i2 < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push,
    sort: deletedIds.sort,
    splice: deletedIds.splice
  };
  jQuery.extend = jQuery.fn.extend = function() {
    var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i2] || {};
      i2++;
    }
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
      target = {};
    }
    if (i2 === length) {
      target = this;
      i2--;
    }
    for (; i2 < length; i2++) {
      if ((options = arguments[i2]) != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== void 0) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function(msg) {
      throw new Error(msg);
    },
    noop: function() {
    },
    // See test/unit/core.js for details concerning isFunction.
    // Since version 1.3, DOM methods and functions like alert
    // aren't supported. They return false on IE (#2968).
    isFunction: function(obj) {
      return jQuery.type(obj) === "function";
    },
    isArray: Array.isArray || function(obj) {
      return jQuery.type(obj) === "array";
    },
    isWindow: function(obj) {
      return obj != null && obj == obj.window;
    },
    isNumeric: function(obj) {
      var realStringObj = obj && obj.toString();
      return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
    },
    isEmptyObject: function(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    isPlainObject: function(obj) {
      var key;
      if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }
      try {
        if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
          return false;
        }
      } catch (e) {
        return false;
      }
      if (!support.ownFirst) {
        for (key in obj) {
          return hasOwn.call(obj, key);
        }
      }
      for (key in obj) {
      }
      return key === void 0 || hasOwn.call(obj, key);
    },
    type: function(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    },
    // Workarounds based on findings by Jim Driscoll
    // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
    globalEval: function(data) {
      if (data && jQuery.trim(data)) {
        (window2.execScript || function(data2) {
          window2["eval"].call(window2, data2);
        })(data);
      }
    },
    // Convert dashed to camelCase; used by the css and data modules
    // Microsoft forgot to hump their vendor prefix (#9572)
    camelCase: function(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },
    nodeName: function(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    each: function(obj, callback) {
      var length, i2 = 0;
      if (isArrayLike(obj)) {
        length = obj.length;
        for (; i2 < length; i2++) {
          if (callback.call(obj[i2], i2, obj[i2]) === false) {
            break;
          }
        }
      } else {
        for (i2 in obj) {
          if (callback.call(obj[i2], i2, obj[i2]) === false) {
            break;
          }
        }
      }
      return obj;
    },
    // Support: Android<4.1, IE<9
    trim: function(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    // results is for internal usage only
    makeArray: function(arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(
            ret,
            typeof arr === "string" ? [arr] : arr
          );
        } else {
          push.call(ret, arr);
        }
      }
      return ret;
    },
    inArray: function(elem, arr, i2) {
      var len;
      if (arr) {
        if (indexOf) {
          return indexOf.call(arr, elem, i2);
        }
        len = arr.length;
        i2 = i2 ? i2 < 0 ? Math.max(0, len + i2) : i2 : 0;
        for (; i2 < len; i2++) {
          if (i2 in arr && arr[i2] === elem) {
            return i2;
          }
        }
      }
      return -1;
    },
    merge: function(first, second) {
      var len = +second.length, j = 0, i2 = first.length;
      while (j < len) {
        first[i2++] = second[j++];
      }
      if (len !== len) {
        while (second[j] !== void 0) {
          first[i2++] = second[j++];
        }
      }
      first.length = i2;
      return first;
    },
    grep: function(elems, callback, invert) {
      var callbackInverse, matches = [], i2 = 0, length = elems.length, callbackExpect = !invert;
      for (; i2 < length; i2++) {
        callbackInverse = !callback(elems[i2], i2);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i2]);
        }
      }
      return matches;
    },
    // arg is for internal usage only
    map: function(elems, callback, arg) {
      var length, value, i2 = 0, ret = [];
      if (isArrayLike(elems)) {
        length = elems.length;
        for (; i2 < length; i2++) {
          value = callback(elems[i2], i2, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i2 in elems) {
          value = callback(elems[i2], i2, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }
      return concat.apply([], ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // Bind a function to a context, optionally partially applying any
    // arguments.
    proxy: function(fn, context) {
      var args, proxy, tmp;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!jQuery.isFunction(fn)) {
        return void 0;
      }
      args = slice.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    },
    now: function() {
      return +/* @__PURE__ */ new Date();
    },
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support
  });
  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = deletedIds[Symbol.iterator];
  }
  jQuery.each(
    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(i2, name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
    }
  );
  function isArrayLike(obj) {
    var length = !!obj && "length" in obj && obj.length, type = jQuery.type(obj);
    if (type === "function" || jQuery.isWindow(obj)) {
      return false;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }
  var Sizzle = (
    /*!
     * Sizzle CSS Selector Engine v2.2.1
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2015-10-17
     */
    function(window3) {
      var i2, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document2, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * /* @__PURE__ */ new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
        if (a === b) {
          hasDuplicate = true;
        }
        return 0;
      }, MAX_NEGATIVE = 1 << 31, hasOwn2 = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push2 = arr.push, slice2 = arr.slice, indexOf2 = function(list, elem) {
        var i3 = 0, len = list.length;
        for (; i3 < len; i3++) {
          if (list[i3] === elem) {
            return i3;
          }
        }
        return -1;
      }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
      "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
      `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim2 = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + `*([^\\]'"]*?)` + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
        "ID": new RegExp("^#(" + identifier + ")"),
        "CLASS": new RegExp("^\\.(" + identifier + ")"),
        "TAG": new RegExp("^(" + identifier + "|[*])"),
        "ATTR": new RegExp("^" + attributes),
        "PSEUDO": new RegExp("^" + pseudos),
        "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
        "bool": new RegExp("^(?:" + booleans + ")$", "i"),
        // For use in libraries implementing .is()
        // We use this for POS matching in `select`
        "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
      }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
        var high = "0x" + escaped - 65536;
        return high !== high || escapedWhitespace ? escaped : high < 0 ? (
          // BMP codepoint
          String.fromCharCode(high + 65536)
        ) : (
          // Supplemental Plane codepoint (surrogate pair)
          String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
        );
      }, unloadHandler = function() {
        setDocument();
      };
      try {
        push2.apply(
          arr = slice2.call(preferredDoc.childNodes),
          preferredDoc.childNodes
        );
        arr[preferredDoc.childNodes.length].nodeType;
      } catch (e) {
        push2 = {
          apply: arr.length ? (
            // Leverage slice if possible
            function(target, els) {
              push_native.apply(target, slice2.call(els));
            }
          ) : (
            // Support: IE<9
            // Otherwise append directly
            function(target, els) {
              var j = target.length, i3 = 0;
              while (target[j++] = els[i3++]) {
              }
              target.length = j - 1;
            }
          )
        };
      }
      function Sizzle2(selector, context, results, seed) {
        var m, i3, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
        results = results || [];
        if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
          return results;
        }
        if (!seed) {
          if ((context ? context.ownerDocument || context : preferredDoc) !== document2) {
            setDocument(context);
          }
          context = context || document2;
          if (documentIsHTML) {
            if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
              if (m = match[1]) {
                if (nodeType === 9) {
                  if (elem = context.getElementById(m)) {
                    if (elem.id === m) {
                      results.push(elem);
                      return results;
                    }
                  } else {
                    return results;
                  }
                } else {
                  if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                }
              } else if (match[2]) {
                push2.apply(results, context.getElementsByTagName(selector));
                return results;
              } else if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                push2.apply(results, context.getElementsByClassName(m));
                return results;
              }
            }
            if (support2.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
              if (nodeType !== 1) {
                newContext = context;
                newSelector = selector;
              } else if (context.nodeName.toLowerCase() !== "object") {
                if (nid = context.getAttribute("id")) {
                  nid = nid.replace(rescape, "\\$&");
                } else {
                  context.setAttribute("id", nid = expando);
                }
                groups = tokenize(selector);
                i3 = groups.length;
                nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
                while (i3--) {
                  groups[i3] = nidselect + " " + toSelector(groups[i3]);
                }
                newSelector = groups.join(",");
                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
              }
              if (newSelector) {
                try {
                  push2.apply(
                    results,
                    newContext.querySelectorAll(newSelector)
                  );
                  return results;
                } catch (qsaError) {
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
        }
        return select(selector.replace(rtrim2, "$1"), context, results, seed);
      }
      function createCache() {
        var keys = [];
        function cache(key, value) {
          if (keys.push(key + " ") > Expr.cacheLength) {
            delete cache[keys.shift()];
          }
          return cache[key + " "] = value;
        }
        return cache;
      }
      function markFunction(fn) {
        fn[expando] = true;
        return fn;
      }
      function assert(fn) {
        var div = document2.createElement("div");
        try {
          return !!fn(div);
        } catch (e) {
          return false;
        } finally {
          if (div.parentNode) {
            div.parentNode.removeChild(div);
          }
          div = null;
        }
      }
      function addHandle(attrs, handler) {
        var arr2 = attrs.split("|"), i3 = arr2.length;
        while (i3--) {
          Expr.attrHandle[arr2[i3]] = handler;
        }
      }
      function siblingCheck(a, b) {
        var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
        if (diff) {
          return diff;
        }
        if (cur) {
          while (cur = cur.nextSibling) {
            if (cur === b) {
              return -1;
            }
          }
        }
        return a ? 1 : -1;
      }
      function createInputPseudo(type) {
        return function(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === type;
        };
      }
      function createButtonPseudo(type) {
        return function(elem) {
          var name = elem.nodeName.toLowerCase();
          return (name === "input" || name === "button") && elem.type === type;
        };
      }
      function createPositionalPseudo(fn) {
        return markFunction(function(argument) {
          argument = +argument;
          return markFunction(function(seed, matches2) {
            var j, matchIndexes = fn([], seed.length, argument), i3 = matchIndexes.length;
            while (i3--) {
              if (seed[j = matchIndexes[i3]]) {
                seed[j] = !(matches2[j] = seed[j]);
              }
            }
          });
        });
      }
      function testContext(context) {
        return context && typeof context.getElementsByTagName !== "undefined" && context;
      }
      support2 = Sizzle2.support = {};
      isXML = Sizzle2.isXML = function(elem) {
        var documentElement2 = elem && (elem.ownerDocument || elem).documentElement;
        return documentElement2 ? documentElement2.nodeName !== "HTML" : false;
      };
      setDocument = Sizzle2.setDocument = function(node) {
        var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
        if (doc === document2 || doc.nodeType !== 9 || !doc.documentElement) {
          return document2;
        }
        document2 = doc;
        docElem = document2.documentElement;
        documentIsHTML = !isXML(document2);
        if ((parent = document2.defaultView) && parent.top !== parent) {
          if (parent.addEventListener) {
            parent.addEventListener("unload", unloadHandler, false);
          } else if (parent.attachEvent) {
            parent.attachEvent("onunload", unloadHandler);
          }
        }
        support2.attributes = assert(function(div) {
          div.className = "i";
          return !div.getAttribute("className");
        });
        support2.getElementsByTagName = assert(function(div) {
          div.appendChild(document2.createComment(""));
          return !div.getElementsByTagName("*").length;
        });
        support2.getElementsByClassName = rnative.test(document2.getElementsByClassName);
        support2.getById = assert(function(div) {
          docElem.appendChild(div).id = expando;
          return !document2.getElementsByName || !document2.getElementsByName(expando).length;
        });
        if (support2.getById) {
          Expr.find["ID"] = function(id, context) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
              var m = context.getElementById(id);
              return m ? [m] : [];
            }
          };
          Expr.filter["ID"] = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
              return elem.getAttribute("id") === attrId;
            };
          };
        } else {
          delete Expr.find["ID"];
          Expr.filter["ID"] = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
              var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
              return node2 && node2.value === attrId;
            };
          };
        }
        Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
          if (typeof context.getElementsByTagName !== "undefined") {
            return context.getElementsByTagName(tag);
          } else if (support2.qsa) {
            return context.querySelectorAll(tag);
          }
        } : function(tag, context) {
          var elem, tmp = [], i3 = 0, results = context.getElementsByTagName(tag);
          if (tag === "*") {
            while (elem = results[i3++]) {
              if (elem.nodeType === 1) {
                tmp.push(elem);
              }
            }
            return tmp;
          }
          return results;
        };
        Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
          if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
            return context.getElementsByClassName(className);
          }
        };
        rbuggyMatches = [];
        rbuggyQSA = [];
        if (support2.qsa = rnative.test(document2.querySelectorAll)) {
          assert(function(div) {
            docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
            if (div.querySelectorAll("[msallowcapture^='']").length) {
              rbuggyQSA.push("[*^$]=" + whitespace + `*(?:''|"")`);
            }
            if (!div.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }
            if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            if (!div.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            if (!div.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
          });
          assert(function(div) {
            var input = document2.createElement("input");
            input.setAttribute("type", "hidden");
            div.appendChild(input).setAttribute("name", "D");
            if (div.querySelectorAll("[name=d]").length) {
              rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
            }
            if (!div.querySelectorAll(":enabled").length) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            div.querySelectorAll("*,:x");
            rbuggyQSA.push(",.*:");
          });
        }
        if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
          assert(function(div) {
            support2.disconnectedMatch = matches.call(div, "div");
            matches.call(div, "[s!='']:x");
            rbuggyMatches.push("!=", pseudos);
          });
        }
        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
        hasCompare = rnative.test(docElem.compareDocumentPosition);
        contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
          var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
          return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        } : function(a, b) {
          if (b) {
            while (b = b.parentNode) {
              if (b === a) {
                return true;
              }
            }
          }
          return false;
        };
        sortOrder = hasCompare ? function(a, b) {
          if (a === b) {
            hasDuplicate = true;
            return 0;
          }
          var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
          if (compare) {
            return compare;
          }
          compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
            // Otherwise we know they are disconnected
            1
          );
          if (compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare) {
            if (a === document2 || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
              return -1;
            }
            if (b === document2 || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
              return 1;
            }
            return sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
          }
          return compare & 4 ? -1 : 1;
        } : function(a, b) {
          if (a === b) {
            hasDuplicate = true;
            return 0;
          }
          var cur, i3 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
          if (!aup || !bup) {
            return a === document2 ? -1 : b === document2 ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
          } else if (aup === bup) {
            return siblingCheck(a, b);
          }
          cur = a;
          while (cur = cur.parentNode) {
            ap.unshift(cur);
          }
          cur = b;
          while (cur = cur.parentNode) {
            bp.unshift(cur);
          }
          while (ap[i3] === bp[i3]) {
            i3++;
          }
          return i3 ? (
            // Do a sibling check if the nodes have a common ancestor
            siblingCheck(ap[i3], bp[i3])
          ) : (
            // Otherwise nodes in our document sort first
            ap[i3] === preferredDoc ? -1 : bp[i3] === preferredDoc ? 1 : 0
          );
        };
        return document2;
      };
      Sizzle2.matches = function(expr, elements) {
        return Sizzle2(expr, null, null, elements);
      };
      Sizzle2.matchesSelector = function(elem, expr) {
        if ((elem.ownerDocument || elem) !== document2) {
          setDocument(elem);
        }
        expr = expr.replace(rattributeQuotes, "='$1']");
        if (support2.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
          try {
            var ret = matches.call(elem, expr);
            if (ret || support2.disconnectedMatch || // As well, disconnected nodes are said to be in a document
            // fragment in IE 9
            elem.document && elem.document.nodeType !== 11) {
              return ret;
            }
          } catch (e) {
          }
        }
        return Sizzle2(expr, document2, null, [elem]).length > 0;
      };
      Sizzle2.contains = function(context, elem) {
        if ((context.ownerDocument || context) !== document2) {
          setDocument(context);
        }
        return contains(context, elem);
      };
      Sizzle2.attr = function(elem, name) {
        if ((elem.ownerDocument || elem) !== document2) {
          setDocument(elem);
        }
        var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
        return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
      };
      Sizzle2.error = function(msg) {
        throw new Error("Syntax error, unrecognized expression: " + msg);
      };
      Sizzle2.uniqueSort = function(results) {
        var elem, duplicates = [], j = 0, i3 = 0;
        hasDuplicate = !support2.detectDuplicates;
        sortInput = !support2.sortStable && results.slice(0);
        results.sort(sortOrder);
        if (hasDuplicate) {
          while (elem = results[i3++]) {
            if (elem === results[i3]) {
              j = duplicates.push(i3);
            }
          }
          while (j--) {
            results.splice(duplicates[j], 1);
          }
        }
        sortInput = null;
        return results;
      };
      getText = Sizzle2.getText = function(elem) {
        var node, ret = "", i3 = 0, nodeType = elem.nodeType;
        if (!nodeType) {
          while (node = elem[i3++]) {
            ret += getText(node);
          }
        } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
          if (typeof elem.textContent === "string") {
            return elem.textContent;
          } else {
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              ret += getText(elem);
            }
          }
        } else if (nodeType === 3 || nodeType === 4) {
          return elem.nodeValue;
        }
        return ret;
      };
      Expr = Sizzle2.selectors = {
        // Can be adjusted by the user
        cacheLength: 50,
        createPseudo: markFunction,
        match: matchExpr,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: true },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: true },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          "ATTR": function(match) {
            match[1] = match[1].replace(runescape, funescape);
            match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
            if (match[2] === "~=") {
              match[3] = " " + match[3] + " ";
            }
            return match.slice(0, 4);
          },
          "CHILD": function(match) {
            match[1] = match[1].toLowerCase();
            if (match[1].slice(0, 3) === "nth") {
              if (!match[3]) {
                Sizzle2.error(match[0]);
              }
              match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
              match[5] = +(match[7] + match[8] || match[3] === "odd");
            } else if (match[3]) {
              Sizzle2.error(match[0]);
            }
            return match;
          },
          "PSEUDO": function(match) {
            var excess, unquoted = !match[6] && match[2];
            if (matchExpr["CHILD"].test(match[0])) {
              return null;
            }
            if (match[3]) {
              match[2] = match[4] || match[5] || "";
            } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
            (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
            (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
              match[0] = match[0].slice(0, excess);
              match[2] = unquoted.slice(0, excess);
            }
            return match.slice(0, 3);
          }
        },
        filter: {
          "TAG": function(nodeNameSelector) {
            var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
            return nodeNameSelector === "*" ? function() {
              return true;
            } : function(elem) {
              return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
            };
          },
          "CLASS": function(className) {
            var pattern = classCache[className + " "];
            return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
              return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
            });
          },
          "ATTR": function(name, operator, check) {
            return function(elem) {
              var result = Sizzle2.attr(elem, name);
              if (result == null) {
                return operator === "!=";
              }
              if (!operator) {
                return true;
              }
              result += "";
              return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
            };
          },
          "CHILD": function(type, what, argument, first, last) {
            var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
            return first === 1 && last === 0 ? (
              // Shortcut for :nth-*(n)
              function(elem) {
                return !!elem.parentNode;
              }
            ) : function(elem, context, xml) {
              var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
              if (parent) {
                if (simple) {
                  while (dir2) {
                    node = elem;
                    while (node = node[dir2]) {
                      if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                        return false;
                      }
                    }
                    start = dir2 = type === "only" && !start && "nextSibling";
                  }
                  return true;
                }
                start = [forward ? parent.firstChild : parent.lastChild];
                if (forward && useCache) {
                  node = parent;
                  outerCache = node[expando] || (node[expando] = {});
                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex && cache[2];
                  node = nodeIndex && parent.childNodes[nodeIndex];
                  while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                  (diff = nodeIndex = 0) || start.pop()) {
                    if (node.nodeType === 1 && ++diff && node === elem) {
                      uniqueCache[type] = [dirruns, nodeIndex, diff];
                      break;
                    }
                  }
                } else {
                  if (useCache) {
                    node = elem;
                    outerCache = node[expando] || (node[expando] = {});
                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                    cache = uniqueCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex;
                  }
                  if (diff === false) {
                    while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                      if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                        if (useCache) {
                          outerCache = node[expando] || (node[expando] = {});
                          uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                          uniqueCache[type] = [dirruns, diff];
                        }
                        if (node === elem) {
                          break;
                        }
                      }
                    }
                  }
                }
                diff -= last;
                return diff === first || diff % first === 0 && diff / first >= 0;
              }
            };
          },
          "PSEUDO": function(pseudo, argument) {
            var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
            if (fn[expando]) {
              return fn(argument);
            }
            if (fn.length > 1) {
              args = [pseudo, pseudo, "", argument];
              return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                var idx, matched = fn(seed, argument), i3 = matched.length;
                while (i3--) {
                  idx = indexOf2(seed, matched[i3]);
                  seed[idx] = !(matches2[idx] = matched[i3]);
                }
              }) : function(elem) {
                return fn(elem, 0, args);
              };
            }
            return fn;
          }
        },
        pseudos: {
          // Potentially complex pseudos
          "not": markFunction(function(selector) {
            var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
            return matcher[expando] ? markFunction(function(seed, matches2, context, xml) {
              var elem, unmatched = matcher(seed, null, xml, []), i3 = seed.length;
              while (i3--) {
                if (elem = unmatched[i3]) {
                  seed[i3] = !(matches2[i3] = elem);
                }
              }
            }) : function(elem, context, xml) {
              input[0] = elem;
              matcher(input, null, xml, results);
              input[0] = null;
              return !results.pop();
            };
          }),
          "has": markFunction(function(selector) {
            return function(elem) {
              return Sizzle2(selector, elem).length > 0;
            };
          }),
          "contains": markFunction(function(text) {
            text = text.replace(runescape, funescape);
            return function(elem) {
              return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
            };
          }),
          // "Whether an element is represented by a :lang() selector
          // is based solely on the element's language value
          // being equal to the identifier C,
          // or beginning with the identifier C immediately followed by "-".
          // The matching of C against the element's language value is performed case-insensitively.
          // The identifier C does not have to be a valid language name."
          // http://www.w3.org/TR/selectors/#lang-pseudo
          "lang": markFunction(function(lang) {
            if (!ridentifier.test(lang || "")) {
              Sizzle2.error("unsupported lang: " + lang);
            }
            lang = lang.replace(runescape, funescape).toLowerCase();
            return function(elem) {
              var elemLang;
              do {
                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                  elemLang = elemLang.toLowerCase();
                  return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                }
              } while ((elem = elem.parentNode) && elem.nodeType === 1);
              return false;
            };
          }),
          // Miscellaneous
          "target": function(elem) {
            var hash = window3.location && window3.location.hash;
            return hash && hash.slice(1) === elem.id;
          },
          "root": function(elem) {
            return elem === docElem;
          },
          "focus": function(elem) {
            return elem === document2.activeElement && (!document2.hasFocus || document2.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
          },
          // Boolean properties
          "enabled": function(elem) {
            return elem.disabled === false;
          },
          "disabled": function(elem) {
            return elem.disabled === true;
          },
          "checked": function(elem) {
            var nodeName = elem.nodeName.toLowerCase();
            return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
          },
          "selected": function(elem) {
            if (elem.parentNode) {
              elem.parentNode.selectedIndex;
            }
            return elem.selected === true;
          },
          // Contents
          "empty": function(elem) {
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              if (elem.nodeType < 6) {
                return false;
              }
            }
            return true;
          },
          "parent": function(elem) {
            return !Expr.pseudos["empty"](elem);
          },
          // Element/input types
          "header": function(elem) {
            return rheader.test(elem.nodeName);
          },
          "input": function(elem) {
            return rinputs.test(elem.nodeName);
          },
          "button": function(elem) {
            var name = elem.nodeName.toLowerCase();
            return name === "input" && elem.type === "button" || name === "button";
          },
          "text": function(elem) {
            var attr;
            return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && // Support: IE<8
            // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
            ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
          },
          // Position-in-collection
          "first": createPositionalPseudo(function() {
            return [0];
          }),
          "last": createPositionalPseudo(function(matchIndexes, length) {
            return [length - 1];
          }),
          "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
            return [argument < 0 ? argument + length : argument];
          }),
          "even": createPositionalPseudo(function(matchIndexes, length) {
            var i3 = 0;
            for (; i3 < length; i3 += 2) {
              matchIndexes.push(i3);
            }
            return matchIndexes;
          }),
          "odd": createPositionalPseudo(function(matchIndexes, length) {
            var i3 = 1;
            for (; i3 < length; i3 += 2) {
              matchIndexes.push(i3);
            }
            return matchIndexes;
          }),
          "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
            var i3 = argument < 0 ? argument + length : argument;
            for (; --i3 >= 0; ) {
              matchIndexes.push(i3);
            }
            return matchIndexes;
          }),
          "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
            var i3 = argument < 0 ? argument + length : argument;
            for (; ++i3 < length; ) {
              matchIndexes.push(i3);
            }
            return matchIndexes;
          })
        }
      };
      Expr.pseudos["nth"] = Expr.pseudos["eq"];
      for (i2 in { radio: true, checkbox: true, file: true, password: true, image: true }) {
        Expr.pseudos[i2] = createInputPseudo(i2);
      }
      for (i2 in { submit: true, reset: true }) {
        Expr.pseudos[i2] = createButtonPseudo(i2);
      }
      function setFilters() {
      }
      setFilters.prototype = Expr.filters = Expr.pseudos;
      Expr.setFilters = new setFilters();
      tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
        var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
        if (cached) {
          return parseOnly ? 0 : cached.slice(0);
        }
        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;
        while (soFar) {
          if (!matched || (match = rcomma.exec(soFar))) {
            if (match) {
              soFar = soFar.slice(match[0].length) || soFar;
            }
            groups.push(tokens = []);
          }
          matched = false;
          if (match = rcombinators.exec(soFar)) {
            matched = match.shift();
            tokens.push({
              value: matched,
              // Cast descendant combinators to space
              type: match[0].replace(rtrim2, " ")
            });
            soFar = soFar.slice(matched.length);
          }
          for (type in Expr.filter) {
            if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
              matched = match.shift();
              tokens.push({
                value: matched,
                type,
                matches: match
              });
              soFar = soFar.slice(matched.length);
            }
          }
          if (!matched) {
            break;
          }
        }
        return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : (
          // Cache the tokens
          tokenCache(selector, groups).slice(0)
        );
      };
      function toSelector(tokens) {
        var i3 = 0, len = tokens.length, selector = "";
        for (; i3 < len; i3++) {
          selector += tokens[i3].value;
        }
        return selector;
      }
      function addCombinator(matcher, combinator, base) {
        var dir2 = combinator.dir, checkNonElements = base && dir2 === "parentNode", doneName = done++;
        return combinator.first ? (
          // Check against closest ancestor/preceding element
          function(elem, context, xml) {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                return matcher(elem, context, xml);
              }
            }
          }
        ) : (
          // Check against all ancestor/preceding elements
          function(elem, context, xml) {
            var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
            if (xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  if (matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            } else {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  outerCache = elem[expando] || (elem[expando] = {});
                  uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                  if ((oldCache = uniqueCache[dir2]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                    return newCache[2] = oldCache[2];
                  } else {
                    uniqueCache[dir2] = newCache;
                    if (newCache[2] = matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              }
            }
          }
        );
      }
      function elementMatcher(matchers) {
        return matchers.length > 1 ? function(elem, context, xml) {
          var i3 = matchers.length;
          while (i3--) {
            if (!matchers[i3](elem, context, xml)) {
              return false;
            }
          }
          return true;
        } : matchers[0];
      }
      function multipleContexts(selector, contexts, results) {
        var i3 = 0, len = contexts.length;
        for (; i3 < len; i3++) {
          Sizzle2(selector, contexts[i3], results);
        }
        return results;
      }
      function condense(unmatched, map, filter, context, xml) {
        var elem, newUnmatched = [], i3 = 0, len = unmatched.length, mapped = map != null;
        for (; i3 < len; i3++) {
          if (elem = unmatched[i3]) {
            if (!filter || filter(elem, context, xml)) {
              newUnmatched.push(elem);
              if (mapped) {
                map.push(i3);
              }
            }
          }
        }
        return newUnmatched;
      }
      function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
        if (postFilter && !postFilter[expando]) {
          postFilter = setMatcher(postFilter);
        }
        if (postFinder && !postFinder[expando]) {
          postFinder = setMatcher(postFinder, postSelector);
        }
        return markFunction(function(seed, results, context, xml) {
          var temp, i3, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? (
            // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
            postFinder || (seed ? preFilter : preexisting || postFilter) ? (
              // ...intermediate processing is necessary
              []
            ) : (
              // ...otherwise use results directly
              results
            )
          ) : matcherIn;
          if (matcher) {
            matcher(matcherIn, matcherOut, context, xml);
          }
          if (postFilter) {
            temp = condense(matcherOut, postMap);
            postFilter(temp, [], context, xml);
            i3 = temp.length;
            while (i3--) {
              if (elem = temp[i3]) {
                matcherOut[postMap[i3]] = !(matcherIn[postMap[i3]] = elem);
              }
            }
          }
          if (seed) {
            if (postFinder || preFilter) {
              if (postFinder) {
                temp = [];
                i3 = matcherOut.length;
                while (i3--) {
                  if (elem = matcherOut[i3]) {
                    temp.push(matcherIn[i3] = elem);
                  }
                }
                postFinder(null, matcherOut = [], temp, xml);
              }
              i3 = matcherOut.length;
              while (i3--) {
                if ((elem = matcherOut[i3]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i3]) > -1) {
                  seed[temp] = !(results[temp] = elem);
                }
              }
            }
          } else {
            matcherOut = condense(
              matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
            );
            if (postFinder) {
              postFinder(null, results, matcherOut, xml);
            } else {
              push2.apply(results, matcherOut);
            }
          }
        });
      }
      function matcherFromTokens(tokens) {
        var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i3 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
          return elem === checkContext;
        }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
          return indexOf2(checkContext, elem) > -1;
        }, implicitRelative, true), matchers = [function(elem, context, xml) {
          var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
          checkContext = null;
          return ret;
        }];
        for (; i3 < len; i3++) {
          if (matcher = Expr.relative[tokens[i3].type]) {
            matchers = [addCombinator(elementMatcher(matchers), matcher)];
          } else {
            matcher = Expr.filter[tokens[i3].type].apply(null, tokens[i3].matches);
            if (matcher[expando]) {
              j = ++i3;
              for (; j < len; j++) {
                if (Expr.relative[tokens[j].type]) {
                  break;
                }
              }
              return setMatcher(
                i3 > 1 && elementMatcher(matchers),
                i3 > 1 && toSelector(
                  // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                  tokens.slice(0, i3 - 1).concat({ value: tokens[i3 - 2].type === " " ? "*" : "" })
                ).replace(rtrim2, "$1"),
                matcher,
                i3 < j && matcherFromTokens(tokens.slice(i3, j)),
                j < len && matcherFromTokens(tokens = tokens.slice(j)),
                j < len && toSelector(tokens)
              );
            }
            matchers.push(matcher);
          }
        }
        return elementMatcher(matchers);
      }
      function matcherFromGroupMatchers(elementMatchers, setMatchers) {
        var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
          var elem, j, matcher, matchedCount = 0, i3 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
          if (outermost) {
            outermostContext = context === document2 || context || outermost;
          }
          for (; i3 !== len && (elem = elems[i3]) != null; i3++) {
            if (byElement && elem) {
              j = 0;
              if (!context && elem.ownerDocument !== document2) {
                setDocument(elem);
                xml = !documentIsHTML;
              }
              while (matcher = elementMatchers[j++]) {
                if (matcher(elem, context || document2, xml)) {
                  results.push(elem);
                  break;
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
              }
            }
            if (bySet) {
              if (elem = !matcher && elem) {
                matchedCount--;
              }
              if (seed) {
                unmatched.push(elem);
              }
            }
          }
          matchedCount += i3;
          if (bySet && i3 !== matchedCount) {
            j = 0;
            while (matcher = setMatchers[j++]) {
              matcher(unmatched, setMatched, context, xml);
            }
            if (seed) {
              if (matchedCount > 0) {
                while (i3--) {
                  if (!(unmatched[i3] || setMatched[i3])) {
                    setMatched[i3] = pop.call(results);
                  }
                }
              }
              setMatched = condense(setMatched);
            }
            push2.apply(results, setMatched);
            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
              Sizzle2.uniqueSort(results);
            }
          }
          if (outermost) {
            dirruns = dirrunsUnique;
            outermostContext = contextBackup;
          }
          return unmatched;
        };
        return bySet ? markFunction(superMatcher) : superMatcher;
      }
      compile = Sizzle2.compile = function(selector, match) {
        var i3, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
        if (!cached) {
          if (!match) {
            match = tokenize(selector);
          }
          i3 = match.length;
          while (i3--) {
            cached = matcherFromTokens(match[i3]);
            if (cached[expando]) {
              setMatchers.push(cached);
            } else {
              elementMatchers.push(cached);
            }
          }
          cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
          cached.selector = selector;
        }
        return cached;
      };
      select = Sizzle2.select = function(selector, context, results, seed) {
        var i3, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
        results = results || [];
        if (match.length === 1) {
          tokens = match[0] = match[0].slice(0);
          if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support2.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
            context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
            if (!context) {
              return results;
            } else if (compiled) {
              context = context.parentNode;
            }
            selector = selector.slice(tokens.shift().value.length);
          }
          i3 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
          while (i3--) {
            token = tokens[i3];
            if (Expr.relative[type = token.type]) {
              break;
            }
            if (find = Expr.find[type]) {
              if (seed = find(
                token.matches[0].replace(runescape, funescape),
                rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
              )) {
                tokens.splice(i3, 1);
                selector = seed.length && toSelector(tokens);
                if (!selector) {
                  push2.apply(results, seed);
                  return results;
                }
                break;
              }
            }
          }
        }
        (compiled || compile(selector, match))(
          seed,
          context,
          !documentIsHTML,
          results,
          !context || rsibling.test(selector) && testContext(context.parentNode) || context
        );
        return results;
      };
      support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
      support2.detectDuplicates = !!hasDuplicate;
      setDocument();
      support2.sortDetached = assert(function(div1) {
        return div1.compareDocumentPosition(document2.createElement("div")) & 1;
      });
      if (!assert(function(div) {
        div.innerHTML = "<a href='#'></a>";
        return div.firstChild.getAttribute("href") === "#";
      })) {
        addHandle("type|href|height|width", function(elem, name, isXML2) {
          if (!isXML2) {
            return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
          }
        });
      }
      if (!support2.attributes || !assert(function(div) {
        div.innerHTML = "<input/>";
        div.firstChild.setAttribute("value", "");
        return div.firstChild.getAttribute("value") === "";
      })) {
        addHandle("value", function(elem, name, isXML2) {
          if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
            return elem.defaultValue;
          }
        });
      }
      if (!assert(function(div) {
        return div.getAttribute("disabled") == null;
      })) {
        addHandle(booleans, function(elem, name, isXML2) {
          var val;
          if (!isXML2) {
            return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          }
        });
      }
      return Sizzle2;
    }(window2)
  );
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  var dir = function(elem, dir2, until) {
    var matched = [], truncate = until !== void 0;
    while ((elem = elem[dir2]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }
        matched.push(elem);
      }
    }
    return matched;
  };
  var siblings = function(n, elem) {
    var matched = [];
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }
    return matched;
  };
  var rneedsContext = jQuery.expr.match.needsContext;
  var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
  var risSimple = /^.[^:#\[\.,]*$/;
  function winnow(elements, qualifier, not) {
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function(elem, i2) {
        return !!qualifier.call(elem, i2, elem) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function(elem) {
        return elem === qualifier !== not;
      });
    }
    if (typeof qualifier === "string") {
      if (risSimple.test(qualifier)) {
        return jQuery.filter(qualifier, elements, not);
      }
      qualifier = jQuery.filter(qualifier, elements);
    }
    return jQuery.grep(elements, function(elem) {
      return jQuery.inArray(elem, qualifier) > -1 !== not;
    });
  }
  jQuery.filter = function(expr, elems, not) {
    var elem = elems[0];
    if (not) {
      expr = ":not(" + expr + ")";
    }
    return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
      return elem2.nodeType === 1;
    }));
  };
  jQuery.fn.extend({
    find: function(selector) {
      var i2, ret = [], self = this, len = self.length;
      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function() {
          for (i2 = 0; i2 < len; i2++) {
            if (jQuery.contains(self[i2], this)) {
              return true;
            }
          }
        }));
      }
      for (i2 = 0; i2 < len; i2++) {
        jQuery.find(selector, self[i2], ret);
      }
      ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
      ret.selector = this.selector ? this.selector + " " + selector : selector;
      return ret;
    },
    filter: function(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function(selector) {
      return !!winnow(
        this,
        // If this is a positional/relative selector, check membership in the returned set
        // so $("p:first").is("p:last") won't return true for a doc with two "p".
        typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
        false
      ).length;
    }
  });
  var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function(selector, context, root) {
    var match, elem;
    if (!selector) {
      return this;
    }
    root = root || rootjQuery;
    if (typeof selector === "string") {
      if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      }
      if (match && (match[1] || !context)) {
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context;
          jQuery.merge(this, jQuery.parseHTML(
            match[1],
            context && context.nodeType ? context.ownerDocument || context : document,
            true
          ));
          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              if (jQuery.isFunction(this[match])) {
                this[match](context[match]);
              } else {
                this.attr(match, context[match]);
              }
            }
          }
          return this;
        } else {
          elem = document.getElementById(match[2]);
          if (elem && elem.parentNode) {
            if (elem.id !== match[2]) {
              return rootjQuery.find(selector);
            }
            this.length = 1;
            this[0] = elem;
          }
          this.context = document;
          this.selector = selector;
          return this;
        }
      } else if (!context || context.jquery) {
        return (context || root).find(selector);
      } else {
        return this.constructor(context).find(selector);
      }
    } else if (selector.nodeType) {
      this.context = this[0] = selector;
      this.length = 1;
      return this;
    } else if (jQuery.isFunction(selector)) {
      return typeof root.ready !== "undefined" ? root.ready(selector) : (
        // Execute immediately if ready is not present
        selector(jQuery)
      );
    }
    if (selector.selector !== void 0) {
      this.selector = selector.selector;
      this.context = selector.context;
    }
    return jQuery.makeArray(selector, this);
  };
  init.prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function(target) {
      var i2, targets = jQuery(target, this), len = targets.length;
      return this.filter(function() {
        for (i2 = 0; i2 < len; i2++) {
          if (jQuery.contains(this, targets[i2])) {
            return true;
          }
        }
      });
    },
    closest: function(selectors, context) {
      var cur, i2 = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
      for (; i2 < l; i2++) {
        for (cur = this[i2]; cur && cur !== context; cur = cur.parentNode) {
          if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : (
            // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors)
          ))) {
            matched.push(cur);
            break;
          }
        }
      }
      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within
    // the matched set of elements
    index: function(elem) {
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }
      if (typeof elem === "string") {
        return jQuery.inArray(this[0], jQuery(elem));
      }
      return jQuery.inArray(
        // If it receives a jQuery object, the first element is used
        elem.jquery ? elem[0] : elem,
        this
      );
    },
    add: function(selector, context) {
      return this.pushStack(
        jQuery.uniqueSort(
          jQuery.merge(this.get(), jQuery(selector, context))
        )
      );
    },
    addBack: function(selector) {
      return this.add(
        selector == null ? this.prevObject : this.prevObject.filter(selector)
      );
    }
  });
  function sibling(cur, dir2) {
    do {
      cur = cur[dir2];
    } while (cur && cur.nodeType !== 1);
    return cur;
  }
  jQuery.each({
    parent: function(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function(elem, i2, until) {
      return dir(elem, "parentNode", until);
    },
    next: function(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function(elem, i2, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function(elem, i2, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function(elem) {
      return siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function(elem) {
      return siblings(elem.firstChild);
    },
    contents: function(elem) {
      return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
    }
  }, function(name, fn) {
    jQuery.fn[name] = function(until, selector) {
      var ret = jQuery.map(this, fn, until);
      if (name.slice(-5) !== "Until") {
        selector = until;
      }
      if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
      }
      if (this.length > 1) {
        if (!guaranteedUnique[name]) {
          ret = jQuery.uniqueSort(ret);
        }
        if (rparentsprev.test(name)) {
          ret = ret.reverse();
        }
      }
      return this.pushStack(ret);
    };
  });
  var rnotwhite = /\S+/g;
  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
      object[flag] = true;
    });
    return object;
  }
  jQuery.Callbacks = function(options) {
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
    var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
      locked = options.once;
      fired = firing = true;
      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();
        while (++firingIndex < list.length) {
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            firingIndex = list.length;
            memory = false;
          }
        }
      }
      if (!options.memory) {
        memory = false;
      }
      firing = false;
      if (locked) {
        if (memory) {
          list = [];
        } else {
          list = "";
        }
      }
    }, self = {
      // Add a callback or a collection of callbacks to the list
      add: function() {
        if (list) {
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }
          (function add(args) {
            jQuery.each(args, function(_, arg) {
              if (jQuery.isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && jQuery.type(arg) !== "string") {
                add(arg);
              }
            });
          })(arguments);
          if (memory && !firing) {
            fire();
          }
        }
        return this;
      },
      // Remove a callback from the list
      remove: function() {
        jQuery.each(arguments, function(_, arg) {
          var index;
          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1);
            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function() {
        if (list) {
          list = [];
        }
        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function() {
        locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function() {
        locked = true;
        if (!memory) {
          self.disable();
        }
        return this;
      },
      locked: function() {
        return !!locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function(context, args) {
        if (!locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);
          if (!firing) {
            fire();
          }
        }
        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function() {
        return !!fired;
      }
    };
    return self;
  };
  jQuery.extend({
    Deferred: function(func) {
      var tuples = [
        // action, add listener, listener list, final state
        ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
        ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
        ["notify", "progress", jQuery.Callbacks("memory")]
      ], state = "pending", promise = {
        state: function() {
          return state;
        },
        always: function() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        then: function() {
          var fns = arguments;
          return jQuery.Deferred(function(newDefer) {
            jQuery.each(tuples, function(i2, tuple) {
              var fn = jQuery.isFunction(fns[i2]) && fns[i2];
              deferred[tuple[1]](function() {
                var returned = fn && fn.apply(this, arguments);
                if (returned && jQuery.isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](
                    this === promise ? newDefer.promise() : this,
                    fn ? [returned] : arguments
                  );
                }
              });
            });
            fns = null;
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function(obj) {
          return obj != null ? jQuery.extend(obj, promise) : promise;
        }
      }, deferred = {};
      promise.pipe = promise.then;
      jQuery.each(tuples, function(i2, tuple) {
        var list = tuple[2], stateString = tuple[3];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, tuples[i2 ^ 1][2].disable, tuples[2][2].lock);
        }
        deferred[tuple[0]] = function() {
          deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    // Deferred helper
    when: function(subordinate) {
      var i2 = 0, resolveValues = slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function(i3, contexts, values) {
        return function(value) {
          contexts[i3] = this;
          values[i3] = arguments.length > 1 ? slice.call(arguments) : value;
          if (values === progressValues) {
            deferred.notifyWith(contexts, values);
          } else if (!--remaining) {
            deferred.resolveWith(contexts, values);
          }
        };
      }, progressValues, progressContexts, resolveContexts;
      if (length > 1) {
        progressValues = new Array(length);
        progressContexts = new Array(length);
        resolveContexts = new Array(length);
        for (; i2 < length; i2++) {
          if (resolveValues[i2] && jQuery.isFunction(resolveValues[i2].promise)) {
            resolveValues[i2].promise().progress(updateFunc(i2, progressContexts, progressValues)).done(updateFunc(i2, resolveContexts, resolveValues)).fail(deferred.reject);
          } else {
            --remaining;
          }
        }
      }
      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }
      return deferred.promise();
    }
  });
  var readyList;
  jQuery.fn.ready = function(fn) {
    jQuery.ready.promise().done(fn);
    return this;
  };
  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Hold (or release) the ready event
    holdReady: function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    // Handle when the DOM is ready
    ready: function(wait) {
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      jQuery.isReady = true;
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document, [jQuery]);
      if (jQuery.fn.triggerHandler) {
        jQuery(document).triggerHandler("ready");
        jQuery(document).off("ready");
      }
    }
  });
  function detach() {
    if (document.addEventListener) {
      document.removeEventListener("DOMContentLoaded", completed);
      window2.removeEventListener("load", completed);
    } else {
      document.detachEvent("onreadystatechange", completed);
      window2.detachEvent("onload", completed);
    }
  }
  function completed() {
    if (document.addEventListener || window2.event.type === "load" || document.readyState === "complete") {
      detach();
      jQuery.ready();
    }
  }
  jQuery.ready.promise = function(obj) {
    if (!readyList) {
      readyList = jQuery.Deferred();
      if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
        window2.setTimeout(jQuery.ready);
      } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      } else {
        document.attachEvent("onreadystatechange", completed);
        window2.attachEvent("onload", completed);
        var top = false;
        try {
          top = window2.frameElement == null && document.documentElement;
        } catch (e) {
        }
        if (top && top.doScroll) {
          (function doScrollCheck() {
            if (!jQuery.isReady) {
              try {
                top.doScroll("left");
              } catch (e) {
                return window2.setTimeout(doScrollCheck, 50);
              }
              detach();
              jQuery.ready();
            }
          })();
        }
      }
    }
    return readyList.promise(obj);
  };
  jQuery.ready.promise();
  var i;
  for (i in jQuery(support)) {
    break;
  }
  support.ownFirst = i === "0";
  support.inlineBlockNeedsLayout = false;
  jQuery(function() {
    var val, div, body, container;
    body = document.getElementsByTagName("body")[0];
    if (!body || !body.style) {
      return;
    }
    div = document.createElement("div");
    container = document.createElement("div");
    container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
    body.appendChild(container).appendChild(div);
    if (typeof div.style.zoom !== "undefined") {
      div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
      support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
      if (val) {
        body.style.zoom = 1;
      }
    }
    body.removeChild(container);
  });
  (function() {
    var div = document.createElement("div");
    support.deleteExpando = true;
    try {
      delete div.test;
    } catch (e) {
      support.deleteExpando = false;
    }
    div = null;
  })();
  var acceptData = function(elem) {
    var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()], nodeType = +elem.nodeType || 1;
    return nodeType !== 1 && nodeType !== 9 ? false : (
      // Nodes accept data unless otherwise specified; rejection can be conditional
      !noData || noData !== true && elem.getAttribute("classid") === noData
    );
  };
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /([A-Z])/g;
  function dataAttr(elem, key, data) {
    if (data === void 0 && elem.nodeType === 1) {
      var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
      data = elem.getAttribute(name);
      if (typeof data === "string") {
        try {
          data = data === "true" ? true : data === "false" ? false : data === "null" ? null : (
            // Only convert to a number if it doesn't change the string
            +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data
          );
        } catch (e) {
        }
        jQuery.data(elem, key, data);
      } else {
        data = void 0;
      }
    }
    return data;
  }
  function isEmptyDataObject(obj) {
    var name;
    for (name in obj) {
      if (name === "data" && jQuery.isEmptyObject(obj[name])) {
        continue;
      }
      if (name !== "toJSON") {
        return false;
      }
    }
    return true;
  }
  function internalData(elem, name, data, pvt) {
    if (!acceptData(elem)) {
      return;
    }
    var ret, thisCache, internalKey = jQuery.expando, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
    if ((!id || !cache[id] || !pvt && !cache[id].data) && data === void 0 && typeof name === "string") {
      return;
    }
    if (!id) {
      if (isNode) {
        id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
      } else {
        id = internalKey;
      }
    }
    if (!cache[id]) {
      cache[id] = isNode ? {} : { toJSON: jQuery.noop };
    }
    if (typeof name === "object" || typeof name === "function") {
      if (pvt) {
        cache[id] = jQuery.extend(cache[id], name);
      } else {
        cache[id].data = jQuery.extend(cache[id].data, name);
      }
    }
    thisCache = cache[id];
    if (!pvt) {
      if (!thisCache.data) {
        thisCache.data = {};
      }
      thisCache = thisCache.data;
    }
    if (data !== void 0) {
      thisCache[jQuery.camelCase(name)] = data;
    }
    if (typeof name === "string") {
      ret = thisCache[name];
      if (ret == null) {
        ret = thisCache[jQuery.camelCase(name)];
      }
    } else {
      ret = thisCache;
    }
    return ret;
  }
  function internalRemoveData(elem, name, pvt) {
    if (!acceptData(elem)) {
      return;
    }
    var thisCache, i2, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[jQuery.expando] : jQuery.expando;
    if (!cache[id]) {
      return;
    }
    if (name) {
      thisCache = pvt ? cache[id] : cache[id].data;
      if (thisCache) {
        if (!jQuery.isArray(name)) {
          if (name in thisCache) {
            name = [name];
          } else {
            name = jQuery.camelCase(name);
            if (name in thisCache) {
              name = [name];
            } else {
              name = name.split(" ");
            }
          }
        } else {
          name = name.concat(jQuery.map(name, jQuery.camelCase));
        }
        i2 = name.length;
        while (i2--) {
          delete thisCache[name[i2]];
        }
        if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
          return;
        }
      }
    }
    if (!pvt) {
      delete cache[id].data;
      if (!isEmptyDataObject(cache[id])) {
        return;
      }
    }
    if (isNode) {
      jQuery.cleanData([elem], true);
    } else if (support.deleteExpando || cache != cache.window) {
      delete cache[id];
    } else {
      cache[id] = void 0;
    }
  }
  jQuery.extend({
    cache: {},
    // The following elements (space-suffixed to avoid Object.prototype collisions)
    // throw uncatchable exceptions if you attempt to set expando properties
    noData: {
      "applet ": true,
      "embed ": true,
      // ...but Flash objects (which have this classid) *can* handle expandos
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(elem) {
      elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
      return !!elem && !isEmptyDataObject(elem);
    },
    data: function(elem, name, data) {
      return internalData(elem, name, data);
    },
    removeData: function(elem, name) {
      return internalRemoveData(elem, name);
    },
    // For internal use only.
    _data: function(elem, name, data) {
      return internalData(elem, name, data, true);
    },
    _removeData: function(elem, name) {
      return internalRemoveData(elem, name, true);
    }
  });
  jQuery.fn.extend({
    data: function(key, value) {
      var i2, name, data, elem = this[0], attrs = elem && elem.attributes;
      if (key === void 0) {
        if (this.length) {
          data = jQuery.data(elem);
          if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
            i2 = attrs.length;
            while (i2--) {
              if (attrs[i2]) {
                name = attrs[i2].name;
                if (name.indexOf("data-") === 0) {
                  name = jQuery.camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }
            jQuery._data(elem, "parsedAttrs", true);
          }
        }
        return data;
      }
      if (typeof key === "object") {
        return this.each(function() {
          jQuery.data(this, key);
        });
      }
      return arguments.length > 1 ? (
        // Sets one value
        this.each(function() {
          jQuery.data(this, key, value);
        })
      ) : (
        // Gets one value
        // Try to fetch any internally stored data first
        elem ? dataAttr(elem, key, jQuery.data(elem, key)) : void 0
      );
    },
    removeData: function(key) {
      return this.each(function() {
        jQuery.removeData(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function(elem, type, data) {
      var queue;
      if (elem) {
        type = (type || "fx") + "queue";
        queue = jQuery._data(elem, type);
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = jQuery._data(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
        jQuery.dequeue(elem, type);
      };
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // not intended for public consumption - generates a queueHooks object,
    // or returns the current one
    _queueHooks: function(elem, type) {
      var key = type + "queueHooks";
      return jQuery._data(elem, key) || jQuery._data(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function() {
          jQuery._removeData(elem, type + "queue");
          jQuery._removeData(elem, key);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function(type, data) {
      var setter = 2;
      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === void 0 ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function(type, obj) {
      var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i2 = this.length, resolve = function() {
        if (!--count) {
          defer.resolveWith(elements, [elements]);
        }
      };
      if (typeof type !== "string") {
        obj = type;
        type = void 0;
      }
      type = type || "fx";
      while (i2--) {
        tmp = jQuery._data(elements[i2], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  (function() {
    var shrinkWrapBlocksVal;
    support.shrinkWrapBlocks = function() {
      if (shrinkWrapBlocksVal != null) {
        return shrinkWrapBlocksVal;
      }
      shrinkWrapBlocksVal = false;
      var div, body, container;
      body = document.getElementsByTagName("body")[0];
      if (!body || !body.style) {
        return;
      }
      div = document.createElement("div");
      container = document.createElement("div");
      container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
      body.appendChild(container).appendChild(div);
      if (typeof div.style.zoom !== "undefined") {
        div.style.cssText = // Support: Firefox<29, Android 2.3
        // Vendor-prefix box-sizing
        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
        div.appendChild(document.createElement("div")).style.width = "5px";
        shrinkWrapBlocksVal = div.offsetWidth !== 3;
      }
      body.removeChild(container);
      return shrinkWrapBlocksVal;
    };
  })();
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var isHidden = function(elem, el) {
    elem = el || elem;
    return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
  };
  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted, scale = 1, maxIterations = 20, currentValue = tween ? function() {
      return tween.cur();
    } : function() {
      return jQuery.css(elem, prop, "");
    }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      unit = unit || initialInUnit[3];
      valueParts = valueParts || [];
      initialInUnit = +initial || 1;
      do {
        scale = scale || ".5";
        initialInUnit = initialInUnit / scale;
        jQuery.style(elem, prop, initialInUnit + unit);
      } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
    }
    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0;
      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }
    return adjusted;
  }
  var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
    var i2 = 0, length = elems.length, bulk = key == null;
    if (jQuery.type(key) === "object") {
      chainable = true;
      for (i2 in key) {
        access(elems, fn, i2, key[i2], true, emptyGet, raw);
      }
    } else if (value !== void 0) {
      chainable = true;
      if (!jQuery.isFunction(value)) {
        raw = true;
      }
      if (bulk) {
        if (raw) {
          fn.call(elems, value);
          fn = null;
        } else {
          bulk = fn;
          fn = function(elem, key2, value2) {
            return bulk.call(jQuery(elem), value2);
          };
        }
      }
      if (fn) {
        for (; i2 < length; i2++) {
          fn(
            elems[i2],
            key,
            raw ? value : value.call(elems[i2], i2, fn(elems[i2], key))
          );
        }
      }
    }
    return chainable ? elems : (
      // Gets
      bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet
    );
  };
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([\w:-]+)/;
  var rscriptType = /^$|\/(?:java|ecma)script/i;
  var rleadingWhitespace = /^\s+/;
  var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  function createSafeFragment(document2) {
    var list = nodeNames.split("|"), safeFrag = document2.createDocumentFragment();
    if (safeFrag.createElement) {
      while (list.length) {
        safeFrag.createElement(
          list.pop()
        );
      }
    }
    return safeFrag;
  }
  (function() {
    var div = document.createElement("div"), fragment = document.createDocumentFragment(), input = document.createElement("input");
    div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    support.leadingWhitespace = div.firstChild.nodeType === 3;
    support.tbody = !div.getElementsByTagName("tbody").length;
    support.htmlSerialize = !!div.getElementsByTagName("link").length;
    support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
    input.type = "checkbox";
    input.checked = true;
    fragment.appendChild(input);
    support.appendChecked = input.checked;
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
    fragment.appendChild(div);
    input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input);
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
    support.noCloneEvent = !!div.addEventListener;
    div[jQuery.expando] = 1;
    support.attributes = !div.getAttribute(jQuery.expando);
  })();
  var wrapMap = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    // Support: IE8
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
    // unless wrapped in a div with non-breaking characters in front of it.
    _default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  function getAll(context, tag) {
    var elems, elem, i2 = 0, found = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : void 0;
    if (!found) {
      for (found = [], elems = context.childNodes || context; (elem = elems[i2]) != null; i2++) {
        if (!tag || jQuery.nodeName(elem, tag)) {
          found.push(elem);
        } else {
          jQuery.merge(found, getAll(elem, tag));
        }
      }
    }
    return tag === void 0 || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
  }
  function setGlobalEval(elems, refElements) {
    var elem, i2 = 0;
    for (; (elem = elems[i2]) != null; i2++) {
      jQuery._data(
        elem,
        "globalEval",
        !refElements || jQuery._data(refElements[i2], "globalEval")
      );
    }
  }
  var rhtml = /<|&#?\w+;/, rtbody = /<tbody/i;
  function fixDefaultChecked(elem) {
    if (rcheckableType.test(elem.type)) {
      elem.defaultChecked = elem.checked;
    }
  }
  function buildFragment(elems, context, scripts, selection, ignored) {
    var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, safe = createSafeFragment(context), nodes = [], i2 = 0;
    for (; i2 < l; i2++) {
      elem = elems[i2];
      if (elem || elem === 0) {
        if (jQuery.type(elem) === "object") {
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem));
        } else {
          tmp = tmp || safe.appendChild(context.createElement("div"));
          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
          j = wrap[0];
          while (j--) {
            tmp = tmp.lastChild;
          }
          if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
            nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
          }
          if (!support.tbody) {
            elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : (
              // String was a bare <thead> or <tfoot>
              wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0
            );
            j = elem && elem.childNodes.length;
            while (j--) {
              if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
                elem.removeChild(tbody);
              }
            }
          }
          jQuery.merge(nodes, tmp.childNodes);
          tmp.textContent = "";
          while (tmp.firstChild) {
            tmp.removeChild(tmp.firstChild);
          }
          tmp = safe.lastChild;
        }
      }
    }
    if (tmp) {
      safe.removeChild(tmp);
    }
    if (!support.appendChecked) {
      jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
    }
    i2 = 0;
    while (elem = nodes[i2++]) {
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }
        continue;
      }
      contains = jQuery.contains(elem.ownerDocument, elem);
      tmp = getAll(safe.appendChild(elem), "script");
      if (contains) {
        setGlobalEval(tmp);
      }
      if (scripts) {
        j = 0;
        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }
    tmp = null;
    return safe;
  }
  (function() {
    var i2, eventName, div = document.createElement("div");
    for (i2 in { submit: true, change: true, focusin: true }) {
      eventName = "on" + i2;
      if (!(support[i2] = eventName in window2)) {
        div.setAttribute(eventName, "t");
        support[i2] = div.attributes[eventName].expando === false;
      }
    }
    div = null;
  })();
  var rformElems = /^(?:input|select|textarea)$/i, rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {
    }
  }
  function on(elem, types, selector, data, fn, one) {
    var origFn, type;
    if (typeof types === "object") {
      if (typeof selector !== "string") {
        data = data || selector;
        selector = void 0;
      }
      for (type in types) {
        on(elem, type, selector, data, types[type], one);
      }
      return elem;
    }
    if (data == null && fn == null) {
      fn = selector;
      data = selector = void 0;
    } else if (fn == null) {
      if (typeof selector === "string") {
        fn = data;
        data = void 0;
      } else {
        fn = data;
        data = selector;
        selector = void 0;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }
    if (one === 1) {
      origFn = fn;
      fn = function(event) {
        jQuery().off(event);
        return origFn.apply(this, arguments);
      };
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function() {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  jQuery.event = {
    global: {},
    add: function(elem, types, handler, data, selector) {
      var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
      if (!elemData) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e) {
          return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : void 0;
        };
        eventHandle.elem = elem;
      }
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend({
          type,
          origType,
          data,
          handler,
          guid: handler.guid,
          selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle, false);
            } else if (elem.attachEvent) {
              elem.attachEvent("on" + type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery.event.global[type] = true;
      }
      elem = null;
    },
    // Detach an event or set of events from an element
    remove: function(elem, types, handler, selector, mappedTypes) {
      var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        delete elemData.handle;
        jQuery._removeData(elem, "events");
      }
    },
    trigger: function(event, data, elem, onlyHandlers) {
      var handle, ontype, cur, bubbleType, special, tmp, i2, eventPath = [elem || document], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = tmp = elem = elem || document;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf(".") > -1) {
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      event.result = void 0;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
        }
      }
      i2 = 0;
      while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
        event.type = i2 > 1 ? bubbleType : special.bindType || type;
        handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          if (ontype && elem[type] && !jQuery.isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            try {
              elem[type]();
            } catch (e) {
            }
            jQuery.event.triggered = void 0;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    dispatch: function(event) {
      event = jQuery.event.fix(event);
      var i2, j, ret, matched, handleObj, handlerQueue = [], args = slice.call(arguments), handlers = (jQuery._data(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
      args[0] = event;
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i2 = 0;
      while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== void 0) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function(event, handlers) {
      var i2, matches, sel, handleObj, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
      if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
        for (; cur != this; cur = cur.parentNode || this) {
          if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
            matches = [];
            for (i2 = 0; i2 < delegateCount; i2++) {
              handleObj = handlers[i2];
              sel = handleObj.selector + " ";
              if (matches[sel] === void 0) {
                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matches[sel]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({ elem: cur, handlers: matches });
            }
          }
        }
      }
      if (delegateCount < handlers.length) {
        handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) });
      }
      return handlerQueue;
    },
    fix: function(event) {
      if (event[jQuery.expando]) {
        return event;
      }
      var i2, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
      if (!fixHook) {
        this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
      }
      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
      event = new jQuery.Event(originalEvent);
      i2 = copy.length;
      while (i2--) {
        prop = copy[i2];
        event[prop] = originalEvent[prop];
      }
      if (!event.target) {
        event.target = originalEvent.srcElement || document;
      }
      if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
      }
      event.metaKey = !!event.metaKey;
      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },
    // Includes some event props shared by KeyEvent and MouseEvent
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(event, original) {
        if (event.which == null) {
          event.which = original.charCode != null ? original.charCode : original.keyCode;
        }
        return event;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(event, original) {
        var body, eventDoc, doc, button = original.button, fromElement = original.fromElement;
        if (event.pageX == null && original.clientX != null) {
          eventDoc = event.target.ownerDocument || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;
          event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
        if (!event.relatedTarget && fromElement) {
          event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
        }
        if (!event.which && button !== void 0) {
          event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
        }
        return event;
      }
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      focus: {
        // Fire native event if possible so blur/focus sequence is correct
        trigger: function() {
          if (this !== safeActiveElement() && this.focus) {
            try {
              this.focus();
              return false;
            } catch (e) {
            }
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        // For checkbox, fire native event so checked state will be right
        trigger: function() {
          if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
            this.click();
            return false;
          }
        },
        // For cross-browser consistency, don't fire native .click() on links
        _default: function(event) {
          return jQuery.nodeName(event.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function(event) {
          if (event.result !== void 0 && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    },
    // Piggyback on a donor event to simulate a different one
    simulate: function(type, elem, event) {
      var e = jQuery.extend(
        new jQuery.Event(),
        event,
        {
          type,
          isSimulated: true
          // Previously, `originalEvent: {}` was set here, so stopPropagation call
          // would not be triggered on donor event, since in our own
          // jQuery.event.stopPropagation function we had a check for existence of
          // originalEvent.stopPropagation method, so, consequently it would be a noop.
          //
          // Guard for simulated events was moved to jQuery.event.stopPropagation function
          // since `originalEvent` should point to the original event for the
          // constancy with other events and for more focused logic
        }
      );
      jQuery.event.trigger(e, null, elem);
      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }
  };
  jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  } : function(elem, type, handle) {
    var name = "on" + type;
    if (elem.detachEvent) {
      if (typeof elem[name] === "undefined") {
        elem[name] = null;
      }
      elem.detachEvent(name, handle);
    }
  };
  jQuery.Event = function(src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: IE < 9, Android < 4.0
      src.returnValue === false ? returnTrue : returnFalse;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || jQuery.now();
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (!e) {
        return;
      }
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (!e || this.isSimulated) {
        return;
      }
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      e.cancelBubble = true;
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e && e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function(event) {
        var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });
  if (!support.submit) {
    jQuery.event.special.submit = {
      setup: function() {
        if (jQuery.nodeName(this, "form")) {
          return false;
        }
        jQuery.event.add(this, "click._submit keypress._submit", function(e) {
          var elem = e.target, form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? (
            // Support: IE <=8
            // We use jQuery.prop instead of elem.form
            // to allow fixing the IE8 delegated submit issue (gh-2332)
            // by 3rd party polyfills/workarounds.
            jQuery.prop(elem, "form")
          ) : void 0;
          if (form && !jQuery._data(form, "submit")) {
            jQuery.event.add(form, "submit._submit", function(event) {
              event._submitBubble = true;
            });
            jQuery._data(form, "submit", true);
          }
        });
      },
      postDispatch: function(event) {
        if (event._submitBubble) {
          delete event._submitBubble;
          if (this.parentNode && !event.isTrigger) {
            jQuery.event.simulate("submit", this.parentNode, event);
          }
        }
      },
      teardown: function() {
        if (jQuery.nodeName(this, "form")) {
          return false;
        }
        jQuery.event.remove(this, "._submit");
      }
    };
  }
  if (!support.change) {
    jQuery.event.special.change = {
      setup: function() {
        if (rformElems.test(this.nodeName)) {
          if (this.type === "checkbox" || this.type === "radio") {
            jQuery.event.add(this, "propertychange._change", function(event) {
              if (event.originalEvent.propertyName === "checked") {
                this._justChanged = true;
              }
            });
            jQuery.event.add(this, "click._change", function(event) {
              if (this._justChanged && !event.isTrigger) {
                this._justChanged = false;
              }
              jQuery.event.simulate("change", this, event);
            });
          }
          return false;
        }
        jQuery.event.add(this, "beforeactivate._change", function(e) {
          var elem = e.target;
          if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "change")) {
            jQuery.event.add(elem, "change._change", function(event) {
              if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                jQuery.event.simulate("change", this.parentNode, event);
              }
            });
            jQuery._data(elem, "change", true);
          }
        });
      },
      handle: function(event) {
        var elem = event.target;
        if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
          return event.handleObj.handler.apply(this, arguments);
        }
      },
      teardown: function() {
        jQuery.event.remove(this, "._change");
        return !rformElems.test(this.nodeName);
      }
    };
  }
  if (!support.focusin) {
    jQuery.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
      var handler = function(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };
      jQuery.event.special[fix] = {
        setup: function() {
          var doc = this.ownerDocument || this, attaches = jQuery._data(doc, fix);
          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }
          jQuery._data(doc, fix, (attaches || 0) + 1);
        },
        teardown: function() {
          var doc = this.ownerDocument || this, attaches = jQuery._data(doc, fix) - 1;
          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            jQuery._removeData(doc, fix);
          } else {
            jQuery._data(doc, fix, attaches);
          }
        }
      };
    });
  }
  jQuery.fn.extend({
    on: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn);
    },
    one: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn, 1);
    },
    off: function(types, selector, fn) {
      var handleObj, type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(
          handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
          handleObj.selector,
          handleObj.handler
        );
        return this;
      }
      if (typeof types === "object") {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        fn = selector;
        selector = void 0;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function() {
        jQuery.event.remove(this, types, fn, selector);
      });
    },
    trigger: function(type, data) {
      return this.each(function() {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function(type, data) {
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g, rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"), rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, safeFragment = createSafeFragment(document), fragmentDiv = safeFragment.appendChild(document.createElement("div"));
  function manipulationTarget(elem, content) {
    return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
  }
  function disableScript(elem) {
    elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }
  function cloneCopyEvent(src, dest) {
    if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
      return;
    }
    var type, i2, l, oldData = jQuery._data(src), curData = jQuery._data(dest, oldData), events = oldData.events;
    if (events) {
      delete curData.handle;
      curData.events = {};
      for (type in events) {
        for (i2 = 0, l = events[type].length; i2 < l; i2++) {
          jQuery.event.add(dest, type, events[type][i2]);
        }
      }
    }
    if (curData.data) {
      curData.data = jQuery.extend({}, curData.data);
    }
  }
  function fixCloneNodeIssues(src, dest) {
    var nodeName, e, data;
    if (dest.nodeType !== 1) {
      return;
    }
    nodeName = dest.nodeName.toLowerCase();
    if (!support.noCloneEvent && dest[jQuery.expando]) {
      data = jQuery._data(dest);
      for (e in data.events) {
        jQuery.removeEvent(dest, e, data.handle);
      }
      dest.removeAttribute(jQuery.expando);
    }
    if (nodeName === "script" && dest.text !== src.text) {
      disableScript(dest).text = src.text;
      restoreScript(dest);
    } else if (nodeName === "object") {
      if (dest.parentNode) {
        dest.outerHTML = src.outerHTML;
      }
      if (support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
        dest.innerHTML = src.innerHTML;
      }
    } else if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.defaultChecked = dest.checked = src.checked;
      if (dest.value !== src.value) {
        dest.value = src.value;
      }
    } else if (nodeName === "option") {
      dest.defaultSelected = dest.selected = src.defaultSelected;
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }
  function domManip(collection, args, callback, ignored) {
    args = concat.apply([], args);
    var first, node, hasScripts, scripts, doc, fragment, i2 = 0, l = collection.length, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
    if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function(index) {
        var self = collection.eq(index);
        if (isFunction) {
          args[0] = value.call(this, index, self.html());
        }
        domManip(self, args, callback, ignored);
      });
    }
    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;
      if (fragment.childNodes.length === 1) {
        fragment = first;
      }
      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length;
        for (; i2 < l; i2++) {
          node = fragment;
          if (i2 !== iNoClone) {
            node = jQuery.clone(node, true, true);
            if (hasScripts) {
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }
          callback.call(collection[i2], node, i2);
        }
        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;
          jQuery.map(scripts, restoreScript);
          for (i2 = 0; i2 < hasScripts; i2++) {
            node = scripts[i2];
            if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src) {
                if (jQuery._evalUrl) {
                  jQuery._evalUrl(node.src);
                }
              } else {
                jQuery.globalEval(
                  (node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, "")
                );
              }
            }
          }
        }
        fragment = first = null;
      }
    }
    return collection;
  }
  function remove(elem, selector, keepData) {
    var node, elems = selector ? jQuery.filter(selector, elem) : elem, i2 = 0;
    for (; (node = elems[i2]) != null; i2++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }
      if (node.parentNode) {
        if (keepData && jQuery.contains(node.ownerDocument, node)) {
          setGlobalEval(getAll(node, "script"));
        }
        node.parentNode.removeChild(node);
      }
    }
    return elem;
  }
  jQuery.extend({
    htmlPrefilter: function(html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },
    clone: function(elem, dataAndEvents, deepDataAndEvents) {
      var destElements, node, clone, i2, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
      if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
        clone = elem.cloneNode(true);
      } else {
        fragmentDiv.innerHTML = elem.outerHTML;
        fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
      }
      if ((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i2 = 0; (node = srcElements[i2]) != null; ++i2) {
          if (destElements[i2]) {
            fixCloneNodeIssues(node, destElements[i2]);
          }
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i2 = 0; (node = srcElements[i2]) != null; i2++) {
            cloneCopyEvent(node, destElements[i2]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      destElements = getAll(clone, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }
      destElements = srcElements = node = null;
      return clone;
    },
    cleanData: function(elems, forceAcceptData) {
      var elem, type, id, data, i2 = 0, internalKey = jQuery.expando, cache = jQuery.cache, attributes = support.attributes, special = jQuery.event.special;
      for (; (elem = elems[i2]) != null; i2++) {
        if (forceAcceptData || acceptData(elem)) {
          id = elem[internalKey];
          data = id && cache[id];
          if (data) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            if (cache[id]) {
              delete cache[id];
              if (!attributes && typeof elem.removeAttribute !== "undefined") {
                elem.removeAttribute(internalKey);
              } else {
                elem[internalKey] = void 0;
              }
              deletedIds.push(id);
            }
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    // Keep domManip exposed until 3.0 (gh-2225)
    domManip,
    detach: function(selector) {
      return remove(this, selector, true);
    },
    remove: function(selector) {
      return remove(this, selector);
    },
    text: function(value) {
      return access(this, function(value2) {
        return value2 === void 0 ? jQuery.text(this) : this.empty().append(
          (this[0] && this[0].ownerDocument || document).createTextNode(value2)
        );
      }, null, value, arguments.length);
    },
    append: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function() {
      var elem, i2 = 0;
      for (; (elem = this[i2]) != null; i2++) {
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
        }
        while (elem.firstChild) {
          elem.removeChild(elem.firstChild);
        }
        if (elem.options && jQuery.nodeName(elem, "select")) {
          elem.options.length = 0;
        }
      }
      return this;
    },
    clone: function(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function() {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function(value) {
      return access(this, function(value2) {
        var elem = this[0] || {}, i2 = 0, l = this.length;
        if (value2 === void 0) {
          return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : void 0;
        }
        if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && (support.htmlSerialize || !rnoshimcache.test(value2)) && (support.leadingWhitespace || !rleadingWhitespace.test(value2)) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
          value2 = jQuery.htmlPrefilter(value2);
          try {
            for (; i2 < l; i2++) {
              elem = this[i2] || {};
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value2;
              }
            }
            elem = 0;
          } catch (e) {
          }
        }
        if (elem) {
          this.empty().append(value2);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function() {
      var ignored = [];
      return domManip(this, arguments, function(elem) {
        var parent = this.parentNode;
        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));
          if (parent) {
            parent.replaceChild(elem, this);
          }
        }
      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(name, original) {
    jQuery.fn[name] = function(selector) {
      var elems, i2 = 0, ret = [], insert = jQuery(selector), last = insert.length - 1;
      for (; i2 <= last; i2++) {
        elems = i2 === last ? this : this.clone(true);
        jQuery(insert[i2])[original](elems);
        push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    };
  });
  var iframe, elemdisplay = {
    // Support: Firefox
    // We have to pre-define these values for FF (#10227)
    HTML: "block",
    BODY: "block"
  };
  function actualDisplay(name, doc) {
    var elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = jQuery.css(elem[0], "display");
    elem.detach();
    return display;
  }
  function defaultDisplay(nodeName) {
    var doc = document, display = elemdisplay[nodeName];
    if (!display) {
      display = actualDisplay(nodeName, doc);
      if (display === "none" || !display) {
        iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
        doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
        doc.write();
        doc.close();
        display = actualDisplay(nodeName, doc);
        iframe.detach();
      }
      elemdisplay[nodeName] = display;
    }
    return display;
  }
  var rmargin = /^margin/;
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
  var swap = function(elem, options, callback, args) {
    var ret, name, old = {};
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.apply(elem, args || []);
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  };
  var documentElement = document.documentElement;
  (function() {
    var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
    if (!div.style) {
      return;
    }
    div.style.cssText = "float:left;opacity:.5";
    support.opacity = div.style.opacity === "0.5";
    support.cssFloat = !!div.style.cssFloat;
    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    container = document.createElement("div");
    container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
    div.innerHTML = "";
    container.appendChild(div);
    support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" || div.style.WebkitBoxSizing === "";
    jQuery.extend(support, {
      reliableHiddenOffsets: function() {
        if (pixelPositionVal == null) {
          computeStyleTests();
        }
        return reliableHiddenOffsetsVal;
      },
      boxSizingReliable: function() {
        if (pixelPositionVal == null) {
          computeStyleTests();
        }
        return boxSizingReliableVal;
      },
      pixelMarginRight: function() {
        if (pixelPositionVal == null) {
          computeStyleTests();
        }
        return pixelMarginRightVal;
      },
      pixelPosition: function() {
        if (pixelPositionVal == null) {
          computeStyleTests();
        }
        return pixelPositionVal;
      },
      reliableMarginRight: function() {
        if (pixelPositionVal == null) {
          computeStyleTests();
        }
        return reliableMarginRightVal;
      },
      reliableMarginLeft: function() {
        if (pixelPositionVal == null) {
          computeStyleTests();
        }
        return reliableMarginLeftVal;
      }
    });
    function computeStyleTests() {
      var contents, divStyle, documentElement2 = document.documentElement;
      documentElement2.appendChild(container);
      div.style.cssText = // Support: Android 2.3
      // Vendor-prefix box-sizing
      "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
      pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
      pixelMarginRightVal = reliableMarginRightVal = true;
      if (window2.getComputedStyle) {
        divStyle = window2.getComputedStyle(div);
        pixelPositionVal = (divStyle || {}).top !== "1%";
        reliableMarginLeftVal = (divStyle || {}).marginLeft === "2px";
        boxSizingReliableVal = (divStyle || { width: "4px" }).width === "4px";
        div.style.marginRight = "50%";
        pixelMarginRightVal = (divStyle || { marginRight: "4px" }).marginRight === "4px";
        contents = div.appendChild(document.createElement("div"));
        contents.style.cssText = div.style.cssText = // Support: Android 2.3
        // Vendor-prefix box-sizing
        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
        contents.style.marginRight = contents.style.width = "0";
        div.style.width = "1px";
        reliableMarginRightVal = !parseFloat((window2.getComputedStyle(contents) || {}).marginRight);
        div.removeChild(contents);
      }
      div.style.display = "none";
      reliableHiddenOffsetsVal = div.getClientRects().length === 0;
      if (reliableHiddenOffsetsVal) {
        div.style.display = "";
        div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
        div.childNodes[0].style.borderCollapse = "separate";
        contents = div.getElementsByTagName("td");
        contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
        reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
        if (reliableHiddenOffsetsVal) {
          contents[0].style.display = "";
          contents[1].style.display = "none";
          reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
        }
      }
      documentElement2.removeChild(container);
    }
  })();
  var getStyles, curCSS, rposition = /^(top|right|bottom|left)$/;
  if (window2.getComputedStyle) {
    getStyles = function(elem) {
      var view = elem.ownerDocument.defaultView;
      if (!view || !view.opener) {
        view = window2;
      }
      return view.getComputedStyle(elem);
    };
    curCSS = function(elem, name, computed) {
      var width, minWidth, maxWidth, ret, style = elem.style;
      computed = computed || getStyles(elem);
      ret = computed ? computed.getPropertyValue(name) || computed[name] : void 0;
      if ((ret === "" || ret === void 0) && !jQuery.contains(elem.ownerDocument, elem)) {
        ret = jQuery.style(elem, name);
      }
      if (computed) {
        if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
          width = style.width;
          minWidth = style.minWidth;
          maxWidth = style.maxWidth;
          style.minWidth = style.maxWidth = style.width = ret;
          ret = computed.width;
          style.width = width;
          style.minWidth = minWidth;
          style.maxWidth = maxWidth;
        }
      }
      return ret === void 0 ? ret : ret + "";
    };
  } else if (documentElement.currentStyle) {
    getStyles = function(elem) {
      return elem.currentStyle;
    };
    curCSS = function(elem, name, computed) {
      var left, rs, rsLeft, ret, style = elem.style;
      computed = computed || getStyles(elem);
      ret = computed ? computed[name] : void 0;
      if (ret == null && style && style[name]) {
        ret = style[name];
      }
      if (rnumnonpx.test(ret) && !rposition.test(name)) {
        left = style.left;
        rs = elem.runtimeStyle;
        rsLeft = rs && rs.left;
        if (rsLeft) {
          rs.left = elem.currentStyle.left;
        }
        style.left = name === "fontSize" ? "1em" : ret;
        ret = style.pixelLeft + "px";
        style.left = left;
        if (rsLeft) {
          rs.left = rsLeft;
        }
      }
      return ret === void 0 ? ret : ret + "" || "auto";
    };
  }
  function addGetHookIf(conditionFn, hookFn) {
    return {
      get: function() {
        if (conditionFn()) {
          delete this.get;
          return;
        }
        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }
  var ralpha = /alpha\([^)]*\)/i, ropacity = /opacity\s*=\s*([^)]*)/i, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"), cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  }, cssPrefixes = ["Webkit", "O", "Moz", "ms"], emptyStyle = document.createElement("div").style;
  function vendorPropName(name) {
    if (name in emptyStyle) {
      return name;
    }
    var capName = name.charAt(0).toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
    while (i2--) {
      name = cssPrefixes[i2] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }
  function showHide(elements, show) {
    var display, elem, hidden, values = [], index = 0, length = elements.length;
    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      values[index] = jQuery._data(elem, "olddisplay");
      display = elem.style.display;
      if (show) {
        if (!values[index] && display === "none") {
          elem.style.display = "";
        }
        if (elem.style.display === "" && isHidden(elem)) {
          values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
        }
      } else {
        hidden = isHidden(elem);
        if (display && display !== "none" || !hidden) {
          jQuery._data(
            elem,
            "olddisplay",
            hidden ? display : jQuery.css(elem, "display")
          );
        }
      }
    }
    for (index = 0; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      if (!show || elem.style.display === "none" || elem.style.display === "") {
        elem.style.display = show ? values[index] || "" : "none";
      }
    }
    return elements;
  }
  function setPositiveNumber(elem, value, subtract) {
    var matches = rnumsplit.exec(value);
    return matches ? (
      // Guard against undefined "subtract", e.g., when used as in cssHooks
      Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px")
    ) : value;
  }
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i2 = extra === (isBorderBox ? "border" : "content") ? (
      // If we already have the right measurement, avoid augmentation
      4
    ) : (
      // Otherwise initialize for horizontal or vertical properties
      name === "width" ? 1 : 0
    ), val = 0;
    for (; i2 < 4; i2 += 2) {
      if (extra === "margin") {
        val += jQuery.css(elem, extra + cssExpand[i2], true, styles);
      }
      if (isBorderBox) {
        if (extra === "content") {
          val -= jQuery.css(elem, "padding" + cssExpand[i2], true, styles);
        }
        if (extra !== "margin") {
          val -= jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
        }
      } else {
        val += jQuery.css(elem, "padding" + cssExpand[i2], true, styles);
        if (extra !== "padding") {
          val += jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
        }
      }
    }
    return val;
  }
  function getWidthOrHeight(elem, name, extra) {
    var valueIsBorderBox = true, val = name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
    if (val <= 0 || val == null) {
      val = curCSS(elem, name, styles);
      if (val < 0 || val == null) {
        val = elem.style[name];
      }
      if (rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
      val = parseFloat(val) || 0;
    }
    return val + augmentWidthOrHeight(
      elem,
      name,
      extra || (isBorderBox ? "border" : "content"),
      valueIsBorderBox,
      styles
    ) + "px";
  }
  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function(elem, computed) {
          if (computed) {
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {
      // normalize float css property
      "float": support.cssFloat ? "cssFloat" : "styleFloat"
    },
    // Get and set the style property on a DOM Node
    style: function(elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (value !== void 0) {
        type = typeof value;
        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret);
          type = "number";
        }
        if (value == null || value !== value) {
          return;
        }
        if (type === "number") {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        }
        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
          try {
            style[name] = value;
          } catch (e) {
          }
        }
      } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
          return ret;
        }
        return style[name];
      }
    },
    css: function(elem, name, extra, styles) {
      var num, val, hooks, origName = jQuery.camelCase(name);
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      }
      if (val === void 0) {
        val = curCSS(elem, name, styles);
      }
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }
      return val;
    }
  });
  jQuery.each(["height", "width"], function(i2, name) {
    jQuery.cssHooks[name] = {
      get: function(elem, computed, extra) {
        if (computed) {
          return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },
      set: function(elem, value, extra) {
        var styles = extra && getStyles(elem);
        return setPositiveNumber(
          elem,
          value,
          extra ? augmentWidthOrHeight(
            elem,
            name,
            extra,
            support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            styles
          ) : 0
        );
      }
    };
  });
  if (!support.opacity) {
    jQuery.cssHooks.opacity = {
      get: function(elem, computed) {
        return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
      },
      set: function(elem, value) {
        var style = elem.style, currentStyle = elem.currentStyle, opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "", filter = currentStyle && currentStyle.filter || style.filter || "";
        style.zoom = 1;
        if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
          style.removeAttribute("filter");
          if (value === "" || currentStyle && !currentStyle.filter) {
            return;
          }
        }
        style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
      }
    };
  }
  jQuery.cssHooks.marginRight = addGetHookIf(
    support.reliableMarginRight,
    function(elem, computed) {
      if (computed) {
        return swap(
          elem,
          { "display": "inline-block" },
          curCSS,
          [elem, "marginRight"]
        );
      }
    }
  );
  jQuery.cssHooks.marginLeft = addGetHookIf(
    support.reliableMarginLeft,
    function(elem, computed) {
      if (computed) {
        return (parseFloat(curCSS(elem, "marginLeft")) || // Support: IE<=11+
        // Running getBoundingClientRect on a disconnected node in IE throws an error
        // Support: IE8 only
        // getClientRects() errors on disconnected elems
        (jQuery.contains(elem.ownerDocument, elem) ? elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
          return elem.getBoundingClientRect().left;
        }) : 0)) + "px";
      }
    }
  );
  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function(value) {
        var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
        for (; i2 < 4; i2++) {
          expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
        }
        return expanded;
      }
    };
    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function(name, value) {
      return access(this, function(elem, name2, value2) {
        var styles, len, map = {}, i2 = 0;
        if (jQuery.isArray(name2)) {
          styles = getStyles(elem);
          len = name2.length;
          for (; i2 < len; i2++) {
            map[name2[i2]] = jQuery.css(elem, name2[i2], false, styles);
          }
          return map;
        }
        return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
      }, name, value, arguments.length > 1);
    },
    show: function() {
      return showHide(this, true);
    },
    hide: function() {
      return showHide(this);
    },
    toggle: function(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }
      return this.each(function() {
        if (isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function(percent) {
      var eased, hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](
          percent,
          this.options.duration * percent,
          0,
          1,
          this.options.duration
        );
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function(tween) {
        var result;
        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        }
        result = jQuery.css(tween.elem, tween.prop, "");
        return !result || result === "auto" ? 0 : result;
      },
      set: function(tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  };
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function(p) {
      return p;
    },
    swing: function(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
  function createFxNow() {
    window2.setTimeout(function() {
      fxNow = void 0;
    });
    return fxNow = jQuery.now();
  }
  function genFx(type, includeWidth) {
    var which, attrs = { height: type }, i2 = 0;
    includeWidth = includeWidth ? 1 : 0;
    for (; i2 < 4; i2 += 2 - includeWidth) {
      which = cssExpand[i2];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  function createTween(value, prop, animation) {
    var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        return tween;
      }
    }
  }
  function defaultPrefilter(elem, props, opts) {
    var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = jQuery._data(elem, "fxshow");
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];
      display = jQuery.css(elem, "display");
      checkDisplay = display === "none" ? jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
      if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
        if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") {
          style.display = "inline-block";
        } else {
          style.zoom = 1;
        }
      }
    }
    if (opts.overflow) {
      style.overflow = "hidden";
      if (!support.shrinkWrapBlocks()) {
        anim.always(function() {
          style.overflow = opts.overflow[0];
          style.overflowX = opts.overflow[1];
          style.overflowY = opts.overflow[2];
        });
      }
    }
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.exec(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show")) {
          if (value === "show" && dataShow && dataShow[prop] !== void 0) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      } else {
        display = void 0;
      }
    }
    if (!jQuery.isEmptyObject(orig)) {
      if (dataShow) {
        if ("hidden" in dataShow) {
          hidden = dataShow.hidden;
        }
      } else {
        dataShow = jQuery._data(elem, "fxshow", {});
      }
      if (toggle) {
        dataShow.hidden = !hidden;
      }
      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function() {
          jQuery(elem).hide();
        });
      }
      anim.done(function() {
        var prop2;
        jQuery._removeData(elem, "fxshow");
        for (prop2 in orig) {
          jQuery.style(elem, prop2, orig[prop2]);
        }
      });
      for (prop in orig) {
        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = tween.start;
          if (hidden) {
            tween.end = tween.start;
            tween.start = prop === "width" || prop === "height" ? 1 : 0;
          }
        }
      }
    } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
      style.display = display;
    }
  }
  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks;
    for (index in props) {
      name = jQuery.camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (jQuery.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = jQuery.cssHooks[name];
      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  function Animation(elem, properties, options) {
    var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
      delete tick.elem;
    }), tick = function() {
      if (stopped) {
        return false;
      }
      var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
      for (; index2 < length2; index2++) {
        animation.tweens[index2].run(percent);
      }
      deferred.notifyWith(elem, [animation, percent, remaining]);
      if (percent < 1 && length2) {
        return remaining;
      } else {
        deferred.resolveWith(elem, [animation]);
        return false;
      }
    }, animation = deferred.promise({
      elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function(prop, end) {
        var tween = jQuery.Tween(
          elem,
          animation.opts,
          prop,
          end,
          animation.opts.specialEasing[prop] || animation.opts.easing
        );
        animation.tweens.push(tween);
        return tween;
      },
      stop: function(gotoEnd) {
        var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
        if (stopped) {
          return this;
        }
        stopped = true;
        for (; index2 < length2; index2++) {
          animation.tweens[index2].run(1);
        }
        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }
        return this;
      }
    }), props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        if (jQuery.isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
        }
        return result;
      }
    }
    jQuery.map(props, createTween, animation);
    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }
    jQuery.fx.timer(
      jQuery.extend(tick, {
        elem,
        anim: animation,
        queue: animation.opts.queue
      })
    );
    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function(prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function(props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnotwhite);
      }
      var prop, index = 0, length = props.length;
      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });
  jQuery.speed = function(speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
    };
    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }
    opt.old = opt.complete;
    opt.complete = function() {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery.fn.extend({
    fadeTo: function(speed, to, easing, callback) {
      return this.filter(isHidden).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
    },
    animate: function(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
        var anim = Animation(this, jQuery.extend({}, prop), optall);
        if (empty || jQuery._data(this, "finish")) {
          anim.stop(true);
        }
      };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function(type, clearQueue, gotoEnd) {
      var stopQueue = function(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = void 0;
      }
      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }
      return this.each(function() {
        var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = jQuery._data(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function(type) {
      if (type !== false) {
        type = type || "fx";
      }
      return this.each(function() {
        var index, data = jQuery._data(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function(i2, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function(speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: { opacity: "show" },
    fadeOut: { opacity: "hide" },
    fadeToggle: { opacity: "toggle" }
  }, function(name, props) {
    jQuery.fn[name] = function(speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];
  jQuery.fx.tick = function() {
    var timer, timers = jQuery.timers, i2 = 0;
    fxNow = jQuery.now();
    for (; i2 < timers.length; i2++) {
      timer = timers[i2];
      if (!timer() && timers[i2] === timer) {
        timers.splice(i2--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = void 0;
  };
  jQuery.fx.timer = function(timer) {
    jQuery.timers.push(timer);
    if (timer()) {
      jQuery.fx.start();
    } else {
      jQuery.timers.pop();
    }
  };
  jQuery.fx.interval = 13;
  jQuery.fx.start = function() {
    if (!timerId) {
      timerId = window2.setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };
  jQuery.fx.stop = function() {
    window2.clearInterval(timerId);
    timerId = null;
  };
  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  };
  jQuery.fn.delay = function(time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function(next, hooks) {
      var timeout = window2.setTimeout(next, time);
      hooks.stop = function() {
        window2.clearTimeout(timeout);
      };
    });
  };
  (function() {
    var a, input = document.createElement("input"), div = document.createElement("div"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
    div = document.createElement("div");
    div.setAttribute("className", "t");
    div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    a = div.getElementsByTagName("a")[0];
    input.setAttribute("type", "checkbox");
    div.appendChild(input);
    a = div.getElementsByTagName("a")[0];
    a.style.cssText = "top:1px";
    support.getSetAttribute = div.className !== "t";
    support.style = /top/.test(a.getAttribute("style"));
    support.hrefNormalized = a.getAttribute("href") === "/a";
    support.checkOn = !!input.value;
    support.optSelected = opt.selected;
    support.enctype = !!document.createElement("form").enctype;
    select.disabled = true;
    support.optDisabled = !opt.disabled;
    input = document.createElement("input");
    input.setAttribute("value", "");
    support.input = input.getAttribute("value") === "";
    input.value = "t";
    input.setAttribute("type", "radio");
    support.radioValue = input.value === "t";
  })();
  var rreturn = /\r/g, rspaces = /[\x20\t\r\n\f]+/g;
  jQuery.fn.extend({
    val: function(value) {
      var hooks, ret, isFunction, elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
            return ret;
          }
          ret = elem.value;
          return typeof ret === "string" ? (
            // handle most common string cases
            ret.replace(rreturn, "")
          ) : (
            // handle cases where value is null/undef or number
            ret == null ? "" : ret
          );
        }
        return;
      }
      isFunction = jQuery.isFunction(value);
      return this.each(function(i2) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (isFunction) {
          val = value.call(this, i2, jQuery(this).val());
        } else {
          val = value;
        }
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function(value2) {
            return value2 == null ? "" : value2 + "";
          });
        }
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : (
            // Support: IE10-11+
            // option.text throws exceptions (#14686, #14858)
            // Strip and collapse whitespace
            // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
            jQuery.trim(jQuery.text(elem)).replace(rspaces, " ")
          );
        }
      },
      select: {
        get: function(elem) {
          var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i2 = index < 0 ? max : one ? index : 0;
          for (; i2 < max; i2++) {
            option = options[i2];
            if ((option.selected || i2 === index) && // Don't return options that are disabled or in a disabled optgroup
            (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
              value = jQuery(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function(elem, value) {
          var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i2 = options.length;
          while (i2--) {
            option = options[i2];
            if (jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              try {
                option.selected = optionSet = true;
              } catch (_) {
                option.scrollHeight;
              }
            } else {
              option.selected = false;
            }
          }
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return options;
        }
      }
    }
  });
  jQuery.each(["radio", "checkbox"], function() {
    jQuery.valHooks[this] = {
      set: function(elem, value) {
        if (jQuery.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function(elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  });
  var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle, ruseDefault = /^(?:checked|selected)$/i, getSetAttribute = support.getSetAttribute, getSetInput = support.input;
  jQuery.fn.extend({
    attr: function(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function(elem, name, value) {
      var ret, hooks, nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = name.toLowerCase();
        hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
      }
      if (value !== void 0) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
          return ret;
        }
        elem.setAttribute(name, value + "");
        return value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      ret = jQuery.find.attr(elem, name);
      return ret == null ? void 0 : ret;
    },
    attrHooks: {
      type: {
        set: function(elem, value) {
          if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }
      }
    },
    removeAttr: function(elem, value) {
      var name, propName, i2 = 0, attrNames = value && value.match(rnotwhite);
      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i2++]) {
          propName = jQuery.propFix[name] || name;
          if (jQuery.expr.match.bool.test(name)) {
            if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
              elem[propName] = false;
            } else {
              elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
            }
          } else {
            jQuery.attr(elem, name, "");
          }
          elem.removeAttribute(getSetAttribute ? name : propName);
        }
      }
    }
  });
  boolHook = {
    set: function(elem, value, name) {
      if (value === false) {
        jQuery.removeAttr(elem, name);
      } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
        elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
      } else {
        elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
      }
      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i2, name) {
    var getter = attrHandle[name] || jQuery.find.attr;
    if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
      attrHandle[name] = function(elem, name2, isXML) {
        var ret, handle;
        if (!isXML) {
          handle = attrHandle[name2];
          attrHandle[name2] = ret;
          ret = getter(elem, name2, isXML) != null ? name2.toLowerCase() : null;
          attrHandle[name2] = handle;
        }
        return ret;
      };
    } else {
      attrHandle[name] = function(elem, name2, isXML) {
        if (!isXML) {
          return elem[jQuery.camelCase("default-" + name2)] ? name2.toLowerCase() : null;
        }
      };
    }
  });
  if (!getSetInput || !getSetAttribute) {
    jQuery.attrHooks.value = {
      set: function(elem, value, name) {
        if (jQuery.nodeName(elem, "input")) {
          elem.defaultValue = value;
        } else {
          return nodeHook && nodeHook.set(elem, value, name);
        }
      }
    };
  }
  if (!getSetAttribute) {
    nodeHook = {
      set: function(elem, value, name) {
        var ret = elem.getAttributeNode(name);
        if (!ret) {
          elem.setAttributeNode(
            ret = elem.ownerDocument.createAttribute(name)
          );
        }
        ret.value = value += "";
        if (name === "value" || value === elem.getAttribute(name)) {
          return value;
        }
      }
    };
    attrHandle.id = attrHandle.name = attrHandle.coords = function(elem, name, isXML) {
      var ret;
      if (!isXML) {
        return (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
      }
    };
    jQuery.valHooks.button = {
      get: function(elem, name) {
        var ret = elem.getAttributeNode(name);
        if (ret && ret.specified) {
          return ret.value;
        }
      },
      set: nodeHook.set
    };
    jQuery.attrHooks.contenteditable = {
      set: function(elem, value, name) {
        nodeHook.set(elem, value === "" ? false : value, name);
      }
    };
    jQuery.each(["width", "height"], function(i2, name) {
      jQuery.attrHooks[name] = {
        set: function(elem, value) {
          if (value === "") {
            elem.setAttribute(name, "auto");
            return value;
          }
        }
      };
    });
  }
  if (!support.style) {
    jQuery.attrHooks.style = {
      get: function(elem) {
        return elem.style.cssText || void 0;
      },
      set: function(elem, value) {
        return elem.style.cssText = value + "";
      }
    };
  }
  var rfocusable = /^(?:input|select|textarea|button|object)$/i, rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function(name) {
      name = jQuery.propFix[name] || name;
      return this.each(function() {
        try {
          this[name] = void 0;
          delete this[name];
        } catch (e) {
        }
      });
    }
  });
  jQuery.extend({
    prop: function(elem, name, value) {
      var ret, hooks, nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }
      if (value !== void 0) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
          return ret;
        }
        return elem[name] = value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function(elem) {
          var tabindex = jQuery.find.attr(elem, "tabindex");
          return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  });
  if (!support.hrefNormalized) {
    jQuery.each(["href", "src"], function(i2, name) {
      jQuery.propHooks[name] = {
        get: function(elem) {
          return elem.getAttribute(name, 4);
        }
      };
    });
  }
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function(elem) {
        var parent = elem.parentNode;
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
        return null;
      },
      set: function(elem) {
        var parent = elem.parentNode;
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }
  jQuery.each([
    "tabIndex",
    "readOnly",
    "maxLength",
    "cellSpacing",
    "cellPadding",
    "rowSpan",
    "colSpan",
    "useMap",
    "frameBorder",
    "contentEditable"
  ], function() {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  if (!support.enctype) {
    jQuery.propFix.enctype = "encoding";
  }
  var rclass = /[\t\r\n\f]/g;
  function getClass(elem) {
    return jQuery.attr(elem, "class") || "";
  }
  jQuery.fn.extend({
    addClass: function(value) {
      var classes, elem, cur, curValue, clazz, j, finalValue, i2 = 0;
      if (jQuery.isFunction(value)) {
        return this.each(function(j2) {
          jQuery(this).addClass(value.call(this, j2, getClass(this)));
        });
      }
      if (typeof value === "string" && value) {
        classes = value.match(rnotwhite) || [];
        while (elem = this[i2++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
          if (cur) {
            j = 0;
            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            }
            finalValue = jQuery.trim(cur);
            if (curValue !== finalValue) {
              jQuery.attr(elem, "class", finalValue);
            }
          }
        }
      }
      return this;
    },
    removeClass: function(value) {
      var classes, elem, cur, curValue, clazz, j, finalValue, i2 = 0;
      if (jQuery.isFunction(value)) {
        return this.each(function(j2) {
          jQuery(this).removeClass(value.call(this, j2, getClass(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if (typeof value === "string" && value) {
        classes = value.match(rnotwhite) || [];
        while (elem = this[i2++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
          if (cur) {
            j = 0;
            while (clazz = classes[j++]) {
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            }
            finalValue = jQuery.trim(cur);
            if (curValue !== finalValue) {
              jQuery.attr(elem, "class", finalValue);
            }
          }
        }
      }
      return this;
    },
    toggleClass: function(value, stateVal) {
      var type = typeof value;
      if (typeof stateVal === "boolean" && type === "string") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      if (jQuery.isFunction(value)) {
        return this.each(function(i2) {
          jQuery(this).toggleClass(
            value.call(this, i2, getClass(this), stateVal),
            stateVal
          );
        });
      }
      return this.each(function() {
        var className, i2, self, classNames;
        if (type === "string") {
          i2 = 0;
          self = jQuery(this);
          classNames = value.match(rnotwhite) || [];
          while (className = classNames[i2++]) {
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        } else if (value === void 0 || type === "boolean") {
          className = getClass(this);
          if (className) {
            jQuery._data(this, "__className__", className);
          }
          jQuery.attr(
            this,
            "class",
            className || value === false ? "" : jQuery._data(this, "__className__") || ""
          );
        }
      });
    },
    hasClass: function(selector) {
      var className, elem, i2 = 0;
      className = " " + selector + " ";
      while (elem = this[i2++]) {
        if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  jQuery.each(
    "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(i2, name) {
      jQuery.fn[name] = function(data, fn) {
        return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
      };
    }
  );
  jQuery.fn.extend({
    hover: function(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  var location = window2.location;
  var nonce = jQuery.now();
  var rquery = /\?/;
  var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  jQuery.parseJSON = function(data) {
    if (window2.JSON && window2.JSON.parse) {
      return window2.JSON.parse(data + "");
    }
    var requireNonComma, depth = null, str = jQuery.trim(data + "");
    return str && !jQuery.trim(str.replace(rvalidtokens, function(token, comma, open, close) {
      if (requireNonComma && comma) {
        depth = 0;
      }
      if (depth === 0) {
        return token;
      }
      requireNonComma = open || comma;
      depth += !close - !open;
      return "";
    })) ? Function("return " + str)() : jQuery.error("Invalid JSON: " + data);
  };
  jQuery.parseXML = function(data) {
    var xml, tmp;
    if (!data || typeof data !== "string") {
      return null;
    }
    try {
      if (window2.DOMParser) {
        tmp = new window2.DOMParser();
        xml = tmp.parseFromString(data, "text/xml");
      } else {
        xml = new window2.ActiveXObject("Microsoft.XMLDOM");
        xml.async = "false";
        xml.loadXML(data);
      }
    } catch (e) {
      xml = void 0;
    }
    if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }
    return xml;
  };
  var rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), ajaxLocation = location.href, ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
  function addToPrefiltersOrTransports(structure) {
    return function(dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }
      var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
      if (jQuery.isFunction(func)) {
        while (dataType = dataTypes[i2++]) {
          if (dataType.charAt(0) === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func);
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {}, seekingTransport = structure === transports;
    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }
  function ajaxExtend(target, src) {
    var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== void 0) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }
    return target;
  }
  function ajaxHandleResponses(s, jqXHR, responses) {
    var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes;
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === void 0) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = dataTypes.shift();
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      prev = current;
      current = dataTypes.shift();
      if (current) {
        if (current === "*") {
          current = prev;
        } else if (prev !== "*" && prev !== current) {
          conv = converters[prev + " " + current] || converters["* " + current];
          if (!conv) {
            for (conv2 in converters) {
              tmp = conv2.split(" ");
              if (tmp[1] === current) {
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                if (conv) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s["throws"]) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }
    return { state: "success", data: response };
  }
  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ajaxLocation,
      type: "GET",
      isLocal: rlocalProtocol.test(ajaxLocParts[1]),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": jQuery.parseJSON,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function(target, settings) {
      return settings ? (
        // Building a settings object
        ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
      ) : (
        // Extending ajaxSettings
        ajaxExtend(jQuery.ajaxSettings, target)
      );
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function(url, options) {
      if (typeof url === "object") {
        options = url;
        url = void 0;
      }
      options = options || {};
      var parts, i2, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function(key) {
          var match;
          if (state === 2) {
            if (!responseHeaders) {
              responseHeaders = {};
              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase()] = match[2];
              }
            }
            match = responseHeaders[key.toLowerCase()];
          }
          return match == null ? null : match;
        },
        // Raw string
        getAllResponseHeaders: function() {
          return state === 2 ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function(name, value) {
          var lname = name.toLowerCase();
          if (!state) {
            name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
            requestHeaders[name] = value;
          }
          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function(type) {
          if (!state) {
            s.mimeType = type;
          }
          return this;
        },
        // Status-dependent callbacks
        statusCode: function(map) {
          var code;
          if (map) {
            if (state < 2) {
              for (code in map) {
                statusCode[code] = [statusCode[code], map[code]];
              }
            } else {
              jqXHR.always(map[jqXHR.status]);
            }
          }
          return this;
        },
        // Cancel the request
        abort: function(statusText) {
          var finalText = statusText || strAbort;
          if (transport) {
            transport.abort(finalText);
          }
          done(0, finalText);
          return this;
        }
      };
      deferred.promise(jqXHR).complete = completeDeferred.add;
      jqXHR.success = jqXHR.done;
      jqXHR.error = jqXHR.fail;
      s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
      if (s.crossDomain == null) {
        parts = rurl.exec(s.url.toLowerCase());
        s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
      }
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (state === 2) {
        return jqXHR;
      }
      fireGlobals = jQuery.event && s.global;
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      }
      s.type = s.type.toUpperCase();
      s.hasContent = !rnoContent.test(s.type);
      cacheURL = s.url;
      if (!s.hasContent) {
        if (s.data) {
          cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
          delete s.data;
        }
        if (s.cache === false) {
          s.url = rts.test(cacheURL) ? (
            // If there is already a '_' parameter, set its value
            cacheURL.replace(rts, "$1_=" + nonce++)
          ) : (
            // Otherwise add one to the end
            cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++
          );
        }
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader(
        "Accept",
        s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
      );
      for (i2 in s.headers) {
        jqXHR.setRequestHeader(i2, s.headers[i2]);
      }
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
        return jqXHR.abort();
      }
      strAbort = "abort";
      for (i2 in { success: 1, error: 1, complete: 1 }) {
        jqXHR[i2](s[i2]);
      }
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (state === 2) {
          return jqXHR;
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = window2.setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          state = 1;
          transport.send(requestHeaders, done);
        } catch (e) {
          if (state < 2) {
            done(-1, e);
          } else {
            throw e;
          }
        }
      }
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess, success, error, response, modified, statusText = nativeStatusText;
        if (state === 2) {
          return;
        }
        state = 2;
        if (timeoutTimer) {
          window2.clearTimeout(timeoutTimer);
        }
        transport = void 0;
        responseHeadersString = headers || "";
        jqXHR.readyState = status > 0 ? 4 : 0;
        isSuccess = status >= 200 && status < 300 || status === 304;
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }
        response = ajaxConvert(s, response, jqXHR, isSuccess);
        if (isSuccess) {
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader("etag");
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }
          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent";
          } else if (status === 304) {
            statusText = "notmodified";
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          error = statusText;
          if (status || !statusText) {
            statusText = "error";
            if (status < 0) {
              status = 0;
            }
          }
        }
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + "";
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = void 0;
        if (fireGlobals) {
          globalEventContext.trigger(
            isSuccess ? "ajaxSuccess" : "ajaxError",
            [jqXHR, s, isSuccess ? success : error]
          );
        }
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
          if (!--jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }
      return jqXHR;
    },
    getJSON: function(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function(url, callback) {
      return jQuery.get(url, void 0, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function(i2, method) {
    jQuery[method] = function(url, data, callback, type) {
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = void 0;
      }
      return jQuery.ajax(jQuery.extend({
        url,
        type: method,
        dataType: type,
        data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery._evalUrl = function(url) {
    return jQuery.ajax({
      url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      "throws": true
    });
  };
  jQuery.fn.extend({
    wrapAll: function(html) {
      if (jQuery.isFunction(html)) {
        return this.each(function(i2) {
          jQuery(this).wrapAll(html.call(this, i2));
        });
      }
      if (this[0]) {
        var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function() {
          var elem = this;
          while (elem.firstChild && elem.firstChild.nodeType === 1) {
            elem = elem.firstChild;
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(html) {
      if (jQuery.isFunction(html)) {
        return this.each(function(i2) {
          jQuery(this).wrapInner(html.call(this, i2));
        });
      }
      return this.each(function() {
        var self = jQuery(this), contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function(html) {
      var isFunction = jQuery.isFunction(html);
      return this.each(function(i2) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i2) : html);
      });
    },
    unwrap: function() {
      return this.parent().each(function() {
        if (!jQuery.nodeName(this, "body")) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    }
  });
  function getDisplay(elem) {
    return elem.style && elem.style.display || jQuery.css(elem, "display");
  }
  function filterHidden(elem) {
    if (!jQuery.contains(elem.ownerDocument || document, elem)) {
      return true;
    }
    while (elem && elem.nodeType === 1) {
      if (getDisplay(elem) === "none" || elem.type === "hidden") {
        return true;
      }
      elem = elem.parentNode;
    }
    return false;
  }
  jQuery.expr.filters.hidden = function(elem) {
    return support.reliableHiddenOffsets() ? elem.offsetWidth <= 0 && elem.offsetHeight <= 0 && !elem.getClientRects().length : filterHidden(elem);
  };
  jQuery.expr.filters.visible = function(elem) {
    return !jQuery.expr.filters.hidden(elem);
  };
  var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (jQuery.isArray(obj)) {
      jQuery.each(obj, function(i2, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(
            prefix + "[" + (typeof v === "object" && v != null ? i2 : "") + "]",
            v,
            traditional,
            add
          );
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.param = function(a, traditional) {
    var prefix, s = [], add = function(key, value) {
      value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
    };
    if (traditional === void 0) {
      traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
    }
    if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      jQuery.each(a, function() {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join("&").replace(r20, "+");
  };
  jQuery.fn.extend({
    serialize: function() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function() {
        var type = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function(i2, elem) {
        var val = jQuery(this).val();
        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val2) {
          return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
        }) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
      }).get();
    }
  });
  jQuery.ajaxSettings.xhr = window2.ActiveXObject !== void 0 ? (
    // Support: IE6-IE8
    function() {
      if (this.isLocal) {
        return createActiveXHR();
      }
      if (document.documentMode > 8) {
        return createStandardXHR();
      }
      return /^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR();
    }
  ) : (
    // For all other browsers, use the standard XMLHttpRequest object
    createStandardXHR
  );
  var xhrId = 0, xhrCallbacks = {}, xhrSupported = jQuery.ajaxSettings.xhr();
  if (window2.attachEvent) {
    window2.attachEvent("onunload", function() {
      for (var key in xhrCallbacks) {
        xhrCallbacks[key](void 0, true);
      }
    });
  }
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  xhrSupported = support.ajax = !!xhrSupported;
  if (xhrSupported) {
    jQuery.ajaxTransport(function(options) {
      if (!options.crossDomain || support.cors) {
        var callback;
        return {
          send: function(headers, complete) {
            var i2, xhr = options.xhr(), id = ++xhrId;
            xhr.open(
              options.type,
              options.url,
              options.async,
              options.username,
              options.password
            );
            if (options.xhrFields) {
              for (i2 in options.xhrFields) {
                xhr[i2] = options.xhrFields[i2];
              }
            }
            if (options.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(options.mimeType);
            }
            if (!options.crossDomain && !headers["X-Requested-With"]) {
              headers["X-Requested-With"] = "XMLHttpRequest";
            }
            for (i2 in headers) {
              if (headers[i2] !== void 0) {
                xhr.setRequestHeader(i2, headers[i2] + "");
              }
            }
            xhr.send(options.hasContent && options.data || null);
            callback = function(_, isAbort) {
              var status, statusText, responses;
              if (callback && (isAbort || xhr.readyState === 4)) {
                delete xhrCallbacks[id];
                callback = void 0;
                xhr.onreadystatechange = jQuery.noop;
                if (isAbort) {
                  if (xhr.readyState !== 4) {
                    xhr.abort();
                  }
                } else {
                  responses = {};
                  status = xhr.status;
                  if (typeof xhr.responseText === "string") {
                    responses.text = xhr.responseText;
                  }
                  try {
                    statusText = xhr.statusText;
                  } catch (e) {
                    statusText = "";
                  }
                  if (!status && options.isLocal && !options.crossDomain) {
                    status = responses.text ? 200 : 404;
                  } else if (status === 1223) {
                    status = 204;
                  }
                }
              }
              if (responses) {
                complete(status, statusText, responses, xhr.getAllResponseHeaders());
              }
            };
            if (!options.async) {
              callback();
            } else if (xhr.readyState === 4) {
              window2.setTimeout(callback);
            } else {
              xhr.onreadystatechange = xhrCallbacks[id] = callback;
            }
          },
          abort: function() {
            if (callback) {
              callback(void 0, true);
            }
          }
        };
      }
    });
  }
  function createStandardXHR() {
    try {
      return new window2.XMLHttpRequest();
    } catch (e) {
    }
  }
  function createActiveXHR() {
    try {
      return new window2.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
    }
  }
  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  });
  jQuery.ajaxPrefilter("script", function(s) {
    if (s.cache === void 0) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = "GET";
      s.global = false;
    }
  });
  jQuery.ajaxTransport("script", function(s) {
    if (s.crossDomain) {
      var script, head = document.head || jQuery("head")[0] || document.documentElement;
      return {
        send: function(_, callback) {
          script = document.createElement("script");
          script.async = true;
          if (s.scriptCharset) {
            script.charset = s.scriptCharset;
          }
          script.src = s.url;
          script.onload = script.onreadystatechange = function(_2, isAbort) {
            if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
              script.onload = script.onreadystatechange = null;
              if (script.parentNode) {
                script.parentNode.removeChild(script);
              }
              script = null;
              if (!isAbort) {
                callback(200, "success");
              }
            }
          };
          head.insertBefore(script, head.firstChild);
        },
        abort: function() {
          if (script) {
            script.onload(void 0, true);
          }
        }
      };
    }
  });
  var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
      this[callback] = true;
      return callback;
    }
  });
  jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
    var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
    if (jsonProp || s.dataTypes[0] === "jsonp") {
      callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      }
      s.converters["script json"] = function() {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }
        return responseContainer[0];
      };
      s.dataTypes[0] = "json";
      overwritten = window2[callbackName];
      window2[callbackName] = function() {
        responseContainer = arguments;
      };
      jqXHR.always(function() {
        if (overwritten === void 0) {
          jQuery(window2).removeProp(callbackName);
        } else {
          window2[callbackName] = overwritten;
        }
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = void 0;
      });
      return "script";
    }
  });
  jQuery.parseHTML = function(data, context, keepScripts) {
    if (!data || typeof data !== "string") {
      return null;
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    context = context || document;
    var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }
    return jQuery.merge([], parsed.childNodes);
  };
  var _load = jQuery.fn.load;
  jQuery.fn.load = function(url, params, callback) {
    if (typeof url !== "string" && _load) {
      return _load.apply(this, arguments);
    }
    var selector, type, response, self = this, off = url.indexOf(" ");
    if (off > -1) {
      selector = jQuery.trim(url.slice(off, url.length));
      url = url.slice(0, off);
    }
    if (jQuery.isFunction(params)) {
      callback = params;
      params = void 0;
    } else if (params && typeof params === "object") {
      type = "POST";
    }
    if (self.length > 0) {
      jQuery.ajax({
        url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function(responseText) {
        response = arguments;
        self.html(selector ? (
          // If a selector was specified, locate the right elements in a dummy div
          // Exclude scripts to avoid IE 'Permission Denied' errors
          jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector)
        ) : (
          // Otherwise use the full result
          responseText
        ));
      }).always(callback && function(jqXHR, status) {
        self.each(function() {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }
    return this;
  };
  jQuery.each([
    "ajaxStart",
    "ajaxStop",
    "ajaxComplete",
    "ajaxError",
    "ajaxSuccess",
    "ajaxSend"
  ], function(i2, type) {
    jQuery.fn[type] = function(fn) {
      return this.on(type, fn);
    };
  });
  jQuery.expr.filters.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
  }
  jQuery.offset = {
    setOffset: function(elem, options, i2) {
      var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
      if (position === "static") {
        elem.style.position = "relative";
      }
      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (jQuery.isFunction(options)) {
        options = options.call(elem, i2, jQuery.extend({}, curOffset));
      }
      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }
      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }
      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    offset: function(options) {
      if (arguments.length) {
        return options === void 0 ? this : this.each(function(i2) {
          jQuery.offset.setOffset(this, options, i2);
        });
      }
      var docElem, win, box = { top: 0, left: 0 }, elem = this[0], doc = elem && elem.ownerDocument;
      if (!doc) {
        return;
      }
      docElem = doc.documentElement;
      if (!jQuery.contains(docElem, elem)) {
        return box;
      }
      if (typeof elem.getBoundingClientRect !== "undefined") {
        box = elem.getBoundingClientRect();
      }
      win = getWindow(doc);
      return {
        top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
        left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
      };
    },
    position: function() {
      if (!this[0]) {
        return;
      }
      var offsetParent, offset, parentOffset = { top: 0, left: 0 }, elem = this[0];
      if (jQuery.css(elem, "position") === "fixed") {
        offset = elem.getBoundingClientRect();
      } else {
        offsetParent = this.offsetParent();
        offset = this.offset();
        if (!jQuery.nodeName(offsetParent[0], "html")) {
          parentOffset = offsetParent.offset();
        }
        parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
        parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
      }
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    offsetParent: function() {
      return this.map(function() {
        var offsetParent = this.offsetParent;
        while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || documentElement;
      });
    }
  });
  jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
    var top = /Y/.test(prop);
    jQuery.fn[method] = function(val) {
      return access(this, function(elem, method2, val2) {
        var win = getWindow(elem);
        if (val2 === void 0) {
          return win ? prop in win ? win[prop] : win.document.documentElement[method2] : elem[method2];
        }
        if (win) {
          win.scrollTo(
            !top ? val2 : jQuery(win).scrollLeft(),
            top ? val2 : jQuery(win).scrollTop()
          );
        } else {
          elem[method2] = val2;
        }
      }, method, val, arguments.length, null);
    };
  });
  jQuery.each(["top", "left"], function(i2, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(
      support.pixelPosition,
      function(elem, computed) {
        if (computed) {
          computed = curCSS(elem, prop);
          return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
        }
      }
    );
  });
  jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
    jQuery.each(
      { padding: "inner" + name, content: type, "": "outer" + name },
      function(defaultExtra, funcName) {
        jQuery.fn[funcName] = function(margin, value) {
          var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
          return access(this, function(elem, type2, value2) {
            var doc;
            if (jQuery.isWindow(elem)) {
              return elem.document.documentElement["client" + name];
            }
            if (elem.nodeType === 9) {
              doc = elem.documentElement;
              return Math.max(
                elem.body["scroll" + name],
                doc["scroll" + name],
                elem.body["offset" + name],
                doc["offset" + name],
                doc["client" + name]
              );
            }
            return value2 === void 0 ? (
              // Get width or height on the element, requesting but not forcing parseFloat
              jQuery.css(elem, type2, extra)
            ) : (
              // Set width or height on the element
              jQuery.style(elem, type2, value2, extra)
            );
          }, type, chainable ? margin : void 0, chainable, null);
        };
      }
    );
  });
  jQuery.fn.extend({
    bind: function(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function(selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  });
  jQuery.fn.size = function() {
    return this.length;
  };
  jQuery.fn.andSelf = jQuery.fn.addBack;
  if (typeof define === "function" && define.amd) {
    define("jquery", [], function() {
      return jQuery;
    });
  }
  var _jQuery = window2.jQuery, _$ = window2.$;
  jQuery.noConflict = function(deep) {
    if (window2.$ === jQuery) {
      window2.$ = _$;
    }
    if (deep && window2.jQuery === jQuery) {
      window2.jQuery = _jQuery;
    }
    return jQuery;
  };
  if (!noGlobal) {
    window2.jQuery = window2.$ = jQuery;
  }
  return jQuery;
});
