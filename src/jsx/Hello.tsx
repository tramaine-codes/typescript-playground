import { h } from 'preact';

export const Hello = (props: { firstName: string; lastName: string }) => (
  <div>
    Hello, {props.firstName} {props.lastName}!
  </div>
);
