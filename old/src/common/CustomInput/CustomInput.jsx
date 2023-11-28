
import "./CustomInput.css"

export const CustomInput = ({type, name, placeholder, design, functionChange}) => {

    return (
        <input 
            className={design}
            type={type}
            name={name}
            placeholder={placeholder}
            //Peticion de disparo de la funcion aqui en el hijo
            onChange={(e)=>functionChange(e)}
        />

    )
}