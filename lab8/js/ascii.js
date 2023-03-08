var currentFrame = 0;
var intervalID ='';

function startAnimation() {
    var animation = document.getElementById('sel_anime').value;
    var speed = document.getElementById('chk_speed').checked ? 50 : 250;

    document.getElementById('btn_start').disabled = true;
    document.getElementById('btn_stop').disabled = false;
    document.getElementById('sel_anime').disabled = true;

    var frames = CUSTOM.split('=====\n');
    intervalID =  setInterval(displayNextFrame , speed , frames);
}

function displayNextFrame(frames)
{
    currentFrame = currentFrame+1 >= frames.length ? 0 : currentFrame+1;
    document.getElementById('txt_anime').value = frames[currentFrame];
}

function stopAnimation() {
    document.getElementById('btn_start').disabled = false;
    document.getElementById('btn_stop').disabled = true;
    document.getElementById('sel_anime').disabled = false;
    clearInterval(intervalID);
}

function sizeOnchangeHandler()
{
    var size = document.getElementById('sel_size').value;
    document.getElementById('txt_anime').style.fontSize = size;
}
function speedOnchangeHandler()
{
    stopAnimation();
    startAnimation();
}

function animationOnchangeHandler()
{
    var animation = document.getElementById('sel_anime').value;

    switch (animation) {
        case 'Blank':
            break;
        case 'Exercise':
            CUSTOM = EXERCISE;
            break;
        case 'Juggler':
            CUSTOM = JUGGLER;
            break;
        case 'Bike':
            CUSTOM = BIKE;
            break;
        case 'Dive':
            CUSTOM = DIVE;
            break;
        case 'Custom':
            CUSTOM = document.getElementById('txt_anime').value;
            break;
    }
    document.getElementById('txt_anime').value=CUSTOM;
}



