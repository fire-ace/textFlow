/**
 * Created by Administrator on 16-4-26.
 */
window.onload = function() {
    welcomeUI();
}


function welcomeUI() {
    var welcomeText = document.createElement('p');
    welcomeText.innerHTML = '欢迎来到黑客帝国！';
    document.body.appendChild(welcomeText);
    
    window.onclick = function (e) {
        var evt = e || window.event;
        welcomeText.innerHTML = '';
        var boolean = false;
        var value = textFlow(boolean);
        console.log(textFlow(boolean))
        if (value) {
            alert('Success!');
        }
    }
}

function textFlow(boolean) {
    var counter = 0;
    var id = window.setInterval(function () {
        new Fontfall();
        ++counter;
        boolean = false;
        if (counter > 50) {
            boolean = true;
            // console.log(boolean);
            clearInterval(id);
            return boolean;
        }
    }, 10);
    // console.log(boolean)

}

function Fontfall() {
    var el = document.createElement('span');
    var textArea = randomFlow();
    el.innerHTML = textArea;
    this.area = document.createElement('div');
    this.area.className = 'txtArea';
    var screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var randomX = Math.floor(Math.random() * screenWidth);
    this.area.style.left = randomX + 'px';
    this.area.appendChild(el);
    document.body.appendChild(this.area);
    this.fall();
}

Fontfall.prototype.fall = function() {
    var self = this;
    var screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
    utilities.movement.move(this.area, {
        top: (screenHeight + 100)
    }, function () {
        self.fall();
    })
}

function randomFlow() {
    var arr = new Array();
    for (var i = 0; i < 30; i++) {
        establishChar(arr);
    }
    var len = arr.length;
    var textFlow = '';
    for (var i = 0; i < len; i++) {
        textFlow += arr[i];
    }
    // console.log(textFlow);
    return textFlow;
}

function establishChar(arr) {
    var randomNum = Math.floor(Math.random() * 26 + 97);
    var character = String.fromCharCode(randomNum);
    arr.push(character);
    // console.log(arr);
}

