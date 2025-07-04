import { createSlice } from "@reduxjs/toolkit";
import { IUserInitialState } from "./types";

const userInitialState : IUserInitialState = {
    name: null,
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
const { setName, setAddress } = userSlice.actions
export default userSlice.reducer
export { setName, setAddress }


dispatch(setName("hema"))
dispatch(setAddress("mahendranagar"))
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