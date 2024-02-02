import React from 'react'
import { Grid, Typography } from '@mui/material';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';

const ListadoNoticias = () => {

    const { noticias } = useNoticias()
    return (
        <>
            <Typography
                textAlign='center'
                marginY={5}
                variant='h3'
                component='h2'
            >
                Últimas noticias
            </Typography>
            <Grid
                container
                spacing={2}
            >
                {noticias.map(n => (
                    <Noticia
                        key={n.url}
                        noticia={n}
                    />
                ))}
            </Grid>
        </>
    )
}

export default ListadoNoticias
