/*
Player determines direction and speed of Player's movement, 
and controls Player information.
*/
#pragma strict

public var playerSpeed : float;
private var playerHitpts : int;
private var playerScore : int;
private var x : Vector3; // Horizontal movement
private var z : Vector3; // Vertical movement
private var moveDir : Vector3;
private var hit : RaycastHit;
private var controller : CharacterController;



function Start () 
{
	controller = GetComponent( CharacterController );
	playerSpeed = 12.0;
	playerHitpts = 5;
	playerScore = 0;
}


function Update () 
{
	// Get direction from input
	x = Input.GetAxisRaw("Horizontal") * transform.right;
	z = Input.GetAxisRaw("Vertical") * transform.forward;
	moveDir = x + z;
	
	var mag = Mathf.Max( Mathf.Abs(moveDir.x), Mathf.Abs(moveDir.z) );
	moveDir = moveDir.normalized * mag;
	
	// Check for collisions
	if( Physics.Raycast( transform.position, x, 1.0 ))
	{
		//x = Vector3.zero;
		moveDir.x = 0.0;
	}
	
	if( Physics.Raycast( transform.position, z, 1.0 ))
	{
		//z = Vector3.zero;
		moveDir.z = 0.0;
	}
	
	// Apply movement
	controller.SimpleMove( moveDir * playerSpeed );
}




// Substract hitpoints if hit by enemy
function OnTriggerEnter( other : Collider )
{
	if( other.gameObject.CompareTag( "Enemy" ))
	{
		playerHitpts -= 1;
		
		if( playerHitpts == 0 )
		{
			Time.timeScale = 0;
		}
	}
}



// Show health points and score in GUI
function OnGUI()
{
	GUI.Box( Rect( 5, 5, 100, 30 ), "Health: " + playerHitpts );
	GUI.Box( Rect( Screen.width-105, 5, 100, 30), "Score: " + playerScore );
}

