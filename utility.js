var utilities = utilities || {
        movement: {
            getStyle: function (el, prop) {
                if (el.currentStyle) {
                    return el.currentStyle[prop];
                } else {
                    return window.getComputedStyle(el)[prop];
                }
            },

            move: function (el, properties, fn) {
                var current, speed, prop, target;
                //为了避免重复调用导致动画速度越来愉快
                clearInterval(el.timerId);
                //因为这个timerID是基本类型，所以通过参数传递，无法保证下一次
                //进入move函数中，这个id值是这次设置的，所以将id放到el这个对象上。
                //因为这个对象是引用类型，所以这个id在内部改变，el上也会跟着改变
                var self = this;
                el.timerId = setInterval(function () {
                    
                    var isNeedStop = true;

                    for (prop in properties) {

                        target = properties[prop];

                        if (prop === 'opacity') {
                            current = Math.round(parseFloat(self.getStyle(el, prop)) * 100);
                        } else {
                            current = parseInt(self.getStyle(el, prop));
                        }

                        speed = (target - current) / 10;

                        speed = (speed > 0) ? (Math.ceil(speed)) : (Math.floor(speed));

                        if (prop === 'opacity') {
                            el.style[prop] = (current + speed) / 100;
                        } else {
                            el.style[prop] = current + speed + 'px';
                        }

                        if (current !== target) {
                            isNeedStop = false;
                        }

                    }


                    if (isNeedStop) {
                        clearInterval(el.timerId);
                        if (typeof fn === 'function') {
                            fn();
                        }
                        return;
                    }

                    
                }, 30);
            }
        }


    };
