import React from 'react';
import { CheckCircle, PlayCircle } from 'lucide-react';

function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-8" />
          <h1 className="text-4xl font-bold mb-6">
            Parabéns! Seu Acesso Foi Liberado
          </h1>
          <p className="text-xl mb-12 text-blue-200">
            Assista agora à primeira aula e descubra como a IA pode transformar sua vida
          </p>

          <div className="bg-white/10 p-8 rounded-lg backdrop-blur">
            <div className="aspect-video mb-8 bg-black/50 rounded-lg flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-blue-400" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">
              Aula 1: Introdução aos Negócios com IA
            </h2>
            <p className="text-blue-200">
              Nesta aula, você vai descobrir os fundamentos essenciais para começar
              seu negócio com Inteligência Artificial e as principais oportunidades
              do mercado atual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;