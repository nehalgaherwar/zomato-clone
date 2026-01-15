document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const restaurantCards = document.querySelectorAll('.restaurant-card');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        restaurantCards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            if (name.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
