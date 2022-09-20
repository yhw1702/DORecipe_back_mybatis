import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import RecordList from "./recipeList";

import styled from "styled-components";
import NullRecipe from "../nullRecipeList";
import { useSelector } from "react-redux";

const RecordingRecipeList = () => {

  // 작성중 레시피
  const [recipeState, setRecipeState] = useState([
    {
      recipe_num: 0,
      recipe_title: "",
      recipe_rpath: "",
      recipe_savetype: 0,
      information_level: "",
      information_time: "",
    },
  ]);

  const user = useSelector((state) => state);
  const [member_id, setMemberId] = useState();
  useEffect(() => {
      setMemberId(user.auth.user.username);
      console.log("현재 로그인 아이디(recipeT) : " + member_id);

      if(member_id !== undefined){
        Axios();
      }
  });

  const formData = new FormData();
  formData.append("member_id", member_id)

  function Axios() {
    // console.log("작성중레시피 가져오니?" + member_id)
    axios({
      url: "/recipe/recordingType0",
      method: "Post",
      data: formData,
      baseURL: "http://localhost:9000",
    }).then(function (response) {
      console.log(response.data);
      setRecipeState(response.data);
    });
  }

  return (
    <>
      {/* 작성중인 레시피 */}
      <div className="container-sm myPage-box4">
        <div>
          <SectionTitle>
            작성중인 레시피
            <span className="likeRecipeTotal">총 {recipeState.length}개</span>
          </SectionTitle>
          <Scrollable>
            <div>
              {recipeState.length !== 0 ? (
                recipeState.map((e) => (
                  <RecordList key={e.recipe_num} recipeState={e} />
                ))
              ) : (
                <NullRecipe />
              )}
            </div>
          </Scrollable>
          {/* {
                    recipeState.length !== 0
                    ?
                    recipeState.map((e) => (
                        <RecordList
                            recipeState={e}
                        />  
                    ))
                    :
                    <NullRecipe />
                 } */}
        </div>
      </div>
    </>
  );
};
export default RecordingRecipeList;
const SectionTitle = styled.div`
  background-color: #8d3232;
  display: inline-block;
  width: 90%;
  margin: 1em 3em;
  color: #fffdf5;
  height: 2.4em;
  font-size: 21px;
  font-weight: 700;
  padding: 0.5em 0;
  padding-left: 0.5em;
  text-align: center;
`;

const Scrollable = styled.section`
  width: 100%;
  margin: 1em auto;

  & > div {
    padding: 2rem;
    height: 27em;
    overflow-y: auto;
    margin: 0 auto;

    ::-webkit-scrollbar {
      width: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
      height: 30%;
      background-color: #463635;
    }
    ::-webkit-scrollbar-track {
      background-color: #fffdf5;
      border: 1px solid #463635;
    }
  }
`;
