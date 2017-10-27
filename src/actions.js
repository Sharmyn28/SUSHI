import store from './store';

export const addDishes = (index) => {
    let oldList = store.getState().shopDishes;
    let meme = store.getState().dishes;
    for(let i in meme){
        if(i==index){
            console.log('entreeee');
            let img = meme[i].image;
            let px = meme[i].price;
            let qq = meme[i].count;

            const newList = oldList.concat({
                /* id: oldList.length, */
                image: img,
                price: px,
                count: qq
            });

            store.setState({
                shopDishes: newList
             });
            console.log(newList);
            console.log(index);
        }
    }
};