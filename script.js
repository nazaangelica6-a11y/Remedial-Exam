// HERO BUTTON
function orderNow() {
  alert("Welcome to our Luxury Café ☕✨ Enjoy premium coffee experience.");
}

// ADD TO CART
function addToCart(item) {
  alert(item + " added to your order 🥂");
}

// CONTACT FORM
function sendMessage() {

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg");

  if (name === "" || email === "") {
    msg.style.color = "red";
    msg.textContent = "Please complete all fields.";
    return;
  }

  msg.style.color = "#d4af37";
  msg.textContent = "Message received. We will contact you shortly ✨";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}