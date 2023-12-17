/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import { Controller } from 'react-hook-form';

const SelectField = forwardRef(({ name, label, control, options }, ref) => {
    return (
        <Controller
            render={({ field: { ref: controllerRef, ...otherFields } }) => (
                <label className="block">
                    <span className="text-gray-300">{label}:</span>
                    <select
                        {...otherFields}
                        ref={(node) => {
                            controllerRef(node);

                            if (ref) {
                                ref.current = node;
                            }
                        }}
                        className="block w-full mt-1 rounded-md bg-black/40 border-transparent focus:border-gray-500 focus:ring-0 text-white placeholder:text-gray-400 resize-none"
                    >
                        {options.map(({ label }, index) => (
                            <option key={index}>{label}</option>
                        ))}
                    </select>
                </label>
            )}
            control={control}
            name={name}
        />
    );
});

export default SelectField;
