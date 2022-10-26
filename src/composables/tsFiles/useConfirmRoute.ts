import { useRoute } from "vue-router";
import { computed } from "vue";

const useConfirmRoute = (routeName: string) => {
  const route = useRoute();
  return computed(() => route.name === routeName);
};

export default useConfirmRoute;
