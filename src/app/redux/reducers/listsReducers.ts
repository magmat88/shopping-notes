// import {
//     ADD_LIST,
//     ADD_PRODUCT_TO_SHOPPING_LIST,
//     CUSTOMIZE_LIST,
//     TOGGLE_LIST
// } from '../actionTypes/listsActionTypes';

// const initialState = {
//     allIds: [],
//     byIds: {}
// };

// export default function listsReducer (state = initialState, action) {
//     switch (action.type) {
//         case ADD_LIST: {
//             const { id, listContent } = action.payload;
//             return {
//                 ...state,
//                 allIds: [...state.allIds, id],
//                 byIds: {
//                     ...state.byIds,
//                     [id]: {
//                         listContent
//                     }
//                 }
//             };
//         }
//         case ADD_PRODUCT_TO_SHOPPING_LIST: {
//             const { product } = action.payload;
//             return {
//                 //
//             };
//         }
//         case CUSTOMIZE_LIST: {
//             const { id, color, pictures, title } = action.payload;
//             return {
//                 //
//             };
//         }
//         case TOGGLE_LIST: {
//             const { id } = action.payload;
//             return {
//                 ...state,
//                 byIds: {
//                     ...state.byIds,
//                     [id]: {
//                         ...state.byIds[id]
//                     }
//                 }
//             };
//         }
//         default:
//             return state;
//     }
// }
export {}