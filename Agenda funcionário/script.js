document.querySelectorAll('.event').forEach(event => {
  event.addEventListener('click', function () {
    const modal = document.getElementById('eventModal');
    const eventTitle = this.getAttribute('data-title'); 
    const eventDate = this.getAttribute('data-date');   
    const eventLocation = this.getAttribute('data-location'); 
    const eventPhotos = this.querySelector('.photos').innerHTML; 

    // Preenchendo os campos do modal
    document.getElementById('eventTitle').innerText = eventTitle;
    document.getElementById('eventDetails').innerText = "Detalhes do evento: " + eventTitle;
    document.getElementById('eventDate').innerText = eventDate;
    document.getElementById('eventLocation').innerText = eventLocation;
    document.getElementById('eventPhotos').innerHTML = eventPhotos;

    modal.style.display = 'block';
  });
});

// Fechar o modal 
document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('eventModal').style.display = 'none';
});


window.onclick = function (event) {
  const modal = document.getElementById('eventModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

  