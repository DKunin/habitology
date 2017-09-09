'use strict';

const persistPlugin = store => {
    const history = JSON.parse(
        localStorage.getItem('habitologyState') ||
            '{"habits":{}, "log": [], "user": {}, "apiKey": ""}'
    );

    if (history) {
        store.commit('restoreState', history);
    }

    store.subscribe((mutation) => {
        if (mutation.type === 'timeStamp') {
            if (window.firebase && store.state.user.uid) {
                const { habits, locale, log, timeStamp } = store.state;
                const data = {
                    habits,
                    locale,
                    log,
                    timeStamp: timeStamp || 0
                };
                window.firebase.database().ref('users/' + store.state.user.uid).set(data);
            }
            localStorage.setItem(
                'habitologyState',
                JSON.stringify(store.state, null, 4)
            );
        }
    });
};

export default persistPlugin;
