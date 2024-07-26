import React, { useState } from 'react';
import { Button, Box, Typography, Grid } from '@mui/material';
import cad from '../img/cad.png'; 
import nz from '../img/nz.png';
import mex from '../img/mex.png';
import chile from '../img/chile.png';
import arg from '../img/arg.png';
import col from '../img/col.png'; 

const Info = () => {
    const [selected, setSelected] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [ageGroup, setAgeGroup] = useState(null);
    const [summary, setSummary] = useState('');
  
    const handleClick = (buttonType) => {
      setSelected(buttonType);
      setSelectedCountry(null);
      setAgeGroup(null); 
      setSummary('');
    };
  
    const handleCountryClick = (country) => {
      setSelectedCountry(country);
      setAgeGroup(null); 
    };
  
    const handleAgeClick = (age) => {
      setAgeGroup(age);
      const countryNames = ['México', 'Chile', 'Argentina', 'Colombia'];
      const selectedCountryName = countryNames[selectedCountry];
      const destination = selected === 'first' ? 'Canadá' : 'Nueva Zelanda';
      setSummary(`Seleccionaste viajar a ${destination} desde ${selectedCountryName} y tienes ${age}.`);
    };
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      {/* Título del componente */}
      <Typography variant="h3" sx={{ mb: 4 }}>
        ¿Dónde te gustaría viajar?
      </Typography>

      {/* Botones principales */}
      <Grid container spacing={2} sx={{ mb: 2, justifyContent: 'center' }}>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant={selected === 'first' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleClick('first')}
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%', // Ocupa el ancho completo del contenedor
              maxWidth: 300, // Ajusta el ancho máximo según sea necesario
              fontSize: '1.2rem', // Ajusta el tamaño de la fuente según sea necesario
              '& img': {
                width: 50, 
                height: 50, 
                marginRight: 8 
              }
            }}
          >
            <img src={cad} alt="Canadá" />
            Canadá
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant={selected === 'second' ? 'contained' : 'outlined'}
            color="secondary"
            onClick={() => handleClick('second')}
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%', // Ocupa el ancho completo del contenedor
              maxWidth: 300, // Ajusta el ancho máximo según sea necesario
              fontSize: '1.2rem', // Ajusta el tamaño de la fuente según sea necesario
              '& img': {
                width: 50, 
                height: 50, 
                marginRight: 8 
              }
            }}
          >
            <img src={nz} alt="Nueva Zelanda" />
            Nueva Zelanda
          </Button>
        </Grid>
      </Grid>

      {/* Mostrar las imágenes de los países si un botón principal está seleccionado */}
      {selected !== null && (
        <Grid container spacing={2} sx={{ justifyContent: 'center', mb: 4 }}>
          {[mex, chile, arg, col].map((country, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={() => handleCountryClick(index)} sx={{ p: 0 }}>
                <img src={country} alt={`Country ${index + 1}`} style={{ width: '100%', maxWidth: 150, borderRadius: '8px' }} />
              </Button>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Mostrar los botones secundarios si una imagen de país está seleccionada */}
      {selectedCountry !== null && (
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            ¿Cuál es tu edad?
          </Typography>
          <Button 
            variant="outlined" 
            color="primary" 
            sx={{ mr: 2, mb: 1 }} 
            onClick={() => handleAgeClick('Entre 18 a 30 años')}
          >
            Entre 18 a 30 años 
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            sx={{ mb: 1 }} 
            onClick={() => handleAgeClick('Entre 31 a 35 años')}
          >
            Entre 31 a 35 años
          </Button>
        </Box>
      )}

      {/* Mostrar el resumen si todos los datos están seleccionados */}
      {summary && (
        <Typography variant="h6" sx={{ mt: 4 }}>
          {summary}
        </Typography>
      )}
    </Box>
  );
};

export default Info;