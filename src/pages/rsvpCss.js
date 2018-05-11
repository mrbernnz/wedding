import styled from 'styled-components';

export const SmallDivider = styled.img`
  display: block;
  height: 50px;
  width: 200px;
  margin: 0 auto 30px;
`;

export const Input = styled.input.attrs({
  id: 'invitationCode',
  type: 'search',
  name: 'code',
  placeholder: 'e.g. 1a2b3c'
})`
  margin-bottom: 20px;
  width: 100%;
  height: 30px;

  &:focus {
    outline: none;
  }

  &:valid {
    box-shadow: 0 0 5px 1px green;

    & ~ .codeError {
      display: none;
    }
  }

  &:invalid {
    // box-shadow: 0 0 5px 1px red;
  }
`;

export const Error = styled.small.attrs({ className: 'codeError' })`
  display: block;
  color: red;
`;
