/*
PlayerMovement determines direction and speed of Player's movement.
*/
#pragma strict

var playerSpeed : float;


function Start () 
{
	playerSpeed = 10.0;
}


function Update () 
{
	//var x : Vector3 = Input.GetAxis("Horizontal") * transform.right * Time.deltaTime * playerSpeed;
	//var z : Vector3 = Input.GetAxis("Vertical") * transform.forward * Time.deltaTime * playerSpeed;
	var x : Vector3 = Input.GetAxis("Horizontal") * transform.right;
	var z : Vector3 = Input.GetAxis("Vertical") * transform.forward;
	
	// Check for collisions
	var dir = transform.TransformDirection( x + z );
	var hit : RaycastHit;
	
	if( Physics.Raycast( transform.position, x, 1.0 ))
	{
		x = Vector3.zero;
	}
	
	if( Physics.Raycast( transform.position, z, 1.0 ))
	{
		z = Vector3.zero;
	}
	
	transform.Translate( (x + z) * Time.deltaTime * playerSpeed );
	//transform.Translate(x + z);
}