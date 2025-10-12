import { db, collection, addDoc } from "./firebase.js";

document.addEventListener("DOMContentLoaded", () => {
  const quantityInput = document.getElementById("quantity");
  const totalPriceEl = document.getElementById("totalPrice");
  const unitPrice = 2499;

  const increaseBtn = document.getElementById("increaseQty");
  const decreaseBtn = document.getElementById("decreaseQty");

  function updateTotal() {
    let qty = parseInt(quantityInput.value);
    if (qty < 10) qty = 10;
    quantityInput.value = qty;
    totalPriceEl.textContent = (qty * unitPrice).toLocaleString();
  }

  increaseBtn.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotal();
  });

  decreaseBtn.addEventListener("click", () => {
    if (parseInt(quantityInput.value) > 10) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
      updateTotal();
    }
  });

  quantityInput.addEventListener("input", updateTotal);

  // Handle order submit
  const orderForm = document.getElementById("orderForm");
  orderForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const order = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      payment: document.getElementById("payment").value,
      quantity: parseInt(quantityInput.value),
      totalPrice: parseInt(quantityInput.value) * unitPrice,
      timestamp: new Date(),
    };

    try {
      await addDoc(collection(db, "orders"), order);
      alert("✅ Order placed successfully!");
      orderForm.reset();
      quantityInput.value = 10;
      updateTotal();
    } catch (err) {
      console.error("Error adding order: ", err);
      alert("❌ Failed to place order. Try again!");
    }
  });

  updateTotal();
});
