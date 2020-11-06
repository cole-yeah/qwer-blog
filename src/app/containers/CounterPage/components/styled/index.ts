import styled from 'styled-components/macro';

export const Count = styled.div`
  color: ${p => p.theme.primary};
  padding: 0 15px;
`;

export const Flex = styled.section`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  color: ${p => p.theme.primary};
  text-decoration: none;
  font-size: 14px;
  background-color: #ffffff;
  border-radius: 2px;
  border: 1px solid #666;
`;
