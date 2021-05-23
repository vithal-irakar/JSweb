(function(){

    let numbers = [1,2,3,4,5,6,7,8,9];
    let colors = ['#6F98A8','#2B8EAD','#2F454E','#2B8EAD','#2F454E','#BFBFBF','#BFBFBF','#6F98A8',"#2F454E"];
    let numBox = document.getElementById('num_content');
    let shuffle = document.getElementById('Shuffle');
    let sort = document.getElementById('Sort');
    let body = document.getElementsByTagName('body')[0];
    let mobileScreen = false;
    
    var init = () => {
        sort.addEventListener('click', initiateSort);
        shuffle.addEventListener('click', initiateShuffle);
        window.addEventListener('resize', checkWidth);

        checkWidth(); 
    }

    var checkWidth = () => {
        mobileScreen = body.offsetWidth < 600 ?  true : false;
        
        resetUI();
        loadData(numbers, numBox);
    }

    var loadData = (numbers, rootElement) => {
        numbers.length && numbers.map((d,i) => {
            var num = createElement(d);
            rootElement.appendChild(num);
        });
    }

    var createElement = d => {
        let num = document.createElement('div');
        num.className = 'number';
        num.innerHTML = d;
        if(mobileScreen){
            num.style.borderLeft = '8px';
            num.style.borderLeftStyle = 'solid';
            num.style.borderLeftColor = colors[d - 1];
            num.style.backgroundColor = "#efefef";
        } else {
            num.style.backgroundColor = colors[d - 1];
        }
        return num;
		
    }

    var resetUI = () => {
        numBox.innerHTML = ''
    }

    var initiateSort = () => {
        numbers.sort();
        resetUI();
        loadData(numbers, numBox);
    }

    var initiateShuffle = () => {
        numbers = shuffleData(numbers);
        resetUI();
        loadData(numbers, numBox);
    }

    var shuffleData = (array) => {
        var markerIndex = array.length, tempValue, randomIndex;
        while (0 !== markerIndex) {
          randomIndex = Math.floor(Math.random() * markerIndex);
          markerIndex -= 1;
          tempValue = array[markerIndex];
          array[markerIndex] = array[randomIndex];
          array[randomIndex] = tempValue;
        }
      
        return array;
    }

    init();
    
})()
