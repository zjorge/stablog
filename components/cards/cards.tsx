'use client';

import { Card } from '@heroui/react';
import { mockCards } from './cards.data';

export function CardsSection() {
    // Tailwind-safe background variants
    const safeBg = {
      'indigo-purple': 'from-indigo-500 to-purple-600',
      'blue-cyan': 'from-blue-500 to-cyan-600',
      'emerald-lime': 'from-emerald-500 to-lime-600',
    };
  
    return (
      <section className="grid grid-cols-12 justify-center px-4 md:px-0 mt-20">
        <div className="col-start-2 col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockCards.map(({ id, title, body, gradient }) => (
            <Card
                key={id}
                className={`bg-gradient-to-br ${gradient} text-white shadow-md rounded-2xl p-6`}>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm opacity-90">{body}</p>
            </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }