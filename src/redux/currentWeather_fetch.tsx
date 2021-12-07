import { WeatherService } from "./currentWeather_service";
import { currentWeatherSlice } from "./currentWeather_slice";
import { AppDispatch } from "./store";

export const fetchCurrentWeather =
     (payload: string) => async(dispach: AppDispatch) => {
    
    try {
        
        dispach(currentWeatherSlice.actions.fetchCurrentWeather())
        const res = await WeatherService.getCurrentWeather(payload)

        if (res.status === 200) {
            dispach(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
        } else {
            dispach(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
        }

    } catch (error) {
             console.log(error)
        }
}