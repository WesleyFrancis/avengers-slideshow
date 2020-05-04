
import slider from "./UIO/slider.js"; // we only use the information here to get click events
import controler from "./BIO/control.js";// main logic of the program

//This layer handles the event listners and calls teh business logic 
// program flow


//entry point of applicaiton 
function main()
{
    const s= new slider;
    const control= new controler;
    
    control.play();//playes the slide show updating the ui and fetching from the database 

    s.leftCont.addEventListener("click",(e)=>{
        // minus 1 from image index and upadte the src from the databse
        control.goBack();
    });

    s.rightCont.addEventListener("click",(e)=>{
        // plus 1 to image index and upadte the src from the databse
        control.goForward();
    });

}


main();