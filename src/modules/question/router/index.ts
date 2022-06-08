
export default {
  component: 
    () => import(/* webpackChunkName: "question-layout" */ "@/modules/question/layouts/QuestionLayout.vue"),
  children: [
    {
      path: 'questions-list',
      name: 'questions-list',
      meta: {
        title: 'Questions List',
        layout: 'page-layout',
      },
      component: 
        () => import(/* webpackChunkName: "questions-list" */ "@/modules/question/views/QuestionsList.vue")
    },
    {
      path: '/',
      redirect: {name : 'questions-list'} 
    }
  ]
}