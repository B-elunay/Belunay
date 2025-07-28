document.getElementById('skinTest').addEventListener('submit', function(event){
    event.preventDefault();
    let edad = parseInt(this.edad.value);
    let sensacion = this.sensacion.value;
    let sensibilidad = this.sensibilidad.value;
    let recomendacion = "";

    if(sensacion === "seca"){
        recomendacion = "Tu piel es seca. Te recomendamos nuestra Crema Facial nutritiva y el Sérum regenerador.";
    } else if(sensacion === "grasa"){
        recomendacion = "Tu piel es grasa. Usa el Jabón Artesanal purificante y el Tónico Capilar ligero.";
    } else if(sensacion === "mixta"){
        recomendacion = "Tu piel es mixta. Equilibra con el Jabón Artesanal y el Sérum ligero.";
    } else {
        recomendacion = "Tu piel es normal. Nuestra Crema Facial y Sérum son ideales para ti.";
    }

    if(sensibilidad === "si"){
        recomendacion += " Además, elige productos suaves sin fragancias.";
    }

    document.getElementById('resultado').innerText = recomendacion;
});
