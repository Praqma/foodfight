import {applePotato} from './allFood'
export const applePotatoState = {
    foodstuff:{
        allFood: applePotato.allFood
    },
    storage: [{name:'Counter', id: 1}, {name:'Fridge', id:2}]
}

export const initialState = {
    foodstuff:{
        allFood: []
    },
    storage: []

}