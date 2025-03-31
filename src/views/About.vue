<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Vicky Voinova</strong>, a Software Developer with 7+ years of experience in different fields, including Game Development and Digital Twins.<br/>
      <br/>
        I enjoy working on tooling, UI and interactive components, as well as discussing code architecture with fellow developers!
      </div>

      <div style="margin-top: 20px;">I've worked on various games and non-gaming <router-link to="/projects">projects</router-link>. You can see my up to date skillset summary <router-link to="/resume">here</router-link> as I continue to grow and learn more things!</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a Software Developer, and I am also open to entry-level positions in the AI field. You can reach me at <a href="mailto:vicky.voin@gmail.com">vicky.voin@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar_circle.png" alt="Profile Picture" class="avatar" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  text-align: center;
}

.avatar {
  max-height: 256px;
  aspect-ratio: auto;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>