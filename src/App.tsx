import React from 'react';
import { 
  Heart, 
  Star, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Gift, 
  Users, 
  Sparkles, 
  ArrowRight,
  Download,
  Shield,
  MessageCircle,
  Mail,
  Facebook,
  Instagram
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-50">
      {/* 1. Bloco Vender Sozinho */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-rose-100 to-purple-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Produtiva sim. Sobrecarregada, nunca mais.
            Transforme sua rotina em uma 
            <span className="text-rose-500"> jornada de equilíbrio </span> 
            sem se esgotar
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Transforme sua rotina com leveza, foco e bem-estar emocional.
             Descubra o método que ajuda mulheres a serem mais organizadas sem se perderem de si               mesmas.
          </p>
          <div className="mb-10">
            <div className="w-64 h-80 mx-auto rounded-lg shadow-2xl overflow-hidden border-4 border-white">
              <img 
                src="https://i.ibb.co/MDhfgsyP/1750861765.png" 
                alt="Jornada da Produtividade Consciente - E-book"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        
        </div>
      </section>

      {/* 2. Bloco Depoimentos */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Veja o que outras mulheres estão dizendo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-rose-50 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Amanda Ribeiro</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Finalmente encontrei um método que funciona! Não é mais uma lista impossível de tarefas. 
                É um caminho gentil para organizar minha vida sem culpa. Minha ansiedade diminuiu muito!"
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Juliana Mello</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Como mãe de dois filhos, achava impossível me organizar. Esse e-book me ensinou a criar 
                uma rotina que flui naturalmente. Agora tenho tempo até para mim mesma!"
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Camila Duarte</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "A procrastinação era meu maior inimigo. Com as técnicas do e-book, aprendi a ser 
                produtiva sem me cobrar tanto. Minha autoestima melhorou junto!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bloco Dor Latente Principal */}
      <section className="py-16 px-4 bg-gradient-to-br from-rose-100 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Você se reconhece nessas situações?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-rose-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700">
                  Você fica o dia todo ocupada, mas sente que não saiu do lugar
                </p>
              </div>
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-rose-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700">
                  Carrega uma culpa constante por não dar conta de tudo que "deveria" fazer
                </p>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-rose-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700">
                  Cuida de todo mundo, mas esquece de cuidar de você mesma
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Sparkles className="w-6 h-6 text-purple-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700">
                  Sente que sua energia emocional está sempre no vermelho
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700">
                  Tenta seguir métodos de produtividade "tradicionais" mas não consegue manter
                </p>
              </div>
              <div className="flex items-start">
                <BookOpen className="w-6 h-6 text-purple-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700">
                  Sonha com uma rotina organizada, mas sem perder a espontaneidade
                </p>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-600 mt-12 italic">
            "Você não está sozinha. Milhares de mulheres vivem essa sobrecarga silenciosa todos os dias. 
            Mas existe um caminho diferente."
          </p>
        </div>
      </section>

    {/* 4. Bloco Transição da Dor para Solução */}
<section className="py-16 px-4 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
      E se eu te disser que existe uma alternativa?
    </h2>
    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
      Um método criado especialmente para mulheres que querem se organizar sem perder a leveza, 
      ser produtivas sem se esgotar, e cuidar de tudo (incluindo de si mesmas) com mais fluidez.
    </p>
    <div className="bg-gradient-to-r from-rose-50 to-purple-50 p-8 rounded-2xl mb-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Apresento a você: Jornada da Produtividade Consciente
      </h3>
      <p className="text-lg text-gray-600">
        Não é mais um método rígido ou mágico. É um guia prático e acolhedor para transformar 
        sua relação com o tempo, as tarefas e, principalmente, com você mesma.
      </p>
    </div>

    {/* Imagem após o texto */}
    <img 
      src="https://i.ibb.co/1GP8hPrN/X-NCRr0by.png" 
      alt="Jornada da Produtividade Consciente" 
      className="mx-auto rounded-xl shadow-xl max-w-full h-auto"
    />
  </div>
</section>

      {/* 5. Bloco Passo a Passo da Dor para Solução */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Como você vai sair do caos para o equilíbrio
          </h2>
          <div className="space-y-8">
            <div className="flex items-start md:items-center">
              <div className="bg-rose-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Organização Semanal Intuitiva</h3>
                <p className="text-gray-600">
                  Aprenda a planejar sua semana de forma flexível, respeitando seus ciclos de energia 
                  e prioridades reais.
                </p>
              </div>
            </div>
            
            <div className="flex items-start md:items-center">
              <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Gestão do Tempo com Autocuidado</h3>
                <p className="text-gray-600">
                  Descubra como incluir momentos para você na rotina sem culpa, transformando 
                  autocuidado em prioridade.
                </p>
              </div>
            </div>
            
            <div className="flex items-start md:items-center">
              <div className="bg-rose-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Vencendo a Procrastinação Gentilmente</h3>
                <p className="text-gray-600">
                  Técnicas comprovadas para superar a procrastinação sem autocobrança excessiva, 
                  criando momentum natural.
                </p>
              </div>
            </div>
            
            <div className="flex items-start md:items-center">
              <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Empoderamento através da Consistência</h3>
                <p className="text-gray-600">
                  Como criar hábitos duradouros que se adaptam à sua vida real, não a uma vida perfeita 
                  que só existe no Instagram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bloco Tudo o que você vai receber + Bônus */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Tudo o que você vai receber
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl">
              <BookOpen className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">E-book Principal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  80+ páginas de conteúdo prático
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Métodos testados e aprovados
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Linguagem acolhedora e feminina
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Exercícios práticos para aplicar
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <Gift className="w-8 h-8 text-purple-500 mr-3" />
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-sm">BÔNUS 1</span>
                </div>
                <h4 className="font-semibold text-gray-800">Planner Semanal</h4>
                <p className="text-gray-600 text-sm">Template para organizar sua semana</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <Gift className="w-8 h-8 text-amber-500 mr-3" />
                  <span className="bg-amber-500 text-white px-2 py-1 rounded-full text-sm">BÔNUS 2</span>
                </div>
                <h4 className="font-semibold text-gray-800">Checklist Diário de Rotina</h4>
                <p className="text-gray-600 text-sm">Guia prático para o dia a dia</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <Gift className="w-8 h-8 text-green-500 mr-3" />
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">BÔNUS 3</span>
                </div>
                <h4 className="font-semibold text-gray-800">Mini Guia Antiprocrastinação</h4>
                <p className="text-gray-600 text-sm">Técnicas rápidas para sair da inércia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bloco Para quem serve */}
      <section className="py-16 px-4 bg-gradient-to-br from-rose-100 to-purple-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Este e-book é perfeito para você se:
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Heart className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Você se sente constantemente sobrecarregada
              </h3>
              <p className="text-gray-600">
                E quer aprender a gerenciar suas responsabilidades sem se esgotar emocionalmente.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Users className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Você é mãe tentando conciliar tudo
              </h3>
              <p className="text-gray-600">
                Família, trabalho, casa e ainda sobrar tempo para você mesma.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Sparkles className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Você quer organização sem perder a leveza
              </h3>
              <p className="text-gray-600">
                Buscando métodos que se adaptem à sua personalidade, não o contrário.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <CheckCircle className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Você já tentou outros métodos
              </h3>
              <p className="text-gray-600">
                Mas não conseguiu manter por serem muito rígidos ou impessoais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Bloco Ancoragem com preço */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Todo esse conteúdo vale muito mais...
          </h2>
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-2xl mb-8">
            <p className="text-lg text-gray-600 mb-4">
              Se você fosse contratar uma consultora em produtividade para criar um plano personalizado, 
              pagaria facilmente:
            </p>
            <div className="text-4xl font-bold text-gray-400 line-through mb-2">R$ 297</div>
            <p className="text-gray-500">Valor de uma consultoria individual</p>
          </div>
          
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-8 rounded-2xl">
            <p className="text-xl mb-4">Mas hoje, seu investimento é de apenas:</p>
            <div className="text-5xl font-bold mb-2">R$ 37 </div>
            <p className="text-lg opacity-90">
              Menos que o valor de um almoço fora - um investimento em você que durará para sempre
            </p>
          </div>
        </div>
      </section>

    {/* 9. Bloco Valor (botão para comprar) */}
<section className="py-12 px-4 bg-gradient-to-r from-rose-100 to-purple-100">
  <div className="max-w-2xl mx-auto text-center">
    <a
      href="https://pay.hotmart.com/M99700450A"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => fbq('track', 'InitiateCheckout')}
      className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-16 py-6 rounded-full text-2xl font-bold hover:from-rose-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl inline-block"
    >
      <Download className="inline-block mr-3 w-6 h-6" />
      Sim, quero transformar minha rotina!
    </a>
    <p className="text-gray-600 mt-4">
      <Shield className="inline-block w-4 h-4 mr-1" />
      Acesso imediato após a compra
    </p>
  </div>
</section>

    {/* 10. Bloco Conversa Séria */}
<section className="py-16 px-4 bg-gray-900 text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-8">
      Vamos ter uma conversa séria por um minuto?
    </h2>
    <p className="text-xl mb-6 leading-relaxed">
      Se você continuar fazendo as coisas do mesmo jeito, vai continuar se sentindo do mesmo jeito.
    </p>
    <p className="text-lg mb-6 text-gray-300 leading-relaxed">
      A sobrecarga não vai diminuir magicamente. A culpa não vai desaparecer sozinha. 
      A sensação de estar sempre correndo atrás não vai parar por conta própria.
    </p>
    <p className="text-xl mb-8 text-rose-300 leading-relaxed">
      Mas você tem uma escolha agora. Pode investir em você mesma e no seu bem-estar. 
      Pode escolher um caminho diferente.
    </p>
    <p className="text-lg text-gray-300 mb-8">
      Este não é apenas um PDF. É um investimento no seu autocuidado, na sua paz mental, 
      na sua qualidade de vida.
    </p>

    {/* Imagem ao final do bloco */}
    <img
      src="https://i.ibb.co/Mkh0P1kY/20250513-1734-Antes-e-Depois-simple-compose-01jv5nn6bafgdb65k199477c1k.png"
      alt="Antes e depois - Jornada da Produtividade"
      className="mx-auto rounded-xl shadow-xl max-w-full h-auto"
    />
  </div>
</section>

      {/* 11. Bloco Autoridade */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Quem criou este método para você
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-gradient-to-br from-rose-200 to-purple-200 rounded-full flex items-center justify-center">
              <Heart className="w-16 h-16 text-rose-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Clara Martins</h3>
              <p className="text-lg text-gray-600 mb-4">
                Mãe de duas meninas, empreendedora digital e especialista em produtividade consciente 
                e bem-estar emocional feminino.
              </p>
              <p className="text-gray-600 mb-4">
                Após anos lutando contra métodos de produtividade que não funcionavam para mulheres reais, 
                Clara desenvolveu uma abordagem única que combina eficiência com autocuidado.
              </p>
              <p className="text-gray-600">
                Sua missão é ajudar mulheres a encontrarem o equilíbrio entre ser produtiva e ser humana, 
                sem sacrificar uma pela outra.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* 12. Bloco Valor (botão comprar) */}
<section className="py-12 px-4 bg-gradient-to-r from-purple-100 to-rose-100">
  <div className="max-w-2xl mx-auto text-center">
    <a
      href="https://pay.hotmart.com/M99700450A"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => fbq('track', 'InitiateCheckout')}
      className="bg-gradient-to-r from-purple-500 to-rose-500 text-white px-16 py-6 rounded-full text-2xl font-bold hover:from-purple-600 hover:to-rose-600 transition-all transform hover:scale-105 shadow-2xl inline-block"
    >
      <ArrowRight className="inline-block mr-3 w-6 h-6" />
      Quero começar agora
    </a>
    <p className="text-gray-600 mt-4">
      <CheckCircle className="inline-block w-4 h-4 mr-1" />
      Download imediato • Garantia de 7 dias
    </p>
  </div>
</section>

      {/* 13. Bloco FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            <div className="bg-rose-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <MessageCircle className="inline-block w-5 h-5 mr-2 text-rose-500" />
                Para quem é esse e-book?
              </h3>
              <p className="text-gray-600">
                Para mulheres que se sentem sobrecarregadas e querem organizar sua rotina de forma gentil e sustentável, 
                sem métodos rígidos que não se adaptam à vida real.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <Clock className="inline-block w-5 h-5 mr-2 text-purple-500" />
                Quanto tempo para ver resultados?
              </h3>
              <p className="text-gray-600">
                Você pode começar a aplicar as técnicas imediatamente. Muitas mulheres relatam mudanças 
                na primeira semana, com resultados mais consistentes em 21-30 dias.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <Download className="inline-block w-5 h-5 mr-2 text-amber-500" />
                Como recebo o material?
              </h3>
              <p className="text-gray-600">
                Após a compra, você recebe por email o link para download do e-book e todos os bônus. 
                O acesso é imediato e vitalício.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <Shield className="inline-block w-5 h-5 mr-2 text-green-500" />
                Tem garantia?
              </h3>
              <p className="text-gray-600">
                Sim! Você tem 7 dias para testar o conteúdo. Se não ficar satisfeita, devolvemos 100% do seu dinheiro.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <CheckCircle className="inline-block w-5 h-5 mr-2 text-blue-500" />
                O conteúdo é realmente prático?
              </h3>
              <p className="text-gray-600">
                Absolutamente! Cada capítulo tem exercícios práticos, templates e ferramentas que você pode 
                aplicar imediatamente na sua rotina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Bloco Rodapé */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-4">Jornada da Produtividade Consciente</h3>
            <p className="text-gray-400 mb-6">
              Transformando a vida de mulheres através de métodos gentis e eficazes
            </p>
            <div className="flex justify-center space-x-6">
              <Mail className="w-6 h-6 text-gray-400 hover:text-rose-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-rose-400 cursor-pointer transition-colors" />
              <Facebook className="w-6 h-6 text-gray-400 hover:text-rose-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8">
              <a href="#" className="hover:text-rose-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Contato</a>
            </div>
            <p className="mt-4">
              © 2024 Clara Martins. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
