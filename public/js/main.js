const deleteButtons = document.querySelectorAll('#delete');
const editButtons = document.querySelectorAll('#edit');

Array.from(deleteButtons).forEach((button)=>{
    button.addEventListener('click', deleteEntry);
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


function normalizeNumberFormat(string){
    let unformatted = string.substring(1)
    return unformatted.split(',').join('');
}