'use client';

import { Button } from '@heroui/react';

export function Hero() {
  return (
    <section className="py-20 text-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Welcome to the Future of Publishing
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Long-form, self-hydrating, token-aware, edge-ready content.
      </p>
      <div className="flex justify-center gap-4">
        <Button variant="primary" size="md">
          Explore Posts
        </Button>
        <Button variant="secondary" size="md">
          About the Project
        </Button>
      </div>
    </section>
  );
}