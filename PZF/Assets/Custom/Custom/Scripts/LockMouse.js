#pragma strict

function Start () {

}

function Update () {
        if (!Input.GetKeyDown (KeyCode.Escape)){
       Screen.lockCursor = true;
    }
   
     if (Input.GetKeyDown (KeyCode.Escape)){
       Screen.lockCursor = false;
    }
}