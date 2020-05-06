
import Screen from "../UIO/screen.js"; // we only use the information here to send data to screen from DAO
import Avenger from "./avenger.js";
class Slider
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
       // console.log(this.d.hero.length);
        return this.index;
    }
    setIndex(val)
    {
        this.index=val;
    }
    goBack(aven,scrn)
    {
        //minus 1 from inedx keeping in mind the max length of array
        if(aven.curentAvenger>0)
        {
            aven.curentAvenger-=1;
        }
        else{
            aven.curentAvenger=aven.MaxAvenger;
        }

        scrn.updateSlider(aven.getAvenger(aven.curentAvenger-1));
        console.log(aven.get);
    }
    goForward(aven,scrn)
    {
        if(aven.curentAvenger<aven.MaxAvenger)
        {
            aven.curentAvenger++;
        }
        else{
            aven.curentAvenger=0;
        }

        scrn.updateSlider(aven.getAvenger(aven.curentAvenger-1));
        console.log(aven.get);
        console.log(aven);
    }
    
    
    play()//get's info from database and updats slider
    {

      // let index=1;// skip hulk as it's already playing at startup
      let index=1;
      
    }
}

export default Slider;