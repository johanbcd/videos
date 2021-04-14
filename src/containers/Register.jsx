import React, {useState} from 'react'
import {connect} from 'react-redux'
import {registerRequest} from '../acctions'
import {Link} from 'react-router-dom'
/**importo estilos */
import '../assets/styles/components/Register.scss'

const Register = props =>{
    const[form, setValues] = useState({
        email: '',
        name: '',
        password: ''
    })

    const handleInput = event=>{
        setValues({
            ...form,
            [event.target.name]:event.target.value
        }
        )
    }
    const handleSubmit = event =>{
        event.preventDefault();
        props.registerRequest(form)
        console.log(form);
        props.history.push('/');
    }
    return (
        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input className="input_general" name="name" type="text" placeholder="Name" onChange={handleInput}/>
                    <input className="input_general" name="email" type="email" placeholder="Email" onChange={handleInput}/>
                    <input className="input_general" name="password" type="password" placeholder="Password" onChange={handleInput}/>
                    <button className="button">Registrarme</button>
                </form>
                <Link to="/login">Iniciar sesión</Link>
            </section>
        </section>
    )
}
const mapDispatchToProps = {
    registerRequest
}
export default connect(null,mapDispatchToProps)(Register)