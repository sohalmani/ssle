// material-ui
// material-ui
import {
  // Button,
  // Checkbox,
  // Divider,
  // FormControlLabel,
  // FormHelperText,
  Grid,
  // Link,
  // IconButton,
  // InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack
  // Typography
} from '@mui/material';
// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <MainCard title="Sample Page Inputs">
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email-login">Email Address</InputLabel>
            <OutlinedInput id="email-login" type="email" value="" name="email" placeholder="Enter email address" fullWidth />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email-login">Email Address</InputLabel>
            <OutlinedInput id="email-login" type="email" value="" name="email" placeholder="Enter email address" fullWidth />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email-login">Email Address</InputLabel>
            <OutlinedInput id="email-login" type="email" value="" name="email" placeholder="Enter email address" fullWidth />
          </Stack>
        </Grid>
      </Grid>
    </form>
  </MainCard>
);

export default SamplePage;
