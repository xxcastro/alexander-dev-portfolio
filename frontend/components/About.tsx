export default function About() {
    return (
        <div>
            <div className="mx-14 text-4xl font-extrabold  text-blue-600">
                <span className="m-auto" >SOBRE MÍ</span>
            </div>

            <div className="mx-14 my-8">
                {/* Título de la subsección */}
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    Mi Enfoque 
                </h3>
                
                {/* Párrafo Principal */}
                <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                    Poseo una sólida formación en Desarrollo de Aplicaciones Multiplataforma (DAM), lo que me proporciona una comprensión completa del ciclo de vida del software, desde la base de datos hasta la interfaz.
                </p>            

                <p className="mt-4 text-gray-600 leading-relaxed">
                    Actualmente, me he centrado en el desarrollo con Next.js y TypeScript para el frontend de este portafolio ,ya que son los estándares de la industria que garantizan el rendimiento y la escalabilidad, a la vez que estoy ampliando mi conocimiento con Python (IA/Big Data).
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    Aunque estoy en búsqueda de mi primera experiencia profesional, mi principal fortaleza es mi capacidad de adaptación y mi compromiso con el aprendizaje continuo.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                   No sé cuál es mi mejor stack, pero sé que puedo superar y dominar cualquier reto que me presenten. Mi portafolio demuestra mi habilidad para construir soluciones reales y funcionales con tecnologías de punta. Estoy buscando una empresa que valore la proactividad y me brinde la oportunidad de demostrar mis habilidades en un entorno de producción.
                </p>
            </div>
            <div className="mx-14 my-8">
                {/* Título de la subsección */}
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    Estudios Academicos
                </h3>
                
                {/* Párrafo de Especialización (Resaltando el Stack) */}
                <p className="mt-4 text-gray-700 leading-relaxed font-semibold p-3 border-l-4 border-blue-600 bg-blue-50">
                    Desarrollo de Aplicaciones Multiplataforma (DAM) - Salesianos los boscos - 2024
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed font-semibold p-3 border-l-4 border-blue-600 bg-blue-50">
                    Programa Formativo universitario en Inteligencia Artificial - UNIR - 2025
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed font-semibold p-3 border-l-4 border-blue-600 bg-blue-50">
                    Curso Especialización en IA y Big Data - IES Comercio - Actualidad
                </p>
            </div>
            <div className="mx-14 my-8">
                {/* Título de la subsección */}
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    Mi Stack Tecnologico
                </h3>
                <div className="flex flex-wrap">
                    <div className=" hover:scale-105 rounded-lg bg-teal-200 p-6 m-2 flex flex-col items-center shadow-lg hover:bg-teal-300 transition duration-300">
                        <img className="h-12 w-12" src="/images/icons/tailwindcss.png" alt="icon-tailwindcss" />
                        <span className="mt-2 text-black font-medium">Tailwind CSS</span>
                        <span className="mt-2 text-black font-medium text-xs font-mono">Frontend</span>
                    </div>

                    <div className=" hover:scale-105 rounded-lg bg-lime-400 p-6 m-2 flex flex-col items-center shadow-lg hover:bg-lime-500 transition duration-300">
                        <img className="h-12 w-12" src="/images/icons/mongodb.png" alt="icon-mongodb" />
                        <span className="mt-2 text-black font-medium">MongoDB</span>

                        <span className="mt-2 text-black font-medium text-xs font-mono">DataBase</span>
                    </div>

                    <div className="hover:scale-105 rounded-lg bg-gray-300 p-6 m-2 flex flex-col items-center shadow-lg hover:bg-gray-400 transition duration-300">
                        <img className="h-12 w-12" src="/images/icons/nextjs.png" alt="icon-nextjs" />
                        <span className="mt-2 text-black font-medium">NextJS</span>
                        <span className="mt-2 text-black font-medium text-xs font-mono">Framework</span>
                    </div>
                    <div className=" hover:scale-105 rounded-lg bg-yellow-200 p-6 m-2 flex flex-col items-center shadow-lg hover:bg-yellow-300 transition duration-300">
                        <img className="h-12 w-12" src="/images/icons/javascript.png" alt="icon-javascript" />
                        <span className="mt-2 text-black font-medium">Javascript</span>
                        <span className="mt-2 text-black font-medium text-xs font-mono">Frontend</span>
                    </div>
                    <div className="hover:scale-105 rounded-lg bg-blue-200 p-6 m-2 flex flex-col items-center shadow-lg hover:bg-blue-300 transition duration-300">
                        <img className="h-12 w-12" src="/images/icons/typescript.png" alt="icon-typescript" />
                        <span className="mt-2 text-black font-medium">Typescript</span>
                        <span className="mt-2 text-black font-medium text-xs font-mono">Frontend</span>
                    </div>
                    <div className="hover:scale-105 rounded-lg bg-green-300 p-6 m-2 flex flex-col items-center shadow-lg hover:bg-green-500 transition duration-300">
                        <img className="h-12 w-12" src="/images/icons/nodejs.png" alt="icon-nodejs" />
                        <span className="mt-2 text-black font-medium">NodeJS</span>
                        <span className="mt-2 text-black font-medium text-xs font-mono">Backend</span>
                    </div>

                    <div className="hover:scale-105 relative rounded-lg p-6 m-2 flex flex-col items-center 
                                    shadow-lg overflow-hidden
                                    bg-white transition duration-300 hover:shadow-xl">
                        
                        {/* CAPA DE COLOR: Mitad Izquierda (Simulación con gradiente fuerte) */}
                        <div className="absolute inset-0 bg-gradient-to-r 
                                        from-blue-600 to-yellow-4s00 opacity-20 hover:opacity-30">
                            {/* Usamos un gradiente que simula la transición abrupta */}
                        </div>
                        
                        {/* CONTENIDO (Aseguramos que el contenido esté por encima del color) */}
                        <div className="relative flex flex-col items-center">
                            <img className="h-10 w-10" src="/images/icons/python.png" alt="icon-python" />
                            
                            <span className="mt-3 text-gray-800 font-bold">Python</span>
                            <span className="mt-1 text-gray-600 text-xs">Programming Lenguage</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}