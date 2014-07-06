/*
EnemyMovement determines direction and speed of Enemies' movement.
*/
#pragma strict

var enemySpeed : float;
var hitInfo : RaycastHit;
public var enemyDirection : Vector3;

function Start() 
{
	enemySpeed = 7.0;
}


function Update() 
{
	if( Physics.Raycast( transform.position, enemyDirection, hitInfo, 1.0 ) &&
		hitInfo.collider.CompareTag( "Wall" ))
	{
		Destroy( gameObject );
	}
	
	transform.Translate( enemyDirection * Time.deltaTime * enemySpeed );
}


function OnTriggerEnter( other : Collider )
{
	if( other.gameObject.CompareTag( "Player" ))
	{
		Debug.Log( "Player hit" );
		Destroy( gameObject );
	}
}