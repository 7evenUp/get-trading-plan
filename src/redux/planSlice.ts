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

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Plan>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { create } = planSlice.actions

export default planSlice.reducer