import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Box } from "@mui/material";
import CitySelector from "./CitySelector";
import CurrentWeather from "./CurrentWeather";
import FiveDayForecast from "./FiveDayForecast";
import Loader from "./Loader";
// 22a6db760bb0bcd8e79b5dd7e60678a0
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

function App() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (selectedCity) {
            fetchWeatherData(selectedCity.lat, selectedCity.lon);
        }
    }, [selectedCity]);
    const fetchWeatherData = async (lat, lon) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=ru`
            );
            console.log(response.data);
            setWeatherData(response.data);
        } catch (err) {
            setError('Не удалось загрузить данные о погоде. Пожалуйста, попробуйте позже.');
            console.log('Error fetching weather data:', err);
        } finally {
            setLoading(false);
        }
    };
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>

            <Typography variant="h4" component="h1" gutterBottom align={"center"} sx={{ fontWeight: "bold" }}>
                Погодный сервис
            </Typography>

            <CitySelector onSelectCity={setSelectedCity} />

            {loading && <Loader />}

            {error && (<Box sx={{ color: 'error.main', textAlign: 'center', my: 2 }}>
                {error}
            </Box>
            )}

            {weatherData && !loading && (
                <>
                    <CurrentWeather data={weatherData.current} city={selectedCity?.name} />
                    <FiveDayForecast dailyData={weatherData.daily.slice(0, 5)} />
                </>
            )}
        </Container>
    );
}
export default App;