import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FaArrowAltCircleUp } from "react-icons/fa";
import {
  getActionMovies,
  getComedyMovies,
  getDocumentaries,
  getHorrorMovies,
  getNetflixOriginals,
  getRomanceMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../store/actions";

import MoviesRow from "./MoviesRow";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { useScrollY } from "../Hooks";

// const movies = [
//   "https://m.media-amazon.com/images/I/61Fm+N+NncL._AC_SL1008_.jpg",
//   "https://i.pinimg.com/originals/a9/c7/d3/a9c7d36b3aaee651d8f120257587e27b.jpg",
//   "https://i.pinimg.com/originals/d9/b9/07/d9b9070c855d7c226c9a26a675c93142.jpg",
//   "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289",
//   "http://cdn.shopify.com/s/files/1/0290/5663/0868/products/australianbackpacker999x666_1200x.jpg?v=1618847022",
//   "https://3.bp.blogspot.com/-XU3gtu_wI6g/WpxBFPk1p0I/AAAAAAAACEw/0JoIwjhNmjs-JrTYJddrGaNL2o32M-WEgCLcBGAs/s1600/Screen%2BShot%2B2018-03-04%2Bat%2B18.53.17.png",
//   "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/87108/88101/edge_of_tomorrow_regular_buy_original_movie_posters_at_starstills__48110.1400669257.jpg?c=2",
//   "https://i.pinimg.com/originals/0f/b4/1f/0fb41ff936741bb71415352180b86611.jpg",
//   "https://cdn.shopify.com/s/files/1/0747/3829/products/mL1755_1024x1024.jpg?v=1571445470",
//   "https://i.pinimg.com/originals/6d/6a/6c/6d6a6c1cba5068c1626adedf00db5865.jpg",
//   "https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/tomb-raider-long-neck-691x1024.jpg",
// ];

const ScrollToTop = () => {
  scroll.scrollToTop();
};


function Contents(props) {
  const dispatch = useDispatch();
  const [scrollY] = useScrollY();

  const {
    NetflixOriginals,
    TrendingMovies,
    TopRatedMovies,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
  } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(getNetflixOriginals());
    dispatch(getTrendingMovies());
    dispatch(getTopRatedMovies());
    dispatch(getActionMovies());
    dispatch(getComedyMovies());
    dispatch(getHorrorMovies());
    dispatch(getRomanceMovies());
    dispatch(getDocumentaries());
  }, [dispatch]);

  return (
    <div>
      <MoviesRow
        movies={NetflixOriginals}
        title="Netflix Originals"
        isNetflix={true}
        idSection="netflix"
      />
      <MoviesRow
        movies={TrendingMovies}
        title="Trending Movies"
        idSection="trending"
      />
      <MoviesRow
        movies={TopRatedMovies}
        title="Top Rated Movies"
        idSection="topRated"
      />
      <MoviesRow
        movies={ActionMovies}
        title="Action Movies"
        idSection="actionMovies"
      />
      <MoviesRow
        movies={ComedyMovies}
        title="Comedy Movies"
        idSection="comedyMovies"
      />
      <MoviesRow
        movies={HorrorMovies}
        title="Horror Movies"
        idSection="horrorMovies"
      />
      <MoviesRow
        movies={RomanceMovies}
        title="Romance Movies"
        idSection="romanceMovies"
      />
      <MoviesRow 
        movies={Documentaries}
        title="Documentaries Movies"
        idSection="documentaries"
      />

      <GoToTop
        onClick={() => ScrollToTop()}
        style={{ visibility: `${scrollY > 600 ? "visible" : "hidden"}` }}
      >
        <FaArrowAltCircleUp></FaArrowAltCircleUp>
      </GoToTop>
    </div>
  );
}
export default Contents;

const GoToTop = styled.div`
  position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 50px;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3 linear;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: 600px) {
    right: 40px;
  }
`;
