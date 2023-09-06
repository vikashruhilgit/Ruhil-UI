import { html, TemplateResult } from 'lit-html';
import '../src/ruhil-ui';

export default {
  title: 'Firstech UI/Component/Loader',
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  count?: string;
  square?: boolean;
  circle?: boolean;
  small?: boolean;
  styleOverrides?: object;
}

const Template: Story<ArgTypes> = ({
  count,
  square,
  circle,
  small,
}: ArgTypes) => {
  const classes = [];
  if (square) classes.push('square');
  if (circle) classes.push('circle');
  if (small) classes.push('small');
  return html` <ft-loader .classes=${classes} .count=${count}></ft-loader> `;
};

const CustomTemplate: Story<ArgTypes> = ({ styleOverrides }: ArgTypes) =>
  html`
    <ft-loader .count=${'5'} .styleOverrides=${styleOverrides}></ft-loader>
  `;

export const Loader = Template.bind({});
Loader.args = {
  count: '3',
  square: false,
  circle: false,
  small: false,
};

export const CustomLoader = CustomTemplate.bind({});
CustomLoader.args = {
  styleOverrides: {
    backgroundColor: 'blue',
    border: '1px solid black',
  },
};
