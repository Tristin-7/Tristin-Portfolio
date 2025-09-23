
'use client';

import React, { useRef, useEffect, useState } from 'react';

export function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('hsl(210 90% 55%)');

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const computedStyle = getComputedStyle(document.documentElement);
      const hsl = computedStyle.getPropertyValue('--primary').trim();
      if (hsl) {
        const [h, s, l] = hsl.split(' ').map(parseFloat);
        setPrimaryColor(`hsl(${h} ${s}% ${l}%)`);
      }
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    const columns = Math.floor(width / 20);
    const drops = Array(columns).fill(1);
    const chars = '01';

    function draw() {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = primaryColor;
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient, primaryColor]);
  
  if (!isClient) return null;

  return <canvas id="binary-rain-canvas" ref={canvasRef}></canvas>;
}
