import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";


createSlice({
    name : "userSlice",
    initialState : {
        name : null,
        address : null
    },
    reducers : {
        // state = current state or mathi ko initialState ma define gareko state
        // action = action that is dispatched or triggered garda aaune data
        setName(state, action){
            // logic to set name
            state.name = "hema"
        },
        setAddress(){
            // logic to set address
            state.address = "mahendranagar"
        }
    }
})



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