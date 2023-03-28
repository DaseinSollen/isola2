/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
(function(window2, document2) {
  var version = "3.7.3";
  var options = window2.html5 || {};
  var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
  var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
  var supportsHtml5Styles;
  var expando = "_html5shiv";
  var expanID = 0;
  var expandoData = {};
  var supportsUnknownElements;
  (function() {
    try {
      var a = document2.createElement("a");
      a.innerHTML = "<xyz></xyz>";
      supportsHtml5Styles = "hidden" in a;
      supportsUnknownElements = a.childNodes.length == 1 || function() {
        document2.createElement("a");
        var frag = document2.createDocumentFragment();
        return typeof frag.cloneNode == "undefined" || typeof frag.createDocumentFragment == "undefined" || typeof frag.createElement == "undefined";
      }();
    } catch (e) {
      supportsHtml5Styles = true;
      supportsUnknownElements = true;
    }
  })();
  function addStyleSheet(ownerDocument, cssText) {
    var p = ownerDocument.createElement("p"), parent = ownerDocument.getElementsByTagName("head")[0] || ownerDocument.documentElement;
    p.innerHTML = "x<style>" + cssText + "</style>";
    return parent.insertBefore(p.lastChild, parent.firstChild);
  }
  function getElements() {
    var elements = html5.elements;
    return typeof elements == "string" ? elements.split(" ") : elements;
  }
  function addElements(newElements, ownerDocument) {
    var elements = html5.elements;
    if (typeof elements != "string") {
      elements = elements.join(" ");
    }
    if (typeof newElements != "string") {
      newElements = newElements.join(" ");
    }
    html5.elements = elements + " " + newElements;
    shivDocument(ownerDocument);
  }
  function getExpandoData(ownerDocument) {
    var data = expandoData[ownerDocument[expando]];
    if (!data) {
      data = {};
      expanID++;
      ownerDocument[expando] = expanID;
      expandoData[expanID] = data;
    }
    return data;
  }
  function createElement(nodeName, ownerDocument, data) {
    if (!ownerDocument) {
      ownerDocument = document2;
    }
    if (supportsUnknownElements) {
      return ownerDocument.createElement(nodeName);
    }
    if (!data) {
      data = getExpandoData(ownerDocument);
    }
    var node;
    if (data.cache[nodeName]) {
      node = data.cache[nodeName].cloneNode();
    } else if (saveClones.test(nodeName)) {
      node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
    } else {
      node = data.createElem(nodeName);
    }
    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
  }
  function createDocumentFragment(ownerDocument, data) {
    if (!ownerDocument) {
      ownerDocument = document2;
    }
    if (supportsUnknownElements) {
      return ownerDocument.createDocumentFragment();
    }
    data = data || getExpandoData(ownerDocument);
    var clone = data.frag.cloneNode(), i = 0, elems = getElements(), l = elems.length;
    for (; i < l; i++) {
      clone.createElement(elems[i]);
    }
    return clone;
  }
  function shivMethods(ownerDocument, data) {
    if (!data.cache) {
      data.cache = {};
      data.createElem = ownerDocument.createElement;
      data.createFrag = ownerDocument.createDocumentFragment;
      data.frag = data.createFrag();
    }
    ownerDocument.createElement = function(nodeName) {
      if (!html5.shivMethods) {
        return data.createElem(nodeName);
      }
      return createElement(nodeName, ownerDocument, data);
    };
    ownerDocument.createDocumentFragment = Function(
      "h,f",
      "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + // unroll the `createElement` calls
      getElements().join().replace(/[\w\-:]+/g, function(nodeName) {
        data.createElem(nodeName);
        data.frag.createElement(nodeName);
        return 'c("' + nodeName + '")';
      }) + ");return n}"
    )(html5, data.frag);
  }
  function shivDocument(ownerDocument) {
    if (!ownerDocument) {
      ownerDocument = document2;
    }
    var data = getExpandoData(ownerDocument);
    if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
      data.hasCSS = !!addStyleSheet(
        ownerDocument,
        // corrects block display not defined in IE6/7/8/9
        "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
      );
    }
    if (!supportsUnknownElements) {
      shivMethods(ownerDocument, data);
    }
    return ownerDocument;
  }
  var html5 = {
    /**
     * An array or space separated string of node names of the elements to shiv.
     * @memberOf html5
     * @type Array|String
     */
    "elements": options.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
    /**
     * current version of html5shiv
     */
    "version": version,
    /**
     * A flag to indicate that the HTML5 style sheet should be inserted.
     * @memberOf html5
     * @type Boolean
     */
    "shivCSS": options.shivCSS !== false,
    /**
     * Is equal to true if a browser supports creating unknown/HTML5 elements
     * @memberOf html5
     * @type boolean
     */
    "supportsUnknownElements": supportsUnknownElements,
    /**
     * A flag to indicate that the document's `createElement` and `createDocumentFragment`
     * methods should be overwritten.
     * @memberOf html5
     * @type Boolean
     */
    "shivMethods": options.shivMethods !== false,
    /**
     * A string to describe the type of `html5` object ("default" or "default print").
     * @memberOf html5
     * @type String
     */
    "type": "default",
    // shivs the document according to the specified `html5` object options
    "shivDocument": shivDocument,
    //creates a shived element
    createElement,
    //creates a shived documentFragment
    createDocumentFragment,
    //extends list of elements
    addElements
  };
  window2.html5 = html5;
  shivDocument(document2);
  if (typeof module == "object" && module.exports) {
    module.exports = html5;
  }
})(typeof window !== "undefined" ? window : globalThis, document);
