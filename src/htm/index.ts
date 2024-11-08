import { html } from 'htm/preact';
import { render } from 'preact-render-to-string';

const text = html`
  <div>Hello Word!</div>
`;

// biome-ignore lint/suspicious/noConsoleLog: <explanation>
console.log(render(text));
