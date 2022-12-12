let r1=[0,0,0,0];
let r2=[0,0,0,0];
let r3=[0,0,0,0];
let r4=[0,0,0,0];

let first=1;
let second=2;
let current= first // start with first player
let count=0;

function flip(obj){
    let valid= true;
    let temp =obj.id.split(",");
    let row=Number(temp[0]);
    let colunm=Number(temp[1]-1);
     //console.log(row);
     //console.log(colunm);

     switch(row){
        case 1:
            if(r1[colunm]!=0){
                valid=false;
            } else{
                r1[colunm]=current;
            }
               
            break;
        case 2:
            if(r2[colunm]!=0){
                valid=false;
            }else{
                r2[colunm]=current;
            }
            break;
        case 3:
            if(r3[colunm]!=0){
                valid=false;
            }else{
                r3[colunm]=current;
            }  
            break;
        case 4:
            if(r4[colunm]!=0){
                valid=false;

            }else{
                r4[colunm]=current;
            } 
            break;
    }

    if(valid){
        obj.style.transform ="scaleY(-1)";
    //change player
    if(current==first){
        obj.style.background="#3498DB ";
        document.getElementById("player-state").innerHTML="Player 2 Turn!";
        document.getElementById("player-state").style.color="#E74C3C";
        current =second;
    }else{
        obj.style.background="#E74C3C";
        document.getElementById("player-state").innerHTML="Player 1 Turn!";
        document.getElementById("player-state").style.color="#3498DB ";
        current= first;
}
    count +=1;
    console.log(count);
     
    if(count== 16 && checkWin()==false){
        document.getElementById("winner").innerHTML="None of them are win!";
    }else{
        checkWin();
     //console.log(ans);
    }
     
    }
// console.log(r1);
// console.log(r2);
// console.log(r3);
// console.log(r4);
// console.log("-----------"); 
}

function checkWin(){

    if(vertical(first)==true || horizontal(first)==true || crossline(first)==true){
        document.getElementById("winner").innerHTML="Player 1 Win!";
    }else if(vertical(second)==true || horizontal(second)==true || crossline(second)==true){
        document.getElementById("winner").innerHTML="Player 2 Win!";
    }else 
    {
        return false;
    }

}

function vertical(player){

    for(let index=0; index <4; index++){
        if(r1[index]==player && r2[index]==player && r3[index]==player && r4[index]==player){
            return true;
        }
    }
    return false;
    
}

function horizontal(player){
   
    if(r1[0]==player && r1[1]==player && r1[2]==player && r1[3]==player || r2[0]==player && r2[1]==player && r2[2]==player && r2[3]==player || r3[0]==player && r3[1]==player && r3[2]==player && r3[3]==player || r4[0]==player && r4[1]==player && r4[2]==player && r4[3]==player){
        return true;
    }
    return false;
}

function crossline(player){
    if(r1[0]==player && r2[1]==player && r3[2]==player && r4[3]==player || r1[3]==player && r2[2]==player && r3[1]==player && r4[0]==player)
    {
        return true;
    }
    return false;
}
