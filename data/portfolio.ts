export interface Project {
  id: string;
  title: string;
  category: 'vlsi' | 'embedded' | 'iot-robotics' | 'ai-ml' | 'software';
  categoryLabel: string;
  status: 'Completed' | 'In Progress' | 'Academic Exploration' | 'Prototype';
  featured: boolean;
  priority: number;
  shortDescription: string;
  problem: string;
  technicalApproach: string[];
  technologies: string[];
  contribution: string;
  learningOutcomes: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  metricsOrHighlight?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: {
    name: string;
    level: 'Practical Experience' | 'Familiarity' | 'Learning Interest';
    tag?: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  type: 'Internship' | 'Technical Training';
  organization: string;
  duration: string;
  period: string;
  mode: string;
  description: string;
  highlights: string[];
  skills: string[];
  certificateAvailable?: boolean;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  scoreLabel: string;
  score: string;
  location: string;
  details: string;
  badge?: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  category: 'Competition' | 'Research' | 'Hackathon' | 'Robotics';
  rankOrRole: string;
  badgeColor: string;
  description: string;
  projectOrScope?: string;
  verifiedLink?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Tirtha Rudra Shettigar",
    shortName: "Tirtha Shettigar",
    monogram: "TS",
    tagline: "Bridging Electronics, Intelligent Systems, and Innovation.",
    professionalIdentity:
      "Electronics and Communication Engineering Student | VLSI and RTL Design Enthusiast | Embedded Systems and IoT Developer | AI/ML Practitioner",
    introductionLabel: "ELECTRONICS • VLSI • EMBEDDED SYSTEMS • AI/ML",
    aboutBio:
      "I'm an Electronics and Communication Engineering student passionate about digital design, semiconductor engineering, embedded systems, IoT, and AI-powered solutions. I enjoy turning engineering concepts into practical projects that connect hardware, software, and intelligent technology.",
    detailedAbout:
      "I'm an Electronics and Communication Engineering student who enjoys exploring the intersection of hardware, software, and intelligent systems.\n\nMy interests span digital electronics, RTL design, embedded systems, IoT, and machine learning. Through academic projects, technical training, competitions, and independent development, I continue to strengthen my ability to analyze problems and build practical solutions.\n\nI believe engineering is more than understanding theory. It is about designing, testing, debugging, and improving systems that solve real-world problems.",
    roles: [
      "VLSI & RTL Design Enthusiast",
      "Embedded Systems Developer",
      "IoT Project Builder",
      "AI/ML Practitioner",
      "Electronics Engineering Student",
    ],
    email: "tirthashettigar@gmail.com",
    phone: "+91 9380145315",
    location: "Karnataka, India",
    college: "Alva's Institute of Engineering & Technology (AIET), Moodabidri, Karnataka",
    degree: "Bachelor of Engineering in Electronics and Communication Engineering",
    educationPeriod: "2023–Present",
    currentCGPA: "8.0", // Updated centralized value (CGPA 8.0)
    statusIndicator: "Open to Engineering Internship Opportunities",
    availabilitySubtext: "Looking for roles in VLSI/RTL Design, Embedded Systems, Semiconductor Product Engineering & AI/ML",
    socials: {
      github: "https://github.com/Tirtha2005",
      linkedin: "https://www.linkedin.com/in/tirtha-shettigar/",
      email: "mailto:tirthashettigar@gmail.com",
    },
    resumePath: "/resume/resume.pdf", // User dropped actual resume PDF here
    resumeAvailable: true, // Resume is active and available for download
  },

  focusCards: [
    {
      index: "01",
      title: "Semiconductor & Digital Design",
      desc: "Learning digital logic, Verilog HDL, RTL simulation, Physical Design, and FPGA-based design workflows.",
      icon: "Cpu",
    },
    {
      index: "02",
      title: "Embedded Systems",
      desc: "Developing microcontroller-based systems using C/C++, sensors, and communication interfaces.",
      icon: "Microchip",
    },
    {
      index: "03",
      title: "AI & Machine Learning",
      desc: "Exploring predictive modeling, classification, clustering, and data-driven applications.",
      icon: "BrainCircuit",
    },
    {
      index: "04",
      title: "IoT & Smart Monitoring",
      desc: "Building connected sensing systems for real-time monitoring and practical applications.",
      icon: "Wifi",
    },
  ],

  whatDrivesMe: [
    "Learning by building physical hardware and simulated digital logic.",
    "Solving practical engineering problems with measurable efficiency.",
    "Connecting low-level hardware registers with high-level software intelligence.",
    "Exploring modern semiconductor architectures, Physical Design (PD), and intelligent technologies.",
    "Continuously improving through waveform analysis, experimentation, and hands-on debugging.",
  ],

  skillsCategories: [
    {
      id: "programming-hdl",
      title: "Programming & Hardware Description",
      badge: "CATEGORY A",
      description: "Core languages used for hardware modeling, firmware, and scientific computing.",
      skills: [
        { name: "Verilog HDL", level: "Practical Experience", tag: "RTL & Testbench" },
        { name: "C", level: "Practical Experience", tag: "Embedded Firmware" },
        { name: "C++", level: "Practical Experience", tag: "System Logic" },
        { name: "Python", level: "Practical Experience", tag: "Data, ML & Scripting" },
      ],
    },
    {
      id: "vlsi-digital",
      title: "VLSI, RTL & Physical Design",
      badge: "CATEGORY B",
      description: "Architectural, gate-level, and physical design concepts for digital IC systems.",
      skills: [
        { name: "Digital Logic Design", level: "Practical Experience", tag: "Boolean Algebra & Gates" },
        { name: "RTL Design Fundamentals", level: "Practical Experience", tag: "Datapath & Control" },
        { name: "RTL Simulation", level: "Practical Experience", tag: "ModelSim Waveforms" },
        { name: "Physical Design (PD)", level: "Practical Experience", tag: "VLSI Minds Training" },
        { name: "Floorplanning & Placement", level: "Practical Experience", tag: "Netlist to GDSII Flow" },
        { name: "Clock Tree Synthesis (CTS)", level: "Familiarity", tag: "Skew & Latency Optimization" },
        { name: "Static Timing Analysis (STA)", level: "Familiarity", tag: "Setup & Hold Slacks" },
        { name: "Finite State Machines (FSM)", level: "Practical Experience", tag: "Moore & Mealy" },
        { name: "Combinational & Sequential Logic", level: "Practical Experience", tag: "Flip-Flops & Muxes" },
        { name: "FPGA Design Fundamentals", level: "Familiarity", tag: "Synthesis & Mapping" },
        { name: "CMOS Fundamentals", level: "Practical Experience", tag: "Inverter & Sizing" },
      ],
    },
    {
      id: "embedded-systems",
      title: "Embedded Systems & Hardware",
      badge: "CATEGORY C",
      description: "Microcontroller platforms, serial protocols, and peripheral interfacing.",
      skills: [
        { name: "Arduino Platform", level: "Practical Experience", tag: "Rapid Prototyping" },
        { name: "ESP32", level: "Practical Experience", tag: "Wi-Fi / Bluetooth IoT" },
        { name: "Raspberry Pi", level: "Practical Experience", tag: "Linux SBC / Python" },
        { name: "STM32", level: "Familiarity", tag: "ARM Cortex-M" },
        { name: "Sensor Interfacing", level: "Practical Experience", tag: "Analog & Digital" },
        { name: "GPIO & ADC", level: "Practical Experience", tag: "Signal Conversion" },
        { name: "PWM", level: "Practical Experience", tag: "Motor & Actuator Control" },
        { name: "UART / I2C / SPI", level: "Practical Experience", tag: "Bus Protocols" },
      ],
    },
    {
      id: "eda-tools",
      title: "EDA & Engineering Tools",
      badge: "CATEGORY D",
      description: "Industry-standard electronic design automation and simulation suites.",
      skills: [
        { name: "Intel Quartus Prime", level: "Practical Experience", tag: "FPGA Synthesis" },
        { name: "ModelSim", level: "Practical Experience", tag: "Verilog Simulation" },
        { name: "Arduino IDE", level: "Practical Experience", tag: "Firmware Toolchain" },
        { name: "MATLAB", level: "Familiarity", tag: "Signal & Matrix Math" },
        { name: "Xilinx ISE", level: "Familiarity", tag: "Legacy FPGA Flow" },
        { name: "Cadence Virtuoso", level: "Practical Experience", tag: "Custom IC Schematic/Layout" },
        { name: "Cadence Innovus", level: "Practical Experience", tag: "Digital Place & Route" },
      ],
    },
    {
      id: "ai-ml-data",
      title: "AI, Machine Learning & Data",
      badge: "CATEGORY E",
      description: "Statistical modeling, predictive algorithms, and exploratory data workflows.",
      skills: [
        { name: "Machine Learning Fundamentals", level: "Practical Experience", tag: "Scikit-Learn" },
        { name: "Supervised Learning", level: "Practical Experience", tag: "Regression & Classifiers" },
        { name: "Unsupervised Learning", level: "Practical Experience", tag: "K-Means Clustering" },
        { name: "Data Preprocessing", level: "Practical Experience", tag: "Pandas & NumPy" },
        { name: "Model Evaluation", level: "Practical Experience", tag: "Metrics & Validation" },
        { name: "Python-Based Data Analysis", level: "Practical Experience", tag: "EDA & Visualization" },
      ],
    },
    {
      id: "iot-communication",
      title: "IoT & Cloud Telemetry",
      badge: "CATEGORY F",
      description: "Sensor data aggregation, publish-subscribe protocols, and visual telemetry.",
      skills: [
        { name: "Sensor Data Acquisition", level: "Practical Experience", tag: "Multi-Sensor Nodes" },
        { name: "MQTT Fundamentals", level: "Practical Experience", tag: "Pub/Sub Messaging" },
        { name: "IoT Monitoring", level: "Practical Experience", tag: "Remote Dashboards" },
        { name: "Real-Time Data Collection", level: "Practical Experience", tag: "Edge Processing" },
        { name: "Grafana Fundamentals", level: "Familiarity", tag: "Time-Series Panels" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "traffic-light-fsm",
      title: "Verilog-Based Traffic Light Controller",
      category: "vlsi",
      categoryLabel: "VLSI & Digital Design",
      status: "Completed",
      featured: true,
      priority: 1,
      metricsOrHighlight: "Finite State Machine with RTL Simulation in ModelSim",
      shortDescription:
        "A digital design project implementing a 4-way traffic light controller using Verilog HDL, emphasizing synchronous finite state machines, clock-driven transitions, and simulation verification.",
      problem:
        "Real-world intersection management requires deterministic, glitch-free state sequencing with predictable timing intervals for North-South and East-West lane transitions.",
      technicalApproach: [
        "Modeled a Moore Finite State Machine (FSM) with states for North-South Green/Yellow and East-West Green/Yellow.",
        "Implemented parameterized clock frequency division to derive real-time seconds from high-frequency clock oscillators.",
        "Wrote a comprehensive Verilog testbench applying clock stimuli and monitoring state vector waveforms.",
        "Performed synthesis and RTL analysis using Intel Quartus Prime and simulated timing behavior in ModelSim.",
      ],
      technologies: ["Verilog HDL", "Intel Quartus Prime", "ModelSim", "RTL Testbench", "FSM Architecture"],
      contribution:
        "Designed the complete Verilog state machine, wrote the behavioral simulation testbench, synthesized the logic gates in Quartus Prime, and validated wave output.",
      learningOutcomes: [
        "Synchronous reset mechanisms and non-blocking assignments (`<=`).",
        "Translating state diagrams into synthesizable Verilog modules.",
        "Waveform inspection for race conditions, latch inferences, and state glitches.",
      ],
      githubUrl: "https://github.com/Tirtha2005/Traffic-Light-Controller-Verilog-Based-",
      image: "/projects/traffic-light-fsm.svg",
    },
    {
      id: "water-quality-iot",
      title: "AI and IoT-Enabled Water Quality Monitoring and Risk Analysis",
      category: "iot-robotics",
      categoryLabel: "IoT & Intelligent Sensing",
      status: "In Progress",
      featured: true,
      priority: 2,
      metricsOrHighlight: "Published IEEE Paper #11712891 + Multi-Sensor Edge Node + ADS1115",
      shortDescription:
        "An engineering project integrating hardware water-quality sensors, 16-bit analog-to-digital conversion, edge Python processing, and machine learning models for telemetry and health risk evaluation. Published on IEEE Xplore.",
      problem:
        "Traditional water testing relies on sporadic manual sampling that fails to detect sudden industrial or biological contamination events in real time.",
      technicalApproach: [
        "Integrated pH, Turbidity, Total Dissolved Solids (TDS), and Temperature physical sensors.",
        "Employed ADS1115 16-bit ADC over I2C to interface analog sensor voltage outputs with a Raspberry Pi edge controller.",
        "Engineered Python calibration algorithms to map raw millivolt levels into calibrated pH and NTU turbidity units.",
        "Constructed MQTT telemetry pipeline feeding sensor streams into Grafana dashboard for real-time visualization.",
        "Formulated machine learning predictive pipelines for water potability classification and regional risk index mapping.",
      ],
      technologies: [
        "Raspberry Pi",
        "Python",
        "ADS1115 (16-bit ADC)",
        "Water Sensors (pH, Turbidity, TDS)",
        "MQTT",
        "Grafana",
        "Scikit-Learn",
      ],
      contribution:
        "Architected sensor circuit wiring, authored I2C sensor polling scripts, implemented data calibration routines, and co-authored the comprehensive survey paper published on IEEE Xplore.",
      learningOutcomes: [
        "Analog signal noise filtering, sensor drift calibration, and ADC sampling constraints.",
        "Edge-to-cloud telemetry using lightweight publish/subscribe architecture.",
        "Balancing real-time hardware constraints with statistical ML inference.",
      ],
      githubUrl: "https://github.com/Tirtha2005",
      demoUrl: "https://ieeexplore.ieee.org/abstract/document/11712891",
      image: "/projects/water-quality-iot.svg",
    },
    {
      id: "smart-attendance-system",
      title: "Smart Attendance System with RFID & Camera Verification",
      category: "embedded",
      categoryLabel: "Embedded Systems & Automation",
      status: "Completed",
      featured: true,
      priority: 3,
      metricsOrHighlight: "🏆 1st Place Winner — TECHNOVATE 2K25",
      shortDescription:
        "A dual-authentication automated attendance platform combining high-frequency RFID identification with camera-based head-count verification to prevent proxy attendance.",
      problem:
        "Conventional manual roll-calls waste instructional time, and single-factor RFID systems are vulnerable to buddy-punching or card sharing.",
      technicalApproach: [
        "Configured RC522 RFID reader with SPI communication on an ESP32 microcontroller.",
        "Designed real-time credential validation logging timestamps, student UID, and section data.",
        "Implemented a camera verification module capturing visual head-count frames to corroborate active badge scans.",
        "Synchronized logs with an automated central record database, eliminating manual paper record entry.",
      ],
      technologies: ["ESP32", "RFID (RC522)", "Embedded C/C++", "Camera Module", "SPI Protocol", "IoT Automation"],
      contribution:
        "Led hardware integration, firmware programming on the microcontroller, SPI peripheral configuration, and live project demonstration at TECHNOVATE 2K25.",
      learningOutcomes: [
        "Robust hardware interrupt handling for RFID tag detection.",
        "Serial and SPI communication debugging in embedded environments.",
        "System reliability during live competition demonstrations under time constraints.",
      ],
      githubUrl: "https://github.com/Tirtha2005",
      image: "/projects/smart-attendance.svg",
    },
    {
      id: "eyantra-mazesolver",
      title: "Autonomous Maze Solver Robot — e-Yantra (IIT Bombay)",
      category: "iot-robotics",
      categoryLabel: "Embedded Robotics & Automation",
      status: "Completed",
      featured: true,
      priority: 4,
      metricsOrHighlight: "IIT Bombay e-Yantra Competition // National Qualifier // Autonomous Wall Following",
      shortDescription:
        "An autonomous maze-solving mobile robotic platform engineered for the prestigious national e-Yantra Robotics Competition (IIT Bombay), executing real-time sonar rangefinding, wall-following state logic, and dead-end backtrack algorithms.",
      problem:
        "Deterministic traversal through complex orthogonal labyrinths requires continuous distance tracking along narrow corridors, junction branching decisions, and turn stability without manual teleoperation.",
      technicalApproach: [
        "Integrated ultrasonic distance rangefinder array with microsecond echo timing to measure front, left, and right corridor wall clearances.",
        "Formulated algorithmic wall-following state machine (Left-Hand Rule & modified Tremaux logic) to navigate labyrinth topologies.",
        "Engineered differential drive motor control via PWM speed regulation on dual H-Bridge motor drivers.",
        "Programmed precise 90-degree pivot turns, cell-by-cell forward steps, and 180-degree dead-end backtrack routines in embedded C/C++.",
        "Optimized threshold distance comparators and sensor debounce filters to eliminate false boundary readings caused by acoustic reflections.",
      ],
      technologies: [
        "Embedded C/C++",
        "Microcontroller",
        "Ultrasonic Sensors (HC-SR04)",
        "Differential Drive",
        "H-Bridge Motor Driver (L298N)",
        "Maze Pathfinding",
        "PWM Regulation",
      ],
      contribution:
        "Architected the maze-solving decision algorithm, calibrated threshold clear distances, integrated motor driver circuitry, and validated navigation stability across test arenas for the e-Yantra national competition.",
      learningOutcomes: [
        "Autonomous obstacle boundary tracking and algorithmic path exploration in constrained spaces.",
        "Real-time sensor timing, signal debounce, and motor driver noise isolation in embedded C/C++.",
        "Tuning differential steering parameters to prevent wheel slippage and angular drift inside narrow maze corridors.",
      ],
      githubUrl: "https://github.com/Tirtha2005/e-yantra-mazesolver",
      image: "/projects/eyantra-mazesolver.svg",
    },
    {
      id: "obstacle-avoidance-robot",
      title: "Autonomous Obstacle Avoidance Robot",
      category: "iot-robotics",
      categoryLabel: "Embedded Robotics",
      status: "Completed",
      featured: false,
      priority: 5,
      metricsOrHighlight: "Ultrasonic Pulse Timing + Servo Radar Sweep Algorithm",
      shortDescription:
        "A self-navigating mobile robot built during the Upskill Campus / UniConverge internship that detects physical obstacles and dynamically plots clear paths.",
      problem:
        "Mobile robotic platforms in unknown environments require autonomous decision-making without human intervention or continuous remote control.",
      technicalApproach: [
        "Utilized HC-SR04 ultrasonic sensor with microsecond echo pulse timing to compute distance in centimeters.",
        "Mounted sensor onto an SG90 micro-servo to execute 180-degree sweep scans when obstacles are detected under 20cm.",
        "Engineered path choice algorithm: compares left vs right clearances and commands motor differential turns accordingly.",
      ],
      technologies: ["Embedded C++", "HC-SR04 Ultrasonic", "Servo Motor", "L298N Driver", "Autonomous Decision Logic"],
      contribution:
        "Implemented sensor pulse timing routines, servo position control, navigation state logic, and obstacle clearance tuning.",
      learningOutcomes: [
        "Accurate pulse duration measurement using timer registers/micros().",
        "Handling false reflections and sensor blind spots in varied physical spaces.",
      ],
      githubUrl: "https://github.com/Tirtha2005/upskillcampus",
      image: "/projects/robotics-line-obstacle.svg",
    },
    {
      id: "line-following-robot",
      title: "Sensor-Based Line Following Robot",
      category: "iot-robotics",
      categoryLabel: "Embedded Robotics",
      status: "Completed",
      featured: false,
      priority: 5,
      metricsOrHighlight: "Infrared Optical Array + Differential Steering Control",
      shortDescription:
        "An automated guided vehicle tracking defined high-contrast paths using an array of optical infrared reflectance sensors and closed-loop speed adjustments.",
      problem:
        "Factory floor automation and transport carts require cost-effective, deterministic navigation along predetermined floor paths without expensive LiDAR systems.",
      technicalApproach: [
        "Configured dual/multi-channel TCRT5000 infrared reflectance sensors detecting black tape on light floor surfaces.",
        "Developed threshold comparator logic determining deviation from path center.",
        "Implemented differential speed steering via PWM modulation to smoothly correct heading without abrupt oscillation.",
      ],
      technologies: ["IR Reflectance Sensors", "Embedded C++", "PWM Speed Control", "Differential Drive", "Hardware Calibration"],
      contribution:
        "Calibrated analog infrared sensitivity potentiometers, programmed motor correction states, and tested cornering stability.",
      learningOutcomes: [
        "Ambient light compensation techniques in optical sensing.",
        "Continuous feedback loop tuning for smooth robotic vehicular motion.",
      ],
      githubUrl: "https://github.com/Tirtha2005/upskillcampus",
      image: "/projects/robotics-line-obstacle.svg",
    },
    {
      id: "voice-controlled-vehicle",
      title: "Voice-Controlled Robotic Vehicle",
      category: "embedded",
      categoryLabel: "Embedded Robotics",
      status: "Completed",
      featured: false,
      priority: 6,
      metricsOrHighlight: "Wireless Voice-Command Decoders & Motor Driver Integration",
      shortDescription:
        "An embedded robotics project exploring wireless serial communication, directional voice command parsing, and H-Bridge motor actuation.",
      problem:
        "Hands-free navigation for small payload carts or assistance vehicles requires low-latency wireless command interpretation and deterministic motor control.",
      technicalApproach: [
        "Configured wireless voice-command receiver parsing directional strings ('Forward', 'Backward', 'Stop', 'Left', 'Right').",
        "Interfaced L298N dual H-Bridge motor controller with microcontroller PWM pins for speed and torque regulation.",
        "Implemented safety fail-safes that automatically halt the vehicle upon lost signal or unexpected command tokens.",
      ],
      technologies: ["Microcontroller (Arduino/C++)", "L298N Motor Driver", "Wireless Serial Module", "PWM Control", "DC Gear Motors"],
      contribution:
        "Assembled chassis, soldered power distribution rails, programmed motor PWM routines, and calibrated command sensitivity.",
      learningOutcomes: [
        "Power separation between high-current inductive motor loads and sensitive microcontroller logic.",
        "String parsing and buffer management in embedded microcontrollers.",
      ],
      githubUrl: "https://github.com/Tirtha2005/AI-voice-assistant-for-linux",
      image: "/projects/robotics-line-obstacle.svg",
    },
    {
      id: "prodigy-ml-suite",
      title: "Machine Learning Practical Suite (Prodigy InfoTech)",
      category: "ai-ml",
      categoryLabel: "AI & Machine Learning",
      status: "Completed",
      featured: true,
      priority: 7,
      metricsOrHighlight: "5 Practical ML Projects across Regression, Clustering, SVM & Vision",
      shortDescription:
        "A rigorous collection of machine learning tasks developed during the Prodigy InfoTech internship covering regression modeling, clustering analysis, image classification, gesture recognition, and dietary estimation.",
      problem:
        "Real-world data is noisy, multi-collinear, and unlabeled. Practical ML engineering demands hands-on data cleaning, feature engineering, and model validation.",
      technicalApproach: [
        "House Price Prediction (prodigy_ML_01): Exploratory data analysis, handling categorical variables, outlier removal, and linear regression.",
        "Customer Segmentation (prodigy_ML_02): K-Means clustering, determining optimal K via the Elbow Method and Silhouette Score analysis.",
        "Image Classification (prodigy_ML_03): Feature extraction, pixel normalization, and Support Vector Machine (SVM) kernel tuning.",
        "Hand Gesture Recognition (prodigy_ML_04): Computer vision preprocessing with OpenCV, contour analysis, and gesture classification.",
        "Calorie Estimation (prodigy_ML_05): Multivariate regression modeling nutrient and activity metrics to estimate caloric expenditure.",
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib / Seaborn", "OpenCV", "Jupyter Notebooks"],
      contribution:
        "Executed end-to-end data preparation, model training, hyperparameter exploration, performance metrics calculation, and documented codebases across 5 GitHub repositories.",
      learningOutcomes: [
        "Preventing data leakage and overfitting using train-test splits and cross-validation.",
        "Mathematical intuitions behind SVM hyperplanes and K-Means centroid convergence.",
      ],
      githubUrl: "https://github.com/Tirtha2005/Machine-Learning-Practice",
      image: "/projects/ml-prodigy-suite.svg",
    },
    {
      id: "crop-yield-prediction",
      title: "Crop Yield Prediction Model",
      category: "ai-ml",
      categoryLabel: "AI & Machine Learning",
      status: "Completed",
      featured: false,
      priority: 8,
      metricsOrHighlight: "Multivariate Regression on Agronomic, Climate & Soil Data",
      shortDescription:
        "A data science project predicting agricultural crop yield based on environmental factors, rainfall patterns, fertilizer inputs, and soil characteristics using regression algorithms.",
      problem:
        "Agricultural planning requires accurate predictive estimations of harvest yields to optimize resource allocation, market logistics, and food security planning.",
      technicalApproach: [
        "Gathered and cleaned multi-dimensional agricultural datasets containing rainfall, temperature, fertilizer usage, and soil types.",
        "Engineered feature normalization using StandardScaler and encoded categorical crop indices.",
        "Trained and evaluated multiple regression models (Linear Regression, Ridge, Random Forest Regressor) with cross-validation.",
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
      contribution:
        "Handled data cleaning, feature engineering, cross-validation scoring, and documented the open-source analysis notebook.",
      learningOutcomes: [
        "Feature importance scoring and multi-collinearity detection.",
        "Handling non-linear dependencies between weather anomalies and harvest yields.",
      ],
      githubUrl: "https://github.com/Tirtha2005/Crop_Yield_Prediction",
      image: "/projects/crop-yield-prediction.svg",
    },
    {
      id: "ai-data-analyst",
      title: "AI-Powered Data Analyst Application",
      category: "software",
      categoryLabel: "Software & Data Analytics",
      status: "Prototype",
      featured: false,
      priority: 9,
      metricsOrHighlight: "Interactive Data Ingestion & Natural-Language Analytical Exploration",
      shortDescription:
        "An experimental web-based analytical tool designed to accept CSV/XLSX file uploads, generate dynamic charts, and provide AI-assisted insights for fast tabular data exploration.",
      problem:
        "Engineers and researchers frequently need rapid exploratory data analysis without writing boilerplate visualization scripts for every dataset.",
      technicalApproach: [
        "Engineered tabular file parsers for structured CSV/XLSX datasets.",
        "Built modular chart rendering components for histograms, scatter plots, and correlation matrices.",
        "Integrated natural language prompt parsing to extract statistical queries from user inputs.",
      ],
      technologies: ["React", "TypeScript", "Data Visualization", "API Integration", "Tabular Data Parsing"],
      contribution:
        "Architected frontend data flow, built chart preview components, and structured the analytical workflow prototype.",
      learningOutcomes: [
        "Client-side processing of tabular datasets with responsive UI rendering.",
        "Structuring deterministic prompt schemas for structured analytical summaries.",
      ],
      githubUrl: "https://github.com/Tirtha2005/Ai-powered-data-analyst",
      image: "/projects/data-analyst-ai.svg",
    },
    {
      id: "voice-assistant-linux",
      title: "AI Voice Assistant for Linux",
      category: "software",
      categoryLabel: "Software & Automation",
      status: "Completed",
      featured: false,
      priority: 10,
      metricsOrHighlight: "Speech-to-Text Command Dispatch & Linux Desktop Automation",
      shortDescription:
        "A Python-based desktop voice assistant for Linux environments designed to process natural voice commands and automate system administration, application launching, and web inquiries.",
      problem:
        "Developers and engineers operating Linux workstations benefit from hands-free desktop control and immediate auditory feedback during development.",
      technicalApproach: [
        "Integrated SpeechRecognition library with noise-adaptive microphone sampling.",
        "Developed intent classification module parsing auditory inputs into deterministic Linux terminal bash commands.",
        "Implemented text-to-speech (TTS) responses utilizing pyttsx3 for low-latency offline voice feedback.",
      ],
      technologies: ["Python", "SpeechRecognition", "Pyttsx3", "Linux Bash", "Subprocess Automation"],
      contribution:
        "Built voice capture pipeline, command parsing dictionaries, safety execution guards, and audio feedback engine.",
      learningOutcomes: [
        "Audio stream buffering and ambient noise threshold calibration.",
        "Safe subprocess execution avoiding shell injection vulnerabilities.",
      ],
      githubUrl: "https://github.com/Tirtha2005/AI-voice-assistant-for-linux",
      image: "/projects/voice-assistant-linux.svg",
    },
    {
      id: "stock-market-prediction",
      title: "Stock Market Time-Series Exploration",
      category: "ai-ml",
      categoryLabel: "AI & Machine Learning",
      status: "Academic Exploration",
      featured: false,
      priority: 11,
      metricsOrHighlight: "Historical Price Analysis, Moving Averages & LSTM Concepts",
      shortDescription:
        "A quantitative exploration investigating financial time-series data using statistical indicators, moving average baselines, and recurrent neural network architectures.",
      problem:
        "Market time-series data contains significant non-stationarity, market noise, and volatility that challenge traditional linear models.",
      technicalApproach: [
        "Extracted historical stock price series and computed technical indicators (SMA, EMA, Volatility).",
        "Applied MinMax scaling to normalize sequential time-window inputs.",
        "Explored Long Short-Term Memory (LSTM) network topologies for multi-step price sequence trend evaluation.",
      ],
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Time-Series Modeling", "Scikit-Learn"],
      contribution:
        "Engineered time-lagged feature windows, implemented normalization pipelines, and plotted predicted trends against actual historical baselines.",
      learningOutcomes: [
        "Sequence windowing and temporal dependencies in recurrent neural architectures.",
        "Realistic understanding of market noise and avoiding overfitted predictive claims.",
      ],
      githubUrl: "https://github.com/Tirtha2005/stock_market_prediction",
      image: "/projects/stock-prediction.svg",
    },
    {
      id: "ultron-orb-ui",
      title: "Ultron Orb — Futuristic Interactive Interface",
      category: "software",
      categoryLabel: "Creative Frontend & Graphics",
      status: "Completed",
      featured: false,
      priority: 12,
      metricsOrHighlight: "Interactive Technical Graphics & Real-Time Motion State Transitions",
      shortDescription:
        "A creative engineering project exploring interactive mathematical particle graphics, cursor-reactive motion physics, and customizable futuristic visual themes.",
      problem:
        "Engineering dashboards and telemetry panels often suffer from static, uninspiring presentation that fails to convey complex dynamic system states.",
      technicalApproach: [
        "Implemented real-time mathematical trigonometric coordinate calculations for smooth orbital particle flow.",
        "Built reactive mouse and touch tracking listeners to deform and illuminate the orb geometry in real time.",
        "Engineered theme switches altering lighting parameters, color spectral shifts, and telemetry HUD overlays.",
      ],
      technologies: ["JavaScript / TypeScript", "HTML5 Canvas / WebGL", "CSS Animations", "Mathematical Modeling"],
      contribution:
        "Designed vector visual layouts, programmed orbital particle mathematics, and optimized rendering loops for 60fps performance.",
      learningOutcomes: [
        "High-performance rendering with requestAnimationFrame.",
        "Translating abstract sci-fi HUD concepts into clean, reusable web components.",
      ],
      githubUrl: "https://github.com/Tirtha2005/ULTRON-ORB-UI",
      image: "/projects/ultron-orb.svg",
    },
  ] as Project[],

  experiences: [
    {
      id: "vlsi-minds-pd",
      role: "Physical Design (PD) Training",
      type: "Technical Training",
      organization: "VLSI Minds",
      duration: "Professional Technical Training",
      period: "2025–2026",
      mode: "Hands-on Technical Training",
      description:
        "Comprehensive industry-standard training in ASIC Physical Design (Netlist-to-GDSII flow), covering chip floorplanning, power grid design, placement optimization, clock tree synthesis (CTS), routing, and signoff timing closure.",
      highlights: [
        "ASIC Physical Design flow stages: Synthesis netlist handoff to final GDSII tapeout.",
        "Floorplanning, core/die area estimation, power mesh (VDD/VSS) distribution, and macro placement.",
        "Standard cell placement, high-fanout net synthesis (HFNS), and timing-driven optimization.",
        "Clock Tree Synthesis (CTS): Skew targets, latency budgeting, and clock buffer/inverter tree balancing.",
        "Global and detailed routing, crosstalk noise avoidance, and antenna violation repair.",
        "Static Timing Analysis (STA): Setup & hold timing closure across PVT corners, DRC & LVS physical verification.",
      ],
      skills: ["Physical Design (PD)", "Floorplanning", "Clock Tree Synthesis (CTS)", "Static Timing Analysis (STA)", "DRC / LVS", "Netlist-to-GDSII"],
      certificateAvailable: true,
    },
    {
      id: "upskill-campus",
      role: "IoT & Embedded Systems Intern",
      type: "Internship",
      organization: "Upskill Campus / UniConverge Technologies",
      duration: "6 Weeks",
      period: "2026",
      mode: "Remote",
      description:
        "Completed hands-on technical training and practical project development focused on IoT architectures, sensor acquisition, and embedded autonomous robotics.",
      highlights: [
        "Interfaced hardware sensors (ultrasonic, infrared, analog) with microcontroller dev boards.",
        "Programmed obstacle avoidance and line-following autonomous robotic vehicle algorithms.",
        "Configured motor drivers, GPIO interrupts, and serial communication buses.",
        "Gained practical insights into hardware-software debugging and sensor calibration.",
      ],
      skills: ["Embedded C++", "Microcontrollers", "Sensors", "Robotics", "L298N Motor Control"],
      certificateAvailable: true,
    },
    {
      id: "prodigy-infotech",
      role: "Machine Learning Intern",
      type: "Internship",
      organization: "Prodigy InfoTech",
      duration: "March–April 2026",
      period: "2026",
      mode: "Remote",
      description:
        "Developed end-to-end machine learning models across supervised regression, unsupervised clustering, support vector classification, and image recognition tasks.",
      highlights: [
        "Implemented multivariate house price prediction utilizing feature selection and linear modeling.",
        "Executed customer segmentation using K-Means clustering with Elbow Method validation.",
        "Built image classification workflows utilizing Support Vector Machines (SVM).",
        "Constructed hand gesture recognition scripts and calorie estimation models.",
      ],
      skills: ["Python", "Scikit-Learn", "Pandas", "NumPy", "OpenCV", "Exploratory Data Analysis"],
      certificateAvailable: true,
    },
    {
      id: "microdegree",
      role: "Python Full Stack Training",
      type: "Technical Training",
      organization: "MicroDegree",
      duration: "Structured Curriculum",
      period: "2024–2025",
      mode: "Online / Practical",
      description:
        "Intensive technical coursework reinforcing modern Python programming, software modularity, database connections, and full-stack web integration fundamentals.",
      highlights: [
        "Advanced Python data structures, object-oriented design, and algorithmic problem-solving.",
        "Connecting Python backends with database storage and external APIs.",
        "Writing modular, maintainable code following engineering conventions.",
      ],
      skills: ["Python", "OOP", "Software Design", "Data Structures"],
      certificateAvailable: true,
    },
    {
      id: "pantech-ai",
      role: "Embedded C / ARM Cortex-M4 Training",
      type: "Technical Training",
      organization: "Pantech.AI",
      duration: "Specialized Course",
      period: "2025",
      mode: "Virtual Hands-on",
      description:
        "Specialized training covering 32-bit ARM Cortex-M4 microcontroller architecture, register-level embedded C programming, and low-level peripheral drivers.",
      highlights: [
        "Explored ARM Cortex-M4 bus matrix, clock configuration, and memory maps.",
        "Wrote low-level register manipulation routines for GPIO, Timers, and ADC peripherals.",
        "Studied interrupt handling routines (NVIC) and real-time execution constraints.",
      ],
      skills: ["ARM Cortex-M4", "Embedded C", "Bare-Metal Registers", "NVIC Interrupts"],
      certificateAvailable: true,
    },
    {
      id: "nptel-verilog",
      role: "Verilog & FPGA / Signal Processing Learning",
      type: "Technical Training",
      organization: "NPTEL / Online Engineering Platforms",
      duration: "Academic Semester Courses",
      period: "2024–Present",
      mode: "Independent & Academic",
      description:
        "Continuous self-driven and academic coursework exploring Hardware Description Languages (HDL), digital logic synthesis, and digital signal processing principles.",
      highlights: [
        "Studied synthesizable Verilog subsets, combinational logic trees, and clocked sequential circuits.",
        "Explored FPGA architectures: LUTs, flip-flops, routing matrices, and I/O blocks.",
        "Practiced testbench creation for automated digital functional verification.",
      ],
      skills: ["Verilog HDL", "FPGA Architecture", "Digital Logic", "Simulation"],
      certificateAvailable: false,
    },
  ] as Experience[],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Electronics and Communication Engineering",
      institution: "Alva's Institute of Engineering & Technology (AIET)",
      location: "Moodabidri, Karnataka",
      period: "2023–Present",
      scoreLabel: "Current CGPA",
      score: "8.0",
      details:
        "Core coursework in Digital Electronics, VLSI Design, Microcontrollers & Embedded Systems, Signals & Systems, Control Systems, Computer Networks, and Machine Learning.",
      badge: "In Progress",
    },
    {
      degree: "Pre-University Course (PUC)",
      field: "Science Stream (PCMB)",
      institution: "Basaveshwar Science College",
      location: "Bagalkot, Karnataka",
      period: "2022–2023",
      scoreLabel: "Percentage",
      score: "75%",
      details: "Strong foundations in Physics, Chemistry, Mathematics, and Analytical Science.",
      badge: "Completed",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      field: "General Secondary Education",
      institution: "Basaveshwara New High School",
      location: "Bagalkot, Karnataka",
      period: "2020–2021",
      scoreLabel: "Percentage",
      score: "78%",
      details: "Core academic subjects with distinction in science and mathematics.",
      badge: "Completed",
    },
  ] as Education[],

  achievements: [
    {
      id: "technovate-2k25",
      title: "TECHNOVATE 2K25 — 1st Place Winner",
      subtitle: "Inter-Collegiate Project Innovation Contest",
      category: "Competition",
      rankOrRole: "1st Place (Winner)",
      badgeColor: "cyan",
      description:
        "Awarded First Place for designing and demonstrating the 'Smart Attendance System', which successfully integrated RFID authentication with camera-based head-count verification on an ESP32 hardware platform.",
      projectOrScope: "Smart Attendance System",
    },
    {
      id: "ieee-iciet-2026",
      title: "IEEE ICIET 2026 Published Research Paper",
      subtitle: "Published on IEEE Xplore • Paper ID: 1062",
      category: "Research",
      rankOrRole: "Published on IEEE Xplore",
      badgeColor: "violet",
      description:
        "Co-authored research survey titled 'An Extensive Survey on IoT and AI/ML-Based Water Quality Monitoring', analyzing modern multi-sensor integration, edge conversion, and predictive ML for health risk assessment. Published and indexed on IEEE Xplore.",
      projectOrScope: "Paper ID: 1062 • IEEE Xplore",
      verifiedLink: "https://ieeexplore.ieee.org/abstract/document/11712891",
    },
    {
      id: "cognizant-technoverse",
      title: "Cognizant Technoverse Hackathon 2026",
      subtitle: "Industry Engineering Hackathon",
      category: "Hackathon",
      rankOrRole: "Active Project Participant",
      badgeColor: "blue",
      description:
        "Collaborated on practical technology solutions under competitive hackathon timelines, showcasing hardware-software integration and rapid prototyping capabilities.",
      projectOrScope: "Applied Innovation",
    },
    {
      id: "eyantra-robotics",
      title: "e-Yantra Robotics Competition — IIT Bombay",
      subtitle: "National Robotics Initiative",
      category: "Robotics",
      rankOrRole: "Round 1 Qualifier",
      badgeColor: "emerald",
      description:
        "Participated in the prestigious national robotics contest organized by IIT Bombay, tackling simulated maze-solving challenges and algorithmic pathfinding tasks.",
      projectOrScope: "Maze Solver Robot Challenge",
    },
  ] as Achievement[],

  researchPublication: {
    title: "An Extensive Survey on IoT and AI/ML-Based Water Quality Monitoring",
    conference: "IEEE International Conference on Innovations in Engineering & Technology (ICIET 2026)",
    paperId: "1062",
    status: "Published on IEEE Xplore",
    year: "2026",
    description:
      "A research survey exploring how IoT-based multi-sensor monitoring, analog-to-digital signal acquisition (ADS1115), and AI/ML techniques can support real-time water quality assessment and predictive health risk monitoring. Officially published and indexed on IEEE Xplore.",
    keyThemes: [
      "Real-time sensor data acquisition (pH, Turbidity, TDS, Temp)",
      "16-bit analog-to-digital conversion and noise suppression",
      "IoT telemetry architectures (MQTT, Edge gateways)",
      "Machine learning models for water potability and disease risk index",
      "Closed-loop purification and automated actuator control concepts",
    ],
    disclaimer:
      "Note: This is an academic research survey officially published on IEEE Xplore (Document #11712891). In keeping with scientific rigor, the project does not claim clinical diagnostic validation.",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/11712891",
    isPdfAvailable: false,
  },

  workflowSteps: [
    {
      step: "01",
      name: "Understand",
      subtitle: "Analyze & Specify",
      description:
        "Deeply analyze the core problem, operational constraints, electrical specifications, signal integrity considerations, and expected behaviors before writing code or assembling hardware.",
      details: ["Input/output boundary mapping", "Timing and power constraints", "Hardware peripheral choices"],
      icon: "Search",
    },
    {
      step: "02",
      name: "Design",
      subtitle: "Architect & Model",
      description:
        "Develop the conceptual architecture, state diagrams (FSM), circuit schematics, pinout allocation, software modularity, or data pipeline workflows.",
      details: ["State transition tables & RTL hierarchy", "Sensor bus topology (I2C/SPI/UART)", "Physical Design floorplan & power planning"],
      icon: "Layers",
    },
    {
      step: "03",
      name: "Build & Test",
      subtitle: "Implement & Simulate",
      description:
        "Implement the solution in physical hardware, synthesizable Verilog, or clean code. Run automated testbenches, verify simulation waveforms, and probe hardware signals.",
      details: ["ModelSim waveform inspection", "Breadboard/PCB prototyping", "Iterative bug isolation"],
      icon: "Wrench",
    },
    {
      step: "04",
      name: "Improve",
      subtitle: "Refine & Document",
      description:
        "Analyze execution bottlenecks, thermal or timing margins, refine the design for reliability, document technical findings, and chart future improvements.",
      details: ["Edge-case verification", "Code & documentation hygiene", "Iterative performance tuning"],
      icon: "Sparkles",
    },
  ],
};
