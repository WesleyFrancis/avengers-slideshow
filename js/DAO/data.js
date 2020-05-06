class Heros //fetch information needed 
{
    //an object literal containg an array of heros and their properties(simulated database)
    hero=[
        {
            namme:'Hulk',
            picture:'1.jpg',
            title:'A picture of hulk',
        },
        {
            namme:'Iron Man',
            picture:'2.jpg',
            title:'A picture of Iron Man',
        },
        {
            namme:'Thor',
            picture:'3.jpg',
            title:'A picture of Thor',
        },
        {
            namme:'Thanos',
            picture:'4.jpg',
            title:'A picture of Thanos',
        },
        {
            namme:'Spider Man',
            picture:'5.jpg',
            title:'A picture of Spiderman',
        }

    ];

    getHeroObject(index)//get the object based on the index provided
    {
        return this.hero[index];// return data object
    }
    getTotal()
    {
        return this.hero.length;
    }
}

export default Heros;