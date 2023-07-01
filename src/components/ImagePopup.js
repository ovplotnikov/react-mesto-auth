import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_image ${card ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_image">
        <button
          className="popup__close-button button-opacity-hover"
          type="button"
          onClick={onClose}
        ></button>
        <img src={card?.link} alt={card?.name} className="popup__image" />
        <p className="popup__image-title">{card?.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
