'use strict';

const timeStampPlugin = store => {
    store.subscribe((mutation) => {
        if (mutation.type !== 'timeStamp' && mutation.type !== 'syncWithCloud') {
            store.commit('timeStamp', Date.now());
        }
    });
};

export default timeStampPlugin;
