let score=[0,1];
var turn;
var teamc = {
    name:"CHEL",
    run:[],
    score:0
};
console.log(teamc);
var teaml = {
    name:"LIPO",
    run:[],
    score:0
};
var teama ={
    name:"ARSE",
    run:[],
    score:0
};
console.log(teama);
var teame = {
    name:"EVER",
    run:[],
    score:0
};
window.onload = ()=>{

    selectTurn();
    updateButtonText();
    updateScore();
    updateName();
    loadImg();
}
selectTurn = ()=>{
    console.log("select turn");
    turn = Math.round(Math.random())+1;
    console.log("turn");
}
updateButtonText=()=>{
    var button1 = document.getElementById(`strike-button`);
    console.log(button1);
    var result = document.getElementById('result');
    console.log(result);
    result.style.visibility = "";
    button1.textContent = `${turn===1?teamc.name: teaml.name} Strike`;
      if(teamc.run.length == 5 && teaml.run.length == 5){
        button1.remove();
        result.textContent = teamc.score === teaml.score? `It's a draw`:`${teamc.score>teaml.score? teamc.name:teaml.name} Wins`;
    }
    else{
        // check if the strike is over
        turn = teamc.run.length === 5? 2:teaml.run.length === 5 ? 1:turn;
    }
    var button2 = document.getElementById(`strike-button1`);
    console.log(button2);
    button2.textContent = `${turn===1?teama.name: teame.name} Strike`;
    var button3 = document.getElementById(`strike-button2`);
    console.log(button3);
    button3.textContent = `${turn===1?teaml.name: teame.name} Strike`;

}

updateScore=()=>{
    document.getElementById(`team-c-score`).textContent = teamc.score;
    document.getElementById('team-l-score').textContent = teaml.score;
    updateRuns(); 
    document.getElementById(`team-a-score`).textContent = teama.score;
    document.getElementById('team-e-score').textContent = teame.score;
}

updateName=()=>{
    console.log("updated name called");
    document.getElementById('team-c-name').textContent = teamc.name;
    document.getElementById('team-l-name').textContent = teaml.name;
    document.getElementById('team-a-name').textContent = teama.name;
    document.getElementById('team-e-name').textContent = teame.name;
}
loadImg=()=>{
    var pic=document.getElementById('c-team-pic');
    pic.setAttribute("src","./logos/chelsea.png");
    pic.setAttribute("alt","CHELSEA");
    var pic2=document.getElementById('l-team-pic');
    pic2.setAttribute("src","./logos/liverpool.jpg");
    pic2.setAttribute("alt","LIVERPOOL");
    var pic3=document.getElementById('a-team-pic');
    pic3.setAttribute("src","./logos/arsenal.png");
    pic3.setAttribute("alt","ARSENAL");
    var pic4=document.getElementById('e-team-pic');
    pic4.setAttribute("src","./logos/everton.png");
    pic4.setAttribute("alt","EVERTON");
}


var handleStrikeButton1Click=()=>
{
   console.log("button click works");
   var run=score[Math.floor(Math.random()*score.length)];
   console.log(run);
   
   if(turn === 1)
   {
       teamc.run.push(run);
       teamc.score = calculateScore(teamc.run);
       console.log(teamc.score);
   }
   else{
       teaml.run.push(run);
       teaml.score = calculateScore(teaml.run);
       console.log(teaml.score);
   }
   updateButtonText();
   updateScore();
}

  
calculateScore = (run)=>{
    console.log("method to calculate the score");
    return run.reduce((total,ran)=>total+ran,0);
    
}
var updateRuns =()=>{
    var teamOneRunsElement = document.getElementById('team-c').children;
    teamc.run.forEach((ran,index)=>{
        if(ran===1){
        teamOneRunsElement[index].style.backgroundColor = "#0f960a";
        }
        else{
            teamOneRunsElement[index].style.backgroundColor = "#f00";

        }
    });
    var teamTwoRunsElement = document.getElementById('team-l').children;

    teaml.run.forEach((ran,index)=>{
        if(ran===1){
            teamTwoRunsElement[index].style.backgroundColor = "#0f960a";
            }
            else{
                teamTwoRunsElement[index].style.backgroundColor = "#f00";
    
            }
    });


}