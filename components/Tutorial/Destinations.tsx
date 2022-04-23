import { FunctionComponent } from 'react';
import Chicago from '../../public/assets/logo/chicago.jpg';
import Colorado from '../../public/assets/logo/colorado.jpg';
import Malibu from '../../public/assets/logo/malibu.jpg';
import Miami from '../../public/assets/logo/miami.jpg';
import Seattle from '../../public/assets/logo/seattle.jpg';
import Toronto from '../../public/assets/logo/toronto.jpg';

const popularDestinations = [
  {
    city: 'Toronto',
    averagePrice: 120,
    propertyCount: 76,
    imageUrl: Toronto.src,
    imageAlt: 'Toronto skyline',
  },
  {
    city: 'Malibu',
    averagePrice: 215,
    propertyCount: 43,
    imageUrl: Malibu.src,
    imageAlt: 'Cliff in Malibu',
  },
  {
    city: 'Chicago',
    averagePrice: 130,
    propertyCount: 115,
    imageUrl: Chicago.src,
    imageAlt: 'Chicago skyline',
  },
  {
    city: 'Seattle',
    averagePrice: 135,
    propertyCount: 63,
    imageUrl: Seattle.src,
    imageAlt: 'Seattle skyline',
  },
  {
    city: 'Colorado',
    averagePrice: 85,
    propertyCount: 47,
    imageUrl: Colorado.src,
    imageAlt: 'Lake in Colorado',
  },
  {
    city: 'Miami',
    averagePrice: 115,
    propertyCount: 86,
    imageUrl: Miami.src,
    imageAlt: 'Beach in Miami',
  },
];

const destinationCards = popularDestinations.map((destination, index) => {
  return (
    <div
      key={index}
      className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden"
    >
      <img
        className="h-32 w-32 flex-shrink-0"
        src={destination.imageUrl}
        alt={destination.imageAlt}
      />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">HJ</h3>
        <p className="text-gray-600">Price / night average</p>
        <div className="mt-4">
          <a
            href="#"
            className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
          >
            Explore propertyCount properties
          </a>
        </div>
      </div>
    </div>
  );
});

const Destinations: FunctionComponent = () => {
  return (
    <div>
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="text-gray-600">
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
            {destinationCards}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
