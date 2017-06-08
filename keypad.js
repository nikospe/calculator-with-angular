class KeypadCtrl {
    buttonClick(button) {
        this.onClick(button);
    }
}

app.component('keypad', {
    bindings: {
        onClick: '<',
        rates: '<'
    },
    template: `<div id="numbers">
            <button 
                class = "keys" 
                ng-repeat = "number in [1,2,3,4,5,6,7,8,9,0]"                 
                ng-click = "$ctrl.buttonClick(number)"
                ng-class = '{"zero": number===0}'>
                {{number}}
            </buttons>
        </div>
        <div id="actions">
            <button
                class = "keys symbols"
                ng-repeat = 'symbol in ["=","+","-","*","/"]'
                ng-class='{"result": symbol=="="}'
                ng-click = "$ctrl.buttonClick(symbol)">
                {{symbol}}
            </button>   
            <button
                id = "clear" class="keys"
                ng-click = '$ctrl.buttonClick("clear")'>
            c</button>
        </div>
        <div id="convert">
            <div id="convert-selector">
                <span id="text">Convert value from:</span>
                <!--<input list="to-currencies" class="my-input" id="source">-->
                <select class="my-input" id="source">
                    <option 
                    ng-repeat = 'value in ["EUR","USD","GBP"]'                    
                    value="{{value}}">{{value}}</option>             
                </select>

                <span>to:</span>
                <!--<input list="currencies" class="my-input" id="target">-->
                <select class="my-input" id="target">
                    <option 
                    ng-repeat = 'value in $ctrl.rates'
                    value="{{value}}">{{value}}</option>
                    <option value="EUR">EUR</option>             
                </select>
            </div>
            <button
                id = "convert-button" class="keys"
                ng-click = '$ctrl.buttonClick("convert")'>
            Convert</button>
        </div>`,
     controller: KeypadCtrl
});