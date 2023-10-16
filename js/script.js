let list = [];
let item = '';

while (item !== 'stop') {
    item = prompt ('Aggiungo alla lista');
    item = item.toLocaleLowerCase();

    if(item !== 'stop' && item !== ''){
        list.push(item)
    }
}
console.log(list);

const listEl = document.getElementById("list");


for (i = 0; i < list.length; i++) {
    const listItemEl = document.createElement("li");
    listItemEl.innerHTML = list[i];
    listEl.appendChild(listItemEl);


}