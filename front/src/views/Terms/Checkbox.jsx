import React from 'react';

const CheckBox = (props) => {
	return( <div className="form-group">
    <strong>
        <label htmlFor={props.name} className="form-label text-secondary" style={{fontSize: '20px'}}>{props.title}</label>
    </strong>
    &nbsp;
    &nbsp;
    &nbsp;
    <b className="text-danger">(Preenchimento obrigatório)</b>
    <div className="radio">
      {props.options.map(option => {
        return (
        <div key={option}>
          <label style={{fontSize: '18px',}} className="checkbox-inline">
            <input className = "text-secondary"
              id={props.option}
              name={props.name}
              onChange={props.handleChange}
              value={option}
              checked={ props.selectedOptions.indexOf(option) > -1 }
              type="radio" /> {option}
          </label>
        </div>
        );
      })}
    </div>
  </div>
);

}

export default CheckBox;