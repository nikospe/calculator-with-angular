app.component('display', {
    bindings: {
        firstNum: '<',
        secondNum: '<',
        act: '<'
    },
    template: `<div id="display">{{$ctrl.firstNum}}{{$ctrl.act}}{{$ctrl.secondNum}}</div>`
});