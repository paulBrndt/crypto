import "./textfield.css"

function textfield(placeholder){
    return (
        <input type="text" placeholder={placeholder} className="textfield" />
    )
}

export default textfield