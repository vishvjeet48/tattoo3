import { IMAGES } from "./images"

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Artists", href: "#artists" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const

export const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%20INK%20GOD%20Pune%2C%20I%27d%20like%20to%20book%20an%20appointment"
export const PHONE = "+91 98765 43210"
export const EMAIL = "hello@tattoohubpune.com"
export const ADDRESS = "Shop no.11, Seeta Govind, Vasantrao Limaye Rd, Perugate, Sadashiv Peth, Pune, Maharashtra 411030"
export const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Koregaon+Park+Pune+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"

export const STATS = [
  { value: 5000, suffix: "+", label: "Tattoos Completed" },
  { value: 10, suffix: "+", label: "Years in Pune" },
  { value: 4.9, suffix: "", label: "Rating", decimals: 1 },
  { value: 3000, suffix: "+", label: "Happy Clients" },
] as const

export const TATTOO_STYLES = [
  {
    name: "Realism",
    description: "Photorealistic portraits and lifelike imagery",
    icon: "eye",
    image: "https://i.pinimg.com/736x/21/dc/46/21dc46ba997e2b6c5adbe322c1bf8d22.jpg",
    bento: { cols: 2, rows: 2 },
    featured: true,
  },
  {
    name: "Blackwork",
    description: "Bold black ink with striking contrast",
    icon: "moon",
    image: "https://i.pinimg.com/1200x/f0/67/af/f067afd521c763abd633106f4145be22.jpg",
    bento: { cols: 1, rows: 1 },
    featured: false,
  },
  {
    name: "Traditional",
    description: "Classic bold lines and timeless motifs",
    icon: "anchor",
    image: "https://i.pinimg.com/1200x/29/26/5c/29265c889985b80b7308d28d9d802497.jpg",
    bento: { cols: 1, rows: 2 },
    featured: false,
  },
  {
    name: "Neo Traditional",
    description: "Modern twist on classic traditional art",
    icon: "flower2",
    image: "https://i.pinimg.com/736x/54/b3/80/54b38005cd42b84f690134e418c53b52.jpg",
    bento: { cols: 1, rows: 1 },
    featured: false,
  },
  {
    name: "Japanese",
    description: "Irezumi with dragons, koi, and waves",
    icon: "waves",
    image: "https://i.pinimg.com/736x/ca/0a/6d/ca0a6d723e86f940e2fff021afd36918.jpg",
    bento: { cols: 2, rows: 1 },
    featured: false,
  },
  {
    name: "Fine Line",
    description: "Delicate, intricate minimalist designs",
    icon: "pencil",
    image: "https://i.pinimg.com/736x/7e/a1/ad/7ea1ad4ee3fb293ca46930ef2bf99395.jpg",
    bento: { cols: 1, rows: 1 },
    featured: false,
  },
  {
    name: "Geometric",
    description: "Sacred geometry and precise patterns",
    icon: "hexagon",
    image: "https://i.pinimg.com/1200x/3e/26/2b/3e262bb2674165c2741c6464c49d9950.jpg",
    bento: { cols: 1, rows: 1 },
    featured: false,
  },
  {
    name: "Tribal",
    description: "Ancient patterns and bold symbolism",
    icon: "flame",
    image: "https://i.pinimg.com/1200x/a1/95/cb/a195cb9dfe002bffac3d5c124a33234e.jpg",
    bento: { cols: 1, rows: 1 },
    featured: false,
  },
  {
    name: "Portrait",
    description: "Stunning likenesses of loved ones",
    icon: "user",
    image: "https://i.pinimg.com/736x/d7/43/d8/d743d8a308dd937a7a740c0c10f5bd57.jpg",
    bento: { cols: 1, rows: 2 },
    featured: false,
  },
  {
    name: "Watercolor",
    description: "Vibrant splashes of artistic colour",
    icon: "palette",
    image: "https://i.pinimg.com/1200x/89/df/3f/89df3ffb4b74e9fd2070ff009f1508fd.jpg",
    bento: { cols: 2, rows: 1 },
    featured: false,
  },
] as const

export const TIMELINE = [
  {
    year: "2014",
    title: "Founded in Pune",
    description: "Tattoo Hub opened in Koregaon Park with a vision to bring world-class tattoo art to Maharashtra.",
  },
  {
    year: "2017",
    title: "Pune Ink Fest Award",
    description: "Artist Ayush won Best Blackwork at the Pune International Tattoo Convention.",
  },
  {
    year: "2020",
    title: "Studio Expansion",
    description: "Expanded to a premium 2,500 sq ft studio space on Lane 5, Koregaon Park.",
  },
  {
    year: "2023",
    title: "National Recognition",
    description: "Featured in Ink India Magazine and Tattoo Life Asia for our Pune studio.",
  },
  {
    year: "2025",
    title: "5000+ Tattoos",
    description: "Celebrated 5000 completed custom pieces for clients across Pune and beyond.",
  },
] as const

export const ARTISTS = [
  {
    name: "Artist Ayush",
    specialization: "Realism & Portrait",
    experience: 12,
    image: IMAGES.artists.arjun,
    instagram: "https://instagram.com",
  },
  {
    name: "Priya Deshpande",
    specialization: "Japanese & Irezumi",
    experience: 15,
    image: IMAGES.artists.priya,
    instagram: "https://instagram.com",
  },
  {
    name: "Vikram Kulkarni",
    specialization: "Blackwork & Geometric",
    experience: 8,
    image: IMAGES.artists.vikram,
    instagram: "https://instagram.com",
  },
  {
    name: "Ananya Sharma",
    specialization: "Fine Line & Watercolor",
    experience: 10,
    image: IMAGES.artists.ananya,
    instagram: "https://instagram.com",
  },
] as const

export const PROCESS_STEPS = [
  { title: "Consultation", description: "Discuss your vision, placement, and expectations with our artists.", icon: "message-circle" },
  { title: "Design Sketch", description: "Custom artwork created exclusively for your unique story.", icon: "pen-tool" },
  { title: "Approval", description: "Review and refine the design until it's perfect.", icon: "check-circle" },
  { title: "Tattoo Session", description: "Professional application in our sterile, comfortable studio.", icon: "sparkles" },
  { title: "Aftercare Guidance", description: "Detailed aftercare instructions for optimal healing.", icon: "heart-pulse" },
] as const

export const GALLERY_CATEGORIES = ["All", "Blackwork", "Sleeve", "Portrait", "Japanese", "Minimal", "Color"] as const

export const GALLERY_ITEMS = [
  { id: 1, category: "Blackwork", image: "https://i.pinimg.com/1200x/cf/c5/86/cfc5869df24c6d701165cdb2a542951b.jpg", title: "Mandala Sleeve by Vikram" },
  { id: 2, category: "Portrait", image: "https://i.pinimg.com/736x/72/60/e3/7260e37d13de001867409e6fd290dbc6.jpg", title: "Realistic Portrait by Ayush" },
  { id: 3, category: "Japanese", image: "https://images.unsplash.com/photo-1723242017542-6273e0115435?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW5lc2UlMjB0YXR0b298ZW58MHx8MHx8fDA%3D", title: "Dragon Back Piece by Priya" },
  { id: 4, category: "Sleeve", image: "https://i.pinimg.com/736x/f8/18/e2/f818e2c555f9004a1de3d4cdfd87bb98.jpg", title: "Neo Traditional Sleeve" },
  { id: 5, category: "Minimal", image: "https://i.pinimg.com/736x/0a/1d/b1/0a1db163acd9a318c5f74e525c651a28.jpg", title: "Fine Line Botanical by Ananya" },
  { id: 6, category: "Color", image: "https://i.pinimg.com/736x/39/8b/e4/398be46638d8213015bc9c2ba5c8d6c0.jpg", title: "Watercolor Phoenix" },
  { id: 7, category: "Blackwork", image: "https://i.pinimg.com/736x/15/2c/dc/152cdcebeae1952c2b733f931801533b.jpg", title: "Geometric Chest Piece" },
  { id: 8, category: "Portrait", image: "https://i.pinimg.com/1200x/51/22/80/5122804027d750227b80f4a595aec94c.jpg", title: "Memorial Portrait" },
  { id: 9, category: "Japanese", image: "https://images.unsplash.com/photo-1597852075234-fd721ac361d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW5lc2UlMjB0YXR0b298ZW58MHx8MHx8fDA%3D", title: "Koi Half Sleeve by Priya" },
  { id: 10, category: "Sleeve", image: "https://i.pinimg.com/736x/94/df/fb/94dffb9107c74c28b92272a5e540e032.jpg", title: "Tribal Full Sleeve" },
  { id: 11, category: "Colour", image: "https://i.pinimg.com/1200x/c8/18/fc/c818fc96b9c8247ebaf554fbd6a181a3.jpg", title: "Rose & Skull Colour Work" },
  { id: 12, category: "Minimal", image: 'https://i.pinimg.com/1200x/57/2f/e6/572fe6dfaa3526a96be9f2dfded2788b.jpg', title: "Single Line Art" },
] as const

export const BEFORE_AFTER = [
  {
    before: "https://i.pinimg.com/736x/63/b3/7b/63b37bf53f1b8a3c36a34d079b9de972.jpg",
    after: "https://i.pinimg.com/736x/14/9e/fc/149efc238983681d55fd8b8893b546f9.jpg",
    title: "Sleeve Transformation",
  },
  {
    before: "https://i.pinimg.com/736x/ac/68/5d/ac685dd7ed065d14f8c2ed969b45113a.jpg",
    after: "https://i.pinimg.com/736x/35/45/72/35457205e7cce148e0e113a625f79512.jpg",
    title: "Cover-Up Revival",
  },
] as const

export const REVIEWS = [
  {
    name: "Rohan Patil",
    rating: 5,
    text: "Absolutely incredible experience. Arjun brought my vision to life with stunning realism. The Koregaon Park studio feels premium and welcoming.",
    image: IMAGES.avatars.rohan,
  },
  {
    name: "Kavya Deshmukh",
    rating: 5,
    text: "Best tattoo studio in Pune. Priya's Japanese work is museum-quality — my koi sleeve gets compliments every day. Already booked my next session!",
    image: IMAGES.avatars.kavya,
  },
  {
    name: "Aditya Joshi",
    rating: 5,
    text: "Ananya's fine line work is delicate perfection. The consultation made me feel heard and the result exceeded every expectation.",
    image: IMAGES.avatars.aditya,
  },
  {
    name: "Meera Iyer",
    rating: 5,
    text: "Vikram's blackwork sleeve is a masterpiece. Sterile environment, professional artists, and unmatched artistry right here in Pune.",
    image: IMAGES.avatars.meera,
  },
  {
    name: "Siddharth Rao",
    rating: 5,
    text: "From consultation to aftercare, everything was flawless. Tattoo Hub sets the standard for premium tattoo studios in Maharashtra.",
    image: IMAGES.avatars.siddharth,
  },
  {
    name: "Divya Nair",
    rating: 5,
    text: "The attention to detail is extraordinary. My portrait tattoo looks so real — friends can't believe it's ink. Highly recommend to anyone in Pune!",
    image: IMAGES.avatars.divya,
  },
] as const

export const WHY_CHOOSE = [
  { title: "Certified Artists", description: "Licensed professionals with years of specialised training", icon: "award" },
  { title: "Sterile Equipment", description: "Hospital-grade sterilisation and single-use materials", icon: "shield-check" },
  { title: "Custom Designs", description: "Every piece is uniquely crafted for your story", icon: "pen-tool" },
  { title: "Premium Ink", description: "Top-tier vegan inks for vibrant, lasting colour", icon: "droplets" },
  { title: "Comfortable Studio", description: "Premium Koregaon Park studio with AC and amenities", icon: "sofa" },
  { title: "Free Consultation", description: "Complimentary design consultation for all clients", icon: "gift" },
  { title: "Touch-up Support", description: "Complimentary touch-ups within 3 months", icon: "refresh-cw" },
  { title: "Aftercare Guidance", description: "Comprehensive healing support and products", icon: "heart-pulse" },
] as const

export const FAQ_ITEMS = [
  {
    question: "How much do tattoos cost?",
    answer: "Pricing varies based on size, complexity, and artist. Small pieces start at ₹3,000, while large custom work is quoted hourly (₹2,500–₹4,500/hr). We provide detailed estimates during your free consultation.",
  },
  {
    question: "How painful is getting a tattoo?",
    answer: "Pain levels vary by placement and individual tolerance. Our artists work at your pace with breaks as needed. We use premium techniques to minimise discomfort and ensure a smooth experience.",
  },
  {
    question: "How do I book an appointment?",
    answer: "Book online through our form, call us directly, or message us on WhatsApp. A deposit secures your appointment. Walk-ins are welcome based on availability at our Koregaon Park studio.",
  },
  {
    question: "What aftercare do you recommend?",
    answer: "We provide detailed aftercare instructions and premium healing products. Keep the area clean, moisturised, and protected from sun for 4–6 weeks. Free touch-ups are available within 3 months.",
  },
  {
    question: "Can I customise my design?",
    answer: "Absolutely! Every tattoo at Tattoo Hub Pune is custom-designed. Bring reference images, ideas, or just a concept — our artists will create something uniquely yours during the design consultation.",
  },
] as const

export const INSTAGRAM_POSTS = [
  { id: 1, image: IMAGES.instagram[0], type: "reel" },
  { id: 2, image: IMAGES.instagram[1], type: "post" },
  { id: 3, image: IMAGES.instagram[2], type: "reel" },
  { id: 4, image: IMAGES.instagram[3], type: "video" },
  { id: 5, image: IMAGES.instagram[4], type: "post" },
  { id: 6, image: IMAGES.instagram[5], type: "reel" },
  { id: 7, image: IMAGES.instagram[6], type: "post" },
  { id: 8, image: IMAGES.instagram[7], type: "video" },
] as const

export const STUDIO_SPACES = [
  { title: "Workstations", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/8c/43/28/professional-and-hygienic.jpg?w=900&h=500&s=1", description: "Private artist stations with premium lighting" },
  { title: "Equipment", image: "https://www.shutterstock.com/image-photo/equipment-used-tattoo-studio-on-260nw-2498397781.jpg", description: "State-of-the-art tattoo machines and tools" },
  { title: "Waiting Area", image: "https://i.pinimg.com/736x/37/2e/cf/372ecfa6d97114fe0c0aad7c8c5207ef.jpg", description: "Comfortable lounge with art gallery displays" },
  { title: "Artwork Walls", image: "https://setitoff.com.au/siouploadskee/2017/08/kings-of-ink-tattoo-studio-graffiti-design-4.jpg", description: "Rotating exhibitions of original tattoo art" },
] as const

export const BUSINESS_HOURS = [
  { day: "Monday – Friday", hours: "11:00 AM – 8:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "12:00 PM – 6:00 PM" },
] as const

export const FOOTER_SERVICES = [
  "Custom Tattoos",
  "Cover-Ups",
  "Touch-Ups",
  "Consultations",
  "Piercing",
  "Aftercare Products",
] as const

export const ABOUT_IMAGE = IMAGES.about
