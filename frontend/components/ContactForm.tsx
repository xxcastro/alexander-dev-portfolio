// Ejemplo simplificado del formulario
export default function ContactForm() {
  return (
    <div>
      <div className="mx-14 text-4xl font-extrabold  text-blue-600">
        <span className="m-auto" >CONTÁCTAME</span>
      </div>
      <div className="mx-14 my-14">
        <form action="https://formspree.io/f/myzbpbnk" method="POST" className="flex flex-col gap-y-4 ">
          <input type="text" name="name" placeholder="Tu Nombre" required className="p-2 border rounded" />
          <input type="email" name="_replyto" placeholder="Tu Email" required className="p-2 border rounded" />
          <textarea name="message" placeholder="Tu Mensaje..." required rows={4} className="p-2 border rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Enviar Mensaje</button>
        </form>
      </div>
    </div>



  );
}