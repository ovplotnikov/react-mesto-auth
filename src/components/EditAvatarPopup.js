import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInputRef = useRef(); // Создание ссылки на элемент ввода

  function handleSubmit(e) {
    e.preventDefault();

    // обновление аватара пользователя
    onUpdateAvatar({
      avatar: avatarInputRef.current.value, // Использование ссылки для доступа к значению элемента ввода
    });
  }

  return (
    <PopupWithForm
      name="change-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        name="link"
        className="popup__input popup__input_value_link"
        placeholder="Ссылка на картинку"
        required
        id="avatar-link-input"
        ref={avatarInputRef} // Установка ссылки на элемент ввода
      />
      <span
        className="popup__error popup__input-error avatar-link-input-error"
        id="avatar-link-input-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
