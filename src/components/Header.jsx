import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import gravatar from '../utils/gravatar'
import {logoutRequest} from '../acctions'
/**importo estilos */
import '../assets/styles/components/Header.scss';
/**importo iconos */
import logo from '../assets/images/logo.svg'
import userIcon from '../assets/images/user-icon.png'

const Header=(props)=> {
    const {user}= props;
    const hasUser = Object.keys(user).length>0
    const handleLogout = ()=>{
        props.logoutRequest({})
    }
    return (
        <header className="header">
            <Link to="/" className="header__ancla">
                <img className="header__img" src={logo} alt="Platzi Video"/>
                <p>Play</p>
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                <img src={hasUser ? gravatar(user.email): userIcon} alt={user.email}/>
                <p>Perfil</p>
            </div>
                <ul>
                {hasUser ? <li><a href="/">{user.name}</a></li> : null}
                {hasUser ?<li><Link to="#logout" onClick={handleLogout}>Cerrar Sesión</Link></li>:
                <li><Link to="/login">Iniciar Sesión</Link></li>}
                </ul>
            </div>
        </header>
    )
}
const mapStateToProps = state=>{
    return{
        user:state.user
    }
}
const mapDispatchToProps = {
    logoutRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

