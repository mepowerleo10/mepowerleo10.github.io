import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterEffectProps {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  className,
  cursorClassName,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1000,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex].text;

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className={cn('flex justify-center lg:justify-start my-6', className)}>
      <span className={cn('text-muted-foreground', words[currentWordIndex].className)}>
        {currentText}
      </span>
      <span
        className={cn(
          'inline-block bg-primary w-0.5 h-6 ml-1 transition-opacity duration-300',
          blink ? 'opacity-100' : 'opacity-0',
          cursorClassName
        )}
      />
    </div>
  );
};

export default TypewriterEffect;
