
const initialState = {
    wTops: [],
    selectedProduct: null,
    dresses: [], 
    shorts :[],
    womenspants :[],
    menspants :[],
    mensshirts :[],
    mensshorts :[],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WTOPS':
            return { ...state, wTops: action.payload };

        case 'SET_DRESSES_DATA':
            return { ...state, dresses: action.payload };

            case 'SET_Shorts_DATA':
                return { ...state, shorts: action.payload };

                case 'SET_WOMENSPANTS_DATA':
                    return { ...state, womenspants: action.payload };

                    case 'SET_MENSPANTS_DATA':
                        return { ...state, menspants: action.payload };
    
                        case 'SET_MENSSHIRTS_DATA':
                            return { ...state, mensshirts: action.payload };
        
                            case 'SET_MENSSHORTS_DATA':
                                return { ...state, mensshorts: action.payload };
    
    

                    case 'SET_SELECTED_PRODUCT':
            return { ...state, selectedProduct: action.payload };

        default:
            return state;
    }
};

export default reducer;

