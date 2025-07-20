import React from 'react';
import {Box, CircularProgress} from '@mui/material';

const Loader = () => {
    return (
        <Box display="flex" justifyContent="center" my={4}>
            <CircularProgress />
        </Box>
    );
};
export default Loader;