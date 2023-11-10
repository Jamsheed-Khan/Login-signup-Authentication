const input = document.getElementById('inp')
const list = document.getElementById('list')

function addtast(){
    if(input.value === ''){
        alert('You must write something!');
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = input.value;
        list.appendChild(li);
        let  span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = ''
}
list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classlist.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

    }
},false);

