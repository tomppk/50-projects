const panels = document.querySelectorAll('.panel');

// also
// panels.forEach((panel) => {})
for (let panel of panels) {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
}

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}