
const Clientes = () => {

  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 pt-2 pb-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img alt="testimonial" className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/cara1.png" />
              <p className="leading-relaxed">¡El equipo de limpieza de <span className="font-bold text-orange-600">Casa Limpia</span> es simplemente asombroso! Mi hogar nunca ha estado más limpio y ordenado. ¡Gracias por hacer mi vida más fácil y mi espacio más reluciente!.</p>
              <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HELENA</h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img alt="testimonial" class="w-21 h-21 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/cara2.png" />
              <p className="leading-relaxed">Estoy impresionado con el servicio de limpieza de <span className="font-bold text-orange-600">Casa Limpia</span>. ¡Mi hogar nunca ha estado tan limpio y organizado! El equipo es profesional y hace un trabajo excepcional.</p>
              <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">GONZALO</h2>
              <p className="text-gray-500">UI Develeoper</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img alt="testimonial" class="w-21 h-21 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/cara3.png" />
              <p className="leading-relaxed">Contratar los servicios de limpieza de <span className="font-bold text-orange-600">Casa Limpia</span> ha sido una de las mejores decisiones que he tomado. Su equipo de limpieza es altamente profesional. Ahora, puedo dedicar más tiempo a las cosas que importan.</p>
              <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">BERNY</h2>
              <p className="text-gray-500">Senior Develeoper</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clientes;