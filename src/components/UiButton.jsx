const UiButton = ({ value }) => {
  return (
    <button className="border border-red-500 bg-red-500 p-8 font-bold text-2xl text-white rounded-full hover:shadow-lg ml-10">
      {value}
    </button>
  );
};

export default UiButton;
