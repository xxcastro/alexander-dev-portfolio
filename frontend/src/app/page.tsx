
import Header from '../../components/Header'; 
import Hero from '../../components/Hero';
import About from '../../components/About';
import ProjectsList from '../../components/ProjectsList';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function Home() {
  return (

    <div>
      <section id='header'><Header/></section>
      <section id="hero"><Hero /></section>
      <section id="about"> <About /> </section>
      <section id="projects"> <ProjectsList /> </section>
      <section id="contact"> <ContactForm /> </section>
      <footer id='footer'><Footer /></footer>
    </div>
  );
}