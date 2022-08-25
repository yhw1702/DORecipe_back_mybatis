import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'

const NoticeDetailPage = () => {

  let {noticeId} = useParams();

  const [state, setState] = useState([
    {
      notice_num: 0,
      notice_title: "",
      notice_content: "",
      notice_creDate: "",
    }
  ]);

  function testAxios() {
    axios({
      url: "/notice/detail/"+noticeId,
      method: "get",
      data: {
        notice_num: "test",
        notice_title: "test",
        notice_content: "test",
        notice_creDate: "2022/08/24"
      },
      baseURL: "http://localhost:9000",
    }).then(function (response) {
      console.log(response.data);
      setState(response.data);
    });
  }

  useEffect(() => {
    testAxios();
  }, []);
  
  // console.log(noticeId);
  // console.log(state.notice_title);
  // console.log(state.notice_creDate);
  // console.log(state.notice_content);

  return (
    <>
      {/* <div>공지사항 상세</div> */}
      <li>
          <div className="noticeWrap">
            <h2>| Notice |</h2>
            <div className="noticeDetailTitle noticeBorder">{state.notice_title}</div>  
            <div className="noticeDetailDate">{state.notice_creDate}</div>
            <div>{state.notice_content}</div>
          </div>
      </li>
    </>
  );
};

export default NoticeDetailPage;