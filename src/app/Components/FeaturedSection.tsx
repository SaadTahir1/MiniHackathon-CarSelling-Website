import Image from 'next/image';
import Link from 'next/link';

const FeaturedSection = () => {
  const cars = [
    {
      id: 1,
      name: 'KIA Sportage',
      price: 'PKR 9,500,000',
      location: 'Karachi',
      year: '2024',
      image: '/KIA Sportage.jpeg', 
      route: './KIASportage',
    },
    {
      id: 2,
      name: 'Honda Civic',
      price: 'PKR 9,200,000',
      location: 'Lahore',
      year: '2024',
      image: '/Honda Civic 2024.jpg',
      route: './HondaCivic', 
    },
    {
      id: 3,
      name: 'Suzuki Alto',
      price: 'PKR 2,800,000',
      location: 'Islamabad',
      year: '2021',
      image: '/Suzuki Alto.png', 
      route: './SuzukiAlto', 
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Cars</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link href={car.route}>
              <Image
                src={car.image}
                alt={car.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover cursor-pointer"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{car.name}</h3>
              <p className="text-gray-600">Year: {car.year}</p>
              <p className="text-gray-600">Location: {car.location}</p>
              <p className="text-lg font-bold mt-2">{car.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
