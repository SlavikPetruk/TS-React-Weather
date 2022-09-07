import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { Weather } from "./types"


type CurrentWeather = {
    weather: Weather;
    isLoading: boolean;
    response: Response;
}
type Response = {
    status: number;
    message: string;
}
const initialState: CurrentWeather = {
    weather: {
        main: {
            "temp": 0,
            "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "pressure": 0,
            "humidity": 0
        },
        wind: {
          "speed": 0,
          "deg": 0
        },
        sys: {
          "type": 0,
          "id": 0,
          "message": 0,
          "country": '',
          "sunrise": 0,
          "sunset": 0
        },
        dt: 0,
        name: '',
    
        // current: {
        //     dt: 0,
        //     sunrise: 0,
        //     sunset: 0,
        //     temp: 0,
        //     feels_like: 0,
        //     pressure: 0,
        //     humidity: 0,
        //     dew_point: 0,
        //     uvi: 0,
        //     clouds: 0,
        //     visibility: 0,
        //     wind_speed: 0,
        //     wind_deg: 0,
        // },
    },
    isLoading: false,
    response: {
      status: 0,
      message: '',
    },
  };

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {

        fetchCurrentWeather(state) {
            state.isLoading = true
        },

        fetchCurrentWeatherSuccess(
            state,
            action: PayloadAction<AxiosResponse<Weather>>) {
                state.isLoading = false
                state.weather = action.payload.data
                state.response = {
                    status: action.payload.status,
                    message: action.payload.statusText,
                }
        },

        fetchCurrentWeatherError(
            state,
            action: PayloadAction<AxiosResponse<Weather>>) {
                state.isLoading = false
                state.response = {
                    status: action.payload.status,
                    message: action.payload.statusText,
                }
        },
    }
})


export default currentWeatherSlice.reducer