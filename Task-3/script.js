function validate() {
  let valid = true;

  function check(id, errId, condition, msg) {
    const el = document.getElementById(id);
    const err = document.getElementById(errId);
    if (!condition) {
      err.textContent = msg;
      el.classList.add("invalid");
      valid = false;
    } else {
      err.textContent = "";
      el.classList.remove("invalid");
    }
  }

  const name    = document.getElementById("fullName").value.trim();
  const roll    = document.getElementById("rollNumber").value.trim();
  const email   = document.getElementById("email").value.trim();
  const mobile  = document.getElementById("mobile").value.trim();
  const pass    = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const dept    = document.getElementById("department").value;
  const dob     = document.getElementById("dob").value;
  const gender  = document.querySelector('input[name="gender"]:checked');

  check("fullName",        "fullNameErr",      name !== "",                          "Full Name is required.");
  check("rollNumber",      "rollNumberErr",     /^[a-zA-Z0-9]+$/.test(roll),         "Only letters and numbers allowed.");
  check("email",           "emailErr",          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), "Enter a valid email.");
  check("mobile",          "mobileErr",         /^\d{10}$/.test(mobile),             "Must be exactly 10 digits.");
  check("password",        "passwordErr",       pass.length >= 8,                    "Minimum 8 characters required.");
  check("confirmPassword", "confirmPasswordErr", pass === confirm,                   "Passwords do not match.");
  check("department",      "departmentErr",      dept !== "",                         "Please select a department.");
  check("dob",             "dobErr",             dob !== "",                          "Date of Birth is required.");

  // Gender (radio — no element id)
  const genderErr = document.getElementById("genderErr");
  if (!gender) {
    genderErr.textContent = "Please select a gender.";
    valid = false;
  } else {
    genderErr.textContent = "";
  }

  // Show success
  if (valid) {
    document.getElementById("form").style.display = "none";
    document.getElementById("success").style.display = "block";
    document.getElementById("summary").textContent =
      "Name: " + name + " | Roll No: " + roll + " | Dept: " + dept;
  }

  return false; // prevent default form submission
}
