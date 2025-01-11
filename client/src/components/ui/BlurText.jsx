import { useState, useEffect, useRef } from 'react';

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top', // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'ease-out',
  onAnimationComplete,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const [mounted, setMounted] = useState(false); // Ensure component is mounted before applying transitions

  const defaultFrom =
    direction === 'top'
      ? 'filter blur-sm opacity-0 transform -translate-y-12'
      : 'filter blur-sm opacity-0 transform translate-y-12';

  const defaultTo = [
    direction === 'top'
      ? 'filterc text-4xl md:text-5xl font-bold mb-3 leading-tight transform translate-y-1'
      : 'filter  text-4xl md:text-5xl font-bold mb-3 leading-tight transform -translate-y-1',
    'filter text-4xl md:text-5xl font-bold mb-3 leading-tight  transform translate-y-0',
  ];

  // Intersection Observer for triggering animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Ensure animations only run after component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <h1 ref={ref} className={` ${className} flex  flex-wrap`}>
      {elements.map((el, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${mounted && inView ? animationTo || defaultTo : animationFrom || defaultFrom}`}
          style={{
            transitionDelay: `${index * delay}ms`,
          }}
        >
          {el ===' ' ? ' ' : el}
          {animateBy === 'words' && index < elements.length - 1 && ' '}
        </span>
      ))}
    </h1>
  );
};

export default BlurText;
