import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options }) =>
{
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) =>
    {
        setSelectedOption(event.target.value);
    };

    return (
        <select
            id="options"
            name="options"
            value={selectedOption}
            onChange={handleChange}
            className="w-1/2 font-poppins bg-gray-200 p-[10px] rounded-md border-opacity-80 border-[1px]
                    border-gray-300 font-semibold
                    placeholder-gray-400 placeholder:text-2xl placeholder:font-poppins"
        >
            <option className="text-gray-200 font-poppins" value="" disabled>
                Select an option
            </option>

            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
            
        </select>
    );
};

Dropdown.propTypes = {options: PropTypes.arrayOf(PropTypes.string).isRequired,};

export default Dropdown;