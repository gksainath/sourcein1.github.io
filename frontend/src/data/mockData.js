export const categories = [
  "Academics",
  "Daily Usage Essentials",
  "Coding Essentials",
  "Sports Equipment",
  "Cultural & Costumes",
  "Electronics",
  "Books",
  "Others",
  "Campus Special"
];

export const mockItems = [
  {
    id: "1",
    name: "Scientific Calculator CASIO FX-991EX",
    description: "Perfect for exams. Fully functional.",
    price: 15,
    type: "rent",
    category: "Academics",
    rating: 4.8,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&w=400",
    ownerId: "u1",
    demandBadge: "High Demand",
    gender: null,
    available: true
  },
  {
    id: "2",
    name: "Arduino Uno Rev3",
    description: "Used for 1 project. Comes with USB cable.",
    price: 450,
    type: "sell",
    category: "Electronics",
    rating: 4.5,
    reviews: 8,
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=400",
    ownerId: "u2",
    demandBadge: "For Sale",
    gender: null,
    available: true
  },
  {
    id: "3",
    name: "Kakinada Khaja (Fresh from Hometown)",
    description: "Brought 2 boxes, selling one. Very fresh and tasty!",
    price: 200,
    type: "sell",
    category: "Campus Special",
    rating: 5.0,
    reviews: 2,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400",
    ownerId: "u3",
    demandBadge: "Special",
    gender: null,
    available: true
  },
  {
    id: "4",
    name: "Mechanical Keyboard (Red Switches)",
    description: "RGB keyboard. Great for coding without annoying your roommate too much.",
    price: 35,
    type: "rent",
    category: "Coding Essentials",
    rating: 4.2,
    reviews: 5,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=400",
    ownerId: "u1",
    demandBadge: "For Rent",
    gender: null,
    available: true
  },
  {
    id: "5",
    name: "Badminton Racket (Yonex)",
    description: "Good condition, slightly worn grip.",
    price: 20,
    type: "rent",
    category: "Sports Equipment",
    rating: 4.6,
    reviews: 19,
    image: "https://images.unsplash.com/photo-1622279457486-69d73ce187ef?auto=format&fit=crop&w=400",
    ownerId: "u4",
    demandBadge: "For Rent",
    gender: null,
    available: false
  },
  {
    id: "6",
    name: "Traditional Sherwani - Size L",
    description: "Worn once for freshers. Good for cultural fest.",
    price: 150,
    type: "rent",
    category: "Cultural & Costumes",
    rating: 4.9,
    reviews: 3,
    image: "https://images.unsplash.com/photo-1620012253295-c159f0865a54?auto=format&fit=crop&w=400",
    ownerId: "u5",
    demandBadge: "High Demand",
    gender: "Male",
    available: true
  }
];

export const mockOwner = {
  id: "u1",
  name: "Rahul K.",
  year: "3rd Year",
  branch: "CSE",
  phone: "+91 9876543210",
  email: "rahul.k@college.edu"
};
