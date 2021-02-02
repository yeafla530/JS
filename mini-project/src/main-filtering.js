function loadItems() {
    return fetch('../data/data.json')
        .then(response => response.json())
        .then(json => json.items)
}

function createElement(item) {
    const img = document.createElement('img')
    img.setAttribute('class', 'thumbnail');
    img.setAttribute('src', item.image)

    const span = document.createElement('span')
    span.setAttribute('class', 'description')
    span.innerText = `${item.gender}, ${item.size} size`
    
    const li = document.createElement('li')
    li.setAttribute('class', 'item')
    li.setAttribute('data-type', item.type)
    li.setAttribute('data-color', item.color)
    li.append(img)
    li.append(span)
    return li

}

function onButtonClick(event, items) {
    const target = event.target;
    const key = target.dataset.key;
    const value = target.dataset.value;
    if (key == null || value == null) {
        return;
    }
    console.log(items)
    updateItems(items, key, value);
}

function updateItems(items, key, value) {
    // console.log('items', items)
    // console.log('key', key)
    // console.log('value', value)
    items.forEach(item => {
        console.log(item.dataset[key])
        if(item.dataset[key] === value) {
            // item.classList.remove('invisible')
            item.style.display = 'block'
        } else {
            // item.classList.add('invisible')
            item.style.display = 'none'

        }
    })
}

loadItems().then(items => {
    const elements = items.map(createElement)
    //ul tag 'class=items'
    const container = document.querySelector('.items'); 
    container.append(...elements);
    const buttons = document.querySelector('.buttons');
    //감싸져 있는 태그의 event를 들음
    //elements로 표기하면 해당 태그들 표기해줌
    //items로 넘겨줘서 계속 오류남
    buttons.addEventListener('click', event => onButtonClick(event, elements))
})