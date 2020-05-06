import Data from "../DAO/data.js";//import heros
class avengerInstance
{
    curentAvenger;
    MaxAvenger;

    d= new Data();
    constructor()
    {
        this.MaxAvenger=this.d.getTotal();
        this.curentAvenger=1;
    }

    avengerTotal()
    {
        return this.d.getTotalImages
    }
    getAvenger(index)
    {
       // console.log(this.d.getHeroObject(1));
        return this.d.getHeroObject(index);
    }

}
export default avengerInstance;