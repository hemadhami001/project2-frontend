import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./types";
import API from "../http";


const userInitialState : IUserInitialState = {
    name: "hema",
    address: null
}

const userSlice = createSlice({
    name : "userSlice",
    initialState : userInitialState,
    reducers : {
        // state = current state or mathi ko initialState ma define gareko state
        // action = action that is dispatched or triggered garda aaune data
        setName(state: IUserInitialState, action :PayloadAction<string>) {
            state.name = action.payload
            // logic to set name
            
        },
        setAddress(state: IUserInitialState, action :PayloadAction<string>) {
            // logic to set address
            state
        },
        sethaha(state, action){

        }
    }
})

// reducer ko name j hunchha, action ko name pani same tai huncha
const { setName, setAddress, sethaha } = userSlice.actions
export default userSlice.reducer
export { setName, setAddress, sethaha }



/*
const [name, setName] = useState(null);
const [address, setAddress] = useState(null);

reducers = kunai function through which hami kehi program garna sakchhau









/*
Ecommerce
userSlice.ts
productSlice.ts
paymentSlice.ts
cartSlice.ts
orderSlice.ts


*/

//register user

function registerUser(data) {
    try {
        return async function registerUserThunk() {
       const response = await API.post("/user/register", data)
       if (response.status === 201) {  // user registered successfully
        dispatch(setName(response.data.data.name))
        } else {
         // handle error
         // throw new Error("User registration failed")
        }
    }
    } catch (error) {
        console.log("Error in registerUser:", error);
    }
}

//login user
function loginUser() {
    try {
        return async function loginUserThunk() {
        const response = await API.post("/user/login")
        if (response.status === 200) { // user logged in successfully
            
            
        } else {
            // handle error
        }
    }
    } catch (error) {
       console.log("Error in loginUser:", error);
    }
}

//forgot password
function forgotPassword() {
    try {
        return async function forgotPasswordThunk() {
        const response = await API.post("/user/forgot-password")
        if (response.status === 200) {
            
        } else {
            
    }
    }
    } catch (error) {
        console.log("Error in forgotPassword:", error);
        
    }
}