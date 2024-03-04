// Costo fijo de preparación o mano de obra: 5
// Costo harina small: 0.3 | Costo ingrediente extra small: 1
// Costo harina mediana: 0.42 | Costo ingrediente extra mediana: 2
// Costo harina grande: 0.48 | Costo ingrediente extra grande: 4

// Crear los selectores
const smallPizza = document.getElementById('small');
const medianaPizza = document.getElementById('mediana');
const grandePizza = document.getElementById('grande');

const extra1 = document.getElementById('inlineCheckbox1');
const extra2 = document.getElementById('inlineCheckbox2');
const extra3 = document.getElementById('inlineCheckbox3');
const extra4 = document.getElementById('inlineCheckbox4');
const extra5 = document.getElementById('inlineCheckbox5');

const calcularPrecioBtn = document.getElementById('btnCalcularPrecio');
const mostrarPrecio = document.getElementById('precio');
const checkboxes = document.getElementById('checkboxes');
const carta = document.getElementsByClassName('carta')

let tamanos={
    small : "small",
    mediana : "mediana",
    grande: "grande"
}
let extras={
    extraSmall:1,
    extraMediano:2,
    extraGrande:4
}
calcularPrecioBtn.addEventListener("click",function(e){
    e.preventDefault()
        const ingredientesExtras = obj.extra.length

    if(obj.size==='small' && ingredientesExtras == 0){
        mostrarPrecio.innerHTML=`
        <h4>el precio final es $ 7.95</h4>      
        `
    }else if( obj.size==="small"&& obj.extra.length != 0){
        const precioPizza = ((5.3 + ingredientesExtras)* 1.5).toFixed(2)
        mostrarPrecio.innerHTML=`
        <h4>el precio final es $ ${precioPizza}</h4>      
        `
    }else if(obj.size==='mediana'&& ingredientesExtras == 0){
        mostrarPrecio.innerHTML=`
        <h4>el precio final es $ 8.13</h4>      
        ` 
    }else if(obj.size==='mediana'&& ingredientesExtras != 0){
        const precioPizza =((5.42+(ingredientesExtras*2))*1.5).toFixed(2)
        mostrarPrecio.innerHTML=`
        <h4>el precio final es $ ${precioPizza}</h4>      
        `
    }else if(obj.size==='grande' && ingredientesExtras == 0){
        mostrarPrecio.innerHTML=`
        <h4>el precio final es $ 8.22</h4>      
        `
    }else if(obj.size==='grande'&& ingredientesExtras != 0){
        const precioPizza =((5.48+(ingredientesExtras*4))*1.5).toFixed(2)
        mostrarPrecio.innerHTML=`
        <h4>el precio final es $ ${precioPizza}</h4>      
        `
    }else{
        alert('No Has Agregado Ninguna Pizza Aun')
    }
})
let obj ={
    size:'',
    extra:[],
}


//crear los eventos 
smallPizza.addEventListener('click',function(){
    obj.size =smallPizza.getAttribute('value')
    //console.log(obj.size)
})

medianaPizza.addEventListener("click",function(){
    obj.size = medianaPizza.getAttribute("value")
    //console.log(obj.size)
})

grandePizza.addEventListener('click',function(){
    obj.size = grandePizza.getAttribute('value')
    //console.log(obj.size)
})

extra1.addEventListener('change',function(){
    if(this.checked){
        obj.extra.push(extra1.getAttribute('value'))
        //console.log(obj.extra);
    }else{
        obj.extra.pop()
        //console.log(obj.extra)
    }
})

extra2.addEventListener('change',function(){
    if(this.checked){
        obj.extra.push(extra2.getAttribute('value'))
        console.log(obj.extra);
    }else{
        obj.extra.pop()
        //console.log(obj.extra)
    }
})

extra3.addEventListener('change',function(){
    if(this.checked){
        obj.extra.push(extra3.getAttribute('value'))
        //console.log(obj.extra);
    }else{
        obj.extra.pop()
        //console.log(obj.extra)
    }
})

extra4.addEventListener('change',function(){
    if(this.checked){
        obj.extra.push(extra4.getAttribute('value'))
        console.log(obj.extra);
    }else{
        obj.extra.pop()
        //console.log(obj.extra)
    }
})

extra5.addEventListener('change',function(){
    if(this.checked){
        obj.extra.push(extra5.getAttribute('value'))
        //console.log(obj.extra);
    }else{
        obj.extra.pop()
        //console.log(obj.extra)
    }
})