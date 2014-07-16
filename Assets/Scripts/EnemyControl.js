/*
	EnemyControl creates Enemies in random places.
*/
#pragma strict

public var enemyObject : GameObject;
private var terrainSize : int;
private var position : Vector3; // Position for Enemy
private var startWall : int; // Wall where new Enemy is placed
private var direction : Vector3; // Movement direction for Enemy
private var newEnemy : GameObject;
private var isBig : boolean;


function Start ()
{
	position = Vector3.zero;
	terrainSize = 14; // Default area
	//enemyNumber = 10;
	startWall = 0;
	isBig = false;
	SpawnTimer();
}


function createEnemy()
{
	// Big, slow or small, fast Enemy
	if( Random.Range( 0, 2 ))
	{
		isBig = true;
	}
	
	else
	{
		isBig = false;
	}

	// Randomize placement of new Enemy
	startWall = Random.Range( 0, 4 );
	
	switch( startWall )
	{
		case 0: // North wall
			position = Vector3( Random.Range(-terrainSize, terrainSize), 0, terrainSize );
			direction = Vector3.back;
			break;
		case 1: // East
			position = Vector3( terrainSize, 0, Random.Range(-terrainSize, terrainSize) );
			direction = Vector3.left;
			break;
		case 2: // South
			position = Vector3( Random.Range(-terrainSize, terrainSize), 0, -terrainSize );
			direction = Vector3.forward;
			break;
		case 3: // West
			position = Vector3( -terrainSize, 0, Random.Range(-terrainSize, terrainSize) );
			direction = Vector3.right;
			break;
	}
	
	// Instantiate an Enemy, set its starting position and movement direction
	newEnemy = Instantiate( enemyObject, position, Quaternion.identity );	
	newEnemy.GetComponent( EnemyBehaviour ).enemyDirection = direction;

	// Bigger Enemy is larger in size, and slower in speed
	if( isBig )
	{
		newEnemy.GetComponent( EnemyBehaviour ).enemySpeed = 4.0;
		newEnemy.transform.localScale += Vector3( 0.5, 0, 0.5 );
	}
	
	// Normal Enemy
	else
	{
		newEnemy.GetComponent( EnemyBehaviour ).enemySpeed = 9.0;
	}
}



function SpawnTimer()
{
	while( true )
	{
		var number : int = Random.Range( 0, 4 );
		yield WaitForSeconds( number );
		createEnemy();
	}
}


