import EventEmitter from 'events';

let ConsoleState = {
    instance: null
};

class ConsoleStore extends EventEmitter {
    constructor() {
        super();
    }

    static toggleDisplay() {
        $('#consoleApp').find('header > ul > li:has(> ul)').click(function() {
            $(this).hasClass('open') ? $(this).removeClass('open') : $(this).addClass('open').siblings().removeClass('open');
        });

        $('#profile-btn').find('li:nth-child(1) button').click(function() {
            $(this).parents("li").toggleClass('open');
        })
    }

    static getInstance(){
        if (ConsoleState.instance === null){
            ConsoleState.instance = new ConsoleStore();
        }

        return ConsoleState.instance;
    }
}

export default ConsoleStore;
