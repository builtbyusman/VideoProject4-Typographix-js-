document.addEventListener('DOMContentLoaded', () => {
    // function to create and observe intersectionobservers
    function createObserver(selector, observerOptions, toggleClass) {
        const items = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(toggleClass);
                } else {
                    entry.target.classList.remove(toggleClass);
                }
            });
        }, observerOptions);

        items.forEach(item => {
            observer.observe(item);
        });
    }

    //create observer for different sections
    createObserver('#about .phrase', { root: null, threshold: 1 }, 'active');
});