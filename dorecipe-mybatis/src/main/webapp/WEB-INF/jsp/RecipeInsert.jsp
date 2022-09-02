<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>레시피 등록 테스트</title>
</head>
<body>
   <form action="/recipe/insert" method="post" id="form1">
 
      <div>
         <label for="recipe_title">레시피 제목</label>
         <input type="text" name="recipe_title">
      </div>
      <div>
         <label for="recipe_introduce">레시피 소개</label>
         <textarea name="recipe_introduce"></textarea>
      </div>
      <div>
         <label for="recipe_url">동영상</label>
         <input type="text" name="recipe_url">
      </div>
      <!-- 대표이미지 빼고! -->
      
      <!-- 카테고리 -->
      <div>
         <h2>카테고리<h2>
         <hr>
         <select name="category_kind">
            <option value="종류">종류별</option>
            <option value="밑반찬">밑반찬</option>
            <option value="메인반찬">메인반찬</option>
            <option value="국/탕">국/탕</option>
         </select>
         <select name="category_theme">
            <option value="테마">테마/상황별</option>
            <option value="일상">일상</option>
            <option value="초스피드">초스피드</option>
         </select>
         <select name="category_way">
            <option value="방법">방법별</option>
            <option value="볶음">볶음</option>
            <option value="끓이기">끓이기</option>
         </select>
         <select name="category_ing">
            <option value="재료">재료별</option>
            <option value="소고기">소고기</option>
            <option value="돼지고기">돼지고기</option>
         </select>
      </div>
    
      <!-- 요리정보 -->
      <div>
         <h2>요리정보<h2>
         <hr>
         <select name="information_person">
            <option value="인원">인원</option>
            <option value="1">1인분</option>
            <option value="2">2인분</option>
            <option value="3">3인분</option>
         </select>
         <select name="information_time">
            <option value="시간">시간</option>
            <option value="5">5분 이내</option>
            <option value="15">15분 이내</option>
            <option value="20">20분 이내</option>
         </select>
         <select name="information_level">
            <option value="난이도">난이도</option>
            <option value="아무나">아무나</option>
            <option value="초급">초급</option>
            <option value="중급">중급</option>
         </select>
      </div>
       
       
      <!-- 태그 -->
      <div>
         <label for="recipe_tag">태그</label>
         <textarea name="recipe_tag"></textarea>
      </div>     

      </form>
      <form  action="/recipe/insertRecipeOrder" method="post" id="form2">
      <!-- 요리순서 -->
      <div>
         <h2>요리 순서</h2>
        
         <hr>
         <div id="orderForm">
            
            <table id="orderTable">
               <tr>
                  <td> 레시피 번호 :<input type="text"  name="orderVoList[0].recipe_num"/>
                  <button type="button" onclick="delOrder(this)">X</button>
                   레시피 순서 : <input type="text" name="orderVoList[0].order_num"/>
                     <textarea name="orderVoList[0].order_explain"></textarea>
                  </td>
                  <td>
                     <img name="orderVoList[0].order_path" alt="이미지" src="#">
                  </td>
               </tr>
               <tr>
                  <td> 레시피 번호 :<input type="text" name="orderVoList[1].recipe_num"/>
                  <button type="button" onclick="delOrder(this)">X</button>
                   레시피 순서 : <input type="text" name="orderVoList[1].order_num"/>
                     <textarea name="orderVoList[1].order_explain"></textarea>
                  </td>
                  <td>
                     <img name="orderVoList[1].order_path" alt="이미지" src="#">
                  </td>
               </tr>
               <tr>
                  <td> 레시피 번호 :<input type="text" name="orderVoList[2].recipe_num"/>
                  <button type="button" onclick="delOrder(this)">X</button>
                   레시피 순서 : <input type="text" name="orderVoList[2].order_num"/>
                     <textarea name="orderVoList[2].order_explain"></textarea>
                  </td>
                  <td>
                     <img name="orderVoList[2].order_path" alt="이미지" src="#">
                  </td>
               </tr>
             
            
            </table>
         </div>
         <button type="button" class="btnCount" style="width: 100%;">요리 순서 추가</button>
      </div>
      
      </form>
      <br>
  <input type="button" value="등록" onclick="submitForms()"/>
</body>
<script>

submitForms = function(){
    document.getElementById("form1").submit();
    document.getElementById("form2").submit();
}


let btnCount = document.querySelector(".btnCount");
let n =0;

btnCount.addEventListener("click", function() {
	  n += 1;
	  console.log(n);
	  addOrder();
	});

   function addOrder() { // 추가
      const orderForm = document.getElementById("orderForm");
      const new_table = document.createElement('table');

      new_table.innerHTML =
         `<tr>레시피 번호 :<input type="text" name="orderVoList[n].recipe_num"/>
                  <td><button type="button" onclick="delOrder(this)">X</button> 레시피 순서 : <input type="text" name="orderVoList[n].order_num"/>
                     <textarea name="orderVoList[n].order_explain"></textarea>
                  </td>
                  <td>
                  <td>
                     <img name="orderVoList[n].order_path" alt="이미지" src="#">
                  </td>
               </tr>
   `;
      orderForm.appendChild(new_table);
   }
   
   function delOrder(obj) { // 삭제
	   alert("제거!")
      document.getElementById("orderTable").removeChild(obj.parentNode);
   }
</script>
</html>