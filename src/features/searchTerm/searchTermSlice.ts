const initialSearchTerm: Array<any> = [];

export const searchTermReducer = (searchTerm = initialSearchTerm, action: any) => {
    switch(action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload;
        case 'searchTerm/clearSearchTerm':
            return '';
        default:
            return searchTerm;
    }
}

export function setSearchTerm(term: string) {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}

export function clearSearchTerm() {
    return {
        type: 'searchTerm/ClearSearchTerm',
    }
}