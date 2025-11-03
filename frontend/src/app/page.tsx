// frontend/src/app/page.tsx

import Header from '../../components/Header'; // Asegúrate que la ruta de importación sea correcta
import Hero from '../../components/Hero';
//import About from '../../components/About';
//import ProjectsList from '../../components/ProjectsList';
import ContactForm from '../../components/ContactForm';


export default function Home() {
  return (
    
    <div>
      <Header />
      {/* El componente Header suele estar fuera del 'main' o dentro de un 'Layout'
        pero para empezar, esta estructura es perfecta.
      */}
      <Hero />
      {/*<section id="about"> <About /> </section>
      <section id="projects"> <ProjectsList /> </section>*/}
      <section id="contact"> <ContactForm /> </section>

      {/* Puedes agregar un Footer al final */}
      <footer className="bg-slate-900 text-white-500 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Alexander Gavilanez. Construido con React y Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}