<template>
  <div>
    <h1>Projects</h1>

    <div style="margin-bottom: 30px;">
      The following are some applications and games I've made or contributed to.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <!-- <div style="margin-top: 20px;">
      There is more to see on <a target="_blank" href="https://someexternalwebsite.com">some external website</a>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import projectsData from "@/data/ProjectsData.ts";

export default Vue.extend({
  name: "Projects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: projectsData,
    };
  },
});
</script>
