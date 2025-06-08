function addToBag(name, price) {
  let bag = JSON.parse(localStorage.getItem('bag')) || [];
  let index = bag.findIndex(item => item.name === name);

  if (index !== -1) {
    bag[index].quantity += 1;
  } else {
    bag.push({ name, price, quantity: 1 });
  }

  localStorage.setItem('bag', JSON.stringify(bag));
  updateCartCount();
  alert(`${name} added to bag!`);
}

function updateCartCount() {
  const bag = JSON.parse(localStorage.getItem('bag')) || [];
  const totalCount = bag.reduce((sum, item) => sum + item.quantity, 0);
  const countElement = document.getElementById('cartCount');
  if (countElement) {
    countElement.textContent = totalCount;
  }
}

function loadBag() {
  const bag = JSON.parse(localStorage.getItem('bag')) || [];
  const body = document.getElementById('bagBody');
  if (!body) return;

  body.innerHTML = '';
  let grand = 0;

  bag.forEach((item, i) => {
    const total = item.price * item.quantity;
    grand += total;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>
        <input type="number" min="1" value="${item.quantity}"
          onchange="updateQuantity(${i}, this.value)"
          class="form-control form-control-sm text-center"
          style="max-width: 70px;">
      </td>
      <td>$${total.toFixed(2)}</td>
      <td>
        <button class="btn btn-remove btn-sm" onclick="removeFromBag(${i})">Remove</button>
      </td>
    `;
    body.appendChild(row);
  });

  const totalElement = document.getElementById('grandTotal');
  if (totalElement) {
    totalElement.textContent = bag.length > 0
      ? `Grand Total: $${grand.toFixed(2)}`
      : 'Your bag is empty.';
  }
}

function updateQuantity(index, newQty) {
  let bag = JSON.parse(localStorage.getItem('bag')) || [];
  bag[index].quantity = parseInt(newQty);
  localStorage.setItem('bag', JSON.stringify(bag));
  loadBag();
  updateCartCount();
}

function removeFromBag(index) {
  let bag = JSON.parse(localStorage.getItem('bag')) || [];
  bag.splice(index, 1);
  localStorage.setItem('bag', JSON.stringify(bag));
  loadBag();
  updateCartCount();
}

if (window.location.pathname.includes("bag.html")) {
  window.onload = () => {
    loadBag();
    updateCartCount();
  };
}

