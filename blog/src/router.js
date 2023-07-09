import { createWebHistory, createRouter } from "vue-router";
import MyHome from './components/MyHome.vue';
import MyList from './components/MyList.vue';
import ListDetail from './components/ListDetail.vue';
import MyAuthor from './components/MyAuthor.vue';
import MyComment from './components/MyComment.vue';

/** vue-router4 문법 공식문서 참조  */

const routes = [
//   {
//     path: "/호출경로명(작명)",
//     component: component path,
//   }
  {
    path: "/",
    name: "Home",
    component: MyHome,
  },
  {
    path: "/list",
    name: "MyList",
    component: MyList,
  },
  {
    path: "/detail/:id",
    /**           / ":id" 슬래시 뒷자리부터 페이지ID 그룹핑(개별화) 
     *               :id(\\d+)  :정규식 숫자만
     *               :id*       : /:id/:id/:id 슬래시 연속 
     *               "/anything(.*)" : 슬래시뒤 모든 잘못된문자 404 응용가능
     *                 => 상위 path는 우선권을 가지고 제외하고 .* 처리됨 (except)
    */
    name: "ListDetail",
    component: ListDetail,
    /** route 세부 쪼개기 - nested routes */
    children: [
        {
            path: "author",
            // path: "/author", ** 상대경로이기 때문에 "/"생략
            component : MyAuthor,
        },
        {
            path: "comment",
            // path: "/comment", ** 상대경로이기 때문에 "/"생략
            component : MyComment,
        },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 