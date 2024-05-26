// // Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the card number input, card holder input, month input, year input, and CVV input
  const cardNumberInput = document.querySelector(".card-number-input");
  const cardHolderInput = document.querySelector(".card-holder-input");
  const monthInput = document.querySelector(".month-input");
  const yearInput = document.querySelector(".year-input");
  const cvvInput = document.querySelector(".cvv-input");

  // Get references to the card number box and card holder name display
  const cardNumberBox = document.querySelector(".card-number-box");
  const cardHolderNameBox = document.querySelector(".card-horder-name");
  const expMonthBox = document.querySelector(".exp-month");
  const expYearBox = document.querySelector(".exp-year");
  const cvvBox = document.querySelector(".cvv-box");

  const cardBackElement = document.querySelector('.card-back');
  // Function to format the card number input
  
  function handleCardNumberInput(event) {

    const inputValue = event.target.value;
    // Remove non-digit characters from the input
    const cleanedInput = inputValue.replace(/\D/g, "");

    // Format the card number input in groups of 4 with dashes
    const formattedCardNumber = cleanedInput
      .match(/.{1,4}/g)
      ?.join("-") || "";

    // Update the card number input and the card number box
    cardNumberInput.value = formattedCardNumber;
    cardNumberBox.innerText = formattedCardNumber.padEnd(19, "#");
    cardBackElement.style.transform = 'perspective(1000px) rotateY(180deg)';
  }

  // Function to handle the card holder name input
// Function to handle card holder name input
document.addEventListener('DOMContentLoaded', function() {
  // Update the selector to match the ID of the card holder input field
  const cardHolderInput = document.querySelector('#cardHolder');
  
  // Attach an 'input' event listener to the card holder input field
  if (cardHolderInput) {
      cardHolderInput.addEventListener('input', updateCardHolderName);
  } else {
      console.warn('Could not find the #cardHolder element.');
  }
});

// Function to handle input in the card holder name field
function updateCardHolderName(event) {
  const inputValue = event.target.value;
  console.log("Input Value:", inputValue);
  
  // Select the card holder name box (ensure this matches the actual class in your HTML)
  const cardHolderNameBox = document.querySelector('.card-holder-name');
  
  // Update the text content of the card holder name box
  if (cardHolderNameBox) {
      cardHolderNameBox.innerText = inputValue || 'Full Name';
  } else {
      console.warn('Could not find the .card-holder-name element.');
  }
}


// Function to handle expiration date inputs
function updateExpiration(event) {
  expMonthBox.innerText = monthInput.value.padStart(2, "0");
  expYearBox.innerText = yearInput.value.slice(-2);
  cardBackElement.style.transform = 'perspective(1000px) rotateY(180deg)';
}

// Function to handle the CVV input
function handleCVVInput(event) {
  const inputValue = event.target.value;

  // Only display the last three characters of the CVV as asterisks
  cvvBox.innerText = "*".repeat(inputValue.length);

  // Ensure the card-back element exists
  if (cardBackElement) 
    {
      // Apply the transformation
      cardBackElement.style.transform = 'perspective(1000px) rotateY(0deg)';
    }

}


  // Add event listeners to the input elements
  cardNumberInput.addEventListener("input", handleCardNumberInput);
  cardHolderInput.addEventListener("input", updateCardHolderName);
  monthInput.addEventListener("change", updateExpiration);
  yearInput.addEventListener("change", updateExpiration);
  cvvInput.addEventListener("input", handleCVVInput);
});
