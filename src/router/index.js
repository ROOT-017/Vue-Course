import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const JobResultView = () =>
  import(/*webpackChunkName:"jobs"*/ "@/views/JobResultView.vue");
const JobView = () => import(/*webpackChunkName:"jobs"*/ "@/views/JobView.vue");
const TeamsView = () =>
  import(/*webpackChunkName:"team"*/ "@/views/TeamsView.vue");
const StudentsView = () =>
  import(/*webpackChunkName:"team"*/ "@/views/StudentsView.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResult",
    component: JobResultView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsView,
  },
  {
    path: "/students",
    name: "Students",
    component: StudentsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
