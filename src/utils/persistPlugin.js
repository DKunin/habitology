'use strict';

const persistPlugin = store => {
    const history = JSON.parse(
        localStorage.getItem('habitologyState') ||
            '{"habits":{}, "log": [], "user": {}, "apiKey": "", "locale": "en"}'
    );

    if (history) {
        store.commit('restoreState', history);
    }

    store.subscribe((mutation) => {
        if (mutation.type === 'timeStamp') {
            localStorage.setItem(
                'habitologyState',
                JSON.stringify(store.state, null, 4)
            );
        }
    });
};

export default persistPlugin;
