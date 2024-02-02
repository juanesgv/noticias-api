import React from 'react'
import { Grid, Typography, Pagination, Stack } from '@mui/material';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';

const ListadoNoticias = () => {

    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()
    const totalPaginas = Math.ceil(totalNoticias / 20) //redondea hacia arriba

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
            <Stack
                spacing={2}
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    marginTop: 5,
                    marginBottom: 5
                }}
            >
                <Pagination
                    count={totalPaginas}
                    color='primary'
                    onChange={handleChangePagina}
                    page={pagina}
                />
            </Stack>
        </>
    )
}

export default ListadoNoticias
