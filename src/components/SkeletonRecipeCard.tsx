function SkeletonRecipeCard() {
  return (
    <div className="recipe-card flex flex-col md:flex-row items-center mb-8 bg-white shadow-md rounded-lg overflow-hidden m-4 animate-pulse">
      <div className="w-full md:w-1/3 h-48 bg-gray-200"></div>
      <div className="p-4 w-full md:w-2/3 flex flex-col justify-between">
        <div>
          <div className="h-6 bg-gray-200 mb-2 rounded"></div>
          <div className="h-4 bg-gray-200 mb-4 rounded"></div>
        </div>
        <div className="recipe-button flex">
          <div className="w-24 h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonRecipeCard;
