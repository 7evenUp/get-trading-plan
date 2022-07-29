import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Plan = {
  title: string
  deposit: number
  goal: number,
  periodString: 'month' | 'three-months' | 'half-a-year' | 'year'
  periodDays: 30 | 90 | 180 | 360
  riskManagment: number
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
    deletePlan: (state) => {
      state.value = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { create, deletePlan } = planSlice.actions

export default planSlice.reducer