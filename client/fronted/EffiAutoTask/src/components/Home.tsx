import useDarkMode from "../hooks/useDarkMode.tsx"
import SelectLanguage from "./language.tsx"
import DarkModeToggle from "./DarkModeToggle.tsx"
import Landing from "../assets/images/landing.webp"
import FeatureSection from "./featureSection.tsx"
import { useTranslation } from "react-i18next"

const LandingPage = () => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  const { t } = useTranslation()

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-background-dark text-text-dark" : "bg-surface text-text"}`}
    >
      {/* Encabezado */}
      <header
        className={`border-b shadow-sm backdrop-blur-sm ${darkMode ? "bg-surface-dark/95 text-text-dark border-slate-700/40" : "bg-white/95 text-slate-900 border-slate-200"}`}
      >
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-4 px-6 py-5">
          <h1
            className={`text-3xl font-semibold tracking-tight ${darkMode ? "text-dark-primary" : "text-[#0056B3]"}`}
          >
            EffiAutoTask
          </h1>

          <div>
            <ul className="flex flex-wrap items-center gap-3">
              <li>
                <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
              </li>
              <li
                className={`${darkMode ? "bg-surface-dark text-text-dark rounded px-2 py-1 border border-white" : "bg-nav-light text-0056B3 rounded px-2 py-1"}`}
              >
                <SelectLanguage darkMode={darkMode} />
              </li>
              <li>
                <a
                  className={`px-4 py-2 rounded-full transition mr-2 ${darkMode ? "bg-white text-dark-primary border border-dark-primary" : "bg-primary text-white"}`}
                  href="/account/login"
                >
                  {t("auth.login")}
                </a>
              </li>
              <li>
                <a
                  className={`px-4 py-2 rounded-full transition ${darkMode ? "bg-transparent text-white border border-white" : "border border-primary text-primary"}`}
                  href="/account/register"
                >
                  {t("auth.register")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Cuerpo */}
      <div
        className={`flex justify-center px-6 py-10 ${darkMode ? "bg-background-dark" : "bg-surface"}`}
      >
        <img
          src={Landing}
          alt="landing"
          className={`w-full max-w-5xl rounded-[32px] shadow-2xl ${darkMode ? "shadow-slate-900/20 border-slate-700/40" : "shadow-slate-900/10 border-slate-200"} border`}
        />
      </div>

      <main className="py-20 px-6">
        <section className="text-center mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-dark-primary leading-tight flex justify-center items-center gap-3">
            <div
              className={`w-0.5 h-10 ${darkMode ? "bg-[#38BDF8]" : "bg-0056B3"}`}
            />
            <span className="inline-block">Eficiencia.</span>
            <div
              className={`w-0.5 h-10 ${darkMode ? "bg-nav-border" : "bg-343A40"} `}
            />
            <span className="inline-block">Automatización.</span>
            <div
              className={`w-0.5 h-10 ${darkMode ? "bg-nav-border" : "bg-343A40"} `}
            />
            <span className="inline-block">Progreso.</span>
            <div
              className={`w-0.5 h-10 ${darkMode ? "bg-[#38BDF8]" : "bg-0056B3"} `}
            />
          </h2>
          <h3 className="text-xl md:text-2xl text-secondary mb-6">
            Diseñado para ayudarte a organizar tus tareas, automatizar procesos
            y aprovechar mejor tu tiempo.{" "}
            <span className="inline mt-3">
              EAT centraliza tus objetivos, tareas, notas y herramientas de
              aprendizaje en un solo lugar.
            </span>
          </h3>
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#38BDF8] mb-4">
            Diseñado para ayudarte a...
          </h4>
          <div className="mx-auto mb-6 h-0.5 w-20 rounded-full bg-[#0056B3]" />
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Productividad",
              "Tecnología",
              "Aprendizaje",
              "Profesionalismo",
              "Calma",
            ].map((item) => (
              <span
                key={item}
                className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium shadow-sm ${darkMode ? "border-slate-700/40 bg-surface-dark text-text-dark" : "border-slate-200 bg-surface text-slate-700"}`}
              >
                {item}
              </span>
            ))}
          </div>
          <p
            className={`text-lg leading-8 ${darkMode ? "text-secondary-dark" : "text-slate-600"}`}
          >
            Olvídate de saltar entre múltiples aplicaciones. EAT te permite
            organizar tus{" "}
            <span className="font-semibold text-0056B3">
              metas a largo plazo
            </span>
            , gestionar tus{" "}
            <span className="font-semibold text-0056B3">tareas diarias</span>,
            conectar tus{" "}
            <span className="font-semibold text-0056B3">
              notas inteligentes
            </span>{" "}
            y acceder a todas tus herramientas de{" "}
            <span className="font-semibold text-0056B3">aprendizaje</span> desde
            una única plataforma. Organiza tu trabajo con total claridad, usa{" "}
            <span className="font-semibold text-0056B3">automatización</span>{" "}
            para procesos repetitivos, y utiliza{" "}
            <span className="font-semibold text-primary">
              inteligencia artificial
            </span>{" "}
            para priorizar lo importante, generar resúmenes, sugerir próximas
            acciones y transformar tus planes en tareas concretas y accionables.
          </p>
        </section>

        {/* Características */}
        <section className="mt-20">
          <h4
            className={`mx-auto text-[2rem] font-bold text-center mb-4 ${darkMode ? "text-[#f5f5dc]" : "text-black"}`}
          >
            ¿Qué obtengo usando EAT?
          </h4>
          <div className="mx-auto mb-12 h-0.5 w-20 rounded-full bg-[#0056B3]" />

          <div className="mx-auto max-w-5xl space-y-12">
            {/* Productividad */}
            <div>
              <h3 className="text-2xl font-bold text-0056B3 mb-6">
                ✅ Productividad
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div
                  className={`rounded-lg border p-6 ${darkMode ? "border-slate-700/40 bg-surface-dark" : "border-slate-200 bg-surface"}`}
                >
                  <h4 className="font-semibold text-primary mb-2">
                    1. Gestión clara
                  </h4>
                  <p
                    className={`text-sm ${darkMode ? "text-secondary-dark" : "text-slate-600"}`}
                  >
                    Organiza tareas, proyectos y prioridades desde un único
                    lugar.
                  </p>
                </div>
                <div
                  className={`rounded-lg border p-6 ${darkMode ? "border-slate-700/40 bg-surface-dark" : "border-slate-200 bg-surface"}`}
                >
                  <h4 className="font-semibold text-primary mb-2">
                    2. Enfoque en tus metas
                  </h4>
                  <p
                    className={`text-sm ${darkMode ? "text-secondary-dark" : "text-slate-600"}`}
                  >
                    Mantén tus objetivos siempre visibles y conectados con tus
                    acciones diarias.
                  </p>
                </div>
                <div
                  className={`rounded-lg border p-6 ${darkMode ? "border-slate-700/40 bg-surface-dark" : "border-slate-200 bg-surface"}`}
                >
                  <h4 className="font-semibold text-primary mb-2">
                    3. Progreso constante
                  </h4>
                  <p
                    className={`text-sm ${darkMode ? "text-secondary-dark" : "text-slate-600"}`}
                  >
                    Visualiza tu avance y mantén la motivación a largo plazo.
                  </p>
                </div>
              </div>
            </div>

            {/* Automatización e IA */}
            <div>
              <h3 className="text-2xl font-bold text-0056B3 mb-6">
                🤖 Automatización e IA
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div
                  className={`rounded-lg border p-6 ${darkMode ? "border-slate-700/40 bg-surface-dark" : "border-slate-200 bg-surface"}`}
                >
                  <h4 className="font-semibold text-primary mb-2">
                    1. Automatización inteligente
                  </h4>
                  <p
                    className={`text-sm ${darkMode ? "text-secondary-dark" : "text-slate-600"}`}
                  >
                    Reduce tareas repetitivas y optimiza tu flujo de trabajo.
                  </p>
                </div>
                <div
                  className={`rounded-lg border p-6 ${darkMode ? "border-slate-700/40 bg-surface-dark" : "border-slate-200 bg-surface"}`}
                >
                  <h4 className="font-semibold text-primary mb-2">
                    2. Asistencia con IA
                  </h4>
                  <p
                    className={`text-sm ${darkMode ? "text-secondary-dark" : "text-slate-600"}`}
                  >
                    Obtén sugerencias, resúmenes y apoyo para la toma de
                    decisiones.
                  </p>
                </div>
                <div
                  className={`rounded-lg border p-6 ${darkMode ? "border-slate-700/40 bg-surface-dark" : "border-slate-200 bg-surface"}`}
                >
                  <h4 className="font-semibold text-primary mb-2">
                    3. Planificación asistida
                  </h4>
                  <p
                    className={`text-sm ${darkMode ? "text-secondary-dark" : "text-slate-600"}`}
                  >
                    Convierte ideas y objetivos en planes de acción
                    estructurados.
                  </p>
                </div>
              </div>
            </div>

            {/* Aprendizaje */}
            <div>
              <h3 className="text-2xl font-bold text-0056B3 mb-6">
                📚 Aprendizaje
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div
                  className={`rounded-lg border p-6 ${darkMode ? "border-slate-700/40 bg-surface-dark" : "border-slate-200 bg-surface"}`}
                >
                  <h4 className="font-semibold text-primary mb-2">
                    1. Aprendizaje continuo
                  </h4>
                  <p
                    className={`text-sm ${darkMode ? "text-secondary-dark" : "text-slate-600"}`}
                  >
                    Centraliza recursos, apuntes y material de estudio.
                  </p>
                </div>
                <div
                  className={`rounded-lg border p-6 ${darkMode ? "border-slate-700/40 bg-surface-dark" : "border-slate-200 bg-surface"}`}
                >
                  <h4 className="font-semibold text-primary mb-2">
                    2. Gestión del conocimiento
                  </h4>
                  <p
                    className={`text-sm ${darkMode ? "text-secondary-dark" : "text-slate-600"}`}
                  >
                    Conecta información y encuentra lo que necesitas
                    rápidamente.
                  </p>
                </div>
                <div
                  className={`rounded-lg border p-6 ${darkMode ? "border-slate-700/40 bg-surface-dark" : "border-slate-200 bg-surface"}`}
                >
                  <h4 className="font-semibold text-primary mb-2">
                    3. Organización inteligente
                  </h4>
                  <p
                    className={`text-sm ${darkMode ? "text-secondary-dark" : "text-slate-600"}`}
                  >
                    Mantén tus conocimientos ordenados y accesibles.
                  </p>
                </div>
              </div>
            </div>

            {/* Crecimiento personal */}
            <div>
              <h3 className="text-2xl font-bold text-0056B3 mb-6">
                🚀 Crecimiento personal
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div
                  className={`rounded-lg border p-6 ${darkMode ? "border-slate-700/40 bg-surface-dark" : "border-slate-200 bg-surface"}`}
                >
                  <h4 className="font-semibold text-primary mb-2">
                    1. Mejora continua
                  </h4>
                  <p
                    className={`text-sm ${darkMode ? "text-secondary-dark" : "text-slate-600"}`}
                  >
                    Desarrolla hábitos y sistemas que favorezcan tu crecimiento.
                  </p>
                </div>
                <div
                  className={`rounded-lg border p-6 ${darkMode ? "border-slate-700/40 bg-surface-dark" : "border-slate-200 bg-surface"}`}
                >
                  <h4 className="font-semibold text-primary mb-2">
                    2. Claridad mental
                  </h4>
                  <p
                    className={`text-sm ${darkMode ? "text-secondary-dark" : "text-slate-600"}`}
                  >
                    Reduce el ruido digital y concéntrate en lo importante.
                  </p>
                </div>
                <div
                  className={`rounded-lg border p-6 ${darkMode ? "border-slate-700/40 bg-surface-dark" : "border-slate-200 bg-surface"}`}
                >
                  <h4 className="font-semibold text-primary mb-2">
                    3. Equilibrio y disciplina
                  </h4>
                  <p
                    className={`text-sm ${darkMode ? "text-secondary-dark" : "text-slate-600"}`}
                  >
                    Diseñado para ayudarte a avanzar de forma sostenible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-16">
          <FeatureSection darkMode={darkMode} />
        </section>
      </main>
    </div>
  )
}

export default LandingPage
