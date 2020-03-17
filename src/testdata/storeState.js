import {applePotato} from './allFood'
import {storage} from './storage'
export const applePotatoState = {
    foodstuff:{
        allFood: applePotato.allFood
    },
    storage: storage
}

export const initialState = {
    foodstuff:{
        allFood: []
    },
    storage: new Map()
}