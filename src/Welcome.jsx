import React from 'react';
import { Star } from 'lucide-react';

const Welcome = ({ onEnter, onStart }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center z-50">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-3xl mx-4">
        <div className="flex items-center gap-4 mb-4">
          <Star className="w-12 h-12 text-yellow-400" />
          <h1 className="text-4xl font-bold text-gray-900">Encuentra las Diferencias</h1>
        </div>

        <p className="text-gray-700 mb-6">Bienvenido/a — pon a prueba tu agudeza visual. Busca las diferencias entre dos imágenes antes de que se acabe el tiempo.</p>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Cómo jugar</h3>
            <ul className="text-gray-600 list-disc pl-5 space-y-2">
              <li>Encuentra todas las diferencias entre la imagen original y la modificada.</li>
              <li>Ganas puntos por cada acierto y por tiempo restante.</li>
              <li>Usa el temporizador y las pistas para optimizar tu puntuación.</li>
            </ul>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <div className="text-2xl font-bold text-purple-700">Nivel Actual</div>
              <div className="text-sm text-gray-600">Parque al Atardecer — 5 diferencias</div>
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={() => { onStart?.(); }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Comenzar Juego
              </button>

              <button
                onClick={() => { onEnter?.(); }}
                className="px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 font-semibold hover:shadow"
              >
                Entrar al sitio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
