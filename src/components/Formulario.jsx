import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';
import { CATEGORIAS } from '../constants';
import useNoticias from '../hooks/useNoticias';

const Formulario = () => {

    const { categoria, handleChangeCategoria} = useNoticias()

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categoría</InputLabel>
                <Select
                    label='Categoría'
                    onChange={handleChangeCategoria}
                    value={categoria}
                >
                    {CATEGORIAS.map((cat) => (
                        <MenuItem key={cat.value} value={cat.value}>
                            {cat.label}
                        </MenuItem>
                    ))}
                </Select>
                <Box sx={{marginTop: 2}}>
                    <Button
                        fullWidth
                        variant='contained'
                        color='primary'
                    >
                        Buscar noticia
                    </Button>
                </Box>
            </FormControl>
        </form>
    );
};

export default Formulario;
