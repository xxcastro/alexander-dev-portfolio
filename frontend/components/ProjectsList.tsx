import Link from 'next/link';
import Image from 'next/image'; 

interface ProjectItem {
    id: number;
    name: string;
    description: string;
    image: string;
    stack: string[];
    demoUrl: string;
    githubUrl: string;
    status: string;
}

export default function ProjectsList() {
    const projectsItems: ProjectItem[] = [ 
        {
        id: 1,
        name: 'Gestor de tareas',
        description: 'Demostración de CRUD, Autenticación de usuarios y API RESTful robusta.',
        image: '/images/taskmanager.png',        
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS'], 
        demoUrl: '#',
        githubUrl: '#',
        status: 'En progreso',
        },
        {
            id: 2,
            name: 'Clon de App de Datos externos',
            description: 'Demostración de consumo de APIs externas, manejo de estados avanzado en el frontend y diseño completamente responsive.',
            image: '/images/apis.png',            
            stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux/Zustand'],
            demoUrl: '#',
            githubUrl: '#',
            status: 'Próximamente',
        },
        {
            id: 3,
            name: 'App de votación/comentarios',
            description: 'Demostración de manejo de relaciones de datos (MongoDB/PostgreSQL), sistema de votación y lógica de negocio avanzada.',
            image: '/images/votacion.png',            
            stack: ['React', 'Express', 'PostgreSQL', 'MongoDB'], 
            demoUrl: '#',
            githubUrl: '#',
            status: 'Próximamente',
        },
        {
            id: 4,
            name: 'ChatBot AI',
            description: 'Integración de servicios de IA para un chatbot funcional. Muestra manejo avanzado de lógica de negocio y APIs externas.',
            image: '/images/chatai.png',
            stack: ['Python', 'Flask/FastAPI', 'Node.js', 'OpenAI API'], 
            demoUrl: '#',
            githubUrl: '#',
            status: 'Próximamente',
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-100">
            
            <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                <h1 className="text-4xl font-extrabold text-blue-600">PROYECTOS</h1>
            </div>
            
            <div className="max-w-7xl mx-auto px-4"> 
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {projectsItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 border-2 border-transparent hover:border-blue-500 hover:shadow-2xl">
                            
                            
                            <div className="w-full h-48 relative">
                                {item.status && (
                                    <span className={`absolute top-0 right-0 mt-3 mr-3 px-3 py-1 text-xs font-bold uppercase rounded-full shadow-md z-10
                                        ${item.status === 'Completado' ? 'bg-green-500 text-white' 
                                            : item.status == 'En progreso' ? 'bg-yellow-300 text-gray-800'
                                                : 'bg-blue-500 text-white'
                                            }`}>
                                        
                                        {item.status}
                                    </span>
                                )}
                                
                                <Image 
                                    src={item.image} 
                                    alt={item.name} 
                                    fill 
                                    sizes="(max-width: 640px) 100vw, 33vw" 
                                    className="object-cover" 
                                />
                            </div>
                            
                            <div className="p-5 flex flex-col justify-between h-auto">
                                <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
                                <p className="text-sm text-gray-600 mt-1 line-clamp-3">{item.description}</p>
                                
                                <div className="flex flex-wrap gap-1 mt-3">
                                    {item.stack.map((tech) => (
                                        <span key={tech} className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex flex-col space-y-2 mt-5">
                                    <Link href={item.demoUrl} target="_blank"
                                        className="w-full text-center px-4 py-2 text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-300 flex items-center justify-center gap-2">
                                        
                                        <img className='h-5 w-5 flex-shrink-0' src="/images/icons/link.png" alt="icon-demo" />
                                        Ver Demo
                                    </Link>
                                    
                                    <Link href={item.githubUrl} target="_blank"
                                        className="w-full text-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 border border-gray-300 hover:bg-gray-100 transition duration-300 flex items-center justify-center gap-2">
                                        
                                        <img className='h-6 w-6 flex-shrink-0' src="/images/icons/github.png" alt="icon-github" />
                                        Código Fuente
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <p className="text-center mt-12 text-gray-500 text-sm">
                *Los enlaces de demostración estarán activos al completar el desarrollo de cada proyecto.
            </p>
        </section>
    );
}