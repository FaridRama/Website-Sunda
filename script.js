document.addEventListener("DOMContentLoaded", function() {
    var notification = document.getElementById('welcome-notification');
    notification.classList.add('show');

    setTimeout(function() {
        notification.classList.remove('show');
    }, 3000); // Waktu notifikasi tampil dalam milidetik (3000ms = 3 detik)
});