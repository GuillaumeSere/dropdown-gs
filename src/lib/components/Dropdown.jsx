import PropTypes from 'prop-types';

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
 function Dropdown({
  className,
  id,
  label,
  select,
  handleChange,
})

{
  return (
    <div className={`form-newEmployee--inputWrapper ${className}`}>
      <label htmlFor={id}>{label}</label>
      <select
        className="dropdownList"
        id={id}
        onChange={handleChange}
        aria-required="true"
        required
      >
        {select.map((item) => (
          <option
            title="dropdownOption"
            type="text"
            value={item.value}
            key={item.abbrev}
          >
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

/**
 * Dropdown PROPTYPES
 */
Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Dropdown;