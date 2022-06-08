<template>
  <div>
    <b-card>
      <h1 class="card-title">Lista de preguntas</h1>
      <div>
        <b-table
          bordered hover responsive fixed
          :items="items"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
        >
          <template #cell(actions)="">
            <b-button size="sm" class="mr-1">
              Info modal
            </b-button>
            <b-button size="sm">
              Details
            </b-button>
          </template>

        
        </b-table>
      </div>
      <b-pagination
          v-model="currentPage"
          :total-rows="items.length"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
    </b-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      currentPage: '1',
      perPage: '8',
      items: [
          { level: 1, title: 'Dickerson'},
          { level: 0, title: 'Larsen'},
          { level: 1, title: 'Geneva'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
          { level: 2, title: 'Jami'},
        ],
      fields:[
        { key: 'title', label: 'Titulo' },
        { key: 'level', label: 'Dificultad'},
        { key: 'actions', label: 'Actions'},
      ]
    }
  }
}
</script>

<style scoped>
.card-title{
  font-size: 1.5rem;
  text-align: center;
}
</style>