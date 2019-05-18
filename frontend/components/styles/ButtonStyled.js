import styled from 'styled-components';

const ButtonStyled = styled.button`
  margin: 2rem auto 0rem auto;
  width: 25%;
  height: 40px;
  background-color: ${props => props.theme.red};
  border: 1px solid ${props => props.theme.red};
  color: white;
  font-size: 1.25rem;
`;

export default ButtonStyled;