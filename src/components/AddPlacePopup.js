import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  // состояние для полей ввода
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  // обновление состояния при изменении полей ввода
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  // Обработчик отправки формы
  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });

    // Сброс значений после отправки
    setName("");
    setLink("");
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        className="popup__input popup__input_value_place"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        id="place-input"
        value={name} // контролируемое свойство value
        onChange={handleNameChange} // обработчик изменения
      />
      <span
        className="popup__error popup__input-error place-input-error"
        id="place-input-error"
      ></span>
      <input
        type="url"
        name="link"
        className="popup__input popup__input_value_link"
        placeholder="Ссылка на картинку"
        required
        id="link-input"
        value={link} // контролируемое свойство value
        onChange={handleLinkChange} // обработчик изменения
      />
      <span
        className="popup__error popup__input-error link-input-error"
        id="link-input-error"
      ></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
