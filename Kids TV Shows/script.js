document.addEventListener('DOMContentLoaded', function () {
    const showContainers = document.querySelectorAll('.show-container');

    showContainers.forEach(container => {
        const showName = container.querySelector('.show-name');
        const showDetails = container.querySelector('.show-details');

        showName.addEventListener('click', function () {
            if (showDetails.style.display === 'none' || showDetails.style.display === '') {
                showDetails.style.display = 'block';
            } else {
                showDetails.style.display = 'none';
            }
        });
    });
});



 
