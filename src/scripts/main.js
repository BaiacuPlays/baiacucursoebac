let toggleDropdown = document.querySelector('.menu-icon');
let dropdown = document.querySelector('.dropdown-nav');
let dropdownItems = document.querySelectorAll('.dropdown-nav a');
let form = document.getElementById('question');


form.addEventListener('Enviar', (e) => {
    e.preventDefault();
    alert("Sua pergunta foi enviada");
});

function checkState () {
    if (dropdown.classList.contains("closed")) {
        dropdown.classList.remove("closed");
    } else {
        dropdown.classList.add("closed");
    }
}

toggleDropdown.addEventListener('click', checkState);


dropdownItems.forEach((item) => {
    item.addEventListener('click', checkState);
});

