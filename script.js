document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "1";

    // Smooth transition effect for page navigation
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let target = this.getAttribute("href");
            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    });
});

// Function to filter products
function filterProducts(category) {
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        if (category === "all" || product.classList.contains(category)) {
            product.style.display = "block";
            product.style.opacity = "0";
            setTimeout(() => {
                product.style.opacity = "1";
            }, 100);
        } else {
            product.style.opacity = "0";
            setTimeout(() => {
                product.style.display = "none";
            }, 300);
        }
    });

    // Update active button styling
    document.querySelectorAll(".btn").forEach(btn => {
        btn.classList.remove("btn-dark");
        btn.classList.add("btn-secondary");
    });
    event.target.classList.remove("btn-secondary");
    event.target.classList.add("btn-dark");
}
