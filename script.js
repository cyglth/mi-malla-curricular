// Datos de la malla curricular
const malla = {
    "PRIMER SEMESTRE": ["Matemática", "Física", "Química General", "Biología", "Expresión Oral y Escrita", "Inglés Técnico I"],
    "SEGUNDO SEMESTRE": ["Química Inorgánica", "Química Orgánica I", "Botánica", "Anatomía Humana", "Estadística", "Inglés Técnico II"],
    "TERCER SEMESTRE": ["Fisicoquímica", "Química Orgánica II", "Química Analítica Cualitativa", "Fisiología", "Salud Pública e Interculturalidad", "Metodología de la Investigación"],
    "CUARTO SEMESTRE": ["Química Analítica Cuantitativa", "Genética", "Farmacognosia I", "Fisiopatología", "Enzimología"],
    "QUINTO SEMESTRE": ["Microbiología I", " Bioquímica I", "Farmacognosia II", "Bromatología", "Análisis Instrumental", "Inmunología"],
    "SEXTO SEMESTRE": ["Microbiología II", "Bioquímica II", "Hematología I", "Parasitología I", "Citología", "Famacología I"],
    "SÉPTIMO SEMESTRE": ["Toxicología I", "Nutrición", "Hematología II", "Parasitología II", "Tecnología Farmacéutica I", "Farmacología II", "Microbiología Industrial"],
    "OCTAVO SEMESTRE": ["toxicología II", "Análisis CLínico I", "Control de Medicamentos I", "Biología Molecular", "Tecnología Farmacéutica II", "Electiva"],
    "NOVENO SEMESTRE": ["Farmacia Clínica", "Análisis Clínico II", "Control de Medicamentos II", "Deontología y Legislación", "Gestión y Administración", "Práctica Profesional"],
    "INTERNADO": ["Laboratorio", "Farmacia"],
};

// Generar la malla en el HTML
const container = document.getElementById("malla-container");
for (const [semestre, materias] of Object.entries(malla)) {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";
    semestreDiv.innerHTML = `<h3>${semestre}</h3>`;
    
    materias.forEach(materia => {
        const materiaSpan = document.createElement("span");
        materiaSpan.className = "materia no-cursada";
        materiaSpan.textContent = materia;
        materiaSpan.onclick = function() {
            cambiarEstado(this);
        };
        semestreDiv.appendChild(materiaSpan);
    });
    
    container.appendChild(semestreDiv);
}

// Función para cambiar el estado de la materia
function cambiarEstado(elemento) {
    if (elemento.classList.contains("no-cursada")) {
        elemento.classList.replace("no-cursada", "cursando");
    } else if (elemento.classList.contains("cursando")) {
        elemento.classList.replace("cursando", "aprobada");
    } else {
        elemento.classList.replace("aprobada", "no-cursada");
    }
}
