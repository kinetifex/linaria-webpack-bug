import React from 'react';
import { styled } from '@linaria/react';
import { device, size } from './breakpoints';

// If declared without an import, webpack bundles fine...
// const deviceTablet = `(min-width: 768px)`;

const Description = styled.p`
  background-color: orange;
 
  @media ${ device.tablet } {    
    background-color: blue;
  }
`;

export default function MyComponent(props) {
  return <div>
    <h1>Title</h1>
    <Description>This the description</Description>
  </div>;
}
