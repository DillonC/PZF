var Behind : Texture;
var Front : Texture;

var behindHealthPos = Rect(10,10,300,30);
var healthPos = Rect(10,10,300,30);

   function Update(){
      if (Input.GetMouseButtonDown(0)){
       healthPos.width = Mathf.Max(0, healthPos.width - 10);   
    }
}

   function OnGUI(){
      GUI.DrawTexture(behindHealthPos, Behind);
      GUI.DrawTexture(healthPos, Front);
}