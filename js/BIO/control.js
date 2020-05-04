import Data from "../DAO/data.js";
import Slider from "../UIO/slider.js"; // we only use the information here to send data to screen from DAO


// const Control =
// {
//     //this is where i'd get data from database and past it to the screen to update
//     // this layer handle the calculations for the app and business logic ie how it functions
//     index:1,
//     slide:new Slider,
//     data:new Data,

//     goBack()
//     {
//         //minus 1 from loop
//     },
//     goForward()
//     {
//        // add 1 to loop
//     },
    
    
//     play()//get's info from database and updats slider
//     {
//         setInterval(this.sliderUpdate,5000);
//     },
//     sliderUpdate()
//     {

//         const d=this.data;
//      //   let index=1;// skip hulk as it's already playing at startup
//         let a=this.index;
//         console.log(`${a} infor ${this.index}`);
        
//         console.log(d.getTotalImages());
//         slide.updateSlider(data.getImageData(a));//"1.jpg","A picture of hulk","Hulllk"
//         a++;

//         if(a == data.getTotalImages())
//         {
//             a=0;
//         }
       
//     }
// }
// export default Control;




class Control
{
    //this is where i'd get data from database and past it to the screen to update
    // this layer handle the calculations for the app and business logic ie how it functions
    
    index=1;
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
       // add 1 to index keeping in mind the max length of array
       console.log(this.getIndex());
       return 45;
    }
    
    
    play()//get's info from database and updats slider
    {

        this.goForward();

        const slide=new Slider;
        const data=new Data;
        
       let index=1;// skip hulk as it's already playing at startup
        
        setInterval(function()
        {
            
           slide.updateSlider(data.getImageData(index));//"1.jpg","A picture of hulk","Hulllk"
            index++;

            if(index == data.getTotalImages())
            {
                index=0;
            }
        
        },6000);
        
    }
}

export default Control;