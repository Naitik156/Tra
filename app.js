const { useState, useEffect } = React;

// Syllabus data structure for both exams
const EXAM_SYLLABUS = {
    NEET: {
        "Class 11": {
            Physics: [
                "Vectors",
                "Units and Measurements",
                "Motion in a Straight Line",
                "Motion in a Plane",
                "Laws of Motion",
                "Work, Energy and Power",
                "Rotational Motion",
                "Gravitation",
                "Mechanical Properties of Solids",
                "Mechanical Properties of Fluids",
                "Thermal Properties of Matter",
                "Thermodynamics",
                "Kinetic Theory",
                "Oscillations",
                "Waves"
            ],
            "Physical Chemistry": [
                "Some Basic Concepts of Chemistry",
                "Structure of atom",
                "States of Matter",
                "Thermodynamics",
                "Redox Reactions",
                "Chemical equilibrium",
                "Ionic equilibrium"
            ],
            "Organic Chemistry": [
                "Some Basic principles and Techniques (IUPAC Naming)",
                "Some Basic principles and Techniques (Isomerism)",
                "General organic chemistry (GOC)",
                "Purification, Characterisation, Qualitative & Quantitative",
                "Hydrocarbons"
            ],
            "Inorganic Chemistry": [
                "Classification of Elements and Periodicity in Properties",
                "Chemical Bonding and Molecular Structure",
                "The p-Block Elements"
            ],
            Botany: [
                "Cell-the unit of life",
                "Cell cycle cell division",
                "The living world",
                "Biological classification",
                "Plant kingdom",
                "Morphology of flowering plants",
                "Anatomy of flowering plants",
                "Photosynthesis in higher plants",
                "Respiration in plants",
                "Plant growth and development"
            ],
            Zoology: [
                "Structural Organisation in Animals",
                "Breathing & Exchange of Gases",
                "Body Fluids & Circulation",
                "Excretory Products & Their Elimination",
                "Locomotion & Movement",
                "Neural Control & Coordination",
                "Chemical Coordination & Integration",
                "Animal kingdom",
                "Biomolecules"
            ]
        },
        "Class 12": {
            Physics: [
                "Electric Charges and Fields",
                "Electrostatic Potential and Capacitance",
                "Current Electricity",
                "Moving Charges and Magnetism",
                "Magnetism and Matter",
                "Electromagnetic Induction",
                "Alternating Current",
                "Electromagnetic Waves",
                "Ray Optics and Optical Instruments",
                "Wave Optics",
                "Dual Nature of Radiation and Matter",
                "Atoms",
                "Nuclei",
                "Semiconductor Electronics",
                "Communication Systems"
            ],
            "Physical Chemistry": [
                "Solutions",
                "Electrochemistry",
                "Chemical Kinetics",
                "Surface Chemistry",
                "Solid State"
            ],
            "Organic Chemistry": [
                "Haloalkanes and Haloarenes",
                "Alcohols, Phenols and Ethers",
                "Aldehydes, Ketones and Carboxylic Acids",
                "Amines",
                "Biomolecules",
                "Polymers",
                "Chemistry in Everyday Life"
            ],
            "Inorganic Chemistry": [
                "General Principles and Processes of Isolation of Elements",
                "The p-Block Elements",
                "The d-Block and f-Block Elements",
                "Coordination Compounds"
            ],
            Botany: [
                "Reproduction in Organisms",
                "Sexual Reproduction in Flowering Plants",
                "Human Reproduction",
                "Reproductive Health",
                "Principles of Inheritance and Variation",
                "Molecular Basis of Inheritance",
                "Evolution",
                "Human Health and Disease",
                "Strategies for Enhancement in Food Production",
                "Microbes in Human Welfare",
                "Biotechnology Principles and Processes",
                "Biotechnology and its Applications",
                "Organisms and Populations",
                "Ecosystem",
                "Biodiversity and Conservation",
                "Environmental Issues"
            ],
            Zoology: [
                "Reproduction in Organisms",
                "Sexual Reproduction in Flowering Plants",
                "Human Reproduction",
                "Reproductive Health",
                "Principles of Inheritance and Variation",
                "Molecular Basis of Inheritance",
                "Evolution",
                "Human Health and Disease",
                "Strategies for Enhancement in Food Production",
                "Microbes in Human Welfare",
                "Biotechnology Principles and Processes",
                "Biotechnology and its Applications",
                "Organisms and Populations",
                "Ecosystem",
                "Biodiversity and Conservation",
                "Environmental Issues"
            ]
        }
    },
    JEE: {
        "Class 11": {
            Physics: [
                "Vectors",
                "Units and Measurements",
                "Motion in a Straight Line",
                "Motion in a Plane",
                "Laws of Motion",
                "Work, Energy and Power",
                "Rotational Motion",
                "Gravitation",
                "Mechanical Properties of Solids",
                "Mechanical Properties of Fluids",
                "Thermal Properties of Matter",
                "Thermodynamics",
                "Kinetic Theory",
                "Oscillations",
                "Waves"
            ],
            Chemistry: [
                "Some Basic Concepts of Chemistry",
                "Structure of Atom",
                "Classification of Elements and Periodicity in Properties",
                "Chemical Bonding and Molecular Structure",
                "States of Matter: Gases and Liquids",
                "Thermodynamics",
                "Equilibrium",
                "Redox Reactions",
                "Hydrogen",
                "The s-Block Elements",
                "The p-Block Elements",
                "Organic Chemistry - Some Basic Principles",
                "Hydrocarbons",
                "Environmental Chemistry"
            ],
            Mathematics: [
                "Sets",
                "Relations and Functions",
                "Trigonometric Functions",
                "Principle of Mathematical Induction",
                "Complex Numbers and Quadratic Equations",
                "Linear Inequalities",
                "Permutations and Combinations",
                "Binomial Theorem",
                "Sequences and Series",
                "Straight Lines",
                "Conic Sections",
                "Introduction to Three Dimensional Geometry",
                "Limits and Derivatives",
                "Mathematical Reasoning",
                "Statistics",
                "Probability"
            ]
        },
        "Class 12": {
            Physics: [
                "Electric Charges and Fields",
                "Electrostatic Potential and Capacitance",
                "Current Electricity",
                "Moving Charges and Magnetism",
                "Magnetism and Matter",
                "Electromagnetic Induction",
                "Alternating Current",
                "Electromagnetic Waves",
                "Ray Optics and Optical Instruments",
                "Wave Optics",
                "Dual Nature of Radiation and Matter",
                "Atoms",
                "Nuclei",
                "Semiconductor Electronics",
                "Communication Systems"
            ],
            Chemistry: [
                "The Solid State",
                "Solutions",
                "Electrochemistry",
                "Chemical Kinetics",
                "Surface Chemistry",
                "General Principles and Processes of Isolation of Elements",
                "The p-Block Elements",
                "The d and f Block Elements",
                "Coordination Compounds",
                "Haloalkanes and Haloarenes",
                "Alcohols, Phenols and Ethers",
                "Aldehydes, Ketones and Carboxylic Acids",
                "Amines",
                "Biomolecules",
                "Polymers",
                "Chemistry in Everyday Life"
            ],
            Mathematics: [
                "Relations and Functions",
                "Inverse Trigonometric Functions",
                "Matrices",
                "Determinants",
                "Continuity and Differentiability",
                "Application of Derivatives",
                "Integrals",
                "Application of Integrals",
                "Differential Equations",
                "Vector Algebra",
                "Three Dimensional Geometry",
                "Linear Programming",
                "Probability"
            ]
        }
    }
};

const App = () => {
    const [currentExam, setCurrentExam] = useState(() => {
        const saved = localStorage.getItem('currentExam');
        return saved || null;
    });
    const [view, setView] = useState(() => {
        const saved = localStorage.getItem('currentView');
        return saved || 'exam-select';
    });
    const [selectedClass, setSelectedClass] = useState(() => {
        const saved = localStorage.getItem('selectedClass');
        return saved || 'Class 11';
    });
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem('syllabusData');
        return saved ? JSON.parse(saved) : {};
    });
    const [editMode, setEditMode] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalConfig, setModalConfig] = useState({ title: '', message: '', onConfirm: null });
    const [toast, setToast] = useState({ show: false, message: '' });
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    useEffect(() => {
        localStorage.setItem('syllabusData', JSON.stringify(data));
    }, [data]);

    useEffect(() => {
        localStorage.setItem('currentExam', currentExam || '');
        localStorage.setItem('currentView', view);
        localStorage.setItem('selectedClass', selectedClass);
    }, [currentExam, view, selectedClass]);

    const showToast = (message) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: '' }), 3000);
    };

    const changeExam = () => {
        if (window.confirm('Changing exam will reset your navigation. Continue?')) {
            setCurrentExam(null);
            setView('exam-select');
            setSelectedSubject(null);
            setSelectedChapter(null);
        }
    };

    const getChapterData = (classLevel, subject, chapter) => {
        return data[currentExam]?.[classLevel]?.[subject]?.[chapter] || {};
    };

    const updateChapterData = (classLevel, subject, chapter, updates) => {
        setData(prev => {
            const newData = { ...prev };
            if (!newData[currentExam]) newData[currentExam] = {};
            if (!newData[currentExam][classLevel]) newData[currentExam][classLevel] = {};
            if (!newData[currentExam][classLevel][subject]) newData[currentExam][classLevel][subject] = {};
            
            newData[currentExam][classLevel][subject][chapter] = {
                ...newData[currentExam][classLevel][subject][chapter],
                ...updates
            };
            return newData;
        });
    };

    const deleteChapter = (classLevel, subject, chapter) => {
        setData(prev => {
            const newData = { ...prev };
            if (newData[currentExam]?.[classLevel]?.[subject]) {
                const subjectData = { ...newData[currentExam][classLevel][subject] };
                delete subjectData[chapter];
                newData[currentExam][classLevel][subject] = subjectData;
            }
            return newData;
        });
    };

    const addCustomChapter = (classLevel, subject, chapterName) => {
        if (!EXAM_SYLLABUS[currentExam][classLevel][subject].includes(chapterName)) {
            EXAM_SYLLABUS[currentExam][classLevel][subject].push(chapterName);
        }
    };

    const getProgress = (classLevel, subject, chapter) => {
        const chapterData = getChapterData(classLevel, subject, chapter);
        
        const weights = {
            lecture: 15,
            notes: 10,
            dpp: 15,
            pyq: 20,
            shortNotes: 5,
            ncert: 10,
            test: 15,
            revision1: 2,
            revision2: 2,
            revision3: 2,
            revision4: 2,
            revision5: 2
        };

        let totalProgress = 0;
        Object.keys(weights).forEach(key => {
            if (chapterData[key]) {
                totalProgress += weights[key];
            }
        });

        const satisfaction = chapterData.satisfaction || 0;
        totalProgress += satisfaction;

        return Math.min(100, totalProgress);
    };

    const getSubjectProgress = (classLevel, subject) => {
        const chapters = EXAM_SYLLABUS[currentExam][classLevel][subject];
        if (!chapters || chapters.length === 0) return 0;
        
        const total = chapters.reduce((sum, chapter) => {
            return sum + getProgress(classLevel, subject, chapter);
        }, 0);
        
        return Math.round(total / chapters.length);
    };

    const getSubjectClass = (subject) => {
        if (subject.toLowerCase().includes('physics')) return 'physics';
        if (subject.toLowerCase().includes('chemistry')) return 'chemistry';
        if (subject.toLowerCase().includes('math')) return 'mathematics';
        if (subject.toLowerCase().includes('botany')) return 'botany';
        if (subject.toLowerCase().includes('zoology')) return 'zoology';
        return '';
    };

    const resetChapter = () => {
        if (window.confirm(`Reset all progress for ${selectedChapter}?`)) {
            updateChapterData(selectedClass, selectedSubject, selectedChapter, {
                lecture: false,
                notes: false,
                dpp: false,
                pyq: false,
                shortNotes: false,
                ncert: false,
                test: false,
                revision1: false,
                revision2: false,
                revision3: false,
                revision4: false,
                revision5: false,
                satisfaction: 0
            });
            showToast('Chapter reset successfully');
        }
    };

    const exportData = () => {
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${currentExam}_progress_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        showToast('Data exported successfully');
    };

    const importData = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const importedData = JSON.parse(event.target.result);
                    setData(importedData);
                    showToast('Data imported successfully');
                    setRefreshTrigger(prev => prev + 1);
                } catch (error) {
                    alert('Invalid file format');
                }
            };
            reader.readAsText(file);
        }
        e.target.value = '';
    };

    const getAnalytics = () => {
        const analytics = {
            overallProgress: 0,
            totalChapters: 0,
            completedChapters: 0,
            strongCount: 0,
            moderateCount: 0,
            weakCount: 0,
            avgSatisfaction: 0,
            neglectedSubject: '',
            neglectedProgress: 100
        };

        let totalProgress = 0;
        let totalSatisfaction = 0;
        let chapterCount = 0;

        Object.keys(EXAM_SYLLABUS[currentExam]).forEach(classLevel => {
            Object.keys(EXAM_SYLLABUS[currentExam][classLevel]).forEach(subject => {
                const chapters = EXAM_SYLLABUS[currentExam][classLevel][subject];
                const subjectProgress = getSubjectProgress(classLevel, subject);
                
                if (subjectProgress < analytics.neglectedProgress) {
                    analytics.neglectedProgress = subjectProgress;
                    analytics.neglectedSubject = `${subject} (${classLevel})`;
                }

                chapters.forEach(chapter => {
                    analytics.totalChapters++;
                    const progress = getProgress(classLevel, subject, chapter);
                    totalProgress += progress;
                    chapterCount++;

                    const chapterData = getChapterData(classLevel, subject, chapter);
                    totalSatisfaction += chapterData.satisfaction || 0;

                    if (progress === 100) analytics.completedChapters++;
                    if (progress >= 75) analytics.strongCount++;
                    else if (progress >= 40) analytics.moderateCount++;
                    else analytics.weakCount++;
                });
            });
        });

        analytics.overallProgress = chapterCount > 0 ? Math.round(totalProgress / chapterCount) : 0;
        analytics.avgSatisfaction = chapterCount > 0 ? (totalSatisfaction / chapterCount).toFixed(1) : 0;

        return analytics;
    };

    const ExamSelectView = () => {
        return React.createElement('div', { className: 'container' },
            React.createElement('div', { className: 'header' },
                React.createElement('h1', { className: 'logo' }, 'NEET & JEE Syllabus Tracker'),
                React.createElement('p', { className: 'tagline' }, 'Track your preparation journey efficiently')
            ),
            React.createElement('div', { className: 'grid grid-2' },
                React.createElement('div', {
                    className: 'card card-hover',
                    onClick: () => {
                        setCurrentExam('NEET');
                        setView('home');
                    }
                },
                    React.createElement('div', { className: 'exam-icon' }, '🩺'),
                    React.createElement('h2', { className: 'card-title' }, 'NEET'),
                    React.createElement('p', { className: 'card-subtitle' }, 'National Eligibility cum Entrance Test'),
                    React.createElement('div', { className: 'exam-subjects' },
                        React.createElement('span', { className: 'subject-tag physics' }, 'Physics'),
                        React.createElement('span', { className: 'subject-tag chemistry' }, 'Chemistry'),
                        React.createElement('span', { className: 'subject-tag botany' }, 'Botany'),
                        React.createElement('span', { className: 'subject-tag zoology' }, 'Zoology')
                    )
                ),
                React.createElement('div', {
                    className: 'card card-hover',
                    onClick: () => {
                        setCurrentExam('JEE');
                        setView('home');
                    }
                },
                    React.createElement('div', { className: 'exam-icon' }, '⚙️'),
                    React.createElement('h2', { className: 'card-title' }, 'JEE'),
                    React.createElement('p', { className: 'card-subtitle' }, 'Joint Entrance Examination'),
                    React.createElement('div', { className: 'exam-subjects' },
                        React.createElement('span', { className: 'subject-tag physics' }, 'Physics'),
                        React.createElement('span', { className: 'subject-tag chemistry' }, 'Chemistry'),
                        React.createElement('span', { className: 'subject-tag mathematics' }, 'Mathematics')
                    )
                )
            ),
            React.createElement('div', { 
                className: 'footer-section',
                style: {
                    marginTop: '4rem',
                    padding: '2rem',
                    background: 'rgba(255, 255, 255, 0.5)',
                    borderRadius: '16px',
                    textAlign: 'center'
                }
            },
                React.createElement('h3', { 
                    style: { 
                        marginBottom: '1.5rem',
                        color: 'var(--primary)',
                        fontSize: '1.5rem'
                    }
                }, 'Created by Naitik Raj'),
                React.createElement('div', { 
                    style: { 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '2rem',
                        flexWrap: 'wrap'
                    }
                },
                    React.createElement('a', {
                        href: 'https://github.com/naitik-raj',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'social-link',
                        style: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)', textDecoration: 'none', transition: 'color 0.3s' }
                    },
                        React.createElement('svg', {
                            width: '24',
                            height: '24',
                            viewBox: '0 0 24 24',
                            fill: 'currentColor'
                        },
                            React.createElement('path', {
                                d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
                            })
                        ),
                        React.createElement('span', null, 'naitik-raj')
                    ),
                    React.createElement('a', {
                        href: 'https://www.instagram.com/naitik_156_/',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'social-link',
                        style: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)', textDecoration: 'none', transition: 'color 0.3s' }
                    },
                        React.createElement('svg', {
                            width: '24',
                            height: '24',
                            viewBox: '0 0 24 24',
                            fill: 'currentColor',
                            style: { color: '#E4405F' }
                        },
                            React.createElement('path', {
                                d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
                            })
                        ),
                        React.createElement('span', null, '@naitik_156_')
                    ),
                    React.createElement('a', {
                        href: 'mailto:rajnaitik620@gmail.com',
                        className: 'social-link',
                        style: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)', textDecoration: 'none', transition: 'color 0.3s' }
                    },
                        React.createElement('svg', {
                            width: '24',
                            height: '24',
                            viewBox: '0 0 24 24',
                            fill: 'currentColor',
                            style: { color: '#EA4335' }
                        },
                            React.createElement('path', {
                                d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
                            })
                        ),
                        React.createElement('span', null, 'rajnaitik620@gmail.com')
                    )
                )
            )
        );
    };

    const SubjectsView = () => {
        const subjects = Object.keys(EXAM_SYLLABUS[currentExam][selectedClass]);

        return React.createElement('div', { className: 'container' },
            React.createElement('div', { className: 'nav-breadcrumb' },
                React.createElement('span', { className: 'breadcrumb-item', onClick: changeExam }, 'Exam Select'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item', onClick: () => setView('home') }, 'Home'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item active' }, selectedClass)
            ),
            React.createElement('div', { className: 'header' },
                React.createElement('h2', { className: 'logo', style: { fontSize: '2.5rem' } }, selectedClass)
            ),
            React.createElement('div', { className: 'grid grid-3' },
                subjects.map(subject => React.createElement('div', {
                    key: subject,
                    className: `card ${getSubjectClass(subject)}`,
                    onClick: () => {
                        setSelectedSubject(subject);
                        setView('chapters');
                    }
                },
                    React.createElement('h3', { className: 'card-title' }, subject),
                    React.createElement('p', { className: 'card-subtitle' }, `${EXAM_SYLLABUS[currentExam][selectedClass][subject].length} Chapters`),
                    React.createElement('div', { className: 'progress-container', style: { marginTop: '1.5rem' } },
                        React.createElement('div', { className: 'progress-label' },
                            React.createElement('span', null, 'Progress'),
                            React.createElement('span', null, `${getSubjectProgress(selectedClass, subject)}%`)
                        ),
                        React.createElement('div', { className: 'progress-bar-bg' },
                            React.createElement('div', { className: 'progress-bar-fill', style: { width: `${getSubjectProgress(selectedClass, subject)}%` } })
                        )
                    )
                ))
            )
        );
    };

    const ChaptersView = () => {
        const chapters = EXAM_SYLLABUS[currentExam][selectedClass][selectedSubject];
        const [showAddForm, setShowAddForm] = useState(false);
        const [newChapterName, setNewChapterName] = useState('');
        const [editingChapter, setEditingChapter] = useState(null);
        const [editedName, setEditedName] = useState('');

        const handleAddChapter = () => {
            if (newChapterName.trim()) {
                const trimmedName = newChapterName.trim();
                addCustomChapter(selectedClass, selectedSubject, trimmedName);
                
                // Initialize default task structure for new chapter
                updateChapterData(selectedClass, selectedSubject, trimmedName, {
                    lecture: false,
                    notes: false,
                    dpp: false,
                    pyq: false,
                    shortNotes: false,
                    ncert: false,
                    test: false,
                    revision1: false,
                    revision2: false,
                    revision3: false,
                    revision4: false,
                    revision5: false,
                    satisfaction: 0
                });
                
                setNewChapterName('');
                setShowAddForm(false);
                showToast(`Chapter added: ${trimmedName}`);
                
                // Force re-render to update UI and recalculate percentages
                setRefreshTrigger(prev => prev + 1);
            }
        };

        const handleRenameChapter = (oldName) => {
            if (editedName.trim() && editedName.trim() !== oldName) {
                const trimmedName = editedName.trim();
                const index = EXAM_SYLLABUS[currentExam][selectedClass][selectedSubject].indexOf(oldName);
                if (index > -1) {
                    // Update the chapter name in the syllabus
                    EXAM_SYLLABUS[currentExam][selectedClass][selectedSubject][index] = trimmedName;
                    
                    // Migrate all data from old chapter name to new
                    const oldData = getChapterData(selectedClass, selectedSubject, oldName);
                    if (Object.keys(oldData).length > 0) {
                        updateChapterData(selectedClass, selectedSubject, trimmedName, oldData);
                        // Delete old chapter data
                        setData(prev => {
                            const newData = { ...prev };
                            if (newData[currentExam]?.[selectedClass]?.[selectedSubject]) {
                                const subjectData = { ...newData[currentExam][selectedClass][selectedSubject] };
                                delete subjectData[oldName];
                                newData[currentExam][selectedClass][selectedSubject] = subjectData;
                            }
                            return newData;
                        });
                    }
                    
                    showToast(`Chapter renamed: ${oldName} → ${trimmedName}`);
                    
                    // Force re-render to update UI
                    setRefreshTrigger(prev => prev + 1);
                }
            }
            setEditingChapter(null);
            setEditedName('');
        };

        const handleDeleteChapter = (chapterName) => {
            setModalConfig({
                title: 'Delete Chapter',
                message: `Are you sure you want to delete "${chapterName}"? All progress data will be permanently lost.`,
                onConfirm: () => {
                    // First, remove from syllabus array
                    const index = EXAM_SYLLABUS[currentExam][selectedClass][selectedSubject].indexOf(chapterName);
                    if (index > -1) {
                        EXAM_SYLLABUS[currentExam][selectedClass][selectedSubject].splice(index, 1);
                    }
                    
                    // Then delete the data
                    deleteChapter(selectedClass, selectedSubject, chapterName);
                    
                    // Close modal and show success
                    setShowModal(false);
                    showToast(`Chapter deleted: ${chapterName}`);
                    
                    // Force re-render to update UI and recalculate percentages
                    setRefreshTrigger(prev => prev + 1);
                }
            });
            setShowModal(true);
        };

        const handleChapterClick = (chapter) => {
            if (!editMode) {
                setSelectedChapter(chapter);
                setView('detail');
            }
        };

        return React.createElement('div', { className: 'container', key: `chapters-view-${refreshTrigger}` },
            React.createElement('div', { className: 'nav-breadcrumb' },
                React.createElement('span', { className: 'breadcrumb-item', onClick: changeExam }, 'Exam Select'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item', onClick: () => setView('home') }, 'Home'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item', onClick: () => setView('subjects') }, selectedClass),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item active' }, selectedSubject)
            ),
            React.createElement('div', { className: 'header', style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' } },
                React.createElement('h2', { className: 'logo', style: { fontSize: '2rem', margin: 0 } }, selectedSubject),
                React.createElement('button', {
                    className: editMode ? 'edit-toggle-btn active' : 'edit-toggle-btn',
                    onClick: () => {
                        setEditMode(!editMode);
                        setShowAddForm(false);
                        setEditingChapter(null);
                        setNewChapterName('');
                    },
                    style: {
                        background: editMode ? 'var(--success)' : 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }
                }, 
                    editMode ? '✓ Done Editing' : '✏️ Edit Chapters'
                )
            ),
            editMode && React.createElement('div', { 
                className: 'edit-mode-banner',
                style: {
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.1))',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    textAlign: 'center',
                    border: '2px dashed var(--success)',
                    animation: 'fadeIn 0.3s ease'
                }
            },
                React.createElement('p', { style: { margin: 0, color: 'var(--success)', fontWeight: '600' } }, 
                    '✏️ Edit Mode Active: Click chapter names to rename, use - to delete, or + to add new chapters'
                )
            ),
            React.createElement('div', { className: 'grid grid-3' },
                chapters.map(chapter => {
                    const progress = getProgress(selectedClass, selectedSubject, chapter);
                    const chapterData = getChapterData(selectedClass, selectedSubject, chapter);
                    const satisfaction = chapterData.satisfaction || 0;
                    
                    return React.createElement('div', {
                        key: chapter,
                        className: `card chapter-card ${getSubjectClass(selectedSubject)}`,
                        onClick: () => handleChapterClick(chapter),
                        style: {
                            cursor: editMode ? 'default' : 'pointer',
                            opacity: editMode && editingChapter && editingChapter !== chapter ? 0.6 : 1
                        }
                    },
                        React.createElement('div', { className: 'chapter-header', style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' } },
                            editingChapter === chapter
                                ? React.createElement('input', {
                                    type: 'text',
                                    className: 'chapter-edit-input',
                                    value: editedName,
                                    onChange: (e) => setEditedName(e.target.value),
                                    onBlur: () => handleRenameChapter(chapter),
                                    onKeyPress: (e) => {
                                        if (e.key === 'Enter') handleRenameChapter(chapter);
                                        if (e.key === 'Escape') {
                                            setEditingChapter(null);
                                            setEditedName('');
                                        }
                                    },
                                    autoFocus: true,
                                    onClick: (e) => e.stopPropagation(),
                                    style: { flex: 1 }
                                })
                                : React.createElement('h3', {
                                    className: 'card-title chapter-title',
                                    onClick: (e) => {
                                        if (editMode) {
                                            e.stopPropagation();
                                            setEditingChapter(chapter);
                                            setEditedName(chapter);
                                        }
                                    },
                                    style: { 
                                        flex: 1, 
                                        cursor: editMode ? 'text' : 'pointer',
                                        margin: 0
                                    }
                                }, chapter),
                            editMode && React.createElement('button', {
                                className: 'delete-chapter-btn',
                                onClick: (e) => {
                                    e.stopPropagation();
                                    handleDeleteChapter(chapter);
                                },
                                title: 'Delete chapter'
                            }, '−')
                        ),
                        !editMode && React.createElement('div', { 
                            className: 'satisfaction-display'
                        },
                            React.createElement('span', { style: { fontSize: '1.5rem' } },
                                satisfaction > 0 ? `${'★'.repeat(satisfaction)}${'☆'.repeat(10 - satisfaction)}` : '☆☆☆☆☆☆☆☆☆☆'
                            )
                        ),
                        !editMode && React.createElement('div', { 
                            className: 'progress-container', 
                            style: { marginTop: '1rem' }
                        },
                            React.createElement('div', { className: 'progress-label' },
                                React.createElement('span', null, 'Progress'),
                                React.createElement('span', null, `${progress}%`)
                            ),
                            React.createElement('div', { className: 'progress-bar-bg' },
                                React.createElement('div', { className: 'progress-bar-fill', style: { width: `${progress}%` } })
                            )
                        ),
                        editMode && React.createElement('div', {
                            style: {
                                marginTop: '1rem',
                                padding: '0.75rem',
                                background: 'rgba(15, 118, 110, 0.05)',
                                borderRadius: '8px',
                                fontSize: '0.85rem',
                                color: 'var(--text-light)',
                                textAlign: 'center'
                            }
                        }, `Progress: ${progress}% • ${satisfaction > 0 ? `${satisfaction}/10 ★` : 'Not rated'}`)
                    );
                }),
                editMode && React.createElement('div', {
                    className: 'card add-chapter-card',
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '200px',
                        border: '2px dashed var(--success)',
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(52, 211, 153, 0.05))',
                        cursor: showAddForm ? 'default' : 'pointer'
                    },
                    onClick: () => !showAddForm && setShowAddForm(true)
                },
                    showAddForm
                        ? React.createElement('div', { 
                            className: 'add-chapter-form',
                            style: { width: '100%', padding: '1rem' },
                            onClick: (e) => e.stopPropagation()
                        },
                            React.createElement('input', {
                                type: 'text',
                                placeholder: 'Enter chapter name...',
                                value: newChapterName,
                                onChange: (e) => setNewChapterName(e.target.value),
                                onKeyPress: (e) => {
                                    if (e.key === 'Enter') handleAddChapter();
                                    if (e.key === 'Escape') {
                                        setShowAddForm(false);
                                        setNewChapterName('');
                                    }
                                },
                                autoFocus: true,
                                style: {
                                    width: '100%',
                                    padding: '0.75rem',
                                    fontSize: '1rem',
                                    border: '2px solid var(--success)',
                                    borderRadius: '8px',
                                    marginBottom: '1rem',
                                    outline: 'none'
                                }
                            }),
                            React.createElement('div', { style: { display: 'flex', gap: '0.5rem' } },
                                React.createElement('button', {
                                    className: 'btn',
                                    onClick: handleAddChapter,
                                    style: { 
                                        flex: 1,
                                        background: 'var(--success)',
                                        color: 'white'
                                    }
                                }, '✓ Add'),
                                React.createElement('button', {
                                    className: 'btn btn-secondary',
                                    onClick: () => {
                                        setShowAddForm(false);
                                        setNewChapterName('');
                                    },
                                    style: { flex: 1 }
                                }, '✕ Cancel')
                            )
                        )
                        : React.createElement(React.Fragment, null,
                            React.createElement('div', {
                                className: 'add-chapter-icon',
                                style: {
                                    fontSize: '3rem',
                                    color: 'var(--success)',
                                    marginBottom: '0.5rem',
                                    fontWeight: 'bold'
                                }
                            }, '+'),
                            React.createElement('p', {
                                className: 'card-subtitle',
                                style: { margin: 0, color: 'var(--success)', fontWeight: '600' }
                            }, 'Add New Chapter')
                        )
                )
            )
        );
    };

    const HomePage = () => {
        return React.createElement('div', { className: 'container' },
            React.createElement('div', { className: 'nav-breadcrumb' },
                React.createElement('span', { className: 'breadcrumb-item', onClick: changeExam }, 'Exam Select'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item active' }, 'Home')
            ),
            React.createElement('div', { className: 'header' },
                React.createElement('h2', { className: 'logo', style: { fontSize: '3rem' } }, `${currentExam} Syllabus Tracker`),
                React.createElement('p', { className: 'tagline' }, 'Select a class to begin tracking')
            ),
            React.createElement('div', { className: 'grid grid-2', style: { marginBottom: '2rem' } },
                React.createElement('div', {
                    className: 'card class-card',
                    onClick: () => {
                        setSelectedClass('Class 11');
                        setView('subjects');
                    }
                },
                    React.createElement('div', { className: 'class-icon' }, '11'),
                    React.createElement('h3', { className: 'card-title' }, 'Class 11'),
                    React.createElement('p', { className: 'card-subtitle' }, 'Foundation concepts and basics'),
                    React.createElement('div', { className: 'progress-container', style: { marginTop: '1.5rem' } },
                        React.createElement('div', { className: 'progress-label' },
                            React.createElement('span', null, 'Overall Progress'),
                            React.createElement('span', null, `${getSubjectProgress('Class 11', Object.keys(EXAM_SYLLABUS[currentExam]['Class 11'])[0]) || 0}%`)
                        ),
                        React.createElement('div', { className: 'progress-bar-bg' },
                            React.createElement('div', { className: 'progress-bar-fill', style: { width: `${getSubjectProgress('Class 11', Object.keys(EXAM_SYLLABUS[currentExam]['Class 11'])[0]) || 0}%` } })
                        )
                    )
                ),
                React.createElement('div', {
                    className: 'card class-card',
                    onClick: () => {
                        setSelectedClass('Class 12');
                        setView('subjects');
                    }
                },
                    React.createElement('div', { className: 'class-icon' }, '12'),
                    React.createElement('h3', { className: 'card-title' }, 'Class 12'),
                    React.createElement('p', { className: 'card-subtitle' }, 'Advanced topics and applications'),
                    React.createElement('div', { className: 'progress-container', style: { marginTop: '1.5rem' } },
                        React.createElement('div', { className: 'progress-label' },
                            React.createElement('span', null, 'Overall Progress'),
                            React.createElement('span', null, `${getSubjectProgress('Class 12', Object.keys(EXAM_SYLLABUS[currentExam]['Class 12'])[0]) || 0}%`)
                        ),
                        React.createElement('div', { className: 'progress-bar-bg' },
                            React.createElement('div', { className: 'progress-bar-fill', style: { width: `${getSubjectProgress('Class 12', Object.keys(EXAM_SYLLABUS[currentExam]['Class 12'])[0]) || 0}%` } })
                        )
                    )
                )
            ),
            React.createElement('div', { style: { textAlign: 'center' } },
                React.createElement('button', {
                    className: 'btn btn-primary',
                    onClick: () => setView('dashboard'),
                    style: { fontSize: '1.1rem', padding: '1rem 2rem' }
                }, '📊 View Analytics Dashboard')
            )
        );
    };

    const DetailView = () => {
        const chapterData = getChapterData(selectedClass, selectedSubject, selectedChapter);
        const progress = getProgress(selectedClass, selectedSubject, selectedChapter);

        const tasks = [
            { key: 'lecture', label: 'Lecture Attended (15%)', weight: 15 },
            { key: 'notes', label: 'Notes Made (10%)', weight: 10 },
            { key: 'dpp', label: 'DPP Solved (15%)', weight: 15 },
            { key: 'pyq', label: 'PYQ Solved (20%)', weight: 20 },
            { key: 'shortNotes', label: 'Short Notes (5%)', weight: 5 },
            { key: 'ncert', label: 'NCERT (10%)', weight: 10 },
            { key: 'test', label: 'Test Given (15%)', weight: 15 },
            { key: 'revision1', label: 'Revision 1 (2%)', weight: 2 },
            { key: 'revision2', label: 'Revision 2 (2%)', weight: 2 },
            { key: 'revision3', label: 'Revision 3 (2%)', weight: 2 },
            { key: 'revision4', label: 'Revision 4 (2%)', weight: 2 },
            { key: 'revision5', label: 'Revision 5 (2%)', weight: 2 }
        ];

        return React.createElement('div', { className: 'container' },
            React.createElement('div', { className: 'nav-breadcrumb' },
                React.createElement('span', { className: 'breadcrumb-item', onClick: changeExam }, 'Exam Select'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item', onClick: () => setView('home') }, 'Home'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item', onClick: () => setView('subjects') }, selectedClass),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item', onClick: () => setView('chapters') }, selectedSubject),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item active' }, selectedChapter)
            ),
            React.createElement('div', { className: 'card detail-card' },
                React.createElement('h2', { className: 'card-title', style: { fontSize: '2rem', marginBottom: '1.5rem' } }, selectedChapter),
                React.createElement('div', { className: 'progress-container', style: { marginBottom: '2rem' } },
                    React.createElement('div', { className: 'progress-label' },
                        React.createElement('span', { style: { fontSize: '1.1rem', fontWeight: '600' } }, 'Chapter Progress'),
                        React.createElement('span', { style: { fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' } }, `${progress}%`)
                    ),
                    React.createElement('div', { className: 'progress-bar-bg', style: { height: '20px' } },
                        React.createElement('div', { 
                            className: 'progress-bar-fill', 
                            style: { 
                                width: `${progress}%`,
                                background: progress === 100 ? 'var(--success)' : progress >= 75 ? 'var(--primary)' : progress >= 40 ? 'var(--warning)' : 'var(--danger)'
                            } 
                        })
                    )
                ),
                React.createElement('div', { 
                    className: 'weight-info', 
                    style: { 
                        background: 'rgba(15, 118, 110, 0.05)', 
                        padding: '1rem', 
                        borderRadius: '8px', 
                        marginBottom: '1.5rem',
                        fontSize: '0.85rem',
                        color: 'var(--text-light)'
                    } 
                },
                    React.createElement('strong', null, 'Progress Calculation: '),
                    'Each task has a weight that contributes to your overall progress (Total = 100%)'
                ),
                React.createElement('table', { className: 'task-table' },
                    React.createElement('tbody', null,
                        tasks.map(task => React.createElement('tr', { key: task.key },
                            React.createElement('td', { className: 'task-label' }, task.label),
                            React.createElement('td', { className: 'checkbox-wrapper' },
                                React.createElement('input', {
                                    type: 'checkbox',
                                    className: 'custom-checkbox',
                                    checked: !!chapterData[task.key],
                                    onChange: (e) => {
                                        updateChapterData(selectedClass, selectedSubject, selectedChapter, { [task.key]: e.target.checked });
                                    }
                                })
                            )
                        )),
                        React.createElement('tr', null,
                            React.createElement('td', { className: 'task-label' }, 'Satisfaction Level (1% per star, max 10%)'),
                            React.createElement('td', null,
                                React.createElement('div', { className: 'star-rating' },
                                    [...Array(10)].map((_, i) => React.createElement('span', {
                                        key: i,
                                        className: `star ${(chapterData.satisfaction || 0) > i ? 'filled' : ''}`,
                                        onClick: () => {
                                            updateChapterData(selectedClass, selectedSubject, selectedChapter, { satisfaction: i + 1 });
                                        }
                                    }, '★'))
                                )
                            )
                        )
                    )
                ),
                React.createElement('div', { className: 'action-buttons' },
                    React.createElement('button', { className: 'btn btn-danger', onClick: resetChapter }, 'Reset Chapter')
                )
            )
        );
    };

    const DashboardView = () => {
        const analytics = getAnalytics();

        return React.createElement('div', { className: 'container' },
            React.createElement('div', { className: 'nav-breadcrumb' },
                React.createElement('span', { className: 'breadcrumb-item', onClick: changeExam }, 'Exam Select'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item', onClick: () => setView('home') }, 'Home'),
                React.createElement('span', { className: 'breadcrumb-separator' }, '/'),
                React.createElement('span', { className: 'breadcrumb-item active' }, 'Dashboard')
            ),
            React.createElement('div', { className: 'header', style: { marginBottom: '2rem' } },
                React.createElement('h2', { className: 'logo', style: { fontSize: '2rem' } }, `${currentExam} Performance Analytics`),
                React.createElement('div', { style: { marginTop: '1.5rem', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' } },
                    React.createElement('button', {
                        className: 'btn btn-primary',
                        onClick: exportData,
                        style: { minWidth: '150px' }
                    }, '📥 Export Data'),
                    React.createElement('label', {
                        className: 'btn btn-primary',
                        style: { cursor: 'pointer', minWidth: '150px' }
                    },
                        '📤 Import Data',
                        React.createElement('input', {
                            type: 'file',
                            accept: '.json',
                            onChange: importData,
                            style: { display: 'none' }
                        })
                    )
                )
            ),
            React.createElement('div', { className: 'dashboard-stats' },
                React.createElement('div', { className: 'stat-card' },
                    React.createElement('div', { className: 'stat-value' }, `${analytics.overallProgress}%`),
                    React.createElement('div', { className: 'stat-label' }, 'Overall Completion')
                ),
                React.createElement('div', { className: 'stat-card' },
                    React.createElement('div', { className: 'stat-value' }, `${analytics.completedChapters}/${analytics.totalChapters}`),
                    React.createElement('div', { className: 'stat-label' }, 'Chapters Completed')
                ),
                React.createElement('div', { className: 'stat-card' },
                    React.createElement('div', { className: 'stat-value', style: { color: 'var(--success)' } }, analytics.strongCount),
                    React.createElement('div', { className: 'stat-label' }, 'Strong Chapters')
                ),
                React.createElement('div', { className: 'stat-card' },
                    React.createElement('div', { className: 'stat-value', style: { color: 'var(--warning)' } }, analytics.moderateCount),
                    React.createElement('div', { className: 'stat-label' }, 'Moderate Chapters')
                ),
                React.createElement('div', { className: 'stat-card' },
                    React.createElement('div', { className: 'stat-value', style: { color: 'var(--danger)' } }, analytics.weakCount),
                    React.createElement('div', { className: 'stat-label' }, 'Weak Chapters')
                ),
                React.createElement('div', { className: 'stat-card' },
                    React.createElement('div', { className: 'stat-value' }, `${analytics.avgSatisfaction}/10`),
                    React.createElement('div', { className: 'stat-label' }, 'Avg Satisfaction')
                )
            ),
            React.createElement('div', { className: 'card', style: { marginTop: '2rem' } },
                React.createElement('h3', { className: 'card-title' }, 'Most Neglected Subject'),
                React.createElement('p', { className: 'card-subtitle' }, analytics.neglectedSubject),
                React.createElement('div', { className: 'progress-container' },
                    React.createElement('div', { className: 'progress-label' },
                        React.createElement('span', null, 'Progress'),
                        React.createElement('span', null, `${analytics.neglectedProgress}%`)
                    ),
                    React.createElement('div', { className: 'progress-bar-bg' },
                        React.createElement('div', { className: 'progress-bar-fill', style: { width: `${analytics.neglectedProgress}%` } })
                    )
                )
            )
        );
    };

    return React.createElement(React.Fragment, null,
        view === 'exam-select' && React.createElement(ExamSelectView),
        view === 'home' && React.createElement(HomePage),
        view === 'subjects' && React.createElement(SubjectsView),
        view === 'chapters' && React.createElement(ChaptersView),
        view === 'detail' && React.createElement(DetailView),
        view === 'dashboard' && React.createElement(DashboardView),
        showModal && React.createElement('div', { className: 'modal', onClick: () => setShowModal(false) },
            React.createElement('div', { className: 'modal-content', onClick: (e) => e.stopPropagation() },
                React.createElement('h3', { className: 'modal-title' }, modalConfig.title),
                React.createElement('p', { style: { marginBottom: '1.5rem' } }, modalConfig.message),
                React.createElement('div', { className: 'modal-buttons' },
                    React.createElement('button', { 
                        className: 'btn btn-secondary', 
                        onClick: () => setShowModal(false),
                        style: { flex: 1 }
                    }, '✕ No, Cancel'),
                    React.createElement('button', { 
                        className: 'btn btn-danger', 
                        onClick: () => {
                            if (modalConfig.onConfirm) {
                                modalConfig.onConfirm();
                            }
                        },
                        style: { flex: 1 }
                    }, '✓ Yes, Delete')
                )
            )
        ),
        toast.show && React.createElement('div', { className: 'toast' }, toast.message)
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
