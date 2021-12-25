export type Weather = {
    main: {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number
    },
    wind: {
      "speed": number,
      "deg": number
    },
    sys: {
      "type": number,
      "id": number,
      "message": number,
      "country": string,
      "sunrise": number,
      "sunset": number
    },
    dt: number,
}

export type WeatherDays = {
  daily: {
      "dt": number,
      "sunrise": number,
      "sunset": number,
      "moonrise": number,
      "moonset": number,
      "moon_phase": number,
      "temp": {
        "day": number,
        "min": number,
        "max": number,
        "night": number,
        "eve": number,
        "morn": number
      },
      "feels_like": {
        "day": number,
        "night": number,
        "eve": number,
        "morn": number
      },
      "pressure": number,
      "humidity": number,
      "dew_point": number,
      "wind_speed": number,
      "wind_deg": number,

    }
  }
 
