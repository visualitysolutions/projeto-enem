"use client";

import Image from "next/image";
import { useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  CheckCheck,
  ChevronRight,
  Clock3,
  Compass,
  Feather,
  GraduationCap,
  Menu,
  MoveUpRight,
  Play,
  ShieldCheck,
  Sparkles,
  Sprout,
  Target,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const week = [
  {
    day: "SEG",
    date: "12",
    subject: "Matemática",
    topic: "Porcentagem no dia a dia",
    exercise: "10 questões para fixar",
    color: "blue",
  },
  {
    day: "TER",
    date: "13",
    subject: "Linguagens",
    topic: "Interpretação de texto",
    exercise: "8 questões para praticar",
    color: "peach",
  },
  {
    day: "QUA",
    date: "14",
    subject: "Ciências da natureza",
    topic: "Ecologia e sustentabilidade",
    exercise: "10 questões para fixar",
    color: "green",
  },
  {
    day: "QUI",
    date: "15",
    subject: "Ciências humanas",
    topic: "Cidadania e movimentos sociais",
    exercise: "8 questões para praticar",
    color: "peach",
  },
  {
    day: "SEX",
    date: "16",
    subject: "Química Orgânica",
    topic: "Compostos de carbono",
    exercise: "8 questões para praticar",
    color: "blue",
  },
];
const plans = [
  {
    name: "Essencial em Ciências Humanas",
    description: "História, geografia e sociedade no seu ritmo.",
    price: "29",
    cents: ",90",
    features: [
      "Plano de estudos",
      "Apostilas de Ciências Humanas",
      "Exercícios com gabarito",
      "Acesso pelo celular e computador",
    ],
    popular: false,
  },
  {
    name: "Essencial em Ciências Exatas",
    description: "Matemática e Natureza com foco no essencial.",
    price: "29",
    cents: ",90",
    features: [
      "Plano de estudos",
      "Apostilas de Ciências Exatas",
      "Exercícios com gabarito",
      "Acesso pelo celular e computador",
    ],
    popular: false,
  },
  {
    name: "Foco total",
    description: "Mais prática. Mais confiança.",
    price: "49",
    cents: ",90",
    features: [
      "Tudo dos planos Essenciais",
      "Trilha completa de estudos",
      "Suporte total do material",
    ],
    popular: true,
  },
];
const faqs = [
  [
    "Tenho pouco tempo por dia. A Passo é para mim?",
    "Essa é a ideia. A proposta é organizar o conteúdo em blocos curtos de teoria, prática e revisão, para você estudar dentro do tempo que tem.",
  ],
  [
    "O que está incluído nos planos?",
    "Os planos reúnem uma programação de estudos, apostilas digitais e exercícios. O Foco total acrescenta tudo o que há nos outros planos para que seu estudo seja completo.",
  ],
  [
    "Posso estudar pelo celular?",
    "Sim. A interface foi pensada para funcionar no celular, no tablet e no computador, para que você aproveite os intervalos da sua rotina.",
  ],
  [
    "Preciso ter uma base para começar?",
    "Não precisa ter tudo em dia para dar o primeiro passo. A proposta é começar pelos fundamentos e avançar com prática, respeitando o seu ritmo e identificando o que merece mais atenção.",
  ],
  [
    "Já posso assinar e acessar os materiais?",
    "Pode! Basta entrar na plataforma da Cakto e baixar o produto em formato de pdf diretamente para o seu dispositivo, depois disso é só começar os estudos.",
  ],
];

function Brand() {
  return (
    <a href="#inicio" className="brand" aria-label="Passo — início">
      <span className="brand-symbol">
        <MoveUpRight aria-hidden="true" />
      </span>
      passo<span className="brand-dot">.</span>
    </a>
  );
}

export default function Home() {
  const [day, setDay] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [auth, setAuth] = useState<"login" | "register" | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const authOpener = useRef<HTMLElement | null>(null);
  const lesson = week[day];
  function openAuth(mode: "login" | "register", plan?: string) {
    authOpener.current = document.activeElement as HTMLElement | null;
    setAuth(mode);
    setSelectedPlan(plan ?? null);
    setSubmitted(false);
    setMenuOpen(false);
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header" id="inicio">
        <div className="container nav-wrap">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a className="nav-active" href="#inicio">
              Início
            </a>
            <a href="#sobre">Sobre</a>
            <a href="#planos">Planos</a>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-toggle"
            id="mobile-menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav
            className="mobile-nav container"
            id="mobile-nav"
            aria-label="Navegação móvel"
          >
            {[
              ["Início", "inicio"],
              ["Sobre", "sobre"],
              ["Planos", "planos"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <Button variant="outline" onClick={() => openAuth("login")}>
              Entrar
            </Button>
            <Button onClick={() => openAuth("register")}>
              Criar minha conta
            </Button>
          </nav>
        )}
      </header>
      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" /> SEU TEMPO É CURTO. SEU SONHO,
                NÃO.
              </div>
              <h1 id="hero-title">
                Ainda dá tempo
                <br />
                de mudar o seu
                <br />
                <em>caminho.</em>
              </h1>
              <p className="hero-description">
                O Enem está chegando e você não precisa fazer tudo sozinho. Um
                plano de estudos que cabe na sua rotina, com foco no que
                realmente importa.
              </p>
              <div className="hero-actions">
                <Button size="lg" asChild>
                  <a href="#planos">
                    Encontrar meu plano <ArrowUpRight data-icon="inline-end" />
                  </a>
                </Button>
                <a className="text-link" href="#sobre">
                  <span className="play-icon">
                    <Play size={12} fill="currentColor" />
                  </span>{" "}
                  Como funciona
                </a>
              </div>
              <div className="hero-reassurance">
                <span>
                  <Check size={14} /> Eficiência
                </span>
                <span>
                  <Check size={14} /> Sem sobrecarga
                </span>
                <span>
                  <Check size={14} /> Com direção
                </span>
              </div>
              <div className="enem-signature">
                <Image
                  src="/enem-logo.png"
                  alt="Enem — um ensaio para a vida"
                  width={300}
                  height={186}
                  priority
                />
                <span>
                  Seu próximo passo.
                  <br />
                  <strong>Um mundo de possibilidades.</strong>
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="orbit orbit-one" aria-hidden="true" />
              <div className="orbit orbit-two" aria-hidden="true" />
              <div className="floating-note note-time">
                <span className="note-icon">
                  <Clock3 size={22} />
                </span>
                <div>
                  <strong>Um pouco por dia.</strong>
                  <span>Um passo mais perto.</span>
                </div>
              </div>
              <div className="planner">
                <div className="planner-topline">
                  <span>
                    <span className="tiny-mark">↗</span> MEU PLANO DE ESTUDOS
                  </span>
                </div>
                <div className="planner-greeting">
                  <div>
                    <h2>Bora dar o próximo passo?</h2>
                    <p>Sua semana, com mais direção e menos pressão.</p>
                  </div>
                  <span className="sun-icon" aria-hidden="true">
                    ☀
                  </span>
                </div>
                <div className="week-label">
                  <span></span>
                  <CalendarDays size={15} />
                </div>
                <div
                  className="week-days"
                  aria-label="Dias do plano de exemplo"
                >
                  {week.map((item, index) => (
                    <button
                      type="button"
                      key={item.day}
                      aria-label={`${item.day}, dia ${item.date}`}
                      aria-pressed={day === index}
                      className={cn("day", day === index && "selected")}
                      onClick={() => setDay(index)}
                    >
                      <span>{item.day}</span>
                      <strong>{item.date}</strong>
                      <span className="day-dot" />
                    </button>
                  ))}
                </div>
                <div className="daily-label">
                  <span>SEU FOCO DO DIA</span>
                  <span>
                    <Clock3 size={12} /> 45 min de estudo
                  </span>
                </div>
                <div className={cn("lesson", lesson.color)}>
                  <div className="lesson-icon">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <span>{lesson.subject}</span>
                    <h3>{lesson.topic}</h3>
                    <p>
                      Apostila objetiva <span>·</span> 20 min
                    </p>
                  </div>
                  <ChevronRight size={18} />
                </div>
                <div className="lesson practice">
                  <div className="lesson-icon">
                    <Target size={20} />
                  </div>
                  <div>
                    <span>Hora de praticar</span>
                    <h3>{lesson.exercise}</h3>
                    <p>
                      Aprenda fazendo <span>·</span> 25 min
                    </p>
                  </div>
                  <ChevronRight size={18} />
                </div>
                <div className="planner-bottom">
                  <Sprout size={18} />
                  <span>Consistência vale mais que pressa.</span>
                  <span>♡</span>
                </div>
              </div>
              <div className="floating-note note-progress">
                <span className="progress-circle">
                  <CheckCheck size={23} />
                </span>
                <div>
                  <strong>Cada passo conta.</strong>
                  <span>Seu futuro agradece o de hoje.</span>
                </div>
                <Sparkles size={17} />
              </div>
              <div className="handwritten">
                Seu sonho merece um plano.
                <svg
                  width="65"
                  height="40"
                  viewBox="0 0 65 40"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5C25 32 45 30 59 9M47 13l14-7-1 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <div className="benefits-strip">
          <div className="container benefits-inner">
            <span>
              <Clock3 /> Feito para quem tem pouco tempo
            </span>
            <span>
              <BookOpen /> Conteúdo direto ao ponto
            </span>
            <span>
              <Compass /> Clareza para cada dia
            </span>
            <span>
              <Feather /> Mais leveza para estudar
            </span>
          </div>
        </div>
        <section
          className="section container how-section"
          id="sobre"
          aria-labelledby="how-title"
        >
          <div className="section-heading">
            <div>
              <h2 id="how-title">
                Você traz o sonho.
                <br />A gente organiza <em>o caminho.</em>
              </h2>
            </div>
          </div>
          <div className="steps-grid">
            {[
              {
                icon: CalendarDays,
                title: "Um plano que cabe no seu dia",
                text: "Saiba o que estudar e quando revisar. Uma rotina organizada para aproveitar o tempo que você tem.",
                tag: "01",
                color: "blue",
              },
              {
                icon: BookOpen,
                title: "O essencial, sem complicação",
                text: "Apostilas claras e objetivas para entender os conteúdos e sair da sensação de estar sempre atrasado.",
                tag: "02",
                color: "peach",
              },
              {
                icon: Target,
                title: "Pratique. Entenda. Evolua.",
                text: "Exercícios para colocar o aprendizado em ação e descobrir onde concentrar seus próximos esforços.",
                tag: "03",
                color: "green",
              },
            ].map((item) => (
              <article className="step" key={item.tag}>
                <div className="step-top">
                  <span className={cn("step-icon", item.color)}>
                    <item.icon size={25} />
                  </span>
                  <span className="step-number">{item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="encouragement container">
          <div className="encouragement-icon">
            <Sprout size={43} strokeWidth={1.3} />
          </div>
          <div>
            <p className="eyebrow">UM LEMBRETE IMPORTANTE</p>
            <h2>
              Você não precisa de um dia perfeito.
              <br />
              Só de um <em>próximo passo.</em>
            </h2>
          </div>
        </section>
        <section
          className="section plans-section"
          id="planos"
          aria-labelledby="plans-title"
        >
          <div className="container">
            <div className="center-heading">
              <p className="eyebrow">SEU FUTURO MERECE ESSE COMEÇO</p>
              <h2 id="plans-title">
                Um plano para a sua rotina.
                <br />
                <em>Um passo para o seu futuro.</em>
              </h2>
              <p>Escolha o apoio que combina com o seu momento.</p>
            </div>
            <div className="plans-grid">
              {plans.map((plan) => (
                <article
                  className={cn("plan", plan.popular && "plan-featured")}
                  key={plan.name}
                >
                  {plan.popular && (
                    <div className="plan-ribbon">
                      <Sparkles size={14} /> PARA IR UM PASSO ALÉM
                    </div>
                  )}
                  <div className="plan-heading">
                    <span className="plan-icon">
                      {plan.popular ? <Sparkles /> : <Sprout />}
                    </span>
                    <h3>{plan.name}</h3>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                  <div className="plan-price">
                    <span>R$</span>
                    <strong>{plan.price}</strong>
                    <b>{plan.cents}</b>
                    <span>/mês</span>
                  </div>
                  <Separator className="my-6" />
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check size={17} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    Quero esse plano <ArrowUpRight data-icon="inline-end" />
                  </Button>
                </article>
              ))}
            </div>
            <p className="plan-footnote">
              <ShieldCheck size={16} /> Você decide o seu próximo passo. Com
              segurança total na hora do pagamento.
            </p>
          </div>
        </section>
        <section
          className="section container faq-section"
          aria-labelledby="faq-title"
        >
          <div>
            <p className="eyebrow">PODE PERGUNTAR</p>
            <h2 id="faq-title">
              Menos dúvidas.
              <br />
              <em>Mais confiança.</em>
            </h2>
            <p>
              Algumas respostas para você
              <br />
              começar com tranquilidade.
            </p>
          </div>
          <Accordion type="single" collapsible className="faq-list">
            {faqs.map(([question, answer], index) => (
              <AccordionItem value={`faq-${index}`} key={question}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <footer className="site-footer container">
        <div className="footer-top">
          <Brand />
          <span></span>
          <a href="#inicio">
            Voltar ao topo <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Passo. Feito para o seu próximo
            capítulo.
          </p>
          <p>Plataforma independente, sem vínculo com o Inep ou o MEC.</p>
        </div>
      </footer>
      <Dialog
        open={auth !== null}
        onOpenChange={(open) => {
          if (!open) setAuth(null);
        }}
      >
        <DialogContent onCloseAutoFocus={(event) => {
          event.preventDefault();
          const opener = authOpener.current;
          if (opener?.isConnected) opener.focus();
          else document.getElementById("mobile-menu-toggle")?.focus();
        }}>
          <DialogHeader>
            <div className="dialog-brand">
              <GraduationCap size={30} />
            </div>
            <DialogTitle>
              {submitted
                ? "Seu próximo passo está chegando."
                : auth === "login"
                  ? "Bom ter você de volta."
                  : "Toda história tem um começo."}
            </DialogTitle>
            <DialogDescription>
              {submitted
                ? "Esta é uma prévia da plataforma. Nenhuma conta foi criada, nenhum dado foi enviado e nenhuma cobrança foi realizada."
                : auth === "login"
                  ? "Entre para continuar de onde parou."
                  : "Comece a construir uma rotina de estudos possível."}
            </DialogDescription>
          </DialogHeader>
          {submitted ? (
            <Button onClick={() => setAuth(null)}>
              Continuar explorando <ArrowRight data-icon="inline-end" />
            </Button>
          ) : (
            <>
              <Badge variant="secondary">
                {selectedPlan
                  ? `Plano selecionado: ${selectedPlan}`
                  : "Prévia da plataforma"}
              </Badge>
              <form onSubmit={submit}>
                <FieldGroup>
                  {auth === "register" && (
                    <Field>
                      <FieldLabel htmlFor="name">
                        Como podemos te chamar?
                      </FieldLabel>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        autoComplete="given-name"
                        required
                        maxLength={100}
                      />
                    </Field>
                  )}
                  <Field>
                    <FieldLabel htmlFor="email">E-mail</FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="voce@exemplo.com"
                      autoComplete="email"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="password">Senha</FieldLabel>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Pelo menos 8 caracteres"
                      minLength={8}
                      autoComplete={
                        auth === "login" ? "current-password" : "new-password"
                      }
                      required
                    />
                  </Field>
                  <Button size="lg" type="submit">
                    {auth === "login" ? "Entrar" : "Criar minha conta"}
                    <ArrowRight data-icon="inline-end" />
                  </Button>
                </FieldGroup>
              </form>
              <p className="demo-note">
                Demonstração: os dados não serão enviados ou armazenados.
              </p>
              <Button
                variant="link"
                onClick={() => {
                  setAuth(auth === "login" ? "register" : "login");
                  setSelectedPlan(null);
                }}
              >
                {auth === "login"
                  ? "Ainda não tem conta? Cadastre-se"
                  : "Já tem uma conta? Entre"}
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
