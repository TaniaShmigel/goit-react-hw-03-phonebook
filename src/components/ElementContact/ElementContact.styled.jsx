import styled from 'styled-components';

export const ListElem = styled.li`
  width: 350px;
  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const Button = styled.button`
  margin: 0 auto;
  padding: 5px 10px;

  border: 1px solid black;
  border-radius: 4px;
  background-color: transparent;

  :hover,
  :focus {
    background-color: #4369f5;
    color: white;
  }
`;
