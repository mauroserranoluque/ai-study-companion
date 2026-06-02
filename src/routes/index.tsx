import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles, Brain, BookOpen, Calculator, FlaskConical, Languages,
  Search, MessageSquare, FileText, Lightbulb, Zap, Trophy,
  ArrowRight, Check, Star, GraduationCap, Bot, Wand2, Target, Clock
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IA para Estudiantes — La guía definitiva para aprender mejor" },
      { name: "description", content: "Herramientas, prompts y métodos para estudiar con inteligencia artificial. Tu tutor personal digital para aprender más rápido y mejor." },
      { property: "og:title", content: "IA para Estudiantes" },
      { property: "og:description", content: "La guía definitiva para aprender mejor con inteligencia artificial." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const tools = [
  { name: "ChatGPT", tag: "Todo en uno", desc: "Explicaciones, resúmenes, ejercicios y exámenes.", color: "from-emerald-500/20 to-blue-500/20", icon: MessageSquare },
  { name: "Claude", tag: "Textos largos", desc: "Análisis profundo de PDFs y libros completos.", color: "from-orange-500/20 to-pink-500/20", icon: FileText },
  { name: "Gemini", tag: "Google", desc: "Integrado con Docs, Drive y tu ecosistema.", color: "from-blue-500/20 to-purple-500/20", icon: Sparkles },
  { name: "Perplexity", tag: "Investigación", desc: "Respuestas con fuentes verificadas y citas.", color: "from-cyan-500/20 to-teal-500/20", icon: Search },
  { name: "NotebookLM", tag: "Tus apuntes", desc: "Sube PDFs y haz preguntas sobre tu material.", color: "from-violet-500/20 to-indigo-500/20", icon: BookOpen },
  { name: "Wolfram", tag: "Matemáticas", desc: "Derivadas, integrales, física y estadística.", color: "from-red-500/20 to-orange-500/20", icon: Calculator },
];

const subjects = [
  { name: "Matemáticas", icon: Calculator, items: ["Resuelve paso a paso", "Explica fórmulas", "Práctica infinita"] },
  { name: "Física", icon: Zap, items: ["Fenómenos visuales", "Ejemplos reales", "Problemas guiados"] },
  { name: "Química", icon: FlaskConical, items: ["Reacciones", "Tabla periódica", "Estequiometría"] },
  { name: "Historia", icon: BookOpen, items: ["Resúmenes claros", "Líneas del tiempo", "Comparaciones"] },
  { name: "Lengua", icon: FileText, items: ["Comentarios", "Ortografía", "Redacción"] },
  { name: "Idiomas", icon: Languages, items: ["Conversación", "Corrección", "Práctica oral"] },
];

const prompts = [
  { tag: "Aprender", text: "Explícame este tema desde cero como si fuera un estudiante sin conocimientos previos. Incluye ejemplos, analogías y un resumen final en 10 líneas." },
  { tag: "Examen", text: "Crea un examen de 20 preguntas con soluciones explicadas al final, mezclando opción múltiple y desarrollo." },
  { tag: "Memorizar", text: "Convierte este temario en flashcards pregunta–respuesta cortas, ideales para repasar en 15 minutos." },
  { tag: "Trabajo", text: "Actúa como profesor exigente, evalúa mi trabajo y dame 5 mejoras concretas con ejemplos." },
];

const compare = [
  { tool: "ChatGPT", price: "Free / Plus", level: "Todos", ease: 5, precision: 5, use: "General" },
  { tool: "Claude", price: "Free / Pro", level: "Medio-Avanzado", ease: 5, precision: 5, use: "Textos largos" },
  { tool: "Gemini", price: "Free / Advanced", level: "Todos", ease: 4, precision: 4, use: "Google Suite" },
  { tool: "Perplexity", price: "Free / Pro", level: "Universitario", ease: 5, precision: 5, use: "Investigación" },
  { tool: "NotebookLM", price: "Gratis", level: "Todos", ease: 5, precision: 4, use: "Apuntes propios" },
  { tool: "Wolfram", price: "Free / Pro", level: "Ciencias", ease: 3, precision: 5, use: "Cálculos" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <Tools />
      <Assistant />
      <Subjects />
      <Prompts />
      <Compare />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <div className="w-8 h-8 rounded-lg bg-hero shadow-glow grid place-items-center">
            <Brain className="w-4 h-4 text-white" />
          </div>
          IA<span className="text-gradient">Estudia</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#herramientas" className="hover:text-foreground transition">Herramientas</a>
          <a href="#asignaturas" className="hover:text-foreground transition">Asignaturas</a>
          <a href="#prompts" className="hover:text-foreground transition">Prompts</a>
          <a href="#comparador" className="hover:text-foreground transition">Comparador</a>
        </nav>
        <a href="#asistente" className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition">
          Empezar <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-soft" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs font-medium text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            La guía definitiva 2026
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-extrabold leading-[1.02] tracking-tight">
            Aprende mejor.<br />
            Aprende con <span className="text-gradient">inteligencia artificial</span>.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Herramientas, prompts y métodos reunidos en un solo lugar para que estudiar
            sea más rápido, claro y eficiente. Tu tutor personal digital.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#asistente" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-hero text-white font-semibold shadow-glow hover:scale-[1.02] transition">
              <Wand2 className="w-4 h-4" /> ¿Qué IA necesito?
            </a>
            <a href="#herramientas" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card font-semibold hover:bg-surface transition">
              Explorar herramientas
            </a>
          </div>
        </div>

        {/* Floating cards preview */}
        <div className="hidden lg:block absolute right-8 top-24 w-80 animate-float">
          <div className="rounded-2xl bg-card border border-border shadow-card p-5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
              <Bot className="w-3.5 h-3.5" /> Asistente de estudio
            </div>
            <p className="text-sm leading-relaxed">
              <span className="font-mono text-xs text-accent">prompt &gt;</span> Explícame
              las derivadas con ejemplos visuales…
            </p>
            <div className="mt-4 h-2 rounded-full bg-surface overflow-hidden">
              <div className="h-full w-2/3 bg-hero rounded-full" />
            </div>
          </div>
          <div className="mt-4 ml-12 rounded-2xl bg-card border border-border shadow-card p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-success/15 grid place-items-center">
              <Check className="w-4 h-4 text-success" />
            </div>
            <div className="text-sm">
              <div className="font-semibold">+12 ejercicios resueltos</div>
              <div className="text-xs text-muted-foreground">hoy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const s = [
    { n: "9+", l: "Herramientas IA" },
    { n: "50+", l: "Prompts listos" },
    { n: "12", l: "Asignaturas" },
    { n: "24/7", l: "Tu tutor digital" },
  ];
  return (
    <section className="border-y border-border bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {s.map(x => (
          <div key={x.l}>
            <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">{x.n}</div>
            <div className="text-sm text-muted-foreground mt-1">{x.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section id="herramientas" className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
      <SectionHead
        eyebrow="Herramientas"
        title="Las IAs que todo estudiante debe conocer"
        sub="Cada una tiene su fuerza. Aquí están las que de verdad valen la pena."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {tools.map(t => (
          <article key={t.name} className="group relative rounded-2xl border border-border bg-card p-6 hover:shadow-card hover:-translate-y-0.5 transition">
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-100 transition`} />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-foreground text-background grid place-items-center">
                  <t.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-surface border border-border">{t.tag}</span>
              </div>
              <h3 className="font-display text-xl font-bold">{t.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Assistant() {
  const [data, setData] = useState({ subject: "Matemáticas", goal: "Entender un tema", level: "Bachillerato", time: "30 min" });
  const [shown, setShown] = useState(false);

  const recommend = () => {
    setShown(true);
  };

  const reco = (() => {
    if (data.subject === "Matemáticas") return { ia: "Wolfram Alpha + ChatGPT", prompt: `Explícame ${data.goal.toLowerCase()} en matemáticas a nivel ${data.level}. Resuelve un ejemplo paso a paso y proponme 3 ejercicios con soluciones.`, method: "Método Feynman: explicarlo con tus palabras tras leer." };
    if (data.subject === "Idiomas") return { ia: "ChatGPT (modo voz)", prompt: `Actúa como tutor de idioma. Iniciemos una conversación de ${data.time} a mi nivel. Corrige mis errores al final.`, method: "Inmersión activa diaria 20 min." };
    if (data.subject === "Historia" || data.subject === "Lengua") return { ia: "Claude + NotebookLM", prompt: `Resume el siguiente tema en una guía de estudio estructurada con fechas clave, conceptos y posibles preguntas de examen.`, method: "Mapas mentales + repaso espaciado." };
    return { ia: "ChatGPT", prompt: `Crea un plan de estudio de ${data.time} para ${data.subject} (${data.level}), enfocado en ${data.goal.toLowerCase()}.`, method: "Sesiones Pomodoro de 25/5." };
  })();

  return (
    <section id="asistente" className="relative py-24">
      <div className="absolute inset-0 bg-hero opacity-95" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-white">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-medium mb-5">
            <Sparkles className="w-3.5 h-3.5" /> Sistema inteligente central
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold">¿Qué IA necesito?</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Dinos qué estudias y te recomendamos la IA, el prompt y el método.
          </p>
        </div>

        <div className="rounded-3xl bg-white text-foreground p-6 sm:p-8 shadow-glow">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Asignatura" icon={BookOpen} value={data.subject} options={["Matemáticas","Física","Química","Historia","Lengua","Idiomas","Programación"]} onChange={v => setData(d=>({...d, subject:v}))}/>
            <Field label="Objetivo" icon={Target} value={data.goal} options={["Entender un tema","Preparar examen","Hacer un trabajo","Memorizar","Practicar"]} onChange={v => setData(d=>({...d, goal:v}))}/>
            <Field label="Nivel" icon={GraduationCap} value={data.level} options={["ESO","Bachillerato","Universidad","Profesional"]} onChange={v => setData(d=>({...d, level:v}))}/>
            <Field label="Tiempo disponible" icon={Clock} value={data.time} options={["15 min","30 min","1 hora","2+ horas"]} onChange={v => setData(d=>({...d, time:v}))}/>
          </div>
          <button onClick={recommend} className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-hero text-white font-semibold shadow-glow hover:scale-[1.01] transition">
            <Wand2 className="w-4 h-4" /> Generar mi plan
          </button>

          {shown && (
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <RecoCard icon={Bot} title="IA recomendada" body={reco.ia} />
              <RecoCard icon={MessageSquare} title="Prompt listo" body={reco.prompt} mono />
              <RecoCard icon={Lightbulb} title="Método" body={reco.method} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, icon: Icon, value, options, onChange }: any) {
  return (
    <label className="block">
      <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-1.5">
        <Icon className="w-3.5 h-3.5" /> {label}
      </span>
      <select value={value} onChange={e => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring">
        {options.map((o: string) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

function RecoCard({ icon: Icon, title, body, mono }: any) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-2">
        <Icon className="w-3.5 h-3.5" /> {title}
      </div>
      <p className={`text-sm leading-relaxed ${mono ? 'font-mono text-xs' : 'font-medium'}`}>{body}</p>
    </div>
  );
}

function Subjects() {
  return (
    <section id="asignaturas" className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
      <SectionHead eyebrow="Por asignaturas" title="IA aplicada a tu materia" sub="Lo que la IA puede hacer por cada asignatura, en concreto." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {subjects.map(s => (
          <div key={s.name} className="rounded-2xl border border-border p-6 hover:border-primary/40 transition group">
            <div className="w-11 h-11 rounded-xl bg-surface grid place-items-center mb-4 group-hover:bg-hero group-hover:text-white transition">
              <s.icon className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg">{s.name}</h3>
            <ul className="mt-3 space-y-1.5">
              {s.items.map(i => (
                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-success" /> {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Prompts() {
  return (
    <section id="prompts" className="bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
        <SectionHead eyebrow="Biblioteca de prompts" title="Copia, pega y aprende" sub="Prompts probados para cada situación de estudio." />
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {prompts.map(p => (
            <div key={p.tag} className="rounded-2xl bg-card border border-border p-6 hover:shadow-card transition">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">{p.tag}</span>
                <button className="text-xs font-medium text-muted-foreground hover:text-foreground">Copiar</button>
              </div>
              <p className="font-mono text-sm leading-relaxed text-foreground/90">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section id="comparador" className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
      <SectionHead eyebrow="Comparador" title="Elige sin perder tiempo" sub="Las mejores IAs comparadas en lo que importa para estudiar." />
      <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface text-left">
            <tr>
              {["Herramienta","Precio","Nivel","Facilidad","Precisión","Uso ideal"].map(h => (
                <th key={h} className="px-5 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compare.map(r => (
              <tr key={r.tool} className="border-t border-border hover:bg-surface/60 transition">
                <td className="px-5 py-4 font-bold font-display">{r.tool}</td>
                <td className="px-5 py-4 text-muted-foreground">{r.price}</td>
                <td className="px-5 py-4 text-muted-foreground">{r.level}</td>
                <td className="px-5 py-4"><Stars n={r.ease} /></td>
                <td className="px-5 py-4"><Stars n={r.precision} /></td>
                <td className="px-5 py-4 text-muted-foreground">{r.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-3.5 h-3.5 ${i < n ? 'fill-accent text-accent' : 'text-border'}`} />
      ))}
    </div>
  );
}

function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
      <div className="relative rounded-3xl bg-hero overflow-hidden p-10 sm:p-16 text-white">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-2xl">
          <Trophy className="w-10 h-10 mb-4" />
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
            Convierte la IA en tu mejor aliado de estudio.
          </h2>
          <p className="mt-4 text-white/85 text-lg">
            Más rápido. Más claro. Más eficiente. Sin sustituir tu esfuerzo: potenciándolo.
          </p>
          <a href="#asistente" className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-foreground font-semibold hover:scale-[1.02] transition">
            Empezar ahora <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-hero grid place-items-center"><Brain className="w-3.5 h-3.5 text-white" /></div>
          <span className="font-display font-bold text-foreground">IAEstudia</span>
          <span>· La guía definitiva para aprender con IA</span>
        </div>
        <div>© {new Date().getFullYear()} · Hecho para estudiantes</div>
      </div>
    </footer>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent mb-3">
        <span className="w-6 h-px bg-accent" /> {eyebrow}
      </div>
      <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">{title}</h2>
      <p className="mt-3 text-muted-foreground text-lg">{sub}</p>
    </div>
  );
}
