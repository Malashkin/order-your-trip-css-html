import React from "react";
import cardHeader_img from "./../../images/sankt-peterburg-piter-st-3495.jpg";
import icon_clock from "./../../images/icon_clock.svg";
import icon_pointer from "./../../images/icon_pointer.svg";

export default function Item() {
  return (
    <>
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
          <ul className="item__scheldure">
            <li className="item__scheldure-item">12:00</li>
            <li className="item__scheldure-item">13:00</li>
            <li className="item__scheldure-item">14:00</li>
            <li className="item__scheldure-item">15:00</li>
          </ul>
          <div className="item__footer">
            <div className="item__price">
              <p className="item__price-promotion">900 &#8381;</p>
              <p className="item__price-total">1200 на причале</p>
            </div>
            <button className="item__button" type="button">
              Подробнее
            </button>
          </div>
        </div>
      </li>

      {/* MIDDLE */}
      <li className="item">
        <div className="item__header">
          <img
            className="item__header-image"
            src={cardHeader_img}
            alt="Обложка"
          ></img>
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
            <li className="item__scheldure-item">12:00</li>
            <li className="item__scheldure-item">13:00</li>
            <li className="item__scheldure-item">14:00</li>
            <li className="item__scheldure-item">15:00</li>
          </ul>
          <div className="item__footer">
            <div className="item__price">
              <p className="item__price-promotion">2900 &#8381;</p>
              <p className="item__price-total">1200 на причале</p>
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
