/**
 * Focuses an element by selector (Tag/ID/Class)
 * @param { string } selector 
 */
const focusElementBySelector = (selector = null) => {
    if (!selector) return;
    const elementToFocus = document.querySelector(selector)
    if(elementToFocus) {
        elementToFocus.focus();
        return;
    }
}

focusElementBySelector(".focus-this");

// Add EventListener for each visible icon
document.querySelectorAll('.show-password').forEach(element => {
    element.addEventListener('click', event => {
        const input = element.parentNode.parentNode.querySelector("input");
        if (element.innerText == "visibility") {
            element.innerText = "visibility_off";
            input.type = "text";
        } else {
            element.innerText = "visibility";
            input.type = "password";
        }
    })
})