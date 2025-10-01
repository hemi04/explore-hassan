// Mobile nav toggle
document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.getElementById('nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      const isOpen=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(isOpen));
    });
  }

  // Simple lightbox
  const lightboxBackdrop=document.querySelector('.lightbox-backdrop');
  const galleryImages=document.querySelectorAll('[data-lightbox]');
  if(lightboxBackdrop){
    const lightboxImg=lightboxBackdrop.querySelector('img');
    const close=()=>lightboxBackdrop.classList.remove('active');
    lightboxBackdrop.addEventListener('click',e=>{ if(e.target===lightboxBackdrop) close(); });
    document.addEventListener('keydown',e=>{ if(e.key==='Escape') close(); });
    galleryImages.forEach(img=>{
      img.addEventListener('click',()=>{
        if(lightboxImg){ lightboxImg.src=img.getAttribute('data-lightbox')||img.src; }
        lightboxBackdrop.classList.add('active');
      });
    });
  }
});


