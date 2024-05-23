const nombres = ["eva", "svitlana", "tatiana", "daniel", "victoria", "sergey", "olga", "andrey", "anna"];
const notas = [10, 5, 7, 3, 2, 7, 8, 5, 1];
const cursos = [1, 2, 1, 2, 3, 3, 1, 2, 2];

/**
 * Muestra todos los alumnos en la seccion alumnos
 * @param {(String)} nombres - array con los nombres a mostrar
 * @param {(Number)} notas - array con los notas a mostrar
 * @param {(Number)} cursos - array con los cursos a mostrar
 */
function mostrarAlumnos(nombres, notas, cursos) {
    const alumnos = document.getElementById("alumnos");
    // Recorremos todos los arrayas. Ponemos nombres.length porque todos los arrayas
    // tienen la misma longitud (podriamos poner notas.length o cursos.length)
    for (let i = 0; i < nombres.length; i++) {
        const div = document.createElement("div");
        div.classList.add("alumno");
        if(notas[i] >= 5) {
            div.classList.add("aprobado");
        } else {
            div.classList.add("suspenso");
        }
        //div.classList.add(notas[i] >= 5 ? "aprobado" : "suspenso");
        
        const spanNombre = document.createElement("span");
        spanNombre.textContent = nombres[i];
        div.appendChild(spanNombre);
        
        const spanNota = document.createElement("span");
        spanNota.textContent = notas[i];
        div.appendChild(spanNota);
        
        const spanCurso = document.createElement("span");
        spanCurso.textContent = cursos[i];
        div.appendChild(spanCurso);
        alumnos.appendChild(div);
    }
}
function mostrarAprobados() {
    const alumnos = document.getElementsByClassName("alumno");
    const cursoElegido = document.getElementById("curso").value;
    for (const alumno of alumnos) {
        //const nota = alumno.querySelector("span:nth-of-type(2)").textContent;
        //const nota = alumno.querySelector("span:nth-of-type(3)").textContent;
        if (nota >= 5 && (curso == cursoElegido || cursoElegido =="")) {
            alumno.style.display = "flex";
        } else {
            alumno.style.display = "none";
    }
        //alumno.style.display = nota >= 5 ? "flex" : "none";
    }
}
function mostrarSuspensos() {
    const alumnos = document.getElementsByClassName("alumno");
    const cursoElegido = document.getElementById("curso").value;
    for (const alumno of alumnos) {
        const nota = alumno.querySelector("span:nth-of-type(2)").textContent;
        const nota = alumno.querySelector("span:nth-of-type(3)").textContent;
        if (nota < 5 && (curso == cursoElegido || cursoElegido =="")) {
            alumno.style.display = "flex";
        } else {
            alumno.style.display = "none";
}
    }
}
function mostrarPorCurso() {
const cursoElegido = document.getElementById("curso").value;
const alumnos = document.getElementsByClassName("alumno");
for (const alumno of alumnos) {
    const curso = alumno.querySelector("span:nth-of-type(3)").textContent;
if (curso == cursoElegido || cursoElegido == "") {
    alumno.style.display = "flex";
} else {
    alumno.style.display = "none";
}
//alumno.style.display = curso == cursoElegido ? "flex" : "none";
}
}
function mostrarPorNombre() {
    const cursoElegido = document.getElementById("curso").value;
    const alumnos = document.getElementsByClassName("alumno");
    const nombre = document.getElementsByClassName("nombre").value.trim();
    for (const alumno of alumnos) {
        const nombre = alumno.querySelector("span:nth-of-type(1)").textContent;
        const curso = alumno.querySelector("span:nth-of-type(3)").textContent;
    if (nota < 5 && (curso == cursoElegido || cursoElegido == "")) {
        alumno.style.display = "flex";
    } else {
        alumno.style.display = "none";
    }
}
}
    //alumno.style.display = curso == cursoElegido ? "flex" : "none";
    
document.getElementById("aprobados").addEventListener("click", mostrarAprobados);
document.getElementById("suspensos").addEventListener("click", mostrarSuspensos);
document.getElementById("curso").addEventListener("change", mostrarPorCurso);
document.getElementById("nombre").addEventListener("keyup", mostrarPorNombre);


mostrarAlumnos(nombres, notas, cursos);