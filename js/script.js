document.addEventListener('DOMContentLoaded', () => {
    // --- DATOS DE CURSOS ---
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

    // Datos de tiempo para el horario
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const timeSlots = [
        '8:00 - 9:30',
        '9:40 - 11:10',
        '11:20 - 12:50',
        '13:00 - 14:30',
        '14:40 - 16:10',
        '16:20 - 17:50',
    ];

    // --- ELEMENTOS DEL DOM ---
    const courseTrackerDiv = document.getElementById('course-tracker');
    const scheduleGrid = document.getElementById('schedule-grid');
    const availableCoursesSidebar = document.getElementById('available-courses');
    const showProgressBtn = document.getElementById('show-progress-btn');
    const showScheduleBtn = document.getElementById('show-schedule-btn');
    const progressView = document.getElementById('progress-view');
    const scheduleView = document.getElementById('schedule-view');
    const semesterButtonsContainer = document.getElementById('semester-buttons-container');
    const clearScheduleBtn = document.getElementById('clear-schedule-btn');

    // --- ESTADOS ---
    let approvedCourses = new Set();
    let checkedSidebarCourses = new Set(); // Para los checks del sidebar
    let currentSemesterFilter = '1';
    let scheduleData = {}; // Estructura: { semester: { day: { slot: [ {course, professor} ] } } }
    let draggedCourseId = null;

    // --- LOCAL STORAGE ---
    const loadData = () => {
        // Cargar Progreso
        const savedProgress = localStorage.getItem('approvedCourses');
        if (savedProgress) approvedCourses = new Set(JSON.parse(savedProgress));

        // Cargar Checks del Sidebar
        const savedChecks = localStorage.getItem('checkedSidebarCourses');
        if (savedChecks) checkedSidebarCourses = new Set(JSON.parse(savedChecks));

        // Cargar Horario
        const savedSchedule = localStorage.getItem('scheduleData');
        if (savedSchedule) scheduleData = JSON.parse(savedSchedule);
    };

    const saveData = (type) => {
        if (type === 'progress') {
            localStorage.setItem('approvedCourses', JSON.stringify(Array.from(approvedCourses)));
        } else if (type === 'checks') {
            localStorage.setItem('checkedSidebarCourses', JSON.stringify(Array.from(checkedSidebarCourses)));
        } else if (type === 'schedule') {
            localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
        }
    };

    // --- NAVEGACIÓN ---
    const showView = (viewToShow) => {
        progressView.classList.remove('active-view');
        scheduleView.classList.remove('active-view');
        progressView.classList.add('hidden-view');
        scheduleView.classList.add('hidden-view');
        
        showProgressBtn.classList.remove('active');
        showScheduleBtn.classList.remove('active');

        if (viewToShow === 'progress') {
            progressView.classList.add('active-view');
            showProgressBtn.classList.add('active');
            semesterButtonsContainer.classList.add('hidden');
            renderCourses();
        } else {
            scheduleView.classList.add('active-view');
            showScheduleBtn.classList.add('active');
            semesterButtonsContainer.classList.remove('hidden');
            renderSemesterButtons();
            renderSchedule();
            renderDraggableCourses();
        }
    };

    showProgressBtn.addEventListener('click', () => showView('progress'));
    showScheduleBtn.addEventListener('click', () => showView('schedule'));

    // --- FUNCIONES RASTREADOR (MALLA) ---
    const isCourseUnlocked = (courseId) => {
        const course = courses.find(c => c.id === courseId);
        if (!course) return false;
        return course.prerequisites.length === 0 || course.prerequisites.every(prereqId => approvedCourses.has(prereqId));
    };

    const unapproveDependencies = (courseId) => {
        const dependentCourses = courses.filter(course => course.prerequisites.includes(courseId));
        dependentCourses.forEach(dependentCourse => {
            if (approvedCourses.has(dependentCourse.id)) {
                approvedCourses.delete(dependentCourse.id);
                unapproveDependencies(dependentCourse.id);
            }
        });
    };

    const toggleCourseStatus = (courseId) => {
        if (approvedCourses.has(courseId)) {
            approvedCourses.delete(courseId);
            unapproveDependencies(courseId);
        } else {
            if (isCourseUnlocked(courseId)) {
                approvedCourses.add(courseId);
            } else { return; }
        }
        saveData('progress');
        renderCourses();
    };

    const renderCourses = () => {
        courseTrackerDiv.innerHTML = '';
        const coursesBySemester = courses.reduce((acc, course) => {
            if (!acc[course.semester]) acc[course.semester] = [];
            acc[course.semester].push(course);
            return acc;
        }, {});

        Object.keys(coursesBySemester).sort((a, b) => a - b).forEach(semesterNum => {
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

    // --- FUNCIONES HORARIO ---
    
    // Renderizar botones de semestre en la navbar
    const renderSemesterButtons = () => {
        semesterButtonsContainer.innerHTML = '';
        const uniqueSemesters = [...new Set(courses.map(c => c.semester))].sort((a, b) => a - b);

        uniqueSemesters.forEach(semester => {
            const btn = document.createElement('button');
            btn.classList.add('semester-button');
            btn.textContent = `Semestre ${semester}`;
            if (semester.toString() === currentSemesterFilter) btn.classList.add('active');
            
            btn.addEventListener('click', () => {
                currentSemesterFilter = semester.toString();
                renderSemesterButtons(); // Re-renderizar para actualizar clase active
                renderSchedule();
                renderDraggableCourses();
            });
            semesterButtonsContainer.appendChild(btn);
        });
    };

    // Renderizar Sidebar de Ramos
    const renderDraggableCourses = () => {
        availableCoursesSidebar.innerHTML = '';
        const semNum = parseInt(currentSemesterFilter);
        const semesterCourses = courses.filter(c => c.semester === semNum);

        if (semesterCourses.length > 0) {
            const header = document.createElement('h3');
            header.textContent = `Semestre ${semNum}`;
            availableCoursesSidebar.appendChild(header);

            semesterCourses.forEach(course => {
                const courseDiv = document.createElement('div');
                courseDiv.classList.add('course-draggable');
                
                // Verificar checkbox
                const isChecked = checkedSidebarCourses.has(course.id);
                if (isChecked) courseDiv.classList.add('sidebar-checked');

                // Checkbox
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'sidebar-checkbox';
                checkbox.checked = isChecked;
                checkbox.addEventListener('change', (e) => {
                    if (e.target.checked) checkedSidebarCourses.add(course.id);
                    else checkedSidebarCourses.delete(course.id);
                    saveData('checks');
                    renderDraggableCourses();
                });
                // Evitar drag al hacer clic en el checkbox
                checkbox.addEventListener('mousedown', (e) => e.stopPropagation());

                // Nombre
                const nameSpan = document.createElement('span');
                nameSpan.textContent = course.name;

                courseDiv.appendChild(nameSpan);
                courseDiv.appendChild(checkbox);

                // Drag Events
                courseDiv.draggable = true;
                courseDiv.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('text/plain', course.id);
                });

                availableCoursesSidebar.appendChild(courseDiv);
            });
        }
    };

    // Renderizar Cuadrícula
    const renderSchedule = () => {
        scheduleGrid.innerHTML = '';
        scheduleGrid.style.gridTemplateColumns = `auto repeat(${days.length}, 1fr)`;

        // Inicilizar datos para este semestre si no existen
        if (!scheduleData[currentSemesterFilter]) scheduleData[currentSemesterFilter] = {};

        // Headers
        const corner = document.createElement('div');
        corner.classList.add('schedule-header-cell');
        scheduleGrid.appendChild(corner);

        days.forEach(day => {
            const cell = document.createElement('div');
            cell.classList.add('schedule-header-cell');
            cell.textContent = day;
            scheduleGrid.appendChild(cell);
        });

        // Filas de tiempo
        timeSlots.forEach(timeSlot => {
            const timeHeader = document.createElement('div');
            timeHeader.classList.add('time-slot-header');
            timeHeader.textContent = timeSlot;
            scheduleGrid.appendChild(timeHeader);

            days.forEach(day => {
                const cell = document.createElement('div');
                cell.classList.add('schedule-cell');
                
                // Drop Events
                cell.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    cell.classList.add('drag-over');
                });
                cell.addEventListener('dragleave', () => cell.classList.remove('drag-over'));
                cell.addEventListener('drop', (e) => {
                    e.preventDefault();
                    cell.classList.remove('drag-over');
                    const cId = e.dataTransfer.getData('text/plain');
                    const courseObj = courses.find(c => c.id === cId);
                    
                    if (courseObj) {
                        // Estructura de datos
                        if (!scheduleData[currentSemesterFilter][day]) scheduleData[currentSemesterFilter][day] = {};
                        if (!scheduleData[currentSemesterFilter][day][timeSlot]) scheduleData[currentSemesterFilter][day][timeSlot] = [];
                        
                        // Añadir curso + profesor vacío
                        scheduleData[currentSemesterFilter][day][timeSlot].push({
                            course: courseObj,
                            professor: ''
                        });
                        saveData('schedule');
                        renderSchedule();
                    }
                });

                // Renderizar items existentes
                const currentData = scheduleData[currentSemesterFilter];
                if (currentData && currentData[day] && currentData[day][timeSlot]) {
                    currentData[day][timeSlot].forEach((item, idx) => {
                        // Migración simple si datos antiguos
                        if (!item.course && item.id) item = { course: item, professor: '' };

                        const div = document.createElement('div');
                        div.classList.add('scheduled-course');
                        
                        const title = document.createElement('div');
                        title.textContent = item.course.name;
                        div.appendChild(title);

                        const input = document.createElement('input');
                        input.type = 'text';
                        input.classList.add('professor-input');
                        input.placeholder = 'Profesor';
                        input.value = item.professor || '';
                        input.addEventListener('mousedown', (e) => e.stopPropagation()); // permitir escribir sin arrastrar
                        input.addEventListener('change', (e) => {
                            item.professor = e.target.value;
                            saveData('schedule');
                        });
                        div.appendChild(input);

                        const removeBtn = document.createElement('button');
                        removeBtn.innerHTML = '×';
                        removeBtn.classList.add('remove-btn');
                        removeBtn.addEventListener('click', () => {
                            currentData[day][timeSlot].splice(idx, 1);
                            saveData('schedule');
                            renderSchedule();
                        });
                        div.appendChild(removeBtn);

                        cell.appendChild(div);
                    });
                }
                scheduleGrid.appendChild(cell);
            });
        });
    };

    // Botón Limpiar
    clearScheduleBtn.addEventListener('click', () => {
        if (confirm('¿Borrar todo el horario del semestre ' + currentSemesterFilter + '?')) {
            delete scheduleData[currentSemesterFilter];
            saveData('schedule');
            renderSchedule();
        }
    });

    // --- INIT ---
    loadData();
    showView('progress'); // Iniciar en Malla
});
