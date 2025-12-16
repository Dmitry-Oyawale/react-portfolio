import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setTick((t) => t + 1); 
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity transition-transform duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0 fade-trigger" : "opacity-0 translate-y-10"
      }`}
      data-tick={tick}
    >
      {children}
    </div>
  );
}
