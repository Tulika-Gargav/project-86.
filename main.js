var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        block_image_object = Img;

        block_image_object.scaletoWidth(700);
        block_image_object.scaletoHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(BirthdayImage.jpg);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaletoWidth(block_image_width);
        block_image_object.scaletoHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left:playler_x
        });
        canvas.add(block_image_object);
    });
}


function playSound()
{
	function playSound(){
        x.play(bdayaudio.mp3);
    }
}
