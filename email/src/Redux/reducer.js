

const initialState={
    
     emailData:[],
     favItems:[],
     body:[],
     
}

const reducer = (state=initialState,{type,payload}) => {
    switch (type) {

        case "EMAILSUCCESS":{ return{ ...state,emailData:payload}}

        case "ADDTOFAV":{ return{ ...state,favItems:[...state.favItems,payload]}}

        case "ADDTOBODY":{ return{ ...state,body:payload}}

        case "REMOVETOBODY":{ return{ ...state,body:[]}}


       
        default: {return state}
            
    }
}

export default reducer