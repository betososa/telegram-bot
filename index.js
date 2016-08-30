'use strict'
const Telegram = require('telegram-node-bot')

const TelegramBaseController = Telegram.TelegramBaseController

const PingController = require('./controllers/pingController.js')
const MenuController = require('./controllers/menuController.js')
const SumController = require('./controllers/sumController.js')

const tg = new Telegram.Telegram('115309519:AAFDpJCIGignjVidIyjs_5WUcZCkmbYFxj4');


tg.router
    .when(['ping'], new PingController())
    .when(['menu'], new MenuController())
