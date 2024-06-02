interface HeaderProps {
  onToggleSidePanel: () => void
  children: React.ReactNode
}

function Header({
  onToggleSidePanel,
  children
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#423736]">
      <div className="container mx-auto py-4 px-2 space-x-4 flex md:justify-center justify-end items-center ">
        <div className="md:hidden">
          <button onClick={onToggleSidePanel} className="text-[#f3c70c] focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </header>
  );
}

export default Header;