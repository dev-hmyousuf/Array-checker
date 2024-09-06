let checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", () => {
    let usersInput = document.getElementById("array").value;
    let resultDisplay = document.getElementById("result");

    try {
        let mainInput = JSON.parse(usersInput); // Parse the input as JSON

        if (Array.isArray(mainInput)) {
            resultDisplay.innerText = "It is a Array"; // Show if it's an array
        } else {
            resultDisplay.innerText = "Eta array na."; // Show if it's not an array
        }
    } catch (error) {
        // If the input is invalid, show an error message
        resultDisplay.innerText = "Input invalid. Please provide a valid array.";
    }
});


