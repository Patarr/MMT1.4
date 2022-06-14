//Browse By Location
document.querySelector('#destBtn').onclick = function(){
    document.querySelector('.dropdownDest').style.display = "block";
};
//Browse By Type 
document.querySelector('#tourBtn').onclick = function(){
    document.querySelector('.dropdownTour').style.display = "block";
};
//Starting Time
document.querySelector('#timeBtn').onclick = function(){
  document.querySelector('#timeDropdown').style.display = "block";
};
//Find your Guide
document.querySelector('#findGuideBox button').onclick = function(){
  document.querySelector('#foundGuide').style.display = "block";
  document.querySelector('#background').style.display = "block";
  //Slick Slider Guide Box
  $('.guideSlickSlide').slick({
    dots: false,
    arrows: false,
    infinite: true,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
};
document.querySelector('#background').onclick = function(){
  document.querySelector('#background').style.display = "none"
  document.querySelector('#foundGuide').style.display = "none";
  $('.guideSlickSlide').slick('unslick');
}

//Buiten dropdown klikken sluit de dropdown menu's
window.addEventListener('mouseup', function(event){

    let destBox = document.querySelector('.dropdownDest');
    let tourBox = document.querySelector('.dropdownTour');
    let timeBox = document.querySelector('#timeDropdown');

    if(event.target != destBox && event.target.parentNode != destBox){
        destBox.style.display = 'none';
    }
    if(event.target != tourBox && event.target.parentNode != tourBox){
        tourBox.style.display = 'none';
    }
    if(event.target != timeBox && event.target.parentNode != timeBox){
      timeBox.style.display = 'none';
    }
});

//Get value from dropdown list Destinations
document.querySelectorAll('.dropdownDest').forEach(link =>{
    link.addEventListener('click', (e) => {
        let prevVal = 'maastricht';
        let val = e.target.textContent;
        document.querySelector('.dropdownDest').style.display = 'none';
        //Change DOM with value
        document.querySelector('#mainHead h1').innerHTML = val;
        document.querySelector('#mainSlider h3').innerHTML = val;
        document.querySelector('#bookGuide h2 span').innerHTML = val;

      
        document.querySelector('#mainHead').classList.remove(prevVal)
        document.querySelector('#mainHead').classList.add(val)

        prevVal = val;
    });
});

//Get value from Starting Time list
document.querySelectorAll('#timeDropdown').forEach(link =>{
  link.addEventListener('click', (e) => {
      let val = e.target.textContent;
      document.querySelector('#timeDropdown').style.display = 'none';
      //Change DOM with value
      event.preventDefault();
      document.querySelector('#timeBox h2').innerHTML = val;
  });
});


//DatePicker
$('#datepicker').datepicker({
  dateFormat: 'D, d M'
});








//Slick Slider
$('.responsiveSlider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    draggable: true,
    speed: 300,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });





  //Video Player

  //Fast forward by 10sec
  document.querySelector('#videoFastForward').onclick = function(){
    videoScreen.currentTime += 10;
    console.log(videoScreen.currentTime)
  };






let source = $('#videoScreen source').attr("src")
let currentSource = 'assets/video/city1.mp4';
let prevSource = document.querySelector('#videoBtn1 div')

document.querySelector('#videoBtn1').onclick = function(){
currentSource = "assets/video/city1.mp4";

  //Als de src hetzelfde is en dus verder wilt spelen
  if(source == currentSource){
    if(videoScreen.paused == true){

      videoScreen.play();
      document.querySelector('#videoBtn1 div').classList.remove('play')
      document.querySelector('#videoBtn1 div').classList.add('pause')

    }else{
      videoScreen.pause();
      document.querySelector('#videoBtn1 div').classList.remove('pause')
      document.querySelector('#videoBtn1 div').classList.add('play')
    }
    }else{
      //Als de src niet hetzelfde is en dus moet omzetten
      videoScreen.pause();
      prevSource.classList.remove('pause')
      prevSource.classList.add('play')

      prevSource = document.querySelector('#videoBtn1 div') 

      $('#videoScreen source').attr("src" , currentSource);
      videoScreen.load()
      videoScreen.currentTime = 0;
      videoScreen.play()
      document.querySelector('#videoBtn1 div').classList.remove('play')
      document.querySelector('#videoBtn1 div').classList.add('pause')

      source = $('#videoScreen source').attr("src")
  }
}



  document.querySelector('#videoBtn2').onclick = function(){
    currentSource = 'assets/video/city2.mp4';
    console.log(currentSource)

    //Als de src hetzelfde is en dus verder wilt spelen
  if(source == currentSource){
    if(videoScreen.paused == true){

      videoScreen.play();
      document.querySelector('#videoBtn2 div').classList.remove('play')
      document.querySelector('#videoBtn2 div').classList.add('pause')

    }else{
      videoScreen.pause();
      document.querySelector('#videoBtn2 div').classList.remove('pause')
      document.querySelector('#videoBtn2 div').classList.add('play')
    }
    }else{
      //Als de src niet hetzelfde is en dus moet omzetten
      videoScreen.pause();
      prevSource.classList.remove('pause')
      prevSource.classList.add('play')

      prevSource = document.querySelector('#videoBtn2 div') 

      $('#videoScreen source').attr("src" , currentSource);
      videoScreen.load()
      videoScreen.currentTime = 0;
      videoScreen.play()
      document.querySelector('#videoBtn2 div').classList.remove('play')
      document.querySelector('#videoBtn2 div').classList.add('pause')

      source = $('#videoScreen source').attr("src")
  }
  }




  document.querySelector('#videoBtn3').onclick = function(){
    currentSource = 'assets/video/city3.mp4';
    console.log(currentSource)
    //Als de src hetzelfde is en dus verder wilt spelen
  if(source == currentSource){
    if(videoScreen.paused == true){

      videoScreen.play();
      document.querySelector('#videoBtn3 div').classList.remove('play')
      document.querySelector('#videoBtn3 div').classList.add('pause')

    }else{
      videoScreen.pause();
      document.querySelector('#videoBtn3 div').classList.remove('pause')
      document.querySelector('#videoBtn3 div').classList.add('play')
    }
    }else{
      //Als de src niet hetzelfde is en dus moet omzetten
      videoScreen.pause();
      prevSource.classList.remove('pause')
      prevSource.classList.add('play')

      prevSource = document.querySelector('#videoBtn3 div') 

      $('#videoScreen source').attr("src" , currentSource);
      videoScreen.load()
      videoScreen.currentTime = 0;
      videoScreen.play()
      document.querySelector('#videoBtn3 div').classList.remove('play')
      document.querySelector('#videoBtn3 div').classList.add('pause')

      source = $('#videoScreen source').attr("src")
  }
  }



  document.querySelector('#videoBtn4').onclick = function(){
    currentSource = 'assets/video/city4.mp4';
    console.log(currentSource)

    //Als de src hetzelfde is en dus verder wilt spelen
  if(source == currentSource){
    if(videoScreen.paused == true){

      videoScreen.play();
      document.querySelector('#videoBtn4 div').classList.remove('play')
      document.querySelector('#videoBtn4 div').classList.add('pause')

    }else{
      videoScreen.pause();
      document.querySelector('#videoBtn4 div').classList.remove('pause')
      document.querySelector('#videoBtn4 div').classList.add('play')
    }
    }else{
      //Als de src niet hetzelfde is en dus moet omzetten
      videoScreen.pause();
      prevSource.classList.remove('pause')
      prevSource.classList.add('play')

      prevSource = document.querySelector('#videoBtn4 div') 

      $('#videoScreen source').attr("src" , currentSource);
      videoScreen.load()
      videoScreen.currentTime = 0;
      videoScreen.play()
      document.querySelector('#videoBtn4 div').classList.remove('play')
      document.querySelector('#videoBtn4 div').classList.add('pause')

      source = $('#videoScreen source').attr("src")
  }
  }



  
  // source.setAttribute('src', 'assets/video/city2.mp4');
  // source.setAttribute('type', 'video/mp4');

  //console.log(source)
  
  // video.appendChild(source);
  // video.play();
  //console.log({
  //  src: source.getAttribute('src'),
    // type: source.getAttribute('type'),
  //});
  
  // setTimeout(function() {
  //   video.pause();
  
  //   source.setAttribute('src', 'http://techslides.com/demos/sample-videos/small.webm');
  //   source.setAttribute('type', 'video/webm');
  
  //   video.load();
  //   video.play();
  //   console.log({
  //     src: source.getAttribute('src'),
  //     type: source.getAttribute('type'),
  //   });
  // }, 3000);
