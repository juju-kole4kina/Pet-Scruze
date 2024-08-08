import {
  buttons
} from './utils/constans.js';
import Popup from '../components/popup/popup.js';

const popup = new Popup();

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    popup.open();
  });
});

popup.setEventListener();