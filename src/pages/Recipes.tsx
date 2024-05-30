function Recipes() {
  return (
    <section className="mb-8">
          <div className="flex flex-col md:flex-row items-center mb-4">
            <img src={'https://via.placeholder.com/600x400'} alt="BTL Burger" className="w-full md:w-1/2 h-64 object-cover" />
            <div className="p-4 w-full md:w-1/2">
              <h2 className="text-xl font-bold mb-2">BTL Burger</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded">View recipe</button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-4">
            <img src={'https://via.placeholder.com/600x400'} alt="Italian Meatballs" className="w-full md:w-1/2 h-64 object-cover" />
            <div className="p-4 w-full md:w-1/2">
              <h2 className="text-xl font-bold mb-2">Italian Meatballs</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded">View recipe</button>
            </div>
          </div>
        </section>
  )
}

export default Recipes