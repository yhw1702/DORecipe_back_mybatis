<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>레시피 등록 테스트</title>
</head>
<body>
   <form action="/recipe/insert" method="post">
 
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
      
      <!-- 재료묶음 -->
      <div>
         <h2>재료 묶음</h2>
         <hr>
         <div id="bunbun">
           	<button type="button" onclick="delBundle(this)">X</button>
           	<span>재료묶음<input name="r_bundle" placeHolder="스테이크 소스"></input></span>
           	<span id="ingre">
           		<span>재료<input name="ing_ingredient" placeHolder="캐찹"></span>
           		<span>양<input name="ing_amount" placeHolder="1/2컵"></input></span>
           	</span>
         </div>
         <button type="button" onclick="addBundle()">재료  묶음 추가</button>
      </div>
      
      <!-- 조리순서 -->
      <div>
         <h2>조리 순서</h2>
         <hr>
         <div id="orderForm">
            <button type="button" onclick="delOrder(this)">X</button>
            <input type="hidden" name="recipe_num">
            <table id="orderTable">
               <tr>
                  <td>
                     <input type="hidden" name="recipe_num">
                  	 <p name="order_num" value="1">1</p>
                     <textarea name="order_explain"></textarea>
                  </td>
                  <td>
                  <td>
                     <img name="order_path" alt="이미지" src="#">
                  </td>
               </tr>
            </table>
         </div>
         <button type="button" style="width: 100%;">요리 순서 추가</button>
      </div>
      
      <br>
      <button type="submit">등록</button>
   </form>
</body>
<script>
   // function addOrder() { // 추가
   //    const orderForm = document.getElementById("orderForm");
   //    const new_table = document.createElement('table');
   
   //    let order_num = 1;

   //    order_num++;

   //    new_table.innerHTML =
   //       `<button type="button" onclick="delOrder(this)">X</button>
   //       <table id="orderTable">
   //       <tr>
   //       <td>
   //       	<p value="order_num">` + order_num + `</p>
   //          <textarea name="order_explain"></textarea>
   //       </td>
   //       <td>
   //       <td>
   //          <img name="order_path" alt="이미지" src="#">
   //       </td>
   //    </tr>
   // </table>`;
   //    orderForm.appendChild(new_table);
   //    console.log(order_num);
   // }
   
   //재료 묶음 추가
   function addBundle(){
	   const bunbun = document.getElementById("bunbun");
	   const new_bundle = document.createElement('div');
	   
	   console.log(bunbun);
	   
	   new_bundle.innerHTML = 
		   `
           	<button type="button" onclick="delBundle(this)">X</button>
           	<span>재료묶음<input name="r_bundle"></input></span>
           	<span id="ingre">
           		<span>재료<input name="ing_ingredient"></input></span>
           		<span>양<input name="ing_amount"></input></span>
           	</span>
		   `;
	   bunbun.appendChild(new_bundle);
   }
   //재료 묶음 추가 삭제
   function delBundle(obj){
	   document.getElementById("bunbun").removeChild(obj.parentNode);
   }
   function delOrder(obj) { // 삭제
      document.getElementById("orderForm").removeChild(obj.parentNode);
   }
</script>
</html>