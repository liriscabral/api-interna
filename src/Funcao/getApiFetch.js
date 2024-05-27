export const setFetchListAll = async (url) => {
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    } catch (error) {
        alert("Ops!!! Algo deu errado na sua busca!");
    }
    return "";
}

export const setFetchDeleteById = async (url) =>{
    try {
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    } catch (error) {
        alert("Ops!!! Algo deu errado na sua busca!");
    }
    return "";
}