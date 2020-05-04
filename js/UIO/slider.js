//------UPDATE MINIPULATE SLIDER VISIUALLY------
class Slider{

    container=document.querySelector(".container");
    text=document.querySelector("#avenger-text");
    image=document.querySelector("#avenger-image");
    leftCont=document.querySelector("#left-button");
    rightCont=document.querySelector("#right-button");


    updateSlider(object)// info sent from BLO from databace;
    {
        
        this.image.src = `../img/${object.picture}`; 
        this.image.alt= object.alt; 
        this.text.innerHTML= object.title; 
    }
}

export default Slider;