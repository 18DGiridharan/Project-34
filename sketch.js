//Create variables here
var dog, happyDog, database, food, foodStock;

function preload()
{
	//load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
	createCanvas(500, 500);

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentUp(UP_ARROW)){
    food = food+1
    foodStock = foodStock-1
  }

  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  text(foodStock, 100, 100);
  textSize = 50;
  fill("blue")

}
function readStock(data){
  food = data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}



