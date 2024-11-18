import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-gray-100 py-10 px-5 text-center rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <Image
          src="/Suzuki Alto.png" 
          alt="Sell Your Car"
          width={200}
          height={150}
          className="rounded-md"
        />
        <h2 className="text-xl font-bold text-gray-800 mt-5">
          Sell Your Car on PakWheels and Get the Best Price
        </h2>
        <p className="text-gray-600 mt-3">
          Post your ad for free in 3 easy steps and connect with verified buyers
          to get the best offers!
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700">
            Post Your Ad
          </button>
          <button className="bg-gray-300 text-gray-700 px-5 py-2 rounded-lg shadow hover:bg-gray-400">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
