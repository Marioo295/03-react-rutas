export const helpHttp = () => {
    /* CREACIÓN DEL CUSTON FETCH PARA LAS PETICIONES */
    const customFetch = (endpoint, options) => {
        /* Envío de opciones */
        const defaultHeaders = {
            accept: "application/json",
        };
        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || "GET";
        options.headers = options.headers ? {...defaultHeaders, ...options.headers} : defaultHeaders;

        options.body = JSON.stringify(options.body) || false;
        if (!options.body) {
            delete options.body;
        };

        //console.log(options);

        setTimeout(() => controller.abort(), 3000);
        /* Final de envío de opciones */

        /* Gestión del error personalizado */
        return fetch(endpoint, options)
            .then((res) => res.ok ? res.json():Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrió un error"
                })
            )
            .catch(err => err);
    };

    /* PETICIÓN GET */
    const get = (url, options = {}) => customFetch(url, options);

    /* PETICIÓN POST */
    const post = (url, options = {}) => {
        options.method = "POST";
        return customFetch(url, options);
    };

    /* PETICIÓN PUT */
    const put = (url, options = {}) => {
        options.method = "PUT";
        return customFetch(url, options);
    };

    /* PETICIÓN DELETE */
    const del = (url, options = {}) => {
        options.method = "DELETE";
        return customFetch(url, options);
    };

    return{
        get,
        post, 
        put, 
        del,
    };
};