export default function ProjectsList() {
    const navItems = [
        {
            id: 1,
            name: 'Gestor de tareas',
            description: 'Demostracion de CRID , Autenticacion y APIs RESTful robusta.',
            image: '',
            stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            demoUrl: '#',
            githubUrl: '#',
            status: 'In progress',
        },
        {
            id: 2,
            name: 'Clon de App de Datos externos',
            description: 'Demostracion de consumo de APIs externas, manejo de estados complejo en el frontend,diseño responsivo.',
            image: '',
            stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            demoUrl: '#',
            githubUrl: '#',
            status: 'In progress',
        },
        {
            id: 3,
            name: 'App de votacion/comentarios',
            description: 'Demostracion de relaciones de datos en MONGODB/PostgreSQL,votaciuon ,logica de negocio avanzada.',
            image: '',
            stack: ['PostgreSQL','MongoDB'],
            demoUrl: '#',
            githubUrl: '#',
            status: 'In progress',
        }
    ];

    return (
        <div>
            {/* Navegación para Escritorio */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-600 hover:text-blue-600 font-medium transition duration-150 ease-in-out">
              {item.name}
            </Link>
          ))}
        </nav>
        </div>
    );
}