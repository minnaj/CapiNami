/*
EnemyMovement determines direction and speed of Enemies' movement.
*/
#pragma strict

public var enemySpeed : float;
public var enemyDirection : Vector3;
private var hitInfo : RaycastHit;


function Start() 
{
	//enemySpeed = 9.0;
}


function Update() 
{
	// Destroy Enemy when it hits a wall
	if( Physics.Raycast( transform.position, enemyDirection, hitInfo, 1.0 ) &&
		hitInfo.collider.CompareTag( "Wall" ))
	{
		Destroy( gameObject );
	}
	
	// Movement direction (and speed) given in EnemyControl-script
	transform.Translate( enemyDirection * Time.deltaTime * enemySpeed );
}


// Destroy Enemy if it hits Player
function OnTriggerEnter( other : Collider )
{
	if( other.gameObject.CompareTag( "Player" ))
	{
		Destroy( gameObject );
	}
}