document.addEventListener('DOMContentLoaded', () => {
    const apiKeyInput = document.getElementById('api-key');
    const userInput = document.getElementById('user-input');
    const submitBtn = document.getElementById('submit-btn');
    const themeSelect = document.getElementById('theme');
    const fontSizeInput = document.getElementById('font-size');
    const outputDiv = document.getElementById('output');

    // Event listener for the submit button
    submitBtn.addEventListener('click', async () => {
        const apiKey = apiKeyInput.value;
        const inputText = userInput.value;

        if (!apiKey || !inputText) {
            alert('Please enter your API key and input text.');
            return;
        }

        // Call DeepSeek API
        try {
            const response = await fetch('https://api.deepseek.com/v1/endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    input: inputText
                })
            });

            const data = await response.json();
            outputDiv.textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error('Error:', error);
            outputDiv.textContent = 'An error occurred while fetching data.';
        }
    });

    // Customization: Theme
    themeSelect.addEventListener('change', () => {
        const selectedTheme = themeSelect.value;
        document.body.className = selectedTheme;
    });

    // Customization: Font Size
    fontSizeInput.addEventListener('input', () => {
        const fontSize = fontSizeInput.value + 'px';
        document.body.style.fontSize = fontSize;
    });
});
