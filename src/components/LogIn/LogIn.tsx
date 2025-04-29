import './LogIn.css'
import Field from "../Forms/Field/Field"
import {Link} from 'react-router-dom'
import { Form } from "../Forms/Form/Form"
import FormButton from "../Forms/FormButton/FormButton"
import FormCard from "../Forms/FormCard/FormCard"
import { useNavigate } from 'react-router-dom';

export default function LogIn(params:any) {
    const navigate = useNavigate();

    const handleClick = () => {
        //Logica validacion con keycloack, encriptado de datos y envio
        navigate('/Home');
    }

    return(
        <>
        <div className="margin"></div>
        <Form formName= "The Perfect Bid" size="small">
          <FormCard text = "Ingresa tus datos y accede a tu cuenta" cardTitle = "Ingreso"/>
          <Field name = "Nombre de usuario" placeHolder ="Introduzca el nombre de usuario" />
          <Field name = "Correo electronico" placeHolder ="Introduzca el correo de usuario" />
          <Link className="link-red" to={''}><div className='form-link-forget'>Olvidó su contraseña?</div></Link>
          <FormButton text = "Ingresar" handle = {handleClick} />
          <Link className="link-red" to={'/Register'}><div className='form-link-register'>No tienes una cuenta? Regístrate ya!</div></Link>
        </Form>
      </>
    )
}