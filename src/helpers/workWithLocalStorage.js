export const writeToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

export const readFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}
