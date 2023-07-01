import React, { useContext } from "react";
import CurrentUserContext from "./contexts/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `elements__like-button ${
    isLiked ? "elements__like-button_active" : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card); // вызываем обработчик из props при клике на лайк
  }

  // обработчик удаления карточки
  function handleDeleteClick() {
    props.onCardDelete(props.card); // вызываем обработчик из props при клике на кнопку удаления
  }

  return (
    <li className="elements__item">
      {isOwn && (
        <button
          className="elements__delete-button button-opacity-hover"
          type="button"
          aria-label="delete picture"
          onClick={handleDeleteClick} // привязываем обработчик клика к кнопке удаления
        ></button>
      )}
      <img
        src={props.card.link}
        alt={props.card.name}
        className="elements__image"
        onClick={handleClick}
      />
      <div className="elements__info">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="like button"
            onClick={handleLikeClick} // обработчик клика по кнопке "лайк"
          ></button>
          <p
            className="elements__like-counter"
            data-likes={props.card.likes.length}
          >
            {props.card.likes.length}
          </p>
        </div>
      </div>
    </li>
  );
}

export default Card;
