import { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface BackdropProps {
  isVisible: boolean;
  onClick?: () => void;
}

export const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

export const enableBodyScroll = () => {
  document.body.style.overflow = '';
};

function Backdrop({
  isVisible,
  onClick
}: BackdropProps) {
  if (!isVisible) return null;

  useEffect(() => {
    if (isVisible) {
      disableBodyScroll()
    } else {
      enableBodyScroll()
    }

    return () => enableBodyScroll()
  }, [isVisible])

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-40 bg-black bg-opacity-50"
      onClick={onClick}
      aria-hidden="true"
    />,
    document.getElementById('portal')!
  );
};

export default Backdrop;
