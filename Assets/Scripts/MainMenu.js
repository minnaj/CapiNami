#pragma strict

var mySkin : GUISkin;


function OnGUI ()
{
	GUI.skin = mySkin;

	GUI.Box( Rect(Screen.width/2-100, Screen.height/2-70, 200, 140), "CapiNami - Main Menu" );
	
	if( GUI.Button( Rect(Screen.width/2-75, Screen.height/2-40, 150, 30), "Play Level 1" ))
	{
		Application.LoadLevel("CapiLevel1");
	}
	
	if( GUI.Button( Rect(Screen.width/2-75, Screen.height/2-5, 150, 30), "Play Level 2" ))
	{
		Application.LoadLevel("CapiLevel2");
	}
		
	if( GUI.Button( Rect(Screen.width/2-75, Screen.height/2+30, 150, 30), "Quit" ))
	{
		Application.Quit();
	}
}