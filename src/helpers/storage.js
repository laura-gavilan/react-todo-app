/**
 * Recupera un valor del localStorage.
 * @param {string} key Clave con la que se buscará en el localStorage.
 * @returns {*} El valor parseado si existe, o null si no existe o hay error.
 */
const getDataFromStorage = (key) => {
    if (!key || typeof key !== "string") return null;

    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error(`Error al obtener datos de localStorage con la clave "${key}":`, error);
        return null;
    }
};

/**
 * Guarda un valor en el localStorage.
 * @param {string} key Clave con la que se guardará en el localStorage.
 * @param {*} data Puede ser cualquier tipo serializable (objeto, array, etc.).
 */
const saveDataInStorage = (key, data) => {
    if (!key || typeof key !== "string") return;

    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error(`Error al guardar datos en localStorage con la clave "${key}":`, error);
    }
};

/**
 * Elimina un valor del localStorage.
 * @param {string} key Clave que se desea eliminar del localStorage.
 */
const removeDataFromStorage = (key) => {
    if (!key || typeof key !== "string") return;

    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error al eliminar datos de localStorage con la clave "${key}":`, error);
    }
};

/**
 * Limpia por completo el localStorage.
 */
const clearAllStorage = () => {
    try {
        localStorage.clear();
    } catch (error) {
        console.error("Error al limpiar todo el localStorage:", error);
    }
};

export const storage = {
    get: getDataFromStorage,
    save: saveDataInStorage,
    remove: removeDataFromStorage,
    clear: clearAllStorage,
};
