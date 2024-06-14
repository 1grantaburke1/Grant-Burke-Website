document.write(`

<nav class="navbar">
<a href="https://grantaburke.com/" class="logo">
      <img alt="" width="90">
      Grant Burke
</a>
<ul class=navigation>
      <li><a href="https://grantaburke.com/"><i class="fa-solid fa-house"></i> Home</a></li>
      <!-- <li><a href="./my_story">My Story</a></li> -->
      <li><a href="./work_experience"><i class="fa-solid fa-briefcase"></i> Work Experience</a></li>
      <li><a href="./my_projects"><i class="fa-solid fa-code"></i> My Projects</a></li>
      <li><a href="./FAQs"><i class="fa-solid fa-circle-question"></i> FAQs</a></li>
      <li><a href="./contact_information"><i class="fa-solid fa-phone"></i> Contact Me</a></li>
</ul>
</nav>
<button class="toggle_nav">
<p>&uarr;</p>
<div class="hamburger_btn">
      <hr>
      <hr>
      <hr>
</div>
</button>

`);

//Add empty space
if (this.innerWidth > 974) {
    document.write(`
      <div class="empty"></div>
      `);
}
