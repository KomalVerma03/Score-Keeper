const p1button=document.querySelector('#p1button');
   const p2button=document.querySelector('#p2button');
   const p1display=document.querySelector('#player1');
   const p2display=document.querySelector('#player2');
   const resetbutton=document.querySelector('#reset');
   const selectWinningScore=document.querySelector('#playto');

   let p1Score=0;
   let winningscore=5;
   let p2Score=0;
   let isGameOver=false;//if any one of the player value is equal to winning score then isGameOver is set true
   p1button.addEventListener('click',function(){ //function will be performed when we click p1button
    if(!isGameOver){
        p1Score+=1;
        if(p1Score===winningscore){
            isGameOver=true;//operation will stop for both the players as any one player hits winning score
            p1display.classList.add('winner');//to add color green to the winning score of player 1
            p2display.classList.add('loser');//to add color red to the winning score of player 2
        }
            p1display.textContent=p1Score;
            }
           })
    
    p2button.addEventListener('click',function(){ 
    if(!isGameOver){
        p2Score+=1;
        if(p2Score===winningscore){
            isGameOver=true;
            p2display.classList.add('winner');
            p1display.classList.add('loser');
        }
            p2display.textContent=p2Score;
            }
           })

//The change event occurs when the value of an element has been changed 
    selectWinningScore.addEventListener('change',function(){ 
//this refers to the present object i.e selectWinningScore. Updating the value of winningscore
    winningscore=parseInt(this.value)
    reset();//calling reset function 
})

resetbutton.addEventListener('click',reset)//when we click on reset button we will call reset function

function reset(){
    isGameOver=false;//we will set isGameOver back to false
    p1Score=0;//p1 score set back to zero
    p2Score=0;
    p1display.textContent=0;//text display is set back to 0 for player 1
    p2display.textContent=0;
    p1display.classList.remove('winner','loser');//to remove color the Player 1 text once reset button is clicked
    p2display.classList.remove('winner','loser');

}
setTimeout(()=>
{
    document.body.style.backgroundColor='violet';
    setTimeout(()=>
    {
        document.body.style.backgroundColor='orange';
        setTimeout(()=>
        {
            document.body.style.backgroundColor='pink';
        
            setTimeout(()=>
            {
                document.body.style.backgroundColor='blue';
                setTimeout(()=>
                {
                    document.body.style.backgroundColor='yellow';
                
                    setTimeout(()=>
                    {
                        document.body.style.backgroundColor='cyan';
                    
                    },10000)},10000)
            },10000)},10000)
    },10000)
},1000)