import { useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { Toast, toastAtom } from '~/stores/toastAtom';

const useToast = () => {
  const setToasts = useSetAtom(toastAtom);

  const hideToast = useCallback(
    (toastId: Toast['id']) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
    },
    [setToasts],
  );

  const showToast = useCallback(
    (toast: Toast) => {
      const toastId = Math.random();

      setToasts((prev) => [...prev, { ...toast, id: toastId }]);
      setTimeout(() => hideToast(toastId), 2000);
    },
    [setToasts, hideToast],
  );

  return { showToast };
};

export default useToast;
