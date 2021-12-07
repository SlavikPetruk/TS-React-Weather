import { configureStore, combineReducers } from "@reduxjs/toolkit"
import currentWeatherSliceReduser from './currentWeather_slice'

const rootReduser = combineReducers({currentWeatherSliceReduser})

export const store = configureStore({
    reducer: rootReduser,
})

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']