const dobday = document.getElementById("day");
for (let i = 1; i <= 31; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  dobday.appendChild(option);
}

const dobmonth = document.getElementById("month");
for (let i = 1; i <= 12; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  dobmonth.appendChild(option);
}

const dobyear = document.getElementById("year");
for (let i = 1900; i <= 2023; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  dobyear.appendChild(option);
}

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission

  // get form input values
  const firstName = document.getElementById('fname').value.trim();
  const lastName = document.getElementById('lname').value.trim();
  const email = document.getElementById('email').value.trim();
  const mobile = document.getElementById('mb').value.trim();
  const city = document.getElementById('city').value.trim();
  const pincode = document.getElementById('pin').value.trim();
  const state = document.getElementById('state').value.trim();


  // validate inputs
  if (!firstName || !/^[a-zA-Z ]{1,30}$/.test(firstName)) {
    alert('Please enter a valid first name (max 30 characters a-z and A-Z)');
    return;
  }

  if (!lastName || !/^[a-zA-Z ]{1,30}$/.test(lastName)) {
    alert('Please enter a valid last name (max 30 characters a-z and A-Z)');
    return;
  }

  if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (!mobile || !/^\d{10}$/.test(mobile)) {
    alert('Please enter a valid 10 digit mobile number');
    return;
  }

  if (!city || !/^[a-zA-Z ]{1,30}$/.test(city)) {
    alert('Please enter a valid city name (max 30 characters a-z and A-Z)');
    return;
  }

  if (!pincode || !/^\d{6}$/.test(pincode)) {
    alert('Please enter a valid 6 digit pincode');
    return;
  }

  if (!state || !/^[a-zA-Z ]{1,30}$/.test(state)) {
    alert('Please enter a valid state name (max 30 characters a-z and A-Z)');
    return;
  }

  alert('Form submitted successfully!');
  form.reset();
});
