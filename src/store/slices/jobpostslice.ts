import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { jobData } from '../../modules/staticData/jobsData'


const initialState = {jobPositions:jobData}

export const jobPostSlice = createSlice({
  name: 'jobPostSlice',
  initialState,
  reducers: {
    addPosition: (state,action) => {
      // console.log(state.jobPositions,"state")
      const {type,payload} = action
      state.jobPositions.push(action.payload)
    },
    applyToJob : (state,action) => {
      console.log(action,"action")
      // state.jobPositions.find((jobs) => { return jobs.jobId === action.payload.jobId })?.candidateApplied.push(action.payload);
      state.jobPositions =  action.payload
    },
    removePosistion: (state) => {
      // state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { addPosition, removePosistion ,applyToJob} = jobPostSlice.actions

export default jobPostSlice.reducer