#pragma strict

var shooting : boolean;

function Start () {
}

function Update () {
   if (Input.GetKeyDown ("mouse 0")){
      var shoooting = true;
      animation.Play ("Shoot");  
      shoooting = false;  
   }
    if (Input.GetAxis("Vertical") > 0.1){
       if (!shooting){
       animation.Play ("Walk"); 
    }
   }
}