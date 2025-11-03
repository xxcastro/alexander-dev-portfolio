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

        {/* Navegación para Escritorio */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-600 hover:text-blue-600 font-medium transition duration-150 ease-in-out">
              {item.name}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}