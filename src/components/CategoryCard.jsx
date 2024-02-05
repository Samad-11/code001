import Image from "next/image";
import sampleImage from "../../public/logo.png";
const CategoryCard = ({ cardTitle, cardImage }) => {
  return (
    <div className="border-4 border-green-500 w-1/5 h-[110%] flex-col items-center justify-center">
      <div
        id="card-img-wrapper"
        className="border border-red-500 w-1/3 h-1/3 flex items-center justify-center"
      >
        <Image src={sampleImage} alt="sample image" />
      </div>
      <div id="card-details-wrapper">
        <h1 className="font-bold text-2xl ">This is a sample card</h1>
        <p>
          This is the sample summary of this sample card and this is just a
          example.
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
