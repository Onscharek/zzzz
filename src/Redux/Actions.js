// src/actions/index.js
export const setWTops = (wTops) => ({
    type: 'SET_WTOPS',
    payload: wTops,
});

export const setSelectedProduct = (product) => ({
    type: 'SET_SELECTED_PRODUCT',
    payload: product,
});

export const setDressesData = (dresses) => ({
    type: 'SET_DRESSES_DATA', 
    payload: dresses,
});


export const setShortsData = (shorts) => ({
    type: 'SET_Shorts_DATA', 
    payload: shorts,
});

export const setWomenspantsData = (womenspants) => ({
    type: 'SET_WOMENSPANTS_DATA',
    payload: womenspants,
});


export const setMenspantsData  = (menspants) => ({
    type: 'SET_MENSPANTS_DATA', 
    payload: menspants,
});


export const setMensshirtsData  = (mensshirts) => ({
    type: 'SET_MENSSHIRTS_DATA', 
    payload: mensshirts,
});



export const setMensshortsData  = (mensshorts) => ({
    type: 'SET_MENSSHORTS_DATA', 
    payload: mensshorts,
});