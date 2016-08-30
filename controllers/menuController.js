const TelegramBaseController = require('../base.js');
const helper = require('./helperController');

const pingController = require('./pingController');

class MenuController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    menuHandler($) {
        $.runMenu({
            message: 'Select an option:',
            options: {
                parse_mode: 'Markdown'
            },
            'Exit': {
                message: 'Do you realy want to exit?',
                resizeKeyboard: true,
                oneTimeKeyboard: true,
                'yes': () => {
                    $.sendMessage('yes');
                    new pingController().pingHandler($);
                    helper.callFromOtherFile();
                    return;
                },
                'no': () => {
                    $.sendMessage('no')
                    return;
                }
            },
        })
    }

    get routes() {
        return {
            'menu': 'menuHandler',
        }
    }
}

module.exports = MenuController
