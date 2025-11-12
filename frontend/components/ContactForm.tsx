
export default function ContactForm() {
  return (
    <div>
      <div className="mx-14 text-4xl font-extrabold  text-blue-600">
        <span className="m-auto" >CONTÁCTAME</span>
      </div>
      <div className="grid grid-cols-2 gap-1">
        <div className="flex flex-col justify-center items-center mx-14 my-14">          
          <div>
            <div className="flex items-center space-x-4 my-4 bg-slate-100 p-8 rounded-lg hover:bg-slate-200 transition duration-300 shadow-xl">
              <img className="w-8 h-8" src="/images/icons/linkedin.png" alt="icon-linkedin" />
              <a className="text-lg text-gray-700 hover:text-gray-900" href="https://www.linkedin.com/in/alexander-gavilanez-castro-037a8927b/">Alexander Gavilanez Castro</a>
            </div>
            <div className="flex items-center space-x-4 my-4 bg-slate-100 p-8 rounded-lg hover:bg-slate-200 transition duration-300 shadow-xl">
              <img className="w-8 h-8" src="/images/icons/phone-call.png" alt="icon-phone" />
              <span className="text-lg text-gray-700">+34 605 456 166</span>
            </div>
            <div className="flex items-center space-x-4 my-4 bg-slate-100 p-8 rounded-lg hover:bg-slate-200 transition duration-300 shadow-xl">
              <img className="w-8 h-8" src="/images/icons/email.png" alt="icon-email" />
              <span className="text-lg text-gray-700">alexgavilanez672@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="mx-14 my-14">
            <form action="https://formspree.io/f/myzbpbnk" method="POST" className="flex flex-col gap-y-4 ">
              <input type="text" name="name" placeholder="Tu Nombre" required className=" border bg-slate-100 p-4 rounded-lg hover:bg-slate-200"  />
              <input type="email" name="_replyto" placeholder="Tu Email" required className=" border bg-slate-100 p-4 rounded-lg hover:bg-slate-200"  />
              <textarea name="message" placeholder="Tu Mensaje..." required rows={4} className=" border bg-slate-100 p-4 rounded-lg hover:bg-slate-200"></textarea>
              <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Enviar Mensaje</button>
            </form>
        </div>
      </div>
      
    </div>



  );
}