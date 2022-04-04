import { render } from '@testing-library/react';
import '../../assets/css/login.css';
import React from 'react';
import ReactDOM from 'react-dom';
import icone from '../../assets/img/undraw.svg';
import logo from '../../assets/img/Logo.svg';


export default function Login() {
    return (
  
            <body>
                <div class="box_vermelho">
                    <div id="box">
                        <div id="topbox">
                            <img src={ icone } alt="imagem" class="ilus"/>
                        </div>
                    </div>

                    <div id="lado_vermelho">
                        <div class="logo_text">
                            <img class="logo" src={ logo } alt="logo" />
                            <p class="text_respon">FAÇA O SEU LOGIN PARA ACESSAR A REDE</p>
                        </div>
                        <label>
                            <p class="titulo">Email</p>
                            <input type="Email" class="puts" />
                        </label>

                        <label>
                            <p class="titulo">Senha</p>
                            <input type="password" placeholder="" class="puts" />
                        </label>

                        <button type="submit" value="Conectar" class="botao" id="botao_1">Entrar</button>
                    </div>
                </div>
            </body>

    );
}

