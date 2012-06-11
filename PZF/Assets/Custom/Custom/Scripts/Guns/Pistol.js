var shotSound: AudioClip; // drag a shot sound here, if any
var bloodPrefab: GameObject; // drag the blood prefab here, if any
var sparksPrefab: GameObject; // drag the sparks prefab here, if any
var muzzleFlash : GameObject;
var target : Transform;
var MaxBullets = 9;
var Bullets = 9;
var Clip = 10;
var Recoil = 10;
var TPB = 0.1;

function Update(){
    if (Input.GetButtonDown("Fire1")){
       if (Bullets > 0){
          if (Clip > 0){
             Shoot();
             Bullets -= 1;
             
          }
        }
    }
    
    if (Bullets == 0){
       if (Clip >= 1){
             Clip -= 1;
             Bullets = MaxBullets;
       }
       if (Clip == 0){
          Bullets = 0;
       }
    }
    OnGUI();
}

function Shoot(){
    if (shotSound) audio.PlayOneShot(shotSound); // play the shot sound
    var hit: RaycastHit;
    MuzzleFlashOn();
    if (Physics.Raycast(transform.position, transform.forward, hit)){
        // prepare rotation to instantiate blood or sparks
        var rot = Quaternion.FromToRotation(Vector3.up, hit.normal);
        if (hit.transform.tag == "Enemy"){ // if enemy hit...
            if (bloodPrefab) Instantiate(bloodPrefab, hit.point, rot); // make it bleed...
            hit.transform.SendMessage("ApplyDamage", 5, SendMessageOptions.DontRequireReceiver); // and consume its health
        } else { // otherwise emit sparks at the hit point
            if (sparksPrefab) Instantiate(sparksPrefab, hit.point, rot);
        }
    }
}

function MuzzleFlashOn()
{
    var muzzleFlashLength = 0.1;
    muzzleFlash.active = true;
    yield WaitForSeconds(muzzleFlashLength);
    muzzleFlash.active = false;
}

function OnGUI () {
    GUI.Box (Rect(100,0,100,50), "Bullets:" + " " + Bullets);
    GUI.Box (Rect (0,0,100,50), "Clip:" + " " + Clip);
    //GUI.Box (Rect (100,0,100,50), "Clip:" + " " + Clip);
}