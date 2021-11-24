const INITIAL_STATE = {
    slateLevelData: {}
};

const INITIAL_ACTION = {
    type: '',
    payload: {}
}
export default function (state = INITIAL_STATE, action = INITIAL_ACTION) {
    switch (action.type) {
        case 'FETCH_SLATE_DATA':
            return {
                ...state,
                slateLevelData: action.payload
            };
        default:
            return state;
    }
}
