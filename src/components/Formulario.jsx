import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputIcon from '@material-ui/icons/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {faSpotify } from '@fortawesome/free-brands-svg-icons'

const Formulario = () => {
    return(
        
            <div className="container">
                <div className="container2">
                    <div className="container3">
                        <div className="forms-container">
                            <div className="signin-signup">
                                <form action="#"  className="sign-in-form">
                                    <h2 className="title" >INICIAR SESION</h2>
                                    <h2 id="linea">_______________________________</h2>
                                    <div className="input-field">
                                        <i className="fas fa-user"></i>
                                        <TextField id="outlined-basic" label="Nombre Completo" variant="outlined" />
                                    </div>
                                    <div className="input-field">
                                        <i className="fas fa-lock"></i>
                                        <TextField id="outlined-basic" label="Correo Electronico" variant="outlined" />
                                    </div>
                                    <div className="input-field">
                                        <i className="fas fa-lock"></i>
                                        <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
                                    </div>
                                    <div>
                                        <div className="Botones">
                                            
                                                <Button id="Uno" className="ButtonUno large"  variant="contained" color="Primary"  endIcon={<InputIcon />}> 
                                                    INGRESAR 
                                                </Button>
                                        </div>
                                        <div className="Botones">
                                                <Button id="Dos" className="ButtonDos large" variant="contained" color="Primary"  endIcon={<FontAwesomeIcon icon={faSpotify} />} >
                                                    CONTINUAR CON SPOTIFY
                                                </Button>
                                        </div>   
                                    </div>                        
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panels-container">
                    <div class="panel left-panel">
                    <div class="content">
                        <h3>New here ?</h3>
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                        ex ratione. Aliquid!
                        </p>
                        <button class="btn transparent" id="sign-up-btn">
                        Sign up
                        </button>
                    </div>
                    <img src="img/log.svg" class="image" alt="" />
                    </div>
                    <div class="panel right-panel">
                    <div class="content">
                        <h3>One of us ?</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        laboriosam ad deleniti.
                        </p>
                        <button class="btn transparent" id="sign-in-btn">
                        Sign in
                        </button>
                    </div>
                    <img src="img/register.svg" class="image" alt="" />
                    </div>
                </div>
    
            </div>
        
    )  
}

export default Formulario

