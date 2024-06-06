// import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import dataCardCatalog from './dataCardCatalog';

const Card = ({ view }) => {
  return (
    <div className="container">
      {view === 'grid' ? (
        <div className="grid-container">
          {dataCardCatalog.map((item) => (
            <div key={item.id} className="card-wrapper">
              <div className="card-img-wrapper">
                <img src={item.img} alt="" className="card-img"/>
              </div>
              <div className="card-info">
                <div className="card-footer-container">
                  <div className="card-info-left">
                    <div className="correct">
                      <div>
                        <span className="bold">{item.day}</span>
                      </div>
                      <div>
                        <img src={item.likeIcon} alt="" />{" "}
                        <span className="bold">{item.quantityLike}</span>
                      </div>
                      <div>
                        <img src={item.iconComment} alt="" />{" "}
                        <span className="bold">{item.quantityComment}</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-info-right">
                    <div className="correct">
                      <div>
                        <span className="bold">{item.date}</span>
                      </div>
                      <div>
                        <img src={item.repeatIconLike} alt="" />{" "}
                        <span className="bold">{item.repeatQuantityLike}</span>
                      </div>
                      <div>
                        <img src={item.repeatIconComment} alt="" />{" "}
                        <span className="bold">{item.repeatQuantityComment}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <span className="bold">{item.onDateDownload}</span>
                <span className="">{item.dateDownload}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="list-container">
          {dataCardCatalog.map((item) => (
            <div key={item.id} className="card-wrapper card-wrapper-list">
              <div className="card-img-wrapper-list">
                <img src={item.img} alt="" className="card-img" width={150} height={150}/>
                <div className="card-info-left bold">
                  <div className="correct">
                    <div>
                      <span className="bold">{item.day}</span>
                    </div>
                    <div className="correct-list">
                      <div>
                        <img src={item.likeIcon} alt="" />{" "}
                        <span className="bold">{item.quantityLike}</span>
                      </div>
                      <div>
                        <img src={item.iconComment} alt="" />{" "}
                        <span className="bold">{item.quantityComment}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-info">
                <div className="card-footer-container">   
                  <div className="card-info-right bold">
                    <div className="correct">
                      <div>
                        <span className="bold">{item.date}</span>
                      </div>
                      <div className="correct-list">
                        <div>
                          <img src={item.repeatIconLike} alt="" />{" "}
                          <span className="bold">{item.repeatQuantityLike}</span>
                        </div>
                        <div>
                          <img src={item.repeatIconComment} alt="" />{" "}
                          <span className="bold">{item.repeatQuantityComment}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>   
              </div>
              <div className="card-footer card-footer-list bold">
                <span className="bold">{item.onDateDownload}</span>
                <span className="bold">{item.dateDownload}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="primary-btn-container">
        <button className="primary-btn">Show more</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  view: PropTypes.string.isRequired,
};

export default Card;