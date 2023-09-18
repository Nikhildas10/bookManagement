var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function searchSubmit() {
    const bSearch = document.getElementById('searchbar').value; 
    if (localStorage.getItem(bSearch)) {
        const finalre = JSON.parse(localStorage.getItem(bSearch));
        const result = document.getElementById('result'); 
        result.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${finalre.booki}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">book name:${finalre.bookn}</p>
                    <p class="card-text">book author:${finalre.booka}</p>
                </div>
            </div>`;
    } else {
        alert("Book not found");
    }
}


function bookAdd(){
  bookn=bname.value
  bookb=bauthor.value
  booki=bimage.value
  if(bookn in localStorage){
      alert("BOOK ALREADY PRESENT")
  }
  else{
      book={bookn,bookb,booki}
      localStorage.setItem(bookn,JSON.stringify(book))
      alert("success")
  }
 }
function back2home(){
window.location='index.html'
 }