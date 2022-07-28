import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Plan = {
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

// Trading plan 
// Formula: 
// deposit, goal, periodDays, riskManagment = 5%
// Deposit * riskManagment / 100 = One trade dial
// Goal / periodDays = Needed money per day to achieve goal
// ===========================================================
//  Deposit = 230$
//  Goal = 100$
//  PeriodDays = 30
//  RiskManagment = 5
//  ----------------------
//  Deposit * RiskManagment / 100 = 11.5 (Maximum one trade dial)
//  Goal / periodDays = 3.33 (Dollar need to earn per day)
//  --- 11.5 * 3.33 / 100 = 0,38 === 38% (Needed PNL)

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