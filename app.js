var app = angular.module('myApp', []);

class CalculatorCtrl {
    constructor() {
        this.keyPressed = this.keyPressed.bind(this);
    }

    clear() {
        this.value = 0;
        this.firstNum = undefined;
        this.secondNum = undefined;
        this.result = undefined;
        this.act = '';
    }

    $onInit() {
        this.clear();
    }

    keyPressed(value) {
        if ( !isNaN(value) ) {
            if ( this.value == 0 ) {
                this.value = value;
            } else {
                this.value = (this.value * 10) + value;
            }
        } else if (value == 'clear') {
            this.clear();
        } else {
            switch (value) {
                case '+' :
                    break;
                case '-' :
                    break;
                case '*' :
                    break;
                case '/' :
                    break;
                case '=' :
                    break;
                default :
                    break;
            }
        }
    }
}

app.component('calculator', {
  template: `<div id="calc">
    <display value="$ctrl.value"></display>
    <br>
    <keypad on-click="$ctrl.keyPressed"></keypad>
  </div>`,
  controller: CalculatorCtrl
});

app.component('display', {
    bindings: {
        value: '<',
        number1: '<',
        number2: '<',
        act: '<',
        result: '<'
    },
    template: '<div id="display">{{$ctrl.value}}</div>'
});

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