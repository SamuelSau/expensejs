document.getElementById('btn-click').onclick = function () {
    addName();
    addDate();
    addAmount();
}

function addName(){
    const element = document.createElement('div') 
    element.innerHTML = document.getElementById('name').value 
    element.setAttribute('id','newdiv')
    document.body.append(element); 
}
function addDate(){
    const create = document.createElement('div')
    create.innerHTML = document.getElementById('date').value
    create.setAttribute('id','creatediv')
    document.body.append(create);
}
function addAmount(){
    const block = document.createElement('div')
    block.innerHTML = document.getElementById('amount').value
    block.setAttribute('id','blockdiv')
    document.body.append(block);
}

