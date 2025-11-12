// frontend/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  const navItems = [
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    // Fijo en la parte superior, fondo blanco y sombra
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo/Nombre */}
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600">
          Alexander Gavilanez Castro
        </Link>

        {/* Contenedor de Navegación y Botón */}
        <div className="flex items-center space-x-6"> 
            
            {/* Navegación para Escritorio */}
            <nav className="hidden md:flex space-x-8" aria-label="Navegación principal">
              {navItems.map((item) => (
                <Link 
                    key={item.name} 
                    href={item.href} 
                    className="text-gray-600 hover:text-blue-600 font-medium transition duration-150 ease-in-out"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* Botón de CV (Estrategia) */}
            <Link 
                href="/docs/Alexander_Gavilanez_Castro_CV.pdf" // Asegúrate de que esta sea la ruta correcta
                download 
                className="hidden lg:inline-flex px-4 py-2 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
            >
                Descargar CV
            </Link>

        </div>
      </div>
    </header>
  );
}