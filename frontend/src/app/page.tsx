// frontend/src/app/page.tsx

import Header from '../../components/Header'; 
import Hero from '../../components/Hero';
import About from '../../components/About';
import ProjectsList from '../../components/ProjectsList';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function Home() {
  return (

    <div>
      <Header />

      <Hero />

      <section id="about"> <About /> </section>
      <section id="projects"> <ProjectsList /> </section>
      <section id="contact"> <ContactForm /> </section>
      <footer><Footer /></footer>
    </div>
  );
}