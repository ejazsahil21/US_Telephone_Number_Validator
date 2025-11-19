document.getElementById("check-btn").addEventListener("click", function () {
  const userInput = document.getElementById("user-input").value;
  const resultsDiv = document.getElementById("results-div");

  // Check if input is empty
  if (userInput.trim() === "") {
    alert("Please provide a phone number");
    return;
  }

  // Validate the phone number
  const isValid = validatePhoneNumber(userInput);

  // Display results
  if (isValid) {
    resultsDiv.textContent = `Valid US number: ${userInput}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${userInput}`;
  }
});

// Clear button functionality
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("results-div").textContent = "";
  document.getElementById("user-input").value = "";
});

// Phone number validation function
function validatePhoneNumber(phone) {
  // Updated regular expression pattern for valid US phone numbers
  const phonePattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  return phonePattern.test(phone);
}