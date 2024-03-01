import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setTableData } from 'store/reducers/menu';

// material-ui
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [year, setYear] = useState(2024);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const [month, setMonth] = useState('DEC');

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleEditClick = (heading, comment, month, year) => {
    const payload = {
      heading,
      comment,
      month,
      year
    };

    dispatch(setTableData(payload));

    navigate('edit');
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack spacing={1} align="right">
          <Stack spacing={1} direction="row" justifyContent="flex-end">
            <a
              href="https://www.figma.com/proto/SIIquflUf9Uzq2uSWcc464/SSLE?type=design&node-id=216-15954&t=MBPMueBVzBhdcfXR-1&scaling=scale-down&page-id=114%3A2955"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outlined">Preview</Button>
            </a>
            <Button variant="contained">Publish</Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <MainCard title="">
          <form>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Stack spacing={1} direction="row">
                  <FormControl sx={{ minWidth: 80 }}>
                    <InputLabel htmlFor="year">Year</InputLabel>
                    <Select id="year" value={year} onChange={handleYearChange} autoWidth placeholder="Year">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={2024}>2024</MenuItem>
                      <MenuItem value={2023}>2023</MenuItem>
                      <MenuItem value={2022}>2022</MenuItem>
                      <MenuItem value={2021}>2021</MenuItem>
                      <MenuItem value={2020}>2020</MenuItem>
                      <MenuItem value={2019}>2019</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ minWidth: 80 }}>
                    <InputLabel htmlFor="month">Month</InputLabel>
                    <Select id="month" value={month} onChange={handleMonthChange} autoWidth placeholder="Month">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'JAN'}>JAN</MenuItem>
                      <MenuItem value={'FEB'}>FEB</MenuItem>
                      <MenuItem value={'MAR'}>MAR</MenuItem>
                      <MenuItem value={'APR'}>APR</MenuItem>
                      <MenuItem value={'MAY'}>MAY</MenuItem>
                      <MenuItem value={'JUN'}>JUN</MenuItem>
                      <MenuItem value={'JUL'}>JUL</MenuItem>
                      <MenuItem value={'AUG'}>AUG</MenuItem>
                      <MenuItem value={'SEP'}>SEP</MenuItem>
                      <MenuItem value={'OCT'}>OCT</MenuItem>
                      <MenuItem value={'NOV'}>NOV</MenuItem>
                      <MenuItem value={'DEC'}>DEC</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack spacing={1} direction="row" justifyContent="flex-end">
                  <OutlinedInput id="search" type="text" value="" name="search" placeholder="Search.." fullWidth />
                  <Button variant="contained">Filter</Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 250 }}>Section Heading</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell sx={{ minWidth: 100 }}>Month & Year</TableCell>
                <TableCell align="right" sx={{ minWidth: 250 }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  Call For Service
                </TableCell>
                <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TableCell>
                <TableCell>DEC 2023</TableCell>
                <TableCell align="right">
                  <Stack spacing={1} direction="row" justifyContent="flex-end">
                    <Button
                      variant="outlined"
                      color="warning"
                      onClick={() =>
                        handleEditClick('Call For Service', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'DEC', '2023')
                      }
                    >
                      Edit
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  Crime
                </TableCell>
                <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TableCell>
                <TableCell>JUN 2023</TableCell>
                <TableCell align="right">
                  <Stack spacing={1} direction="row" justifyContent="flex-end">
                    <Button
                      variant="outlined"
                      color="warning"
                      onClick={() => handleEditClick('Crime', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'JUN', '2023')}
                    >
                      Edit
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  Arrest
                </TableCell>
                <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TableCell>
                <TableCell>DEC 2023</TableCell>
                <TableCell align="right">
                  <Stack spacing={1} direction="row" justifyContent="flex-end">
                    <Button
                      variant="outlined"
                      color="warning"
                      onClick={() => handleEditClick('Arrest', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'DEC', '2023')}
                    >
                      Edit
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default SamplePage;
