import React, { ChangeEvent } from "react";

type FormFieldType = {
    id: string;
    label: string;
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<any>) => void;
    type: string,
    options: Array<{value: string, label: string}>
}

type InputToRenderType = Omit<FormFieldType, "label">;



const InputToRender: React.FC<InputToRenderType> = (props) => {
    if (props.type === "text") {
        return <input {...props} />
    } else if (props.type === "textarea") {
        return <textarea {...props} />
    } else {
        console.log(props.options);
        return (<select id={props.id} name={props.id} value={props.value} onChange={props.onChange} >
            {props.options? props.options.map(option => {
                return <option key={option.value} value={option.value}>{option.label}</option>        
            }): []}
        </select>)
    }
}

const FormField: React.FC<FormFieldType> = ({ id, label, value, placeholder, onChange, type }) => {

    return (
        <>
            <div className="form-field">
                <label htmlFor={id}>{label}</label>
                <InputToRender
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    onChange={onChange}
                    value={value} />
            </div>
        </>
    )

}

export default FormField;