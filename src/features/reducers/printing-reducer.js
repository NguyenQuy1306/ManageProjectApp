import { REMOVE_PRINTING_PROPERTIES, SAVE_PRINTING_PROPERTIES } from "../types/printing-types";

const initialState = {
    copies: 1,
    sideOption: 'one-side',
    pageOption: 'all',
    page: '',
    selectedfile: []
}

const printingReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch(type) {
        case SAVE_PRINTING_PROPERTIES: { 
            return { 
                ...state, 
                [payload.name]: payload.value
            }
        }
        case REMOVE_PRINTING_PROPERTIES:
            return initialState
        default: 
            return state;
    }
}

export default printingReducer