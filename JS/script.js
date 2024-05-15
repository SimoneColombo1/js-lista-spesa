const ListaSpesa= ["mereluzzo","cotolette","maionese","pomodori","latte","biscotti", "yogurt"];

const Ul= document.querySelector('ul');

let i=0;

while (i < ListaSpesa.length){
 
    const li= document.createElement('li')
    li.append(ListaSpesa[i]);
    Ul.appendChild(li);
    i= i+1;
}