class Avenger //fetch information needed 
{

    //properties temporary version of datastructured as seperate arrays. Might change this later on
    name = ['Hulk','Iron Man','Thor','Thanos','Spider Man'];
    picture=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
    title=['A picture of hulk','A picture of Iron Man','A picture of Thor','A picture of Thanos','A picture of Spiderman'];
    
    getImageData(index)
    {
        const data={
            name:this.name[index],
            picture:this.picture[index],
            title:this.title[index]
        }
        return data;// return data object
    }
    getTotalImages()
    {
        return this.name.length;
    }
}

export default Avenger;