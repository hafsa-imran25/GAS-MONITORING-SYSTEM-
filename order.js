import { db, collection, addDoc } from "./firebase.js";

// Get form
const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const payment = document.getElementById("payment").value;

  if (!name || !email || !phone || !address || !payment) {
    alert("Please fill in all the details!");
    return;
  }

  try {
    await addDoc(collection(db, "orders"), {
      name,
      email,
      phone,
      address,
      payment,
      product: "Smart Gas Monitoring System",
      price: 2499,
      timestamp: new Date().toISOString()
    });

    // ✅ Show success modal
    const modal = new bootstrap.Modal(document.getElementById('orderSuccessModal'));
    modal.show();

    orderForm.reset();

  } catch (error) {
    console.error("Error placing order: ", error);
    alert("Something went wrong while placing your order!");
  }
});
