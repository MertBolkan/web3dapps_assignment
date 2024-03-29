//adapted from example code 'benskitchen.com'

var spinning = false;
//Don't know how to adapt this to Blender's export
function spin()
{
	spinning = !spinning;
	document.getElementById('model_RotationTimer').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('model_RotationTimer').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if(document.getElementById('model_RotationTimer').getAttribute('enabled')!= 'true')
        document.getElementById('model_RotationTimer').setAttribute('enabled', 'true');
    else
        document.getElementById('model_RotationTimer').setAttribute('enabled', 'false');
}

function wireframe()
{
	var e = document.getElementById('model');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;

function headlight()
{
	lightOn = !lightOn;
	document.getElementById('model_headlight').setAttribute('headlight', lightOn.toString());
}

function cameraFront()
{
	document.getElementById('CA_Camera_Front').setAttribute('bind', 'true');
}

function cameraBack()
{
	document.getElementById('CA_Camera_Back').setAttribute('bind', 'true');
}

function cameraTop()
{
	document.getElementById('CA_Camera_Top').setAttribute('bind', 'true');
}

function cameraBottom()
{
	document.getElementById('CA_Camera_Bottom').setAttribute('bind', 'true');
}