// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/redux/store';

// // const newList = {
// //     title: 'list 1',
// //     color: 'red',
// //     icon: 'basket',
// //     index: state.addedLists.length
// // }
// type List = {
//     title: string;
//     color: string;
//     icon: string;
//     index: number;
// };

// interface ListsState {
//     addedLists: Array<List>;
// }

// // const initialState: ListsState = {
// //     addedLists: []
// // };
// const initialState = {
//     addedLists: []
// } as ListsState;

// export const listsSlice = createSlice({
//     name: 'lists',
//     initialState,
//     reducers: {
//         addList: (state, action: PayloadAction<List>): any => {
//             console.log('add new list');
//             return [...state.addedLists, action.payload];
//         },
//         removeList: (state, indexToRemove: number): any => {
//             console.log('remove list');
//             return [
//                 ...state.addedLists.slice(0, indexToRemove),
//                 ...state.addedLists.slice(
//                     indexToRemove + 1,
//                     state.addedLists.length
//                 )
//             ];
//         },
//         editList: (
//             state: ListsState,
//             action: PayloadAction<[List, number]>
//         ): any => {
//             const [editedList, indexToEdit] = action.payload;
//             console.log('edit list', action);
//             return [
//                 ...state.addedLists.slice(0, indexToEdit),
//                 editedList,
//                 ...state.addedLists.slice(
//                     indexToEdit + 1,
//                     state.addedLists.length
//                 )
//             ];
//         }
//     }
// });

// export const { addList, removeList, editList } = listsSlice.actions;

// export const selectList = (state: RootState) => state.lists.addedLists;

// export default listsSlice.reducer;

const initialAllLists: Array<any> = [];
export const allListsReducer = (allLists = initialAllLists, action: any) => {
    switch(action.type) {
        case 'allLists/addList':
            return [...allLists, action.payload];
        case 'allLists/removeList':
            return allLists.filter(list => {
                return list.id !== action.payload.id
            });
        case 'allLists/loadData':
            return action.payload;
        default:
            return allLists;
    }
}