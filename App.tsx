
import React from 'react';
import { Logo } from './components/Logo';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  // Paleta de cores extraída diretamente da imagem da fachada
  const brandWood = "#D4B996";
  const brandDeepBrown = "#422F24";

  const handleWhatsAppAction = (message: string) => {
    const phoneNumber = "5511956365518";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-[#422F24] selection:text-white bg-[#0f172a]">
      {/* Navbar */}
      <nav className="fixed w-full z-40 glass-morphism">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="p-1 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#D4B996]/50 transition-colors">
                <Logo className="w-14 h-14 text-[#D4B996]" color="#D4B996" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-black tracking-tighter text-white uppercase leading-none">HAUS 3D</span>
                <span className="text-[10px] text-[#D4B996] font-bold tracking-[0.2em] uppercase mt-1">Escola de Fabricação</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#home" className="text-sm font-bold text-slate-300 hover:text-[#D4B996] transition-colors uppercase tracking-widest">Início</a>
              <a href="#cursos" className="text-sm font-bold text-slate-300 hover:text-[#D4B996] transition-colors uppercase tracking-widest">Cursos</a>
              <a href="#sobre" className="text-sm font-bold text-slate-300 hover:text-[#D4B996] transition-colors uppercase tracking-widest">A Unidade</a>
              <a href="#contato" className="text-sm font-bold text-slate-300 hover:text-[#D4B996] transition-colors uppercase tracking-widest">Contato</a>
            </div>
            <div className="flex items-center gap-4">
               <button 
                onClick={() => handleWhatsAppAction("Olá! Gostaria de informações sobre as matrículas abertas da HAUS 3D.")}
                className="bg-[#422F24] hover:bg-[#D4B996] hover:text-[#422F24] text-white px-6 py-3 rounded-xl text-xs font-black transition-all shadow-[0_0_20px_-5px_rgba(212,185,150,0.3)] hover:shadow-[0_0_30px_-5px_rgba(212,185,150,0.6)] active:scale-95 border border-[#D4B996]/30 uppercase tracking-widest flex items-center gap-2"
              >
                <span>Matrículas Abertas</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#D4B996]/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-slate-500/5 rounded-full blur-[150px] animate-pulse delay-1000"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-[#D4B996]/10 border border-[#D4B996]/20 text-[#D4B996] text-[10px] font-black mb-8 tracking-[0.3em] uppercase">
                A revolução da habitação
              </div>
              <h1 className="font-heading text-6xl lg:text-7xl font-black leading-[1.1] text-white mb-8">
                Escola Técnica de <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4B996] via-white to-[#D4B996] uppercase tracking-tighter">Fabricação Casas 3D</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
                Capacite-se para operar a tecnologia que está reconstruindo o futuro. Do design paramétrico à manufatura robótica de concreto em larga escala.
              </p>
              
              {/* FIXED BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#cursos"
                  className="group bg-[#D4B996] text-[#422F24] hover:bg-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 shadow-[0_10px_40px_-10px_rgba(212,185,150,0.4)] border border-[#422F24]/10 flex items-center justify-center gap-3"
                >
                  <span>Ver Cursos</span>
                  <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </a>
                <button 
                  onClick={() => handleWhatsAppAction("Olá! Gostaria de agendar um tour virtual ou conhecer mais sobre a metodologia HAUS 3D.")}
                  className="group bg-white/5 hover:bg-white/10 text-white hover:text-[#D4B996] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all border border-white/10 backdrop-blur-sm flex items-center justify-center gap-3 hover:border-[#D4B996]/30"
                >
                  <span>Falar com Consultor</span>
                  <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.506-.669-.514-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.084 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </button>
              </div>
            </div>
            <div className="relative group">
                <div className="bg-slate-900 border border-white/10 rounded-[3rem] p-4 shadow-3xl transform rotate-3 hover:rotate-0 transition-transform duration-700 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                        alt="Impressora 3D Industrial" 
                        className="rounded-[2.5rem] w-full h-[450px] object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10">
                        <p className="text-[#D4B996] font-black uppercase tracking-widest text-xs mb-2">Treinamento Industrial</p>
                        <h3 className="text-white text-3xl font-black font-heading tracking-tighter uppercase">Tecnologia Robótica</h3>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </header>

      {/* SEÇÃO DA FACHADA - IMAGEM REAL */}
      <section id="sobre" className="py-24 relative bg-slate-950/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-black text-white mb-6 uppercase tracking-tighter">Nossa Sede</h2>
            <div className="h-1.5 w-32 bg-[#D4B996] mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed font-light">
                O Campus <strong>HAUS 3D</strong> é um centro de excelência em engenharia digital e manufatura robótica.
            </p>
          </div>

          <div className="relative group max-w-6xl mx-auto">
            <div className="absolute -inset-4 bg-[#D4B996]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative rounded-[3rem] overflow-hidden border-2 border-[#D4B996]/30 shadow-2xl bg-slate-900">
              <img 
                src="https://raw.githubusercontent.com/felipecm/haus3d-assets/main/fachada.png" 
                alt="Fachada Escola Técnica Haus 3D" 
                className="w-full h-auto object-cover min-h-[600px] transform group-hover:scale-105 transition-transform duration-[5s]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400";
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="absolute bottom-12 right-12 hidden md:block">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl">
                      <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#422F24] rounded-xl flex items-center justify-center border border-[#D4B996]/30">
                              <Logo color="#D4B996" className="w-6 h-6" />
                          </div>
                          <div>
                              <p className="text-white font-black uppercase tracking-tighter text-lg leading-tight">Unidade Modelo</p>
                              <p className="text-[#D4B996] text-xs font-bold uppercase tracking-widest">Polo São Paulo / Brasil</p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => handleWhatsAppAction("Olá! Gostaria de agendar uma visita técnica guiada na sede da HAUS 3D em São Paulo.")}
              className="group bg-[#D4B996] hover:bg-white text-[#422F24] px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all transform hover:-translate-y-1 shadow-2xl border-2 border-[#422F24]/20 flex items-center gap-4"
            >
              <span>Agendar Visita Guiada</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section id="cursos" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="font-heading text-5xl font-black text-white mb-4 uppercase tracking-tighter">Formações Disponíveis</h2>
            <div className="h-1 w-16 bg-[#D4B996] rounded-full mb-6"></div>
            <p className="text-slate-500 text-lg max-w-2xl font-light italic">"Treinamento intensivo com tecnologia de ponta, preparando você para o mercado que mais cresce na construção civil."</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <CourseCard 
              name="Operador de Impressão 3D"
              duration="18 meses"
              price="Prática em Sede Própria"
              image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
              level="Nível Técnico"
              onAction={() => handleWhatsAppAction("Olá! Gostaria de me inscrever no curso de Operador de Impressão 3D.")}
            />
            <CourseCard 
              name="Arquiteto de Sistemas 3D"
              duration="12 meses"
              price="Híbrido (Design + Campo)"
              image="https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=800"
              level="Avançado"
              onAction={() => handleWhatsAppAction("Olá! Gostaria de me inscrever no curso de Arquiteto de Sistemas 3D.")}
            />
            <CourseCard 
              name="Engenharia de Mix Robótico"
              duration="06 meses"
              price="Especialização em Concreto"
              image="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800"
              level="Especialista"
              onAction={() => handleWhatsAppAction("Olá! Gostaria de me inscrever no curso de Engenharia de Mix Robótico.")}
            />
          </div>
        </div>
      </section>

      {/* Contato Quick Action */}
      <section id="contato" className="py-24 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-white font-black font-heading text-4xl uppercase tracking-tighter mb-8">Ainda tem dúvidas?</h2>
            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl">
                <p className="text-slate-400 mb-8 text-lg">Nossa equipe técnica está pronta para tirar suas dúvidas sobre carreira, tecnologia e mercado de trabalho.</p>
                <button 
                  onClick={() => handleWhatsAppAction("Olá! Tenho algumas dúvidas sobre a carreira em construção 3D e gostaria de falar com um consultor.")}
                  className="bg-[#D4B996] hover:bg-white text-[#422F24] px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all"
                >
                  Falar com Consultor
                </button>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16 mb-20 items-center">
                <div className="flex items-center gap-4">
                    <Logo className="w-16 h-16 text-[#D4B996]" color="#D4B996" />
                    <div className="flex flex-col">
                        <span className="font-heading text-3xl font-black text-white tracking-tighter uppercase leading-none">HAUS 3D</span>
                        <span className="text-[10px] text-slate-500 font-bold tracking-[0.4em] uppercase mt-1">Escola de Fabricação</span>
                    </div>
                </div>
                <div className="flex justify-center gap-10">
                    <a href="#home" className="text-sm font-bold text-slate-500 hover:text-[#D4B996] uppercase tracking-widest transition-colors">Início</a>
                    <a href="#cursos" className="text-sm font-bold text-slate-500 hover:text-[#D4B996] uppercase tracking-widest transition-colors">Cursos</a>
                    <a href="#sobre" className="text-sm font-bold text-slate-500 hover:text-[#D4B996] uppercase tracking-widest transition-colors">Sede</a>
                </div>
                <div className="flex justify-center lg:justify-end gap-6">
                    <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-[#D4B996] hover:border-[#D4B996]/30 transition-all">In</button>
                    <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-[#D4B996] hover:border-[#D4B996]/30 transition-all">Li</button>
                </div>
            </div>
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
                    © 2024 HAUS 3D - ESCOLA TÉCNICA DE FABRICAÇÃO CASAS 3D.
                </p>
                <div className="text-slate-700 text-[9px] font-bold uppercase tracking-widest">
                    Construindo o futuro em camadas.
                </div>
            </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

const CourseCard: React.FC<{ name: string; duration: string; price: string; image: string; level: string; onAction: () => void }> = ({ name, duration, price, image, level, onAction }) => (
  <div className="rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-900/40 group hover:border-[#D4B996]/30 transition-all duration-500 shadow-2xl flex flex-col h-full">
    <div className="h-72 overflow-hidden relative">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
      <div className="absolute top-6 right-6 bg-[#422F24] text-[#D4B996] px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl border border-[#D4B996]/20">
        {level}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
    </div>
    <div className="p-10 flex flex-col flex-grow">
      <h3 className="text-2xl font-black text-white mb-6 leading-tight min-h-[4rem] font-heading uppercase tracking-tight group-hover:text-[#D4B996] transition-colors">{name}</h3>
      <div className="space-y-4 mb-10 flex-grow">
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#D4B996] shadow-[0_0_8px_rgba(212,185,150,0.5)]"></div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Duração: {duration}</span>
        </div>
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#D4B996] shadow-[0_0_8px_rgba(212,185,150,0.5)]"></div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Foco: {price}</span>
        </div>
      </div>
      <button 
        onClick={onAction}
        className="w-full bg-[#422F24]/40 hover:bg-[#422F24] text-[#D4B996] py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] border border-[#D4B996]/20 transition-all shadow-lg active:scale-95"
      >
        Quero me inscrever
      </button>
    </div>
  </div>
);

export default App;
