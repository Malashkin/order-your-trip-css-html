import React, { useState } from "react";
import cardHeader_img from "./../../images/sankt-peterburg-piter-st-3495.jpg";
import icon_clock from "./../../images/icon_clock.svg";
import icon_pointer from "./../../images/icon_pointer.svg";

export default function Item() {
  //создаю 2 константы с базами, чтобы обобразить отличающийся рендер
  // элементов с разным количеством вариантов близжайших рейсов
  const scheldureFirst = [
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];
  const scheldureSecond = ["12:00", "13:00", "14:00", "15:00"];
  const [extraScheldureVisibility, setExtraScheldureVisibility] =
    useState(false);
  // Функция управляющая отображением скрытого меню расписания, слушатель клика
  const openExtraScheldure = () => {
    setExtraScheldureVisibility(true);
  };
  const extraScheldureClassName = extraScheldureVisibility
    ? "item__scheldure-extra item__scheldure-extra_visible"
    : "item__scheldure-extra";
  // Функуция для рендера первых 3х элементов расписания и кнопки / 4х элементов расписания
  // при наличии Api расписания можно всё реализовать через метод перебора, тут только
  // отображение возможностей верстки
  const scheldureRender = (list) => {
    if (list.length > 4) {
      return (
        <>
          <ul className="item__scheldure">
            <li key={list[0]} className="item__scheldure-item">
              {list[0]}
            </li>
            <li key={list[1]} className="item__scheldure-item">
              {list[1]}
            </li>
            <li key={list[2]} className="item__scheldure-item">
              {list[2]}
            </li>
            {!extraScheldureVisibility ? (
              <button
                className="item__scheldure-item item__scheldure-button"
                onClick={openExtraScheldure}
              >
                Eщё...
              </button>
            ) : (
              <li key={list[3]} className="item__scheldure-item">
                {list[3]}
              </li>
            )}
          </ul>
        </>
      );
    } else if (list.length <= 4) {
      return (
        <ul className="item__scheldure">
          {list.map((item) => {
            return (
              <li key={item} className="item__scheldure-item">
                {item}
              </li>
            );
          })}
        </ul>
      );
    }
  };
  // Функция отвечает за рендер скрытой части расписания
  const scheldureExtraRender = (list) => {
    if (list.length > 4) {
      return (
        <>
          <li key={list[4]} className="item__scheldure-item">
            {list[4]}
          </li>
          <li key={list[5]} className="item__scheldure-item">
            {list[5]}
          </li>
          <li key={list[6]} className="item__scheldure-item">
            {list[6]}
          </li>
          <li key={list[7]} className="item__scheldure-item">
            {list[7]}
          </li>
        </>
      );
    }
  };
  // 3 элемента на странице с разнымы вариантами цен: 3 цифры, 4 цифры, без цены на причале,
  // чтобы показать, что верстка не ломается
  return (
    <>
      {/* начало 1го элемента */}
      <li className="item">
        <div className="item__header">
          <img
            className="item__header-image"
            src={cardHeader_img}
            alt="Обложка"
          />
          <span className="item__header-span item__header-span_yellow">
            НОВИНКА
          </span>
        </div>
        <div className="item__container">
          <div className="item__duration">
            <img className="item__duration-icon" alt="Часы" src={icon_clock} />
            <p className="item__duration-text">2 часа</p>
          </div>
          <h3 className="item__title">
            АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on
            Hop Off 2022
          </h3>
          <ul className="item__description">
            <li className="item__description-item">
              <img
                className="item__description-item_icon"
                src={icon_pointer}
                alt="✓"
              />
              <p className="item__description-item_text">Билет на целый день</p>
            </li>
            <li className="item__description-item">
              <img
                className="item__description-item_icon"
                src={icon_pointer}
                alt="✓"
              />
              <p className="item__description-item_text">
                Неограниченное число катаний
              </p>
            </li>
            <li className="item__description-item">
              <img
                className="item__description-item_icon"
                src={icon_pointer}
                alt="✓"
              />
              <p className="item__description-item_text">
                6 остановок у главных достопримечательностей
              </p>
            </li>
            <li className="item__description-item">
              <img
                className="item__description-item_icon"
                src={icon_pointer}
                alt="✓"
              />
              <p className="item__description-item_text">
                Ближайший рейс сегодня
              </p>
            </li>
          </ul>
          <ul className="item__scheldure">{scheldureRender(scheldureFirst)}</ul>
          <ul className={extraScheldureClassName}>
            {scheldureExtraRender(scheldureFirst)}
          </ul>
          <div className="item__footer">
            <div className="item__price">
              <p className="item__price-promotion">900 &#8381;</p>
              <p className="item__price-total">1200 &#8381; на причале</p>
            </div>
            <button className="item__button" type="button">
              Подробнее
            </button>
          </div>
        </div>
      </li>
      {/* начало 2го элемента */}
      <li className="item">
        <div className="item__header">
          <img
            className="item__header-image"
            src={cardHeader_img}
            alt="Обложка"
          />
          <span className="item__header-span item__header-span_blue">
            НОВИНКА
          </span>
        </div>
        <div className="item__container">
          <div className="item__duration">
            <img className="item__duration-icon" alt="Часы" src={icon_clock} />
            <p className="item__duration-text">2 часа</p>
          </div>
          <h3 className="item__title">
            АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on
            Hop Off 2022
          </h3>
          <ul className="item__description">
            <li className="item__description-item">
              <img
                className="item__description-item_icon"
                src={icon_pointer}
                alt="✓"
              />
              <p className="item__description-item_text">Билет на целый день</p>
            </li>
            <li className="item__description-item">
              <img
                className="item__description-item_icon"
                src={icon_pointer}
                alt="✓"
              />
              <p className="item__description-item_text">
                Неограниченное число катаний
              </p>
            </li>
            <li className="item__description-item">
              <img
                className="item__description-item_icon"
                src={icon_pointer}
                alt="✓"
              />
              <p className="item__description-item_text">
                6 остановок у главных достопримечательностей
              </p>
            </li>
            <li className="item__description-item">
              <img
                className="item__description-item_icon"
                src={icon_pointer}
                alt="✓"
              />
              <p className="item__description-item_text">
                Ближайший рейс сегодня
              </p>
            </li>
          </ul>
          <ul className="item__scheldure">
            {scheldureRender(scheldureSecond)}
          </ul>
          <ul className={extraScheldureClassName}>
            {scheldureExtraRender(scheldureSecond)}
          </ul>
          <div className="item__footer">
            <div className="item__price">
              <p className="item__price-promotion">2900 &#8381;</p>
              <p className="item__price-total">1200 &#8381; на причале</p>
            </div>
            <button className="item__button" type="button">
              Подробнее
            </button>
          </div>
        </div>
      </li>
      {/* начало 3го элемента */}
      <li className="item">
        <div className="item__header">
          <img
            className="item__header-image"
            src={cardHeader_img}
            alt="Обложка"
          />
          <span className="item__header-span item__header-span_blue">
            НОВИНКА
          </span>
        </div>
        <div className="item__container">
          <div className="item__duration">
            <img className="item__duration-icon" alt="Часы" src={icon_clock} />
            <p className="item__duration-text">2 часа</p>
          </div>
          <h3 className="item__title">
            АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on
            Hop Off 2022
          </h3>
          <ul className="item__description">
            <li className="item__description-item">
              <img
                className="item__description-item_icon"
                src={icon_pointer}
                alt="✓"
              />
              <p className="item__description-item_text">Билет на целый день</p>
            </li>
            <li className="item__description-item">
              <img
                className="item__description-item_icon"
                src={icon_pointer}
                alt="✓"
              />
              <p className="item__description-item_text">
                Неограниченное число катаний
              </p>
            </li>
            <li className="item__description-item">
              <img
                className="item__description-item_icon"
                src={icon_pointer}
                alt="✓"
              />
              <p className="item__description-item_text">
                6 остановок у главных достопримечательностей
              </p>
            </li>
            <li className="item__description-item">
              <img
                className="item__description-item_icon"
                src={icon_pointer}
                alt="✓"
              />
              <p className="item__description-item_text">
                Ближайший рейс сегодня
              </p>
            </li>
          </ul>
          <ul className="item__scheldure">
            {scheldureRender(scheldureSecond)}
          </ul>
          <ul className={extraScheldureClassName}>
            {scheldureExtraRender(scheldureSecond)}
          </ul>
          <div className="item__footer">
            <div className="item__price">
              <p className="item__price-promotion">2900 &#8381;</p>
              <p className="item__price-total"></p>
            </div>
            <button className="item__button" type="button">
              Подробнее
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
