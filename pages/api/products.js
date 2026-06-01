// Mock product data - replace with database queries
const products = [
  {
    id: 1,
    name: 'EcoFlow Delta Pro 5',
    brand: 'EcoFlow',
    power: 400,
    price: 2499,
    rating: 4.8,
    reviews: 128,
    efficiency: 98,
    warranty: 10,
    image: '/products/ecoflow-1.jpg',
  },
  {
    id: 2,
    name: 'Bluetti AC300',
    brand: 'Bluetti',
    power: 500,
    price: 3299,
    rating: 4.7,
    reviews: 95,
    efficiency: 97,
    warranty: 10,
    image: '/products/bluetti-1.jpg',
  },
  {
    id: 3,
    name: 'Anker 757',
    brand: 'Anker',
    power: 400,
    price: 1899,
    rating: 4.6,
    reviews: 210,
    efficiency: 96,
    warranty: 5,
    image: '/products/anker-1.jpg',
  },
  {
    id: 4,
    name: 'Growatt Infinity 2000',
    brand: 'Growatt',
    power: 600,
    price: 2199,
    rating: 4.5,
    reviews: 87,
    efficiency: 95,
    warranty: 10,
    image: '/products/growatt-1.jpg',
  },
  {
    id: 5,
    name: 'SMA Energy Solo',
    brand: 'SMA',
    power: 400,
    price: 2799,
    rating: 4.9,
    reviews: 156,
    efficiency: 99,
    warranty: 15,
    image: '/products/sma-1.jpg',
  },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
