// Ejemplo simplificado del formulario
export default function ContactForm() {
  return (
    <form action="https://formspree.io/f/myzbpbnk" method="POST" className="flex flex-col gap-4">
      <input type="text" name="name" placeholder="Tu Nombre" required className="p-2 border rounded" />
      <input type="email" name="_replyto" placeholder="Tu Email" required className="p-2 border rounded" />
      <textarea name="message" placeholder="Tu Mensaje..." required rows={4} className="p-2 border rounded"></textarea>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Enviar Mensaje</button>
    </form>
  );
}