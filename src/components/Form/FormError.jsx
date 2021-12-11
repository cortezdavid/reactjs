import React from 'react'
import { BsExclamationTriangle } from "react-icons/bs";
import './Form.css'

const FormError = () => {
    return (
        <div>
            <BsExclamationTriangle className='iconError'/>   
            <p>Error, pagina no encontrada</p> 
        </div>
    )
}

export default FormError
