function setup()
 {
  createCanvas(800, 600);
  background(0);
}

  function draw()
{
  background(0);
  fill(255);
   ellipse(mouseX, mouseY, 100, 100);

   drawDonut1(219, 46, 46, 100, 100);
   drawDonut1(247, 148, 148, 300, 100);
   drawDonut1(247, 196, 196, 400, 200);
   drawDonut1(255, 255, 255, 500, 300);
}


function drawDonut1(R, G, B, X, Y)
{
  //doughnut #1
   fill(R, G, B);
   ellipse(X, Y, 200, 200);
   fill(0);
   ellipse(X, Y, 120, 120);
}
