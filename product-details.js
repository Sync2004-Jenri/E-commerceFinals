// Get product details from URL parameters
const params = new URLSearchParams(window.location.search);
const productKey = params.get("product");

// Sample product data
const products = {
    "ASUS ROG Crosshair X870E": {
        title: "ASUS ROG Crosshair X870E",
        description: "Harnesses the full power of AMD Ryzen 9000 Series processors.",
        price: "$299",
        image: "img/moth/m.jpg"
    },
    "MSI MEG X570 GODLIKE": {
        title: "MSI MEG X570 GODLIKE",
        description: "High-end motherboard with premium features.",
        price: "$499",
        image: "img/moth/m2.jpg"
    },
    "Gigabyte Aorus X570 Elite": {
        title: "Gigabyte Aorus X570 Elite",
        description: "Solid performance with PCIe 4.0 support.",
        price: "$349",
        image: "img/moth/m3.jpg"
    },
    "ASRock Taichi X570": {
        title: "ASRock Taichi X570",
        description: "Feature-rich and stable performance.",
        price: "$399",
        image: "img/moth/m4.jpg"
    },
    "Radeon RX 6600 XT": {
        title: "Radeon RX 6600 XT",
        description: "Performance-segment graphics card by AMD.",
        price: "$399",
        image: "img/gpu/gpu.jpg"
    },
    "NVIDIA RTX 3080": {
        title: "NVIDIA RTX 3080",
        description: "Powerful GPU for 4K gaming and rendering.",
        price: "$799",
        image: "img/gpu/gpu2.jpg"
    },
    "NVIDIA RTX 4060 Ti": {
        title: "NVIDIA RTX 4060 Ti",
        description: "Mid-range gaming GPU with great efficiency.",
        price: "$499",
        image: "img/gpu/gpu3.jpg"
    },
    "AMD Radeon RX 7900 XTX": {
        title: "AMD Radeon RX 7900 XTX",
        description: "Top-tier performance for extreme gaming.",
        price: "$999",
        image: "img/gpu/gpu4.jpg"
    },
    "Ryzen 7 7800X3D": {
        title: "Ryzen 7 7800X3D",
        description: "Zen 4 (Raphael) architecture with Socket AM5.",
        price: "$499",
        image: "img/proc/p.jpg"
    },
    "Intel Core i9-13900K": {
        title: "Intel Core i9-13900K",
        description: "High-end CPU with 24 cores.",
        price: "$699",
        image: "img/proc/p2.jpg"
    },
    "AMD Ryzen 5 7600X": {
        title: "AMD Ryzen 5 7600X",
        description: "Great balance of price and performance.",
        price: "$299",
        image: "img/proc/p3.jpg"
    },
    "Intel Core i7-12700F": {
        title: "Intel Core i7-12700F",
        description: "Powerful and efficient gaming processor.",
        price: "$399",
        image: "img/proc/p4.jpg"
    },
    "DeepCool AK400 ZERO DARK PLUS": {
        title: "DeepCool AK400 ZERO DARK PLUS",
        description: "High-performance FDB fan with excellent cooling.",
        price: "$99",
        image: "img/cooler/cooling.jpg"
    },
    "NZXT Kraken Z73": {
        title: "NZXT Kraken Z73",
        description: "Premium AIO liquid cooler with LCD display.",
        price: "$249",
        image: "img/cooler/cooling2.jpg"
    },
    "Corsair iCUE H150i Elite": {
        title: "Corsair iCUE H150i Elite",
        description: "Quiet and efficient liquid cooling.",
        price: "$199",
        image: "img/cooler/cooling3.jpg"
    },
    "Noctua NH-D15": {
        title: "Noctua NH-D15",
        description: "Legendary air cooler with dual-fan design.",
        price: "$129",
        image: "img/cooler/cooling4.jpg"
    },
    "INF34 ARGB Cooling Fan": {
        title: "INF34 ARGB Cooling Fan",
        description: "Colorful lighting and aerodynamic design.",
        price: "$39",
        image: "img/fan/fan.jpg"
    },
    "Corsair LL120 RGB": {
        title: "Corsair LL120 RGB",
        description: "Bright and quiet RGB fans.",
        price: "$49",
        image: "img/fan/fan2.jpg"
    },
    "Cooler Master MF120 Halo": {
        title: "Cooler Master MF120 Halo",
        description: "Great airflow with stunning visuals.",
        price: "$59",
        image: "img/fan/fan3.jpg"
    },
    "be quiet! Silent Wings 3": {
        title: "be quiet! Silent Wings 3",
        description: "Ultra-quiet high-performance fan.",
        price: "$69",
        image: "img/fan/fan4.jpg"
    }
};

// Display product details
if (productKey && products[productKey]) {
    document.getElementById("product-title").textContent = products[productKey].title;
    document.getElementById("product-description").textContent = products[productKey].description;
    document.getElementById("product-price").textContent = `Price: ${products[productKey].price}`;
    document.getElementById("product-image").src = products[productKey].image;
    document.getElementById("buy-link").href = `buy.html?product=${productKey}&price=${products[productKey].price.replace('$', '')}`;
} else {
    document.querySelector(".card").innerHTML = `
        <h3 class='text-center'>Product not found.</h3>
        <p class='text-center text-danger'>Invalid product: ${productKey}</p>
    `;
}
