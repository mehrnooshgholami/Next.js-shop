function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      <input
        autoComplete="off"
        style={{outline:"solid rgb(209, 213, 219) 1px",borderRadius:"3px",padding:"5px",width:"100%",boxShadow:"0.8px 0.8px 5px rgb(209, 213, 219)"}}
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default TextField;
