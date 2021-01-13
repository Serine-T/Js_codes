const list_items = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'item 6',
    'item 7',
    'item 8',
    'item 9',
    'item 10',
    'item 11',
    'item 12',
    'item 13',
    'item 14',
    'item 15',
    'item 16',
    'item 17',
    'item 18',
    'item 19',
    'item 20',
    'item 21',
    'item 22',
    'item 23',
    'item 24',
    'item 25',
    'item 26',
    'item 27',
    'item 28'
]

const list_element = document.getElementById('list')
const pagination_element = document.getElementById('pagination')

let tbody = document.getElementById('tbody');

let current_page = 1;
let rows = 8;


function DisplayList(items, wrapper, rows_per_page, page){
    wrapper.innerHTML = '';
    page--;

    let start = rows_per_page * page;
    let end  = start + rows_per_page;
    let paginatedItems = items.slice(start, end);
    
    for(let i = 0; i < paginatedItems.length; i++){
        let item = paginatedItems[i];
        let item_element = document.createElement('tr');
        item_element.innerText = item
        wrapper.appendChild(item_element);
    }
}


function setUpPagination(items, wrapper, rows_per_page) {
    wrapper.innerHTML = '';
    let page_count = Math.ceil(items.length / rows_per_page);
    for (let i = 1; i < page_count + 1; i++){
        let btn = PaginationBtn(i, items)
        wrapper.appendChild(btn)
    }
}


function PaginationBtn(page, items){
    let btn = document.createElement('button');
    btn.innerText = page;

    btn.addEventListener('click', function(){
        current_page = page;
        DisplayList(items, list_element, rows, current_page)
    })
    return btn
}

DisplayList(list_items, list_element, rows, current_page)
setUpPagination(list_items, pagination_element, rows)