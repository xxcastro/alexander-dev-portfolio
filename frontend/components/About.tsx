import Image from 'next/image'; 

interface SkillCardProps {
    name: string;
    tag: string;
    src: string;
    bgColor: string;
}

const skillsData = [
    { name: 'Next.js', tag: 'Framework', src: '/images/icons/nextjs.png', bgColor: 'bg-gray-300 hover:bg-gray-400' },
    { name: 'TypeScript', tag: 'Frontend', src: '/images/icons/typescript.png', bgColor: 'bg-blue-200 hover:bg-blue-300' },
    { name: 'Tailwind CSS', tag: 'Frontend', src: '/images/icons/tailwindcss.png', bgColor: 'bg-teal-200 hover:bg-teal-300' },
    { name: 'Node.js', tag: 'Backend', src: '/images/icons/nodejs.png', bgColor: 'bg-green-300 hover:bg-green-500' },
    { name: 'MongoDB', tag: 'DataBase', src: '/images/icons/mongodb.png', bgColor: 'bg-lime-400 hover:bg-lime-500' },
    { name: 'JavaScript', tag: 'Frontend', src: '/images/icons/javascript.png', bgColor: 'bg-yellow-200 hover:bg-yellow-300' },
    { name: 'Python', tag: 'A.I. & Big Data', src: '/images/icons/python.png', bgColor: 'bg-cyan-500  hover:bg-cyan-600' }, 
    { name: 'HTML', tag: 'Frontend', src: '/images/icons/html.png', bgColor: 'bg-orange-300 hover:bg-orange-400' },
    { name: 'CSS', tag: 'Frontend', src: '/images/icons/css.png', bgColor: 'bg-teal-300 hover:bg-teal-400' },
    { name: 'PHP', tag: 'Programming Language', src: '/images/icons/php.png', bgColor: 'bg-violet-400 hover:bg-violet-500' },
    { name: 'VS Code', tag: 'Editor', src: '/images/icons/visualstudiocode.png', bgColor: 'bg-sky-300 hover:bg-sky-500' },
];

const SkillCard = ({ name, tag, src, bgColor }: SkillCardProps) => { 

    return (
        <div className={`hover:scale-105 rounded-lg p-6 m-2 flex flex-col items-center shadow-lg hover:shadow-xl transition duration-300 ${bgColor}`}>
            <Image src={src} alt={`icon-${name}`} width={48} height={48} className="h-12 w-12" />
            <span className="mt-2 text-black font-medium">{name}</span>
            <span className="mt-2 text-black font-medium text-xs font-mono">{tag}</span>
        </div>
    );
};

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-5">
                    SOBRE MÍ
                </h2>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                            Mi Enfoque y Adaptabilidad
                </h3>
                
                <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                    Poseo una sólida formación en Desarrollo de Aplicaciones Multiplataforma (DAM), lo que me proporciona una comprensión completa del ciclo de vida del software, desde la base de datos hasta la interfaz.
                </p> 
                
                <p className="mt-6 text-gray-700 leading-relaxed font-semibold p-4 border-l-4 border-blue-600 bg-blue-50">
                    Me he centrado en el desarrollo con Next.js y TypeScript para garantizar el rendimiento y la escalabilidad. Además, amplío mis conocimientos en Inteligencia Artificial y Big Data (Python, Neo4j), lo que me permitirá integrar soluciones inteligentes en mis proyectos.
                </p>
                                
                <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                    Aunque estoy en búsqueda de mi primera experiencia profesional, mi principal fortaleza es mi capacidad de adaptación y mi compromiso con el aprendizaje continuo. No sé cuál es mi mejor stack, pero sé que puedo superar y dominar cualquier reto que me presenten.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed text-lg font-bold">
                    Busco una empresa que valore la proactividad y me brinde la oportunidad de aplicar mis habilidades en un entorno de producción.
                </p>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">                        
                        <h3 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                            Mis Estudios Académicos
                        </h3>

                        <p className="mt-4 text-gray-700 leading-relaxed font-semibold p-3 border-l-4 border-sky-600 bg-sky-50 mb-3">
                            Grado Medio en Instalaciones de Telecomunicaciones - Salesianos los boscos - 2022
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed font-semibold p-3 border-l-4 border-green-600 bg-green-50 mb-3">
                            Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) - Salesianos los boscos - 2024
                        </p>                        
                        <p className="mt-4 text-gray-700 leading-relaxed font-semibold p-3 border-l-4 border-purple-600 bg-purple-50 mb-3">
                            Programa Formativo universitario en Inteligencia Artificial - UNIR - 2025
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed font-semibold p-3 border-l-4 border-yellow-600 bg-yellow-50 mb-3">
                            Curso Especialización en IA y Big Data - IES Comercio - Actualidad
                        </p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                            Cursos y/o Certificaciones 
                        </h3>
                        <p className="mt-4 text-gray-700 leading-relaxed font-semibold p-3 border-l-4 border-red-600 bg-red-50 mb-3">
                            Fundamentos de Power BI - Santander Open Academy - 2025
                        </p>                        
                    </div>
                    <div className="md:w-1/2 ">                                                
                        <h3 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                            Mi Stack Tecnológico
                        </h3>
                        <div className="flex flex-wrap justify-center">
                            {skillsData.map((skill) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
