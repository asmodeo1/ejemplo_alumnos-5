const alumnos = [
    {nombre: "eva", nota: 10, curso: 1},
    {nombre: "luis", nota: 5, curso: 2},
    {nombre: "sergio", nota: 7, curso: 1},
    {nombre: "sandra", nota: 3, curso: 2},
    {nombre: "eduardo", nota: 2, curso: 3},
    {nombre: "ernesto", nota: 7, curso: 3},
    {nombre: "sofia", nota: 8, curso: 1},
    {nombre: "elena", nota: 5, curso: 2},
    {nombre: "pablo", nota: 1, curso: 2}
];

/**
 * Muestra todos los alumnos en la sección alumnos
 * @param {[[]]} alumnos - array con los datos de los alumnos a mostrar
 */
function mostrarAlumnos(alumnos) {
    const contenedorAlumnos = document.getElementById('alumnos');
    // Recorremos el array
    for (let i = 0; i < alumnos.length; i++) {
        const div = document.createElement("div");
        div.classList.add("alumno");
        if(alumnos[i].nota >= 5) { // La nota está en la posición 1 del segundo array
            div.classList.add("aprobado");
        } else {
            div.classList.add("suspenso");
        }
        // div.classList.add(alumnos[i][1] >= 5 ? "aprobado" : "suspenso");

        const spanNombre = document.createElement("span");
        spanNombre.textContent = alumnos[i].nombre;
        div.appendChild(spanNombre);
        const spanNota = document.createElement("span");
        spanNota.textContent = alumnos[i].nota;
        div.appendChild(spanNota);
        const spanCurso = document.createElement("span");
        spanCurso.textContent = alumnos[i].curso;
        div.appendChild(spanCurso);
        contenedorAlumnos.appendChild(div);
        /* En lugar de lo anterior, como ahora los datos de cada alumno están en su propio
        array
        for (const dato of alumnos[i]) {
            const span = document.createElement("span");
            span.textContent = dato;
            div.appendChild(span);
        }
        alumnos.appendChild(div);
        */
    }
}

function mostrarAprobados() {
    const alumnos = document.getElementsByClassName('alumno');
    const cursoElegido = document.getElementById('curso').value;
    for (const alumno of alumnos) {
        const nota = alumno.querySelector("span:nth-of-type(2)").textContent;
        const curso = alumno.querySelector("span:nth-of-type(3)").textContent;
        if (nota >= 5 && (curso == cursoElegido || cursoElegido == "")) {
            alumno.style.display = "flex";
        } else {
            alumno.style.display = "none";
        }
        //alumno.style.display = nota >= 5 && ( curso == cursoElegido || cursoElegido == "") ? "flex" : "none";
    }
}

function mostrarSuspensos() {
    const alumnos = document.getElementsByClassName('alumno');
    const cursoElegido = document.getElementById('curso').value;
    for (const alumno of alumnos) {
        const nota = alumno.querySelector("span:nth-of-type(2)").textContent;
        const curso = alumno.querySelector("span:nth-of-type(3)").textContent;
        if (nota < 5 && (curso == cursoElegido || cursoElegido == "")) {
            alumno.style.display = "flex";
        } else {
            alumno.style.display = "none";
        }
        //alumno.style.display = nota < 5 && ( curso == cursoElegido || cursoElegido == "") ? "flex" : "none";
    }
}

function mostrarPorCurso() {
    const cursoElegido = document.getElementById('curso').value;
    const alumnos = document.getElementsByClassName('alumno');
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
    const cursoElegido = document.getElementById('curso').value;
    const alumnos = document.getElementsByClassName('alumno');
    const nombreElegido = document.getElementById('nombre').value.trim();
    for (const alumno of alumnos) {
        const nombre = alumno.querySelector("span:nth-of-type(1)").textContent;
        const curso = alumno.querySelector("span:nth-of-type(3)").textContent;
        if (nombre.startsWith(nombreElegido)  && (curso == cursoElegido || cursoElegido == "")) {
            alumno.style.display = "flex";
        } else {
            alumno.style.display = "none";
        }
        //alumno.style.display = nombre.startsWith(nombreElegido)  && (curso == cursoElegido || cursoElegido == "") ? "flex" : "none";
    }
}

document.getElementById('aprobados').addEventListener("click", mostrarAprobados);
document.getElementById('suspensos').addEventListener("click", mostrarSuspensos);
document.getElementById('curso').addEventListener("change", mostrarPorCurso);
document.getElementById('nombre').addEventListener("keyup", mostrarPorNombre);

mostrarAlumnos(alumnos);


/*const notas = [["luis",[1, 5, 7, 10]], ["eva", [4, 7, 8]]];

for (const alumno of notas) {
    console.log(alumno[0]);
    let sumaNotas = 0;
    const notas = alumno[1];
    for (const nota of notas) {
        sumaNotas = sumaNotas + nota; // sumaNotas += nota;
    }
    console.log("La media es :" + sumaNotas / notas.length);


}*/