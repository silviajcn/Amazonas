import React from 'react';
import { FaSearch } from "react-icons/fa";
import { ContainerBuscador, FormContainer, InputSearch, BtnSearch } from '../styles/NavBar.elements';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SearchWords = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    return (
        <div>
            <ContainerBuscador>
                <FormContainer onSubmit={handleSubmit}>
                    
                <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
                
                <InputSearch
                    type="text"
                    aria-label="Search Movies"
                />
                <BtnSearch bg="warning" variant="warning" className="me-5" type="submit"><FaSearch /></BtnSearch>
            </FormContainer>
            </ContainerBuscador>
        </div>
    )
}

export default SearchWords


// Categories
const top100Films = [
  { title: 'Todos los departamentos' },
  { title: 'Arte y artesanías'},
  { title: 'Automotríz' },
  { title: 'Bebé'},
  { title: 'Belleza y cuidado personal' },
  { title: "Computadoras" },
  { title: 'Deportes y actividades al aire libre' },
  { title: 'Electrónicos' },
  { title: 'Equipaje'},
  { title: 'Herramientas y mejoramiento del hogar' },
  { title: 'Hogar y cocina' },
  { title: 'Industrial y científico' },
  { title: 'Insumos para mascotas' },
  { title: 'Juguetes y juegos' },
  { title: 'Libros'},
  { title: 'Moda de niñas' },
  { title: 'Moda de niños' },
  { title: 'Moda para hombre' },
  { title: 'Moda para mujer' },
  { title: 'Movies-tv' },
  { title: 'Música MP3'},
  { title: 'Música, CD y Vinilos' },
  { title: 'Ofertas' },
  { title: 'Prime video' },
  { title: 'Salud y productos para el hogar' },
  { title: 'Software' },
  { title: 'Tienda Kindle'},
  { title: 'Videojuegos' }
];