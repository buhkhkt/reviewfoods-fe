/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import { Controller } from 'react-hook-form';

const InputField = forwardRef(({ name, label, control, placeholder }, ref) => {
    return (
        <Controller
            render={({ field: { ref: controllerRef, ...otherFields } }) => (
                <label className="block">
                    <span className="text-gray-300">{label}:</span>
                    <textarea
                        {...otherFields}
                        ref={(node) => {
                            controllerRef(node);

                            if (ref) {
                                ref.current = node;
                            }
                        }}
                        required
                        className="mt-1 block w-full rounded-md bg-black/40 border-transparent focus:border-gray-500 focus:ring-0 text-white placeholder:text-gray-400 resize-none"
                        rows="3"
                        placeholder={placeholder}
                    ></textarea>
                </label>
            )}
            control={control}
            name={name}
        />
    );
});

export default InputField;
