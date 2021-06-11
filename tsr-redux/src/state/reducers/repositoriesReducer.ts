import { Action } from "../actions";
import { ActionType } from "../actions-type";

interface RepositoriesState {
  error: string | any;
  data: string[];
  loading: boolean;
}

const initiaState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initiaState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };

    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
