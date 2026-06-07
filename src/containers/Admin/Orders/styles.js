import styled from 'styled-components';
import select from 'react-select';

export const Container = styled.div`
  margin: 20px;
`;

export const ProductImage = styled.img`
  height: 80px;
  padding: 12px;
  border-radius: 16px;

  @media (max-width: 768px) {
    height: 60px;
    padding: 6px;
  }
`;

export const SelectStatus = styled(select)`
  width: 240px;
`;


export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0;
  gap: 50px;

  @media (max-width: 768px) {
    overflow-x: auto;
    justify-content: flex-start;
    padding: 0 15px;
    gap: 20px;
  }
`;

export const FilterOption = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${props => props.$isActiveStatus ? props.theme.purple : props.theme.darkGray};
  border-bottom: ${props => props.$isActiveStatus ? `2px solid ${props.theme.purple}` : 'none'};
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 5px;
  white-space: nowrap;
`;
