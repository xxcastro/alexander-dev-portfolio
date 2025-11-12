// frontend/components/ContactForm.tsx

// IMPORTANTE: Definir el endpoint de Formspree fuera del componente.
// Si deseas mover el endpoint a un archivo .env, avísame.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/myzbpbnk"; 

export default function ContactForm() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* TÍTULO PRINCIPAL */}
                <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-12">
                    CONTÁCTAME
                </h2>
                
                {/* LAYOUT: GRID RESPONSIVE (1 col móvil, 2 col escritorio) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    {/* COLUMNA 1: INFORMACIÓN DE CONTACTO Y REDES */}
                    <div className="flex flex-col justify-center"> 
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
                            Información de Contacto
                        </h3>
                        
                        {/* Contenedor de Íconos y Datos */}
                        <div className="space-y-4"> 
                            
                            {/* LinkedIn */}
                            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                                <img className="w-6 h-6" src="/images/icons/linkedin.png" alt="icon-linkedin" />
                                <a 
                                    className="text-lg text-gray-700 hover:text-blue-600 font-medium break-words" // break-words para evitar desbordamiento
                                    href="https://www.linkedin.com/in/alexander-gavilanez-castro-037a8927b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Alexander Gavilanez Castro
                                </a>
                            </div>
                            
                            {/* Teléfono */}
                            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                                <img className="w-6 h-6" src="/images/icons/phone-call.png" alt="icon-phone" />
                                <span className="text-lg text-gray-700">+34 605 456 166</span>
                            </div>
                            
                            {/* Email */}
                            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                                <img className="w-6 h-6" src="/images/icons/email.png" alt="icon-email" />
                                <span className="text-lg text-gray-700">alexgavilanez672@gmail.com</span>
                            </div>

                        </div>
                    </div>
                    
                    {/* COLUMNA 2: FORMULARIO DE CONTACTO */}
                    <div className="bg-white p-8 rounded-xl shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            Envíame un mensaje
                        </h3>
                        <form action={FORMSPREE_ENDPOINT} method="POST" className="flex flex-col gap-y-4">
                            
                            {/* Input Nombre */}
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Tu Nombre" 
                                required 
                                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-4 rounded-lg transition duration-200"
                            />
                            
                            {/* Input Email */}
                            <input 
                                type="email" 
                                name="_replyto" // CLAVE para Formspree
                                placeholder="Tu Email" 
                                required 
                                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-4 rounded-lg transition duration-200"
                            />
                            
                            {/* Textarea Mensaje */}
                            <textarea 
                                name="message" 
                                placeholder="Tu Mensaje..." 
                                required 
                                rows={5} 
                                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-4 rounded-lg transition duration-200"
                            ></textarea>
                            
                            {/* Botón de Envío */}
                            <button 
                                type="submit" 
                                className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}