// Pure function - testable
    const isPalindrome = str => {
      const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const reversed = [...cleanStr].reverse().join('');
      return cleanStr === reversed;
    };

    // UI Utility
    const updateResult = (message, className) => {
      result.textContent = message;
      result.className = '';
      result.classList.add(className, 'visible');
    };

    // Main handler
    const checkPalindromeHandler = () => {
      const input = inputField.value.trim();
      if (!input) {
        updateResult('Please input a value', 'error');
        return;
      }
      const isPal = isPalindrome(input);
      updateResult(`"${input}" is ${isPal ? '' : 'not '}a palindrome`, isPal ? 'palindrome' : 'not-palindrome');
      inputField.value = '';
    };

    // DOM Setup
    const inputField = document.getElementById('text-input');
    const checkButton = document.getElementById('check-btn');
    const result = document.getElementById('result');

    checkButton.addEventListener('click', checkPalindromeHandler);
    inputField.addEventListener('keydown', e => {
      if (e.key === 'Enter') checkPalindromeHandler();
    });
 