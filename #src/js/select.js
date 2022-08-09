let selectSearch = function () {
    let search = document.querySelector('.form-main__search');
    let form = document.querySelector('.form-parametrs');

    let selectHeader = document.querySelectorAll('.form-main__select-header');

    let selectItem = document.querySelectorAll('.form-main__select-item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    };

    function selectChoose() {
        let text = this.innerText;
        let currentText = this.parentElement.previousElementSibling.querySelector('.form-main__select-current');
        let attr = this.getAttribute('data-form-type');
        currentText.innerText = text;
        this.parentElement.parentElement.classList.remove('is-active');

        switch(attr) {
            case 'apartment': 
                search.classList.remove(search.className.split(' ')[1]);
                search.classList.add('apartment');
                break;
            case 'cottage': 
                search.classList.remove(search.className.split(' ')[1]);
                search.classList.add('cottage');
                break;
            case 'house': 
                search.classList.remove(search.className.split(' ')[1]);
                search.classList.add('house');
                break;
            case 'region': 
                search.classList.remove(search.className.split(' ')[1]);
                search.classList.add('region');
                break;
            case 'resale': 
                search.classList.remove(search.className.split(' ')[1]);
                search.classList.add('resale');
                break;
            case 'new-building': 
                search.classList.remove(search.className.split(' ')[1]);
                search.classList.add('new-building');
                break;
            case 'buildings': 
                search.classList.remove(search.className.split(' ')[1]);
                search.classList.add('buildings');
                break;
            default:
                break;
        }

        switch(attr) {
            case 'apartment': 
                form.classList.remove(form.className.split(' ')[1]);
                form.classList.add('apartment');
                break;
            case 'cottage': 
                form.classList.remove(form.className.split(' ')[1]);
                form.classList.add('cottage');
                break;
            case 'house': 
                form.classList.remove(form.className.split(' ')[1]);
                form.classList.add('house');
                break;
            case 'region': 
                form.classList.remove(form.className.split(' ')[1]);
                form.classList.add('region');
                break;
            case 'resale': 
                form.classList.remove(form.className.split(' ')[1]);
                form.classList.add('resale');
                break;
            case 'new-building': 
                form.classList.remove(form.className.split(' ')[1]);
                form.classList.add('new-building');
                break;
            case 'buildings': 
                form.classList.remove(form.className.split(' ')[1]);
                form.classList.add('buildings');
                break;
            default:
                break;
        }
    };
}

let selectParametrs = function () {
    let selectHeader = document.querySelectorAll('.form-parametrs__select-header')

    let selectItem = document.querySelectorAll('.form-parametrs__select-item')

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText;
        let currentText = this.parentElement.previousElementSibling.querySelector('.form-parametrs__select-current');
        currentText.innerText = text;
        this.parentElement.parentElement.classList.remove('is-active');
    }
}

$(function () {
    selectSearch();
    selectParametrs();
})