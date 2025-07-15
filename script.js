// Datos de la malla curricular (completa con TODOS los semestres de tu imagen)
const malla = {
    "PRIMER SEMESTRE": ["Matemática", "Física", "Química General", "Biología", "Expresión Oral y Escrita", "Inglés Técnico I"],
    "SEGUNDO SEMESTRE": ["Química Inorgánica", "Química Orgánica I", "Botánica", "Anatomía Humana", "Estadística", "Inglés Técnico II"],
    "TERCER SEMESTRE": ["Fisicoquímica", "Química Orgánica II", "Química Analítica Cualitativa", "Fisiología", "Salud Pública e Interculturalidad", "Metodología de la Investigación"],
    "CUARTO SEMESTRE": ["Química Analítica Cuantitativa", "Genética", "Farmacognosía I", "Fisiopatología", "Enzimología"],
    "QUINTO SEMESTRE": ["Microbiología I", "Bioquímica I", "Farmacognosía II", "Bromatología", "Análisis Instrumental", "Inmunología"],
    "SEXTO SEMESTRE": ["Microbiología II", "Bioquímica II", "Hematología I", "Parasitología I", "Citología", "Farmacología I"],
    "SÉPTIMO SEMESTRE": ["Toxicología I", "Nutrición", "Hematología II", "Parasitología II", "Tecnología Farmacéutica I", "Farmacología II", "Microbiología Industrial"],
    "OCTAVO SEMESTRE": ["Toxicología II", "Análisis Clínico I", "Control de Medicamentos I", "Biología Molecular", "Tecnología Farmacéutica II", "Electiva"],
    "NOVENO SEMESTRE": ["Farmacia Clínica", "Análisis Clínico II", "Control de Medicamentos II", "Deontología y Legislación", "Gestión y Administración", "Práctica Profesional"],
    "INTERNADO ROTATORIO EVALUADO": ["Laboratorio", "Farmacia"]
};

// Cargar el estado guardado desde localStorage
const estadoMaterias = JSON.parse(localStorage.getItem('estadoMaterias')) || {};

// Generar la malla en el HTML
const container = document.getElementById("malla-container");
for (const [semestre, materias] of Object.entries(malla)) {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";
    semestreDiv.innerHTML = `<h3>${semestre}</h3>`;
    
    materias.forEach(materia => {
        const materiaSpan = document.createElement("span");
        materiaSpan.className = `materia ${estadoMaterias[materia] || 'no-cursada'}`;
        materiaSpan.textContent = materia;
        materiaSpan.onclick = function() {
            cambiarEstado(this);
        };
        semestreDiv.appendChild(materiaSpan);
    });
    
    container.appendChild(semestreDiv);
}

// Función para cambiar y guardar el estado de la materia
function cambiarEstado(elemento) {
    const materia = elemento.textContent;
    let estadoActual = elemento.className.split(' ')[1]; // Obtener la segunda clase (ej: "no-cursada")
    
    // Ciclo de estados: no-cursada -> cursando -> aprobada -> no-cursada...
    if (estadoActual === "no-cursada") {
        elemento.classList.replace("no-cursada", "cursando");
        estadoActual = "cursando";
    } else if (estadoActual === "cursando") {
        elemento.classList.replace("cursando", "aprobada");
        estadoActual = "aprobada";
    } else {
        elemento.classList.replace("aprobada", "no-cursada");
        estadoActual = "no-cursada";
    }
    
    // Guardar en localStorage
    estadoMaterias[materia] = estadoActual;
    localStorage.setItem('estadoMaterias', JSON.stringify(estadoMaterias));
}
