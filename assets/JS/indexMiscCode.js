function wrapCharacters() {
    const container = document.getElementById('textContainer');
    const text = container.textContent;
    
    console.log('Starting to wrap characters...');
    
    // Clear existing wrapping
    container.innerHTML = '';
    
    // Wrap each character in a span
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'character-wrapper';
        span.textContent = char;
        container.appendChild(span);
    });
    
    console.log('All characters wrapped!');
}

// Call the function immediately when the page loads
console.log('Page loaded, starting character wrapper...');
wrapCharacters();


/// Drop Down Button ///

