// Wait for the DOM to fully load before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Text content manipulation
    const changeableText = document.getElementById('changeable-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const resetTextBtn = document.getElementById('reset-text-btn');
    const originalText = changeableText.textContent;
    
    changeTextBtn.addEventListener('click', function() {
        changeableText.textContent = "Text has been changed dynamically using JavaScript!";
    });
    
    resetTextBtn.addEventListener('click', function() {
        changeableText.textContent = originalText;
    });
    
    // CSS style modification
    const colorButtons = document.querySelectorAll('.color-btn');
    const styleTarget = document.getElementById('style-target');
    const highlightBtn = document.getElementById('highlight-btn');
    
    // Change background color
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            document.body.style.backgroundColor = color;
        });
    });
    
    // Toggle highlight class
    highlightBtn.addEventListener('click', function() {
        styleTarget.classList.toggle('highlighted');
    });
    
    // Adding and removing elements
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    const elementsContainer = document.getElementById('elements-container');
    let elementCount = 0;
    
    addElementBtn.addEventListener('click', function() {
        elementCount++;
        const newElement = document.createElement('div');
        newElement.className = 'new-element';
        newElement.textContent = `Element ${elementCount}`;
        elementsContainer.appendChild(newElement);
    });
    
    removeElementBtn.addEventListener('click', function() {
        const elements = elementsContainer.querySelectorAll('.new-element');
        if (elements.length > 0) {
            elementsContainer.removeChild(elements[elements.length - 1]);
            elementCount--;
        }
    });
    
    // Bonus: Change the page title after 3 seconds
    setTimeout(function() {
        const mainTitle = document.getElementById('main-title');
        mainTitle.textContent = "JavaScript in Action!";
    }, 3000);
});
