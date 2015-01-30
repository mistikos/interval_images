$(document).ready(function(){

  var images = [
    'http://40.media.tumblr.com/b829b30e0023504e20bfb895a8d4d1d1/tumblr_nhpc8naQcg1ta0hnbo1_1280.jpg',
    'http://41.media.tumblr.com/e1273a9cf3e25a5f93584f12cffdc852/tumblr_nhpbyqDPV81ta0hnbo1_1280.jpg',
    'http://40.media.tumblr.com/3ab447a3c9d4e08fdb2095c3e5083bb9/tumblr_nhp8giOJk51ta0hnbo1_1280.jpg',
    'http://41.media.tumblr.com/e8636afc5b630a531d9b29f5f8a2158c/tumblr_nhp88fezBN1ta0hnbo1_1280.jpg',
    'http://40.media.tumblr.com/8ec3ea4d5dcc1458f951f65cded89b1f/tumblr_ngmwdybz7r1ta0hnbo1_1280.jpg',
    'http://40.media.tumblr.com/5edb56c586b868b7fdd763aabf19dfe5/tumblr_ngmuvhttC41ta0hnbo1_1280.jpg',
    'http://40.media.tumblr.com/698f59f52a99601c26a8581341ac126f/tumblr_ngmtqdB8o91ta0hnbo1_1280.jpg',
    'http://40.media.tumblr.com/0aae01075b3293f486f1923e04569fe5/tumblr_ngmv3azclz1ta0hnbo1_1280.jpg',
    'http://36.media.tumblr.com/d48d7899615cf0609792531372935bb1/tumblr_nfu1f0EaSh1ta0hnbo1_1280.jpg',
    'http://41.media.tumblr.com/fd71490d7db24b9b92450d0443b5ad47/tumblr_nfty4o99k61ta0hnbo1_1280.jpg'
  ];

  var index = 0;

  var load_image = function(){
    index = Math.floor((Math.random() * images.length));

    $('#wrapper').css({'background-image': "url(" + images[index] + ")"}).hide().fadeIn('slow');
    console.log(index)
  }

  load_image();

  setInterval(function(){
    load_image()
  }, 3000);

})
