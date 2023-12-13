import { LANGUAGECHANGE } from "./actions";

const globalState = {
    language: "ES"
}

export default function rootReducer(state = globalState, action) {
    switch (action.type) {
        case LANGUAGECHANGE:
            return {
                ...state,
                language: action.payload
            }
        default: return { ...state }
    }
}