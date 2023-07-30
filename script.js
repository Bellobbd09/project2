// let inputBox = document.querySelector("#inputBox");
// let buttons = document.querySelectorAll("button");

// let data =[];

// buttons.forEach(function(btn){
//     btn.onclick = function(){
//         if(btn.innerText === "AC"){
//             data = []
//             inputBox.value = 0

//         }else if(btn.innerText === "DEL"){
//             data.pop()
//             inputBox.value = data.join("")

//         }else if(btn.innerText === "="){
//                 let res = data.join("")
//                 inputBox.value = eval(res)
//         }else{
//                 data.push(btn.innerText)
//                 inputBox.value = data.join("")
            
//             }
//     }
// })




 let input = document.getElementById('inputBox');
 let buttons = document.querySelectorAll('button');

 let string =  "";
 let arr = Array.from(buttons);
 arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;

        }
     })
 })
