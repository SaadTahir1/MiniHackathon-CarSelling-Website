import Link from "next/link";

const Details = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Enter your Details</h1>
        <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Enter your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Enter your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="card-number" className="block text-lg font-medium mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="card-number"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Card Number"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="address" className="block text-lg font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Address"
            />
          </div>
          <div>
          <Link href="/PlaceOrder">
          <button
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"         >
            Place your Order
          </button>
            </Link>
          </div>
        </form>
      </div>
    );
  };
  
  export default Details;
  