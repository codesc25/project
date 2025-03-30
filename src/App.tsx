import React, { useEffect, useState } from 'react';
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Calendar, 
  Clock, 
  Brain,
  FileSpreadsheet
} from 'lucide-react';

interface CounterData {
  alunos: number;
  disciplinas: number;
  notas: number;
  boletins: number;
}

function App() {
  const [counters, setCounters] = useState<CounterData>({
    alunos: 0,
    disciplinas: 0,
    notas: 0,
    boletins: 0
  });

  useEffect(() => {
    const loadCounters = () => {
      const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
      const disciplinas = JSON.parse(localStorage.getItem('disciplinas') || '[]');
      const notas = JSON.parse(localStorage.getItem('notas') || '[]');
      const boletins = JSON.parse(localStorage.getItem('boletins') || '[]');
      
      const alunosComNotas = new Set(notas.map((nota: any) => nota.aluno)).size;

      setCounters({
        alunos: alunos.length,
        disciplinas: disciplinas.length,
        notas: alunosComNotas,
        boletins: boletins.length
      });
    };

    loadCounters();
  }, []);

  const cards = [
    {
      title: 'Alunos',
      description: 'Cadastro e gerenciamento de alunos',
      icon: <Users className="w-8 h-8" />,
      count: counters.alunos,
      href: 'https://educ.nekoweb.org/sisjanu/alunos.html',
      color: 'bg-blue-500'
    },
    {
      title: 'Disciplinas',
      description: 'Listagem e cadastro de disciplinas',
      icon: <BookOpen className="w-8 h-8" />,
      count: counters.disciplinas,
      href: 'https://educ.nekoweb.org/sisjanu/disciplinas.html',
      color: 'bg-green-500'
    },
    {
      title: 'Notas',
      description: 'Lançamento e consulta de notas',
      icon: <GraduationCap className="w-8 h-8" />,
      count: counters.notas,
      href: 'https://educ.nekoweb.org/sisjanu/notas.html',
      color: 'bg-purple-500'
    },
    {
      title: 'Boletim',
      description: 'Geração de boletins individuais',
      icon: <FileText className="w-8 h-8" />,
      count: counters.boletins,
      href: 'https://educ.nekoweb.org/sisjanu/boletim.html',
      color: 'bg-orange-500'
    },
    {
      title: 'Boletim com AI',
      description: 'Geração de boletins com inteligência artificial',
      icon: <Brain className="w-8 h-8" />,
      href: 'https://educ.nekoweb.org/sisjanu/bol.html',
      color: 'bg-pink-500'
    },
    {
      title: 'Agenda',
      description: 'Eventos da Escola',
      icon: <Calendar className="w-8 h-8" />,
      href: 'https://educ.nekoweb.org/sisjanu/agenda.html',
      color: 'bg-indigo-500'
    },
    {
      title: 'Horário de Aulas',
      description: 'Grade horária escolar',
      icon: <Clock className="w-8 h-8" />,
      href: 'https://educ.nekoweb.org/sisjanu/horario.html',
      color: 'bg-teal-500'
    },
    {
      title: 'Recursos com AI',
      description: 'Geradores e ferramentas com IA',
      icon: <FileSpreadsheet className="w-8 h-8" />,
      href: 'https://educ.nekoweb.org/geradores/home.html',
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://educ.nekoweb.org/sistemajanuario/Design%20sem%20nome.png"
              alt="Logo da Escola"
              className="w-32 h-32 rounded-full shadow-lg"
            />
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">
                Escola Januário E. de Lima
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Sistema Simples de Gestão de Alunos
              </p>
              <p className="text-sm text-gray-600">
                Coordenação Pedagógica
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                className="transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl">
                  <div className={`${card.color} p-4 flex items-center justify-center`}>
                    <div className="text-white">{card.icon}</div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {card.description}
                    </p>
                    {typeof card.count === 'number' && (
                      <p className="mt-2 text-2xl font-semibold text-gray-900">
                        {card.count}
                      </p>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Desenvolvido por Sérgio Araújo 2025 | CC 4.0
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;