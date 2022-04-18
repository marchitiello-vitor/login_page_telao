
import '../../assets/css/login.css';
import React from 'react';

import icone from '../../assets/img/undraw.svg';
import logo from '../../assets/img/Logo.svg';
import { Component } from 'react';
import axios from "axios";


class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            senha:'',
            erroMensagem: '',
            isLoading: false
        };
    };

    efetuarLogin = (event) => {
        event.preventDefault();

        this.setState({erroMensagem:'', isLoading: true})

        axios.post('http://localhost:5000/api/Login', {
            email: this.state.email,
            senha: this.state.senha,
        })

        .then(resposta => {

            if(resposta.status === 200){
                localStorage.setItem('usuario-login', resposta.data.token)
                this.setState({ isLoading: false });

                let base64 = localStorage.getItem('usuario-login').split('.')[1];
                console.log(base64);

                console.log(this.props);
            }
        })

        .catch(() => {
            this.setState({erroMensagem: 'E-mail e/ou senha invalidos!', isLoading: false })
        })

    };

    atualizaStateCampo = (campo) => {
        this.setState({[campo.target.name]: campo.target.value})
    }

    render() {

        return (

            <body>
                <div class="box_vermelho">
                    <div id="box">
                        <div id="topbox">
                            <img src={icone} alt="imagem" class="ilus" />
                        </div>
                    </div>

                    <div id="lado_vermelho">
                        <div class="logo_text">
                            <img class="logo" src={logo} alt="logo" />
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

                        <button
                            type="submit"
                            value="Conectar"
                            class="botao"
                            id="botao_1">Entrar</button>
                    </div>
                </div>
            </body>

        );
    }
}

export default Login;

