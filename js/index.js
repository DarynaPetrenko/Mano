
var contacts = document.getElementById('contacts');
var social_icons_list = document.getElementById('social-icons');

contacts.addEventListener('click', addClass); 
function addClass(){
    social_icons_list.classList.add("move-social");
}


var about = document.getElementById('about');
var works = document.getElementById('works');

about.addEventListener('click', removeClass);
works.addEventListener('click', removeClass); 
function removeClass(){
    social_icons_list.classList.remove("move-social");
}




const slides = [
  {id: 1, photo: '../mano/img/slider/photo1.png', description: `Lacus, praesent tristique in nulla egestas. Massa, tortor scelerisque tortor cras nisl sed purus. 
  Tincidunt mauris volutpat mattis praesent. Neque pellentesque nisi ultrices malesuada justo lorem 
  suspendisse a justo. Curabitur mattis mauris, nec viverra orci, purus eget fermentum sed. Quam euismod 
  enim malesuada sit gravida leo, id commodo molestie. Vitae porttitor porttitor quam egestas eu non tortor. 
  Auctor ullamcorper lacus nisi, consectetur etiam sed augue. Luctus consequat nibh ullamcorper a magna 
  tristique tincidunt mauris tempor. Massa tempor augue viverra aliquam lectus sed mauris.
  Dui laoreet dictumst aliquet urna, hendrerit enim nulla lectus feugiat. Fermentum phasellus lectus 
  consectetur aliquam, turpis facilisi non mauris lectus. Erat enim, nulla eu massa id lectus vulputate. 
  Amet nullam cursus diam, tempor non sit vel. Imperdiet 
  justo, vitae nisl porttitor turpis urna lobortis. Elementum, enim id sed at viverra turpis nibh dictumst.
  Curabitur urna, elementum, id est quisque donec. Varius amet sed et lectus sed placerat tincidunt nulla. 
  Ligula pellentesque dolor curabitur diam viverra. Amet dictumst aenean nisi, id at. Lectus faucibus amet tellus quam elit. 
  Dolor arcu, bibendum diam faucibus placerat sit. Ante id eu, tempor facilisis magna tortor. Praesent ullamcorper morbi nunc 
  commodo, id non eu, nam. Sem pellentesque quam mi id sit porttitor enim ullamcorper. Pretium eu, elit et, nunc nullam 
  sagittis massa. In non viverra pulvinar nulla. Pulvinar vitae habitasse euismod amet bibendum eget. Varius ac semper ac dui 
  ornare leo ipsum sit amet. Sit vulputate gravida in pellentesque sapien ut posuere. Donec pulvinar gravida sed scelerisque.
  Tortor, aliquam tellus elit sagittis, nulla feugiat tellus. Volutpat bibendum eu, duis ullamcorper erat ut arcu tincidunt. 
  Sed pharetra elementum, risus nisl hendrerit nulla vitae mattis. Porttitor ullamcorper vel dui rhoncus)`},


 {id: 2, photo: '../mano/img/slider/photo2.png', description: `Lacus, praesent tristique in nulla egestas. Massa, tortor scelerisque tortor cras nisl sed purus. 
  Tincidunt mauris volutpat mattis praesent. Neque pellentesque nisi ultrices malesuada justo lorem 
  suspendisse a justo. Curabitur mattis mauris, nec viverra orci, purus eget fermentum sed. Quam euismod 
  enim malesuada sit gravida leo, id commodo molestie. Vitae porttitor porttitor quam egestas eu non tortor. 
  Auctor ullamcorper lacus nisi, consectetur etiam sed augue. Luctus consequat nibh ullamcorper a magna 
  tristique tincidunt mauris tempor. Massa tempor augue viverra aliquam lectus sed mauris.
  Dui laoreet dictumst aliquet urna, hendrerit enim nulla lectus feugiat. Fermentum phasellus lectus 
  consectetur aliquam, turpis facilisi non mauris lectus. Erat enim, nulla eu massa id lectus vulputate. 
  Amet nullam cursus diam, tempor non sit vel. Imperdiet 
  justo, vitae nisl porttitor turpis urna lobortis. Elementum, enim id sed at viverra turpis nibh dictumst.
  Curabitur urna, elementum, id est quisque donec. Varius amet sed et lectus sed placerat tincidunt nulla. 
  Ligula pellentesque dolor curabitur diam viverra. Amet dictumst aenean nisi, id at. Lectus faucibus amet tellus quam elit. 
  Dolor arcu, bibendum diam faucibus placerat sit. Ante id eu, tempor facilisis magna tortor. Praesent ullamcorper morbi nunc 
  commodo, id non eu, nam. Sem pellentesque quam mi id sit porttitor enim ullamcorper. Pretium eu, elit et, nunc nullam 
  sagittis massa. In non viverra pulvinar nulla. Pulvinar vitae habitasse euismod amet bibendum eget. Varius ac semper ac dui 
  ornare leo ipsum sit amet. Sit vulputate gravida in pellentesque sapien ut posuere. Donec pulvinar gravida sed scelerisque.
  Tortor, aliquam tellus elit sagittis, nulla feugiat tellus. Volutpat bibendum eu, duis ullamcorper erat ut arcu tincidunt. 
  Sed pharetra elementum, risus nisl hendrerit nulla vitae mattis. Porttitor ullamcorper vel dui rhoncus)`},

  {id: 3, photo: '../mano/img/slider/photo3.png', description: `Lacus, praesent tristique in nulla egestas. Massa, tortor scelerisque tortor cras nisl sed purus. 
  Tincidunt mauris volutpat mattis praesent. Neque pellentesque nisi ultrices malesuada justo lorem 
  suspendisse a justo. Curabitur mattis mauris, nec viverra orci, purus eget fermentum sed. Quam euismod 
  enim malesuada sit gravida leo, id commodo molestie. Vitae porttitor porttitor quam egestas eu non tortor. 
  Auctor ullamcorper lacus nisi, consectetur etiam sed augue. Luctus consequat nibh ullamcorper a magna 
  tristique tincidunt mauris tempor. Massa tempor augue viverra aliquam lectus sed mauris.
  Dui laoreet dictumst aliquet urna, hendrerit enim nulla lectus feugiat. Fermentum phasellus lectus 
  consectetur aliquam, turpis facilisi non mauris lectus. Erat enim, nulla eu massa id lectus vulputate. 
  Amet nullam cursus diam, tempor non sit vel. Imperdiet 
  justo, vitae nisl porttitor turpis urna lobortis. Elementum, enim id sed at viverra turpis nibh dictumst.
  Curabitur urna, elementum, id est quisque donec. Varius amet sed et lectus sed placerat tincidunt nulla. 
  Ligula pellentesque dolor curabitur diam viverra. Amet dictumst aenean nisi, id at. Lectus faucibus amet tellus quam elit. 
  Dolor arcu, bibendum diam faucibus placerat sit. Ante id eu, tempor facilisis magna tortor. Praesent ullamcorper morbi nunc 
  commodo, id non eu, nam. Sem pellentesque quam mi id sit porttitor enim ullamcorper. Pretium eu, elit et, nunc nullam 
  sagittis massa. In non viverra pulvinar nulla. Pulvinar vitae habitasse euismod amet bibendum eget. Varius ac semper ac dui 
  ornare leo ipsum sit amet. Sit vulputate gravida in pellentesque sapien ut posuere. Donec pulvinar gravida sed scelerisque.
  Tortor, aliquam tellus elit sagittis, nulla feugiat tellus. Volutpat bibendum eu, duis ullamcorper erat ut arcu tincidunt. 
  Sed pharetra elementum, risus nisl hendrerit nulla vitae mattis. Porttitor ullamcorper vel dui rhoncus)`}];

  slides.forEach(src => {
  const img = document.createElement('img');
  img.src = src.photo;
  img.id = src.id;
  
  const item = document.createElement('li');
  item.className = 'slider-item';
  item.append(img);

  document.getElementById('slider').append(item);

  item.addEventListener('click', function(e){
    let modal_backdrop = document.getElementById('modal-backdrop');
    let modal = document.getElementById('modal');
    let img = document.createElement('img');
    img.id = "image" + src.id;
    modal_backdrop.style.display = 'block';
    img.src = src.photo;
    img.style.width = "100%";
    img.style.height = "300px";
    modal.append(img);
    let desc = document.createElement('p');
    desc.className = 'slider-text';
    desc.id = 'slider-text';
    desc.innerHTML = src.description;
    modal.append(desc);
  })
})


var slide_left = document.getElementById('slider-left'), 
    slide_right = document.getElementById('slider-right'), 
    total_img = document.getElementsByClassName('slider-item'), 
    idx = 0; 
    total_img[idx].classList.add("main-item");
slide_right.addEventListener('click', moveLeft); 
function moveLeft(){
    total_img[idx].classList.remove("main-item"); 
    if (idx ===  total_img.length - 1) { 
        idx = 0; 
        total_img[idx].classList.add("main-item"); 
      }else {
        total_img[++idx].classList.add("main-item"); 
      }
}

slide_left.addEventListener('click', moveRight);
function moveRight(){
    total_img[idx].classList.remove("main-item"); 
    if (idx ===  0) {
        idx  = total_img.length - 1;
        total_img[idx].classList.add("main-item");
      }else {
        total_img[--idx].classList.add("main-item"); 
      }
}






document.getElementById('close').addEventListener('click', function(){
  let modal_backdrop = document.getElementById('modal-backdrop');
  let modal = document.getElementById('modal');
  let less = document.getElementById('less');
  let more = document.getElementById('more');
  modal_backdrop.style.display = 'none';
  modal.innerHTML = "";
  modal.style.height = "520px";
  modal.style.overflow = "hidden";
  less.style.display = "none";
  more.style.display = "block";
  let slider_text = document.getElementById('slider-text');
  slider_text.style.height = "150px";
  slider_text.style.overflow = "hidden";
});

document.getElementById('more').addEventListener('click', function(e){
  let slider_text = document.getElementById('slider-text');
  let modal = document.getElementById('modal');
  let less = document.getElementById('less');
  slider_text.style.height = "500px";
  slider_text.style.overflow = "visible";
  modal.style.height = "680px";
  modal.style.overflow = "visible";
  e.target.style.display = "none";
  less.style.display = "block";
});

document.getElementById('less').addEventListener('click', function(e){
  let slider_text = document.getElementById('slider-text');
  let modal = document.getElementById('modal');
  let more = document.getElementById('more');
  slider_text.style.height = "150px";
  slider_text.style.overflow = "hidden";
  modal.style.height = "520px";
  modal.style.overflow = "hidden";
  e.target.style.display = "none";
  more.style.display = "block";
});
