class KeypadCtrl {
    buttonClick(button) {
        this.onClick(button);
    }
}

app.component('keypad', {
    bindings: {
        onClick: '<'
    },
    template: `<div id="numbers">
            <button 
                class = "keys" 
                ng-repeat = "number in [1,2,3,4,5,6,7,8,9,0]" 
                ng-click = "$ctrl.buttonClick(number)">
                {{number}}
            </buttons>
        </div>
        <div id="actions">
            <button
                class = "keys symbols"
                ng-repeat = 'symbol in ["+","-","*","/","="]'
                ng-class='{"result": symbol=="="}'
                ng-click = "$ctrl.buttonClick(symbol)">
                {{symbol}}
            </button>
            <button
                id = "clear" class="keys"
                ng-click = '$ctrl.buttonClick("clear")'>
            c</button>
        </div>`,
     controller: KeypadCtrl
});