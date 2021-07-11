const searchwpapper = document.querySelector('.search_input');
const inputBox = searchwpapper.querySelector('input');
const suggationBox = searchwpapper.querySelector('.input_auto_box');


inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArry = [];
    if (userData) {
        emptyArry = sugations.filter((data) => {
            return data.toLowerCase().startsWith(userData.toLowerCase());
        });
        emptyArry = emptyArry.map((data) => {
            return data = '<li>' + data + '</li>';
        });
        console.log(emptyArry);
        searchwpapper.classList.add('active');
        showsuggation(emptyArry);
        let allList = suggationBox.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute('onclick', 'select(this)')
        }
    } else {
        searchwpapper.classList.remove('active');
    }
};

function select(element) {
    let selectUserdata = element.textContent;
    inputBox.value = selectUserdata;
    searchwpapper.classList.remove('active');
}

function showsuggation(list) {
    let listData;
    if (!list.length) {
        uservalue = inputBox.value;
        listData = '<li>' + uservalue + '</li>';
    } else {
        listData = list.join('');
    }
    suggationBox.innerHTML = listData;
};