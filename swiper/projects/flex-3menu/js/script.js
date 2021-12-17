// $(document).ready(function(){
//     $("li.pro a").mouseenter(function(){
//         $("li.pro").animate({flex : 6});
//     }),
//     $("li.pro").mouseleave(function(){
//         $(this).animate({flex : 1});
//     })
// })


var pro = document.getElementById('pro');
var des = document.getElementById('des');
var sns = document.getElementById('sns');

pro.addEventListener('mouseenter', function(){
    $(this).css({'flex' : '5.3', 'transition-duration' : '0.5s'});
});
pro.addEventListener('mouseleave', function(){
    $(this).css({'flex' : '1', 'transition-duration' : '0.5s'});
});

des.addEventListener('mouseenter', function(){
    $(this).css({'flex' : '5.3', 'transition-duration' : '0.5s'});
});
des.addEventListener('mouseleave', function(){
    $(this).css({'flex' : '1', 'transition-duration' : '0.5s'});
});

sns.addEventListener('mouseenter', function(){
    $(this).css({'flex' : '5.3', 'transition-duration' : '0.5s'});
});
sns.addEventListener('mouseleave', function(){
    $(this).css({'flex' : '1', 'transition-duration' : '0.5s'});
});

// var li = document.getElementsByTagName("li");

// li.addEventListener('mouseenter', function(){
//     $(this).css({'flex' : '6', 'transition-duration' : '0.5s'});
// });
// li.addEventListener('mouseleave', function(){
//     $(this).css({'flex' : '1', 'transition-duration' : '0.5s'});
// });