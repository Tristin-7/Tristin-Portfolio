'use client';

import React, { useEffect, useRef, useState } from 'react';

const MatrixAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    const fps = 15;
    const interval = 1000 / fps;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:",.<>?';
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1).map(() => Math.floor(Math.random() * canvas.height));
    let primaryH, primaryS, primaryL;

    const getPrimaryColor = () => {
        const style = getComputedStyle(document.documentElement);
        const primaryColor = style.getPropertyValue('--primary').trim();
        [primaryH, primaryS, primaryL] = primaryColor.split(' ').map(parseFloat);
    };

    getPrimaryColor();


    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = `hsl(${primaryH}, ${primaryS}%, ${primaryL}%)`;
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime;
      if (deltaTime > interval) {
        lastTime = timestamp - (deltaTime % interval);
        draw();
      }
      animationFrameId = window.requestAnimationFrame(animate);
    };

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.attributeName === 'data-theme') {
                getPrimaryColor();
            }
        }
    });

    observer.observe(document.documentElement, { attributes: true });


    animate(0);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full" />;
};

export default MatrixAnimation;
