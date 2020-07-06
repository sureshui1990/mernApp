import { SAVE_COMMENT } from 'actions/type';

export default (state = [], action) => {

    switch(action.payload){

        case SAVE_COMMENT:
            return [...state, action.payload];

        default:
            return state;
    }
}