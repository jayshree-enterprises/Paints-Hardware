/* ========================================
   JAYSHREE PAINTS & HARDWARE - JAVASCRIPT
   Interactive Features & Functionality
   ======================================== */

function makePackOptions(prices) {
    return Object.entries(prices).map(([size, price]) => ({
        size,
        mrp: `₹${Number(price).toLocaleString('en-IN')}`
    }));
}

const productsData = [
    { id: 1, name: 'Asian Paints Ace Exterior Emulsion', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Weather-resistant exterior wall finish made for long coating life and easy maintenance.', image: 'assets/images/asian-paints-ace-exterior-emulsion.png', packOptions: makePackOptions({ '20 L': 5030, '10 L': 2690, '4 L': 1133, '1 L': 301 }), stock: 'In Stock', stockQuantity: 12, isVisible: true, isFeatured: true, isNew: false },
    { id: 2, name: 'Asian Paints Apcolite Premium Interior Emulsion', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Washable interior paint with stain guard and premium finish.', image: 'assets/images/asian-paints-apcolite-premium-emulsion.png', packOptions: makePackOptions({ '20 L': 8750, '10 L': 4550, '4 L': 1885, '1 L': 489 }), stock: 'In Stock', stockQuantity: 9, isVisible: true, isFeatured: true, isNew: false },
    { id: 3, name: 'Asian Paints TruCare Wood Primer', category: 'paints', subcategory: 'Primer', application: 'Wood surfaces', description: 'Adhesion-focused wood primer for smooth painting on timber.', image: 'assets/images/asian-paints-wood-primer.png', packOptions: makePackOptions({ '20 L': 5750, '10 L': 3000, '4 L': 1224, '1 L': 324 }), stock: 'In Stock', stockQuantity: 6, isVisible: true, isFeatured: true, isNew: false },
    { id: 4, name: 'Asian Paints Ace Sparc Exterior Emulsion', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior acrylic finish built for weatherproof wall protection.', image: 'assets/images/asian-paints-ace-sparc.png', packOptions: makePackOptions({ '20 L': 3933, '10 L': 2212, '4 L': 947, '1 L': 253 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 5, name: 'Asian Paints Apex Dust Proof Exterior Emulsion', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Dust-proof exterior emulsion for stronger wall durability.', image: 'assets/images/asian-paints-apex-dustproof-emulsion.png', packOptions: makePackOptions({ '20 L': 8510, '10 L': 4470, '4 L': 1895, '1 L': 494 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 6, name: 'Asian Paints TruCare Interior Wall Primer', category: 'paints', subcategory: 'Primer', application: 'Interior', description: 'Interior primer that improves coverage, adhesion and surface finish.', image: 'assets/images/Interior wall primer.png', packOptions: makePackOptions({ '20 L': 5280, '10 L': 2770, '4 L': 1158, '1 L': 309 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 7, name: 'Asian Paints Apcolite Premium Satin Emulsion', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Elegant satin finish for premium interiors and easy upkeep.', image: 'assets/images/asian-paints-apcolite-premium-satin-emulsion.png', packOptions: makePackOptions({ '20 L': 10060, '4 L': 2180, '1 L': 564 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 8, name: 'Asian Paints Royale Aspira Luxury Emulsion', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Luxury emulsion with rich depth and premium finish quality.', image: 'assets/images/asian-paints-royale-aspira.png', packOptions: makePackOptions({ '20 L': 20210, '10 L': 10340, '4 L': 4295, '1 L': 1102 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: true, isNew: false },
    { id: 9, name: 'Asian Paints Royale Luxury Emulsion', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Premium interior paint with stain washability and antibacterial protection.', image: 'assets/images/asian-paints-royale-luxury-emulsion.png', packOptions: makePackOptions({ '20 L': 15210, '10 L': 7750, '4 L': 3170, '1 L': 810 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: true, isNew: false },
    { id: 10, name: 'Asian Paints Royale Matt Luxury Emulsion', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Matte texture-oriented interior finish for premium wall styling.', image: 'assets/images/asian-paints-royale-matt.png', packOptions: makePackOptions({ '20 L': 16730, '10 L': 8530, '4 L': 3480, '1 L': 889 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 11, name: 'Asian Paints Royale Shyne Luxury Emulsion', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Sheen finish for a polished, elegant interior look.', image: 'assets/images/asian-paints-royale-shyne-luxury-emulsion.png', packOptions: makePackOptions({ '20 L': 16570, '10 L': 8440, '4 L': 3455, '1 L': 879 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 12, name: 'Asian Paints Tractor Emulsion', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Practical, budget-friendly interior emulsion for everyday walls.', image: 'assets/images/asian-paints-tractor-emulsion.png', packOptions: makePackOptions({ '20 L': 4180, '10 L': 2230, '4 L': 953, '1 L': 258 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 13, name: 'Asian Paints Tractor Emulsion Shyne', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Sheen-based interior emulsion for a refined finish.', image: 'assets/images/asian-paints-tractor-emulsion-shyne.png', packOptions: makePackOptions({ '20 L': 5240, '10 L': 2760, '4 L': 1181, '1 L': 312 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 14, name: 'Asian Paints Tractor Sparc Emulsion', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Everyday interior paint with smooth finish and practicality.', image: 'assets/images/asian-paints-tractor-sparc.png', packOptions: makePackOptions({ '20 L': 3243, '10 L': 1699, '4 L': 731, '1 L': 196 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 15, name: 'Asian Paints Apcolite Premium Gloss Enamel', category: 'paints', subcategory: 'Enamel', application: 'Metal surfaces', description: 'Gloss finish for metal surfaces with protective durability.', image: 'assets/images/asian-paints-apcolite-premium-gloss-enamel.png', packOptions: makePackOptions({ '20 L': 7370, '4 L': 1590, '1 L': 412 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: true, isNew: false },
    { id: 16, name: 'Asian Paints Tractor Enamel', category: 'paints', subcategory: 'Enamel', application: 'Metal surfaces', description: 'Strong enamel finish for metal and wood surfaces.', image: 'assets/images/asian-paints-tractor-enamel.png', packOptions: makePackOptions({ '20 L': 8264, '4 L': 1770, '1 L': 457 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 17, name: 'Asian Paints TruCare Red Oxide Metal Primer', category: 'paints', subcategory: 'Primer', application: 'Metal surfaces', description: 'Red oxide primer for metal surfaces and improved adhesion.', image: 'assets/images/asian-paints-trucare-red-oxide-metal-primer.png', packOptions: makePackOptions({ '20 L': 5120, '10 L': 2680, '4 L': 1115, '1 L': 297 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 18, name: 'Asian Paints SmartCare Damp Sheath Interior', category: 'paints', subcategory: 'Waterproofing & Coatings', application: 'Interior', description: 'Moisture-resistant coating for damp and wet interior surfaces.', image: 'assets/images/asian-paints-smartcare-damp-sheath-interior.png', packOptions: makePackOptions({ '20 L': 7000, '10 L': 3700, '4 L': 1700, '1 L': 500 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: true, isNew: false },
    { id: 19, name: 'Asian Paints Sparc Exterior Primer', category: 'paints', subcategory: 'Primer', application: 'Exterior', description: 'Exterior primer for sealing and smoother topcoat consistency.', image: 'assets/images/asian-paints-sparc-exterior-primer.png', packOptions: makePackOptions({ '20 L': 3285, '10 L': 1800 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 20, name: 'Asian Paints Sparc Ultra Exterior Primer', category: 'paints', subcategory: 'Primer', application: 'Exterior', description: 'Advanced exterior primer with durable bonding strength.', image: 'assets/images/asian-paints-sparc-ultra-exterior-primer.png', packOptions: makePackOptions({ '20 L': 3285, '10 L': 1800, '4 L': 760, '1 L': 200 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 21, name: 'Asian Paints Ultima Stretch', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Flexible exterior coating built to handle movement and weather shifts.', image: 'assets/images/asian-paints-ultima-stretch.png', packOptions: makePackOptions({ '20 L': 13210, '10 L': 6796, '4 L': 2791, '1 L': 713 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 22, name: 'Asian Paints WoodTech Emporio PU Clear', category: 'paints', subcategory: 'Wood Finish', application: 'Wood surfaces', description: 'Polyurethane wood finish offering high durability and shine.', image: 'assets/images/asian-paints-woodtech-emporio-pu-clear.png', packOptions: makePackOptions({ '4 L': 7676 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: true, isNew: false },
    { id: 23, name: 'Asian Paints Apex Ultima Protek', category: 'paints', subcategory: 'Waterproofing & Coatings', application: 'Exterior', description: 'Exterior coating with Graphene, lamination guard and fiber technology.', image: 'assets/images/asian-paints-apex-ultima-protek.png', packOptions: makePackOptions({ '20 L': 13840, '10 L': 7162, '4 L': 3068, '1 L': 836 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: true, isNew: false },
    { id: 24, name: 'Asian Paints Nilaya Arc Matt Lime-Based Finish', category: 'paints', subcategory: 'Specialty Finish', application: 'Interior', description: 'Decorative lime-based finish for premium interior walls.', image: 'assets/images/asian-paints-nilaya-arc-matt.png', packOptions: makePackOptions({ '20 L': 21000, '10 L': 10500, '4 L': 4200, '1 L': 1050 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 25, name: 'Asian Paints Royale Glitz', category: 'paints', subcategory: 'Specialty Finish', application: 'Interior', description: 'Decorative luxury finish for premium interiors and feature walls.', image: 'assets/images/asian-paints-royale-glitz.png', packOptions: makePackOptions({ '20 L': 17836, '10 L': 9052, '4 L': 3656, '1 L': 935 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 26, name: 'NeoBharat Latex Interior Paint', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Latex interior paint with dependable coverage and smooth finish.', image: 'assets/images/asian-paints-neobharat-latex-interior-paint.png', packOptions: makePackOptions({ '20 kg': 1950, '10 kg': 1065, '5 kg': 585, '2 kg': 245 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 27, name: 'Apex Ultima Protek Duralife', category: 'paints', subcategory: 'Waterproofing & Coatings', application: 'Exterior', description: 'Exterior coating engineered for long service life and weather protection.', image: 'assets/images/asian-paints-ultima-protek-duralife.png', packOptions: makePackOptions({ '20 L': 18560, '10 L': 9280, '4 L': 3714, '1 L': 928 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 28, name: 'Apex Shyne', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior sheen paint with strong coverage and weather resilience.', image: 'assets/images/asian-paints-apex-shyne.png', packOptions: makePackOptions({ '20 L': 8710, '10 L': 4600, '4 L': 1924, '1 L': 509 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 29, name: 'Ace Power+', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior acrylic paint for robust weather protection.', image: 'assets/images/asian-paints-ace-power-plus.png', packOptions: makePackOptions({ '20 L': 6347, '10 L': 3337, '4 L': 1419, '1 L': 370 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 30, name: 'Ace Suprema', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Premium ace exterior finish with strong durability and finish.', image: 'assets/images/asian-paints-ace-suprema.png', packOptions: makePackOptions({ '20 L': 10200, '10 L': 5300, '4 L': 2200, '1 L': 580 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 31, name: 'Asian Paints Nilaya Arc Matt Lime-Based Finish', category: 'paints', subcategory: 'Specialty Finish', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-nilaya-arc-matt.png', packOptions: makePackOptions({}), price: 'MRP ₹1,050/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 32, name: 'Asian Paints Nilaya Arc Pearlescent', category: 'paints', subcategory: 'Specialty Finish', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-nilaya-arc-pearlescent.png', packOptions: makePackOptions({}), price: 'MRP ₹1,200/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 33, name: 'Asian Paints Royale Glitz Reserv', category: 'paints', subcategory: 'Specialty Finish', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-royale-glitz-reserv.png', packOptions: makePackOptions({}), price: 'MRP ₹950/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 34, name: 'Asian Paints Royale Glitz Ultra Matt', category: 'paints', subcategory: 'Specialty Finish', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-royale-glitz-utra-matt.png', packOptions: makePackOptions({ '20 L': 18096, '10 L': 9182, '4 L': 3708, '1 L': 948 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 35, name: 'Asian Paints Royale Advanced', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-royale-advanced.png', packOptions: makePackOptions({ '20 L': 15340, '10 L': 7820, '4 L': 3205, '1 L': 816 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 36, name: 'Asian Paints Royale Shyne Advanced', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-royale-shyne-advanced.png', packOptions: makePackOptions({}), price: 'MRP ₹837/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 37, name: 'Asian Paints Royale Lustre', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-royale-lustre.png', packOptions: makePackOptions({}), price: 'MRP ₹718/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 38, name: 'Asian Paints Apcolite All Protek Matt', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-apcolite-all-protek-matte.png', packOptions: makePackOptions({ '20 L': 10117, '10 L': 5270, '4 L': 2196, '1 L': 556 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 39, name: 'Asian Paints Apcolite Advanced Shyne Premium Emulsion', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-apcolite-advanced-shyne-premium-emulsion.png', packOptions: makePackOptions({ '20 L': 9960, '10 L': 5220, '4 L': 2170, '1 L': 548 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 40, name: 'Asian Paints Apcolite Advanced Premium Emulsion', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-apcolite-advanced-premium-emulsion.png', packOptions: makePackOptions({ '20 L': 10002, '10 L': 5219, '4 L': 2162, '1 L': 557 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 41, name: 'Asian Paints Tractor Shyne Advanced', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-tractor-shyne-advanced.png', packOptions: makePackOptions({}), price: 'MRP ₹275/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 42, name: 'Asian Paints Tractor Emulsion Advanced', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-tractor-emulsion-advanced.png', packOptions: makePackOptions({ '20 L': 4240, '10 L': 2227, '4 L': 968, '1 L': 260 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 43, name: 'Asian Paints Tractor Ultraa', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-tractor-ultraa.png', packOptions: makePackOptions({}), price: 'MRP ₹209/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 44, name: 'Asian Paints Tractor Sparc Ultra', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-tractor-sparc-ultra.png', packOptions: makePackOptions({ '20 L': 3287, '10 L': 1719, '4 L': 743, '1 L': 199 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 45, name: 'Asian Paints Tractor Sparc Shyne', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-tractor-sparc-shyne.png', packOptions: makePackOptions({}), price: 'MRP ₹157/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 46, name: 'Asian Paints NeoBharat Latex Interior Paint', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-neobharat-latex-interior-paint.png', packOptions: makePackOptions({ '20 kg': 1950, '10 kg': 1065, '5 kg': 585, '2 kg': 245 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 47, name: 'Asian Paints Tractor Aqualock', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-tractor-aqualock.png', packOptions: makePackOptions({ '20 L': 2120, '10 L': 1140, '5 L': 615, '2 L': 260, '1 L': 136 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 48, name: 'Asian Paints Tractor Uno', category: 'paints', subcategory: 'Emulsion', application: 'Interior', description: 'Interior paint.', image: 'assets/images/asian-paints-tractor-uno.png', packOptions: makePackOptions({ '20 L': 1580, '10 L': 870, '5 L': 480, '2 L': 201 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 49, name: 'Asian Paints Apex Ultima Protek Duralife', category: 'paints', subcategory: 'Waterproofing & Coatings', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-ultima-protek-duralife.png', packOptions: makePackOptions({}), price: 'MRP ₹928/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 50, name: 'Asian Paints Apex Ultima Protek Advanced', category: 'paints', subcategory: 'Waterproofing & Coatings', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-ultima-protek-advanced.png', packOptions: makePackOptions({}), price: 'MRP ₹700/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 51, name: 'Asian Paints Apex Ultima', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-ultima.png', packOptions: makePackOptions({}), price: 'MRP ₹636/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 52, name: 'Asian Paints Apex Ultima Metallics', category: 'paints', subcategory: 'Specialty Finish', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-ultima-metallics.png', packOptions: makePackOptions({ '4 L': 6456, '1 L': 1697 }), price: 'MRP ₹1,614/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 53, name: 'Asian Paints Apex Dust Proof Ultraa', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-dustproof-ultraa.png', packOptions: makePackOptions({}), price: 'MRP ₹430/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 54, name: 'Asian Paints Apex Shyne Dust Proof Advanced', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-shyne-dustproof-advanced.png', packOptions: makePackOptions({}), price: 'MRP ₹441/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 55, name: 'Asian Paints Apex Shyne', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-shyne.png', packOptions: makePackOptions({ '20 L': 8710, '10 L': 4600, '4 L': 1924, '1 L': 509 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 56, name: 'Asian Paints Apex Advanced Dust Proof', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-advanced.png', packOptions: makePackOptions({ '20 L': 8600, '10 L': 4509, '4 L': 1930, '1 L': 500 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 57, name: 'Asian Paints Ace Ultraa', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-ace-ultraa.png', packOptions: makePackOptions({}), price: 'MRP ₹252/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 58, name: 'Asian Paints Ace Sparc Shyne', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-ace-sparc-shyne.png', packOptions: makePackOptions({}), price: 'MRP ₹166/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 59, name: 'Asian Paints Ace Shyne Advanced', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-ace-shyne-advanced.png', packOptions: makePackOptions({}), price: 'MRP ₹281/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 60, name: 'Asian Paints Ace Power+', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-ace-power-plus.png', packOptions: makePackOptions({ '20 L': 6347, '10 L': 3337, '4 L': 1419, '1 L': 370 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 61, name: 'Asian Paints Ace Shyne', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-ace-shyne.png', packOptions: makePackOptions({ '20 L': 5510, '10 L': 2960, '4 L': 1234, '1 L': 325 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 62, name: 'Asian Paints Ace Advanced', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-ace-advanced.png', packOptions: makePackOptions({ '20 L': 5100, '10 L': 2730, '4 L': 1170, '1 L': 306 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 63, name: 'Asian Paints Ace Sparc Ultra', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-ace-sparc-ultra.png', packOptions: makePackOptions({ '20 L': 4065, '10 L': 2285, '4 L': 978, '1 L': 263 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 64, name: 'Asian Paints Ace Sparc Colours', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-ace-sparc-colours.png', packOptions: makePackOptions({ '4 L': 1269, '1 L': 334 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 65, name: 'Asian Paints NeoBharat Latex Exterior Paint', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-neobharat-latex-exterior-paint.png', packOptions: makePackOptions({ '20 kg': 2500, '10 kg': 1300, '5 kg': 675, '2 kg': 300 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 66, name: 'Asian Paints Apex Tile Guard Clear Matt', category: 'paints', subcategory: 'Waterproofing & Coatings', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-tile-guard-clear-matt.png', packOptions: makePackOptions({ '4 L': 2513, '1 L': 664 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 67, name: 'Asian Paints Apex Floor Guard', category: 'paints', subcategory: 'Waterproofing & Coatings', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-floor-guard.png', packOptions: makePackOptions({}), price: 'MRP ₹667/L', stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 68, name: 'Asian Paints Apex Tile Guard', category: 'paints', subcategory: 'Waterproofing & Coatings', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-tile-guard.png', packOptions: makePackOptions({ '18 L': 8330, '9 L': 4280, '3.6 L': 1753, '0.9 L': 442 }), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 69, name: 'Asian Paints Apex Ultima Protek Suprema', category: 'paints', subcategory: 'Waterproofing & Coatings', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-ultima-protek-suprema.png', packOptions: makePackOptions({}), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 70, name: 'Asian Paints Apex Ultima Stretch Suprema', category: 'paints', subcategory: 'Waterproofing & Coatings', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-ultima-stretch-suprema.png', packOptions: makePackOptions({}), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 71, name: 'Asian Paints Apex Ultima Suprema', category: 'paints', subcategory: 'Waterproofing & Coatings', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-ultima-suprema.png', packOptions: makePackOptions({}), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 72, name: 'Asian Paints Apex Suprema', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-suprema.png', packOptions: makePackOptions({}), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 73, name: 'Asian Paints Apex Ultima Suprema Anti-Carbonation Coating', category: 'paints', subcategory: 'Waterproofing & Coatings', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-apex-ultima-suprema-anti-carbonation-coating.png', packOptions: makePackOptions({}), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false },
    { id: 74, name: 'Asian Paints Ace Suprema', category: 'paints', subcategory: 'Emulsion', application: 'Exterior', description: 'Exterior paint.', image: 'assets/images/asian-paints-ace-suprema.png', packOptions: makePackOptions({}), stock: 'Contact to check availability', stockQuantity: null, isVisible: true, isFeatured: false, isNew: false }
];

const reviewsData = [
    { id: 1, author: 'Samriddhi Roy', rating: 5, text: "It's been good. experience They have good stocks of hardware materials.", date: '10 months ago' },
    { id: 2, author: 'Rajive Tripathi', rating: 5, text: 'Nice experience, reasonable price and good behaviour.', date: '11 months ago' },
    { id: 3, author: 'Baranwal Trading', rating: 5, text: '', date: '2 months ago' },
    { id: 4, author: 'Abhinav Mishra', rating: 5, text: '', date: '1 year ago' },
    { id: 5, author: 'Saumitra Vishvash', rating: 5, text: '', date: '1 year ago' }
];

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const shopStatus = document.getElementById('shopStatus');
const productsGrid = document.getElementById('productsGrid');
const categoryCards = document.querySelectorAll('.category-card');
const packSizeFilter = document.getElementById('packSizeFilter');
const productSubcategoryFilter = document.getElementById('productSubcategoryFilter');
const catalogToggle = document.getElementById('catalogToggle');
const catalogTitle = document.getElementById('catalogTitle');
const catalogEyebrow = document.getElementById('catalogEyebrow');
const catalogEmpty = document.getElementById('catalogEmpty');
const contactForm = document.getElementById('contactForm');
const reviewsGrid = document.getElementById('reviewsGrid');
const featuredProductIds = new Set(productsData.filter(product => product.isFeatured).map(product => product.id));

const productGroups = {
    all: { title: 'All products', matches: () => true },
    'interior-luxury': { title: 'Interior Luxury', matches: product => product.application === 'Interior' && /royale|apcolite|nilaya/i.test(product.name) },
    'exterior-weatherproof': { title: 'Exterior Weatherproof', matches: product => product.application === 'Exterior' && product.subcategory === 'Emulsion' },
    waterproofing: { title: 'Waterproofing Solutions', matches: product => product.subcategory === 'Waterproofing & Coatings' || /damp|protek|duralife|tile guard|floor guard/i.test(product.name) },
    'enamels-finishes': { title: 'Enamels & Finishes', matches: product => ['Enamel', 'Wood Finish', 'Specialty Finish'].includes(product.subcategory) },
    'hardware-tools': { title: 'Hardware & Tools', matches: product => ['hardware', 'tools'].includes(product.category) }
};

let activeProductGroup = 'all';
let showFullCatalog = false;

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function updateShopStatus() {
    const timeParts = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', weekday: 'long', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
    const shopDay = timeParts.find(part => part.type === 'weekday').value;
    const hours = Number(timeParts.find(part => part.type === 'hour').value);
    const minutes = Number(timeParts.find(part => part.type === 'minute').value);
    const currentTime = hours * 60 + minutes;
    const openTime = 9 * 60;
    const closeTime = 19 * 60;
    const isOpen = currentTime >= openTime && currentTime < closeTime;

    if (isOpen) {
        shopStatus.classList.add('open');
        shopStatus.classList.remove('closed');
        shopStatus.querySelector('.status-text').textContent = 'Open Now';
    } else {
        shopStatus.classList.add('closed');
        shopStatus.classList.remove('open');
        shopStatus.querySelector('.status-text').textContent = 'Closed';
    }

    document.querySelectorAll('.hours-table tbody tr').forEach(row => {
        const rowDay = row.cells[0]?.textContent.trim();
        row.classList.toggle('today', rowDay === shopDay);
    });
}

updateShopStatus();
setInterval(updateShopStatus, 60000);

function getProductPackOptions(product) {
    return product.packOptions || [];
}

function getProductImageMarkup(product) {
    if (typeof product.image === 'string' && product.image.startsWith('assets/images/')) {
        return `<img src="${product.image}" alt="${product.name}" loading="lazy">`;
    }
    return product.image || '<span class="product-image-placeholder">Image coming soon</span>';
}

function getProductStockLabel(product) {
    if (!Number.isFinite(product.stockQuantity)) {
        return product.stock;
    }
    return product.stockQuantity > 0 ? `In Stock (${product.stockQuantity})` : 'Out of Stock';
}

function getProductPriceLabel(product, pack) {
    if (pack?.mrp) {
        return `MRP ${pack.mrp}`;
    }
    return product.price || 'Contact for price';
}

function createProductCard(product) {
    const packOptions = getProductPackOptions(product);
    const selectedPack = packOptions[0];
    const priceLabel = getProductPriceLabel(product, selectedPack);
    const stockLabel = getProductStockLabel(product);
    const stockClass = stockLabel === 'Low Stock' ? ' low' : stockLabel === 'Out of Stock' ? ' unavailable' : '';
    const packControl = packOptions.length > 1
        ? `<label class="product-pack-size">Pack size <select class="product-pack-select" aria-label="Pack size for ${product.name}">${packOptions.map((pack, index) => `<option value="${index}">${pack.size}</option>`).join('')}</select></label>`
        : selectedPack ? `<p class="product-pack-size">Pack: ${selectedPack.size}</p>` : '';

    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <div class="product-image ${product.category}${product.isNew ? ' new' : ''}">
            ${getProductImageMarkup(product)}
        </div>
        <div class="product-body">
            <div class="product-category">${product.subcategory.toUpperCase()}</div>
            <h3 class="product-name">${product.name}</h3>
            ${packControl}
            <p class="product-application">Application: ${product.application}</p>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <div class="product-price">${priceLabel}</div>
                <div class="product-stock${stockClass}">${stockLabel}</div>
            </div>
        </div>
        <button class="product-action">💬 Inquire on WhatsApp</button>
    `;

    const productAction = productCard.querySelector('.product-action');
    productAction.addEventListener('click', () => {
        inquireOnWhatsApp(product.name, productAction.dataset.price || priceLabel);
    });

    const packSelect = productCard.querySelector('.product-pack-select');
    if (packSelect) {
        packSelect.addEventListener('change', () => {
            const pack = packOptions[Number(packSelect.value)];
            const selectedPrice = getProductPriceLabel(product, pack);
            productCard.querySelector('.product-price').textContent = selectedPrice;
            productAction.dataset.price = selectedPrice;
        });
    }

    productCard.style.animation = 'fadeIn 0.6s ease-in-out';
    return productCard;
}

function renderProducts() {
    const selectedPackSize = packSizeFilter?.value || 'all';
    const selectedSubcategory = productSubcategoryFilter?.value || 'all';
    const productGroup = productGroups[activeProductGroup] || productGroups.all;
    const matchingProducts = productsData.filter(product => {
        const hasSelectedPack = getProductPackOptions(product).some(pack => pack.size === selectedPackSize);
        return product.isVisible !== false &&
            productGroup.matches(product) &&
            (selectedSubcategory === 'all' || product.subcategory === selectedSubcategory) &&
            (selectedPackSize === 'all' || hasSelectedPack);
    });

    const isFilteredView = activeProductGroup !== 'all' || selectedPackSize !== 'all' || selectedSubcategory !== 'all';
    const showFeaturedOnly = !showFullCatalog && !isFilteredView;
    const visibleProducts = showFeaturedOnly ? matchingProducts.filter(product => product.isFeatured) : matchingProducts;

    productsGrid.replaceChildren();
    visibleProducts.forEach(product => productsGrid.appendChild(createProductCard(product)));
    catalogEmpty.hidden = matchingProducts.length > 0;
    catalogToggle.hidden = isFilteredView;
    catalogTitle.textContent = showFeaturedOnly ? 'Featured products' : productGroup.title;
    catalogEyebrow.textContent = showFeaturedOnly ? 'A few popular picks' : `${matchingProducts.length} products in this range`;
    catalogToggle.textContent = showFullCatalog ? 'Show featured products' : 'View Full 74-Product Catalog';
    catalogToggle.setAttribute('aria-expanded', String(showFullCatalog));
}

function populateProductSubcategoryFilter() {
    const subcategories = [...new Set(productsData.map(product => product.subcategory))].sort();
    subcategories.forEach(subcategory => {
        const option = document.createElement('option');
        option.value = subcategory;
        option.textContent = subcategory;
        productSubcategoryFilter.appendChild(option);
    });
}

categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        activeProductGroup = card.dataset.productGroup;
        showFullCatalog = true;
        categoryCards.forEach(categoryCard => {
            const isActive = categoryCard === card;
            categoryCard.classList.toggle('active', isActive);
            categoryCard.setAttribute('aria-pressed', String(isActive));
        });
        packSizeFilter.value = 'all';
        productSubcategoryFilter.value = 'all';
        renderProducts();
        document.getElementById('catalogResults').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

catalogToggle.addEventListener('click', () => {
    showFullCatalog = !showFullCatalog;
    renderProducts();
});

function expandCatalogForFilter() {
    showFullCatalog = true;
    renderProducts();
}

packSizeFilter?.addEventListener('change', expandCatalogForFilter);
productSubcategoryFilter?.addEventListener('change', expandCatalogForFilter);

populateProductSubcategoryFilter();
renderProducts();

function inquireOnWhatsApp(productName, productPrice) {
    const message = encodeURIComponent(`Hi Jayshree Paints! I'm interested in: ${productName} (${productPrice}). Could you provide more details?`);
    const whatsappLink = `https://api.whatsapp.com/send?phone=919953787727&text=${message}`;
    window.open(whatsappLink, '_blank');
}

function renderReviews() {
    reviewsGrid.innerHTML = '';
    reviewsData.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';

        let starsHTML = '';
        for (let i = 0; i < 5; i++) {
            starsHTML += `<span class="star${i < review.rating ? '' : ' empty'}">⭐</span>`;
        }

        reviewCard.innerHTML = `
            <div class="review-rating">${starsHTML}</div>
            ${review.text ? `<p class="review-text">"${review.text}"</p>` : ''}
            <div class="review-author">- ${review.author}</div>
            <div class="review-date">${review.date}</div>
        `;

        reviewCard.style.animation = 'fadeIn 0.6s ease-in-out';
        reviewsGrid.appendChild(reviewCard);
    });
}

renderReviews();

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const userName = document.getElementById('userName');
    const userPhone = document.getElementById('userPhone');
    const userMessage = document.getElementById('userMessage');
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    let isValid = true;
    nameError.textContent = '';
    phoneError.textContent = '';
    messageError.textContent = '';

    if (userName.value.trim().length < 2) {
        nameError.textContent = 'Please enter a valid name';
        isValid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(userPhone.value.replace(/\D/g, ''))) {
        phoneError.textContent = 'Please enter a valid phone number';
        isValid = false;
    }

    if (userMessage.value.trim().length < 5) {
        messageError.textContent = 'Please enter a message with at least 5 characters';
        isValid = false;
    }

    if (isValid) {
        const message = encodeURIComponent(`Hi Jayshree Paints!\n\nName: ${userName.value}\nPhone: ${userPhone.value}\n\nMessage: ${userMessage.value}`);
        const whatsappLink = `https://api.whatsapp.com/send?phone=919953787727&text=${message}`;
        window.open(whatsappLink, '_blank');
        contactForm.reset();
        alert('Thank you! We will respond to your inquiry shortly via WhatsApp.');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-card, .review-card').forEach(element => {
        observer.observe(element);
    });
});

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;

        if (email) {
            const message = encodeURIComponent(`Hi, I want to subscribe to your newsletter. My email is: ${email}`);
            const whatsappLink = `https://api.whatsapp.com/send?phone=919953787727&text=${message}`;
            window.open(whatsappLink, '_blank');
            newsletterForm.reset();
            alert('Thank you for subscribing!');
        }
    });
}
