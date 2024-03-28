import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '@/redux/data/dataSlice'

export const store  = configureStore({
        reducer: {
            dataReducer,
        },
    
})