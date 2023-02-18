import PropTypes from 'prop-types';
import { Table, TableHead, Row, Cell } from './TransactionHistory.styled';
const TransactionHistory = ({ transactions }) => (
  <Table>
    <TableHead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TableHead>

    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <Row key={id}>
          <Cell>{type}</Cell>
          <Cell>{amount}</Cell>
          <Cell>{currency}</Cell>
        </Row>
      ))}
    </tbody>
  </Table>
);

TransactionHistory.protoTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
