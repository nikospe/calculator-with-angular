class KeypadCtrl {
    buttonClick(button) {
        this.onClick(button);
    }
}

app.component('keypad', {
    bindings: {
        onClick: '<'
    },
    template: `<div>
        <button 
            class = "nums" 
            ng-repeat = "number in [0,1,2,3,4,5,6,7,8,9]" 
            ng-click = "$ctrl.buttonClick(number)">
            {{number}}
        </buttons>
        <button
            class = "symbols"
            ng-repeat = 'symbol in ["+","-","*","/","="]'
            ng-click = "$ctrl.buttonClick(symbol)">
            {{symbol}}
        </button>
        <button
            id = "clear"
            ng-click = '$ctrl.buttonClick("clear")'>
        ce</button>`,
     controller: KeypadCtrl
});