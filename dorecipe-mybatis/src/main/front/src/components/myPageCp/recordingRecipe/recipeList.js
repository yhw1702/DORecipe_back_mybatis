import { Link } from "react-router-dom";

import styled from "styled-components";

const RecordList = ({recipeState}) => {
return(
    <>
    {/* 작성중 레시피 */}
            <RecipeWrap>
                <li className="card recipe-box center">
                    {/* <div className="card recipe-box center"> */}
                        <Link to={`/recipes/search/details/${recipeState.recipe_num}`}>
                            <img className="card-img-top card-img-size" 
                            src={recipeState.recipe_rpath} 
                            alt="profileImage" />
                        </Link>
                        <Link to={`/recipes/search/details/${recipeState.recipe_num}`} 
                        className="card-title" 
                        style={{ textDecoration: "none" }}>
                            {recipeState.recipe_title}
                        </Link>
                        {recipeState.information_level}
                        &nbsp;&nbsp;&nbsp;
                        {recipeState.information_time}
                    {/* </div> */}
                </li>
            </RecipeWrap>
    </>
)
}
export default RecordList;
const RecipeWrap = styled.ul`
    display: inline-block;
    justify-content: flex-start;
    flex-wrap: nowrap;
    // background-color: blue;
`;