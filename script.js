var username = document.getElementById("username");
var button = document.getElementById("button");
var ul = document.querySelector("ul");





button.addEventListener("click",function(){
          if(username.value.length > 0){
            console.log(username.length);
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(username.value));
            ul.appendChild(p);
            username.value = "";
        }
}
)