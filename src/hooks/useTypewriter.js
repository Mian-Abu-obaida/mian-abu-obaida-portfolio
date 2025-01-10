// src/hooks/useTypewriter.js
import { useState, useEffect } from 'react';

const useTypewriter = ({ words = [], typeSpeed = 100, backSpeed = 50, backDelay = 1000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [delta, setDelta] = useState(typeSpeed);

  useEffect(() => {
    let timer;

    const tick = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting;

      if (shouldDelete) {
        setText(prev => prev.slice(0, -1));
        setDelta(backSpeed);
      } else {
        setText(currentWord.slice(0, text.length + 1));
        setDelta(typeSpeed);
      }

      if (!shouldDelete && text === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
          setDelta(backDelay);
        }, backDelay);
      }

      if (shouldDelete && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setDelta(500);
      }
    };

    timer = setTimeout(tick, delta);

    return () => clearTimeout(timer);
  }, [text, delta, wordIndex, isDeleting, words, typeSpeed, backSpeed, backDelay]);

  return text;
};
export default useTypewriter;