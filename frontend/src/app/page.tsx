// frontend/app/page.tsx

import Header from '../../components/Header'; // Asegúrate que la ruta de importación sea correcta
//import Hero from '../../components/Hero';
//import About from '../../components/About';
//import ProjectsList from '../../components/ProjectsList';
//import ContactForm from '../../components/ContactForm';


export default function Home() {
  return (
    <main>
      {/* El componente Header suele estar fuera del 'main' o dentro de un 'Layout'
        pero para empezar, esta estructura es perfecta.
      */}
      <Header />
      {/*<Hero />
      <section id="about"> <About /> </section>
      <section id="projects"> <ProjectsList /> </section>
      <section id="contact"> <ContactForm /> </section>*/}
      {/* Puedes agregar un Footer al final */}
    </main>
  );
}