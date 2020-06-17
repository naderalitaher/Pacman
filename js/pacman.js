class pacman
{
 y

 x

 direction

constructor(y, x , direction)
{
  this.y=y
  this.x=x
this.direction=direction
}
affichePacman() {
    let blocPacman = document.createElement('div');
    blocPacman.id='pacman';
    blocPacman.style.gridColumn=this.x;
    blocPacman.style.gridRow=this.y;


document.getElementById('grillePacman').appendChild(blocPacman)

}


deplacePacman(){

    if(monPacman.direction==1){
      this.x++
    }
    
    else if(this.direction==2){
    this.y++
    }
    
    else if(this.direction==3){
    this.x--
    }
    
      else if(this.direction==4){
      this.y--
      }
    
    
      if(this.x>maGrille[0].length){
    
        this.x=1
      
      }
    
      if(this.x<1){
    
        this.x=maGrille[0].length
      
      }
    
       
      if(maGrille[this.y-1][this.x-1]==0){
        if(this.direction==1){
            this.x--
        }
    
        else if(this.direction==2){
            this.y--
          }
    
    
          else if(this.direction==3){
            this.x++
            }
    
            else if(this.direction==4){
                this.y++
              }
      }
    
    
     if(maGrille[this.y-1][this.x-1]==2){
    
        maGrille[this.y-1][this.x-1]=1
        score=score+1
     }
    
    }

}