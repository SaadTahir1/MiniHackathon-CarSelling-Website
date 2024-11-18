import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">

        <div className="flex items-center space-x-2">
          <img
            src="/PakWheels.jpg" 
            alt="PakWheels Logo"
            className="h-20 w-20"
          />
          <span className="text-4xl font-bold">PakWheels </span>
        </div>

    
        <nav className="flex space-x-4">
          <Link href="/#" className="hover:text-yellow-400">
            Cars
          </Link>
          <Link href="/#" className="hover:text-yellow-400">
            Bikes
          </Link>
          <Link href="/#" className="hover:text-yellow-400">
            Accessories
          </Link>
        </nav>

        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded text-black"
          />
          <button className="px-4 py-2 bg-red-600 rounded hover:bg-black">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
