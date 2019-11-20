
toastr.options = {
	"closeButton": true,
	"debug": false,
	"newestOnTop": true,
	"progressBar": true,
	"positionClass": "toast-top-center",
	"preventDuplicates": false,
	"onclick": null,
	"showDuration": "300",
	"hideDuration": "1000",
	"timeOut": "5000",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
}

$(document).ready( ()=> {
  // Pre-loader
  $(window).on('load', function() {
    $("#preloader .loader").delay(500).fadeOut("slow");
    $("#overlayer").delay(500).fadeOut("slow");
    $("#preloader").fadeOut();
  })
  // Default message
  console.log("%cDon't try this!", "font-size: 100px; color: red" ) 
    var url      = window.location.href;
    $(`#top-nav a`).removeClass('active');
    $(`#top-nav a[href="${url}"]`).addClass('active');
    $(document).on('click','.nav-item', (e)=> {
        $('section').hide();
        $($(e.target).attr('href')).fadeIn(500)
        console.log();
        
        window.location.hash = $(e.target).attr('href');
    })
    $('.close-btn').click( () => {
      $('#top-offer').fadeOut()
    })
    //showNotificationBar("This is a test message");
    // Form
    

    $('.terms-title li').click( (e) => {
      var titles = $('.terms-title li')
      var index = titles.index(e.target)
      var terms = $('.terms-section section')
      titles.removeClass('active')
      terms.removeClass('active')
      
      titles.eq(index).addClass('active')
      terms.eq(index).addClass('active')

      terms.hide()
      terms.eq(index).fadeIn()      
    })  
})
function showNotificationBar(message, duration, bgColor, txtColor, height) {
 
  /*set default values*/
  duration = typeof duration !== 'undefined' ? duration : 1500;
  bgColor = typeof bgColor !== 'undefined' ? bgColor : "#F4E0E1";
  txtColor = typeof txtColor !== 'undefined' ? txtColor : "#A42732";
  height = typeof height !== 'undefined' ? height : 40;
  /*create the notification bar div if it doesn't exist*/
  if ($('#notification-bar').length == 0) {
      var HTMLmessage = "<div class='notification-message' style='text-align:center; line-height: " + height + "px;'> " + message + " </div>";
      $('body').prepend("<div id='notification-bar' style='display:none; width:100%; height:" + height + "px; background-color: " + bgColor + "; position: fixed; z-index: 100; color: " + txtColor + ";border-bottom: 1px solid " + txtColor + ";'>" + HTMLmessage + "</div>");
  }
  /*animate the bar*/
  $('#notification-bar').slideDown(function() {
      setTimeout(function() {
          $('#notification-bar').slideUp(function() {});
      }, duration);
  });
}
function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}