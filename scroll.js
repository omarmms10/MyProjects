    window.addEventListener('scroll', function () {
        var scrollPercent = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        var imageOpacity = 1 - scrollPercent;
        document.querySelector('.background-image').style.opacity = imageOpacity;

        // Adjust the z-index of img1 and img2 when the background image vanishes
        if (imageOpacity <= 0) {
            document.querySelector('.img1').style.zIndex = '1';
            document.querySelector('.img2').style.zIndex = '1';
        } else {
            document.querySelector('.img1').style.zIndex = '2';
            document.querySelector('.img2').style.zIndex = '2';
        }
       
        var lineOpacity = 1 - 2 * scrollPercent;
        // Double the speed of the line's disappearance
        document.querySelector('.vertical-line').style.opacity = lineOpacity;
    });