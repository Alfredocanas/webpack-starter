import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png'; // opcion # 1 importar imagen

export const saludar = ( nombre ) => {

    // titulo
    console.log( 'Creando etequeta h1' );

    const h1 = document.createElement('h1');
    
    h1.innerText = `Hola, ${ nombre }`;

    document.body.append( h1 );

    /* - opcion # 1 importar imagen
    //Img
    console.log( webpacklogo );

    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append( img ); 
    
    */

}
