import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {
  return (
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
            <TableCell>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur voluptatum laborum numquam
            </TableCell>
            <TableCell>DEC 2023</TableCell>
            <TableCell align="right">
              <Stack spacing={1} direction="row" justifyContent="flex-end">
                <Link to="edit">
                  <Button variant="outlined" color="warning">
                    Edit
                  </Button>
                </Link>
              </Stack>
            </TableCell>
          </TableRow>
          <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Crime
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur voluptatum laborum numquam
            </TableCell>
            <TableCell>JUN 2023</TableCell>
            <TableCell align="right">
              <Stack spacing={1} direction="row" justifyContent="flex-end">
                <Link to="edit">
                  <Button variant="outlined" color="warning">
                    Edit
                  </Button>
                </Link>
              </Stack>
            </TableCell>
          </TableRow>
          <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Arrest
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur voluptatum laborum numquam
            </TableCell>
            <TableCell>DEC 2023</TableCell>
            <TableCell align="right">
              <Stack spacing={1} direction="row" justifyContent="flex-end">
                <Link to="edit">
                  <Button variant="outlined" color="warning">
                    Edit
                  </Button>
                </Link>
              </Stack>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
