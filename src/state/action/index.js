export const loginSuccess = (details) => {
    return (dispatch)=>{
        dispatch({
            type: "SUCCESS_LOGIN",
            newstate: details
        })
    }
}
