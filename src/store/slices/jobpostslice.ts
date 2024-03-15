import { createSlice } from '@reduxjs/toolkit'
import { jobData } from '../../modules/staticData/jobsData'


const initialState = {jobPositions:jobData}

export const jobPostSlice = createSlice({
  name: 'jobPostSlice',
  initialState,
  reducers: {
    addPosition: (state,action) => {
      state.jobPositions.push(action.payload)
    },
    applyToJob : (state,action) => {
      console.log(action,"action")
      state.jobPositions =  action.payload
    },
  },
})

export const { addPosition ,applyToJob} = jobPostSlice.actions

export default jobPostSlice.reducer