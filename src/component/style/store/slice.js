import { createSlice} from "@reduxjs/toolkit"
let initalstate = { tandf:false}
let sliceone = createSlice(
    {
        name:"xyz",
        initialState:initalstate,
        reducers:{
            tanfs(state,action) {
               state.tandf = action.payload
            }
        }
    }
)


export let uiaction = sliceone.actions


export default sliceone