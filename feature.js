;(function () { window.features = []; 

(function () { 
features["DOM.DOMError.exists"] = !!window.DOMError;
}());

(function () { 
features["DOM.CustomEvent.exists"] = !!window.CustomEvent;
}());

(function () { 
var works = true;
try {
    new CustomEvent("click");
} catch (e) {
    works = false;
}
features["DOM.CustomEvent.Constructor"] = works;
}());

(function () { 
var works = false,
    ev,
    detail = {};

try {
    ev = new CustomEvent("click", { 
        bubbles: true, 
        cancelable: true, 
        detail: detail
    });
} catch (e) { /* empty */ }


features["DOM.CustomEvent.detail"] = (ev && ev.detail === detail);
}());

(function () { 
features["DOM.EventTarget.addEventListener"] = !!document.addEventListener;
}());

(function () { 
features["DOM.EventTarget.removeEventListener"] = !!document.removeEventListener;
}());

(function () { 
features["DOM.EventTarget.dispatchEvent"] = !!document.dispatchEvent;
}());

(function () { 
features["DOM.Comment.exists"] = !!(window.Comment);
}());

(function () { 
features["DOM.Text.exists"] = !!(window.Text);
}());

(function () { 
features["DOM.Text.splitText"] = !!(document.createTextNode('foo').splitText);
}());

(function () { 
features["DOM.Text.wholeText"] = !!("wholeText" in document.createTextNode('foo'));
}());

(function () { 
features["DOM.DocumentType.after"] = !!(document.doctype && document.doctype.after);
}());

(function () { 
features["DOM.DocumentType.remove"] = !!(document.doctype && document.doctype.remove);
}());

(function () { 
features["DOM.DocumentType.exists"] = !!(window.DocumentType);
}());

(function () { 
features["DOM.DocumentType.systemId"] = !!("systemId" in document.doctype);
}());

(function () { 
features["DOM.DocumentType.before"] = !!(document.doctype && document.doctype.before);
}());

(function () { 
features["DOM.DocumentType.replace"] = !!(document.doctype && document.doctype.replace);
}());

(function () { 
features["DOM.DocumentType.publicId"] = !!("publicId" in document.doctype);
}());

(function () { 
features["DOM.DocumentType.name"] = !!("name" in document.doctype);
}());

(function () { 
features["DOM.CharacterData.after"] = !!(document.createTextNode('foo').after);
}());

(function () { 
features["DOM.CharacterData.insertData"] = !!(document.createTextNode('foo').insertData);
}());

(function () { 
features["DOM.CharacterData.remove"] = !!(document.createTextNode('foo').remove);
}());

(function () { 
features["DOM.CharacterData.exists"] = !!(window.CharacterData);
}());

(function () { 
features["DOM.CharacterData.replaceData"] = !!(document.createTextNode('foo').replaceData);
}());

(function () { 
features["DOM.CharacterData.data"] = !!("data" in document.createTextNode('foo'));
}());

(function () { 
features["DOM.CharacterData.before"] = !!(document.createTextNode('foo').before);
}());

(function () { 
features["DOM.CharacterData.length"] = !!("length" in document.createTextNode('foo'));
}());

(function () { 
features["DOM.CharacterData.appendData"] = !!(document.createTextNode('foo').appendData);
}());

(function () { 
features["DOM.CharacterData.replace"] = !!(document.createTextNode('foo').replace);
}());

(function () { 
features["DOM.CharacterData.deleteData"] = !!(document.createTextNode('foo').deleteData);
}());

(function () { 
var works = false, p;
try {
    p = document.createProcessingInstruction("xyz", "abc");
} catch (err) { /* false */ }
works = p && ("target" in p);
features["DOM.ProcessingInstruction.target"] = works;
}());

(function () { 
features["DOM.ProcessingInstruction.exists"] = !!(window.ProcessingInstruction);
}());

(function () { 
features["DOM.DOMImplementation.exists"] = !!(window.DOMImplementation);
}());

(function () { 
features["DOM.DOMImplementation.hasFeature"] = !!(document.implementation.hasFeature);
}());

(function () { 
features["DOM.DOMImplementation.createDocumentType"] = !!(document.implementation.createDocumentType);
}());

(function () { 
features["DOM.DOMImplementation.createHTMLDocument"] = !!(document.implementation.createHTMLDocument);
}());

(function () { 
features["DOM.DOMImplementation.createDocument"] = !!(document.implementation.createDocument);
}());

(function () { 
features["DOM.Node.contains"] = !!(document.contains);
}());

(function () { 
var input = document.createElement("input");
features["DOM.Node.nodeName"] = (input.nodeName === "INPUT");
}());

(function () { 
features["DOM.Node.baseURI"] = (document.baseURI === location.href);
}());

(function () { 
features["DOM.Node.compareDocumentPosition"] = 
    !!(document.compareDocumentPosition);
}());

(function () { 
features["DOM.Node.replaceChild"] = !!(document.replaceChild);
}());

(function () { 
features["DOM.Node.exists"] = !!window.Node;
}());

(function () { 
features["DOM.Node.parentNode"] = 
    (document.childNodes[0].parentNode === document);
}());

(function () { 
features["DOM.Node.cloneNode"] = !!(document.cloneNode);
}());

(function () { 
features["DOM.Node.insertBefore"] = !!(document.insertBefore);
}());

(function () { 
features["DOM.Node.lookupPrefix"] = !!(document.lookupPrefix);
}());

(function () { 
features["DOM.Node.isDefaultNamespace"] = !!(document.isDefaultNamespace);
}());

(function () { 
features["DOM.Node.ownerDocument"] = 
    (document.childNodes[0].ownerDocument === document);
}());

(function () { 
features["DOM.Node.lookupNamespaceURI"] = !!(document.lookupNamespaceURI);
}());

(function () { 
features["DOM.Node.lastChild"] = !!(document.lastChild);
}());

(function () { 
features["DOM.Node.normalize"] = !!(document.normalize);
}());

(function () { 
features["DOM.Node.firstChild"] = !!(document.firstChild);
}());

(function () { 
features["DOM.Node.hasChildNodes"] = !!(document.hasChildNodes);
}());

(function () { 
features["DOM.Node.isEqualNode"] = !!(document.isEqualNode);
}());

(function () { 
features["DOM.Node.nodeValue"] = ("nodeValue" in document);
}());

(function () { 
features["DOM.Node.nextSibling"] = ("nextSibling" in document);
}());

(function () { 
features["DOM.Node.appendChild"] = !!(document.appendChild);
}());

(function () { 
features["DOM.Node.removeChild"] = !!(document.removeChild);
}());

(function () { 
features["DOM.Node.textContent"] = ("textContent" in document);
}());

(function () { 
var input = document.createElement("input");
features["DOM.Node.nodeType"] = (input.nodeType === 1);
}());

(function () { 
features["DOM.Node.constants"] = 
    (window.Node && window.Node.DOCUMENT_TYPE_NODE === 10 &&
        window.Node.DOCUMENT_POSITION_CONTAINS === 8);
}());

(function () { 
var node = document.documentElement;
features["DOM.Node.parentElement"] = (node.childNodes[0].parentElement === node);
}());

(function () { 
features["DOM.Node.childNodes"] = !!(document.childNodes);
}());

(function () { 
features["DOM.Node.previousSibling"] = ("previousSibling" in document);
}());

(function () { 
var exception;

try {
    document.appendChild(document);
} catch (error) {
    exception = error;
}

window.features["DOM.DOMException.code"] = (exception.code === 3);

}());

(function () { 
features["DOM.DOMException.exists"] = !!window.DOMException;

}());

(function () { 
features["DOM.DOMException.constants"] = 
    (window.DOMException && window.DOMException.DATA_CLONE_ERR === 25);

}());

(function () { 
features["DOM.Element.append"] = !!(document.documentElement.append);
}());

(function () { 
features["DOM.Element.localName"] = !!("localName" in document.documentElement);
}());

(function () { 
features["DOM.Element.classList"] = !!("classList" in document.documentElement);
}());

(function () { 
features["DOM.Element.children"] = !!("children" in document.documentElement);
}());

(function () { 
features["DOM.Element.after"] = !!(document.documentElement.after);
}());

(function () { 
features["DOM.Element.getAttribute"] = !!(document.documentElement.getAttribute);
}());

(function () { 
features["DOM.Element.remove"] = !!(document.documentElement.remove);
}());

(function () { 
features["DOM.Element.attributes"] = !!("attributes" in document.documentElement);
}());

(function () { 
features["DOM.Element.exists"] = !!(window.Element);
}());

(function () { 
features["DOM.Element.hasAttribute"] = !!(document.documentElement.hasAttribute);
}());

(function () { 
features["DOM.Element.tagName"] = !!("tagName" in document.documentElement);
}());

(function () { 
features["DOM.Element.prefix"] = !!("prefix" in document.documentElement);
}());

(function () { 
features["DOM.Element.nextElementSibling"] = !!("nextElementSibling" in document.documentElement);
}());

(function () { 
features["DOM.Element.namespaceURI"] = !!("namespaceURI" in document.documentElement);
}());

(function () { 
features["DOM.Element.getElementsByTagNameNS"] = !!(document.documentElement.getElementsByTagNameNS);
}());

(function () { 
features["DOM.Element.getElementsByTagName"] = !!(document.documentElement.getElementsByTagName);
}());

(function () { 
features["DOM.Element.removeAttribute"] = !!(document.documentElement.removeAttribute);
}());

(function () { 
features["DOM.Element.lastElementChild"] = !!("lastElementChild" in document.documentElement);
}());

(function () { 
features["DOM.Element.hasAttributeNS"] = !!(document.documentElement.hasAttributeNS);
}());

(function () { 
features["DOM.Element.before"] = !!(document.documentElement.before);
}());

(function () { 
features["DOM.Element.previousElementSibling"] = !!("previousElementSibling" in document.documentElement);
}());

(function () { 
features["DOM.Element.className"] = !!("className" in document.documentElement);
}());

(function () { 
features["DOM.Element.childElementCount"] = !!("childElementCount" in document.documentElement);
}());

(function () { 
features["DOM.Element.id"] = !!("id" in document.documentElement);
}());

(function () { 
features["DOM.Element.replace"] = !!(document.documentElement.replace);
}());

(function () { 
features["DOM.Element.prepend"] = !!(document.documentElement.prepend);
}());

(function () { 
features["DOM.Element.getElementsByClassName"] = !!(document.documentElement.getElementsByClassName);
}());

(function () { 
features["DOM.Element.getAttributeNS"] = !!(document.documentElement.getAttributeNS);
}());

(function () { 
features["DOM.Element.removeAttributeNS"] = !!(document.documentElement.removeAttributeNS);
}());

(function () { 
features["DOM.Element.firstElementChild"] = !!("firstElementChild" in document.documentElement);
}());

(function () { 
features["DOM.Document.createDocumentFragment"] = 
    !!(document.createDocumentFragment);
}());

(function () { 
features["DOM.Document.createTreeWalker"] = !!(document.createTreeWalker);
}());

(function () { 
features["DOM.Document.append"] = !!(document.append);
}());

(function () { 
features["DOM.Document.createElementNS"] = 
    !!(document.createElementNS);
}());

(function () { 
features["DOM.Document.getElementById"] = !!(document.getElementById);
}());

(function () { 
features["DOM.Document.importNode"] = !!(document.importNode);
}());

(function () { 
features["DOM.Document.contentType"] = ("contentType" in document);
}());

(function () { 
features["DOM.Document.createEvent"] = !!(document.createEvent);
}());

(function () { 
features["DOM.Document.exists"] = !!(window.Document);
}());

(function () { 
features["DOM.Document.createTextNode"] = 
    !!(document.createTextNode);
}());

(function () { 
features["DOM.Document.implementation"] = ("implementation" in document);
}());

(function () { 
features["DOM.Document.getElementsByTagNameNS"] =
    !!(document.getElementsByTagNameNS);
}());

(function () { 
features["DOM.Document.characterSet"] = ("characterSet" in document)
}());

(function () { 
features["DOM.Document.getElementsByTagName"] = 
    !!(document.getElementsByTagName);
}());

(function () { 
features["DOM.Document.documentURI"] = ("documentURI" in document);
}());

(function () { 
features["DOM.Document.documentElement"] = ("documentElement" in document)
}());

(function () { 
features["DOM.Document.createComment"] = 
    !!(document.createComment);
}());

(function () { 
features["DOM.Document.adoptNode"] = !!(document.adoptNode);
}());

(function () { 
features["DOM.Document.createRange"] = !!(document.createRange);
}());

(function () { 
features["DOM.Document.createNodeIterator"] = !!(document.createNodeIterator);
}());

(function () { 
features["DOM.Document.doctype"] = ("doctype" in document);
}());

(function () { 
features["DOM.Document.createProcessingInstruction"] = 
    !!(document.createProcessingInstruction);
}());

(function () { 
features["DOM.Document.prepend"] = !!(document.prepend);
}());

(function () { 
features["DOM.Document.URL"] = ("URL" in document);
}());

(function () { 
features["DOM.Document.getElementsByClassName"] =
    !!(document.getElementsByClassName);
}());

(function () { 
features["DOM.Document.createElement"] = 
    !!(document.createElement);
}());

(function () { 
features["DOM.Document.compatMode"] = ("compatMode" in document);
}());

(function () { 
features["DOM.DocumentFragment.append"] = !!(document.createDocumentFragment().append);
}());

(function () { 
features["DOM.DocumentFragment.exists"] = !!(window.DocumentFragment);
}());

(function () { 
features["DOM.DocumentFragment.prepend"] = !!(document.createDocumentFragment().prepend);
}());

(function () { 
features["DOM.Attr.localName"] = !!("localName" in document.documentElement.attributes[0]);
}());

(function () { 
features["DOM.Attr.exists"] = !!(window.Attr);
}());

(function () { 
features["DOM.Attr.prefix"] = !!("prefix" in document.documentElement.attributes[0]);
}());

(function () { 
features["DOM.Attr.namespaceURI"] = !!("namespaceURI" in document.documentElement.attributes[0]);
}());

(function () { 
features["DOM.Attr.value"] = !!("value" in document.documentElement.attributes[0]);
}());

(function () { 
features["DOM.Attr.name"] = !!("name" in document.documentElement.attributes[0]);
}());

(function () { 
features["DOM.Event.initEvent"] = !!document.createEvent("Event").initEvent;
}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.bubbles"] = (event && event.bubbles);
};
input.click();
}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.cancelable"] = (event && event.cancelable);
};
input.click();
}());

(function () { 
var div = document.createElement("div"),
    input = document.createElement("input");

div.appendChild(input);
div.onclick = function (event) {
    features["DOM.Event.target"] = (event && event.target === input);
}
input.click();
}());

(function () { 
var works = true;
try {
    new Event("click");
} catch (e) {
    works = false;
}
features["DOM.Event.Constructor"] = works;
}());

(function () { 
features["DOM.Event.exists"] = !!window.Event;

}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.preventDefault"] = (event && !!event.preventDefault);
};
input.click();
}());

(function () { 
var div = document.createElement("div"),
    input = document.createElement("input");

div.appendChild(input);
div.onclick = function (event) {
    features["DOM.Event.currentTarget"] = (event && event.currentTarget === div);
}
input.click();
}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.isTrusted"] = 
        (event && event.isTrusted === false);
};
input.click();
}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.stopImmediatePropagation"] = 
        (event && !!event.stopImmediatePropagation);
};
input.click();
}());

(function () { 
var input = document.createElement("input");

input.onclick = function (event) {
    features["DOM.Event.type"] = (event && event.type === "click");
};

input.click();
}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.stopPropagation"] = (event && !!event.stopPropagation);
};
input.click();
}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.timeStamp"] = (event && !!event.timeStamp);
};
input.click();
}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.defaultPrevented"] = 
        (event && event.defaultPrevented === false);
};
input.click();
}());

(function () { 
var input = document.createElement("input");

input.onclick = function (event) {
    features["DOM.Event.eventPhase"] = (event && event.eventPhase === 2);
}
input.click();
}());

(function () { 
features["DOM.Event.constants"] = (window.Event && window.Event.AT_TARGET === 2);
}());


}())