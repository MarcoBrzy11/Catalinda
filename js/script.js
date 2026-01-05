document.addEventListener('DOMContentLoaded', () => {
    // --- Project Data ---
    const courses = [
        // Semester 1
        { id: 'c1', name: 'GESTION I', semester: 1, prerequisites: [] },
        { id: 'c2', name: 'HABILIDADES DE TRABAJO ACADEMICO', semester: 1, prerequisites: [] },
        { id: 'c3', name: 'COMERCIO INTERNACIONAL I', semester: 1, prerequisites: [] },
        { id: 'c4', name: 'MATEMATICA I', semester: 1, prerequisites: [] },
        { id: 'c5', name: 'HABILIDADES DE RAZONAMIENTO LOGICO', semester: 1, prerequisites: [] },
        { id: 'c6', name: 'INGLES I', semester: 1, prerequisites: [] },
        // Semester 2
        { id: 'c7', name: 'TALLER DE PRINCIPIOS DE SUSTENTABILIDAD', semester: 2, prerequisites: [] },
        { id: 'c8', name: 'MATEMATICA II', semester: 2, prerequisites: ['c4'] },
        { id: 'c9', name: 'GESTION II', semester: 2, prerequisites: ['c1'] },
        { id: 'c10', name: 'COMERCIO INTERNACIONAL II', semester: 2, prerequisites: ['c3'] },
        { id: 'c11', name: 'INGLES II', semester: 2, prerequisites: ['c6'] },
        { id: 'c12', name: 'FUNDAMENTOS DE ECONOMIA', semester: 2, prerequisites: [] },
        // Semester 3
        { id: 'c13', name: 'CONTABILIDAD I', semester: 3, prerequisites: [] },
        { id: 'c14', name: 'GESTION ADUANERA', semester: 3, prerequisites: ['c3'] },
        { id: 'c15', name: 'ADMINISTRACION DE PERSONAL', semester: 3, prerequisites: ['c1'] },
        { id: 'c16', name: 'INGLES PARA EL COMERCIO INTERNACIONAL I', semester: 3, prerequisites: ['c11'] },
        { id: 'c17', name: 'MATEMATICA III', semester: 3, prerequisites: ['c8'] },
        { id: 'c18', name: 'MICROECONOMIA I', semester: 3, prerequisites: ['c12'] },
        // Semester 4
        { id: 'c19', name: 'PRACTICA INDUCTIVA', semester: 4, prerequisites: ['c15'] },
        { id: 'c20', name: 'TALLER INTEGRAL DE COMERCIO EXTERIOR', semester: 4, prerequisites: ['c14'] },
        { id: 'c21', name: 'INGLES PARA EL COMERCIO INTERNACIONAL II', semester: 4, prerequisites: ['c16'] },
        { id: 'c22', name: 'MACROECONOMIA I', semester: 4, prerequisites: ['c12'] },
        { id: 'c23', name: 'ESTADISTICA I', semester: 4, prerequisites: ['c4'] },
        { id: 'c24', name: 'CONTABILIDAD II', semester: 4, prerequisites: ['c13'] },
        // Semester 5
        { id: 'c25', name: 'LOGISTICA Y DISTRIBUCION FISICA INTERNACIONAL', semester: 5, prerequisites: ['c20'] },
        { id: 'c26', name: 'MARKETING I', semester: 5, prerequisites: ['c9'] },
        { id: 'c27', name: 'FUNDAMENTOS DE DERECHO', semester: 5, prerequisites: [] },
        { id: 'c28', name: 'ANALISIS DE COSTOS Y PRESUPUESTO', semester: 5, prerequisites: ['c24'] },
        { id: 'c29', name: 'ESTADISTICA II', semester: 5, prerequisites: ['c23'] },
        { id: 'c30', name: 'VALORACION ADUANERA', semester: 5, prerequisites: ['c20'] },
        // Semester 6
        { id: 'c31', name: 'DERECHO COMERCIAL Y TRIBUTARIO', semester: 6, prerequisites: ['c27'] },
        { id: 'c32', name: 'EFE', semester: 6, prerequisites: [] },
        { id: 'c33', name: 'SUPPLY CHAIN MANAGEMENT', semester: 6, prerequisites: ['c25'] },
        { id: 'c34', name: 'MARKETING II', semester: 6, prerequisites: ['c26'] },
        { id: 'c35', name: 'REGIMENES ADUANEROS Y ACUERDOS INTERNACIONALES', semester: 6, prerequisites: ['c30'] },
        { id: 'c36', name: 'FINANZAS I', semester: 6, prerequisites: ['c13'] },
        // Semester 7
        { id: 'c37', name: 'SEGUROS INTERNACIONALES', semester: 7, prerequisites: [] },
        { id: 'c38', name: 'DERECHO INTERNACIONAL', semester: 7, prerequisites: ['c27'] },
        { id: 'c39', name: 'INVESTIGACION DE MERCADO', semester: 7, prerequisites: ['c34'] },
        { id: 'c40', name: 'ECONOMIA INTERNACIONAL', semester: 7, prerequisites: ['c18'] },
        { id: 'c41', name: 'MERCIOLOGIA', semester: 7, prerequisites: ['c18'] },
        { id: 'c42', name: 'PREPARACION Y EVALUACION DE PROYECTOS', semester: 7, prerequisites: ['c36'] },
        // Semester 8
        { id: 'c43', name: 'MARKETING INTERNACIONAL', semester: 8, prerequisites: ['c39'] },
        { id: 'c44', name: 'FINANZAS CORPORATIVAS', semester: 8, prerequisites: ['c36'] },
        { id: 'c45', name: 'POLITICA ECONOMICA', semester: 8, prerequisites: ['c22'] },
        { id: 'c46', name: 'INGLES PARA EL COMERCIO INTERNACIONAL III', semester: 8, prerequisites: ['c21'] },
        { id: 'c47', name: 'TALLER DE CIENCIA Y TECNOLOGIA', semester: 8, prerequisites: [] },
        { id: 'c48', name: 'TALLER INTEGRAL DE COMERCIO EXTERIOR AVANZADO', semester: 8, prerequisites: ['c37'] },
        // Semester 9
        { id: 'c49', name: 'TRABAJO DE TITULO I', semester: 9, prerequisites: ['c29'] },
        { id: 'c50', name: 'SISTEMAS INTEGRADOS DE GESTION', semester: 9, prerequisites: ['c48'] },
        { id: 'c51', name: 'FINANZAS INTERNACIONALES', semester: 9, prerequisites: ['c36'] },
        { id: 'c52', name: 'INGLES PARA EL COMERCIO INTERNACIONAL IV', semester: 9, prerequisites: ['c46'] },
        { id: 'c53', name: 'RELACIONES ECONOMICAS INTERNACIONALES', semester: 9, prerequisites: [] },
        { id: 'c54', name: 'TALLER DE INNOVACION Y EMPRENDIMIENTO', semester: 9, prerequisites: [] },
        // Semester 10
        { id: 'c55', name: 'ETICA Y LA GESTION ORGANIZACIONAL', semester: 10, prerequisites: [] },
        { id: 'c56', name: 'TRABAJO DE TITULO II', semester: 10, prerequisites: ['c49'] },
        { id: 'c57', name: 'PLANIFICACION ESTRATEGICA', semester: 10, prerequisites: ['c48'] },
        { id: 'c58', name: 'PRACTICA PROFESIONAL', semester: 10, prerequisites: ['c45'] }
    ];

    // Schedule data
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const timeSlots = [
        '8:00 - 9:30',
        '9:40 - 11:10',
        '11:20 - 12:50',
        '13:00 - 14:30',
        '14:40 - 16:10',
        '16:20 - 17:50',
    ];

    // --- DOM Elements ---
    const courseTrackerDiv = document.getElementById('course-tracker');
    const scheduleGrid = document.getElementById('schedule-grid');
    const availableCoursesSidebar = document.getElementById('available-courses');
    const showProgressBtn = document.getElementById('show-progress-btn');
    const showScheduleBtn = document.getElementById('show-schedule-btn');
    const progressView = document.getElementById('progress-view');
    const scheduleView = document.getElementById('schedule-view');
    const semesterButtonsContainer = document.getElementById('semester-buttons-container');
    const clearScheduleBtn = document.getElementById('clear-schedule-btn');

    // --- Application States ---
    let approvedCourses = new Set();
    let currentSemesterFilter = '1'; // Start with Semester 1 selected by default in the schedule
    // scheduleData will now nest schedules by semester: { 'semesterNum': { 'day': { 'timeSlot': [course, course] } } }
    let scheduleData = {};
    let draggedCourseId = null;

    // --- Local Storage Logic ---
    const loadProgress = () => {
        const savedProgress = localStorage.getItem('approvedCourses');
        if (savedProgress) {
            approvedCourses = new Set(JSON.parse(savedProgress));
        }
    };
    const saveProgress = () => {
        localStorage.setItem('approvedCourses', JSON.stringify(Array.from(approvedCourses)));
    };
    const loadSchedule = () => {
        const savedSchedule = localStorage.getItem('scheduleData');
        if (savedSchedule) {
            scheduleData = JSON.parse(savedSchedule);
        }
    };
    const saveSchedule = () => {
        localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
    };

    // --- View and Navigation Logic ---
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
            semesterButtonsContainer.classList.add('hidden'); // Hide semester buttons
            renderCourses();
        } else { // viewToShow === 'schedule'
            scheduleView.classList.add('active-view');
            showScheduleBtn.classList.add('active');
            semesterButtonsContainer.classList.remove('hidden'); // Show semester buttons
            renderSemesterButtons(); // Render semester buttons
            renderSchedule();
            renderDraggableCourses();
        }
    };
    showProgressBtn.addEventListener('click', () => showView('progress'));
    showScheduleBtn.addEventListener('click', () => showView('schedule'));

    // --- Progress Tracker Functions ---
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
            } else {
                return;
            }
        }
        saveProgress();
        renderCourses();
    };
    const renderCourses = () => {
        courseTrackerDiv.innerHTML = '';
        const coursesBySemester = courses.reduce((acc, course) => {
            if (!acc[course.semester]) acc[course.semester] = [];
            acc[course.semester].push(course);
            return acc;
        }, {});
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

    // --- Schedule Functions ---
    const renderSchedule = () => {
        scheduleGrid.innerHTML = '';
        scheduleGrid.style.gridTemplateColumns = `auto repeat(${days.length}, 1fr)`;
        
        // Initialize the schedule object for the current semester if it doesn't exist
        if (!scheduleData[currentSemesterFilter]) {
            scheduleData[currentSemesterFilter] = {};
        }

        // Day headers
        const cornerHeader = document.createElement('div');
        cornerHeader.classList.add('schedule-header-cell');
        scheduleGrid.appendChild(cornerHeader);
        days.forEach(day => {
            const headerCell = document.createElement('div');
            headerCell.classList.add('schedule-header-cell');
            headerCell.textContent = day;
            scheduleGrid.appendChild(headerCell);
        });

        // Time slots and schedule cells
        timeSlots.forEach(timeSlot => {
            const timeHeader = document.createElement('div');
            timeHeader.classList.add('time-slot-header');
            timeHeader.textContent = timeSlot;
            scheduleGrid.appendChild(timeHeader);

            days.forEach(day => {
                const cell = document.createElement('div');
                cell.classList.add('schedule-cell');
                cell.dataset.day = day;
                cell.dataset.time = timeSlot;
                
                // Drag & Drop events
                cell.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    cell.classList.add('drag-over');
                });
                cell.addEventListener('dragleave', () => {
                    cell.classList.remove('drag-over');
                });
                cell.addEventListener('drop', (e) => {
                    e.preventDefault();
                    cell.classList.remove('drag-over');
                    const courseId = e.dataTransfer.getData('text/plain');
                    const course = courses.find(c => c.id === courseId);
                    if (course) {
                        // Save to the current semester's data object (allows repetition)
                        if (!scheduleData[currentSemesterFilter][day]) {
                            scheduleData[currentSemesterFilter][day] = {};
                        }
                        if (!scheduleData[currentSemesterFilter][day][timeSlot]) {
                            scheduleData[currentSemesterFilter][day][timeSlot] = [];
                        }
                        scheduleData[currentSemesterFilter][day][timeSlot].push(course);
                        
                        saveSchedule();
                        renderSchedule();
                        renderDraggableCourses(); // Re-render to update draggable list
                    }
                });
                
                // Render courses if already scheduled for the current semester
                if (scheduleData[currentSemesterFilter] && 
                    scheduleData[currentSemesterFilter][day] && 
                    scheduleData[currentSemesterFilter][day][timeSlot]) {
                    
                    const coursesInCell = Array.isArray(scheduleData[currentSemesterFilter][day][timeSlot]) ? 
                                          scheduleData[currentSemesterFilter][day][timeSlot] : 
                                          [scheduleData[currentSemesterFilter][day][timeSlot]]; // Ensure it's an array
                    
                    coursesInCell.forEach((scheduledCourse, index) => {
                        const courseDiv = document.createElement('div');
                        courseDiv.classList.add('scheduled-course');
                        courseDiv.textContent = scheduledCourse.name;
                        
                        // Remove button
                        const removeBtn = document.createElement('button');
                        removeBtn.textContent = '×';
                        removeBtn.classList.add('remove-btn');
                        removeBtn.addEventListener('click', () => {
                            // Remove only this instance of the course
                            if (Array.isArray(scheduleData[currentSemesterFilter][day][timeSlot])) {
                                scheduleData[currentSemesterFilter][day][timeSlot].splice(index, 1);
                                if (scheduleData[currentSemesterFilter][day][timeSlot].length === 0) {
                                    delete scheduleData[currentSemesterFilter][day][timeSlot];
                                }
                            } else {
                                delete scheduleData[currentSemesterFilter][day][timeSlot];
                            }
                            saveSchedule();
                            renderSchedule();
                            renderDraggableCourses();
                        });
                        courseDiv.appendChild(removeBtn);
                        cell.appendChild(courseDiv);
                    });
                }
                scheduleGrid.appendChild(cell);
            });
        });
    };

    const renderDraggableCourses = () => {
        availableCoursesSidebar.innerHTML = '';
        
        let coursesToDisplay = courses;
        // Filter courses by the selected semester
        if (currentSemesterFilter !== 'all') {
            coursesToDisplay = courses.filter(course => course.semester === parseInt(currentSemesterFilter));
        }

        // Group courses by semester from the already filtered list
        const coursesBySemesterForSidebar = coursesToDisplay.reduce((acc, course) => {
            if (!acc[course.semester]) {
                acc[course.semester] = [];
            }
            acc[course.semester].push(course);
            return acc;
        }, {});

        const sortedSemestersForSidebar = Object.keys(coursesBySemesterForSidebar).sort((a, b) => a - b);

        sortedSemestersForSidebar.forEach(semesterNum => {
            // Only show the semester header if there are courses for that semester in the filtered list
            if (coursesBySemesterForSidebar[semesterNum] && coursesBySemesterForSidebar[semesterNum].length > 0) {
                const semesterHeader = document.createElement('h4');
                semesterHeader.textContent = `Semestre ${semesterNum}`;
                semesterHeader.style.marginTop = '15px';
                semesterHeader.style.marginBottom = '10px';
                semesterHeader.style.textAlign = 'center';
                semesterHeader.style.color = 'var(--title-color)';
                availableCoursesSidebar.appendChild(semesterHeader);

                coursesBySemesterForSidebar[semesterNum].forEach(course => {
                    const courseDiv = document.createElement('div');
                    courseDiv.classList.add('course-draggable');
                    courseDiv.textContent = course.name;
                    courseDiv.draggable = true;
                    courseDiv.dataset.id = course.id;
                    courseDiv.addEventListener('dragstart', (e) => {
                        e.dataTransfer.setData('text/plain', e.target.dataset.id);
                        draggedCourseId = e.target.dataset.id;
                    });
                    availableCoursesSidebar.appendChild(courseDiv);
                });
            }
        });
    };

    // Logic for semester buttons in the navigation
    const renderSemesterButtons = () => {
        semesterButtonsContainer.innerHTML = ''; // Clear existing buttons
        const uniqueSemesters = [...new Set(courses.map(c => c.semester))].sort((a, b) => a - b);
        
        // "All Semesters" button
        const allSemesterBtn = document.createElement('button');
        allSemesterBtn.classList.add('semester-button');
        allSemesterBtn.textContent = 'Todos';
        allSemesterBtn.dataset.semester = 'all';
        allSemesterBtn.addEventListener('click', (e) => {
            currentSemesterFilter = e.target.dataset.semester;
            updateActiveSemesterButton();
            renderSchedule();
            renderDraggableCourses();
        });
        semesterButtonsContainer.appendChild(allSemesterBtn);

        uniqueSemesters.forEach(semester => {
            const semesterBtn = document.createElement('button');
            semesterBtn.classList.add('semester-button');
            semesterBtn.textContent = `Semestre ${semester}`;
            semesterBtn.dataset.semester = semester;
            semesterBtn.addEventListener('click', (e) => {
                currentSemesterFilter = e.target.dataset.semester;
                updateActiveSemesterButton();
                renderSchedule();
                renderDraggableCourses();
            });
            semesterButtonsContainer.appendChild(semesterBtn);
        });
        updateActiveSemesterButton(); // Set the active button on render
    };

    const updateActiveSemesterButton = () => {
        document.querySelectorAll('.semester-button').forEach(button => {
            if (button.dataset.semester === currentSemesterFilter) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    };

    clearScheduleBtn.addEventListener('click', () => {
        // Use a simple modal instead of alert/confirm
        const confirmClear = confirm(`¿Estás seguro de que quieres borrar el horario del Semestre ${currentSemesterFilter === 'all' ? 'actual' : currentSemesterFilter}? Esta acción no se puede deshacer.`);
        if (confirmClear) {
            if (currentSemesterFilter === 'all') {
                scheduleData = {};
            } else {
                delete scheduleData[currentSemesterFilter];
            }
            saveSchedule();
            renderSchedule();
            renderDraggableCourses();
        }
    });

    // --- Initialization ---
    loadProgress();
    loadSchedule();
    // populateSemesterSelect() is not called here, as buttons are rendered in showView('schedule')
    showView('progress'); // Start on the tracker view
});
