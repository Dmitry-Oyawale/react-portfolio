import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [tick, setTick] = useState(0);
  const wasVisible = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        if (!wasVisible.current && ratio >= 0.14) {
          wasVisible.current = true;
          setVisible(true);
          setTick((t) => t + 1);
        }

        if (wasVisible.current && ratio <= 0.04) {
          wasVisible.current = false;
          setVisible(false);
        }
      },
      {
        threshold: [0, 0.04, 0.14, 1],
        rootMargin: "0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform,filter] duration-1800 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform will-change-opacity ${
        visible
          ? "opacity-100 translate-y-0 scale-100 blur-0 fade-trigger"
          : "opacity-0 translate-y-10 scale-97 blur-[3px]"
      }`}
      data-tick={tick}
    >
      {children}
    </div>
  );
}

