let currentMoleTile;
let currentPlantTile;
let score=0;
let game=false;

window.onload=()=>{
    setGame();

}
function setGame(){
    const board = document.querySelector('.board');
    for(let  i=0;i<9;i++){
        let tile=document.createElement('div');
        tile.id=i.toString();
        tile.addEventListener('click',selectTile)
        board.appendChild(tile);  

    }
    setInterval(setMole,2000);
    setInterval(setPlant,3000)
}

function getRandomTile(){
    let num=Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){
    if(game){
        return;
    }
    if(currentMoleTile){
        currentMoleTile.innerHTML="";
    }
  
    let mole=document.createElement('img');
    mole.src="assets/mole.png";
    let num=getRandomTile();
      if(currentPlantTile && currentPlantTile.id==num){
        return;
    }
    currentMoleTile=document.getElementById(num);
    currentMoleTile.appendChild(mole);
}
function setPlant(){
    if(game){
        return;
    }
    if(currentPlantTile){
        currentPlantTile.innerHTML="";
    }
   

let plant=document.createElement("img");
plant.src="assets/p.png"
let num=getRandomTile();
 if(currentMoleTile && currentMoleTile.id==num){
        return;
    }
currentPlantTile=document.getElementById(num);
currentPlantTile.appendChild(plant);

}
function selectTile(){
    if(this==currentMoleTile){
        score+=10;
        document.getElementById('score').innerText="Score: "+score;

    }
    else if(this==currentPlantTile){    
    
    document.getElementById('score').innerText="Game Over! Final Score: "+score;
    score=0;
setTimeout(()=>{
    document.getElementById('score').innerText="Score: "+score;
    game=false;
},2000);
    game=true;
 
    
    }
}