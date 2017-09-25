import React from 'react';
//import _ from 'lodash';
import classnames from 'classnames';

//import TimeZone from '../components/TimeZone';

/*
const data = TimeZone();
console.log(JSON.stringify(data));
        //const options = (data, (val, key) => (key:val.text,  value:val.value)));
const options = _.map(data, item => _.assign(
            { key: item.text, val: item.value }
        ));
console.log(JSON.stringify(options));
*/

const SelectGroup = (field, label, value, options, error, onChange) => { 
    //options wont be needed it the above apply
    //problem: React DOES NOT allow child with key value
    return (
        <div className={classnames('form-group', { 'has-error': error })}>
            <label className="control-label" htmlFor="timezone">{label}</label>
            <select 
                onChange={onChange}
                value={value}
                name={field}
                className="form-control"
            >
                <option value="" disabled>Choose {label}</option>
                {options.map(opt => {
                    return (
                    <option
                        key={opt.key}
                        value={opt.val}
                    >
                        {opt.key}
                    </option>
                    );
                })}
            </select>
            {error && <span className="help-block">{error}</span>}
        </div>
    );
};

SelectGroup.propTypes = {
    field: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    //options: React.PropTypes.array.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
};

export { SelectGroup };
