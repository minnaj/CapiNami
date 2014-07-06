/*
EnemyControl creates Enemies in random places.
*/
#pragma strict

var enemyPrefab : Enemy; // New Enemy to be spawned
private var position : Vector3; // Position for Enemy
private var number : int; // Number of Enemies
private var startWall : int; // Wall where new Enemy is placed
private var direction : Vector3; // Movement direction for Enemy


function Start ()
{
	position = Vector3.zero;
	number = 5;
	startWall = 0;
}


function Update ()
{
	// Spawn Enemies
	if( number > 0 )
	{
		// Randomize placement of new Enemy
		startWall = Random.Range(0, 3);
		
		switch( startWall )
		{
			case 0: // North wall
				position = Vector3( Random.Range(-9, 9), 0, 9 );
				direction = Vector3.back;
				break;
			case 1: // East
				position = Vector3( 9, 0, Random.Range(-9, 9) );
				direction = Vector3.left;
				break;
			case 2: // South
				position = Vector3( Random.Range(-9, 9), 0, -9 );
				direction = Vector3.forward;
				break;
			case 3: // West
				position = Vector3( -9, 0, Random.Range(-9, 9) );
				direction = Vector3.right;
				break;
		}
		
		Debug.Log( position );
		
		//position = Vector3( Random.Range(-9.0, 9.0), 0, Random.Range(-9.0, 9.0));
		var newEnemy : Enemy;
		newEnemy = Instantiate( enemyPrefab, position, Quaternion.identity );
		
		newEnemy.enemyDirection = direction;
		//var enemyScript = newEnemy.GetComponent("EnemyMovement");
		//enemyScript.enemyDirection = direction;
		//newEnemy.GetComponent( EnemyDirection ).enemyDirection = direction;
		//newEnemy.enemyDirection = direction;
		number--;
	}
}