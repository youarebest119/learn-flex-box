import { setContainer } from "../reducers/settings.slice"

export const updateContainer = (property, value) => {
    return dispatch => {
        dispatch(setContainer({ property, value }))
    }
}