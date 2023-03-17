let btn = document.getElementById("button");

function crearP(rsp) {
    let p = document.createElement("p");
    let div = document.getElementById("resultText");
    let valorP = "";
    if(rsp == 0){
        p.textContent = "ESGRITO";
        div.appendChild(p);
    }else{
        p.textContent = "esgrito";
        div.appendChild(p);
    }

  }
  function esGrito(){
    let div = document.getElementById("resultText");
    div.innerHTML = "";
    let textarea;
    textarea = document.getElementById("textarea").value;
    textarea = textarea.split(/\r?\n/);
    let textareaAux ="";
    let contExcl = 0;
    let signos = /[^A-Za-z]/; //Es un regEx una expresion que con el atajo [^A-Za-z0-9] nos permite agrupar aquellos que no son alfanumericos
    for (palabra in textarea) {
        while(textarea[palabra].includes("!") != false){
            contExcl++;
            textarea[palabra] = textarea[palabra].replace("!","");
            
        }

        while(textarea[palabra] != textareaAux){
            textareaAux = textarea[palabra];
            textarea[palabra] = textarea[palabra].replace(signos,"");
            if(textareaAux == textarea[palabra]){
                break;
            }            
        }   
            
        console.log(textarea[palabra]);
        console.log(contExcl);
        if(contExcl > textarea[palabra].length){
            crearP(0);
        }else if(contExcl < textarea[palabra].length){
            crearP(1);
        }
     
        contExcl = 0;
    }
  }


btn.addEventListener("click",()=>{
    event.preventDefault();
    esGrito();
});

