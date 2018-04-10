const asyncModule = require('./asyncModule');

const wrapper = {initialized: false};
let activeState;
let pending = [];
const notInitializedState = {
    initialize() {
        return asyncModule.initialize()
            .then(res => {
                wrapper.initialized = true;
                activeState = asyncModule;

                pending.forEach(e => {
                    asyncModule[e.method].apply(null, e.args)
                });
                pending = [];
            })
            .catch(err => {
                throw err;
            })
    },
    tell(){
        return pending.push({
            method: 'tell',
            args: arguments
        })
    }
};

activeState = notInitializedState;

wrapper.initialize = function () {
    return activeState.initialize.apply(activeState, arguments)
}
wrapper.tell = function () {
    return activeState.tell.apply(activeState, arguments);
};

module.exports = wrapper;
