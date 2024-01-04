import { useAtomValue } from 'jotai';
import { createPortal } from 'react-dom';
import { toastAtom } from '~/stores/toastAtom';

const ToastList = () => {
  const toasts = useAtomValue(toastAtom);

  const toastPortalEl = document.getElementById('toast');

  if (!toastPortalEl) throw new Error('toast portal element not found');

  return createPortal(
    <div className="toast toast-center toast-top z-50">
      {toasts.map(({ id, content }) => (
        <div
          key={id}
          className="animate-opacity alert alert-info bg-base-secondary text-base-white"
        >
          <span>{content}</span>
        </div>
      ))}
    </div>,
    toastPortalEl,
  );
};

export default ToastList;
