/*tableau*/



let maGrille = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
    [2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],
    [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,0,2,0],
    [0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

let monPacman = new pacman(2,1,1)


let tabFantome = [ new fantome(11,10,1,0), new fantome(11,10,1,1),new fantome(11,10,1,2),new fantome(11,10,1,3),new fantome(11,10,1,3)]


  /*tableau*/


 let score = 0 


/* fonctions j'ai gangé */

 function jaiGagné(){

  let compteur=0

 for(let i in maGrille){

  for(let j in maGrille[i]){

    if(maGrille[i][j]==2){

       compteur++

    }

  }

 }


 if(compteur==0){
  
 alert("trop fort ma gueule ")

 return true
 }

 return false

 }

 /* fonctions j'ai gangé */


 /*affichage*/


function affichageGrille(){

  document.getElementById('grillePacman').innerHTML= " "



for(let i in maGrille){

  for(let j in maGrille[i]){

    
    
    var monElem=document.createElement('div')
  

    if(maGrille[i][j]==0){
    
    monElem.classList.add("mur")
    
    }

    else if(maGrille[i][j]==1){
    
    monElem.classList.add("sol")
    
    }


   else if(maGrille[i][j]==2){
    
    monElem.classList.add("bonbon")
    
    }


        monElem.style.gridColumn=parseInt(j)+1;
        monElem.style.gridRow=parseInt(i)+1;
        document.getElementById('grillePacman').appendChild(monElem)

  }

 

}

}

function afficheScore(){

  document.getElementById('score').innerHTML= score

}

/*affichage*/


/*appuie touche*/

function appuieTouche(e){
console.log(e.key)

if(e.key=="z"){
monPacman.direction=4
}

else if(e.key=="s"){
  monPacman.direction=2
}

else if(e.key=="q"){
  monPacman.direction=3
  }
  

  else if(e.key=="d"){
    monPacman.direction=1
    }

  }


/*appuie touche*/






  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

/*collision*/

  function collision(i){

if(monPacman.x==tabFantome[i].x){

if(monPacman.y==tabFantome[i].y){

alert("vous avez perdu ")

return true

  }

}

return false
  }


  /*collision*/


  
function refresh()
{
let goOn = true 

monPacman.deplacePacman()




  for(let i in tabFantome)
{
  if(collision(i)){

    goOn = false

  }
  tabFantome[i].deplaceFantome()
  if(collision(i)){

    goOn = false

  }
}


 

  affichageGrille()
  
  monPacman.affichePacman()

  for(let i in tabFantome)
{
  tabFantome[i].afficheFantome()
}
  afficheScore()

  if(jaiGagné()){

    goOn = false

  }
  

  if(goOn==true){

    setTimeout(refresh, 500)
    
  }

}


refresh()


document.body.addEventListener("keydown",appuieTouche)