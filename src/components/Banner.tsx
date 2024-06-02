function Banner() {
  return (
    <div
      className="bg-cover bg-center hidden md:h-96 md:block"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}
    >
      <div className="flex justify-center items-center h-full">
        <img
            src="https://placehold.co/150x150"
            alt="Just Cook Logo"
            className="w-40 h-40"
          />
      </div>
    </div>
  )
}

export default Banner