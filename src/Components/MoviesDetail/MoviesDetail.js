import moment from "moment/moment";
import React from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { setMovieDetails } from "../store/actions";

// const showModal = false;

function MoviesDetail(props) {

  const { movie, showModal } = props;

  const dispatch = useDispatch()
  

  const handleCloseModal = () => {
    dispatch(setMovieDetails(null))
  }

  return (
    <MoviesDetailModal>
      <div
        className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
        onClick={handleCloseModal}
        ></div>

      <div
        className={`modal ${showModal ? "showModal" : "hideModal"}`}
        style={
          movie ? {
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path })`,
            backgroundSize: "cover",
          } : {}
        }
      >

        <div className="container">
          <div className="movieInfo">
            <h1 className="movieTitle">{movie && (movie.title || movie.name)}</h1>
            <p className="statistical">
              <span className="ranking">{movie && movie.vote_average*10}%</span>
              <span className="popularity">Popularity : {movie && movie.popularity}</span>
            </p>

            <p className="releaseDate">
              Release Date :{movie && (moment(movie.release_date).format('DD/MM/YYYY'))} || {movie && (moment(movie.first_air_date).format('DD/MM/YYYY'))}
              </p>

            <p className="runtime">Runtime : {movie && (movie.runtime || movie.episode_run_time)}</p>

            <p className="overview">
              {movie && (movie.overview )}
            </p>
          </div>
        </div>
      </div>
      
    </MoviesDetailModal>
  );
}
export default MoviesDetail;

const fadeIn = keyframes`
  0% { background: rgba(0, 0, 0, 0);}
  100% { background: rgba(0, 0, 0, 0.6); }
`;
const MoviesDetailModal = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.6);
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
  }
  .showBackdrop {
    display: block;
  }
  .hideBackdrop {
    display: none;
  }

  .modal {
    position: fixed;
    visibility: hidden;
    top: 25%;
    left: 0;
    z-index: 500;
    width: 100%;
    height: 60%;
    margin: 0 auto;
    color: #fff;
    opacity: 0;
    box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);
    transition: all 0.3s;

    @media only screen and (max-width: 1184px) {
      height: 70%;
    }
    @media only screen and (max-width: 600px) {
      height: 80%;
    }

    .container {
      position: relative;
      width: 70%;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 60%, transparent);

      @media only screen and (max-width: 1184px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.95) 40%,
          rgba(0, 0, 0, 0.733),
          transparent
        );
        width: 88%;
      }
      @media only screen and (max-width: 980px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.95) 50%,
          transparent
        );
        width: 100%;
      }
      @media only screen and (max-width: 600px) {
        margin-top: 10px;
        margin-left: 10px;
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.88) 60%,
          transparent
        );
      }

      .movieInfo {
        width: 65%;
        height: 100%;
        padding-left: 24px;
        color: #fff;
        font-size: 20px;
        padding-top: 30px;
        @media only screen and (max-width: 600px) {
          font-size: 16px;
          width: 80%;
        }
        .title {
          margin-top: 30px;
        }
        .statistical {
          margin-top: 20px;
          display: flex;
          .rating {
            color: var(--color-green-modal);
          }
          .popularity {
            margin-left: 12px;
            color: yellow;
          }
        }
        .releaseDate,
        .runtime,
        .episode {
          margin-top: 12px;
        }
        .overview {
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
          font-size: 18px;
          @media only screen and (max-width: 600px) {
            font-size: 14px;
          }
        }
      }
      .closeBtn {
        position: absolute;
        top: 10px;
        left: 16px;
        width: 30px;
        height: 30px;
        padding: 2px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.6);
        color: rgba(255, 255, 255, 0.6);
        transform: scale(1);
        transition: all 0.3s ease;
        &:hover {
          transform: scale(1.1);
          color: rgba(255, 255, 255, 0.95);
          background-color: rgba(255, 255, 255, 0.4);
        }
      }
    }
  }
  .showModal {
    top: 25%;
    opacity: 1;
    left: 0;
    visibility: visible;
    transition: 0.3s ease-out;
  }
  .hideModal {
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-out;
  }
`;
