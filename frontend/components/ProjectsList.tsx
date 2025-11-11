import Link from 'next/link';

export default function ProjectsList() {
    const projectsItems = [
        {
            id: 1,
            name: 'Gestor de tareas',
            description: 'Demostracion de CRID , Autenticacion y APIs RESTful robusta.',
            image: '/images/Captura.png',
            stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            demoUrl: '#',
            githubUrl: '#',
            status: 'In progress',
        },
        {
            id: 2,
            name: 'Clon de App de Datos externos',
            description: 'Demostracion de consumo de APIs externas, manejo de estados complejo en el frontend,diseño responsivo.',
            image: '/images/Clon-apps.png',
            stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            demoUrl: '#',
            githubUrl: '#',
            status: 'In progress',
        },
        {
            id: 3,
            name: 'App de votacion/comentarios',
            description: 'Demostracion de relaciones de datos en MONGODB/PostgreSQL,votaciuon ,logica de negocio avanzada.',
            image: '/images/App-votacion.png',
            stack: ['PostgreSQL','MongoDB'],
            demoUrl: '#',
            githubUrl: '#',
            status: 'In progress',
        },
        {
            id: 4,
            name: 'ChatBot AI',
            description: 'Demostracion de relaciones de datos en MONGODB/PostgreSQL,votaciuon ,logica de negocio avanzada.',
            image: '/images/Chatbot.png',
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
                        <div className="bg-blue-600 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <div>
                                    <h2 className="text-xl font-bold text-white">{item.name}</h2>
                                    <a className="text-white font-mono">{item.description}</a>
                                </div>
                                
                                <div className="flex space-x-4 mt-4">                            
                                    <Link href={item.demoUrl} className="bg-teal-500 text-white font-mono px-3 py-1 rounded hover:bg-blue-600 transition duration-300 flex items-center space-x-2 m-2" >
                                        <img className="w-6 h-6 " src="/images/icons/link.png" alt="icon-github" />
                                         <a className='font-mono'>Ver Demo</a>
                                    </Link>
                                    <Link href={item.githubUrl} className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300 flex items-center space-x-2 m-2">
                                        <img className="w-8 h-8 " src="/images/icons/github-sign.png" alt="icon-github" />
                                         <a className='font-mono'>Github</a>
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