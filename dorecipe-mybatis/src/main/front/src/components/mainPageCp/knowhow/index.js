import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BannerLayout from "../../_common/bannerLayout";

import { SwiperSlide } from "swiper/react";

const KnowhowMain = () => {
  //axios로 노하우 받아와서 출력하기

  const [state, setState] = useState([
    {
        know_num: 0,
        know_title: "",
        know_content: "",
        know_creDate: "",
        know_path: ""
    }]);

    function testAxios() {
        axios({
          url: "/knowhow/list",
          method: "get",
          data: {
            know_num: "test",
            know_title: "test",
            know_content: "test",
            know_creDate: "2022/08/24",
            know_path: "test_path"
          },
          baseURL: "http://localhost:9000",
        }).then(function (response) {
          console.log(response.data);
          // console.log(response.data[0]);
          setState(response.data);
        });
    }

    useEffect(() => {
        testAxios();
    }, []);
  

  return (
    <>
      <BestRecipeWrap>
        <h3>생활 쏙! 노하우</h3>

        <BannerLayout>
          {state.map((e) => {
            return (
              <>
                <SwiperSlide className="slide1">
                  <Link to={`knowhow/detail/${e.know_num}`} className="links">
                    <RecipeWrap key={e}>
                      {/* <RecipeRank>{e.recipe_rank}</RecipeRank>{" "} */}
                      <RecipeImg>
                        <img
                          className="bannerimg"
                          src={e.know_path}
                          alt="bannerimg"
                        ></img>
                      </RecipeImg>
                      <div className="recipe_name">{e.know_title}</div>
                    </RecipeWrap>
                  </Link>
                </SwiperSlide>
              </>
            );
          })}
        </BannerLayout>
      </BestRecipeWrap>
    </>
  );
};
export default KnowhowMain;
const BestRecipeWrap = styled.div`
  width: 80%;
  height: 23em;
  background-color: #fffdf5;
  padding: 1em;

  margin: 3em auto;
  & h3 {
    color: #463635;
    font-weight: 700;
  }
`;

const RecipeWrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 3em 4em;
  text-align: center;
  & > Link {
    text-decoration: none;
  }
`;

const RecipeImg = styled.div`
  & > img {
    // width: 15em;
    width: 300px;
    height 200px;
    padding-bottom: 0.5em;
    object-fit: cover;
  }
`;
