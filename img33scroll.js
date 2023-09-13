    window.addEventListener('scroll', function () {
        var scrollPercent = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        var imageOpacity = 1 - scrollPercent;
        document.querySelector('.img33').style.opacity = imageOpacity;
           });