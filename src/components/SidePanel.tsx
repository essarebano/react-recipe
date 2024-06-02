import { forwardRef } from "react"

interface SidePanelProps {
  open: boolean
  isRight?: boolean
  onToggle: () => void
  children?: React.ReactNode
}

const SidePanel = forwardRef<HTMLDivElement, SidePanelProps>((props, ref) => {
  const {
    open = true,
    isRight = true,
    onToggle,
    children
  } = props

  return (
    <div className="absolute min-h-screen">
      <div ref={ref} className={`fixed top-0 ${isRight ? 'right-0' : 'left-0'} h-full w-64 bg-[#423736] text-white transform ${open ? 'translate-x-0' : (isRight ? 'translate-x-full' : '-translate-x-full')} transition-transform duration-300 z-50`}>
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
    </div>
  );
});

export default SidePanel;
