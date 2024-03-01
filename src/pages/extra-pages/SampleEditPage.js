// import { useState } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import {
  // Box,
  Button,
  // Checkbox,
  // Divider,
  // FormControl,
  // FormControlLabel,
  // FormHelperText,
  Grid,
  // Link,
  // IconButton,
  // InputAdornment,
  InputLabel,
  // MenuItem,
  OutlinedInput,
  // Select,
  Stack
  // Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const { heading, comment, month, year } = useSelector((state) => state.menu.tableData);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard title="">
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="section-heading">Section Heading</InputLabel>
                  <OutlinedInput
                    id="section-heading"
                    type="text"
                    value={heading}
                    name="section-heading"
                    placeholder="Enter Section Heading"
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="comments">Comments</InputLabel>
                  <OutlinedInput
                    id="comments"
                    type="text"
                    value={comment}
                    name="comments"
                    placeholder="Enter Comments"
                    multiline="true"
                    minRows={2}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="year">Year</InputLabel>
                  <OutlinedInput id="year" type="text" value={month} name="year" placeholder="Enter Year" />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="month">Month</InputLabel>
                  <OutlinedInput id="month" type="text" value={year} name="month" placeholder="Enter Month" />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1} direction="row" justifyContent="flex-end">
                  <Button variant="contained" color="success">
                    Save
                  </Button>
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
