export default class Popup {
  constructor() {
    this._popup = document.querySelector('.popup');
    this._buttonSubmit = this._popup.querySelector('.form-popup__btn');
  }

  open() {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if(evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListener() {
    this._popup.addEventListener('mousedown', (evt) => {
      if(evt.target.classList.contains('popup_active')) {
        this.close();
      }
      if(evt.target.classList.contains('popup__close-btn')) {
        this.close();
      }
    })
  }
}