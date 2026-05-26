function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-6xl font-bold text-red-500 mb-6">
        Sony Pictures Cyber Attack
      </h1>

      <p className="max-w-3xl text-zinc-300 text-xl">
        Análisis legal y técnico del ataque cibernético a Sony Pictures
        Entertainment ocurrido en 2014 y su impacto en la ciberseguridad.
      </p>

      <button className="mt-8 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold transition">
        Ver Investigación
      </button>
    </section>
  );
}

export default Hero;