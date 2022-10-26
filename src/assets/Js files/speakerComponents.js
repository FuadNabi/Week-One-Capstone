export default (speakersData) => `
  <section class="speaker">
    <div class="speaker-img-background">
    <img class="speaker-img" src="${speakersData.speakerImg}" alt="${speakersData.name}'s image">
    </div>
    <div class="speaker-info">
      <h3 class="speaker-name">${speakersData.name}</h3>
      <em>${speakersData.position},</em>
      <hr>
      <p class="speakers-p">${speakersData.bio}</p>
    </div>
  </section>
  `;