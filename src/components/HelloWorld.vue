<template>
<div>
<h1 ref="Introduction">Introduction</h1>

<p>Building Information Modeling (BIM) is the process of creating and managing 3D building data during its development. BIM is a complex multiphase process that gathers input from team members to model the components and tools that will be used during the construction process to create a unique perspective of the building process.</p>

<p> The 3D process is aimed at achieving savings through collaboration and visualization of building components into an early design process that will dictate changes and modifications to the actual construction process. It is a very powerful tool that when used properly will save money, time and simplify the construction process.</p>

<p> BIM Is Not Only for Architects Over the years, the industry has commercialized BIM towards architectural related professionals, however, the real purpose and benefits of BIM relate to all construction industry professionals. The 3D representation of the building and now used in roads and utilities too and is geared towards all construction professionals, and all of you are responsible for understanding the process and participate in providing input to the software.</p>

<p> BIM makes a reliable digital representation of the building available for design decision making, high-quality construction document production, construction planning, performance predictions, and cost estimates. Not only, that BIM can also be used by the property owners, once the construction process has ended, to carefully monitor how the building is performing and to complete repairs efficiently.</p>

<p>The building information modeling process covers geometry, space, light, geographic information, quantities, and properties of building components. BIM can be used to demonstrate the entire building life cycle, including the processes of construction and facility operation.</p>

<p>Building Information Modeling Applications The BIM application process can be used during design and architecture process creating a clear picture used for better and more integrated designs. The software will be used to foresee problems and coordination between different contractors and as a way to generate construction documents and process that will later be implemented during the physical process. It is ideal when there are many trades executing at the same moment or when schedules are compressed. There are multiple applications for BIM so it can be used by the following groups:</p>

<p>Architecture Sustainability Structures MEP  Construction management Utilities Road construction Scheduling Property management Industry groups are trying to develop one standardized BIM model that can be used to integrate all different types of modeling systems. By doing this, they will facilitate the coordination and communication in the design-construction-operation team under one single platform. The purpose of this movement is to create a single data center, with multiple CAD and specs depending on the discipline that you are working for.</p>

<p>All data will then come together allowing it to be used for take-offs, analysis, coordination and important project milestones. This effort will help standardize the process and will establish a base that can be used during the bidding process so everyone can be judged using some standard guidelines. The BuildingSmart Alliance, a council of the National Institute of Building Sciences, in Washington, D.C., is leading these efforts towards a National BIM Standard.</p>

<p>What Will You Get by Embracing BIM? If you are one of the 60 percent that currently uses BIM technology, you are aware of some of these benefits. However, if you haven't started yet, here are a few reasons why you need to start using BIM in your next construction project.</p>

<p>Provides a way to work concurrently on most aspects of building life cycle process Provides a way to change traditional architectural phases and data sharing Integrates actual construction pieces and parts in the modeling process Can be used as a tool to estimate and complete construction cost forecasting Used to monitor actual building performance data Can be used to collect data on warranty, aging, defects, and installation time Determines whether a temporary construction set up is needed  Can be used to sequencing planning or determining how the phases of a project should be scheduled. Can detect or avoid construction and design issues early in the game preventing change orders and unforeseen conditions BIM process and communication greatly enhanced by reporting, scheduling, and submittals</p>

<el-divider></el-divider>

<h1 ref="Guideline">Guideline</h1>

<p>Building Information Modeling (BIM) is the process of creating and managing 3D building data during its development. BIM is a complex multiphase process that gathers input from team members to model the components and tools that will be used during the construction process to create a unique perspective of the building process.</p>

<p> The 3D process is aimed at achieving savings through collaboration and visualization of building components into an early design process that will dictate changes and modifications to the actual construction process. It is a very powerful tool that when used properly will save money, time and simplify the construction process.</p>

<p> BIM Is Not Only for Architects Over the years, the industry has commercialized BIM towards architectural related professionals, however, the real purpose and benefits of BIM relate to all construction industry professionals. The 3D representation of the building and now used in roads and utilities too and is geared towards all construction professionals, and all of you are responsible for understanding the process and participate in providing input to the software.</p>

<p> BIM makes a reliable digital representation of the building available for design decision making, high-quality construction document production, construction planning, performance predictions, and cost estimates. Not only, that BIM can also be used by the property owners, once the construction process has ended, to carefully monitor how the building is performing and to complete repairs efficiently.</p>

<p>The building information modeling process covers geometry, space, light, geographic information, quantities, and properties of building components. BIM can be used to demonstrate the entire building life cycle, including the processes of construction and facility operation.</p>

<p>Building Information Modeling Applications The BIM application process can be used during design and architecture process creating a clear picture used for better and more integrated designs. The software will be used to foresee problems and coordination between different contractors and as a way to generate construction documents and process that will later be implemented during the physical process. It is ideal when there are many trades executing at the same moment or when schedules are compressed. There are multiple applications for BIM so it can be used by the following groups:</p>

<p>Architecture Sustainability Structures MEP  Construction management Utilities Road construction Scheduling Property management Industry groups are trying to develop one standardized BIM model that can be used to integrate all different types of modeling systems. By doing this, they will facilitate the coordination and communication in the design-construction-operation team under one single platform. The purpose of this movement is to create a single data center, with multiple CAD and specs depending on the discipline that you are working for.</p>

<p>All data will then come together allowing it to be used for take-offs, analysis, coordination and important project milestones. This effort will help standardize the process and will establish a base that can be used during the bidding process so everyone can be judged using some standard guidelines. The BuildingSmart Alliance, a council of the National Institute of Building Sciences, in Washington, D.C., is leading these efforts towards a National BIM Standard.</p>

<p>What Will You Get by Embracing BIM? If you are one of the 60 percent that currently uses BIM technology, you are aware of some of these benefits. However, if you haven't started yet, here are a few reasons why you need to start using BIM in your next construction project.</p>

<p>Provides a way to work concurrently on most aspects of building life cycle process Provides a way to change traditional architectural phases and data sharing Integrates actual construction pieces and parts in the modeling process Can be used as a tool to estimate and complete construction cost forecasting Used to monitor actual building performance data Can be used to collect data on warranty, aging, defects, and installation time Determines whether a temporary construction set up is needed  Can be used to sequencing planning or determining how the phases of a project should be scheduled. Can detect or avoid construction and design issues early in the game preventing change orders and unforeseen conditions BIM process and communication greatly enhanced by reporting, scheduling, and submittals</p>

</div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    viewFunction: function (el, speed) {
      let windowH = window.innerHeight
      let h = this.$refs[el].offsetHeight
      let t = this.$refs[el].offsetTop
      let top = t - (windowH - h) / 2
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      let currentTop = scrollTop
      let requestId
      function step () {
        if (scrollTop < top) {
          if (currentTop <= top) {
            window.scrollTo(0, currentTop)
            requestId = window.requestAnimationFrame(step)
          } else {
            window.cancelAnimationFrame(requestId)
          }
          currentTop += speed
        } else {
          if (top <= currentTop) {
            window.scrollTo(0, currentTop - speed)
            requestId = window.requestAnimationFrame(step)
          } else {
            window.cancelAnimationFrame(requestId)
          }
          currentTop -= speed
        }
      }
      window.requestAnimationFrame(step)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .home {
    font:bold;
  }
</style>
-->
