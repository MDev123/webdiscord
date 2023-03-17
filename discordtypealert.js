function showDiscordAlert(title, message) {
    // Create alert container
    const alertContainer = document.createElement('div');
    alertContainer.classList.add('alert-container');
    document.body.appendChild(alertContainer);

    // Create alert element
    const alertEl = document.createElement('div');
    alertEl.classList.add('alert');
    alertContainer.appendChild(alertEl);

    // Create title element
    const titleEl = document.createElement('div');
    titleEl.classList.add('title');
    titleEl.innerText = title;
    alertEl.appendChild(titleEl);

    // Create message element
    const messageEl = document.createElement('div');
    messageEl.classList.add('message');
    messageEl.innerText = message;
    alertEl.appendChild(messageEl);

    // Create close button element
    const closeBtnEl = document.createElement('div');
    closeBtnEl.classList.add('close-btn');
    closeBtnEl.innerHTML = '&times;';
    closeBtnEl.addEventListener('click', () => {
        alertContainer.remove();
    });
    alertEl.appendChild(closeBtnEl);

    // Show alert element
    alertEl.style.display = 'flex';

    // Remove alert after 5 seconds
    setTimeout(() => {
        alertContainer.remove();
    }, 5000);
}
