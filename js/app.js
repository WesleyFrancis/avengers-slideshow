class Avenger 
{

    //properties
    name;
    picture;
    description;

    //Constructor
    constructor(n,p,d)
    {
        this.name=n;
        this.picture=p;
        this.description = d;
    }
    
}


//entry point of applicaiton 
function main()
{

    //fectch elements from the DOM
    const h1 = document.querySelector("#avenger-text");
    const image = document.querySelector("#avenger-image");

    const avengersArr = [];
    index =0;

    avengersArr.push(new Avenger("Hulk","1.jpg","A picture of hulk"));
    avengersArr.push(new Avenger("Iron Man","2.jpg","A picture of Iron Man"))
    avengersArr.push(new Avenger("Thor","3.jpg","A picture of Thor"))
    avengersArr.push(new Avenger("Thanos","4.jpg","A picture of Thanos"))
    avengersArr.push(new Avenger("Spider Man","5.jpg","A picture of Spiderman"));
    

    setInterval(function(){

            ///
    },5000);


}


main();