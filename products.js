// Fireline Defense — Product & Service Catalog
// Each entry maps to one or more inspection failure tags.
// Vendors add their own entries. You control featured/partner status.

const PRODUCTS = [

  // ─── ZONE 0 (0–5 ft Ignition Zone) ───────────────────────────────────────

  {
    id: "z0-ember-resistant-vent",
    name: "Ember-Resistant Vent Covers",
    vendor: "Vulcan Vents",
    type: "product",
    tags: ["z0-vents", "structural-hardening", "ember-intrusion"],
    description: "Intumescent vent covers that seal automatically when exposed to ember showers. Direct replacement for standard foundation and soffit vents.",
    price_range: "$25–$65 per vent",
    service_area: "National (Ships)",
    url: "https://www.vulcanvents.com",
    featured: false
  },
  {
    id: "z0-noncombustible-mulch",
    name: "Class A Non-Combustible Decomposed Granite",
    vendor: "Home Depot",
    type: "product",
    tags: ["z0-combustible-mulch", "z0-surface-cover"],
    description: "Decomposed granite for replacing wood mulch within 5 feet of structure. Zero ignition risk, retains moisture.",
    price_range: "$5–$8 per bag",
    service_area: "National (In-store & Delivery)",
    url: "https://www.homedepot.com/b/Outdoors-Garden-Center-Landscaping-Decorative-Stone-Decomposed-Granite/N-5yc1vZc8ow",
    featured: false
  },
  {
    id: "z0-deck-clearing",
    name: "Deck & Patio Debris Clearing Service",
    vendor: "Wetline",
    type: "service",
    tags: ["z0-deck-debris", "z0-combustible-storage", "z0-surface-cover"],
    description: "Professional clearing and treatment of combustible materials from decks, patios, and eaves. Includes spot application of fire-retardant coating on wood surfaces.",
    price_range: "$$",
    service_area: "Los Angeles County",
    url: "https://wetline.com",
    featured: true
  },

  // ─── ZONE 1 (5–30 ft Defensible Space) ───────────────────────────────────

  {
    id: "z1-vegetation-removal",
    name: "Vegetation & Ladder Fuel Removal",
    vendor: "Wetline",
    type: "service",
    tags: ["z1-ladder-fuels", "z1-dead-fuels", "z1-continuous-fuels", "z1-shrub-spacing"],
    description: "Full vegetation removal, chipping, and haul-away within the 5–30 ft zone. Includes limbing up trees to 6 ft and removing ladder fuel connections.",
    price_range: "$$$",
    service_area: "Los Angeles County",
    url: "https://wetline.com",
    featured: true
  },
  {
    id: "z1-hydromulch",
    name: "Hydroseeding & Erosion Control",
    vendor: "Wetline",
    type: "service",
    tags: ["z1-bare-soil", "z1-erosion", "z2-slope-treatment"],
    description: "Hydromulch application using fire-resistant seed mix to establish ground cover on bare slopes without creating continuous fuel load.",
    price_range: "$$$",
    service_area: "Los Angeles County",
    url: "https://wetline.com",
    featured: true
  },
  {
    id: "z1-dead-fuel-removal",
    name: "Dead & Dry Fuel Clearing",
    vendor: "GreenWaste Recovery",
    type: "service",
    tags: ["z1-dead-fuels", "z1-continuous-fuels", "z2-dead-fuels"],
    description: "Removal and green-waste disposal of dead grass, shrubs, branches, and dried debris. Compliant with local burn ordinances.",
    price_range: "$$",
    service_area: "Southern California",
    url: "https://greenwaste.com",
    featured: false
  },
  {
    id: "z1-fire-retardant-spray",
    name: "Long-Term Fire Retardant Application",
    vendor: "Phos-Chek Home Defense",
    type: "product",
    tags: ["z1-continuous-fuels", "z1-shrub-spacing", "z2-fuel-reduction"],
    description: "Home defense fire retardant that bonds to vegetation and remains effective through a full dry season. Apply to retained shrubs and ground cover.",
    price_range: "$40–$90 per gallon",
    service_area: "National (Ships)",
    url: "https://www.phoschek.com/home-defense",
    featured: false
  },

  // ─── ZONE 2 (30–100 ft Fuel Reduction) ───────────────────────────────────

  {
    id: "z2-masticator",
    name: "Masticator / Brush Grinding Service",
    vendor: "SoCal Brush Control",
    type: "service",
    tags: ["z2-fuel-reduction", "z2-dense-brush", "z2-slope-treatment"],
    description: "Tracked masticator for large-scale brush grinding in steep or inaccessible terrain. Best for parcels with heavy chaparral in the 30–100 ft zone.",
    price_range: "$$$$",
    service_area: "San Diego & Los Angeles Counties",
    url: "https://socalbrushcontrol.com",
    featured: false
  },
  {
    id: "z2-chipping",
    name: "Tree & Shrub Chipping / Haul-Away",
    vendor: "Wetline",
    type: "service",
    tags: ["z2-fuel-reduction", "z2-dense-brush", "z1-ladder-fuels"],
    description: "On-site chipping of cut vegetation with mulch haul-away or on-site spreading at recommended depths.",
    price_range: "$$",
    service_area: "Los Angeles County",
    url: "https://wetline.com",
    featured: true
  },

  // ─── STRUCTURAL HARDENING ────────────────────────────────────────────────

  {
    id: "sh-roof-class-a",
    name: "Class A Roof Material Replacement",
    vendor: "EagleView Roofing",
    type: "service",
    tags: ["sh-roof-class", "sh-roof-condition"],
    description: "Full roof replacement using Class A fire-rated materials (metal, concrete tile, or Class A asphalt). Includes removal of wood shake or lower-rated roofing.",
    price_range: "$$$$",
    service_area: "Southern California",
    url: "https://eagleview.com",
    featured: false
  },
  {
    id: "sh-eave-soffit-screening",
    name: "Eave & Soffit 1/8\" Metal Mesh Screening",
    vendor: "Home Depot",
    type: "product",
    tags: ["sh-eaves", "sh-openings", "ember-intrusion"],
    description: "1/8-inch galvanized mesh roll for screening open eaves and soffits against ember intrusion. DIY-installable.",
    price_range: "$15–$40",
    service_area: "National (In-store & Delivery)",
    url: "https://www.homedepot.com/b/Hardware-Hardware-Cloth-Wire-Mesh/N-5yc1vZc2co",
    featured: false
  },
  {
    id: "sh-dual-pane-windows",
    name: "Dual-Pane Tempered Glass Window Upgrade",
    vendor: "Milgard Windows & Doors",
    type: "product",
    tags: ["sh-windows", "sh-glazing"],
    description: "Dual-pane tempered glass windows rated for wildfire exposure. Tempered glass resists radiant heat that causes single-pane failure and ignition.",
    price_range: "$$$$",
    service_area: "National",
    url: "https://www.milgard.com/products/windows",
    featured: false
  },
  {
    id: "sh-deck-composite",
    name: "Class A Fire-Rated Composite Decking",
    vendor: "Trex",
    type: "product",
    tags: ["sh-deck-material", "sh-deck-condition"],
    description: "Class A fire-rated composite decking replacing combustible wood. Ember-resistant surface reduces deck ignition — one of the top structure-loss pathways.",
    price_range: "$$$",
    service_area: "National (Dealer)",
    url: "https://www.trex.com/why-trex/trex-vs-wood/fire-performance",
    featured: false
  },
  {
    id: "sh-siding-hardie",
    name: "Fiber Cement Siding (HardiePlank)",
    vendor: "James Hardie",
    type: "product",
    tags: ["sh-siding-material", "sh-siding-condition"],
    description: "Non-combustible fiber cement siding rated for wildfire-prone areas. Replaces wood, vinyl, or lap siding that fails ignition resistance standards.",
    price_range: "$$$",
    service_area: "National (Contractor Install)",
    url: "https://www.jameshardie.com/products/hardieplank-lap-siding",
    featured: false
  },

  // ─── ACCESSIBILITY ───────────────────────────────────────────────────────

  {
    id: "access-address-marking",
    name: "Reflective Address Marker Post",
    vendor: "Amazon",
    type: "product",
    tags: ["access-address-visibility", "access-signage"],
    description: "High-visibility reflective address marker for rural or hidden driveways. Ensures emergency responders can locate the property at night or in smoke.",
    price_range: "$20–$60",
    service_area: "National (Ships)",
    url: "https://www.amazon.com/s?k=reflective+address+marker+post+fire",
    featured: false
  },
  {
    id: "access-gate-openers",
    name: "Emergency Access Gate Opener (Knox Box Compatible)",
    vendor: "LiftMaster",
    type: "product",
    tags: ["access-gate", "access-emergency-override"],
    description: "Gate opener with Knox Box key switch integration so fire departments can override locked gates without causing damage. Required by many fire codes in WUI zones.",
    price_range: "$$$",
    service_area: "National (Dealer)",
    url: "https://www.liftmaster.com/commercial/products/gate-operators",
    featured: false
  },

];

export default PRODUCTS;
