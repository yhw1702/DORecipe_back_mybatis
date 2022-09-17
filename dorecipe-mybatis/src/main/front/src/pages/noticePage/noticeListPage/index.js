import "./style.css";
import { useState, useCallback, useEffect } from "react";
import NoticeList from "./noticeList";
import { Link } from "react-router-dom";
import axios from "axios";
import MainLayout from "../../../layout/mainLayOut";
import { useSelector } from "react-redux";
const NoticePage = () => {
  const [state, setState] = useState([
    {
      notice_num: 0,
      notice_title: "",
      notice_content: "",
      notice_creDate: "",
    },
  ]);
  const user = useSelector((state) => state);
  const [BtnState, setBtnState] = useState(user.auth.user);
  useEffect(() => {
    if (!user.auth.user) {
      setBtnState(false);
      return;
    } else {
      console.log("BtnState", user.auth.user.roles.includes("ROLE_ADMIN"));
      setBtnState(user.auth.user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  function testAxios() {
    axios({
      url: "/notice/list",
      method: "get",
      data: {
        notice_num: "test1",
        notice_title: "test1",
        notice_content: "test입닌당",
        notice_creDate: "2022/08/17",
      },
      baseURL: "http://localhost:9000",
    }).then(function (response) {
      // console.log(response.data);
      setState(response.data);
    });
  }

  useEffect(() => {
    testAxios();
  }, []);

  const removePost = useCallback((notice_num) => {
    const removeState = state.filter((item) => item.notice_num !== notice_num);
    setState(removeState);
    axios
      .get(`http://localhost:9000/notice/delete/${notice_num}`)
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <>
      <MainLayout>
        <div className="noticeWrap">
          <h2>| Notice |</h2>

          {BtnState && (
            <Link className="updateList" to={"/admin"}>
              등록
            </Link>
          )}

          <div className="noticeTableWrap">
            <ul>
              <div className="tableHead">
                <div className="noticeNo">No.</div>
                <div className="noticeTitle">제목</div>
                <div className="noticeDate">작성일자</div>

                {BtnState && <div className="updateOrDelete">수정 및 삭제</div>}
              </div>
              {state.map((e) => (
                <NoticeList
                  key={e.notice_num}
                  removePost={removePost}
                  BtnState={BtnState}
                  state={e}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="bottom" />
      </MainLayout>
    </>
  );
};
export default NoticePage;
