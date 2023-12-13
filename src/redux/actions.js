export const LANGUAGECHANGE = "languageChange"

export function languageChange(language){
    return {type: LANGUAGECHANGE, payload: language}
}
