import React, { useContext } from "react";
import pencil from "../images/pencil.svg";
import Card from "./Card";
import CurrentUserContext from "./contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser ? currentUser.avatar : ""}
            alt="Аватар"
            className="profile__avatar-image"
          />
          <div className="profile__avatar-overlay" onClick={onEditAvatar}>
            <img
              src={pencil}
              alt="Редактировать аватар"
              className="profile__avatar-edit-icon"
            />
          </div>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">
            {currentUser ? currentUser.name : ""}
          </h1>
          <button
            className="profile__edit-button button-opacity-hover"
            type="button"
            aria-label="edit profile"
            onClick={onEditProfile}
          ></button>
          <p className="profile__about">
            {currentUser ? currentUser.about : ""}
          </p>
        </div>
        <button
          className="profile__add-button button-opacity-hover"
          type="button"
          aria-label="add picture"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
