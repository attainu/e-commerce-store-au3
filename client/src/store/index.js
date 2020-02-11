import reducers from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

class StateLoader {
    loadState() {
        try {
            let serializedState = localStorage.getItem(
                "filtered.store-dataSet"
            );
            if (serializedState === null) {
                return this.initializeState();
            }
            return JSON.parse(serializedState);
        } catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("filtered.store-dataSet", serializedState);
        } catch (err) {}
    }

    initializeState() {
        return {
            //initial state to be set here
        };
    }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const stateLoader = new StateLoader();

const store = createStore(
    reducers,
    stateLoader.loadState(),
    composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(() => {
    stateLoader.saveState(store.getState());
});

const mapStateToProps = state => {
    return state;
};
export { store, mapStateToProps };
