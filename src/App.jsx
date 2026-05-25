import { Shield, Scale, Database } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-slate-100">

      <header className="bg-slate-900 text-white py-10 shadow-lg">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-3">
            Sony Pictures Hack 2014
          </h1>

          <p className="text-slate-300 text-lg">
            Fundamentos de Seguridad de la Información
          </p>

        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-8">

        <section className="bg-white rounded-2xl shadow-lg p-8">

          <div className="flex items-center gap-3 mb-4">

            <Shield className="text-red-600" size={32} />

            <h2 className="text-3xl font-bold text-slate-800">
              Resumen del Caso
            </h2>

          </div>

          <p className="text-slate-700 leading-relaxed text-lg">
            En noviembre de 2014, Sony Pictures Entertainment sufrió
            uno de los ataques informáticos más graves registrados
            contra una empresa privada.
          </p>

        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">

          <div className="flex items-center gap-3 mb-4">

            <Scale className="text-blue-600" size={32} />

            <h2 className="text-3xl font-bold text-slate-800">
              Leyes Aplicables
            </h2>

          </div>

          <ul className="space-y-3 text-slate-700 text-lg">
            <li>• Ley 21.459</li>
            <li>• Ley 19.628</li>
            <li>• GDPR</li>
            <li>• SOX</li>
          </ul>

        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">

          <div className="flex items-center gap-3 mb-4">

            <Database className="text-green-600" size={32} />

            <h2 className="text-3xl font-bold text-slate-800">
              Datos Personales
            </h2>

          </div>

          <p className="text-slate-700 leading-relaxed text-lg">
            Durante el ataque se filtraron correos electrónicos,
            contratos, salarios y datos sensibles de trabajadores.
          </p>

        </section>

      </main>

    </div>
  )
}

export default App