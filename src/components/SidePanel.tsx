import { forwardRef } from "react"
import ReactDOM from "react-dom"
import Backdrop from "./Backdrop"

interface SidePanelProps {
  open: boolean
  isRight?: boolean
  onToggle: () => void
  children?: React.ReactNode
}

const SidePanel = forwardRef<HTMLDivElement, SidePanelProps>(({
  open = true,
  isRight = true,
  onToggle,
  children
}, ref) => {
  if(!open) return null

  return ReactDOM.createPortal(
    <>
      <Backdrop
        isVisible={open}
        onClick={onToggle}
      />
      <div ref={ref} className={`fixed top-0 ${isRight ? 'right-0' : 'left-0'} h-full w-64 bg-[#423736] text-white transform transition-transform ease-in-out duration-500 z-50 ${open ? 'translate-x-0' : (isRight ? 'translate-x-full' : '-translate-x-full')}`}>
        <div className="p-4">
          <div className='flex justify-between items-center'>
            <button
              onClick={onToggle} className="text-[#f3c70c] focus:outline-none"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </>,
    document.getElementById('portal')!
  );
});

export default SidePanel;
