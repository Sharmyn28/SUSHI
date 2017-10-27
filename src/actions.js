import store from './store';

export const addDishes = (index) => {
    let newList = [...store.getState().shopDishes]
    let meme = [...store.getState().dishes]
    for(let i in newList){
        if(newList[i].id==index){
            newList[i].count+=1;
            store.setState({
                shopDishes: newList
             });
             return;
        }
    }
    newList.push({
        id: index,
        image: meme[index].image,
        name: meme[index].name,
        price: meme[index].price,
        count: meme[index].count
    });
    store.setState({
        shopDishes: newList
     });
    console.log('agrega')
}

export const removeDish = (index) =>{
    const oldList = store.getState().shopDishes.filter((item, idx) => idx !== index);

    store.setState({
        shopDishes: oldList
    })
    console.log(oldList);
}
    
export const deleteAll = () => {
    console.log('borrame')
	 store.setState({
		shopDishes: []
	})
}