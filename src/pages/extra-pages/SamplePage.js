// import { useState } from 'react';

// material-ui
import {
  // Box,
  Button,
  // Checkbox,
  // Divider,
  FormControl,
  // FormControlLabel,
  // FormHelperText,
  Grid,
  // Link,
  // IconButton,
  // InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack
  // Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import ContentTable from './ContentTable';
import { useState } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  // const [route, setRoute] = useState('');

  // const handleRouteChange = (event) => {
  //   setRoute(event.target.value);
  // };

  const [year, setYear] = useState(2024);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const [month, setMonth] = useState('DEC');

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      {/* <Grid item xs={2}>
        <MainCard>
          <FormControl fullWidth>
            <InputLabel htmlFor="route">Route</InputLabel>
            <Select id="route" value={route} name="route" label="Route" onChange={handleRouteChange}>
              <MenuItem value={'a-line'}>A Line</MenuItem>
              <MenuItem value={'b-line'}>B Line</MenuItem>
              <MenuItem value={'c-line'}>C Line</MenuItem>
            </Select>
          </FormControl>
        </MainCard>
      </Grid>
      <Grid item xs={10}>
        <MainCard title="">
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="blurb">Blurb</InputLabel>
                  <OutlinedInput
                    id="blurb"
                    type="text"
                    value=""
                    name="blurb"
                    placeholder="Enter blurb"
                    multiline="true"
                    minRows={4}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="subtitle">Subtitle</InputLabel>
                  <OutlinedInput
                    id="subtitle"
                    type="text"
                    value=""
                    name="subtitle"
                    placeholder="Enter Subtitle"
                    multiline="true"
                    minRows={2}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="subtitle">Comment</InputLabel>
                  <OutlinedInput
                    id="comment"
                    type="text"
                    value=""
                    name="comment"
                    placeholder="Enter Comment"
                    multiline="true"
                    minRows={2}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1} direction="row" justifyContent="flex-end">
                  <Button variant="outlined">Preview</Button>
                  <Button variant="contained">Publish</Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </MainCard>
      </Grid> */}
      <Grid item xs={12}>
        <Stack spacing={1} align="right">
          <Stack spacing={1} direction="row" justifyContent="flex-end">
            <Button variant="outlined">Preview</Button>
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
        <ContentTable />
      </Grid>
    </Grid>
  );
};

export default SamplePage;
