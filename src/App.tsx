import React, { useState } from 'react';
import { ArrowRight, Instagram, Linkedin, Youtube, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    navigate('/curso');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Academia Lendár[IA]</div>
        <button 
          onClick={() => navigate('/curso')}
          className="bg-[#C5B685] text-black px-6 py-2 rounded-full hover:bg-[#b5a675] transition"
        >
          Inscreva-se
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 border border-[#C5B685] rounded-full text-sm mb-8">
            5 Negócios com IA
          </div>
          
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Saiba quais são os 5 negócios em alta com IA e como começar.
          </h1>
          
          <p className="text-gray-400 text-xl mb-8">
            Nessa aula gratuita você irá aprender de uma maneira simples e prática como a
            Inteligência Artificial pode transformar seu futuro profissional. ↓
          </p>

          <div className="flex items-center gap-2 mb-12">
            <div className="flex -space-x-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black" />
              ))}
            </div>
            <div>
              <span className="font-bold">+10 Mil</span>
              <div className="text-xs text-gray-400">pessoas já assistiram</div>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Nome*</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg border border-gray-800 focus:border-[#C5B685] focus:outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-1">E-mail*</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg border border-gray-800 focus:border-[#C5B685] focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm text-gray-400 mb-1">WhatsApp com DDD*</label>
              <input
                type="tel"
                id="whatsapp"
                required
                className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg border border-gray-800 focus:border-[#C5B685] focus:outline-none"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#C5B685] text-black font-medium py-3 rounded-lg hover:bg-[#b5a675] transition flex items-center justify-center gap-2"
            >
              Quero participar
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-gray-400 text-center">
              Ao se cadastrar você concorda com os nossos Termos de Uso e Políticas de Privacidade.
            </p>
          </form>
        </div>
      </section>

      {/* Twitter Post Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-[#1A1A1A] rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-600"></div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Alan Nicolas</span>
                <span className="text-blue-400">✓</span>
                <span className="text-gray-400">@aalannicolas</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-200">
            <p>A inteligência artificial está transformando a maneira como negócios são criados e escalados, abrindo novas oportunidades para quem souber aproveitá-las.</p>
            <p>Empresas e empreendedores estão se movimentando para essa revolução, e quem souber aplicar IA nos negócios sairá na frente.</p>
            <p>Depois de estudar a fundo esse mercado, descobri os melhores modelos de negócios para aplicar IA de forma prática e lucrativa.</p>
            <p>Agora, vou compartilhar esse conhecimento em 5 aulas gratuitas, onde você aprenderá como estruturar e crescer um negócio baseado em inteligência artificial.</p>
          </div>
          
          <button 
            onClick={() => navigate('/curso')}
            className="w-full bg-[#C5B685] text-black font-medium py-3 rounded-lg hover:bg-[#b5a675] transition mt-6"
          >
            Quero acessar as aulas gratuitas
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Quem é Alan Nicolas</h2>
            <p className="text-gray-400 mb-6">
              Empresário, referência no mercado digital e especialista em IA para negócios, Alan Nicolas está redefinindo como pessoas e empresas interagem e se beneficiam da inteligência artificial na vida cotidiana. Sua habilidade em construir e liderar empresas rumo ao sucesso reflete sua visão de que a tecnologia, quando usada corretamente, pode ser uma poderosa alavanca para crescimento pessoal, profissional e financeiro.
            </p>
            <p className="text-gray-400">
              Fundador da Academia Lendár[IA], Alan se destaca por sua abordagem focada em fundamentos. Ele acredita firmemente que a compreensão profunda dos princípios básicos é essencial para maximizar o potencial da inteligência artificial. Para ele, não se trata apenas de dominar as ferramentas tecnológicas, hacks ou atalhos, mas de entender os alicerces sobre os quais essas ferramentas são construídas e principalmente como aplicá-las de forma inteligente no dia a dia.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80"
              alt="Alan Nicolas"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Cadastre-se agora mesmo, é grátis!</h2>
          <p className="text-xl text-gray-400 mb-8">
            Nessas 5 aulas gratuitas, você descobrirá como usar a IA para criar, estruturar e expandir um negócio lucrativo, aproveitando ao máximo essa revolução no mercado.
          </p>
          <button 
            onClick={() => navigate('/curso')}
            className="bg-[#C5B685] text-black px-8 py-3 rounded-lg hover:bg-[#b5a675] transition text-lg font-medium"
          >
            Quero Acessar as Aulas
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            Academia Lendár[IA] © 2024 - All rights reserved
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;