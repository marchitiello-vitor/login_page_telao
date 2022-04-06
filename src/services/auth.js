export const usuarioAutenticado = localStorage.getItem('usuario-login') !== null;

export const parseJwt = () => {

    let base64 = localStorage.getItem('usuario-login').split('.');

    return JSON.parse( window.atob(base64));
}