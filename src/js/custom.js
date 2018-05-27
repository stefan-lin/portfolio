/*
  Getting coordinations of sections
*/
var cover_section_top  = $('#my-cover-section').offset().top;
var skill_section_top  = $('#my-skills-section').offset().top;
var school_section_top = $('#my-school-section').offset().top;
var work_section_top   = $('#my-work-section').offset().top;
var backward_arrow_top = $('.backward-nav').offset().top;
var forward_arrow_top  = $('.forward-nav').offset().top;
var project_section_top = $('#my-project-section').offset().top;
var contact_section_top = $('#contact-me-section').offset().top;

// fade effect related
var landing_brand_name_top    = $('.landing-container>.row>.col>.display-4').offset().top;
var landing_brand_content_top = $('.landing-container>.row>.col>p').offset().top;
var brand_name_existance      = true;
var brand_content_existance   = true;

var chart_skill_elements = [];
$('.chart-content>.container>.row').each(function(i, ele){
  chart_skill_elements.push($(ele));
});

var skill_intro_0 = $('.skill-intro>.skill-intro-title-lg:first');
var skill_intro_1 = $('.skill-intro>.skill-intro-mid');
var skill_intro_2 = $('.skill-intro>.skill-intro-end');
var skill_intro_content = $('.skill-intro-content');

var skill_intro_0_flag = true;
var skill_intro_1_flag = true;
var skill_intro_2_flag = true;
var skill_intro_content_flag = true;

var navbar_color_flag = 0; // 0: white, 1: black

// Education section positions
var uni_title_pos     = $('#university-title').offset().top;
var rmd_title_pos     = $('#recommendation-title').offset().top;
var scl_name_time_pos = $('#school-name-time').offset().top;
var scl_logo_pos      = $('.sjsu-logo').offset().top;
var dgr_name_pos      = $('.degree-name').offset().top;
var gpa_pos           = $('.school-gpa').offset().top;
var rmd_cards_pos     = $('#rmd-cards').offset().top;

var uni_title_flag = true;
var rmd_title_flag = true;
var scl_name_time_flag = true;
var scl_logo_flag = true;
var dgr_name_flag = true;
var gpa_flag = true;
var rmd_cards_flag = true;

/*****************************************
 * Fading Helper Functions               *
 *****************************************/
function _fade_skill_element(fixed_nav_bottom_pos){
  fixed_nav_bottom_pos = fixed_nav_bottom_pos - 12;

  var num_of_skill_elements = chart_skill_elements.length;
  //console.log('num = ', num_of_skill_elements); //27
  if(_fade_skill_element.index === undefined){
    _fade_skill_element.index = 0;
  }
  if(_fade_skill_element.visible_top === undefined){
    _fade_skill_element.visible_top = chart_skill_elements[_fade_skill_element.index];
    _fade_skill_element.invisible_bottom = undefined;
  }

  if(_fade_skill_element.visible_top !== undefined && _fade_skill_element.visible_top !== null){
    if(fixed_nav_bottom_pos >= _fade_skill_element.visible_top.offset().top){
      _fade_skill_element.invisible_bottom = _fade_skill_element.visible_top;
      _fade_skill_element.invisible_bottom.animate({opacity: 0});

      if(_fade_skill_element.index + 1 < num_of_skill_elements){
        _fade_skill_element.index = _fade_skill_element.index + 1;
        _fade_skill_element.visible_top = chart_skill_elements[_fade_skill_element.index];
      }
      else{
        _fade_skill_element.visible_top = null;
      }
    }
  }

  if(_fade_skill_element.invisible_bottom !== undefined && _fade_skill_element.invisible_bottom != null){
    if(fixed_nav_bottom_pos < _fade_skill_element.invisible_bottom.offset().top){
      _fade_skill_element.visible_top = _fade_skill_element.invisible_bottom;
      _fade_skill_element.visible_top.animate({opacity: 1});
      if(_fade_skill_element.index - 1 >= 0){
        _fade_skill_element.index = _fade_skill_element.index - 1;
        _fade_skill_element.invisible_bottom = chart_skill_elements[_fade_skill_element.index];
      }
      else{
        _fade_skill_element.invisible_bottom = null;
      }
    }
  }

  //console.log('index = ', index);
}

function _fade_skill_intros(sp){
  sp = sp - 12;

  if(skill_intro_0_flag){
    if(sp >= skill_intro_0.offset().top){
      skill_intro_0.animate({opacity: 0});
      skill_intro_0_flag = false;
    }
  }
  else{
    if(sp < skill_intro_0.offset().top){
      skill_intro_0.animate({opacity: 1});
      skill_intro_0_flag = true;
    }
  }

  if(skill_intro_1_flag){
    if(sp >= skill_intro_1.offset().top){
      skill_intro_1.animate({opacity: 0});
      skill_intro_1_flag = false;
    }
  }
  else{
    if(sp < skill_intro_1.offset().top){
      skill_intro_1.animate({opacity: 1});
      skill_intro_1_flag = true;
    }
  }

  if(skill_intro_2_flag){
    if(sp >= skill_intro_2.offset().top){
      skill_intro_2.animate({opacity: 0});
      skill_intro_2_flag = false;
    }
  }
  else{
    if(sp < skill_intro_2.offset().top){
      skill_intro_2.animate({opacity: 1});
      skill_intro_2_flag = true;
    }
  }

  if(skill_intro_content_flag){
    if(sp >= skill_intro_content.offset().top){
      skill_intro_content.animate({opacity: 0});
      skill_intro_content_flag = false;
    }
  }
  else{
    if(sp < skill_intro_content.offset().top){
      skill_intro_content.animate({opacity: 1});
      skill_intro_content_flag = true;
    }
  }
}

function _fade_school_elements(sp){
  sp = sp + 15;

  if(rmd_cards_flag){
    if((sp - 200) >= rmd_cards_pos){
      $('#rmd-cards').css('transition-duration', '3s');
      $('#rmd-cards').animate({opacity: 0});
      rmd_cards_flag = false;
    }
  }
  else{
    if((sp - 200) < rmd_cards_pos){
      $('#rmd-cards').css('transition-duration', '0.3s');
      $('#rmd-cards').animate({opacity: 1});
      rmd_cards_flag = true;
    }
  }

  if(gpa_flag){
    if(sp >= gpa_pos){
      $('.school-gpa').animate({opacity: 0});
      gpa_flag = false;
    }
  }
  else{
    if(sp < gpa_pos){
      $('.school-gpa').animate({opacity: 1});
      gpa_flag = true;
    }
  }

  if(dgr_name_flag){
    if(sp >= dgr_name_pos){
      $('.degree-name').animate({opacity: 0});
      dgr_name_flag = false;
      if(scl_logo_flag){
        $('.sjsu-logo').animate({opacity: 0});
        scl_logo_flag = false;
      }
    }
  }
  else{
    if(sp < dgr_name_pos){
      $('.degree-name').animate({opacity: 1});
      dgr_name_flag = true;
      if(!scl_logo_flag){
        $('.sjsu-logo').animate({opacity: 1});
        scl_logo_flag = true;
      }
    }
  }

  if(scl_name_time_flag){
    if(sp >= scl_name_time_pos){
      $('#school-name-time').animate({opacity: 0});
      scl_name_time_flag = false;
    }
  }
  else{
    if(sp < scl_name_time_pos){
      $('#school-name-time').animate({opacity: 1});
      scl_name_time_flag = true;
    }
  }

  if(rmd_title_flag){
    if(sp >= rmd_title_pos){
      $('#recommendation-title').animate({opacity: 0});
      rmd_title_flag = false;
    }
  }
  else{
    if(sp < rmd_title_pos){
      $('#recommendation-title').animate({opacity: 1});
      rmd_title_flag = true;
    }
  }

  if(uni_title_flag){
    if(sp >= uni_title_pos){
      $('#university-title').animate({opacity: 0});
      uni_title_flag = false
    }
  }
  else{
    if(sp < uni_title_pos){
      $('#university-title').animate({opacity: 1});
      uni_title_flag = true;
    }
  }
}

function _nav_behavior_at_work(sp){

}
/*
  changing text color of nav bar corresponding to scroll location
*/
$(document).scroll(function() {
  var scroll_position = $(document).scrollTop();

  scroll_position = scroll_position + 100;
  _fade_skill_element(scroll_position);
  _fade_skill_intros(scroll_position);
  _fade_school_elements(scroll_position);
  //console.log(scroll_position-12, skill_intro_0.offset().top);
  // Brand Name Fading
  if(scroll_position >= landing_brand_name_top){
    if(brand_name_existance){
      $('.landing-container>.row>.col>.display-4')
        .animate(
          {opacity: 0}
        );
      brand_name_existance = false;
    }
  }
  else if(scroll_position < landing_brand_name_top){
    if(!brand_name_existance){
      $('.landing-container>.row>.col>.display-4')
        .animate(
          {opacity: 1}
      );
      brand_name_existance = true;
    }
  }

  // Brand Content Fading
  if(scroll_position >= landing_brand_content_top){
    if(brand_content_existance){
      $('.landing-container>.row>.col>p')
        .animate(
          {opacity: 0}
        );
      brand_content_existance = false;
    }
  }
  else if(scroll_position < landing_brand_content_top){
    if(!brand_content_existance){
      $('.landing-container>.row>.col>p')
        .animate(
          {opacity: 1}
      );
      brand_content_existance = true;
    }
  }


  if(scroll_position < skill_section_top){
    // landing section
    $('#pagenation-skill>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    $('#pagenation-education>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    $('#pagenation-work>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    $('#pagenation-projects>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    if(navbar_color_flag != 0){
      $('.my-brand').css('color', '#fff');
      $('.my-mid-links>a').css('color', '#fff');
      $('.my-single-navbutton').each(function(){
        $(this).css({'color':'#fff', 'border-color':'#fff'});
      });
      $('#backward-arrow-div').css('display', 'none');

      // set flag
      navbar_color_flag = 0;
    }
  }
  else if(scroll_position >= skill_section_top && scroll_position < school_section_top){
    // in skill section
    $('#pagenation-skill>.yellow-underline').css({
      "width": "calc(100% + 10px)",
      "transition": "all 0.3s"
    });
    $('#pagenation-education>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    $('#pagenation-work>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    $('#pagenation-projects>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    if(navbar_color_flag != 1){
      $('.my-brand').css('color', 'black');
      $('.my-mid-links>a').css('color', 'black');
      $('.my-single-navbutton').each(function(){
        $(this).css({'color':'black', 'border-color':'black'});
      });
      $('#backward-arrow-div').css('display', 'block');

      // set flag
      navbar_color_flag = 1;
    }
  }
  else if(scroll_position >= school_section_top && scroll_position < work_section_top){
    // in school section
    $('#navigation-bar').css('background-color', 'transparent');


    $('#pagenation-skill>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    $('#pagenation-education>.yellow-underline').css({
      "width": "calc(100% + 10px)",
      "transition": "all 0.3s"
    });
    $('#pagenation-work>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    $('#pagenation-projects>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    if(navbar_color_flag != 0){
      $('.my-brand').css('color', '#fff');
      $('.my-mid-links>a').css('color', '#fff');
      $('.my-single-navbutton').each(function(){
        $(this).css({'color':'#fff', 'border-color':'#fff'});
      });

      navbar_color_flag = 0;
    }
  }
  else if(scroll_position >= work_section_top && scroll_position < project_section_top){
    // in work section
    $('#navigation-bar').css('background-color', 'rgba(0, 0, 0, 0.7)');

    $('#pagenation-education>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    $('#pagenation-work>.yellow-underline').css({
      "width": "calc(100% + 10px)",
      "transition": "all 0.3s"
    });
    $('#pagenation-skill>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    $('#pagenation-projects>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
  }
  else if(scroll_position >= project_section_top && scroll_position < contact_section_top){
    // in project section

    $('#pagenation-work>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    $('#pagenation-projects>.yellow-underline').css({
      "width": "calc(100% + 10px)",
      "transition": "all 0.3s"
    });
    $('#pagenation-skill>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    $('#pagenation-education>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });

    $('#forward-arrow-div').css('display', 'block');
  }
  else{
    // #contact-me-section
    $('#pagenation-skill>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });$('#pagenation-education>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });
    $('#pagenation-projects>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });$('#pagenation-work>.yellow-underline').css({
      "width": "0",
      "transition": "all 0.3s"
    });

    $('#forward-arrow-div').css('display', 'none');
  }
});

// adding clicking listener to nav-arrows
$('#forward-arrow-div').click(function(){
  var scroll_position = $(document).scrollTop();

  scroll_position = scroll_position + 100;

  if(scroll_position < skill_section_top){
    // landing
    $('html, body').animate({
      scrollTop: ($('#my-skills-section').offset().top)
    },500);
  }
  else if(scroll_position >= skill_section_top && scroll_position < school_section_top){
    // skill
    $('html, body').animate({
      scrollTop: ($('#my-school-section').offset().top)
    },500);
  }
  else if(scroll_position >= school_section_top && scroll_position < work_section_top){
    // school
    $('html, body').animate({
      scrollTop: ($('#my-work-section').offset().top)
    },500);
  }
  else if(scroll_position >= work_section_top && scroll_position < project_section_top){
    // work
    $('html, body').animate({
      scrollTop: ($('#my-project-section').offset().top)
    },500);
  }
  else if(scroll_position >= project_section_top && scroll_position < contact_section_top){
    // project
    $('html, body').animate({
      scrollTop: ($('#contact-me-section').offset().top)
    },500);
  }
  else{
    // contact section (shouldn't be in this state for forward arrow)
  }
});

$('#backward-arrow-div').click(function(){
  var scroll_position = $(document).scrollTop();

  scroll_position = scroll_position + 100;

  if(scroll_position < skill_section_top){
    // landing
    // shouldn't be in this state for backward arrow
  }
  else if(scroll_position >= skill_section_top && scroll_position < school_section_top){
    // skill
    $('html, body').animate({
      scrollTop: ($('#my-cover-section').offset().top)
    },500);
  }
  else if(scroll_position >= school_section_top && scroll_position < work_section_top){
    // school
    $('html, body').animate({
      scrollTop: ($('#my-skills-section').offset().top)
    },500);
  }
  else if(scroll_position >= work_section_top && scroll_position < project_section_top){
    // work
    $('html, body').animate({
      scrollTop: ($('#my-school-section').offset().top)
    },500);
  }
  else if(scroll_position >= project_section_top && scroll_position < contact_section_top){
    // project
    $('html, body').animate({
      scrollTop: ($('#my-work-section').offset().top)
    },500);
  }
  else{
    // contact section
    $('html, body').animate({
      scrollTop: ($('#my-project-section').offset().top)
    },500);
  }
});
