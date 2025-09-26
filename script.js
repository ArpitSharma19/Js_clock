setInterval(() => {
    const clock = document.querySelector('.clock');

    const time = new Date();
    const option = {
        timeZone: 'Asia/Kolkata',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: true
    }

    clock.textContent = time.toLocaleTimeString('en-US', option);
}, 1000);