export const setfilter=(value)=>async dispatch=>{
    dispatch({
        type:"SETFILTER",
        payload:value
    })
}

export const resetfilter=()=>async dispatch=>{
    dispatch({
        type:"RESETFILTER"
    })
}

export const addorder=(id,name,prize,url)=>async dispatch=>{
    dispatch({
        type:"ADDORDER",
        payload:{
            id:id,
            name:name,
            prize:prize,
            url:url
        }
    })
}