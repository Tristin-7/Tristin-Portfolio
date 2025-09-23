
'use client';

import React, { useState, useEffect, useCallback } from 'react';

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const binary = '01';
const characters = katakana + binary;

const randomChar = () => characters[Math.floor(Math.random() * characters.length)];

interface Particle {
  id: number;
  x: number;
  y: number;
  char: string;
  opacity: number;
  vy: number;
}

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });

    setParticles(prev => {
      const newParticle: Particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        char: randomChar(),
        opacity: 1,
        vy: 1 + Math.random() * 2,
      };
      return [...prev, newParticle].slice(-50);
    });
  }, []);

  useEffect(() => {
    if (isClient) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isClient, handleMouseMove]);

  useEffect(() => {
    let animationFrameId: number;
    const updateParticles = () => {
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          y: p.y + p.vy,
          opacity: p.opacity - 0.02,
        })).filter(p => p.opacity > 0)
      );
      animationFrameId = requestAnimationFrame(updateParticles);
    };

    animationFrameId = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  
  if (!isClient) {
    return null;
  }

  return (
    <>
      <div 
        className="custom-cursor"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <div className="particle-container">
        {particles.map(p => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: p.x,
              top: p.y,
              opacity: p.opacity,
              color: 'hsl(var(--primary))',
            }}
          >
            {p.char}
          </span>
        ))}
      </div>
    </>
  );
}
