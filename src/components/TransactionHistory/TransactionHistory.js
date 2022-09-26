import PropTypes from 'prop-types';
import {
    Table,
    Thead,
    HeadCell,
    TableBody,
    TableCell
} from 'components/TransactionHistory/TransactionHistory.styled'

export const TransactionHistory = ({items}) => {
    return (
        <Table>
  <Thead>
    <tr>
      <HeadCell>Type</HeadCell>
      <HeadCell>Amount</HeadCell>
      <HeadCell>Currency</HeadCell>
    </tr>
  </Thead>
  
  <TableBody>
    {items.map(({ id, type, amount, currency}) => (
    <tr key={id}>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </tr>   ))}
    
  </TableBody>
</Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
           id: PropTypes.string.isRequired,
           type: PropTypes.string.isRequired,
           amount: PropTypes.string.isRequired,
           currency: PropTypes.string.isRequired,
        })
    ),
};