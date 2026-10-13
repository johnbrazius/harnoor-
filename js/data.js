/* =====================================================================
   SITE DATA — this is the ONE file you edit to update the website.
   ---------------------------------------------------------------------
   1. SITE      → your contact details & social links
   2. PROJECTS  → portfolio cards (Home + Portfolio pages)
   3. REVIEWS   → approved client reviews (Home + Reviews pages)
   4. PACKAGES  → pricing cards (Packages page)

   Tips
   - Keep the commas between items: { ... }, { ... }
   - Text goes inside "double quotes". If your text contains a double
     quote, use ’ or write \" instead.
   - After saving, refresh the page (or push to GitHub → Netlify) to see it.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. SITE — contact details
   --------------------------------------------------------------------- */
const SITE = {
  name: "Harnoor Singh",
  // WhatsApp number: country code + number, digits only (no +, no spaces)
  whatsapp: "917973353244",
  phoneDisplay: "+91 79733 53244",
  email: "harnoor459456@gmail.com",
  location: "Ludhiana, Punjab, India",

  // Message pre-filled when someone taps a general WhatsApp button
  defaultWhatsAppMessage:
    "Hi Harnoor! I saw your website and I'd like to know more about getting a website for my business.",

  // Social links — replace with your real profile URLs.
  // Leave a link as "" to hide that icon.
  social: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/"
  }
};


/* ---------------------------------------------------------------------
   2. PROJECTS — portfolio
   ---------------------------------------------------------------------
   To add a project, copy one { ... } block and change the values:

   {
     title:       "Business name",
     category:    "Dental Clinic",            // small label on the card
     location:    "Ludhiana",                 // optional
     description: "One or two short sentences about the project.",
     image:       "images/projects/my-project.webp",  // screenshot (1200×750 works best)
     url:         "https://client-site.netlify.app",  // live link ("" = shows "Live link coming soon")
     tags:        ["Appointment Booking", "Google Maps"],
     featured:    true,                       // true = also shown on the Home page (max 3)
     note:        ""                          // optional small badge, e.g. "Concept"
   },

   Screenshots: put the image in /images/projects/ and set `image` to its path.
   --------------------------------------------------------------------- */
const PROJECTS = [
  {
    title: "Dr. Pardeep Sharma — Child Specialist Clinic",
    category: "Doctor's Clinic",
    location: "SBS Nagar, Ludhiana",
    description:
      "A calm, trustworthy website for a pediatrician (MD Pediatrics, DM Neonatology, AIIMS). Parents can see services, clinic timings and fees, and request an appointment in a few taps.",
    image: "images/projects/dr-pardeep-sharma.svg",
    url: "", // ← paste the live link here
    tags: ["Appointment Request", "Google Maps", "Click-to-Call", "Parent FAQs", "Mobile Friendly"],
    featured: true,
    note: ""
  },
  {
    title: "Dr. Damian Hu, MD — Family Practice",
    category: "Medical Practice",
    location: "New York, USA",
    description:
      "A modern practice website for a family physician in Lower Manhattan, with a 3D layered hero, services, patient information, insurance details and an appointment request form.",
    image: "images/projects/dr-damian-hu.svg",
    url: "",
    tags: ["Appointment Request", "Patient FAQs", "Directions", "Accessibility", "SEO Setup"],
    featured: true,
    note: ""
  },
  {
    title: "Hometown Bar-B-Que",
    category: "Restaurant",
    location: "Brooklyn, New York",
    description:
      "A cinematic redesign concept for a well-known BBQ restaurant: a 3D scroll walk from the street into the restaurant, menus, events and catering pages.",
    image: "images/projects/hometown-bbq.svg",
    url: "",
    tags: ["3D Scroll Experience", "Menu Pages", "Catering Enquiry", "Events", "15 Pages"],
    featured: true,
    note: "Concept"
  },
  {
    title: "Website Growth Lab — eBook Store",
    category: "Online Store",
    location: "",
    description:
      "A complete digital bookstore with search and filters, cart, discount codes, Razorpay payments, secure ebook downloads and an admin dashboard to manage everything.",
    image: "images/projects/website-growth-lab.svg",
    url: "",
    tags: ["Online Payments", "Razorpay", "Admin Dashboard", "Secure Downloads", "Discount Codes"],
    featured: false,
    note: ""
  }
];


/* ---------------------------------------------------------------------
   3. REVIEWS — approved client reviews
   ---------------------------------------------------------------------
   New reviews from the "Leave a Review" form arrive in your Netlify
   dashboard (Forms → review). They do NOT appear on the site by
   themselves. To publish one, copy the details into a block below:

   {
     name:     "Client name",
     business: "Business name",
     rating:   5,                               // 1 to 5
     text:     "What they said…",
     photo:    "images/reviews/client.jpg",     // optional — "" for initials
     website:  "https://their-site.com",        // optional — "" to hide the link
     featured: true                             // true = also shown on Home (max 2)
   },
   --------------------------------------------------------------------- */
const REVIEWS = [
  // Add your first approved review here.
];

/* Example reviews — ONLY shown when you open a page with ?preview at the
   end of the address (e.g. reviews.html?preview), so you can see how
   review cards look before you have real ones. Visitors never see these. */
const SAMPLE_REVIEWS = [
  {
    name: "Example Client",
    business: "Example Dental Clinic",
    rating: 5,
    text: "This is an example review so you can preview the layout. Real reviews you approve will look exactly like this.",
    photo: "",
    website: "https://example.com",
    featured: true
  },
  {
    name: "Another Example",
    business: "Example Café",
    rating: 4,
    text: "Another example card for previewing the layout. Visitors never see these.",
    photo: "",
    website: "",
    featured: true
  }
];


/* ---------------------------------------------------------------------
   4. PACKAGES — pricing cards
   ---------------------------------------------------------------------
   `popular: true` highlights a card with the "Most Popular" badge.
   The "Get Started" button opens WhatsApp with the package name pre-filled.
   --------------------------------------------------------------------- */
const PACKAGES = [
  {
    name: "Basic",
    price: "₹8,000 – 10,000",
    priceNote: "one-time",
    tagline: "Get your business online, quickly and professionally.",
    features: [
      "Up to 5 pages",
      "Mobile-friendly (responsive) design",
      "Contact form",
      "WhatsApp chat button",
      "Click-to-call button",
      "Basic on-page SEO (titles & descriptions)",
      "Help with domain & hosting setup"
    ],
    popular: false
  },
  {
    name: "Standard",
    price: "₹20,000 – 30,000",
    priceNote: "one-time",
    tagline: "Everything a growing local business needs to get found and booked.",
    features: [
      "Up to 10 pages",
      "Everything in Basic",
      "SEO setup (Google Search Console & sitemap)",
      "Google Maps & Google Business Profile setup",
      "Booking / appointment form",
      "Photo gallery & social media links",
      "1 month of free support"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "₹50,000",
    priceNote: "one-time",
    tagline: "A fully custom website with advanced features.",
    features: [
      "Fully custom design",
      "Everything in Standard",
      "Advanced features (online payments, menus, product catalogue, etc.)",
      "Blog section",
      "Speed & performance optimisation",
      "Priority support",
      "3 months of free support"
    ],
    popular: false
  }
];
