var app = angular.module('myApp', []);

class CalculatorCtrl {
    constructor( $http, $scope ) {
        this.$http = $http;
        this.$scope = $scope;
        this.keyPressed = this.keyPressed.bind(this);
        this.fetchRates($scope);
    }

    fetchRates ($scope) {
        this.$http.get('http://api.fixer.io/latest?base=EUR').then( (response) => {
            $scope.rates = Object.keys(response.data.rates);
            $scope.currencies = response.data.rates;
        });
        this.$http.get('http://api.fixer.io/latest?base=USD').then( (response) => {
            $scope.usdCurrencies = response.data.rates;
        });
        this.$http.get('http://api.fixer.io/latest?base=GBP').then( (response) => {
            $scope.gbpCurrencies = response.data.rates;
        });
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
                    if ( this.secondNum === 0 ) {
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
        } else if (value === 'clear') {
            this.clear();
        } else if ( value === "convert" ) {
            var sourceCurrency = document.querySelector("#source").value;
            var targetCurrency = document.querySelector("#target").value;
            if ( sourceCurrency === targetCurrency ) {
                return;
            }
            if ( sourceCurrency.length > 0 && targetCurrency.length > 0 ) {
                if ( sourceCurrency === "EUR" ) {
                    this.firstNum = this.firstNum * this.$scope.currencies[targetCurrency];
                } else if ( sourceCurrency === "USD" ){
                    this.firstNum = this.firstNum * this.$scope.usdCurrencies[targetCurrency];
                } else {
                    this.firstNum = this.firstNum * this.$scope.gbpCurrencies[targetCurrency];
                }
            }
        } else {
            if ( value === '=' ) {
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
        <keypad on-click="$ctrl.keyPressed" rates="rates"></keypad>
    </div>`,
  controller: ['$http', '$scope', CalculatorCtrl]
});