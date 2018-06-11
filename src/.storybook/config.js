import { configure } from '@storybook/react';
import 'typeface-roboto'
import './storybook.css'
function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);