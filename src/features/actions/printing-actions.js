import { REMOVE_PRINTING_PROPERTIES, SAVE_PRINTING_PROPERTIES } from "../types/printing-types"

export const savePrintingProperties = (name, value) => (dispatch) => {
    dispatch({ 
        type: SAVE_PRINTING_PROPERTIES, 
        payload: {
            name: name,
            value: value
        } 
    })
}

export const removePrintingProperties = () => (dispatch) => {
    dispatch({ type: REMOVE_PRINTING_PROPERTIES })
}