import React from "react";
import { Card, CardContent, Typography, Box, Avatar} from "@mui/material";
import { WbSunny, Cloud, Opacity, AcUnit, Thunderstorm} from "@mui/icons-material";

const getWeatherIcon = (weatherId) => {
    if (weatherId >= 200 && weatherId < 300) return <Thunderstorm />;
    if (weatherId >= 300 && weatherId < 600) return <Opacity />;
    if (weatherId >= 600 && weatherId < 700) return <AcUnit />;
    if (weatherId >= 700 && weatherId < 800) return <Cloud />;
    return <WbSunny />;
};

const CurrentWeather = ({data, city}) => {
    if (!data) return null;

    return (
        <Card sx={{ mb: 3 }}>
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    Погода в {city} сейчас
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                    <Avatar sx={{ width: 64, height: 64, mr: 2, bgcolor: 'primary.main' }}>
                        {getWeatherIcon(data.weather[0].id)}
                    </Avatar>
                    <Typography variant="h3" component="div">
                        {Math.round(data.temp)}°C
                    </Typography>
                </Box>
                <Typography color={"text.secondary"}>
                    Ощущаеться как: {Math.round(data.feels_like)}°C
                </Typography>
                <Typography color={"text.secondary"}>
                    Влажность: {data.humidity}%
                </Typography>
                <Typography color={"text.secondary"}>
                    Ветер: {Math.round(data.wind_speed)} м/с
                </Typography>
                <Typography color={"text.secondary"}>
                    {data.weather[0].description}
                </Typography>
            </CardContent>
        </Card>
    );
};
export default CurrentWeather;