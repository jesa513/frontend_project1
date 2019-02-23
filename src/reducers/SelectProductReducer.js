import { 
    SELECT_PRODUCT
 } from '../actions/types';
 
 const INITIAL_STATE = { id: 0, productname: '', price: 0, image: '', deskripsi: '', category: ''};
 
 export default (state = INITIAL_STATE, action) => {
     switch(action.type) {
         case SELECT_PRODUCT :
             return action.payload;
         default :
             return state;
     }
 }