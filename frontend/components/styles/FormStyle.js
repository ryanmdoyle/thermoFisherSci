import styled from 'styled-components';

const FormStyle = styled.form`
  label {
    width: 100%;
    display: block;
    margin: 20px 0 5px 0;
    font-weight: 500;
    font-size: 1.1rem;
  }
  input, textarea {
    height: 1.5rem;
    width: 100%;
    padding-left: 0.25rem;
    border: 1px solid #d8d8d8;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    transition: border linear .2s,box-shadow linear .2s;
    font-size: 0.9rem;
  }

  textarea {
    height: 3rem;
  }

  .submit-button {
    margin: 2rem 0.2rem 0rem 0.2rem;
    width: 100%;
    height: 40px;
    background-color: ${props => props.theme.red};
    border: 1px solid ${props => props.theme.red};
    color: white;
    font-size: 1.25rem;
  }
`;

export default FormStyle;