package com.dorecipe.main.notice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dorecipe.main.notice.dao.NoticeDAO;
import com.dorecipe.main.notice.service.NoticeService;
import com.dorecipe.main.notice.vo.Notice;

import lombok.RequiredArgsConstructor;
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping(value="/notice")
@RequiredArgsConstructor	//생성자 주입을 위한.
@RestController
public class NoticeController {
	
	@Autowired
	private NoticeService service;	//interface자료형
	
	@Autowired
	private NoticeDAO noticeDao;
	
	@RequestMapping(path="/list", method =RequestMethod.GET)
	public List<Notice> getNotice() {
		return noticeDao.getList();
	}
	
	
	//공지사항 전체 목록
	@RequestMapping("/list")
	public String list(Model model) {
		List<Notice> list = service.getList();
		
		model.addAttribute("list",list);
		
		System.out.println(list);
		
	    return "notice";
	}
	
	//공지사항 상세 조회
//	@RequestMapping("/detail/{notice_num}")
//	public String detail(Model model, @PathVariable("notice_num") Integer notice_num) throws Exception {
//	   Notice notice = service.getdetail(notice_num);
//	   model.addAttribute("noticedetail",notice);
//	   
//	   System.out.println(notice);
//	   
//	   return "noticeDetail";
//	}
	
	//공지사항 등록
	@PostMapping("/insert")
	public String insert(Notice notice) throws Exception {

		System.out.println("Controller!!!! notice title " + notice.getNotice_title());
		System.out.println("Controller!!!! notice content " + notice.getNotice_content());
		
		service.insert(notice);
		
		System.out.println("공지사항 등록 성공!!! - controller");
		
		return "redirect:/notice/list";
	}
	
	//공지사항 수정
	@GetMapping("/update/{notice_num}")
	public String update(@PathVariable("notice_num") Integer notice_num,Notice notice) throws Exception {
		service.update(notice_num, notice);
		
		System.out.println("공지사항 수정 성공~~~~");
		
		return "redirect:/notice/list";
	}
	
	//공지사항 삭제
	@GetMapping("/delete/{notice_num}")
	public String Delete(@PathVariable("notice_num") Integer notice_num) throws Exception {
		service.delete(notice_num);
		
		System.out.println("공지사항 삭제 성공!");
		
		return "redirect:/notice/list";
	}
	
	
}
