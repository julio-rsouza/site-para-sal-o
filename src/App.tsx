import { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  CreditCard,
  Scissors,
  Sparkles,
  Star,
  ChevronDown,
  Menu,
  X,
  Instagram,
} from 'lucide-react';

const WHATSAPP_1 = '5511948000961';
const WHATSAPP_2 = '5511985494595';

const wppLink = (num: string, msg = 'Olá! Gostaria de agendar um horário no Espaço Loyal.') =>
  `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;

const femaleServices = [
  {
    name: 'Corte',
    price: 'a partir de R$ 75',
    description: 'Cortes personalizados que valorizam seu rosto e estilo único.',
    img: '/images/services/1c41cd43-3966-44cb-a481-5c35111142f2.jpeg',
  },
  {
    name: 'Escova',
    price: 'a partir de R$ 60',
    description: 'Escova modeladora com acabamento profissional e duradouro.',
    img: '/images/services/d334f6cb-8f40-4eae-b23a-8f841b95d20b.jpeg',
  },
  {
    name: 'Luzes & Mechas',
    price: 'a partir de R$ 599',
    description: 'Técnicas modernas de coloração para um resultado deslumbrante.',
    img: '/images/services/25a8d1a8-a264-4219-b47b-8070582082e0.jpeg',
  },
  {
    name: 'Progressiva & Botox',
    price: 'a partir de R$ 250',
    description: 'Tratamento que alisa, hidrata e revitaliza profundamente os fios.',
    img: '/images/services/10716501-304f-4f9c-967b-b846a13d7848.jpeg',
  },
  {
    name: 'Morena Iluminada',
    price: 'a partir de R$ 450',
    description: 'Realce natural que traz luz e movimento aos cabelos escuros.',
    img: '/images/services/dc533d61-d90d-4a67-ae98-d6589eeefb50.jpeg',
  },
];

const barberServices = [
  { name: 'Corte Masculino', price: 'a partir de R$ 45', icon: Scissors },
  { name: 'Corte Infantil', price: null, icon: Scissors },
  { name: 'Corte + Barba', price: 'a partir de R$ 60', icon: Sparkles },
  { name: 'Barba', price: null, icon: Sparkles },
  { name: 'Sobrancelha', price: null, icon: Star },
  { name: 'Coloração e Luzes', price: null, icon: Sparkles },
  { name: 'Penteados', price: null, icon: Scissors },
  { name: 'Eliminação dos Fios Brancos', price: null, icon: Star },
  { name: 'Limpeza de Pele', price: null, icon: Sparkles },
];

const barberGallery = [
  { img: '/images/services/IMG_1365.jpeg', label: 'Corte Masculino' },
  { img: '/images/services/IMG_0946.jpeg', label: 'Corte Infantil' },
  { img: '/images/services/IMG_0120.jpeg', label: 'Luzes Masculinas' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0f0f0f] text-white font-sans">
      {/* ── NAV ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#0f0f0f]/95 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex flex-col leading-none">
            <span className="text-[10px] tracking-[0.35em] text-[#c9a84c] uppercase font-light">Espaço</span>
            <span className="text-xl font-bold tracking-[0.18em] text-white uppercase">Loyal</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase font-light">
            {['servicos', 'barbearia', 'contato'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-gray-300 hover:text-[#c9a84c] transition-colors duration-300"
              >
                {id === 'servicos' ? 'Serviços' : id === 'barbearia' ? 'Barbearia' : 'Contato'}
              </button>
            ))}
            <a
              href={wppLink(WHATSAPP_1)}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-widest uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
            >
              Agendar
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0f0f0f]/98 border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-sm tracking-widest uppercase">
            {['servicos', 'barbearia', 'contato'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-gray-300 hover:text-[#c9a84c] transition-colors"
              >
                {id === 'servicos' ? 'Serviços' : id === 'barbearia' ? 'Barbearia' : 'Contato'}
              </button>
            ))}
            <a
              href={wppLink(WHATSAPP_1)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 border border-[#c9a84c] text-[#c9a84c] text-xs text-center hover:bg-[#c9a84c] hover:text-black transition-all"
            >
              Agendar Horário
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* background image */}
        <div className="absolute inset-0">
          <img
            src="/images/services/6b3c9cd5-d52a-4d5e-a325-11880043a105.jpeg"
            alt="Espaço Loyal"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0f0f0f]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs uppercase mb-4 animate-fade-in">
            Bem-vindo ao
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-[0.15em] uppercase mb-2 leading-none">
            Espaço
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold tracking-[0.15em] uppercase mb-8 leading-none text-[#c9a84c]">
            Loyal
          </h1>
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
            Onde cada detalhe importa. Salão feminino, barbearia e atendimento infantil — 
            um espaço pensado para toda a família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={wppLink(WHATSAPP_1)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#c9a84c] text-black text-sm font-semibold tracking-widest uppercase hover:bg-[#e0bf6a] transition-all duration-300"
            >
              Agendar via WhatsApp
            </a>
            <button
              onClick={() => scrollTo('servicos')}
              className="px-8 py-3.5 border border-white/40 text-white text-sm font-light tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
            >
              Ver Serviços
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollTo('diferenciais')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce hover:text-[#c9a84c] transition-colors"
          aria-label="Rolar para baixo"
        >
          <ChevronDown size={28} />
        </button>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section id="diferenciais" className="bg-[#111] py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {[
            {
              icon: Clock,
              title: 'Com Hora Marcada',
              desc: 'Seu tempo é precioso. Atendemos exclusivamente com agendamento para garantir toda a atenção que você merece.',
            },
            {
              icon: Star,
              title: 'Família Completa',
              desc: 'Salão feminino, barbearia masculina e atendimento infantil. Um espaço acolhedor para todas as idades.',
            },
            {
              icon: MapPin,
              title: 'Alma do Bonfiglioli',
              desc: 'Situados na Av. Nossa Senhora da Assunção, 54 — no coração do Jardim Bonfiglioli, São Paulo.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#111] p-10 flex flex-col items-center text-center gap-4 hover:bg-[#181818] transition-colors duration-300"
            >
              <div className="w-12 h-12 border border-[#c9a84c]/40 flex items-center justify-center">
                <Icon size={20} className="text-[#c9a84c]" />
              </div>
              <h3 className="text-white font-semibold tracking-wider uppercase text-sm">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVIÇOS FEMININOS ── */}
      <section id="servicos" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs uppercase mb-3">Para Ela</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-wide uppercase">
              Serviços do Salão
            </h2>
            <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {femaleServices.map((svc) => (
              <div
                key={svc.name}
                className="group relative overflow-hidden bg-[#151515] hover:shadow-2xl hover:shadow-black/60 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-6 h-px bg-[#c9a84c] mb-3" />
                  <h3 className="text-white font-semibold text-lg tracking-wide">{svc.name}</h3>
                  <p className="text-[#c9a84c] text-xs font-light mt-1 tracking-wide">{svc.price}</p>
                  <p className="text-gray-400 text-sm font-light mt-1 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                    {svc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={wppLink(WHATSAPP_1, 'Olá! Gostaria de saber mais sobre os serviços do salão.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-3.5 border border-[#c9a84c] text-[#c9a84c] text-sm tracking-widest uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* ── BARBEARIA ── */}
      <section id="barbearia" className="py-24 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-[#c9a84c] tracking-[0.4em] text-xs uppercase mb-3">Para Ele & Criançada</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-wide uppercase mb-6">
                Serviços da Barbearia
              </h2>
              <div className="w-16 h-px bg-[#c9a84c] mb-8" />
              <p className="text-gray-400 font-light leading-relaxed mb-10 text-sm">
                Nossa barbearia oferece o melhor cuidado para homens e crianças, com profissionais
                especializados e um ambiente sofisticado. Porque toda a família merece o melhor.
              </p>

              <ul className="space-y-0 divide-y divide-white/5">
                {barberServices.map(({ name, price, icon: Icon }) => (
                  <li key={name} className="flex items-center gap-4 py-3.5">
                    <div className="w-8 h-8 border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-[#c9a84c]" />
                    </div>
                    <div className="flex items-center justify-between flex-1">
                      <span className="text-gray-200 text-sm font-light tracking-wide">{name}</span>
                      {price && <span className="text-[#c9a84c] text-xs font-light tracking-wide ml-3 whitespace-nowrap">{price}</span>}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <a
                  href={wppLink(WHATSAPP_2, 'Olá! Gostaria de agendar um horário na barbearia.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3.5 bg-[#c9a84c] text-black text-sm font-semibold tracking-widest uppercase hover:bg-[#e0bf6a] transition-all duration-300"
                >
                  Agendar na Barbearia
                </a>
              </div>
            </div>

            {/* Barber gallery */}
            <div className="grid grid-cols-3 gap-3">
              {barberGallery.map(({ img, label }) => (
                <div key={label} className="group relative overflow-hidden">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={img}
                      alt={label}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="w-4 h-px bg-[#c9a84c] mb-1.5" />
                    <p className="text-white text-xs font-light tracking-wide leading-tight">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAGAMENTO & INFO ── */}
      <section className="py-20 px-6 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9a84c] tracking-[0.4em] text-xs uppercase mb-3">Praticidade</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide uppercase mb-3">
            Formas de Pagamento
          </h2>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
            {[
              { icon: '💵', label: 'Dinheiro', desc: 'Pagamento em espécie' },
              { icon: '💳', label: 'Cartão', desc: 'Débito e crédito' },
              { icon: '⚡', label: 'Pix', desc: 'Transferência instantânea' },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="bg-[#111] py-10 px-6 flex flex-col items-center gap-3">
                <span className="text-3xl">{icon}</span>
                <CreditCard size={16} className="text-[#c9a84c] -mt-1" />
                <p className="text-white font-semibold tracking-widest uppercase text-xs">{label}</p>
                <p className="text-gray-500 text-xs font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO / CTA ── */}
      <section id="contato" className="py-24 px-6 bg-[#111]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] tracking-[0.4em] text-xs uppercase mb-3">Venha Nos Visitar</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-wide uppercase">
              Localização & Contato
            </h2>
            <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Info */}
            <div className="flex flex-col gap-8">
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-white font-semibold tracking-widest uppercase text-xs mb-2">Endereço</p>
                  <p className="text-gray-300 font-light text-sm leading-relaxed">
                    Av. Nossa Senhora da Assunção, 54<br />
                    Jardim Bonfiglioli — São Paulo, SP
                  </p>
                  <p className="text-gray-500 text-xs mt-1 font-light">
                    No coração do Jardim Bonfiglioli
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={16} className="text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-white font-semibold tracking-widest uppercase text-xs mb-2">Atendimento</p>
                  <p className="text-gray-300 font-light text-sm">Somente com hora marcada</p>
                  <p className="text-gray-500 text-xs mt-1 font-light">Agende pelo WhatsApp</p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={16} className="text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-white font-semibold tracking-widest uppercase text-xs mb-2">WhatsApp</p>
                  <a
                    href={wppLink(WHATSAPP_1)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-[#c9a84c] transition-colors text-sm font-light"
                  >
                    (11) 94800-0961
                  </a>
                  <a
                    href={wppLink(WHATSAPP_2)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-[#c9a84c] transition-colors text-sm font-light mt-1"
                  >
                    (11) 98549-4595
                  </a>
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-[#0f0f0f] border border-white/10 p-10 flex flex-col items-center justify-center text-center gap-6">
              <div className="w-16 h-px bg-[#c9a84c]" />
              <h3 className="text-2xl font-bold tracking-wide uppercase">
                Pronta para se Transformar?
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Venha fazer um orçamento, conhecer nosso espaço e descobrir por que tantas 
                famílias escolhem o Espaço Loyal.
              </p>
              <div className="flex flex-col gap-3 w-full">
                <a
                  href={wppLink(WHATSAPP_1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-[#c9a84c] text-black text-sm font-semibold tracking-widest uppercase hover:bg-[#e0bf6a] transition-all duration-300 text-center"
                >
                  Falar pelo WhatsApp
                </a>
                <a
                  href={wppLink(WHATSAPP_2)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 border border-white/20 text-white text-sm font-light tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300 text-center"
                >
                  Outro Número
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a0a0a] border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-[10px] tracking-[0.35em] text-[#c9a84c] uppercase font-light">Espaço</p>
            <p className="text-lg font-bold tracking-[0.18em] text-white uppercase">Loyal</p>
            <p className="text-gray-600 text-xs font-light mt-1">Av. Nossa Senhora da Assunção, 54 · Jardim Bonfiglioli</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[#c9a84c] transition-colors text-sm font-light"
            >
              <Instagram size={16} />
              <span>@espacoloyal</span>
            </a>
          </div>

          <p className="text-gray-700 text-xs font-light">
            &copy; {new Date().getFullYear()} Espaço Loyal. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
