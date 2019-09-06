

////UI display ----------------------------
var UIdisplay = (function () {
    var answers, classBody, n, fortune;
    answers = ['It\'s best I don\'t say', 'For sure!', 'highly doubt it', 'you don\'t want to know', '100%', 'hazy, ask again'];
    var number = 0; 
    var questionStrng = [];
    return {
        deleteInput: function() {
            var inputQues = document.getElementById("inputQues");
            var inputAns = document.getElementById("inputAns"); 
            //var randomNumber = document.querySelector('button');
            
            var inputQueCur = inputQues.removeChild(inputQues.childNodes[0]).textContent;
            var inputCurAns = inputAns.removeChild(inputAns.childNodes[0]).textContent;
           
            
            //randomNumber.removeChild(randomNumber.childNodes[0]);
            if (inputQueCur && inputCurAns) {
                var questionLast = document.getElementById('questionLast');
                var lastAns = document.getElementById('ansLast');
               
             //add
                questionLast.insertAdjacentHTML('beforeend', inputQueCur);
                lastAns.insertAdjacentHTML('beforeend', inputCurAns);
             //remove  
                questionStrng = questionLast.removeChild(questionLast.childNodes[0]);
                lastAns.removeChild(lastAns.childNodes[0]);
                console.log(questionStrng);
            };
           
        },
        display8Ball: function () {
            n = (Math.round(Math.random() * 5));
            classBody = document.querySelector('section');
            fortune = answers[n];
            
            classBody.style.backgroundColor = '.black-overlay';
            document.getElementById('inputAns').insertAdjacentHTML('beforeend', fortune);
            //document.querySelector('button').insertAdjacentHTML('afterend', n);
            
         
        },
        returnInput: function (input) {
            input = document.querySelector('.questionInput').value;
            document.getElementById('inputQues').insertAdjacentHTML('beforeend', input);
        },
        
        addNumber: function () {
            number += n;
            
        },
        
    };
})();


//////configure - ---------------------------
var configure = (function () {
    var inputDisplay;
    
    
    return {
        
        pickFortune: function (answers) {
         
        },

        stringInputValue: function (inputValue) {
            
        },
        
       
        };
        
        
    })();


////controller ------------------------------
var controller = (function (UIdisplay, configure) {
    
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
    
        var Displays = function () {
        if (document.querySelector('.questionInput').value) {
            sendInput();
            UIdisplay.display8Ball();
            configure.pickFortune();
            UIdisplay.deleteInput();
            UIdisplay.addNumber();
        }
            
    };
    
    var sendInput = function () {
        /// get input 
        var inputValue;
        ///display input 
        UIdisplay.returnInput();
        //add to query
         
        
    };
    
    return {
       init: function()  {
           console.log('Application started.');
           setupEventListener();   
       }
   };
})(UIdisplay, configure);

controller.init();




