!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("singleline"),require("fbjs/lib/emptyFunction"),require("fbjs/lib/invariant"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","singleline","fbjs/lib/emptyFunction","fbjs/lib/invariant","react-dom"],t):"object"==typeof exports?exports.ReactResponsiveSelect=t(require("react"),require("singleline"),require("fbjs/lib/emptyFunction"),require("fbjs/lib/invariant"),require("react-dom")):e.ReactResponsiveSelect=t(e.react,e.singleline,e["fbjs/lib/emptyFunction"],e["fbjs/lib/invariant"],e["react-dom"])}(this,function(e,t,n,r,l){return function(e){function t(r){if(n[r])return n[r].exports;var l=n[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(7)()},function(e,t){e.exports=require("singleline")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.INITIALISE="INITIALISE",t.SET_IS_DRAGGING="SET_IS_DRAGGING",t.SET_OPTIONS_PANEL_OPEN="SET_OPTIONS_PANEL_OPEN",t.SET_OPTIONS_PANEL_CLOSED="SET_OPTIONS_PANEL_CLOSED",t.SET_SINGLESELECT_OPTIONS="SET_SINGLESELECT_OPTIONS",t.SET_MULTISELECT_OPTIONS="SET_MULTISELECT_OPTIONS",t.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION="SET_OPTIONS_PANEL_CLOSED_NO_SELECTION",t.SET_OPTIONS_PANEL_CLOSED_ONBLUR="SET_OPTIONS_PANEL_CLOSED_ONBLUR",t.SET_NEXT_SELECTED_INDEX="SET_NEXT_SELECTED_INDEX",t.SET_NEXT_SELECTED_INDEX_ALPHA_NUMERIC="SET_NEXT_SELECTED_INDEX_ALPHA_NUMERIC"},function(e,t,n){"use strict";function r(e,t){var n=e.length;if(n!==t.length)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function e(t,n,r){null===t&&(t=Function.prototype);var l=Object.getOwnPropertyDescriptor(t,n);if(void 0===l){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in l)return l.value;var o=l.get;if(void 0!==o)return o.call(r)},u=n(24),s=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){return function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),o(t,[{key:"scrollIntoView",value:function(){var e=this.props,t=e.scrollIntoViewElementSelector,n=e.scrollIntoViewScrollPaneRef,r=e.isDragging;this.scrollPaneDOM=this.scrollPaneDOM||n(),this.elementDOM=this.elementDOM||s.default.findDOMNode(this);var l=this.elementDOM.classList.contains(t);if(!0===r&&(this.dontScrollIntoView=!0),!this.dontScrollIntoView&&l){var i=this.scrollPaneDOM.getBoundingClientRect().top,o=this.scrollPaneDOM.getBoundingClientRect().bottom,a=this.elementDOM.getBoundingClientRect().top;this.elementDOM.getBoundingClientRect().bottom>o&&(this.scrollPaneDOM.scrollTop+=this.elementDOM.getBoundingClientRect().height),a<i&&(this.scrollPaneDOM.scrollTop-=this.elementDOM.getBoundingClientRect().height),"0"===this.elementDOM.getAttribute("data-key")&&(this.scrollPaneDOM.scrollTop=0)}}},{key:"componentDidUpdate",value:function(){return a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidUpdate",this)&&a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidUpdate",this).call(this),this.scrollIntoView()}},{key:"render",value:function(){return a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"render",this).call(this)}}]),t}(e)};t.default=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),d=n(1),f=r(d),p=n(3),S=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(p),_=n(11),O=r(_),h=n(12),m=r(h),b=n(22),y=r(b),v=n(23),E=r(v),g=n(26),I=r(g),x=n(28),P=r(x),T=function(e){function t(){var e,n,r,o;l(this,t);for(var a=arguments.length,u=Array(a),s=0;s<a;s++)u[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state=h.initialState,r.reducer=m.default,r.handleBlur=r.handleBlur.bind(r),r.handleTouchMove=r.handleTouchMove.bind(r),r.handleTouchStart=r.handleTouchStart.bind(r),r.handleClick=r.handleClick.bind(r),r.handleKeyEvent=r.handleKeyEvent.bind(r),r.optionNodesLength=0,r.listeners={},o=n,i(r,o)}return o(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.options,n=e.selectedValue,r=e.selectedValues,l=e.name,i=e.multiselect,o=e.disabled;this.updateState({type:S.INITIALISE,value:{options:t,selectedValue:n,selectedValues:r,name:l,multiselect:i}}),this.optionNodesLength=t.length,o||(this.listeners={onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleClick,onBlur:this.handleBlur,onMouseDown:this.handleClick,onKeyDown:this.handleKeyEvent})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,r=n.singleSelectSelectedOption,l=n.multiSelectSelectedOptions,i=n.isMultiSelect,o=n.altered,a=this.props.onChange;if(i){var u=t.multiSelectSelectedOptions.options,s=l.options;if(u.length&&(u.length!==s.length||u[0].value!==s[0].value))return a({options:l.options.map(function(e){return{name:e.name,text:e.text,value:e.value}}),altered:o})}else{var c=t.singleSelectSelectedOption.value,d=r.value;if(c&&c!==d)return a({name:r.name,text:r.text,value:r.value,altered:o})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefix,r=t.caretIcon,l=t.customLabelRenderer,i=t.disabled,o=this.state,u=o.altered,s=o.singleSelectInitialIndex,d=o.isOptionsPanelOpen,f=o.isDragging,p=o.multiSelectInitialSelectedIndexes,S=o.multiSelectSelectedIndexes,_=o.multiSelectSelectedOptions,O=o.name,h=o.nextPotentialSelectionIndex,m=o.options,b=o.singleSelectSelectedIndex,y=o.singleSelectSelectedOption;if(o.isMultiSelect){var v=l&&l(_)||!1;return c.default.createElement("div",a({className:"rrs__select",ref:function(t){e.selectBox=t}},this.listeners),c.default.createElement(I.default,{disabled:i,altered:u,isDragging:f,caretIcon:r,customLabelText:v,prefix:n,name:O,multiSelectInitialSelectedIndexes:p,multiSelectSelectedOptions:_,multiSelectSelectedIndexes:S,nextPotentialSelectionIndex:h,isOptionsPanelOpen:d,options:m}))}var g=l&&l(y)||!1;return c.default.createElement("div",a({className:"rrs__select",ref:function(t){e.selectBox=t}},this.listeners),c.default.createElement(E.default,{disabled:i,altered:u,isDragging:f,singleSelectInitialIndex:s,caretIcon:r,prefix:n,name:O,customLabelText:g,singleSelectSelectedOption:y,singleSelectSelectedIndex:b,nextPotentialSelectionIndex:h,isOptionsPanelOpen:d,options:m}))}},{key:"updateState",value:function(e){var t=this.reducer(this.state,e);this.setState(t),(0,P.default)(this.props.name,e,t)}},{key:"handleTouchStart",value:function(){this.updateState({type:S.SET_IS_DRAGGING,boolean:!1})}},{key:"handleTouchMove",value:function(){this.updateState({type:S.SET_IS_DRAGGING,boolean:!0})}},{key:"handleKeyEvent",value:function(e){var t=this.state,n=t.isMultiSelect,r=t.isOptionsPanelOpen;switch(this.preventDefaultForKeyCodes([O.default.ENTER,O.default.SPACE,O.default.ESCAPE,O.default.UP,O.default.DOWN],e),e.keyCode){case O.default.TAB:return r&&(e.preventDefault(),n&&(this.updateState({type:S.SET_OPTIONS_PANEL_CLOSED}),this.focusButton())),e;case O.default.ENTER:return this.handleEnterPressed(e);case O.default.SPACE:return r?this.handleClick(e):this.updateState({type:S.SET_OPTIONS_PANEL_OPEN});case O.default.ESCAPE:return this.updateState({type:S.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION}),this.focusButton();case O.default.UP:return this.handleKeyUpOrDownPressed("decrement");case O.default.DOWN:return this.handleKeyUpOrDownPressed("increment")}/^[a-z0-9]+$/.test(e.key)&&this.handleAlphaNumerical(e)}},{key:"handleClick",value:function(e){var t=this.state,n=t.isMultiSelect,r=t.isOptionsPanelOpen;if(!1===t.isDragging)return e.preventDefault(),!(!e||!e.target.classList.contains("rrs__options-container"))||(e.target.classList.contains("rrs__option")?this.updateState({type:n?S.SET_MULTISELECT_OPTIONS:S.SET_SINGLESELECT_OPTIONS,optionIndex:parseFloat(e.target.getAttribute("data-key"))}):(this.updateState({type:r?S.SET_OPTIONS_PANEL_CLOSED:S.SET_OPTIONS_PANEL_OPEN}),this.focusButton()))}},{key:"handleBlur",value:function(e){var t=this.state.isOptionsPanelOpen;if(this.selectBox&&!this.selectBox.contains(e.relatedTarget)&&t)return this.updateState({type:S.SET_OPTIONS_PANEL_CLOSED_ONBLUR})}},{key:"handleAlphaNumerical",value:function(e){var t=this.state.options,n=t.map(function(e){return String(e.text).toLowerCase().charAt(0)}).indexOf(e.key);n>-1&&this.updateState({type:S.SET_NEXT_SELECTED_INDEX_ALPHA_NUMERIC,optionIndex:n})}},{key:"handleEnterPressed",value:function(e){var t=this.state,n=t.isMultiSelect,r=t.isOptionsPanelOpen,l=t.nextPotentialSelectionIndex;return n?this.updateState({type:S.SET_MULTISELECT_OPTIONS,optionIndex:l}):this.updateState({type:S.SET_SINGLESELECT_OPTIONS,optionIndex:l}),r?e.stopPropagation():this.props.onSubmit()}},{key:"handleKeyUpOrDownPressed",value:function(e){var t=this.state,n=t.isOptionsPanelOpen,r=t.nextPotentialSelectionIndex;this.updateState({type:S.SET_NEXT_SELECTED_INDEX,optionIndex:(0,y.default)(e,n,r,this.optionNodesLength)}),!1===n&&this.updateState({type:S.SET_OPTIONS_PANEL_OPEN})}},{key:"preventDefaultForKeyCodes",value:function(e,t){e.forEach(function(e){e===t.keyCode&&t.preventDefault()})}},{key:"focusButton",value:function(){this.selectBox.querySelector(".rrs__select-container").focus()}}]),t}(s.Component);t.default=T,T.propTypes={caretIcon:f.default.oneOfType([f.default.string,f.default.element]),customLabelRenderer:f.default.func,disabled:f.default.bool,multiselect:f.default.bool,name:f.default.string.isRequired,onChange:f.default.func,options:f.default.arrayOf(f.default.shape({text:f.default.string.isRequired,value:f.default.string.isRequired})).isRequired,onSubmit:f.default.func,prefix:f.default.string,selectedValue:f.default.string,selectedValues:f.default.arrayOf(f.default.string.isRequired)}},function(e,t,n){"use strict";var r=n(8),l=n(9),i=n(10);e.exports=function(){function e(e,t,n,r,o,a){a!==i&&l(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t){e.exports=require("fbjs/lib/emptyFunction")},function(e,t){e.exports=require("fbjs/lib/invariant")},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={TAB:9,ENTER:13,SPACE:32,ESCAPE:27,UP:38,DOWN:40}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e){return a({},e,{multiSelectSelectedIndexes:[].concat(l(N.multiSelectSelectedIndexes)),multiSelectSelectedOptions:a({},N.multiSelectSelectedOptions)})}function o(e,t){switch(t.type){case s.INITIALISE:var n=(0,d.default)(t.value.options,t.value.selectedValue),r=(0,p.default)(t.value.options,t.value.selectedValues),l=(0,_.default)(t.value.options,t.value.selectedValues,t.value.name);return a({},e,{isMultiSelect:t.value.multiselect||!1,name:t.value.name,options:t.value.options,altered:!1,singleSelectInitialIndex:n,singleSelectSelectedIndex:n,singleSelectSelectedOption:a({name:t.value.name},t.value.options[n]),nextPotentialSelectionIndex:n,multiSelectInitialSelectedIndexes:r,multiSelectSelectedIndexes:r,multiSelectSelectedOptions:{options:l}});case s.SET_IS_DRAGGING:return a({},e,{isDragging:t.boolean});case s.SET_OPTIONS_PANEL_OPEN:var o=a({},e,{isOptionsPanelOpen:!0,nextPotentialSelectionIndex:e.singleSelectSelectedIndex,singleSelectSelectedOption:a({name:e.name},e.options[e.singleSelectSelectedIndex])});return(0,x.default)(o);case s.SET_OPTIONS_PANEL_CLOSED:var u=a({},e,{isOptionsPanelOpen:!1,singleSelectSelectedIndex:e.nextPotentialSelectionIndex,singleSelectSelectedOption:a({name:e.name},e.options[e.nextPotentialSelectionIndex])});return(0,x.default)(u);case s.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION:case s.SET_OPTIONS_PANEL_CLOSED_ONBLUR:return a({},e,{isOptionsPanelOpen:!1});case s.SET_NEXT_SELECTED_INDEX:return a({},e,{nextPotentialSelectionIndex:t.optionIndex});case s.SET_NEXT_SELECTED_INDEX_ALPHA_NUMERIC:return a({},e,{isOptionsPanelOpen:!0,nextPotentialSelectionIndex:t.optionIndex});case s.SET_SINGLESELECT_OPTIONS:var c=a({},e,{nextPotentialSelectionIndex:t.optionIndex,singleSelectSelectedIndex:t.optionIndex,isOptionsPanelOpen:!1,singleSelectSelectedOption:a({name:e.name},e.options[t.optionIndex])});return(0,x.default)(c);case s.SET_MULTISELECT_OPTIONS:var f=0===e.multiSelectSelectedIndexes[0]&&1===e.multiSelectSelectedIndexes.length,S=e.multiSelectSelectedIndexes.length>0&&!f&&0===t.optionIndex,O=f&&0!==t.optionIndex;if(S){var m=(0,T.default)(e);return(0,x.default)(m)}O&&(e=i(e));var y=e.multiSelectSelectedIndexes.indexOf(t.optionIndex),E=a({},e,{nextPotentialSelectionIndex:t.optionIndex,multiSelectSelectedIndexes:-1===y?(0,h.default)(e,t.optionIndex):(0,b.default)(e,y),multiSelectSelectedOptions:-1===y?(0,v.default)(e,t.optionIndex):(0,g.default)(e,y)});return 0===E.multiSelectSelectedOptions.options.length&&(E=(0,T.default)(e)),(0,x.default)(E)}}Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=o;var u=n(3),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(u),c=n(13),d=r(c),f=n(14),p=r(f),S=n(15),_=r(S),O=n(16),h=r(O),m=n(17),b=r(m),y=n(18),v=r(y),E=n(19),g=r(E),I=n(20),x=r(I),P=n(21),T=r(P),N=t.initialState={isMultiSelect:!1,name:void 0,options:[],isDragging:!1,isOptionsPanelOpen:!1,altered:!1,singleSelectInitialIndex:0,singleSelectSelectedIndex:0,singleSelectSelectedOption:{},nextPotentialSelectionIndex:0,multiSelectInitialSelectedIndexes:[0],multiSelectSelectedOptions:{options:[]},multiSelectSelectedIndexes:[]}},function(e,t,n){"use strict";function r(e,t){var n=e.map(function(e){return e.value}).indexOf(t);return n>-1?n:0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.map(function(e,n){return t.some(function(t){return e.value===t})?n:void 0}).filter(function(e){return void 0!==e});return n.length?n:[0]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e,t,n){return t?e.filter(function(e){return t.some(function(t){return t===e.value})}).map(function(e){return l({name:n},e)}):[l({name:n},e[0])]}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){return[].concat(r(e.multiSelectSelectedIndexes),[t])}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){return[].concat(r(e.multiSelectSelectedIndexes.slice(0,t)),r(e.multiSelectSelectedIndexes.slice(t+1)))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){return{options:[].concat(r(e.multiSelectSelectedOptions.options),[i({name:e.name},e.options[t])])}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=l},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){return{options:[].concat(r(e.multiSelectSelectedOptions.options.slice(0,t)),r(e.multiSelectSelectedOptions.options.slice(t+1)))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l},function(e,t,n){"use strict";function r(e){return e.isMultiSelect?!(0,a.default)(e.multiSelectInitialSelectedIndexes,e.multiSelectSelectedIndexes):e.singleSelectSelectedIndex!==e.singleSelectInitialIndex}function l(e){return i({},e,{altered:r(e)})}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.isAltered=r,t.default=l;var o=n(4),a=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,n){"use strict";function r(e){return l({},e,{multiSelectSelectedIndexes:[0],multiSelectSelectedOptions:{options:[l({name:e.name},e.options[0])]},nextPotentialSelectionIndex:0})}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r},function(e,t,n){"use strict";function r(e,t,n,r){return"increment"===e?!1===t?n:n===r-1?0:n+1:"decrement"===e?!1===t?n:0===n?r-1:n-1:void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(1),d=r(c),f=n(2),p=r(f),S=n(5),_=r(S),O=n(25),h=r(O),m=(0,_.default)(h.default),b=function(e){function t(){return l(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),a(t,[{key:"componentDidUpdate",value:function(e){!this.props.isOptionsPanelOpen&&e.isOptionsPanelOpen&&e.singleSelectSelectedIndex!==this.props.singleSelectSelectedIndex&&this.optionsButton.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.altered,r=t.caretIcon,l=t.customLabelText,i=t.disabled,o=t.isOptionsPanelOpen,a=t.isDragging,u=t.name,c=t.nextPotentialSelectionIndex,d=t.options,f=t.prefix,S=t.singleSelectSelectedIndex,_=t.singleSelectSelectedOption;return s.default.createElement("div",null,s.default.createElement("div",{role:"button",tabIndex:"0","aria-haspopup":"true","aria-expanded":""+o,"aria-controls":"rrs-"+u+"-menu",ref:function(t){if(t)return e.optionsButton=t},className:(0,p.default)("\n            rrs__select-container\n            "+(!0===i?"rrs__select-container--disabled":"")+"\n            "+(!0===o?"rrs__options-container--visible":"")+"\n            "+(n?"rrs__has-changed":"")+"\n          ")},l&&s.default.createElement("div",{className:"rrs__label-container"},s.default.createElement("span",{"aria-label":(f?f+" ":"")+_.text+" selected",className:"rrs__label",id:"rrs-"+u+"-label"},l),r&&r),!l&&s.default.createElement("div",{className:"rrs__label-container"},s.default.createElement("span",{"aria-label":(f?f+" ":"")+_.text+" selected",className:"rrs__label",id:"rrs-"+u+"-label"},f&&s.default.createElement("span",null,f),_.text),r&&r),u&&s.default.createElement("input",{type:"hidden",name:u,value:_.value})),s.default.createElement("ul",{id:"rrs-"+u+"-menu","aria-labelledby":"rrs-"+u+"-label",role:"menu",className:"rrs__options-container",ref:function(t){if(t)return e.optionsContainer=t}},d.length>0&&d.map(function(t,n){return s.default.createElement(m,{scrollIntoViewScrollPaneRef:function(){return e.optionsContainer},scrollIntoViewElementSelector:"rrs__option--next-selection",key:n,index:n,isDragging:a,isOptionsPanelOpen:o,option:t,singleSelectSelectedIndex:S,nextPotentialSelectionIndex:c})})))}}]),t}(u.Component);t.default=b,b.propTypes={altered:d.default.bool,caretIcon:d.default.oneOfType([d.default.string,d.default.element]),customLabelText:d.default.oneOfType([d.default.string,d.default.bool,d.default.element]),disabled:d.default.bool,singleSelectInitialIndex:d.default.number,singleSelectSelectedIndex:d.default.number,singleSelectSelectedOption:d.default.shape({text:d.default.string,value:d.default.string}),isDragging:d.default.bool,isOptionsPanelOpen:d.default.bool,name:d.default.string,nextPotentialSelectionIndex:d.default.number,onSubmit:d.default.func,options:d.default.arrayOf(d.default.shape({text:d.default.string.isRequired,value:d.default.string.isRequired})).isRequired,prefix:d.default.string,selectedValue:d.default.string}},function(e,t){e.exports=require("react-dom")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(1),d=r(c),f=n(2),p=r(f),S=function(e){function t(){return l(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),a(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.index,n=e.isOptionsPanelOpen;t===e.nextPotentialSelectionIndex&&n&&this["option_"+t].focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.index,r=t.nextPotentialSelectionIndex,l=t.option,i=t.singleSelectSelectedIndex;return s.default.createElement("li",{role:"menuitem",tabIndex:"-1","data-key":n,ref:function(t){e["option_"+n]=t},className:(0,p.default)("\n          rrs__option\n          "+(i===n?"rrs__option--selected":"")+"\n          "+(r===n?"rrs__option--next-selection":"")+"\n        ")},l.markup||l.text)}}]),t}(u.Component);t.default=S,S.propTypes={index:d.default.number.isRequired,isOptionsPanelOpen:d.default.bool.isRequired,nextPotentialSelectionIndex:d.default.number,option:d.default.shape({text:d.default.string.isRequired,value:d.default.string.isRequired,markup:d.default.element}).isRequired,singleSelectSelectedIndex:d.default.number}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(1),d=r(c),f=n(2),p=r(f),S=n(5),_=r(S),O=n(27),h=r(O),m=n(4),b=r(m),y=(0,_.default)(h.default),v=function(e){function t(){return l(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),a(t,[{key:"getAriaLabel",value:function(){var e=this.props,t=e.multiSelectSelectedOptions,n=e.prefix,r=t.options.length;return(0,p.default)("\n      Checkbox group "+(n?n+" ":"")+" has\n      "+r+" item"+(1===r?"":"s")+" selected.\n      Selected option"+(1===r?"":"s")+" "+(1===r?"is":"are")+"\n      "+t.options.map(function(e){return e.text}).join(" and ")+"\n    ")}},{key:"componentDidUpdate",value:function(e){this.props.isOptionsPanelOpen||!e.isOptionsPanelOpen||(0,b.default)(e.multiSelectSelectedIndexes,this.props.multiSelectSelectedIndexes)||this.optionsButton.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.altered,r=t.caretIcon,l=t.customLabelText,i=t.disabled,o=t.isDragging,a=t.isOptionsPanelOpen,u=t.multiSelectSelectedIndexes,c=t.multiSelectSelectedOptions,d=t.name,f=t.options,S=t.nextPotentialSelectionIndex,_=t.prefix;return s.default.createElement("div",null,s.default.createElement("div",{role:"button",tabIndex:"0","aria-haspopup":"true","aria-expanded":""+a,"aria-controls":"rrs-"+d+"-menu",ref:function(t){if(t)return e.optionsButton=t},className:(0,p.default)("\n            rrs__select-container\n            rrs__select-container--multiselect\n            "+(!0===i?"rrs__select-container--disabled":"")+"\n            "+(!0===a?"rrs__options-container--visible":"")+"\n            "+(n?"rrs__has-changed":"")+"\n          ")},l&&s.default.createElement("div",{className:"rrs__label-container"},s.default.createElement("span",{"aria-label":this.getAriaLabel(),className:"rrs__label",id:"rrs-"+d+"-label"},l),r&&r),!l&&s.default.createElement("div",{className:"rrs__label-container"},s.default.createElement("span",{"aria-label":this.getAriaLabel(),className:"rrs__label",id:"rrs-"+d+"-label"},s.default.createElement("span",{className:"rrs__multiselect__label"},s.default.createElement("span",{className:"rrs__multiselect__label-text"},(_?_+" ":"")+c.options[0].text),c.options.length>1&&s.default.createElement("span",{className:"rrs__multiselect__label-badge"},"+ "+(c.options.length-1)))),r&&r),d&&s.default.createElement("input",{type:"hidden",name:d,value:[c.options.map(function(e){return e.value})].join(",")})),s.default.createElement("ul",{id:"rrs-"+d+"-menu","aria-labelledby":"rrs-"+d+"-label",role:"menu",className:"rrs__options-container",ref:function(t){if(t)return e.optionsContainer=t}},f.length>0&&f.map(function(t,n){return s.default.createElement(y,{scrollIntoViewScrollPaneRef:function(){return e.optionsContainer},scrollIntoViewElementSelector:"rrs__option--next-selection",key:n,index:n,option:t,isDragging:o,isOptionsPanelOpen:a,multiSelectSelectedIndexes:u,nextPotentialSelectionIndex:S})})))}}]),t}(u.Component);t.default=v,v.propTypes={altered:d.default.bool,caretIcon:d.default.oneOfType([d.default.string,d.default.element]),customLabelText:d.default.oneOfType([d.default.string,d.default.bool,d.default.element]),disabled:d.default.bool,multiSelectInitialSelectedIndexes:d.default.arrayOf(d.default.number),multiSelectSelectedIndexes:d.default.arrayOf(d.default.number),multiSelectSelectedOptions:d.default.shape({altered:d.default.bool,options:d.default.arrayOf(d.default.shape({name:d.default.string,text:d.default.string,value:d.default.string,markup:d.default.object}))}),isDragging:d.default.bool,isOptionsPanelOpen:d.default.bool,name:d.default.string,nextPotentialSelectionIndex:d.default.number,onSubmit:d.default.func,options:d.default.arrayOf(d.default.shape({text:d.default.string.isRequired,value:d.default.string.isRequired})).isRequired,prefix:d.default.string}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),c=n(1),d=r(c),f=n(2),p=r(f),S=function(e){function t(){return l(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),a(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.index,n=e.isOptionsPanelOpen;t===e.nextPotentialSelectionIndex&&n&&this["option_"+t].focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.index,r=t.multiSelectSelectedIndexes,l=t.nextPotentialSelectionIndex,i=t.option,o=r.some(function(e){return e===n});return s.default.createElement("li",{role:"checkbox",tabIndex:"-1","aria-checked":o,"aria-label":i.text,"aria-live":"assertive","data-key":n,ref:function(t){e["option_"+n]=t},className:(0,p.default)("\n          rrs__option\n          "+(o?"rrs__option--selected":"")+"\n          "+(l===n?"rrs__option--next-selection":"")+"\n        ")},i.markup||i.text)}}]),t}(u.Component);t.default=S,S.propTypes={index:d.default.number.isRequired,isOptionsPanelOpen:d.default.bool.isRequired,multiSelectSelectedIndexes:d.default.arrayOf(d.default.number),nextPotentialSelectionIndex:d.default.number,option:d.default.shape({text:d.default.string.isRequired,value:d.default.string.isRequired,markup:d.default.element}).isRequired}},function(e,t,n){"use strict";function r(e,t,n){}Object.defineProperty(t,"__esModule",{value:!0});"function"==typeof Symbol&&Symbol.iterator;t.default=r}])});