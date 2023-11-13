import { useRef, useCallback } from 'react';

const useObserve = (callback: () => void) => {
  const observeOption = useRef({ threshold: 1 });
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
    new IntersectionObserver(observerCallback, observeOption.current),
  );

  const observe = useCallback((obersevedElement: HTMLElement) => {
    if (observer.current) {
      observer.current.observe(obersevedElement);
    }
  }, []);

  return [observe];
};

export default useObserve;
