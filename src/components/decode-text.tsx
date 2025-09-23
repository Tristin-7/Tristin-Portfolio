'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface DecodeTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン01';

export function DecodeText({ text, className, once = true }: DecodeTextProps) {
  const [displayedText, setDisplayedText] = useState(text);
  const [isDecoding, setIsDecoding] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const scramble = () => {
      let frame = 0;
      const frameRate = 2;
      const totalFrames = text.length * frameRate * 1.5;

      const intervalId = setInterval(() => {
        frame++;
        const newText = text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            const progress = (frame - index * frameRate) / frameRate;
            if (progress < 0) return ' ';
            if (progress < 1) return chars[Math.floor(Math.random() * chars.length)];
            return text[index];
          })
          .join('');

        setDisplayedText(newText);

        if (frame >= totalFrames) {
          clearInterval(intervalId);
          setIsDecoding(false);
          setDisplayedText(text);
        }
      }, 30);
    };

    const handleScroll = () => {
      if (elementRef.current && !isDecoding && !(once && hasAnimated.current)) {
        const { top } = elementRef.current.getBoundingClientRect();
        const isInView = top < window.innerHeight * 0.8;

        if (isInView) {
          setIsDecoding(true);
          if(once) hasAnimated.current = true;
          scramble();
        }
      }
    };
    
    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [text, isDecoding, once]);


  return (
    <h2 ref={elementRef} className={cn('font-mono', className)}>
      {displayedText}
    </h2>
  );
}
