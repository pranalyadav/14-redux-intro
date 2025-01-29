import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fullName: "",
    nationalID: "",
    createdAt: ""
}

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        createCustomer: {
            prepare(fullName, nationalID) {
                return {
                    payload: { fullName, nationalID, createdAt: new Date().toISOString() }
                }
            },
            reducers(state, action) {
                state.fullName = action.payload.fullName;
                state.nationalID = action.payload.nationalID;
                state.createdAt = action.payload.nationalID
            }
        },

        updateName(state, action) {
            state.fullName = action.payload.fullname;
        }

    }
})

// export default function customerReducer(state = initialStateCustomer, action) {
//     switch (action.type) {
//         case "customer/createCustomer":
//             return {
//                 ...state,
//                 fullName: action.payload.fullName,
//                 nationalID: action.payload.nationalID,
//                 createdAt: action.payload.nationalID
//             }
//         case "customer/updateName":
//             return {
//                 ...state,
//                 fullName: action.payload.fullName
//             }
//         default:
//             return state;
//     }

// }



// export function createCustomer(fullName, nationalID) {
//     return { type: 'customer/createCustomer', payload: { fullName, nationalID, createdAt: new Date().toISOString() } }
// }

// export function updateName(fullName) {
//     return { type: "customer/updateName", payload: fullName }
// }


export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;