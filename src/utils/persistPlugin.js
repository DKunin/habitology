'use strict';

const persistPlugin = store => {
    const history = JSON.parse(
        localStorage.getItem('habitologyState') || '{"habits":{}, "log": []}'
    );

    if (history) {
        store.commit('restoreState', history);
    }

    store.subscribe(() => {
        localStorage.setItem(
            'habitologyState',
            JSON.stringify(store.state, null, 4)
        );
    });
};

export default persistPlugin;
