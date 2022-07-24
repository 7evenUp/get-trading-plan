import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Plan = {
  title: string
  deposit: number
  goal: number
}

export interface PlanState {
  value: Plan | null
}

const initialState: PlanState = {
  value: null
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Plan>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { create } = counterSlice.actions

export default counterSlice.reducer