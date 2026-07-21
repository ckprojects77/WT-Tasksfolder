function validateContact() {
  let valid = true;

  function check(id, errId, condition, msg) {
    const el  = document.getElementById(id);
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

  const name    = document.getElementById("cName").value.trim();
  const email   = document.getElementById("cEmail").value.trim();
  const subject = document.getElementById("cSubject").value.trim();
  const message = document.getElementById("cMessage").value.trim();

  check("cName",    "cNameErr",    name !== "",                              "Name cannot be empty.");
  check("cEmail",   "cEmailErr",   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), "Enter a valid email.");
  check("cSubject", "cSubjectErr", subject.length >= 5,                      "Subject must be at least 5 characters.");
  check("cMessage", "cMessageErr", message.length >= 20,                     "Message must be at least 20 characters.");

  if (valid) {
    alert("Message Sent Successfully!");
    document.getElementById("contactForm").reset();
  }
}
