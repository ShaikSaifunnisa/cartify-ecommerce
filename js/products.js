// CARTIFY — product catalogue
// Single source of truth for every page. Edit this file to add/remove products.
// Images come from LoremFlickr (loremflickr.com) — a free service that returns a
// real photo matching the given keyword(s). "lock" keeps the same photo showing
// every time instead of a new random one per page load — keep each lock unique.

const PRODUCTS = [
  // ---------- Clothing ----------
  { id: "cl-01", name: "Classic Crew T-Shirt", category: "Clothing", price: 499, mrp: 799, rating: 4.3, reviews: 1284,
    keyword: "tshirt", lock: 101, sizes: ["S","M","L","XL"],
    short: "A soft, breathable cotton t-shirt that holds its shape wash after wash.",
    details: ["100% combed cotton", "Pre-shrunk fabric", "Reinforced collar stitching", "Machine washable"] },
  { id: "cl-02", name: "Denim Jacket", category: "Clothing", price: 2499, mrp: 3499, rating: 4.5, reviews: 862,
    keyword: "denim,jacket", lock: 102, sizes: ["S","M","L","XL"],
    short: "A mid-wash denim jacket that layers over almost anything.",
    details: ["100% cotton denim", "Button-front closure", "Chest and side pockets", "Machine washable, cold cycle"] },
  { id: "cl-03", name: "Pullover Hoodie", category: "Clothing", price: 1399, mrp: 1999, rating: 4.4, reviews: 2103,
    keyword: "hoodie", lock: 103, sizes: ["S","M","L","XL","XXL"],
    short: "A fleece-lined hoodie built for everyday wear.",
    details: ["280gsm cotton-poly fleece", "Kangaroo pocket", "Adjustable drawstring hood", "Ribbed cuffs and hem"] },
  { id: "cl-04", name: "Formal Slim-Fit Shirt", category: "Clothing", price: 1199, mrp: 1799, rating: 4.1, reviews: 547,
    keyword: "shirt,formal", lock: 104, sizes: ["S","M","L","XL"],
    short: "A wrinkle-resistant formal shirt for work and events.",
    details: ["Cotton-blend weave", "Slim fit", "Button-down collar", "Easy-iron finish"] },
  { id: "cl-05", name: "Summer Floral Dress", category: "Clothing", price: 1699, mrp: 2399, rating: 4.6, reviews: 391,
    keyword: "dress,summer", lock: 105, sizes: ["XS","S","M","L"],
    short: "A lightweight floral dress cut for warm weather.",
    details: ["Breathable rayon blend", "Adjustable waist tie", "Midi length", "Hand wash recommended"] },

  // ---------- Footwear ----------
  { id: "fw-01", name: "Everyday Running Shoes", category: "Footwear", price: 2999, mrp: 4299, rating: 4.4, reviews: 1890,
    keyword: "running,shoes", lock: 201, sizes: ["UK 6","UK 7","UK 8","UK 9","UK 10"],
    short: "Cushioned running shoes built for daily mileage.",
    details: ["Breathable mesh upper", "EVA foam midsole", "Rubber outsole with flex grooves", "Weight: 260g (UK 8)"] },
  { id: "fw-02", name: "Classic Canvas Sneakers", category: "Footwear", price: 1899, mrp: 2599, rating: 4.3, reviews: 1033,
    keyword: "sneakers,shoes", lock: 202, sizes: ["UK 6","UK 7","UK 8","UK 9","UK 10"],
    short: "A classic low-top canvas sneaker that goes with everything.",
    details: ["Durable canvas upper", "Vulcanised rubber sole", "Padded collar", "Lace-up closure"] },
  { id: "fw-03", name: "Comfort Slide Sandals", category: "Footwear", price: 899, mrp: 1299, rating: 4.0, reviews: 672,
    keyword: "sandals", lock: 203, sizes: ["UK 6","UK 7","UK 8","UK 9","UK 10"],
    short: "Contoured slide sandals for everyday comfort.",
    details: ["Dual-density footbed", "Water-resistant strap", "Non-slip outsole", "Weight: 150g (UK 8, single)"] },
  { id: "fw-04", name: "Leather Formal Shoes", category: "Footwear", price: 3499, mrp: 4999, rating: 4.5, reviews: 418,
    keyword: "leather,shoes", lock: 204, sizes: ["UK 7","UK 8","UK 9","UK 10","UK 11"],
    short: "Polished leather formal shoes for office and events.",
    details: ["Genuine leather upper", "Cushioned insole", "Leather sole with rubber grip pad", "Lace-up closure"] },

  // ---------- Beauty ----------
  { id: "bt-01", name: "Matte Finish Lipstick", category: "Beauty", price: 399, mrp: 599, rating: 4.2, reviews: 2210,
    keyword: "lipstick", lock: 301, sizes: ["Classic Red","Nude Rose","Deep Plum"],
    short: "A long-wear matte lipstick that doesn't dry out your lips.",
    details: ["Transfer-resistant matte finish", "Infused with vitamin E", "8-hour wear", "Cruelty-free"] },
  { id: "bt-02", name: "Hydrating Face Serum", category: "Beauty", price: 799, mrp: 1099, rating: 4.4, reviews: 1567,
    keyword: "skincare,beauty", lock: 302, sizes: ["30ml"],
    short: "A lightweight serum with hyaluronic acid for daily hydration.",
    details: ["2% hyaluronic acid", "Fragrance-free formula", "Suitable for all skin types", "30ml dropper bottle"] },
  { id: "bt-03", name: "Signature Eau de Parfum", category: "Beauty", price: 1899, mrp: 2699, rating: 4.6, reviews: 743,
    keyword: "perfume", lock: 303, sizes: ["50ml"],
    short: "A warm, woody signature scent that lasts all day.",
    details: ["Top notes: bergamot, pink pepper", "Heart notes: jasmine, amber", "8–10 hour wear", "50ml spray bottle"] },
  { id: "bt-04", name: "Everyday Eyeshadow Palette", category: "Beauty", price: 1099, mrp: 1499, rating: 4.3, reviews: 905,
    keyword: "makeup,eyeshadow", lock: 304, sizes: ["12-Shade"],
    short: "A 12-shade neutral palette for everyday looks.",
    details: ["12 blendable shades", "Matte and shimmer finishes", "Built-in mirror", "Talc-free formula"] },

  // ---------- Home & Kitchen ----------
  { id: "hk-01", name: "Countertop Blender", category: "Home & Kitchen", price: 2799, mrp: 3799, rating: 4.3, reviews: 1120,
    keyword: "blender,kitchen", lock: 401, sizes: ["1.5L"],
    short: "A powerful blender for smoothies, chutneys, and batters.",
    details: ["500W motor", "1.5L shatterproof jar", "3-speed control + pulse", "Stainless steel blades"] },
  { id: "hk-02", name: "Non-Stick Cookware Set", category: "Home & Kitchen", price: 3299, mrp: 4599, rating: 4.4, reviews: 614,
    keyword: "pots,pans", lock: 402, sizes: ["5-Piece Set"],
    short: "A 5-piece non-stick set covering everyday cooking needs.",
    details: ["3-layer non-stick coating", "Induction compatible", "Heat-resistant handles", "Includes 2 lids"] },
  { id: "hk-03", name: "Ceramic Table Lamp", category: "Home & Kitchen", price: 1599, mrp: 2199, rating: 4.5, reviews: 388,
    keyword: "lamp", lock: 403, sizes: ["One Size"],
    short: "A warm-toned ceramic table lamp for a bedside or desk.",
    details: ["Ceramic base, linen shade", "E27 bulb socket (bulb not included)", "1.8m fabric cable", "On/off inline switch"] },
  { id: "hk-04", name: "Cotton Bedsheet Set", category: "Home & Kitchen", price: 1899, mrp: 2599, rating: 4.2, reviews: 729,
    keyword: "bed,bedroom", lock: 404, sizes: ["Queen","King"],
    short: "A breathable cotton bedsheet set with two pillow covers.",
    details: ["100% cotton, 300 thread count", "Fitted sheet, flat sheet, 2 pillow covers", "Fade-resistant dye", "Machine washable"] },

  // ---------- Electronics ----------
  { id: "el-01", name: "Wireless Earbuds", category: "Electronics", price: 2499, mrp: 3999, rating: 4.3, reviews: 3410,
    keyword: "earbuds,headphones", lock: 501, sizes: ["One Size"],
    short: "True wireless earbuds with active noise cancellation.",
    details: ["Active noise cancellation", "24h total battery with case", "Bluetooth 5.3", "IPX4 sweat resistance"] },
  { id: "el-02", name: "Fitness Smartwatch", category: "Electronics", price: 3999, mrp: 5999, rating: 4.4, reviews: 2287,
    keyword: "smartwatch", lock: 502, sizes: ["One Size"],
    short: "A smartwatch that tracks heart rate, sleep, and workouts.",
    details: ["1.4\" AMOLED display", "7-day battery life", "Heart rate & SpO2 tracking", "5ATM water resistance"] },
  { id: "el-03", name: "Portable Bluetooth Speaker", category: "Electronics", price: 1799, mrp: 2599, rating: 4.2, reviews: 1654,
    keyword: "speaker,bluetooth", lock: 503, sizes: ["One Size"],
    short: "A compact speaker with surprisingly deep bass.",
    details: ["12-hour battery life", "IPX6 water resistance", "Bluetooth 5.0", "Built-in mic for calls"] },
  { id: "el-04", name: "20000mAh Power Bank", category: "Electronics", price: 1499, mrp: 2199, rating: 4.1, reviews: 1902,
    keyword: "charger,battery", lock: 504, sizes: ["One Size"],
    short: "A high-capacity power bank for charging on the go.",
    details: ["20000mAh capacity", "18W fast charging, dual USB-A + USB-C", "LED charge indicator", "Charges a phone 4–5 times"] },

  // ---------- Accessories ----------
  { id: "ac-01", name: "Polarised Sunglasses", category: "Accessories", price: 999, mrp: 1499, rating: 4.3, reviews: 823,
    keyword: "sunglasses", lock: 601, sizes: ["One Size"],
    short: "UV400 polarised sunglasses with a lightweight frame.",
    details: ["UV400 protection", "Polarised lenses, glare reduction", "Lightweight TR90 frame", "Includes hard case"] },
  { id: "ac-02", name: "Leather Bifold Wallet", category: "Accessories", price: 899, mrp: 1299, rating: 4.4, reviews: 1056,
    keyword: "wallet,leather", lock: 602, sizes: ["One Size"],
    short: "A slim genuine leather wallet with 6 card slots.",
    details: ["Genuine leather", "6 card slots, 2 currency compartments", "RFID-blocking lining", "Slim bifold design"] },
  { id: "ac-03", name: "Minimalist Wristwatch", category: "Accessories", price: 2299, mrp: 3299, rating: 4.5, reviews: 1388,
    keyword: "watch", lock: 603, sizes: ["One Size"],
    short: "A clean-faced analog watch with a stainless steel strap.",
    details: ["Japanese quartz movement", "Stainless steel strap", "Mineral glass, scratch-resistant", "5ATM water resistance"] },
  { id: "ac-04", name: "Everyday Canvas Backpack", category: "Accessories", price: 1799, mrp: 2499, rating: 4.4, reviews: 967,
    keyword: "backpack", lock: 604, sizes: ["One Size"],
    short: "A 20L canvas backpack sized for daily carry.",
    details: ["Water-resistant canvas", "Padded 14\" laptop sleeve", "Front organiser pocket", "Weight: 0.6 kg / Capacity: 20L"] }
];

const CATEGORIES = ["Clothing", "Footwear", "Beauty", "Home & Kitchen", "Electronics", "Accessories"];
const BESTSELLER_IDS = ["cl-02","fw-01","bt-01","el-01","hk-01","ac-03"];
const NEW_ARRIVAL_IDS = ["cl-05","fw-04","bt-04","hk-04","el-04","ac-04"];

function formatPrice(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function discountPercent(p) {
  if (!p.mrp || p.mrp <= p.price) return 0;
  return Math.round((1 - p.price / p.mrp) * 100);
}

function starsHTML(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let s = "";
  for (let i = 0; i < 5; i++) {
    if (i < full) s += "★";
    else if (i === full && half) s += "⯨";
    else s += "☆";
  }
  return s;
}

// Returns a real, keyword-matched photo URL. lock keeps the same photo stable
// across reloads; pass a different lock (e.g. lock+1000) to get a different
// real photo of the same keyword — used for a product's photo gallery.
function productImage(keyword, w, h, lock) {
  return `https://loremflickr.com/${w}/${h}/${encodeURIComponent(keyword)}/all?lock=${lock}`;
}
