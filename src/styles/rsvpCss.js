import styled from 'styled-components';

export const SmallDivider = styled.img`
  display: block;
  height: 50px;
  width: 200px;
  margin: 0 auto 30px;
`;

export const Error = styled.small.attrs({ className: 'codeError' })`
  display: block;
  color: red;
`;
