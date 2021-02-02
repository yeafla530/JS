'use strict';

//data 동적으로 읽어오기
//Fetch the itmes from the JSON file
function loadItems() {
    //fetch로 data받아오기
    return fetch('../data/data.json')
    //response body를 object(json)로 변환
    .then(response => response.json())
    //items안에 있는거 출력가능
    .then(json => {
        // console.log(json)
        // console.log(json.items)
        return json.items
    })
}

//items class에 list올리기
function displayItem(items) {
    const container = document.querySelector('.items')
    const html = items.map(item => createHTMLString(item)).join('');
    // console.log(html)
    //버튼을 클릭할때마다 새로운 요소들을 만들어야됨 : update
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

//HTML li 태그 만들기
function createHTMLString(item) {
    return `
    <li class="cloth-info">
        <img src="${item.image}" alt="${item.type}">
        <span>${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onbuttonsClick(event, items) {
    const target = event.target;
    const key = target.dataset.key;
    const value = target.dataset.value;
    console.log(items)
    console.log(event.target.dataset.key)
    console.log(event.target.dataset.value)    

    if (key == null || value == null) {
        return
    }

    updateItem(items, key, value)
    // displayItem(items.filter(item => { 
    //     // console.log(item, item[key])
    //     return item[key] === value
    // }));

}

function updateItem(items, key, value) {
    console.log(key, value)
    console.log(items)
    const select = document.querySelector('.cloth-info')
    items.forEach(item => {
        // console.log(item)
        console.log('-----------------', item[key])
        if (item[key] === value) {
            console.log('item, key',item[key], value)
            select.classList.remove('invisible')
        } else {
            select.classList.add('invisible')
        }
        
    })
}

function setEventListeners(items) {
    const logo = document.querySelector('.logo-img');
    const buttons = document.querySelector('.btn-ul')
    logo.addEventListener('click', () => displayItem(items))
    buttons.addEventListener('click', event => onbuttonsClick(event, items))
}

//promise로 받아오기
loadItems()
    .then(items => {
        displayItem(items);
        setEventListeners(items)
    })
    .catch(console.log)
