import React from "react";
import { Card, CardContent, Typography, Box, Grid, Avatar } from "@mui/material";
import { WbSunny, Cloud, Opacity, AcUnit, Thunderstorm } from "@mui/icons-material";
import { format } from "date-fns";
import { ru } from 'date-fns/locale';

const getWeatherIcon = (weatherId) => {
    if (weatherId >= 200 && weatherId < 300) return <Thunderstorm />;
    if (weatherId >= 300 && weatherId < 600) return <Opacity />;
    if (weatherId >= 600 && weatherId < 700) return <AcUnit />;
    if (weatherId >= 700 && weatherId < 800) return <Cloud />;
    return <WbSunny />;
};
const FiveDayForecast = ({dailyData}) => {
    if (!dailyData || dailyData.length === 0) return null;

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    Прогноз на 5 дней
                </Typography>
                <Grid container spacing={2}>
                    {dailyData.map((day, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                            <Box textAlign="center">
                                <Typography variant="subtitle1">
                                    {format(new Date (day.dt * 1000), 'EEEE', {locale: ru})}
                                </Typography>
                                <Avatar sx={{ width: 56, height: 56, mx: 'auto', my: 1, bgcolor: 'secondary.main' }}>
                                    {getWeatherIcon(day.weather[0].id)}
                                </Avatar>
                                <Typography variant="h6">
                                    {Math.round(day.temp.day)}°C
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {day.weather[0].description}
                                </Typography>
                                <Typography variant="body2">
                                    Ночью: {Math.round(day.temp.night)}°C
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};
export default FiveDayForecast;