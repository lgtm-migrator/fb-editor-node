!function(e){var t={};function a(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=20)}({20:function(e,t){function a(e,t,a){var n=[];function c(e,t){var n=e;if(a&&t){for(var c;!c&&n.parentNode;)(n=n.parentNode)&&n.className&&n.className.includes(a)&&(c=!0);c||(n=void 0)}return n}function o(e,a){var n=c(e,a);n&&n.classList.add(t)}function i(e,a){var n=c(e,a);n&&n.classList.remove(t)}e.forEach((function(e){e.classList.contains("fb-mode-edit")||(e.addEventListener("mouseover",(function(a){var c=document.querySelector(".".concat(t));c&&(n.push(c),i(c)),o(e,!0),a.stopPropagation()})),e.addEventListener("mouseout",(function(t){i(e,!0);var a=n.shift();a&&o(a),t.stopPropagation()})))}))}Array.from(document.querySelectorAll(".fb-block-date")).forEach((function(e){var t=e.getAttribute("data-block-id"),a=e.querySelector("legend");a.setAttribute("data-block-id",t),a.setAttribute("data-block-property","label")})),Array.from(document.querySelectorAll("details")).forEach((function(e){e.setAttribute("open",!0);var t=e.getAttribute("data-block-id"),a=e.querySelector("summary");a.setAttribute("data-block-id",t),a.setAttribute("data-block-property","summary");var n=e.querySelector(".govuk-details__text");n.setAttribute("data-block-id",t),n.setAttribute("data-block-property","html")})),Array.from(document.querySelectorAll(".fb-block--add")).forEach((function(e){e.href.match(/\/items\/edit$/)&&("select"===e.parentElement.previousElementSibling.dataset.blockType&&e.setAttribute("href",e.href.replace(/\/items\/edit$/,"/items")))}));var n=Array.from(document.querySelectorAll("[data-block-id]"));n.forEach((function(e,t,a){if(!e.parentElement||"SELECT"!==e.parentElement.tagName){var n=e,c=e.getAttribute("data-block-id");if("undefined"!==c){var o=e.getAttribute("data-block-type")||"",i=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=e.getAttribute("data-block-property".concat(i));if(!i||r){if("-class"===i){var l=r.split(":");r=l[1];var s=l[0];e=e.querySelector(".".concat(s))}var p=c+(r?"/".concat(r):""),f=!r;if("actions"===c){f=!1;var d=document.querySelector('[data-block-type="page"]');p="".concat(d.dataset.blockId,"/actionType")}var u=f?"{}":"✎",b=f?" fb-block-instance":" fb-block-property",m="afterbegin";"input"===e.localName&&(e=e.parentNode,a[t]=e),"fieldset"===e.localName&&(e=e.querySelector("legend")||e,a[t]=e);var k="";if(f){var v="page"!==o?"component":"page",y=e.getAttribute("data-block-steps"),h="page.start"===e.getAttribute("data-block-pagetype"),g="page"===v;"page.singlequestion"===e.getAttribute("data-block-pagetype")&&(g=!1),(e.classList.contains("fb-block-group")||e.classList.contains("fb-block-section")||e.classList.contains("fb-block-fieldset"))&&(g=!0);var S=o.charAt(0).toUpperCase()+o.slice(1),A=n.getAttribute("value")||n.querySelector('[data-block-id="'.concat(c,'"] > [value]')),E="radio"===n.getAttribute("type"),q=!E&&(n.getAttribute("name")||n.querySelector('[data-block-id="'.concat(c,'"] > [name]')));if(k='<div class="fb-block-instance-properties"><span class="fb-block-instance-properties-heading fb-block-edit">'.concat(u,"</span><ul>"),k+='<li class="fb-block-instance-properties-type-item"><span class="fb-block-instance-properties-type">'.concat(S,"</span></li>"),q||"radios"===o||"date"===o||"fileupload"===o){var x='<li><a href="/admin/instance/'.concat(p,'/name">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> name</a></li>");k+=x}else if(E){var _='<li><a href="/admin/instance/'.concat(p,'/value">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> value</a></li>");k+=_}else if(A){var L='<li><a href="/admin/instance/'.concat(p,'/value">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> value</a></li>");k+=L}if("fileupload"===o){var N='<li><a href="/admin/instance/'.concat(p,'/maxSize">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> max size</a></li>");k+=N;var P='<li><a href="/admin/instance/'.concat(p,'/accept">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> accepted types</a></li>");k+=P;var j='<li><a href="/admin/instance/'.concat(p,'/maxFiles">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> max files</a></li>");k+=j;var w='<li><a href="/admin/instance/'.concat(p,'/minFiles">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> min files</a></li>");k+=w}if(q||"radios"===o||"checkboxes"===o||"date"===o||"fieldset"===o||"textarea"===o){if("fieldset"!==o){var O='<li><a href="/admin/instance/'.concat(p,'/validation/required">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> required</a></li>");k+=O}if("fieldset"!==o&&"radios"!==o&&"checkboxes"!==o){var T='<li><a href="/admin/instance/validation/'.concat(p,'">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> validation</a></li>");k+=T}if("fileupload"!==o&&"radios"!==o&&"checkboxes"!==o){var M='<li><a href="/admin/instance/'.concat(p,'/repeatable">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> repeatability</a></li>");k+=M}}if("page"!==o||"/edit"!==document.location.pathname){var C='<li><a href="/admin/instance/'.concat(p,'/show">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> visibility</a></li>");k+=C}if(g){var D='<li><a href="/admin/instance/'.concat(p,'/components">Reorder <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> components</a></li>");k+=D}if("page"===v){if(y){var $='<li><a href="/admin/instance/'.concat(p,'/steps">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> steps</a></li>");h||($+='<li><a href="/admin/instance/'.concat(p,'/showSteps">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> steps visibility</a></li>"),$+='<li><a href="/admin/instance/'.concat(p,'/stepsHeading">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> steps heading</a></li>")),k+=$}else{var I='<li><a href="/admin/instance/'.concat(p,'/enableSteps">Enable <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> steps</a></li>");k+=I}h||(k+='<li><a href="/admin/instance/'.concat(p,'/url">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> URL</a></li>"))}else if(o.match(/^(text|textarea|number|select|autocomplete)$/)){var z='<li><a href="/admin/instance/'.concat(p,'/widthClassInput">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> width</a></li>");k+=z}if(o.match(/^(radio|checkbox)$/)){var F='<li><a href="/admin/new/'.concat(p,'/conditionalComponent">Set <span class="fb-block-instance-property-link">').concat(o," ").concat(v,"</span> conditional component</a></li>");k+=F}var H='<li class="fb-block-instance--all"><a href="/admin/instance/'.concat(p,'">View all <span class="fb-block-instance-property-link">').concat(o,"</span> properties</a></li>");if(k+=H,"page"!==o||"/edit"!==document.location.pathname){var R='<li class="fb-block-instance--delete"><form method="post" action="/admin/delete/'.concat(c,'" class="fb-instance--delete" data-delete-type="').concat(o,'"><button>Delete ').concat(v,' <span class="fb-block-instance-property-link">').concat(o,"</span></button></form></li>");k+=R}k+="</ul></div>"}else k='<div class="fb-block-edit-container'.concat(b,'"><a href="/admin/instance/').concat(p,'" class="fb-block-edit" title="Edit ').concat(p,'"><span>').concat(u,"</span></a></div>");e.insertAdjacentHTML(m,k)}};i(n),i(n,"-instance"),i(n,"-class")}}}));var c=Array.from(document.querySelectorAll(".fb-page-steps"));a(n,"fb-hover"),a(c,"fb-step-highlight","fb-step-container"),Array.from(document.querySelectorAll(".fb-instance--delete")).forEach((function(e){e.addEventListener("click",(function(e){!0!==confirm("Are you sure you want to delete?")&&e.preventDefault()}))}));var o=function(){Array.from(document.querySelectorAll(".govuk-radios__conditional, .govuk-checkboxes__conditional")).forEach((function(e){e.classList.remove("govuk-radios__conditional--hidden"),e.classList.remove("govuk-checkboxes__conditional--hidden")}))};setInterval(o,10),Array.from(document.querySelectorAll(".govuk-radios__input, .govuk-checkboxes__input, [aria-controls]")).forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),o();var t=e.target.parentElement;t&&t.className.includes("fb-block-edit")&&(document.location.href=t.href)}))})),Array.from(document.querySelectorAll(".govuk-input, .govuk-textarea")).forEach((function(e){e.addEventListener("focus",(function(){e.blur()}))}));var i=document.querySelector(".govuk-back-link");i&&i.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation()}))}});
//# sourceMappingURL=page.editable-0.0.189.js.map