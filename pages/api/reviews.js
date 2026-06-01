// Mock reviews data
const reviews = [
  {
    id: 1,
    author: 'Sarah Johnson',
    rating: 5,
    title: 'Brilliant service and great savings',
    content: 'PluginDirect made it so easy to compare systems. I saved £400 in the first year!',
    date: '2026-05-20',
    verified: true,
  },
  {
    id: 2,
    author: 'Mike Chen',
    rating: 5,
    title: 'DNO registration was painless',
    content: 'The wizard guided me through everything. Completed in 15 minutes.',
    date: '2026-05-18',
    verified: true,
  },
  {
    id: 3,
    author: 'Emma Wilson',
    rating: 4,
    title: 'Great comparison tool',
    content: 'Really helpful for understanding the differences between kits.',
    date: '2026-05-15',
    verified: true,
  },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(reviews);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
