import React from 'react';
import Balloon from './index';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
const stories = storiesOf('Balloon', module);

stories
  .addDecorator(withInfo)
  .addParameters({ info: { inline: true } })
  .add('デフォルト', () => <Balloon>balloon</Balloon>);
