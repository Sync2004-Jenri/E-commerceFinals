document.addEventListener("DOMContentLoaded", function () {
    const products = [
        // Motherboards
        { category: "motherboard", img: "img/moth/m.jpg", title: "ASUS ROG Crosshair X870E", desc: "Harnesses the full power of AMD Ryzen 9000 Series processors...", price: "$299" },
        { category: "motherboard", img: "img/moth/m2.jpg", title: "MSI MEG X570 GODLIKE", desc: "High-end motherboard with premium features.", price: "$499" },
        { category: "motherboard", img: "img/moth/m3.jpg", title: "Gigabyte Aorus X570 Elite", desc: "Solid performance with PCIe 4.0 support.", price: "$349" },
        { category: "motherboard", img: "img/moth/m4.jpg", title: "ASRock Taichi X570", desc: "Feature-rich and stable performance.", price: "$399" },
        
        // GPUs
        { category: "gpu", img: "img/gpu/gpu.jpg", title: "Radeon RX 6600 XT", desc: "Performance-segment graphics card by AMD...", price: "$399" },
        { category: "gpu", img: "img/gpu/gpu2.jpg", title: "NVIDIA RTX 3080", desc: "Powerful GPU for 4K gaming and rendering.", price: "$799" },
        { category: "gpu", img: "img/gpu/gpu3.jpg", title: "NVIDIA RTX 4060 Ti", desc: "Mid-range gaming GPU with great efficiency.", price: "$499" },
        { category: "gpu", img: "img/gpu/gpu4.jpg", title: "AMD Radeon RX 7900 XTX", desc: "Top-tier performance for extreme gaming.", price: "$999" },
        
        // Processors
        { category: "processor", img: "img/proc/p.jpg", title: "Ryzen 7 7800X3D", desc: "Zen 4 (Raphael) architecture with Socket AM5...", price: "$499" },
        { category: "processor", img: "img/proc/p2.jpg", title: "Intel Core i9-13900K", desc: "High-end CPU with 24 cores.", price: "$699" },
        { category: "processor", img: "img/proc/p3.jpg", title: "AMD Ryzen 5 7600X", desc: "Great balance of price and performance.", price: "$299" },
        { category: "processor", img: "img/proc/p4.jpg", title: "Intel Core i7-12700F", desc: "Powerful and efficient gaming processor.", price: "$399" },
        
        // Coolers
        { category: "cooler", img: "img/cooler/cooling.jpg", title: "DeepCool AK400 ZERO DARK PLUS", desc: "High-performance FDB fan with excellent cooling...", price: "$99" },
        { category: "cooler", img: "img/cooler/cooling2.jpg", title: "NZXT Kraken Z73", desc: "Premium AIO liquid cooler with LCD display.", price: "$249" },
        { category: "cooler", img: "img/cooler/cooling3.jpg", title: "Corsair iCUE H150i Elite", desc: "Quiet and efficient liquid cooling.", price: "$199" },
        { category: "cooler", img: "img/cooler/cooling4.jpg", title: "Noctua NH-D15", desc: "Legendary air cooler with dual-fan design.", price: "$129" },
        
        // Fans
        { category: "fan", img: "img/fan/fan.jpg", title: "INF34 ARGB Cooling Fan", desc: "Colorful lighting and aerodynamic design...", price: "$39" },
        { category: "fan", img: "img/fan/fan2.jpg", title: "Corsair LL120 RGB", desc: "Bright and quiet RGB fans.", price: "$49" },
        { category: "fan", img: "img/fan/fan3.jpg", title: "Cooler Master MF120 Halo", desc: "Great airflow with stunning visuals.", price: "$59" },
        { category: "fan", img: "img/fan/fan4.jpg", title: "be quiet! Silent Wings 3", desc: "Ultra-quiet high-performance fan.", price: "$69" }
    ];

    const productList = document.getElementById("product-list");

    products.forEach(product => {
        productList.innerHTML += `
            <div class="col-md-4 product ${product.category}">
                <div class="card">
                    <img src="${product.img}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.desc}</p>
                        <p class="card-text"><strong>Price: ${product.price}</strong></p>
                        <a href="product-details.html?product=${encodeURIComponent(product.title)}" class="btn btn-primary">View Details</a>
                        <a href="buy.html?product=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}" class="btn btn-success">Buy</a>
                    </div>
                </div>
            </div>
        `;
    });
});