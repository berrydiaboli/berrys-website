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

const idDivBox1 = document.getElementById('dropdiv1');
var stateDivBox1 = true

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function DivBox1() {
    idDivBox1.style.animation = stateDivBox1 
        ? 'boxclose 0.5s ease-in-out forwards'
        : 'boxexpand 0.5s ease-in-out forwards';
    if (stateDivBox1 == true) {
        setTimeout(function() {
                idDivBox1.hidden = true;
        }, 480);
    }
    else {
        idDivBox1.hidden = false;
    }
    // Update state
    stateDivBox1 = !stateDivBox1;
}

