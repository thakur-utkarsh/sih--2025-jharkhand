export interface Attraction {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: 'eco-tourism' | 'cultural' | 'historical' | 'adventure';
  district: string;
  image: string;
  rating: number;
  reviews: number;
  lat: number;
  lng: number;
  bestTime: string;
  highlights: string[];
  difficulty?: 'Easy' | 'Moderate' | 'Challenging';
}

export const attractions: Attraction[] = [
  {
    id: '1',
    name: 'Jamshedpur Waterfall',
    description: 'A stunning cascade of natural beauty in the heart of nature',
    longDescription: 'Experience the mesmerizing beauty of this pristine waterfall surrounded by dense forests and rich biodiversity. Perfect for nature lovers and photography enthusiasts.',
    category: 'eco-tourism',
    district: 'Jamshedpur',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=300&fit=crop',
    rating: 4.8,
    reviews: 324,
    lat: 22.8039,
    lng: 86.1849,
    bestTime: 'June to September',
    highlights: ['Pristine waterfall', 'Dense forest trekking', 'Wildlife spotting', 'Photography'],
    difficulty: 'Moderate'
  },
  {
    id: '2',
    name: 'Dassam Falls',
    description: 'Scenic waterfall with picnic spots and forest trails',
    longDescription: 'One of the most popular waterfalls in Ranchi, Dassam Falls is a major tourist attraction known for its majestic cascade and surrounding lush greenery.',
    category: 'eco-tourism',
    district: 'Ranchi',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    rating: 4.7,
    reviews: 512,
    lat: 23.4022,
    lng: 85.3420,
    bestTime: 'July to October',
    highlights: ['Waterfall trekking', 'Picnic area', 'Swimming pool', 'Forest walk'],
    difficulty: 'Easy'
  },
  {
    id: '3',
    name: 'Nagni Lake',
    description: 'Beautiful serene lake surrounded by scenic beauty',
    longDescription: 'A picturesque lake in Jharkhand offering a peaceful escape with boating facilities, scenic walking paths, and stunning sunset views.',
    category: 'eco-tourism',
    district: 'Ranchi',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    rating: 4.6,
    reviews: 287,
    lat: 23.3733,
    lng: 85.3667,
    bestTime: 'October to March',
    highlights: ['Boating', 'Sunset view', 'Walking trail', 'Bird watching'],
    difficulty: 'Easy'
  },
  {
    id: '4',
    name: 'Ranchi Hill Station',
    description: 'Hill station with panoramic views and pleasant climate',
    longDescription: 'Experience the beauty of Ranchi, known as the "Queen of Hills" with its pleasant climate, scenic viewpoints, and cultural heritage.',
    category: 'cultural',
    district: 'Ranchi',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    rating: 4.9,
    reviews: 689,
    lat: 23.3441,
    lng: 85.3096,
    bestTime: 'October to March',
    highlights: ['Panoramic views', 'Local cuisine', 'Folk performances', 'Tribal markets'],
    difficulty: 'Easy'
  },
  {
    id: '5',
    name: 'Jamshedpur Steel Museum',
    description: 'Museum showcasing industrial heritage and tribal culture',
    longDescription: 'Explore the rich industrial history of Jamshedpur and the fascinating tribal cultures of Jharkhand through interactive exhibits and displays.',
    category: 'historical',
    district: 'Jamshedpur',
    image: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec6a?w=500&h=300&fit=crop',
    rating: 4.5,
    reviews: 198,
    lat: 22.8039,
    lng: 86.1849,
    bestTime: 'Year-round',
    highlights: ['Industrial heritage', 'Tribal artifacts', 'Interactive exhibits', 'Educational'],
    difficulty: 'Easy'
  },
  {
    id: '6',
    name: 'Khandoli Waterfall',
    description: 'Hidden gem waterfall with adventure trekking trails',
    longDescription: 'Adventure seekers paradise! Trek through dense forests to reach this mesmerizing waterfall surrounded by nature\'s bounty.',
    category: 'adventure',
    district: 'Simdega',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=300&fit=crop',
    rating: 4.7,
    reviews: 156,
    lat: 23.1667,
    lng: 84.5333,
    bestTime: 'June to October',
    highlights: ['Trek through forest', 'Adventure activities', 'Camping', 'Rock climbing'],
    difficulty: 'Challenging'
  },
  {
    id: '7',
    name: 'Tribal Village Experience',
    description: 'Authentic tribal culture and traditional lifestyle immersion',
    longDescription: 'Live with tribal communities, learn their traditions, enjoy traditional food, and participate in cultural festivities. A unique cultural exchange experience.',
    category: 'cultural',
    district: 'West Singhbhum',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
    rating: 4.9,
    reviews: 423,
    lat: 22.5967,
    lng: 84.4299,
    bestTime: 'October to March',
    highlights: ['Tribal homestay', 'Traditional dance', 'Local cuisine', 'Craft workshops'],
    difficulty: 'Easy'
  },
  {
    id: '8',
    name: 'Paramhansa Waterfall',
    description: 'Sacred waterfall with spiritual significance and natural beauty',
    longDescription: 'A sacred site for pilgrims and nature lovers, this waterfall combines spiritual importance with stunning natural scenery and trek routes.',
    category: 'cultural',
    district: 'Dumka',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    rating: 4.6,
    reviews: 234,
    lat: 24.2667,
    lng: 87.2667,
    bestTime: 'July to September',
    highlights: ['Sacred site', 'Pilgrimage', 'Scenic trek', 'Photography'],
    difficulty: 'Moderate'
  },
  {
    id: '9',
    name: 'Betla National Park',
    description: 'Wildlife sanctuary with diverse fauna and eco-tourism',
    longDescription: 'Home to tigers, elephants, and diverse bird species. Experience thrilling safaris and jungle treks in this pristine wilderness.',
    category: 'eco-tourism',
    district: 'Latehar',
    image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&h=300&fit=crop',
    rating: 4.8,
    reviews: 567,
    lat: 24.4833,
    lng: 85.0333,
    bestTime: 'November to March',
    highlights: ['Tiger safari', 'Elephant watching', 'Bird watching', 'Jungle trek'],
    difficulty: 'Moderate'
  },
];

