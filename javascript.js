
function add() {  
    var x= document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("placeholder", "");
    x.setAttribute("class", "someInput");
    document.body.appendChild(x);
}

function remove() {
 var childs = document.body.getElementsByClassName("someInput");
 if(childs.length > 0) {
   document.body.removeChild(childs[childs.length - 1]);
 }
}