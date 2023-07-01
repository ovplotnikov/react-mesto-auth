import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "./contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentUser.name && currentUser.about && isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit} // добавляем обработчик события onSubmit
    >
      <input
        type="text"
        name="name"
        className="popup__input popup__input_value_name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        id="name-input"
        value={name}
        onChange={handleNameChange}
      />
      <span
        className="popup__error popup__input-error name-input-error"
        id="name-input-error"
      ></span>
      <input
        type="text"
        name="about"
        className="popup__input popup__input_value_about"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
        id="about-input"
        value={description}
        onChange={handleDescriptionChange}
      />
      <span
        className="popup__error popup__input-error about-input-error"
        id="about-input-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
