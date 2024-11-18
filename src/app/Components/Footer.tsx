export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h4 className="text-lg font-semibold mb-4">About PakWheels</h4>
            <p className="text-sm">
              Pakistan's #1 automotive portal for buying, selling, and learning about vehicles.
            </p>
          </div>
  
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Buy a Car
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Sell Your Car
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Car Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Download Our App</h4>
            <div className="flex space-x-4">
              <a href="#">
                <img
                  src="PlayStore.png"
                  alt="Google Play"
                  className="rounded h-12"
                />
              </a>
              <a href="#">
                <img
                  src="AppStore.png"
                  alt="App Store"
                  className="rounded h-12"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
          © 2024 PakWheels. All rights reserved.
        </div>
      </footer>
    );
  }
  