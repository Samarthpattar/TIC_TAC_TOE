
//  let turn0 = true; // 1
//  let winPattern = [[0,1,2],

//   [0,3,4],
//   [0,4,8],
//   [1,4,7],
//   [2,5,8],
//   [2,4,6],
//   [3,4,5],
//   [6,7,8]];



//  function addEvents(){
//     var buttons=document.getElementsByClassName("box")
//      Array.from(buttons).forEach((box)=>{
//      box.addEventListener("click",function(){
//          console.log("button was clicked")
//          if(turn0){
//              box.innerHTML="x"
//              turn0=false;
//          }else{
//              box.innerHTML="o"
//             turn0=true;
//          }
//          // box.innerHTML = turn0 ? "X" : "O";
//          // turn0 = !turn0;
//           box.disabled = true;
//          checkWinner();    
        
//      })
//     });
//  }


//   function checkWinner(){
//      var buttons=document.getElementsByClassName("box")
    
//       for( pattern of winPattern){
//         // console.log(pattern[0],pattern[1],pattern[2])
//           let pos1Val = buttons[pattern[0]].innerHTML;
//           let pos2Val = buttons[pattern[1]].innerHTML;
//           let pos3Val = buttons[pattern[2]].innerHTML;

//           if(pos1Val !=="" && pos2Val !=="" && pos3Val !=="" ){
        
//                 if(pos1Val===pos2Val && pos2Val===pos3Val){
//                  var p_id = document.getElementById("msg");
//                    if(pos1Val || pos2Val || pos3Val){
//                   p_id.innerHTML = `Congratulations,winner is ${pos1Val}`;  
//                   }else {
//                    p_id.innerHTML =  `Congratulations,winner is ${pos2Val}`;
//                   }  
//                   console.log("winner is ",pos1Val); 
//                   disable_Buttons() //Calling disable buttons              
//               }     
//           }
//       }
   
//   }  

//   const disable_Buttons = () =>{  // disable button
//      var buttons=document.getElementsByClassName("box")
//      for(let box of buttons){
//         box.disabled = true;
//         }    
//   }
//   const reset_Button=()=>{   // Reset button

//       var r_buttons = document.getElementById("Reset")
//       var buttons = document.getElementsByClassName("box")
//       var p_id = document.getElementById("msg");
//       r_buttons.addEventListener("click",function(){

//         console.log("clicked",r_buttons)
 

//         Array.from(buttons).forEach((box)=>{
//          box.innerHTML=""; 
//          box.disabled=false; // Disable the boxes after the  winning conditions are met
//          p_id.style.display = "none"; // to hide the message box

//      })

//   })        
 
//   }
//   reset_Button()


//  function main(){

//      addEvents();
  
//  }

//  main()
  



// const array = [ "vidyanagar","gadag","dharwad","hublli","haliyal"]
// counter = 0;

// function data(){
//   var hello = document.getElementById("hello")
//   hello.addEventListener("click",function(){
//     console.log("clicked")
      
//       hello.innerHTML = "hello" + " " + array[counter]
//       counter++;
//       if(counter >= array.length){
//       counter = 0;
//     }
//   });
// }

// let arr = [1,2];
// let rev = arr.reverse();
// console.log(arr,rev)

let turn0 = true;

let winPattern = [[0,1,2],

 [0,3,4],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8]];

//  let options =["","","","","","","","",""]


function addEvents(){
   var buttons=document.getElementsByClassName("box")
   Array.from(buttons).forEach((box)=>{
    box.addEventListener("click",function(){
        console.log("button was clicked")
        if(turn0){
            box.innerHTML="x"
            turn0=false;
        }else{
            box.innerHTML="o"
            turn0=true;
        }
        // box.innerHTML = turn0 ? "X" : "O";
        // turn0 = !turn0;
        box.disabled = true;
        checkWinner();  
    })
   });
}

 function checkWinner(){
    var buttons=document.getElementsByClassName("box")
     for( pattern of winPattern){
       // console.log(pattern[0],pattern[1],pattern[2])
         let pos1Val = buttons[pattern[0]].innerHTML;
         let pos2Val = buttons[pattern[1]].innerHTML;
         let pos3Val = buttons[pattern[2]].innerHTML;

         if(pos1Val !=="" && pos2Val !=="" && pos3Val !=="" ){
              
            
                if(pos1Val===pos2Val && pos2Val===pos3Val ){
                 if(pos1Val||pos2Val||pos3Val ){
                    var msg = document.getElementById("msg")

                    msg.innerHTML = `congratulations winner, ${pos1Val} ` 
                }else{
                    msg.innerHTML = `congratulations winner, ${pos2Val} `  
                   
                   
                }
                //  if(pos1Val && pos2Val && pos3Val.innerHTML!= winPattern ){
                //           var draw_msg = document.getElementById("draw_msg")
                //           draw_msg.innerHTML = `Game is draw ` 
                //       }

                 console.log("winner is ",pos2Val);
                 disable_Buttons();
                    
             }
           
              
         }
     }
 }

 const disable_Buttons = () =>{
    var buttons=document.getElementsByClassName("box")
    for(let box of buttons){
        box.disabled = true;
       }
 }

 const newgame = () =>{
     var Newgame = document.getElementById("Newgame")
     Newgame.addEventListener("click",function(){
     console.log("clicked")
     window.location.reload();
 })}
newgame()
 
 const reset_Button=()=>{
        var r_buttons = document.getElementById("Reset")
        var buttons = document.getElementsByClassName("box")
        var msg = document.getElementById("msg")
        r_buttons.addEventListener("click",function(){
        console.log("clicked",r_buttons)
        Array.from(buttons).forEach((box)=>{
        box.innerHTML="";
        box.disabled = false;
        msg.style.display= "none";
         turn0 = true;   
       })
    })
  } 
reset_Button()

function main(){
addEvents();  

}

main()
