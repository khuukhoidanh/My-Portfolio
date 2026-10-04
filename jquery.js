$(document).ready(function(){
  console.log("Website is ready !")
});

// Mở nội dung
$('.menu_home').click(function (e) { 
  e.preventDefault();
  $('.home').prop('hidden', false);
  $('.about').prop('hidden', true);
  $('.contact').prop('hidden', true);

  $('.menu_home').addClass('active');
  $('.menu_about').removeClass('active');
  $('.menu_contact').removeClass('active');
  
});
$('.menu_about').click(function (e) { 
  e.preventDefault();
  $('.home').prop('hidden', true);
  $('.about').prop('hidden', false);
  $('.contact').prop('hidden', true);

  $('.menu_home').removeClass('active');
  $('.menu_about').addClass('active');
  $('.menu_contact').removeClass('active');
 
});
$('.menu_contact').click(function (e) { 
  e.preventDefault();
  $('.home').prop('hidden', true);
  $('.about').prop('hidden', true);
  $('.contact').prop('hidden', false);

  $('.menu_home').removeClass('active');
  $('.menu_about').removeClass('active');
  $('.menu_contact').addClass('active');
  
});


// CHANGE LANGUAGE

let lang = 'vietnamese';
$('.lang_btn').click(function (e) { 
  e.preventDefault();
  
  if (lang === 'vietnamese') {
    lang = 'chinese';
    $('#vietnamese').prop('hidden', true);
    $('#chinese').prop('hidden', false);
  }
  else{
    lang = 'vietnamese';
    $('#vietnamese').prop('hidden', false);
    $('#chinese').prop('hidden', true);
  }
});