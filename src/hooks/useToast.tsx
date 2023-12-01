import { useState } from 'react';

const useToast = () => {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return {
    showToast,
    handleShowToast,
  };
};

export default useToast;
