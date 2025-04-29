import { Link, useNavigate } from 'react-router-dom'
import Field from '../Forms/Field/Field'
import { Form } from '../Forms/Form/Form'
import FormCard from '../Forms/FormCard/FormCard'
import './Register.css'
import FormButton from '../Forms/FormButton/FormButton'

export default function Register(params: any){
    const navigate = useNavigate();
    const handleClick = () => {
        //Logica de creacion de usuario
        navigate('/');
    }

    return(
        <>
        <div className="margin"></div>
        <Form formName= "Regístrate" size="large">
          <div className="Form-content">
            <FormCard text = "Crea tu cuenta" cardTitle = "Join The Perfect Bid"/>
            <Field name = "Nombre completo" placeHolder ="your full name" />
            <Field name = "Correo electronico" placeHolder ="your email" />
            <Field name = "Direccion" placeHolder =" your direction" />
            <Field name = "Telefono" placeHolder ="phone number" />
            <Field name = "Password" placeHolder ="your password" />
            <Field name = "Password confirmation" placeHolder ="password confirmation" />
          </div>
         <FormButton text = "Registrarse" handle = {handleClick} />
          <Link className="link-red" to={'/'}><div className='form-link-register'>Ya tienes una cuenta? Iniciar Sesion</div></Link>
        </Form>
        </>
    )
}