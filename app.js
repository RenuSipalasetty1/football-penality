let score=[0,1,2];
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
console.log(teaml);
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
};
selectTurn = ()=>{
    console.log("select tuurn");
    turn = Math.round(Math.random())+1;
    console.log("turn");
};
updateButtonText=()=>{
    var button1 = document.getElementById(`strike-button`);
    console.log(button1);
    button1.textContent = `${turn===1?teamc.name: teaml.name} Strike`;
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
    document.getElementById('team-a-score').textContent = teama.score;
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
