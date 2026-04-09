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
      { name: 'Signature Croissant', detail: 'Layered, flaky, deeply buttery.', price: '₹190' },
      { name: 'Pain au Chocolat', detail: 'Dark chocolate folded into warm pastry.', price: '₹220' },
      { name: 'Almond Croissant', detail: 'Toasted almond cream and crisp edges.', price: '₹240' },
    ],
  },
  {
    title: 'Coffee & Chocolat',
    description: 'Classic cafe service with French restraint and local warmth.',
    items: [
      { name: 'Cafe Creme', detail: 'Silky milk coffee served in porcelain.', price: '₹180' },
      { name: 'Cafe Noisette', detail: 'Short espresso softened with warm milk.', price: '₹160' },
      { name: 'Chocolate Chaud', detail: 'Thick dark hot chocolate.', price: '₹210' },
    ],
  },
  {
    title: 'French Breakfast',
    description: 'Morning plates designed for unhurried tables and second cups.',
    items: [
      { name: 'Petit Dejeuner Classique', detail: 'Pastry basket, preserves, fruit, coffee.', price: '₹420' },
      { name: 'Savory Toast Tartine', detail: 'Eggs, herbs, local greens, toasted sourdough.', price: '₹360' },
      { name: 'Pondicherry Citrus Bowl', detail: 'Seasonal fruit, yogurt, honey, toasted seeds.', price: '₹280' },
    ],
  },
  {
    title: 'Patisserie',
    description: 'Display-case desserts meant for afternoons and long conversations.',
    items: [
      { name: 'Vanilla Mille-Feuille', detail: 'Fine pastry layers with vanilla cream.', price: '₹260' },
      { name: 'Caramel Eclair', detail: 'Salted caramel glaze and pastry cream.', price: '₹240' },
      { name: 'Tarte au Citron', detail: 'Bright lemon curd in a crisp tart shell.', price: '₹250' },
    ],
  },
]

export const storyMoments = [
  {
    title: 'French-Tamil table culture',
    description:
      'The cafe imagines what happens when White Town’s French memory meets Pondicherry’s everyday rhythm: pastry in the morning, conversation into the evening, service without hurry.',
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

export const galleryItems = [
  { title: 'Courtyard Breakfast', caption: 'Cream stone, cane seating, pastry baskets, morning light.' },
  { title: 'Pastry Counter', caption: 'Croissants, tarts, and eclairs arranged behind brass-framed glass.' },
  { title: 'Burgundy Corner Booth', caption: 'A quiet nook for coffee and notebooks in the late afternoon.' },
  { title: 'White Town Facade', caption: 'French shutters, pale walls, and a gold-lettered cafe sign.' },
  { title: 'Coffee Service', caption: 'Porcelain cups, folded napkins, and polished tray service.' },
  { title: 'Evening Interior', caption: 'Warm lamps, muted jazz, and the bakery case lit at dusk.' },
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
