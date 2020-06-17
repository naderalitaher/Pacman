class fantome

{
    
    x
    y
    direction
    name




constructor(y, x , direction,name)
{
  this.y=y
  this.x=x
this.direction=direction
this.name=name


}

 afficheFantome(){

    let blocFantome = document.createElement('div');
    blocFantome.id='fantome';
    blocFantome.style.gridColumn=this.x;
    blocFantome.style.gridRow=this.y;
  
  
    if(this.name==1){
  
      blocFantome.id='fantome1';
  
    }
  
  
    else if(this.name==2){
  
      blocFantome.id='fantome2';
  
    }
  
  
    if(this.name==3){
  
      blocFantome.id='fantome3';
  
    }
  
    
  
  
  document.getElementById('grillePacman').appendChild(blocFantome)
  
  }

 deplaceFantome(){

    this.direction=getRandomInt(5)
    this.direction%4

  
    if(this.direction==1){
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
  
  }
}