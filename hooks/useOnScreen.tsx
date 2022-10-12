import { useEffect, useState } from "react";

export default function useOnScreen(
  ref: React.RefObject<HTMLDivElement>,
  rootMargin = "0px"
) {
  const [isVisible, setIsVisible] = useState<boolean | string | null>(false);

  useEffect(() => {
    if ("IntersectionObserver" in window && ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          rootMargin,
          threshold: 0.75,
        }
      );

      const currentElement = ref?.current?.lastElementChild;

      if (currentElement) {
        observer.observe(currentElement);
      }

      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    } else if (!ref.current) {
      setIsVisible(null);
    }

    setIsVisible("Navigator does not support IntersectionObserver");
  }, []);

  return [isVisible];
}
