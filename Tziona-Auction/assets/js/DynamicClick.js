//user-profile stay active when click
window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    for(let i=0; i <tab_switchers.length; i++){
      const tab_switcher = tab_switchers[i];
      const page_id = tab_switcher.dataset.tab;

      tab_switcher.addEventListener('click', () =>{
        document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
        tab_switcher.parentNode.classList.add('is-active');

        SwitchPage(page_id);
      });
    }
  }
  function SwitchPage(page_id){
      const current_page = document.querySelector('.pages .page.is-active');
      current_page.classList.remove('is-active');

      const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
      next_page.classList.add('is-active');
  }

  window.onscroll = () => {
    const scrolldownprofile = document.querySelector(".action .menu.active");


    scrolldownprofile.classList.remove("active");

  };

  const togglemenu = document.querySelector(".menu");
  const notifMenu = document.querySelector(".notifi-box");
  var box  = document.getElementById('box');
  var down = false;

  function toggleMenu(){
    togglemenu.classList.toggle("active");
   notifMenu.classList.remove("active");

  }

  function toggleNotifi(){
    notifMenu.classList.toggle("active");

    if (down) {
      togglemenu.classList.remove("active");
    }else {
      box.style.height  = '300px';
      box.style.opacity = 1;
      down = true;

    }

  }