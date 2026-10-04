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
// Mở/đóng: chỉ khi bấm nút chính (chữ L)
$('.lang_text.main').click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.lang_dropdown').toggleClass('open');
});

// Chọn ngôn ngữ: chỉ các option, KHÔNG lồng trong handler trên
$('.lang_text').not('.main').click(function (e) {
  e.preventDefault();
  e.stopPropagation();

  let lang = $(this).text();
  var lang_available = [
    'V',
    '中',
    'E'
  ]
  // Tắt toàn bộ
  $.each(lang_available, function(index, value){
    $('#'+value).prop('hidden', true);
  });

  $('#'+lang).prop('hidden', false);
  

  $('.lang_dropdown').removeClass('open');
});

// Khi bấm đại vào 1 cái gì đó sẽ tắt cái option
$(document).click(function (e) { 
  $('.lang_dropdown').removeClass('open');
});