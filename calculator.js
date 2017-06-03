var app = angular.module('myApp', []);

class CalculatorCtrl {
    constructor() {
        this.keyPressed = this.keyPressed.bind(this);
    }

    clear() {
        this.firstNum = 0;
        this.secondNum = undefined;
        this.act = '';
    }

    $onInit() {
        this.clear();
    }

    add () {
        this.firstNum = this.firstNum + this.secondNum;
        this.secondNum = undefined;
        this.act = '';
    }

    subtraction () {
        this.firstNum = this.firstNum - this.secondNum;
        this.secondNum = undefined;
        this.act = '';
    }

    poliferation () {
        this.firstNum = this.firstNum * this.secondNum;
        this.secondNum = undefined;
        this.act = '';
    }

    division () {
        this.firstNum = this.firstNum / this.secondNum;
        this.secondNum = undefined;
        this.act = '';
    }

    result() {
        if ( typeof this.secondNum !== 'undefined') {
            switch (this.act) {
                case '+' :
                    this.add();                            
                    break;
                case '-' :
                    this.subtraction();
                    break;
                case '*' :
                    this.poliferation();                            
                    break;
                case '/' :
                    if ( this.secondNum == 0 ) {
                        this.clear();
                    } else {
                        this.division();                                
                    }
                    break;
                default :
                    break;
            }
        }
    }

    keyPressed(value) {
        if ( !isNaN(value) ) {
            if ( this.act.length > 0 ) {
                if ( !this.secondNum ) {
                    this.secondNum = value;
                } else {
                    this.secondNum = (this.secondNum *10) + value;
                }
            } else {
                this.firstNum = (this.firstNum * 10) + value; }
        } else if (value == 'clear') {
            this.clear();
        } else {
            if ( value == '=' ) {
                this.result();
            } else {
                if ( this.act.length == 0 ) {
                    this.act = value;
                } else {
                    this.result();
                    this.act = value;
                }              
            }
        }
    }
}

app.component('calculator', {
  template: `<div id="calc">
        <display first-num="$ctrl.firstNum" act="$ctrl.act" second-num="$ctrl.secondNum"></display>
        <keypad on-click="$ctrl.keyPressed"></keypad>
    </div>`,
  controller: CalculatorCtrl
});