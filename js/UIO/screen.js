//------UPDATE MINIPULATE SLIDER VISIUALLY------
class Screen{

    container=document.querySelector(".container");
    text=document.querySelector("#avenger-text");
    image=document.querySelector("#avenger-image");
    leftCont=document.querySelector("#left-button");
    rightCont=document.querySelector("#right-button");


    updateSlider(object)// info sent from BLO from databace;
    {
     //   console.log(object);
        if(object!=null)//to safe guard against null index by over doing it with the clicker
        {
        this.image.src = `../img/${object.picture}`; 
        this.image.alt= object.title; 
        this.text.innerHTML= object.namme; 
        }
    }
}

export default Screen;