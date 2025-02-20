const RenderInput = ({labelText, id, name, type = "text", defaultValue}) => {
    return (
        <div className="d-flex flex-column g-1">
            <label htmlFor={id}>{labelText}</label>
            <input
                id={id}
                type={type}
                name={name}
                className="block w-full border p-2 rounded mb-2"
                defaultValue={defaultValue}
                required
            />
                
        </div>
    )
}
export default RenderInput
