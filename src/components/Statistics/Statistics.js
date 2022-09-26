import PropTypes from 'prop-types';
import { 
  StatisticsContainer,
  Title,
  StatList,
  Item,
  Label,
  Percentage
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({stats}) => {
  return (
    <StatisticsContainer>
      <Title>Upload stats</Title>
      <StatList>
        {stats.map((el) => (
          <Item key={el.id}>
            <Label>{el.label}</Label>
            <Percentage>{el.percentage}%</Percentage>
          </Item>
        ))
      }
      </StatList>
    </StatisticsContainer>
  );
}; 

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
