function abcdef(naam , umar )
{
    this.name=naam;
    this.age=umar;
}


abcdef.prototype.printname = function(){
    console.log(this.name)
}


var v1 = new abcdef("ch",21);
var v2 = new abcdef("c2",22);
