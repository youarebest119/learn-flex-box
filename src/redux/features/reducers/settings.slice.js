import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    position: 'end',
    childrens: [],
    container: {
        display: 'flex',
        flexWrap: 'nowrap',
        width: 0,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        height: 0,
        flexDirection: 'row',
        overflow: 'visible',
    },
}

const settingsPositionSlice = createSlice({
    name: 'settingsPosition',
    initialState,
    reducers: {
        setPosition: (state, { payload }) => {
            state.position = payload;
        },
        addChild: (state, { payload }) => {
            payload.id = state.childrens.length;
            state.childrens.push(payload)
        },
        removeChild: state => {
            state.childrens.pop();
        },
        setContainer: (state, { payload }) => {
            state.container[payload.property] = payload.value;
        },
        resetAll: state => {
            state.position = initialState.position;
            state.childrens = initialState.childrens;
            state.container = initialState.container;
        },
        setChild: (state, action) => {
            state.childrens = state.childrens.map(item => {
                if (action.payload.id === item.id) {
                    if (Number(action.payload.value)) {
                        item[action.payload.property] = Number(action.payload.value);
                    } else {
                        item[action.payload.property] = action.payload.value;
                    }
                }
                return item;
            })
        }
    }
})

export default settingsPositionSlice.reducer;
export const {
    setPosition,
    addChild,
    removeChild,
    setContainer,
    resetAll,
    setChild,
} = settingsPositionSlice.actions;