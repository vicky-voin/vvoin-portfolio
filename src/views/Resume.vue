<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Vicky Voinova</strong>, a Software Developer with 7+ years of experience currently located in Ottawa, Canada.
      <br /> Having graduated from a Game Development program, I have worked as a Game Developer for a number of years, as well as a Software Developer making developer tools and Digital Twin projects using primarily Unity engine and C#.
      <br />
      <br /> While I am most proficient with C#, I also have knowledge of C++, Python and Objective-C and I am open to learning and using new technologies!
      <br />I love working in smaller teams and chatting with other developers about code architecture, but I am not opposed to working independently.
      <br />
      <br />Right now <strong>I'm looking for a job as a Game or Software Developer</strong>! If you think you have an opportunity that I migth be interested in, feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Resume_VickyVoinova.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Vicky" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Capgemini - Software Engineer</h3>
      <h4>2024-2025</h4>

      <div>Developing feature packages to accelerate the development of Digital Twin projects for various industries</div>

      <div class="tech-stack">Unity, C#, UXML/USS, UPM, Cinemachine, Unity Test Framework</div>

      <h3>Unity Technologies - Software Developer, Accelerate Solutions</h3>
      <h4>2022-2024</h4>

      <div>Working on multiple Digital Twin projects for clients in various industries, including large companies
        in the Oil and Gas field</div>
      <div>Profiling and optimizing client projects for mobile platforms</div>

      <div class="tech-stack">Unity, C#, UXML/USS, NGUI, Cinemachine, new Input System, Unity Test Framework</div>

      <h3>Unity Technologies - Software Developer, Unity Templates</h3>
      <h4>2020-2022</h4>

      <div>Developing and maintaining a wide range of templates for Unity Editor</div>

      <div class="tech-stack">Unity, C#, UXML/USS, UPM, Python, CI/CD</div>

      <h3>SnowedIn - Software Engineer</h3>
      <h4>2019-2020</h4>

      <div>Debugging issues related to matchmaking and online services for Madden 21, including console-specific problems</div>

      <div class="tech-stack">C++, Xbox One, PS4</div>

      <h3>Kindly Beast - Developer</h3>
      <h4>2019 (August) - 2019 (October)</h4>

      <div>Collaborating with a team backend developers to create a suite of unit tests using Unity Web
        Requests for the player profile system</div>

      <div class="tech-stack">Unity, C#, Unity Web Requests, Unity Test Framework</div>

      <h3>Iversoft Solutions - Game Developer</h3>
      <h4>2016 - 2019</h4>

      <div>Maintaining an existing portfolio of mobile games</div>
      <div>Developing small mobile games and
        client projects from scratch and publishing them to the app stores</div>

      <div class="tech-stack">Unity, C#, NGUI, Unity Web Requests, AR, Objective-C</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <div class="skill">C#</div>
        <div class="skill">C++</div>
        <div class="skill">Python</div>
        <div class="skill">Objective-C</div>
      </div>

      <div class="skill-set">
        <h3>Gamedev</h3>
        <div class="skill">Unity</div>
        <div class="skill">Unreal Engine</div>
        <div class="skill">3D Modelling</div>
        <div class="skill">Photoshop</div>
      </div>

      <div class="skill-set">
        <h3>Other</h3>
        <div class="skill">Git</div>
        <div class="skill">Perforce</div>
        <div class="skill">AR</div>
        <div class="skill">Flexbox</div>
        <div class="skill">Nunit</div>
        <div class="skill">CI/CD</div>
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Algonquin College - 2016</h3>
      <h4>Game Development</h4>

      <h2>Languages</h2>

      <h4>English</h4>

      <h4>Russian</h4>


      <h2>Cool facts about me!</h2>
      <div>
        <h3>I ❤️ RPGs of all kinds</h3>
        <div>I am a huge fan of RPGs in both the tabletop (DnD, PF2e) and the videogame format! </div>

        <h3>I 🧡 Biking</h3>
        <div>Nothing better than a summer bike ride across my neighbourhood!</div>

        <h3>I 💛 Drawing</h3>
        <div>I have been drawing since I was a child and while I may not be the greatest artist, I quite enjoy scribbling on paper!</div>

        <h3>I 💚 Cats</h3>
        <div>I have two cats and a crazy amount of cat-themed things around my house.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
//import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
   // SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set
{
  float: left;
  padding-right: 30px;
  max-width: 230px!important;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.skill
{
  float: left;
  border: 1px solid hsla(0,0%,86.3%,.44);
  padding: 2px 10px;
  margin: 5px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>