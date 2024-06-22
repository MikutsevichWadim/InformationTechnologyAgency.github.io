document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.for-shrink');

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            items.forEach(i => {
                if (i !== item) {
                    i.classList.add('shrink');
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            items.forEach(i => {
                i.classList.remove('shrink');
            });
        });
    });
});
