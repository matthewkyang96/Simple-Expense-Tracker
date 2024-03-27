const deleteButtons = document.querySelectorAll('#delete');
const editButtons = document.querySelectorAll('#edit');
const cancelButtons = document.querySelectorAll('#cancel')
const updateButtons = document.querySelectorAll('#update')

Array.from(deleteButtons).forEach((button)=>{
    button.addEventListener('click', deleteEntry);
})

Array.from(editButtons).forEach((button)=>{
    button.addEventListener('click', editEntry);
})

Array.from(cancelButtons).forEach((button)=>{
    button.addEventListener('click', cancelEdit);
})

Array.from(updateButtons).forEach((button)=>{
    button.addEventListener('click', updateEntry);
})

async function deleteEntry(){
    const date = this.parentNode.parentNode.childNodes[1].innerText;
    const amount = normalizeNumberFormat(this.parentNode.parentNode.childNodes[3].innerText);
    try{
        const res = await fetch('deleteEntry',{
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'extractedDate': date,
                'extractedAmount': amount
            })
        })
        const data = await res.json();
        console.log(data);
        location.reload();

    } catch(err){
        console.log(err);
    }
}

async function updateEntry(){
    const trParentNode = this.parentNode.parentNode;

    const prevDate = trParentNode.childNodes[1].innerText;
    const newDate = trParentNode.childNodes[2].childNodes[0].value;

    const prevAmount = trParentNode.childNodes[4].innerText;
    const newAmount = trParentNode.childNodes[5].childNodes[0].value;

    const prevDescription = trParentNode.childNodes[7].innerText;
    const newDescription = trParentNode.childNodes[8].childNodes[0].value;

    const prevCategory = trParentNode.childNodes[10].innerText;
    const newCategory = trParentNode.childNodes[11].childNodes[0].value;

    try{
        const res = await fetch('updateEntry', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'prevValues': {
                    'date': prevDate,
                    'amount': prevAmount,
                    'description': prevDescription,
                    'category': prevCategory,
                },
                'newValues': {
                    'date': newDate,
                    'amount': newAmount,
                    'description': newDescription,
                    'category': newCategory,
                }
            })
        })
        const data = await response.json();
        console.log(data);
        location.reload();
    } catch(err){
        console.log(err);
    }
}


function editEntry(){
    const trParentNode = this.parentNode.parentNode;
    const prevDate = trParentNode.childNodes[1];
    const prevAmount = trParentNode.childNodes[3];
    const prevDescription = trParentNode.childNodes[5];
    const prevCategory = trParentNode.childNodes[7];
    const prevValuesArr = [prevDate,prevAmount,prevDescription,prevCategory]
    const newValuesArr = []

    const newDate = document.createElement('input')
    newDate.type = 'date';
    newDate.value = prevDate.innerText;
    activateInputField(prevDate, newDate)
    newValuesArr.push(newDate);

    const newAmount = document.createElement('input')
    newAmount.type = 'number';
    newAmount.step = '0.01';
    newAmount.value = normalizeNumberFormat(prevAmount.innerText)
    activateInputField(prevAmount, newAmount)
    newValuesArr.push(newAmount);

    const newDescription = document.createElement('input');
    newDescription.type = 'text';
    newDescription.value = prevDescription.innerText;
    activateInputField(prevDescription, newDescription)
    newValuesArr.push(newDescription);

    const newCategory = document.createElement('input');
    newCategory.type = 'text';
    newCategory.value = prevCategory.innerText;
    activateInputField(prevCategory, newCategory)
    newValuesArr.push(newCategory);

    newValuesArr.forEach(elem => wrap(elem, 'td'));

    const buttonsParentNode = this.parentNode;
    buttonsParentNode.childNodes[0].hidden = true;
    buttonsParentNode.childNodes[1].hidden = true;
    buttonsParentNode.childNodes[2].hidden = false;
    buttonsParentNode.childNodes[3].hidden = false;
}

function cancelEdit(){
    const buttonsParentNode = this.parentNode;
    buttonsParentNode.childNodes[0].hidden = false;
    buttonsParentNode.childNodes[1].hidden = false;
    buttonsParentNode.childNodes[2].hidden = true;
    buttonsParentNode.childNodes[3].hidden = true;
    location.reload();
}

function normalizeNumberFormat(string){
    let unformatted = string.substring(1)
    return unformatted.split(',').join('');
}

function wrap(element, wrapper) {
    let wrappingElement = document.createElement(wrapper);
    element.parentNode.insertBefore(wrappingElement, element);
    wrappingElement.appendChild(element)
}

function activateInputField(prev, field){
    prev.after(field);
    prev.style = "display:none;"
}