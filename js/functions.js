// JavaScript Document

jQuery(document).ready(function($){

		"use strict";	

		$('.smooth-scroll').on('click', 'a', function(e) {		

			e.preventDefault();

		

			var hash = this.hash;

		   

			var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;

			

			//change this number to create the offset        

			var customoffset = 198;

			

			//change this number to change the duration of the scroll 

			$('html, body').animate({scrollTop:target_offset - customoffset}, 500);

	

			window.location.hash = hash;	

		});

});