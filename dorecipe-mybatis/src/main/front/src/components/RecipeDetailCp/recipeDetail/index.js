import { useCallback, useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { SmallBtn } from "../../_common/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import StepRecipe from "./recipeSteps";
import RecipeIngredients from "./recipeIngredients";
import { useDispatch, useSelector } from "react-redux";

const RecipeDetailModal = () => {
  const search = "/";
  let location = useLocation();
  const lastIndex = location.pathname.lastIndexOf(search);
  const param = location.pathname.substring(lastIndex).replace("/", "");
  console.log(param);


  const params = useParams();
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

  const [loginState, setLoginState] = useState("admin");

  const [detailState, setDetailState] = useState([
    {
      // member_imagePath: "",
      recipe_num: 0,
      recipe_title: "",
      recipe_introduce: "",
      recipe_url: "",
      recipe_rpath: "",
      information_person: "",
      information_time: "",
      information_level: "",
      completion_path1: "",
      completion_path2: "",
      completion_path3: "",
      completion_path4: "",
      completion_tip: "",
      order_num: "",
      order_path: "",
      recipe_creDate: "",
      member_id: "",
    },
  ]);
  const [ingredientState, setIngredientState] = useState([
    {
      recipe_num: param,
      ing_num: 0,
      ing_ingredient: "",
      ing_amount: "",
    },
  ]);
  const [recipe_likes, setRecipeLikes] = useState(0);
  const [heartState, setHeartState] = useState();
  const searchParam = params.recipeId;

  useEffect(() => {

    const searchParam = params.recipeId;

    axios
      .get("http://localhost:9000/recipe/search/details/" + searchParam)
      .then(function (response) {
        setDetailState(response.data);
      })
      .catch((e) => console.log(e));
    axios
      .get("http://localhost:9000/recipe/getIngredientList/" + searchParam)
      .then(function (response) {
        setIngredientState(response.data);
      })
      .catch((e) => console.log(e));
    axios
      .get("http://localhost:9000/recipe/getRecipeLikes/", {
        params: { recipe_num: searchParam },
      })
      .then(function (response) {
        console.log(response.data);
        response.data ? setRecipeLikes(response.data) : setRecipeLikes(0);
      })
      .catch((e) => console.log(e));
    axios
      .get("http://localhost:9000/recipe/getLikedMember/", { 
        params: { param1: detailState[0].member_id , param2: searchParam },
      })
      .then(function (response) {  
        console.log("heartstate", response.data);
        response.data
          ? setHeartState(faHeart)
          : setHeartState(faHeartCirclePlus);
      })
      .catch((e) => console.log(e));
  }, []);

  const getRecipeLikes = axios
    .get("http://localhost:9000/recipe/getRecipeLikes/", {
      params: { recipe_num: searchParam },
    })
    .then(function (response) {
      console.log(response.data);
      response.data ? setRecipeLikes(response.data) : setRecipeLikes(0);
    })
    .catch((e) => console.log(e));

  const onLikeHandler = () => {
    const searchParam = params.recipeId;
    if (heartState === faHeart) {
      //좋아요를 누른 상태
      axios
        .get("http://localhost:9000/recipe/removeLikes", {
          params: {
            param1: loginState, //좋아요 누른 사람
            param2: searchParam,
          },
        })
        .then(setHeartState(faHeartCirclePlus))
        .then(getRecipeLikes);
    } else if (heartState === faHeartCirclePlus) {
      axios
        .get("http://localhost:9000/recipe/insertLikes", {
          params: {
            param1: loginState, //좋아요 누른 사람
            param2: searchParam,
            param3: 1,
          },
        })
        .then(setHeartState(faHeart)); //좋아요를 누르지 않은 상태
    }
  };

  return (
    <>
      <>
        <BackGround>
          <SmallBtn className="backBtn" onClick={onClickBack}>
            {" "}
            돌아가기
          </SmallBtn>
          <RecipeWrap>
            <div>
              <div className="profileWrap">
                <img
                  src={detailState[0].member_imagePath}
                  alt={detailState[0].member_imagePath}
                />
                <span className="accented"> {detailState[0].member_id}</span>
              </div>
              <RecipeThumbnail>
                <img
                  src={detailState[0].recipe_rpath}
                  alt={detailState[0].recipe_rpath}
                />
              </RecipeThumbnail>
              <RecipeBasicInfo>
                <h2>{detailState[0].recipe_title}</h2>
                <div>
                  <span className="lvl">
                    {detailState[0].information_level}
                  </span>
                  <span className="time">
                    {detailState[0].information_time}
                  </span>
                </div>
                <div className="recipeIntro">
                  {detailState[0].recipe_introduce}
                </div>
              </RecipeBasicInfo>
              <IngredientsWrap>
                <div>
                  <span className="accented">재료</span>{" "}
                  <span>Ingredients</span>
                </div>
                <hr />
                <RecipeIngredients ingredientState={ingredientState} />
              </IngredientsWrap>
              <div>
                <CreDateLikeWrap>
                  <span className="accented"> 레시피 작성일</span>
                  <span className="accented">
                    {detailState[0].recipe_creDate.substring(0, 10)}
                  </span>
                  <Likes className="accented clickable" onClick={onLikeHandler}>
                    좋아요 <FontAwesomeIcon icon={heartState} /> {recipe_likes}
                  </Likes>
                </CreDateLikeWrap>
              </div>
            </div>
            <div className="instructionWrap">
              <div>
                <span className="accented"> 조리 순서 </span>Steps
              </div>
              <hr />
              <StepRecipe detailState={detailState} />
            </div>
          </RecipeWrap>
        </BackGround>
      </>
    </>
  );
};
const BackGround = styled.div`
  /* background-color: cadetblue; */
  margin: -6em auto;
  color: #463635;
  height: fit-content;
  padding: 3em;
  font-size: 14px;
  & .backBtn {
    float: right;
  }
  & .recipeIntro {
    margin: 1em 0;
  }
`;
const RecipeWrap = styled.div`
  margin: 0 auto;
  max-width: 40em;
  & .instructionWrap {
    & hr {
      margin: 0.5em 0;
      margin-bottom: 1em;
    }
    & .accented {
      font-size: 1.1em;
      font-weight: 700;
    }
  }
  & div .accented {
    font-size: 1.1em;
    font-weight: 700;
  }
  & div .clickable {
    cursor: pointer;
  }
`;
const IngredientsWrap = styled.div`
  margin-bottom: 1em;
  & hr {
    margin: 0.5em 0;
  }
  & div .accented {
    font-size: 1.1em;
    font-weight: 700;
  }
`;
const RecipeThumbnail = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin: 2em 0;
  justify-content: center;
  width: 100%;
  & img {
    /* max-width: 50em; */
    min-width: 15em;
    max-height: 24em;
  }
`;
const RecipeBasicInfo = styled.div`
  max-width: 60em;
  margin: 0 auto;
  & h2 {
    font-weight: 700;
  }
  & div {
    margin: 0 auto;
    min-width: 30em;
  }
  & div .lvl {
    margin-right: 1em;
    float: left;
    float: both;
  }
  & div .time {
    clear: left;
    float: both;
  }
`;
const Likes = styled.span`
  float: right;
`;
const CreDateLikeWrap = styled.div`
  margin: 1em 0;
  & .accented {
    font-size: 1.1em;
    font-weight: 700;
    margin-right: 0.2em;
  }
`;

export default RecipeDetailModal;
