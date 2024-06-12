masonry();
$(function () {
    offCanvas();
    lightbox();
    carousels();
    utils();
    highlightCurrentPage();
    makeImagesResponsive();
});
function highlightCurrentPage() {
  $("a[href='" + location.href + "']").parent().addClass("active");
}
function makeImagesResponsive() {
    $("img").addClass("img-responsive");
}
/* =========================================
 *  carousels
 *  =======================================*/
function carousels() {
    $('#main-slider').owlCarousel({
	navigation: true, // Show next and prev buttons
	slideSpeed: 300,
	paginationSpeed: 400,
	autoPlay: true,
	stopOnHover: true,
	singleItem: true,
	afterInit: ''
    });
}
/* =========================================
 *  masonry
 *  =======================================*/
function masonry() {
    var $grid = $('.grid').masonry({
        itemSelector: ".masonry-item"
    });
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
}
/* =========================================
 *  Off-canvas menu
 *  =======================================*/
function offCanvas() {
    $(document).ready(function () {
        $('[data-toggle="offcanvas"]').click(function () {
            $('.row-offcanvas').toggleClass('active')
        });
    });
}
/* =========================================
 *  lightbox
 *  =======================================*/
function lightbox() {
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
}
/* =========================================
 *  utils
 *  =======================================*/
function utils() {
    /* tooltips */
    $('[data-toggle="tooltip"]').tooltip();
    /* click on the box activates the radio */
    $('#checkout').on('click', '.box.shipping-method, .box.payment-method', function (e) {
        var radio = $(this).find(':radio');
        radio.prop('checked', true);
    });
    /* click on the box activates the link in it */
    $('.box.clickable').on('click', function (e) {
        window.location = $(this).find('a').attr('href');
    });
    /* external links in new window*/
    $('.external').on('click', function (e) {
        e.preventDefault();
        window.open($(this).attr("href"));
    });
    /* animated scrolling */
    $('.scroll-to').click(function (event) {
        event.preventDefault();
        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];
        $('body').scrollTo($('#' + trgt), 800, {offset: -80});
    });
}
/* product detail gallery */
function productDetailGallery(confDetailSwitch) {
    $('.thumb:first').addClass('active');
    timer = setInterval(autoSwitch, confDetailSwitch);
    $(".thumb").click(function (e) {
        switchImage($(this));
        clearInterval(timer);
        timer = setInterval(autoSwitch, confDetailSwitch);
        e.preventDefault();
    }
    );
    $('#mainImage').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(autoSwitch, confDetailSwitch);
    });
    function autoSwitch() {
        var nextThumb = $('.thumb.active').closest('div').next('div').find('.thumb');
        if (nextThumb.length == 0) {
            nextThumb = $('.thumb:first');
        }
        switchImage(nextThumb);
    }
    function switchImage(thumb) {
        $('.thumb').removeClass('active');
        var bigUrl = thumb.attr('href');
        thumb.addClass('active');
        $('#mainImage img').attr('src', bigUrl);
    }
}
/* product detail sizes */
function productDetailSizes() {
    $('.sizes a').click(function (e) {
        e.preventDefault();
        $('.sizes a').removeClass('active');
        $('.size-input').prop('checked', false);
        $(this).addClass('active');
        $(this).next('input').prop('checked', true);
    });
}
$.fn.alignElementsSameHeight = function () {
    $('.same-height-row').each(function () {
        var maxHeight = 0;
        var children = $(this).find('.same-height');
        children.height('auto');
        if ($(window).width() > 768) {
            children.each(function () {
                if ($(this).innerHeight() > maxHeight) {
                    maxHeight = $(this).innerHeight();
                }
            });
            children.innerHeight(maxHeight);
        }
        maxHeight = 0;
        children = $(this).find('.same-height-always');
        children.height('auto');
        children.each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).innerHeight();
            }
        });
        children.innerHeight(maxHeight);
    });
}
$(window).load(function () {
    windowWidth = $(window).width();
    $(this).alignElementsSameHeight();
});
$(window).resize(function () {
    newWindowWidth = $(window).width();
    if (windowWidth !== newWindowWidth) {
        setTimeout(function () {
            $(this).alignElementsSameHeight();
        }, 205);
        windowWidth = newWindowWidth;
    }
});

$(document).ready(function() {
	$('a.timeline-element').on('click',  onTimelineWorkClicked);
	$('a.box-masonry-image').on('click',  onWorkPageWorkClicked);
});

function onTimelineWorkClicked(event){
	event.preventDefault();
	var href = $(this).attr('href'); // store the href attr
	var clickedTimelineElementTitle = $(this).find('.timeline-title').text();
	sessionStorage.setItem('clickedTimelineElementTitle', clickedTimelineElementTitle);
	window.location.href = href; // redirect with stored href
}

function onWorkPageWorkClicked(event){
	event.preventDefault();
	var href = $(this).attr('href'); // store the href attr
	var clickedTimelineElementTitle = $(this).find('.work-title').text();
	sessionStorage.setItem('clickedTimelineElementTitle', clickedTimelineElementTitle);
	window.location.href = href; // redirect with stored href
}

$(document).ready(function() {
    var clickedTimelineElementTitle = sessionStorage.getItem('clickedTimelineElementTitle');
	console.log(clickedTimelineElementTitle);
	var timelineElements = $(this).find('.timeline-element');
	
	var timelineArrow = $(this).find('.timeline-arrow');
	
	for(var i=0; i < timelineElements.length; i++){ 
		var timelineElement = timelineElements[i];
		var timelineElementTitle = $(timelineElement).find('.timeline-title').text();
		if(timelineElementTitle.replace(/ /g,'').toUpperCase() == clickedTimelineElementTitle.replace(/ /g,'').toUpperCase()){
			$(timelineElement).addClass("active-timeline-element");
			var currentMarginTop = parseInt($(timelineArrow).css("margin").split(" ")[0]);
			var timelineElementContentHeight = $(timelineElement).find(".timeline-element-content").height();
			var timelineElementContentMarginBottom = parseInt($(timelineElement).find(".timeline-element-content").css("margin-bottom"));

			var timelineHeight = timelineElements.length*timelineElementContentHeight + (timelineElements.length)*timelineElementContentMarginBottom;
			var marginTop = currentMarginTop + i*(timelineHeight/timelineElements.length);
			$(timelineArrow).css({"margin-top":marginTop});
		}
	}
});

$(document).ready(function() {
	var path = window.location.href;
	if(path.includes("work")){
		var a= $(document).find('.sidebar-menu li:nth-child(1)');
		a.addClass('active');
	}
	
	if(path.includes("projects")){
		var a= $(document).find('.sidebar-menu li:nth-child(2)');
		a.addClass('active');
	}
});

$(document).ready(function() {
	$('.video, .desmos').each(function(){
		var width = parseInt($(this).css("width"));
		var height = width / (16/9);
		$(this).css({"height":height});
	
	});
});