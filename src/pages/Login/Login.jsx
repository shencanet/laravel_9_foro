
import { useState, useEffect } from 'react'
import { CustomInput } from "../../common/CustomInput/CustomInput"
import "./Login.css"
import { loginMe } from '../../services/apiCalls'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        username : "",
        password: ""
    })

    const [mensaje, setMensaje] = useState("")
    const [mensajeError, setMensajeError] = useState("")

    //Funcion que vamos a pasar al hijo, vista desde aqui el padre
    const InputHandler = (e) => {
        //Este sistema lo vamos a utilizar cuando queramos bindear a un objeto con varias propiedades
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    // useEffect(()=>{
    //     console.log(credentials)
    // }, [credentials])

    const logMe = () => {

        loginMe(credentials)
            .then(
                resultado => {
                    console.log(resultado)
                    setMensaje(`Hola de nuevo ${resultado.data.firstName} ${resultado.data.lastName}...`)
                    //Una vez ha venido correctamente la respuesta, enviamos al user a Home
                    setTimeout(()=>{
                        navigate("/")
                    },2000)
                }   
            )
            .catch(error => {
                setMensajeError(error.response.data.message)
            })

    }

    return (
        <div className="loginDesign">
            {
                mensaje !== ""

                ? (<div>{mensaje}</div>)

                : (<><CustomInput 
                    type={"text"}
                    name={"username"}
                    placeholder={""}
                    design={"inputDesign"}
                    //Pasamos la función al hijo desde aqui (el padre)
                    functionChange={InputHandler}
                />
                <CustomInput 
                    type={"password"}
                    name={"password"}
                    placeholder={""}
                    design={"inputDesign"}
                    functionChange={InputHandler}
                />
                <div>{mensajeError}</div>
                <div className='buttonDesign' onClick={logMe}>Log me!</div></>)
            }
            
        </div>
    )
}