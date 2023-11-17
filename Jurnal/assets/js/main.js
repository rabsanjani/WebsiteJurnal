$(function(){
    $(document).scroll(function(){
        var $nav = $nav(".navbar");
        if ($(this).scrollTop() > $nav.height()) {
            alert('Terjadi Scrolling Lebih Tinggi')
        } else {
            alert('Scroll Turun')
        }

    });
});