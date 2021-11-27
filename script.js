console.log("Hello OOPS");
//Implement the method use Class Concept

const PI=3.14;
class circle{//declaring class name as Circle
    constructor(radius,color)//Use Constructor to Store the Values 
    {
        this.radius=radius;//Use this to store temporarily and use dynamic storing values . 
        this.color=color;
    }
    getradius(){//get method 
        return this.radius;
    }
    getcolor(){
        return this.color;
    }
    getarea(){
        return PI*this.radius*this.radius;//apply formula (PI *R*R)
    }
    getcircumference(){
        return 2*PI*this.radius;
    }
}
var r1=new circle(1.0,'red');
var area=r1.getarea() ;
var color=r1.getcolor();
var radius=r1.getradius();
var circumference=r1.getcircumference();
console.log("Printing the Class Circles Values")
console.log("Area :"+area+'\n'+"Circumference :"+ circumference+"\n"+ "Color :"+color+'\n'+"Radius :"+radius)

//Class MOvie starts
class movie{
    constructor(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG()
    {
        return this.rating
    }
}
var r2=new movie("Casino Royale","Eon Productions","PG");
var rating=r2.getPG();

console.log(r2);
console.log(rating)
//Class Printing Ends

class person{
    constructor(name,age,gender,email,phonenumber)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.email=email;
        this.phonenumber=phonenumber;
    }
}
var r3=new person("Bheema",26,"male","khokho95@gmail.com","+919597818465");

//In order of accesing the constructor Values use a reference varibale r3
console.log(r3);


