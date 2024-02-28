import * as React from 'react';
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
            <TableCell>Section Heading</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur voluptatum laborum numquam
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur voluptatum laborum numquam
            </TableCell>
            <TableCell align="right">
              <Stack spacing={1} direction="row" justifyContent="flex-end">
                <Button variant="outlined" color="warning">
                  Edit
                </Button>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </Stack>
            </TableCell>
          </TableRow>
          <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur voluptatum laborum numquam
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur voluptatum laborum numquam
            </TableCell>
            <TableCell align="right">
              <Stack spacing={1} direction="row" justifyContent="flex-end">
                <Button variant="outlined" color="warning">
                  Edit
                </Button>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </Stack>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
