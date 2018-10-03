import React from 'react'
import Section from '../Section'
import ImageCarousel from '../ImageCarousel'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core'

let id = 0
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Ribshack', 159, 6.0, 24),
  createData('Lounge Lizard', 237, 9.0, 37),
  createData('Nlos', 262, 16.0, 24),
  createData('Homework', 305, 3.7, 67),
  createData('Mulligans Overtime', 356, 16.0, 49),
];

export default ({ title }) => (
  <React.Fragment>
    <Section title={title}>
      <Paper style={{ width: 350, overflowX: 'auto' }}>
        <Table style={{ minWidth: 200 }}>
          <TableHead>
            <TableRow>
              <TableCell>Outlet Name</TableCell>
              <TableCell numeric>Volume (monthly)</TableCell>
              <TableCell numeric>Smoker Contacts</TableCell>
              <TableCell numeric>Unique Trialists</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.calories}</TableCell>
                  <TableCell numeric>{row.fat}</TableCell>
                  <TableCell numeric>{row.carbs}</TableCell>
                  <TableCell numeric>{row.protein}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </Section>
  </React.Fragment>
)