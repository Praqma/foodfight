export const getAllFood = store => store.foodstuff;


export const addEmptyFood = storage => {
    let result = {};

    storage && Object.entries(storage).forEach(([key, value]) => {
        result[key] = { ...value, 'food':[]}
    })
    return result;
}

export const getFoodByStorage = store => {
    let result  = addEmptyFood(store.storage)
    let allFood = store.foodstuff.allFood;
    allFood.forEach(food => {
        let storage_id = food.storage_id;
        result[storage_id].food.push(food);
    })
    return result
}