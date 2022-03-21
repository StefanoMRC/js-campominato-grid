let btn = document.getElementById("btn");
let griglia = document.getElementById("griglia")




btn.addEventListener("click", function () {
    let difficolta = document.getElementById("difficolta").value;
    console.log(difficolta)

    if(difficolta==1){
        for(i=1; i<=100; i++){
            let box = document.createElement("div")
            box.classList.add("box1")
            box.innerHTML=`${i}`
            griglia.appendChild(box);
            box.addEventListener("click", function(){
                console.log(this)
                this.classList.add("bg_box")
            })
        }
        
    }else if(difficolta==2){
        for(i=1; i<=81; i++){
            let box = document.createElement('div')
            box.classList.add("box2")
            box.innerHTML=`${i}`
            griglia.appendChild(box);

            box.addEventListener("click", function(){
                console.log(this)
                this.classList.add("bg_box")
            })
        }
    }else if(difficolta ==3){
        for(i=1; i<=49; i++){
            let box = document.createElement("div")
            box.classList.add("box3")
            box.innerHTML=`${i}`
            griglia.appendChild(box)
            box.addEventListener("click", function(){
                console.log(this)
                this.classList.add("bg_box")
            })
        }
    }
    
})