console.log("Running");
const deleteBtn = document.getElementsByClassName('btnDelete');
const editBtn = document.getElementsByClassName('btnEdit');
const saveBtn = document.getElementsByClassName('saveBtn');

console.log(editBtn);
for(i=0; i<=editBtn.length; i++){
    btn = editBtn[i]
    btn.addEventListener('click', (event)=>{
        console.log("clicked");
        const parent = event.target.parentElement  
        const image = parent.getElementsByClassName('image')[0].innerText
        let name = parent.getElementsByClassName('name')[0].innerText
        const qty = parent.getElementsByClassName('qty')[0].innerText
        const price = parent.getElementsByClassName('price')[0].innerText
        const desc= parent.getElementsByClassName('desc')[0].innerText
        const cat =parent.getElementsByClassName('cat')[0].innerText


        let namep = document.getElementsByClassName('namep')[0].value
        let qtyp = document.getElementsByClassName('qtyp')[0].value
        let descp = document.getElementsByClassName('descp')[0].value
        let pricep = document.getElementsByClassName('pricep')[0].value
        let catp = document.getElementsByClassName('catp')[0].value

        name = namep

        // console.log(image + name + qty + price + desc + cat + namep + qtyp + descp + catp);
    })   
}
for(i=0; i<=deleteBtn.length; i++){
    btn = deleteBtn[i]
    btn.addEventListener('click', (event)=>{
        const parent = event.target.parentElement
        parent.remove()
        
    })     

}
