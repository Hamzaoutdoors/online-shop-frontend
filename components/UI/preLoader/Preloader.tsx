const Preloader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900">
        <div
          className="rounded-full h-10 w-10 bg-gray
        -900"
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
