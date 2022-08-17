package com.dorecipe.main.recipe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dorecipe.main.recipe.dao.RecipeDAO;
import com.dorecipe.main.recipe.vo.RecipeVO;

@Service
public class RecipeService {

	@Autowired
	private RecipeDAO recipeDAO;
	
	//레시피 목록
	public List<RecipeVO> getList(){
		List<RecipeVO> recipeList = recipeDAO.getList();
		return recipeList;
	}
	
	//레시피 상세
	public RecipeVO getDetail(Integer recipe_num) {
		RecipeVO recipeVO = recipeDAO.getDetail(recipe_num);
		return recipeVO;
	}
	
	//레시피 재료묶음
	public List<RecipeVO> getBundle(Integer recipe_num) {
		List<RecipeVO> recipeBundle = recipeDAO.getBundle(recipe_num);
		return recipeBundle;
	}
	
	//레시피 조리순서
	public List<RecipeVO> getOrder(Integer recipe_num) {
		List<RecipeVO> recipeOrder = recipeDAO.getOrder(recipe_num);
		return recipeOrder;
	}
	
	public List<RecipeVO> getComment(Integer recipe_num) {
		List<RecipeVO> comment = recipeDAO.getComment(recipe_num);
		return comment;
	}
	
}
