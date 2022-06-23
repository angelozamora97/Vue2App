<template>
  <div id="fly-box__container">
    <div class="fly-box__content">
      <div class="fly-box__item">
        <div class="fly-box__page" id="box1__page1"></div>
        <div class="fly-box__page" id="box1__page2"></div>
        <div class="fly-box__page" id="box1__page3">
          <h1>a</h1>
        </div>
      </div>
      <div class="fly-box__item">
        <div class="fly-box__page" id="box2__page1"></div>
        <div class="fly-box__page" id="box2__page2"></div>
        <div class="fly-box__page" id="box2__page3">
          <h1>b</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#fly-box__container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(56, 56, 56);
  height: 100%;
}

.fly-box__content{
  height: 120px;
  width: 420px;
  /* background-color: brown; */
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 700px;
  gap: 70px;
}

.fly-box__item{
  width: 90px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  transform:  rotateX(45deg) rotate(-50deg);
  transform-style: preserve-3d;

}


.fly-box__page{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 1s;
  color: white;
  padding: 10px;
  
}

.fly-box__item:hover .fly-box__page:nth-child(3){
  transform: translateZ(60px);
}
.fly-box__item:hover .fly-box__page:nth-child(2){
  transform: translateZ(40px);
}
.fly-box__item:hover .fly-box__page:nth-child(1){
  transform: translateZ(20px);
}

#box1__page1{
  background-color: rgb(128, 128, 255)
}
#box1__page2{
  background-color: rgb(93, 93, 255);
}
#box1__page3{
  background-color: rgb(55, 68, 255);
}

#box2__page1{
  background-color: rgb(253, 108, 144);
}
#box2__page2{
 background-color: rgb(255, 82, 126);
}
#box2__page3{
  background-color: rgb(255, 55, 105);
}

</style>