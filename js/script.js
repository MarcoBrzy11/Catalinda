document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        // Semestre 1
        { id: 'c1', name: 'GESTION I', semester: 1, prerequisites: [] },
        { id: 'c2', name: 'HABILIDADES DE TRABAJO ACADEMICO', semester: 1, prerequisites: [] },
        { id: 'c3', name: 'COMERCIO INTERNACIONAL I', semester: 1, prerequisites: [] },
        { id: 'c4', name: 'MATEMATICA I', semester: 1, prerequisites: [] },
        { id: 'c5', name: 'HABILIDADES DE RAZONAMIENTO LOGICO', semester: 1, prerequisites: [] },
        { id: 'c6', name: 'INGLES I', semester: 1, prerequisites: [] },

        // Semestre 2
        { id: 'c7', name: 'TALLER DE PRINCIPIOS DE SUSTENTABILIDAD', semester: 2, prerequisites: [] },
        { id: 'c8', name: 'MATEMATICA II', semester: 2, prerequisites: ['c4'] },
        { id: 'c9', name: 'GESTION II', semester: 2, prerequisites: ['c1'] },
        { id: 'c10', name: 'COMERCIO INTERNACIONAL II', semester: 2, prerequisites: ['c3'] },
        { id: 'c11', name: 'INGLES II', semester: 2, prerequisites: ['c6'] },
        { id: 'c12', name: 'FUNDAMENTOS DE ECONOMIA', semester: 2, prerequisites: [] },

        // Semestre 3
        { id: 'c13', name: 'CONTABILIDAD I', semester: 3, prerequisites: [] },
        { id: 'c14', name: 'GESTION ADUANERA', semester: 3, prerequisites: ['c3'] },
        { id: 'c15', name: 'ADMINISTRACION DE PERSONAL', semester: 3, prerequisites: ['c1'] },
        { id: 'c16', name: 'INGLES PARA EL COMERCIO INTERNACIONAL I', semester: 3, prerequisites: ['c11'] },
        { id: 'c17', name: 'MATEMATICA III', semester: 3, prerequisites: ['c8'] },
        { id: 'c18', name: 'MICROECONOMIA I', semester: 3, prerequisites: ['c12'] },

        // Semestre 4
        { id: 'c19', name: 'PRACTICA INDUCTIVA', semester: 4, prerequisites: ['c15'] },
        { id: 'c20', name: 'TALLER INTEGRAL DE COMERCIO EXTERIOR', semester: 4, prerequisites: ['c14'] },
        { id: 'c21', name: 'INGLES PARA EL COMERCIO INTERNACIONAL II', semester: 4, prerequisites: ['c16'] },
        { id: 'c22', name: 'MACROECONOMIA I', semester: 4, prerequisites: ['c12'] },
        { id: 'c23', name: 'ESTADISTICA I', semester: 4, prerequisites: ['c4'] },
        { id: 'c24', name: 'CONTABILIDAD II', semester: 4, prerequisites: ['c13'] },

        // Semestre 5
        { id: 'c25', name: 'LOGISTICA Y DISTRIBUCION FISICA INTERNACIONAL', semester: 5, prerequisites: ['c20'] },
        { id: 'c26', name: 'MARKETING I', semester: 5, prerequisites: ['c9'] },
        { id: 'c27', name: 'FUNDAMENTOS DE DERECHO', semester: 5, prerequisites: [] },
        { id: 'c28', name: 'ANALISIS DE COSTOS Y PRESUPUESTO', semester: 5, prerequisites: ['c24'] },
        { id: 'c29', name: 'ESTADISTICA II', semester: 5, prerequisites: ['c23'] },
        { id: 'c30', name: 'VALORACION ADUANERA', semester: 5, prerequisites: ['c20'] },

        // Semestre 6
        { id: 'c31', name: 'DERECHO COMERCIAL Y TRIBUTARIO', semester: 6, prerequisites: ['c27'] },
        { id: 'c32', name: 'EFE', semester: 6, prerequisites: [] },
        { id: 'c33', name: 'SUPPLY CHAIN MANAGEMENT', semester: 6, prerequisites: ['c25'] },
        { id: 'c34', name: 'MARKETING II', semester: 6, prerequisites: ['c26'] },
        { id: 'c35', name: 'REGIMENES ADUANEROS Y ACUERDOS INTERNACIONALES', semester: 6, prerequisites: ['c30'] },
        { id: 'c36', name: 'FINANZAS I', semester: 6, prerequisites: ['c13'] },

        // Semestre 7
        { id: 'c37', name: 'SEGUROS INTERNACIONALES', semester: 7, prerequisites: [] },
        { id: 'c38', name: 'DERECHO INTERNACIONAL', semester: 7, prerequisites: ['c27'] },
        { id: 'c39', name: 'INVESTIGACION DE MERCADO', semester: 7, prerequisites: ['c34'] },
        { id: 'c40', name: 'ECONOMIA INTERNACIONAL', semester: 7, prerequisites: ['c18'] },
        { id: 'c41', name: 'MERCIOLOGIA', semester: 7, prerequisites: ['c18'] },
        { id: 'c42', name: 'PREPARACION Y EVALUACION DE PROYECTOS', semester: 7, prerequisites: ['c36'] },

        // Semestre 8
        { id: 'c43', name: 'MARKETING INTERNACIONAL', semester: 8, prerequisites: ['c39'] },
        { id: 'c44', name: 'FINANZAS CORPORATIVAS', semester: 8, prerequisites: ['c36'] },
        { id: 'c45', name: 'POLITICA ECONOMICA', semester: 8, prerequisites: ['c22'] },
        { id: 'c46', name: 'INGLES PARA EL COMERCIO INTERNACIONAL III', semester: 8, prerequisites: ['c21'] },
        { id: 'c47', name: 'TALLER DE CIENCIA Y TECNOLOGIA', semester: 8, prerequisites: [] },
        { id: 'c48', name: 'TALLER INTEGRAL DE COMERCIO EXTERIOR AVANZADO', semester: 8, prerequisites: ['c37'] },

        // Semestre 9
        { id: 'c49', name: 'TRABAJO DE TITULO I', semester: 9, prerequisites: ['c29'] },
        { id: 'c50', name: 'SISTEMAS INTEGRADOS DE GESTION', semester: 9, prerequisites: ['c48'] },
        { id: 'c51', name: 'FINANZAS INTERNACIONALES', semester: 9, prerequisites: ['c36'] },
        { id: 'c52', name: 'INGLES PARA EL COMERCIO INTERNACIONAL IV', semester: 9, prerequisites: ['c46'] },
        { id: 'c53', name: 'RELACIONES ECONOMICAS INTERNACIONALES', semester: 9, prerequisites: [] },
        { id: 'c54', name: 'TALLER DE INNOVACION Y EMPRENDIMIENTO', semester: 9, prerequisites: [] },

        // Semestre 10
        { id: 'c55', name: 'ETICA Y LA GESTION ORGANIZACIONAL', semester: 10, prerequisites: [] },
        { id: 'c56', name: 'TRABAJO DE TITULO II', semester: 10, prerequisites: ['c49'] },
        { id: 'c57', name: 'PLANIFICACION ESTRATEGICA', semester: 10, prerequisites: ['c48'] },
        { id: 'c58', name: 'PRACTICA PROFESIONAL', semester: 10, prerequisites: ['c45'] }
    ];

    const courseTrackerDiv = document.getElementById('course-tracker');
    let approvedCourses = new Set(); // Stores IDs of approved courses

    // Load progress from Local Storage
    const savedProgress = localStorage.getItem('approvedCourses');
    if (savedProgress) {
        approvedCourses = new Set(JSON.parse(savedProgress));
    }

    // Function to save progress to Local Storage
    const saveProgress = () => {
        localStorage.setItem('approvedCourses', JSON.stringify(Array.from(approvedCourses)));
    };

    // Function to check if a course is unlocked
    const isCourseUnlocked = (courseId) => {
        const course = courses.find(c => c.id === courseId);
        if (!course) return false;

        // A course is unlocked if it has no prerequisites, or if all its prerequisites are approved.
        return course.prerequisites.length === 0 ||
               course.prerequisites.every(prereqId => approvedCourses.has(prereqId));
    };

    // New function to unapprove a course and all its dependencies
    const unapproveDependencies = (courseId) => {
        // Find all courses that have the given courseId as a prerequisite
        const dependentCourses = courses.filter(course =>
            course.prerequisites.includes(courseId)
        );

        dependentCourses.forEach(dependentCourse => {
            // Only unapprove if it's currently approved
            if (approvedCourses.has(dependentCourse.id)) {
                approvedCourses.delete(dependentCourse.id);
                // Recursively unapprove the dependencies of this course
                unapproveDependencies(dependentCourse.id);
            }
        });
    };

    // Function to toggle course status (approve/unapprove)
    const toggleCourseStatus = (courseId) => {
        // If the course is currently approved, unapprove it and its dependencies.
        if (approvedCourses.has(courseId)) {
            approvedCourses.delete(courseId);
            unapproveDependencies(courseId); // Trigger the cascade effect
        } else {
            // If the course is not approved, check if it's unlocked and then approve it.
            if (isCourseUnlocked(courseId)) {
                approvedCourses.add(courseId);
            } else {
                // If the course is locked, do nothing when clicked.
                return;
            }
        }
        saveProgress();
        renderCourses(); // Re-render the entire UI to reflect changes
    };

    // Function to render/update the course display
    const renderCourses = () => {
        courseTrackerDiv.innerHTML = ''; // Clear existing courses

        // Group courses by semester
        const coursesBySemester = courses.reduce((acc, course) => {
            if (!acc[course.semester]) {
                acc[course.semester] = [];
            }
            acc[course.semester].push(course);
            return acc;
        }, {});

        // Sort semester numbers to ensure correct order
        const sortedSemesters = Object.keys(coursesBySemester).sort((a, b) => a - b);

        sortedSemesters.forEach(semesterNum => {
            const semesterDiv = document.createElement('div');
            semesterDiv.classList.add('semester');
            semesterDiv.innerHTML = `<h2>Semestre ${semesterNum}</h2>`;

            coursesBySemester[semesterNum].forEach(course => {
                const courseDiv = document.createElement('div');
                courseDiv.classList.add('course');
                courseDiv.dataset.id = course.id;
                courseDiv.textContent = course.name;

                courseDiv.addEventListener('click', () => toggleCourseStatus(course.id));

                if (approvedCourses.has(course.id)) {
                    courseDiv.classList.add('approved');
                } else if (isCourseUnlocked(course.id)) {
                    courseDiv.classList.add('unlocked');
                } else {
                    courseDiv.classList.add('locked');
                }
                semesterDiv.appendChild(courseDiv);
            });
            courseTrackerDiv.appendChild(semesterDiv);
        });
    };

    // Initial render of courses
    renderCourses();
});
