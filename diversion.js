class Diversion
{

constructor(x,y,width,height)
{

var option=
{

    isStatic=false
}


this.body=Bodies.rectangle(x,y,width,height)

this.height=height
this.width=width


}


display()
{

    rectMode(CENTER)

    rect(0,0,this.width,this.height)





}








}