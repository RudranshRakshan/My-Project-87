
canvas =  new fabric.Canvas("myCanvas");
block_y = 1;
block_x = 1;

block_image_width = 350;
block_image_height = 350;

var block_image_object = "";

function new_image(get_image,x,y,h,w) {

	fabric.Image.fromURL(get_image, function (Img) {
		blockImageOject = Img;
		blockImageOject.scaleToHeight(h);
		blockImageOject.scaleToWidth(w);
		blockImageOject.set({
			top: y,
			left: x
		})
		canvas.add(blockImageOject)
	})
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '82') 
	{
		block_x=50
		new_image("rr.jpg",4,50,300,250)

	}
	if (keyPressed == '71') {
		block_x = 200;
		new_image("gr.png",250,20,250,200)
	}

	if (keyPressed == '89') {
		block_x = 350;
		new_image("yr.png",425,50,300,250)
		
	}
	if (keyPressed == '80') {
		block_x = 600;
		new_image("pr.png",675,50,250,200)
		
	}
	if (keyPressed == '66') {
		block_x = 700;
		new_image("br.png",790,70,1000,500)
	
	}

}

