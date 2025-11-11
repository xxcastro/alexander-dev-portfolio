// frontend/components/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    // Aseguramos que la sección ocupe toda la pantalla y tenga padding arriba/abajo
    <section id="home" className="pt-24 md:pt-48 pb-12 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*Imagen sobre mi */}
        <div className="mb-8">
          <img
            src="/images/profile-alexander.jpg"
            alt="Foto de Alexander"
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-blue-600"
          />
        </div>

        {/* Título y Presentación */}
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
          Hola, soy <span className="text-blue-600">Alexander</span>.
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Titulado en Desarrollo de Aplicaciones multiplataforma. Apasionado por la tecnología y el aprendizaje continuo.
        </p>

        {/* Llamada a la Acción (CTA) */}
        <div className="mt-10 flex justify-center space-x-4">
          <Link
            href="#projects"
            className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            Ver mis Proyectos
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            Contáctame
          </Link>
          <Link
            href="/docs/Alexander_Gavilanez_Castro_CV.pdf"
            download="Alexander_Gavilanez_Castro_CV.pdf"
            className="px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-150 ease-in-out"
          >
            Descargar CV
          </Link>
        </div>

      </div>
    </section>
  );
}