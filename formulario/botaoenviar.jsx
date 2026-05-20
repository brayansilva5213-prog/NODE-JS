function InputField({ label, type, id, name, placeholder, value, onChange }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input 
            type={type} 
            id={id} 
            name={name} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}   />
        </div>
    );
}
export default InputField;