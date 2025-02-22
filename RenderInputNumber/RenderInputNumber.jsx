const RenderInputNumber = ({labelText, inputProps, type = "number"}) => {

    const {id, name, min, max, defaultValue, onchange, required, style}= inputProps;

    return (
        <div className="
        d-flex flex-row gap-2">
            <label htmlFor={id}>{labelText}</label>
            <input
                style={style}
                id={id}
                type={type}
                name={name}
                min={min}
                max={max}
                className="block w-full border p-2 rounded mb-2"
                defaultValue={defaultValue}
                onchange={onchange}
                required={required}
            />
                
        </div>
    )
}
export default RenderInputNumber;
