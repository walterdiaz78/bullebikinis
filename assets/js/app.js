const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();

try{
    const respuesta = await fetch('https://sheet.best/api/sheets/bd3117a6-e571-4afd-b5d2-ec6e607c87ec', {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "Nombre": formulario.nombre.value,
            "Email": formulario.correo.value,
            "Telefono": formulario.telefono.value,
        })
    });

    const contenido = await respuesta.json();
    console.log(contenido);
}catch(error){
    console.log(error);
}
    
    registro.classList.remove('activo');
    exito.classList.add('activo');

});