import ReactDOM from 'react-dom';

interface BackdropProps {
  isVisible: boolean;
  onClick: () => void;
}

function Backdrop({
  isVisible,
  onClick
}: BackdropProps) {
  if (!isVisible) return null;

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
