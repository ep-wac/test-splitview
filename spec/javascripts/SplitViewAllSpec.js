describe('Testing jQuery Mobile SplitView Navigation', function () {
/*
	beforeEach( function(){
		loadFixtures('test_coverage.html');
	});
	
	function build_link_and_trigger( container, link, id, event){
		$(link).appendTo(container);
		// $(id).trigger(event);
	}

	// <li><a id="t10" href="test_function()" >link calls function</a></li>

	// <ul><li><a href="#main" class="ui-btn-active" data-transition="slideup">Menu</a></li></ul>

	// link reloads entire document - both menu and main panel
	// 
	// the link tag should contain a href pointing to this (new) document - like  '/posts'
	// once loaded 
	// - either the current page should be navigated to, 
	// - or some default page should be navigated to (in the menu panel AND in the main panel)
	//
	// Reason for (re)load is either
	// - a link is clicked in the menu panel or
	// - a link is clicked in the main panel or
	// - a form is POST'ed in either panel
	// - a timeout has reached its highlevel (basically same operation as a clicked link)
	//
	// Submitting a FORM without ajax will require a pagereload and as such some variable 
	// to hold the page navigated to once the reload has finished (if position should be kept equal to pre-posting the FORM)
	//
	describe('should load an entire new content - in both menu and main panels', function(){

		describe('will happen while being in the menu panel', function(){
			
			var link_stay = '<a id="t1" href="/new_content.html" >link reloads entire document - with new content/refresh</a>',
				link_go = '<a id="t1" href="/new_content.html" >link reloads entire document - with new content/refresh</a>',
				submit_link_stay = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />',
				submit_link_go = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />';
			
			describe('triggering a link in the header', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_header', link_stay, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_header', link_go, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the content', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_content > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_content > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the footer', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_footer > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_footer > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('submitting a form', function(){
				describe('without ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_one', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_one', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_one', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_two', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_two', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_two', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});

				});
			
				describe('with ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_three', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_three', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_three', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_four', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_four', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_four', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				});
			});
		});
		
		describe('will happen while being in the main panel', function(){
			
			var link_stay = '<a id="t1" href="/new_content.html" >link reloads entire document - with new content/refresh</a>',
				link_go = '<a id="t1" href="/new_content.html" >link reloads entire document - with new content/refresh</a>',
				submit_link_stay = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />',
				submit_link_go = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />';
			
			describe('triggering a link in the header', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_header', link_stay, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
					
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_header', link_go, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the content', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_content > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_content > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the footer', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_footer > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_footer > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('submitting a form', function(){
				describe('without ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_five', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the main panel', function () {
							build_link_and_trigger('.form_five', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the main panel', function () {
							build_link_and_trigger('.form_five', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_six', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the main panel', function () {
							build_link_and_trigger('.form_six', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the main panel', function () {
							build_link_and_trigger('.form_six', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});

				});
			
				describe('with ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_seven', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the main panel', function () {
							build_link_and_trigger('.form_seven', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the main panel', function () {
							build_link_and_trigger('.form_seven', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_eight', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the main panel', function () {
							build_link_and_trigger('.form_eight', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the main panel', function () {
							build_link_and_trigger('.form_eight', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				});
			});
			
		});
		
	});
	
	// link reloads menu panel - with new content
	// except for the target, all of the above comments holds for this use case too
	describe('should load an entire new content - in the menu panel', function(){

		describe('will happen while being in the menu panel', function(){
			
			var link_stay = '<a id="t1" href="/new_content.html" >link load an entire new content - in the menu panel</a>',
				link_go = '<a id="t1" href="/new_content.html" >link load an entire new content - in the menu panel</a>',
				submit_link_stay = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />',
				submit_link_go = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />';
			
			describe('triggering a link in the header', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_header', link_stay, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_header', link_go, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the content', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_content > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_content > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the footer', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_footer > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_footer > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('submitting a form', function(){
				describe('without ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_one', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_one', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_one', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_two', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_two', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_two', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});

				});
			
				describe('with ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_three', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_three', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_three', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_four', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_four', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_four', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				});
			});
		});
		
		describe('will happen while being in the main panel', function(){
			
			var link_stay = '<a id="t1" href="/new_content.html" >link load an entire new content - in the menu panel</a>',
				link_go = '<a id="t1" href="/new_content.html" >link load an entire new content - in the menu panel</a>',
				submit_link_stay = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />',
				submit_link_go = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />';
			
			describe('triggering a link in the header', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_header', link_stay, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
					
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_header', link_go, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the content', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_content > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_content > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the footer', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_footer > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_footer > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('submitting a form', function(){
				describe('without ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_five', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the main panel', function () {
							build_link_and_trigger('.form_five', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the main panel', function () {
							build_link_and_trigger('.form_five', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_six', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the main panel', function () {
							build_link_and_trigger('.form_six', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the main panel', function () {
							build_link_and_trigger('.form_six', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});

				});
			
				describe('with ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_seven', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the main panel', function () {
							build_link_and_trigger('.form_seven', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the main panel', function () {
							build_link_and_trigger('.form_seven', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_eight', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the main panel', function () {
							build_link_and_trigger('.form_eight', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the main panel', function () {
							build_link_and_trigger('.form_eight', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				});
			});
			
		});
		
	});
	
	// link reloads main panel - with new content
	// except for the target, all of the above comments holds for this use case too
	describe('should load an entire new content - in the main panel', function(){

		describe('will happen while being in the menu panel', function(){
			
			var link_stay = '<a id="t1" href="/new_content.html" >link load an entire new content - in the main panel</a>',
				link_go = '<a id="t1" href="/new_content.html" >link load an entire new content - in the main panel</a>',
				submit_link_stay = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />',
				submit_link_go = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />';
			
			describe('triggering a link in the header', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_header', link_stay, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_header', link_go, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the content', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_content > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_content > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the footer', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_footer > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_footer > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('submitting a form', function(){
				describe('without ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_one', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_one', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_one', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_two', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_two', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_two', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});

				});
			
				describe('with ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_three', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_three', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_three', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_four', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_four', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_four', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				});
			});
		});
		
		describe('will happen while being in the main panel', function(){
			
			var link_stay = '<a id="t1" href="/new_content.html" >link load an entire new content - in the main panel</a>',
				link_go = '<a id="t1" href="/new_content.html" >link load an entire new content - in the main panel</a>',
				submit_link_stay = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />',
				submit_link_go = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />';
			
			describe('triggering a link in the header', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_header', link_stay, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
					
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_header', link_go, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the content', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_content > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_content > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the footer', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_footer > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_footer > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('submitting a form', function(){
				describe('without ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_five', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_five', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_five', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_six', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_six', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_six', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});

				});
			
				describe('with ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_seven', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_seven', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_seven', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_eight', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_eight', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_eight', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				});
			});
			
		});
		
	});
	
	// link displays an existing page on the menu panel - and not load anything</a></li>
	describe('should should display an existing page on the menu panel - and not load anything', function(){

		describe('will happen while being in the menu panel', function(){
			
			var link_stay = '<a id="t1" href="/new_content.html" >link load an existing page on the menu panel - and not load anything</a>',
				link_go = '<a id="t1" href="/new_content.html" >link load an existing page on the menu panel - and not load anything</a>',
				submit_link_stay = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />',
				submit_link_go = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />';
			
			describe('triggering a link in the header', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_header', link_stay, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_header', link_go, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the content', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_content > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_content > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the footer', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_footer > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_footer > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('submitting a form', function(){
				describe('without ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_one', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_one', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_one', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_two', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_two', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_two', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});

				});
			
				describe('with ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_three', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_three', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_three', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_four', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_four', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_four', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				});
			});
		});
		
		describe('will happen while being in the main panel', function(){
			
			var link_stay = '<a id="t1" href="/new_content.html" >link load an existing page on the menu panel - and not load anything</a>',
				link_go = '<a id="t1" href="/new_content.html" >link load an existing page on the menu panel - and not load anything</a>',
				submit_link_stay = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />',
				submit_link_go = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />';
			
			describe('triggering a link in the header', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_header', link_stay, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
					
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_header', link_go, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the content', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_content > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_content > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the footer', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_footer > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_footer > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('submitting a form', function(){
				describe('without ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_five', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_five', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_five', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_six', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_six', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_six', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});

				});
			
				describe('with ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_seven', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_seven', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_seven', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_eight', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_eight', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_eight', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				});
			});
			
		});
		
	});
	
	// link displays an existing page on the main panel - and not load anything</a></li>
	describe('should should display an existing page on the main panel - and not load anything', function(){

		describe('will happen while being in the menu panel', function(){
			
			var link_stay = '<a id="t1" href="/new_content.html" >link load an existing page on the main panel - and not load anything</a>',
				link_go = '<a id="t1" href="/new_content.html" >link load an existing page on the main panel - and not load anything</a>',
				submit_link_stay = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />',
				submit_link_go = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />';
			
			describe('triggering a link in the header', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_header', link_stay, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_header', link_go, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the content', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_content > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_content > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the footer', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_footer > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_footer > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('submitting a form', function(){
				describe('without ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_one', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_one', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_one', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_two', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_two', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_two', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});

				});
			
				describe('with ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_three', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_three', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_three', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_four', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_four', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_four', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				});
			});
		});
		
		describe('will happen while being in the main panel', function(){
			
			var link_stay = '<a id="t1" href="/new_content.html" >link load an existing page on the main panel - and not load anythingg</a>',
				link_go = '<a id="t1" href="/new_content.html" >link load an existing page on the main panel - and not load anything</a>',
				submit_link_stay = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />',
				submit_link_go = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />';
			
			describe('triggering a link in the header', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_header', link_stay, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
					
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_header', link_go, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the content', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_content > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_content > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the footer', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_footer > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_footer > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('submitting a form', function(){
				describe('without ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_five', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_five', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_five', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_six', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_six', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_six', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});

				});
			
				describe('with ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_seven', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_seven', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_seven', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_eight', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_eight', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_eight', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				});
			});
			
		});
		
	});
	
	// link displays an existing page on the menu panel - and refresh the content</a></li>
	describe('should should display an existing page on the menu panel - and refresh the content', function(){

		describe('will happen while being in the menu panel', function(){
			
			var link_stay = '<a id="t1" href="/new_content.html" >link load an existing page on the menu panel - and refresh the content</a>',
				link_go = '<a id="t1" href="/new_content.html" >link load an existing page on the menu panel - and refresh the content</a>',
				submit_link_stay = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />',
				submit_link_go = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />';
			
			describe('triggering a link in the header', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_header', link_stay, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_header', link_go, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the content', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_content > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_content > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the footer', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_footer > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_footer > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('submitting a form', function(){
				describe('without ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_one', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_one', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_one', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_two', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_two', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_two', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});

				});
			
				describe('with ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_three', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_three', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_three', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_four', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_four', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_four', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				});
			});
		});
		
		describe('will happen while being in the main panel', function(){
			
			var link_stay = '<a id="t1" href="/new_content.html" >link load an existing page on the menu panel - and refresh the content</a>',
				link_go = '<a id="t1" href="/new_content.html" >link load an existing page on the menu panel - and refresh the content</a>',
				submit_link_stay = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />',
				submit_link_go = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />';
			
			describe('triggering a link in the header', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_header', link_stay, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
					
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_header', link_go, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the content', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_content > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_content > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the footer', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_footer > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_footer > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('submitting a form', function(){
				describe('without ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_five', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_five', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_five', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_six', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_six', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_six', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});

				});
			
				describe('with ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_seven', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_seven', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_seven', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_eight', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_eight', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_eight', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				});
			});
			
		});
		
	});
	
	// link displays an existing page on the main panel - and refresh the content</a></li>
	describe('should should display an existing page on the main panel - and refresh the content', function(){

		describe('will happen while being in the menu panel', function(){
			
			var link_stay = '<a id="t1" href="/new_content.html" >link load an existing page on the main panel - and refresh the content</a>',
				link_go = '<a id="t1" href="/new_content.html" >link load an existing page on the main panel - and refresh the content</a>',
				submit_link_stay = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />',
				submit_link_go = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />';
			
			describe('triggering a link in the header', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_header', link_stay, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_header', link_go, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the content', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_content > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_content > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the footer', function() {

				it('should not navigate - ie it should stay on the same page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_footer > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the menu panel', function () {
					build_link_and_trigger('.menu_panel_main_page_footer > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('submitting a form', function(){
				describe('without ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_one', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_one', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_one', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_two', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_two', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_two', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});

				});
			
				describe('with ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_three', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_three', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_three', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_four', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_four', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_four', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				});
			});
		});
		
		describe('will happen while being in the main panel', function(){
			
			var link_stay = '<a id="t1" href="/new_content.html" >link load an existing page on the main panel - and refresh the content</a>',
				link_go = '<a id="t1" href="/new_content.html" >link load an existing page on the main panel - and refresh the content</a>',
				submit_link_stay = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />',
				submit_link_go = '<input id="t1" name="commit" type="submit" value="link POSTs form on active panel" />';
			
			describe('triggering a link in the header', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_header', link_stay, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
					
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_header', link_go, '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the content', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_content > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_content > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('triggering a link in the footer', function() {

				it('should not navigate - ie it should stay on the same page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_footer > ul',  '<li>' + link_stay + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});

				it('should - after loading the new content - navigate to another page in the main panel', function () {
					build_link_and_trigger('.main_panel_main_page_footer > ul',  '<li>' + link_go + '</li>', '#t1','click');
					expect($('#jasmine-fixtures')).toContain('#t1');
				});
				
			});
			
			describe('submitting a form', function(){
				describe('without ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_five', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_five', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_five', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_six', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_six', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_six', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});

				});
			
				describe('with ajax', function(){
				
					describe('inserting a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_seven', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_seven', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_seven', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				
					describe('updating a form', function() {

						it('should not navigate if server validation fails', function () {
							build_link_and_trigger('.form_eight', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should not navigate - ie it should stay on the same page in the menu panel', function () {
							build_link_and_trigger('.form_eight', submit_link_stay, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

						it('should - after loading the new content - navigate to another page in the menu panel', function () {
							build_link_and_trigger('.form_eight', submit_link_go, '#t1','click');
							expect($('#jasmine-fixtures')).toContain('#t1');
						});

					});
				});
			});
			
		});
		
	});
*/
});
