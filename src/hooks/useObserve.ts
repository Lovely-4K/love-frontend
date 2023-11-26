import { useRef, useCallback, useEffect } from 'react';

const useObserve = (callback: () => void) => {
  const observeOption = useRef({ threshold: 1 });
  const observerCallback = useRef<IntersectionObserverCallback>(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (observer && entry.isIntersecting) {
          observer.disconnect();
          callback();
        }
      });
    },
  );

  const observer = useRef<IntersectionObserver | null>(null);

  const observe = useCallback((obersevedElement: Element) => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        observerCallback.current,
        observeOption.current,
      );
    }

    if (observer.current && obersevedElement) {
      observer.current.observe(obersevedElement);
    }
  }, []);

  useEffect(() => {
    observerCallback.current = (entries, observer) => {
      entries.forEach((entry) => {
        if (observer && entry.isIntersecting) {
          observer.disconnect();
          callback();
        }
      });
    };
  }, [callback]);

  useEffect(() => {
    const observerTemp = observer;

    return () => {
      if (observerTemp.current) {
        observerTemp.current.disconnect();
      }
    };
  }, []);

  return [observe];
};

export default useObserve;
