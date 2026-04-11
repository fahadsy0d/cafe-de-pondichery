import heroFacadeImage from '@/assets/images/hero-facade.jpg'
import homeBreakfastTableImage from '@/assets/images/home-breakfast-table.jpg'
import homeDiningRoomImage from '@/assets/images/home-dining-room.jpg'
import galleryCourtyardBreakfastImage from '@/assets/images/gallery-courtyard-breakfast.jpg'
import galleryPastryCounterImage from '@/assets/images/gallery-pastry-counter.avif'
import galleryBurgundyCornerBoothImage from '@/assets/images/gallery-burgundy-corner-booth.jpg'
import galleryWhiteTownFacadeImage from '@/assets/images/gallery-white-town-facade.jpg'
import galleryCoffeeServiceImage from '@/assets/images/gallery-coffee-service.jpg'
import galleryEveningInteriorImage from '@/assets/images/gallery-evening-interior.jpg'

export const navigation = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export const menuSections = [
  {
    title: 'Viennoiserie',
    description: 'Butter-rich pastries prepared for slow White Town mornings.',
    items: [
      { name: 'Signature Croissant', detail: 'Layered, flaky, deeply buttery.', price: 'Rs 190' },
      { name: 'Pain au Chocolat', detail: 'Dark chocolate folded into warm pastry.', price: 'Rs 220' },
      { name: 'Almond Croissant', detail: 'Toasted almond cream and crisp edges.', price: 'Rs 240' },
    ],
  },
  {
    title: 'Coffee & Chocolat',
    description: 'Classic cafe service with French restraint and local warmth.',
    items: [
      { name: 'Cafe Creme', detail: 'Silky milk coffee served in porcelain.', price: 'Rs 180' },
      { name: 'Cafe Noisette', detail: 'Short espresso softened with warm milk.', price: 'Rs 160' },
      { name: 'Chocolate Chaud', detail: 'Thick dark hot chocolate.', price: 'Rs 210' },
    ],
  },
  {
    title: 'French Breakfast',
    description: 'Morning plates designed for unhurried tables and second cups.',
    items: [
      { name: 'Petit Dejeuner Classique', detail: 'Pastry basket, preserves, fruit, coffee.', price: 'Rs 420' },
      { name: 'Savory Toast Tartine', detail: 'Eggs, herbs, local greens, toasted sourdough.', price: 'Rs 360' },
      { name: 'Pondicherry Citrus Bowl', detail: 'Seasonal fruit, yogurt, honey, toasted seeds.', price: 'Rs 280' },
    ],
  },
  {
    title: 'Patisserie',
    description: 'Display-case desserts meant for afternoons and long conversations.',
    items: [
      { name: 'Vanilla Mille-Feuille', detail: 'Fine pastry layers with vanilla cream.', price: 'Rs 260' },
      { name: 'Caramel Eclair', detail: 'Salted caramel glaze and pastry cream.', price: 'Rs 240' },
      { name: 'Tarte au Citron', detail: 'Bright lemon curd in a crisp tart shell.', price: 'Rs 250' },
    ],
  },
]

export const storyMoments = [
  {
    title: 'French-Tamil table culture',
    description:
      "The cafe imagines what happens when White Town's French memory meets Pondicherry's everyday rhythm: pastry in the morning, conversation into the evening, service without hurry.",
  },
  {
    title: 'A room with history',
    description:
      'Arched doors, cane-backed chairs, aged mirrors, and slow ceiling fans create the sense of a place that has been part of the neighborhood for years.',
  },
  {
    title: 'Baking as ritual',
    description:
      'The menu is built around staples that feel dependable: croissants, tartines, coffee, and small desserts that make return visits easy.',
  },
]

export const homeImages = {
  hero: {
    title: 'Cafe facade',
    caption: 'A French-colonial exterior set for slow mornings and long afternoons in White Town.',
    imageSrc: heroFacadeImage,
    alt: 'Exterior view of Cafe de Pondichery in a French-colonial building',
  },
  breakfast: {
    title: 'Morning table',
    caption: 'Breakfast service built around coffee, pastry, and an unhurried first hour.',
    imageSrc: homeBreakfastTableImage,
    alt: 'Breakfast table with coffee and pastries at Cafe de Pondichery',
  },
  dining: {
    title: 'Dining room',
    caption: 'A quieter room for meetings, notebooks, and a slower second cup.',
    imageSrc: homeDiningRoomImage,
    alt: 'Interior dining room at Cafe de Pondichery',
  },
}

export const galleryItems = [
  {
    title: 'Courtyard Breakfast',
    caption: 'Cream stone, cane seating, pastry baskets, and morning light.',
    imageSrc: galleryCourtyardBreakfastImage,
    alt: 'Courtyard breakfast setup at Cafe de Pondichery',
  },
  {
    title: 'Pastry Counter',
    caption: 'Croissants, tarts, and eclairs arranged behind brass-framed glass.',
    imageSrc: galleryPastryCounterImage,
    alt: 'Pastry counter display at Cafe de Pondichery',
  },
  {
    title: 'Burgundy Corner Booth',
    caption: 'A darker editorial corner image used as a temporary stand-in for the booth scene.',
    imageSrc: galleryBurgundyCornerBoothImage,
    alt: 'Moody dark corner scene used in place of the burgundy booth image',
  },
  {
    title: 'White Town Facade',
    caption: 'French shutters, pale walls, and a heritage streetfront in White Town.',
    imageSrc: galleryWhiteTownFacadeImage,
    alt: 'White Town streetfront near Cafe de Pondichery',
  },
  {
    title: 'Coffee Service',
    caption: 'Pour-over detail, ceramic cups, and polished service moments.',
    imageSrc: galleryCoffeeServiceImage,
    alt: 'Coffee service detail at Cafe de Pondichery',
  },
  {
    title: 'Evening Interior',
    caption: 'Warm lamps, low light, and a late-evening cafe atmosphere.',
    imageSrc: galleryEveningInteriorImage,
    alt: 'Evening interior scene at Cafe de Pondichery',
  },
]

export const openingHours = [
  { day: 'Monday - Thursday', hours: '8:00 AM - 8:30 PM' },
  { day: 'Friday - Saturday', hours: '8:00 AM - 9:30 PM' },
  { day: 'Sunday', hours: '8:30 AM - 7:30 PM' },
]

export const contactDetails = {
  address: '18 Rue Dumas, White Town, Puducherry 605001',
  note: 'A fictional White Town address placeholder suitable for the demo build.',
  phone: '+91 90000 00000',
  email: 'bonjour@cafedepondichery.in',
}
