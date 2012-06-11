// Unitycript
var ray : Ray = Camera.main.ViewportPointToRay (Vector3(0.5,0.5,0));
var shotSound: AudioClip; // drag a shot sound here, if any
var bloodPrefab: GameObject; // drag the blood prefab here, if any
var sparksPrefab: GameObject; // drag the sparks prefab here, if any
var MaxBullets = 9;
var Bullets = 9;
var Clip = 10;
var Recoil = 1;
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
       if (Clip > 0){
             Clip -= 1;
             Bullets = MaxBullets;
       }
    }
}

function Shoot(){
if (shotSound) audio.PlayOneShot(shotSound); // play the shot sound
if (Physics.Raycast (ray))
{
    var hit: RaycastHit;
    var rot = Quaternion.FromToRotation(Vector3.up, hit.normal);
        if (rot.transform.tag == "Enemy"){ // if enemy hit...
            if (bloodPrefab) Instantiate(bloodPrefab, rot.point, rot); // make it bleed...
            rot.transform.SendMessage("ApplyDamage", 5, SendMessageOptions.DontRequireReceiver); // and consume its health
        } else { // otherwise emit sparks at the hit point
            if (sparksPrefab) Instantiate(sparksPrefab, hit.point, rot);
        }
    }
}

