import React from 'react';
import Heading from './index';
import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import styles from './styles.css'
const stories = storiesOf('Heading', module);

stories
  .addDecorator(withInfo)
  .addParameters({ info: { inline: true } })
  .add('デフォルト', () => <Heading>delete</Heading>)
;

