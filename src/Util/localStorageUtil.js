const saveToLocalStorage = (key, value) =>
{
    localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) =>
{
    const storedValue = localStorage.getItem(key);
    if (storedValue)
    {
        return JSON.parse(storedValue);
    }
    return [];
};

const addToLocalStorageArray = (key, item) =>
{
    const currentArray = getFromLocalStorage(key);
    currentArray.push(item);
    saveToLocalStorage(key, currentArray);
};

const removeFromLocalStorageArray = (key, itemId) =>
{
    let currentArray = getFromLocalStorage(key);
    currentArray = currentArray.filter(item => item.id !== itemId);
    saveToLocalStorage(key, currentArray);
};

export { saveToLocalStorage, getFromLocalStorage, addToLocalStorageArray, removeFromLocalStorageArray };