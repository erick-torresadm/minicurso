import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ReactPlayer from 'react-player';

const lessons = [
  {
    id: 1,
    title: "Aula 01 - O melhor momento de começar um negócio de Inteligência Artificial",
    videoUrl: "https://www.youtube.com/watch?v=xeXumXHyi3U"
  },
  {
    id: 2,
    title: "Aula 02 - Como vender consultoria de Inteligência Artificial",
    videoUrl: "https://www.youtube.com/watch?v=xeXumXHyi3U"
  },
  {
    id: 3,
    title: "Aula 03 - Como prestar serviços de Inteligência Artificial",
    videoUrl: "https://www.youtube.com/watch?v=xeXumXHyi3U"
  },
  {
    id: 4,
    title: "Aula 04 - Como vender o seu conhecimento de Inteligência Artificial para negócios",
    videoUrl: "https://www.youtube.com/watch?v=xeXumXHyi3U"
  },
  {
    id: 5,
    title: "Aula 05 - Como criar uma Agência de IA (AAA) + IA SaaS",
    videoUrl: "https://www.youtube.com/watch?v=xeXumXHyi3U"
  }
];

function CoursePage() {
  const [currentLesson, setCurrentLesson] = useState(lessons[0]);

  const handlePreviousLesson = () => {
    if (currentLesson.id > 1) {
      setCurrentLesson(lessons[currentLesson.id - 2]);
    }
  };

  const handleNextLesson = () => {
    if (currentLesson.id < lessons.length) {
      setCurrentLesson(lessons[currentLesson.id]);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-[#1A1A1A] border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Academia Lendár[IA]</div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Video Player */}
          <div className="aspect-video bg-[#1A1A1A] rounded-lg mb-6 overflow-hidden">
            <ReactPlayer
              url={currentLesson.videoUrl}
              width="100%"
              height="100%"
              controls
              playing
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    rel: 0
                  }
                }
              }}
            />
          </div>

          {/* Video Info */}
          <div className="bg-[#1A1A1A] rounded-lg p-6">
            <h1 className="text-2xl font-bold text-white mb-4">{currentLesson.title}</h1>
            <div className="flex justify-between items-center mt-6">
              <button 
                onClick={handlePreviousLesson}
                className={`flex items-center gap-2 transition ${
                  currentLesson.id === 1
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-gray-400 hover:text-white'
                }`}
                disabled={currentLesson.id === 1}
              >
                <ArrowLeft className="w-5 h-5" />
                Anterior
              </button>
              <button 
                onClick={handleNextLesson}
                className={`flex items-center gap-2 transition ${
                  currentLesson.id === lessons.length
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-gray-400 hover:text-white'
                }`}
                disabled={currentLesson.id === lessons.length}
              >
                Próxima
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-[#1A1A1A] rounded-lg p-4">
            <h2 className="text-lg font-bold text-white mb-4">Módulos do Curso</h2>
            <div className="space-y-2">
              {lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => setCurrentLesson(lesson)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    currentLesson.id === lesson.id
                      ? 'bg-[#C5B685] text-black'
                      : 'text-gray-400 hover:bg-gray-800'
                  }`}
                >
                  {lesson.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;