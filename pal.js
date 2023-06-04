function checkPalindrome() {
    const input = document.getElementById("input").value.toLowerCase();
    const reversedInput = input.split("").reverse().join("");
    const result = document.getElementById("result");
    if (input === reversedInput) {
      result.textContent = `${input} is a palindrome!`;
    } else {
      result.textContent = `${input} is not a palindrome.`;
    }
  }