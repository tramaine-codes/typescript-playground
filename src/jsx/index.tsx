import { h } from 'preact';
import { render } from 'preact-render-to-string';
import { Hello } from './Hello.js';

// biome-ignore lint/suspicious/noConsoleLog: <explanation>
console.log(render(<Hello firstName="John" lastName="Doe" />));
