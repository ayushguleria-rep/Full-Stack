const items = [
  { name: "Book", Brand: "Classmate", price: 50, rating: 4.5 },
  { name: "Notebook", Brand: "Moleskine", price: 800, rating: 4.2 },
  { name: "Pen", Brand: "Parker", price: 300, rating: 4.0 },

  { name: "Laptop", Brand: "HP", price: 50000, rating: 3.5 },
  { name: "Tablet", Brand: "Apple", price: 30000, rating: 4.6 },
  { name: "Phone", Brand: "Samsung", price: 25000, rating: 4.2 },

  { name: "Headphones", Brand: "Sony", price: 3000, rating: 4.0 },
  { name: "Speaker", Brand: "JBL", price: 4000, rating: 4.2 },
  { name: "Keyboard", Brand: "Logitech", price: 1500, rating: 4.1 },
  { name: "Mouse", Brand: "Dell", price: 800, rating: 3.8 },

  { name: "Monitor", Brand: "LG", price: 15000, rating: 4.4 },
  { name: "Printer", Brand: "Canon", price: 7000, rating: 3.7 },
  { name: "Camera", Brand: "Nikon", price: 45000, rating: 4.5 },

  { name: "Chair", Brand: "IKEA", price: 5000, rating: 3.9 },
  { name: "Desk", Brand: "Urban Ladder", price: 8000, rating: 4.0 },
  { name: "Bench", Brand: "Nilkamal", price: 10000, rating: 3.5 },

  { name: "Watch", Brand: "Casio", price: 2500, rating: 4.3 },
  { name: "Shoes", Brand: "Adidas", price: 3500, rating: 4.3 },
  { name: "Backpack", Brand: "Nike", price: 2000, rating: 4.1 },
  { name: "Shirt", Brand: "Zara", price: 1200, rating: 3.6 },
  { name: "Jeans", Brand: "Levi's", price: 2800, rating: 4.0 },

  { name: "Wallet", Brand: "Leather", price: 1000, rating: 3.9 },
  { name: "Sunglasses", Brand: "Ray-Ban", price: 8000, rating: 4.4 },
  { name: "Water Bottle", Brand: "Milton", price: 300, rating: 4.0 }
];

const tableBody = document.getElementById("product_list");
const sorter = document.getElementById("sorter");

function renderTable(data) {
    tableBody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.Brand}</td>
            <td>${item.price}</td>
            <td>${item.rating}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Initial load
renderTable(items);

sorter.addEventListener("change", () => {
    let sorted = [...items];

    switch (sorter.value) {
        case "price-asc":
            sorted.sort((a, b) => a.price - b.price);
            break;
        case "price-dsc":
            sorted.sort((a, b) => b.price - a.price);
            break;
        case "rating-asc":
            sorted.sort((a, b) => a.rating - b.rating);
            break;
        case "rating-dsc":
            sorted.sort((a, b) => b.rating - a.rating);
            break;
    }

    renderTable(sorted);
});
