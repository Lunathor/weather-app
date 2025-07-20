import React from 'react';
import { Autocomplete, TextField} from "@mui/material";

const cities = [
    { name: 'Москва', lat: 55.7558, lon: 37.6173 },
    { name: 'Санкт-Петербург', lat: 59.9343, lon: 30.3351 },
    { name: 'Новосибирск', lat:55.0084, lon: 82.9357 },
    { name: 'Екатеринбург', lat: 56.8389, lon: 60.6057 },
    { name: 'Казань', lat: 55.7961, lon: 49.1064 },
];
const CitySelector = ({ onSelectCity }) => {
    return (
        <Autocomplete
            options={cities}
            getOptionLabel={(option) => option.name}
            onChange={(event, value) => onSelectCity(value)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Выберете город"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
            )}
        />
    );
};
export default CitySelector;
