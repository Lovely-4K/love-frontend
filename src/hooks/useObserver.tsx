import { useCallback, useRef } from 'react';

const useObserver = (callback: () => void) => {
  const observerOption = useRef({ threshold: 1 });
  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (observer && entry.isIntersecting) {
          observer.disconnect();
          callback();
        }
      });
    },
    [callback],
  );

  const observer = useRef(
    new IntersectionObserver(observerCallback, observerOption.current),
  );

  const observe = useCallback((observedElement: HTMLElement) => {
    if (observedElement === null) return;

    observer.current.observe(observedElement);
  }, []);

  return [observe];
};

export default useObserver;
