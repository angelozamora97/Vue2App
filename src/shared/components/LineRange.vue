<template>
<!-- :style="{width: valueRange + '%'}" -->
<!-- :class="valueRange >= 50 ? 'line-range__value--high':'line-range__value--low'" -->
    <div class="line-range">
      <div 
        class="line-range__value" 
        :id="name"
        :style="{width: valueRange + '%'}"
        :class="valueRange >= 50 ? 'line-range__value--high':'line-range__value--low'"
        ></div>
    </div>
  
</template>

<script>
export default {
  name: 'LineRange',
  props: {
    // Valor del Rango
    value: {
      type: Number,
      default: 50,
    },
    max:{
      type: Number,
      default: 100,
    },
    min:{
      type: Number,
      default: 0,
    },
    // Identificador del componente
    name: {
      type: String,
      required: true,
    }
  },

  mounted() {
    const lineRangeValue = document.querySelector(`#${this.name}`)
    lineRangeValue.style.width = 0 + '%'
    setTimeout(()=> {
      lineRangeValue.style.width = this.valueRange + '%'
    }, 300)
  },
  computed: {
    valueRange(){
      let valueRange = 0
      const difValue = this.value - this.min
      const difRange = this.max - this.min
      if(difValue> 0 && difRange > 0) {
        valueRange =(difValue * 100) / difRange 
      }
      return valueRange
    }
  },
}
</script>

<style>
.line-range{
  width: 100%;
  position: relative;
  border-radius: 25px;
  height: 4px;
  background-color: var(--bg-color-base);
}

.line-range__value{
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 25px;
  height: 100%;
  max-width: 100%;
  background-color: var(--bg-color-secondary);
  transition: all 0.7s ease;
}


.line-range__value--low{
  background-color: rgb(255, 73, 73);
}

.line-range__value--high{
  background-color: rgb(23, 240, 106);
}
</style>

