document.addEventListener("DOMContentLoaded", () => {
  const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
  setTimeout(() => loginModal.show(), 1500);

  document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const phone = document.getElementById('loginPhone').value;
    localStorage.setItem('user', JSON.stringify({ email, phone }));
    alert("Login successful!");
    loginModal.hide();
  });
});
const orderDetails = {
  name: "SmartGas Monitoring System",
  qty: document.getElementById("quantity").value,
  price: "₹3,999",
  payment: selectedPaymentMethod
};

localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
window.location.href = "order-success.html";
