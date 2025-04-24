
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for reaching out to Botanyiii!");
    form.reset();
  });
});

function buyProduct(name, price) {
  alert(`You have selected: ${name}\nPrice: ₱${price}`);
}
