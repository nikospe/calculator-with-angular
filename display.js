app.component('display', {
    bindings: {
        firstNum: '<',
        secondNum: '<',
        act: '<'
    },
    template: `<div id="screen">{{$ctrl.firstNum}}{{$ctrl.act}}{{$ctrl.secondNum}}</div>`
});