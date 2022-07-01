"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Dropdown
 *
 * @param   {object}      props
 * @param   {string}      props.className        [input wrapper className]
 * @param   {string}      props.id               [label "html for" identifiant]
 * @param   {string}      props.label            [label name]
 *
 * @returns {Reactnode}   jsx injected in DOM
 */
function Dropdown(_ref) {
  let {
    className,
    id,
    label,
    select,
    handleChange
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "form-newEmployee--inputWrapper ".concat(className),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: id,
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
      className: "dropdownList",
      id: id,
      onChange: handleChange,
      "aria-required": "true",
      required: true,
      children: select.map(item => /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
        title: "dropdownOption",
        type: "text",
        value: item.value,
        children: item.label
      }, item.abbrev))
    })]
  });
}
/**
 * Dropdown PROPTYPES
 */


Dropdown.propTypes = {
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  className: _propTypes.default.string.isRequired
};
var _default = Dropdown;
exports.default = _default;