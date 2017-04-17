document.addEventListener('DOMContentLoaded', () => {

  const dest = document.getElementById('destinations'),
    resort = document.getElementById('resorts'),
    lp = document.getElementById('lp'),
    attractions = document.getElementById('attractions'),
    burgerInfos = document.getElementById('burger-infos'),
    infoDiv = document.getElementById('info');

    const fade = () => {
      this.classList.remove('bounceInLeft');
      this.classList.add('bounceOutLeft');
    };
  // Toggle Destination
  dest.addEventListener('click', () => {
    resort.emit('spiner');
  });
  resort.addEventListener('click', () => {
    resort.emit('shrink');
  });
  // Lien Lonely Planet
  lp.addEventListener('click', () => {
    window.location.assign("https://www.lonelyplanet.com/fiji");
  });
  //Fade in attractions infos
  attractions.addEventListener('click', () => {
    infoDiv.classList.remove('hidden');
    infoDiv.classList.remove('bounceOutLeft');
    infoDiv.classList.add('bounceInLeft');
  });
  //
  burgerInfos.addEventListener('click', () => {
    infoDiv.fade();
  });

});
