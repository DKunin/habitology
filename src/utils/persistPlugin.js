'use strict';

const mutationsToSaveOn = [
    'incrementLog',
    'updateHabit',
    'removeHabit',
    'updateLogItem',
    'removeLogItem',
    'restoreState',
    'saveSettings',
    'logIn',
    'logOut',
    'getUser'
];

const persistPlugin = store => {
    let syncTimeout;
    const history = JSON.parse(
        localStorage.getItem('habitologyState') ||
            '{"habits":{}, "log": [], "user": {}, "apiKey": "", "locale": "en"}'
    );

    if (history) {
        store.commit('restoreState', history);
    }

    store.subscribe(mutation => {
        console.log(mutation.type);
        if (mutationsToSaveOn.includes(mutation.type)) {
            clearTimeout(syncTimeout);
            syncTimeout = setTimeout(() => {
                store.commit('syncWithCloud');
            }, 3000);
            localStorage.setItem(
                'habitologyState',
                JSON.stringify(store.state, null, 4)
            );
        }
    });
};

export default persistPlugin;
