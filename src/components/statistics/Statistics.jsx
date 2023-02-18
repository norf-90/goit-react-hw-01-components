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
    <StatisticsCard className="statistics">
      {title && <Title className="title">{title}</Title>}

      <StatsList className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem
              key={id}
              percentage={percentage}
              color={getRandomHexColor()}
            >
              <StatLabel className="label">{label} </StatLabel>
              <StatValue className percentage={percentage}>
                {percentage}%
              </StatValue>
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
