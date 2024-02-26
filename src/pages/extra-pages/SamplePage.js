// material-ui
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
import { useState } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const [route, setRoute] = useState('');

  const handleRouteChange = (event) => {
    setRoute(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
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
      </Grid>
    </Grid>
  );
};

export default SamplePage;
