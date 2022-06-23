<template>
  <div id="cubo-3d__container">
    <div class="cubo-3d__content">
      <div class="cubo-3d__face" id="cubo-3d__face1">
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
      </div>
      <div class="cubo-3d__face" id="cubo-3d__face2">
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
      </div>
      <div class="cubo-3d__face" id="cubo-3d__face3">
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
      </div>
      <div class="cubo-3d__face" id="cubo-3d__face4">
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
      </div>
      <div class="cubo-3d__face" id="cubo-3d__face5">
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
      </div>
      <div class="cubo-3d__face" id="cubo-3d__face6">
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
        <div class="face__element"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#cubo-3d__container{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(56, 56, 56);
  height: 100%;
  perspective: 2000px;
  perspective-origin: 0px -500px;
}

.cubo-3d__content{
  width: 200px;
  height: 200px;
  position: relative;
  animation: girar 5s infinite ease-in-out;
  transform-style: preserve-3d;
}

.cubo-3d__face{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(3,1fr);
}

.face__element{
  border: 2px solid black;
}

#cubo-3d__face1{
  background-color: brown;
  transform: translateZ(100px);

}



#cubo-3d__face2{
  background-color: rgb(42, 50, 165);
  transform: translateX(100px) rotateY(90deg);
}
#cubo-3d__face3{
  background-color: rgb(42, 165, 48);
  transform: translateX(-100px) rotateY(90deg);
}
#cubo-3d__face4{
  background-color: rgb(241, 63, 40);
  transform: translateY(100px) rotateX(90deg);
}
#cubo-3d__face5{
  background-color: rgb(241, 47, 232);
  transform: translateY(-100px) rotateX(90deg);
}

#cubo-3d__face6{
  background-color: rgb(47, 241, 121);
  transform: translateZ(-100px);
}

@keyframes girar{
  from{
    transform: rotateY(0);
  }to{
    transform: rotateY(360deg);

  }
}
</style>