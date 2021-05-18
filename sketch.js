const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

 var bg

function preload() {
    changeBg()
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
        }


    Engine.update(engine);

    // write code to display time in correct format here


}

async function changeBg(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responsejson = await response.json()
var datetime = responsejson.datetime
  hour = datetime.slice(11,13)
  console.log(hour);var datetime = responsejson.datetime
  if(hour>=04&&hour<=06){
    bg = "sunrise1.png"  
  }
   else if(hour>=06&&hour<=08){
    bg = "sunrise6.png"  
  } 
   else if(hour>=17&&hour<=19){
    bg = "sunset7.png"  
  }
   else if(hour>=022&&hour<=24){
    bg = "sunset10.png"  
  }
  if(hour==0&&hour<=03){
    bg = "sunset11.png"  
     }
     else {
    bg = "sunset12.png"
     }
  
  backgroundImg = loadImage(bg)
}
   


