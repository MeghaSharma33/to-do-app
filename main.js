const addButton = document.querySelector('.addButton');
const input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName)
    {
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type ="text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        

        let editBtn= document.createElement('button');
        editBtn.innerHTML = "EDIT";
        editBtn.classList.add('editBtn');

        let removeBtn = document.createElement('button');
        removeBtn.innerHTML= "REMOVE";
        removeBtn.classList.add('removeBtn');
        
        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editBtn);
        itemBox.appendChild(removeBtn);

        editBtn.addEventListener('click',() => this.edit(input));
        removeBtn.addEventListener('click',() => this.remove(itemBox));


    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.remove(item);
    }
}
function check()
    {
    if(input.value != ""){
        new item(input.value);
        input.value ="";
    }
}
addButton.addEventListener('click',check);