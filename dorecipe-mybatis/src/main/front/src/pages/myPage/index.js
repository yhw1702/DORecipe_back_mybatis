import MainLayout from "../../layout/mainLayOut";
import MemberInfoForm from "../../components/myPageCp/memberInfo/index";
import CompleteRecipeList from "../../components/myPageCp/completeRecipe";
import RecordingRecipeList from "../../components/myPageCp/recordingRecipe";
import LikeRecipeList from "../../components/myPageCp/likeRecipe";

import './style.css'


const MyPage = () => {

    return(
        <>
            <MainLayout>
                <MemberInfoForm />
                {/* <LikeRecipeList /> */}
                <CompleteRecipeList />
                <RecordingRecipeList />
            </MainLayout>
        </>
    );
}

export default MyPage;
// const RecipeWrap = styled.div`
//   display: inline-flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   margin: 3em 4em;
//   text-align: center;
//   & > Link {
//     text-decoration: none;
//   }
// `;

// const RecipeImg = styled.div`
//   & > img {
//     // width: 15em;
//     width: 300px;
//     height 200px;
//     padding-bottom: 0.5em;
//     object-fit: cover;
//   }
// `;