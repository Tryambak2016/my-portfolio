import React from 'react';
import { motion } from 'framer-motion';
// Import specific Lucide icons for each skill
import {
    Code,
    Fingerprint,
    SquareStack,
    GitFork,
    Bug,
    Server,
    Cloud,
    Puzzle,
    Network,
    Command,
    MonitorSpeaker,
    Atom,
    Package,
    Globe,
    Coffee,
    Leaf,
    Database,
    ShieldCheck,
    GitBranch,
    LayoutGrid,
    Sparkles,
    Blocks,
    FileText,
} from 'lucide-react';

import JavaIcon from '../../assets/java.svg';
import HtmlIcon from '../../assets/html.svg';
import Css from '../../assets/css.svg';
import SpringBootIcon from '../../assets/springboot.png';
import TailwindCssIcon from '../../assets/tailwindcss.svg';
import GitIcon from '../../assets/github.png';
import DockerIcon from '../../assets/docker.png';
import MySqlIcon from '../../assets/mysql.png';
import PostgreSqlIcon from '../../assets/postgresql.png';
import ReactIcon from '../../assets/react.svg';
import JsIcon from '../../assets/javascript.svg'; // Corrected file path
import SupabaseIcon from '../../assets/supabase.png'; // 👈 Import the Supabase icon

// --- Helper function to get the correct icon/image for a skill ---
const getSkillIcon = (skillName) => {
    switch (skillName) {
        // --- PNG images (as requested, these remain unchanged) ---
        case 'Java SE':
            return <img src={JavaIcon} alt="Java SE icon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />;
        case 'HTML5':
            return <img src={HtmlIcon} alt="HTML5 icon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />;
        case 'CSS3':
            return <img src={Css} alt="CSS3 icon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />;
        case 'Spring Boot':
            return <img src={SpringBootIcon} alt="Spring Boot icon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />;
        case 'Tailwind CSS':
            return <img src={TailwindCssIcon} alt="Tailwind CSS icon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />;
        case 'Git & GitHub':
            return <img src={GitIcon} alt="Git & GitHub icon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />;
        case 'Docker':
            return <img src={DockerIcon} alt="Docker icon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />;
        case 'MySQL':
            return <img src={MySqlIcon} alt="MySQL icon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />;
        case 'PostgreSQL':
            return <img src={PostgreSqlIcon} alt="PostgreSQL icon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />;
        case 'Supabase': // 👈 New case for Supabase
            return <img src={SupabaseIcon} alt="Supabase icon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />;
        case 'React':
            return <img src={ReactIcon} alt="React icon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />;
        case 'JavaScript':
            return <img src={JsIcon} alt="JavaScript icon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />;
        // --- Lucide React Icons for SVG images ---
        case 'OOP Principles':
            return <Fingerprint className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400" />;
        case 'Data Structures':
            return <SquareStack className="h-10 w-10 sm:h-12 sm:w-12 text-sky-400" />;
        case 'Multithreading':
            return <GitFork className="h-10 w-10 sm:h-12 sm:w-12 text-red-500" />;
        case 'Exception Handling':
            return <Bug className="h-10 w-10 sm:h-12 sm:w-12 text-orange-400" />;
        case 'Spring MVC':
            return <Globe className="h-10 w-10 sm:h-12 sm:w-12 text-blue-400" />;
        case 'Spring Data JPA':
            return <Server className="h-10 w-10 sm:h-12 sm:w-12 text-indigo-400" />;
        case 'Hibernate':
            return <Package className="h-10 w-10 sm:h-12 sm:w-12 text-lime-400" />;
        case 'REST APIs':
            return <Network className="h-10 w-10 sm:h-12 sm:w-12 text-teal-400" />;
        case 'CI/CD':
            return <Cloud className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />;
        case 'Kubernetes':
            return <Atom className="h-10 w-10 sm:h-12 sm:w-12 text-indigo-400" />;
        case 'Maven':
            return <Command className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />;
        default:
            return <Code className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />;
    }
};

// --- Categorized skills data ---
const skillsData = {
    frontend: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'Tailwind CSS' },
    ],
    backend: [
        { name: 'Java SE' },
        { name: 'OOP Principles' },
        { name: 'Data Structures' },
        { name: 'Multithreading' },
        { name: 'Exception Handling' },
        { name: 'Spring Boot' },
        { name: 'Spring MVC' },
        { name: 'Spring Data JPA' },
        { name: 'Hibernate' },
        { name: 'REST APIs' },
    ],
    database: [
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
        { name: 'Supabase' }, // 👈 Add Supabase to the database skills
    ],
    tools: [
        { name: 'Git & GitHub' },
        { name: 'CI/CD' },
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'Maven' },
    ],
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const competencies = [
    {
        icon: <LayoutGrid className="w-8 h-8" />,
        label: "Monolithic Architecture",
    },
    {
        icon: <Blocks className="w-8 h-8" />,
        label: "Design Patterns",
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        label: "Agile Methodologies",
    },
    {
        icon: <Code className="w-8 h-8" />,
        label: "Clean Code Principles",
    },
    {
        icon: <GitFork className="w-8 h-8" />,
        label: "System Design",
    },
    {
        icon: <FileText className="w-8 h-8" />,
        label: "API Documentation",
    },
];

const Skills = () => {
    return (
        <section id="skills" className="bg-black text-white py-2 lg:py-6 px-4 sm:px-8 font-sans">
            <div className="container mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-extrabold text-center mb-12 tracking-tight text-white sticky top-0 z-10 bg-black py-4"
                >
                    My Expertise
                </motion.h2>

                {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category} className="mb-12">
                        <h3 className="text-2xl font-bold text-center capitalize mb-8 text-blue-400 sticky top-16 z-10 bg-black py-4">
                            {category}
                        </h3>
                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 bg-black rounded-xl shadow-lg border border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800 hover:border-blue-500/50"
                                    variants={itemVariants}
                                >
                                    <div className="flex flex-col items-center gap-4">
                                        {getSkillIcon(skill.name)}
                                        <h3 className="text-lg font-bold text-gray-100">{skill.name}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center mt-20">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 tracking-tight text-white">
                    Additional Competencies
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 mb-16 max-w-5xl mx-auto">
                    {competencies.map((competency, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-start p-4 text-center h-full"
                        >
                            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800 hover:border-blue-500/50">
                                {competency.icon}
                            </div>
                            <p className="mt-4 text-sm font-medium">{competency.label}</p>
                        </div>
                    ))}
                </div>

                <div className="w-full max-w-3xl bg-black p-8 rounded-xl shadow-lg  text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                        Continuous Learning Mindset 💡
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        Technology evolves rapidly, and I'm committed to staying current with
                        Java ecosystem developments. I regularly engage with the developer
                        community, contribute to open-source projects, and continuously
                        expand my knowledge through online courses, documentation, and
                        hands-on experimentation.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;