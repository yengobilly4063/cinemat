import { useHistory as useRouterHistory } from "react-router";

const useHistory = () => {
  const history = useRouterHistory();
  const { push } = history;
  return { push, history };
};

export default useHistory;
