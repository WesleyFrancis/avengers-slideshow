
import screen from "./UIO/screen.js"; // we only use the information here to get click events
import slider from "./BIO/slider.js";// main logic of the program
import avenger from "./BIO/avenger.js";

//This layer handles the event listners and calls teh business logic 
// program flow


//entry point of applicaiton 
function main()
{
    const scrn= new screen();
    const slide= new slider();
    const aven= new avenger();

    const t=  setInterval(function()//playes the slide show updating the ui and fetching infor from avenger class
        {
            console.log(aven.curentAvenger);
            scrn.updateSlider(aven.getAvenger(aven.curentAvenger));
            aven.curentAvenger++;
            if(aven.curentAvenger >= aven.MaxAvenger)
            {
                aven.curentAvenger=0;
            }
        },2000);

    scrn.leftCont.addEventListener("click",(e)=>{
        // minus 1 from image index and upadte the src from the databse
        slide.goBack(aven,scrn);
      //  console.log(aven.curentAvenger);
    });

    scrn.rightCont.addEventListener("click",(e)=>{
        // plus 1 to image index and upadte the src from the databse

        slide.goForward(aven,scrn);
      //  console.log(aven.curentAvenger);
    });

}


main();