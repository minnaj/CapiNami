/*
	PauseMenu pauses game, displays pause menu when ESC is pressed.
*/

#pragma strict

var mySkin : GUISkin;
private var isPaused : boolean = false;


function Update () 
{
	if( Input.GetKeyUp( KeyCode.Escape ))
	{
		if( isPaused )
		{
			isPaused = false;
			Time.timeScale = 1.0;
		}
		
		else
		{
			isPaused = true;
			Time.timeScale = 0.0;
		}
	}
}


function OnGUI ()
{
	GUI.skin = mySkin;
	
	if( isPaused )
	{
		GUI.Box( Rect(Screen.width/2-100, Screen.height/2-70, 200, 140), "Paused" );
		
		if( GUI.Button( Rect(Screen.width/2-75, Screen.height/2-40, 150, 30), "Return to game" ))
		{
			isPaused = false;
			Time.timeScale = 1.0;
		}
		
		if( GUI.Button( Rect(Screen.width/2-75, Screen.height/2-5, 150, 30), "Quit to main menu" ))
		{
			Application.LoadLevel("Menu");
			Time.timeScale = 1.0;
		}
			
		if( GUI.Button( Rect(Screen.width/2-75, Screen.height/2+30, 150, 30), "Quit to desktop" ))
		{
			Application.Quit();
		}
	}
}