const $select = document.getElementById('select');
const $image = document.querySelector('.image');

$select.addEventListener('change', () => {
    $image.setAttribute('src', `img/ranita_${$select.value}.jpg`);
});