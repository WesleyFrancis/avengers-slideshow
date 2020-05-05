import Data from "../DAO/data.js";
import Slider from "../UIO/slider.js"; // we only use the information here to send data to screen from DAO

class Control
{
    //this is where i'd get data from database and past it to the screen to update
    // this layer handle the calculations for the app and business logic ie how it functions
    
    index=0;// ---- was to be the globak value for the index to pull from the database.which would them be modified

   
    constructor(i)
    {
        this.index=i;
  
    }
    getIndex()
    {
        return this.index;
    }
    setIndex(val)
    {
        this.index=val;
    }
    goBack()
    {
        //minus 1 from inedx keeping in mind the max length of array
    }
    goForward()
    {

    }
    
    
    play()//get's info from database and updats slider
    {

      // let index=1;// skip hulk as it's already playing at startup
      let index=1;
      const t=  setInterval(function()
        {
           const slide=new Slider();
           const data=new Data();
           
        //   console.log(this.document);
           slide.updateSlider(data.getImageData(index));//"1.jpg","A picture of hulk","Hulllk"
            index++;

            if(index == data.getTotalImages())
            {
                index=0;
            }
        },1000);
       // clearInterval(t);
    }
}

export default Control;