import '../css/componentes.css';
// import webpacklogo from '../assets/imgs/webpack-logo.png';
export const saludar=(nombre)=>{
    console.log('Creando etiqueta H1');
    const h1=document.createElement('h1');
    h1.innerText=`Hola Soy ${nombre}`;
    document.body.append(h1);

    // const img=document.createElement('img');
    // img.src=webpacklogo;
    // document.body.append(img);
}