
import { useState, useEffect } from 'react'
import { ButtonNav } from "../ButtonNav/ButtonNav"
import "./Header.css"

export const Header = () => {

    const [token, setToken] = useState("")

    return (
        <div className="headerDesign">

            <ButtonNav 
                destination={"/"}
                name={"Home"}
            />

            {

                token !== ""

                ? (<div className='headerNavDesign'>
                    <ButtonNav 
                        destination={"/profile"}
                        name={"Profile"}
                    />
                    <ButtonNav 
                        destination={"/profile"}
                        name={"Log out"}
                    />
                </div>)

                : (<div className='headerNavDesign'>

                    <ButtonNav 
                        destination={"/register"}
                    name={"Register"}
                    />
                    <ButtonNav 
                        destination={"/login"}
                        name={"Login"}
                    />
                </div>)
            }
        </div>
    )
}