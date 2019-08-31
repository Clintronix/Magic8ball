

////UI display ----------------------------
var UIdisplay = (function () {
    var answers, n, classBody, fortune;
    answers = ['It\'s best I don\'t say', 'For sure!', 'highly doubt it', 'you don\'t want to know', '100%', 'hazy, ask again'];
    
    return {
        deleteInput: function() {
            var inputAns = document.getElementById("inputAns");
            inputAns.removeChild(inputAns.childNodes[0]);
            var inputQues = document.getElementById("inputQues");
            inputQues.removeChild(inputQues.childNodes[0]);
            
        },
        display8Ball: function () {
       classBody = document.querySelector('section');
            n = Math.round(Math.random() * 5);
            fortune = answers[n];
         classBody.style.backgroundColor = '.black-overlay';
             document.getElementById('inputAns').insertAdjacentHTML('beforeend', fortune);
         
    },
        returnInput: function (input) {
            input = document.querySelector('.questionInput').value;
            document.getElementById('inputQues').insertAdjacentHTML('beforeend', input);
        }
        
    };
})();


//////configure - ---------------------------
var configure = (function () {
    var inputDisplay;
    
    
    return {
        
        pickFortune: function (answers) {
         
    },

        stringInputValue: function (inputValue) {
            inputDisplay = JSON.stringify(inputValue);
            return inputDisplay;
        },
        
       
    };
        
        
    })();


////controller ------------------------------
var controller = (function (UIdisplay, configure) {
    var Displays = function () {
        sendInput();
            UIdisplay.display8Ball();
            configure.pickFortune();
            UIdisplay.deleteInput();
    };
            
    
    var setupEventListener = function() {
        document.querySelector('.submit-btn').addEventListener('click', function () {
            Displays();
        }),
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
          Displays();
            
        } 
         
    });
          
    };
    
    var sendInput = function () {
        var inputValue;
        /// get input 
       
        ///display input 
        UIdisplay.returnInput();
        //add to query
    };
    
    return {
       init: function()  {
           console.log('Application has started.');
           setupEventListener();
           
       }
   };
})(UIdisplay, configure);

controller.init();


