function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.querySelector('.close-btn').addEventListener('click', closePopup);

window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        closePopup();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    showPopup();
});
