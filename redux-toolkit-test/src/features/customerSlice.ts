import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CustomerState {
  value: Customer[]
}

export interface Customer {
  id: string
  name: string
  orders: string[]
}

export interface AddOrderPayload {
  id: string
  order: string
}

const initialState:CustomerState = {
  value: []
}

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action:PayloadAction<Customer>) => {
      state.value.push(action.payload)
    },
    addOrder: (state, action:PayloadAction<AddOrderPayload>) => {
      state.value.forEach(customer => {
        if (customer.id === action.payload.id) {
          customer.orders.push(action.payload.order)
        }
      })
    }
  }
})

export const { addCustomer, addOrder } = customersSlice.actions

export default customersSlice.reducer