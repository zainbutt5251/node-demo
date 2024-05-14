const express = require('express')
const router = express.Router()

const { ReqMethods } = require('../_enum/enum')

const { ApiErrorHandler } = require('../_utils/handler')


const Userservices    = require('../services/userService')


const Route = () => {
    const routes = [
        {
          method      : ReqMethods.GET,
          url         : '/',
          middlewares : [],
          fn          : ApiErrorHandler(Userservices.GET)
        },
        {
          method      : ReqMethods.PUT,
          url         : '/updateuser',
          middlewares : [],
          fn          : ApiErrorHandler(Userservices.UpdateUser)
        },
    ]

    for (var route of routes) {
        const { method, url, middlewares, fn } = route
        
        router[method](url, ...middlewares, fn)
    }

    return router
}

module.exports = Route()