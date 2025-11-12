import Link from 'next/link';

export default function ProjectsList() {
    const projectsItems = [
        {
            id: 1,
            name: 'Gestor de tareas',
            description: 'Demostracion de CRID , Autenticacion y APIs RESTful robusta.',
            image: '/images/gestortareas.png',
            stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            demoUrl: '#',
            githubUrl: '#',
            status: 'In progress',
        },
        {
            id: 2,
            name: 'Clon de App de Datos externos',
            description: 'Demostracion de consumo de APIs externas, manejo de estados complejo en el frontend,diseño responsivo.',
            image: '/images/clonapps.png',
            stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            demoUrl: '#',
            githubUrl: '#',
            status: 'In progress',
        },
        {
            id: 3,
            name: 'App de votacion/comentarios',
            description: 'Demostracion de relaciones de datos en MONGODB/PostgreSQL,votaciuon ,logica de negocio avanzada.',
            image: '/images/appvotacion.png',  
            stack: ['PostgreSQL','MongoDB'],
            demoUrl: '#',
            githubUrl: '#',
            status: 'In progress',
        },
        {
            id: 4,
            name: 'ChatBot AI',
            description: 'Demostracion de relaciones de datos en MONGODB/PostgreSQL,votaciuon ,logica de negocio avanzada.',
            image: '/images/chatbot.png',
            stack: ['PostgreSQL','MongoDB'],
            demoUrl: '#',
            githubUrl: '#',
            status: 'In progress',
        }
    ];

    return (
        <div>
            <div className="mx-14 text-4xl font-extrabold  text-blue-600">
                <span className="m-auto" >PROYECTOS</span>
            </div>
            <div className="container mx-auto p-6">               
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {projectsItems.map((item) => (
                       // Solo cambia el div de la tarjeta y los botones
                        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 border-2 border-transparent hover:border-blue-500">
                            
                            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                            
                            <div className="p-5 flex flex-col justify-between h-auto">
                                {/* ... (Título, Descripción, SkillTag igual que el Diseño 1) ... */}                                
                                <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                                <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                                {/* Stack Tecnológico Horizontal */}
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {item.stack.map((tech) => (
                                        <span key={tech} className="text-xs font-medium px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {/* Botones */}
                                <div className="flex flex-col space-y-2 mt-4">
                                    <Link 
                                        href={item.demoUrl}
                                        className="w-full text-center px-4 py-2 text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-300"
                                        target="_blank"
                                    >
                                        <img className='h-5 w-5 inline-block mr-2' src="images/icons/link.png" alt="icon-demo" />
                                        Ver Demo
                                    </Link>
                                    <Link 
                                        href={item.githubUrl}
                                        className="w-full text-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 border border-gray-300 hover:bg-gray-50 transition duration-300"
                                        target="_blank"
                                    >
                                        <img className='h-6 w-6 inline-block mr-2' src="images/icons/github.png" alt="icon-github" />
                                        Código Fuente
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}