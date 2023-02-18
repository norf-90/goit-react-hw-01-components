import PropTypes from 'prop-types';
import {
  StatisticsCard,
  Title,
  StatsList,
  StatsItem,
  StatLabel,
  StatValue,
} from './Statistics.styled';
import { getRandomHexColor } from 'utils/getRandomColor';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem
              key={id}
              percentage={percentage}
              color={getRandomHexColor()}
            >
              <StatLabel>{label} </StatLabel>
              <StatValue percentage={percentage}>{percentage}%</StatValue>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatisticsCard>
  );
};

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default Statistics;
