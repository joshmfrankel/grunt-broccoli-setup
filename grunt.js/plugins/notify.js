module.exports = {
    init: {
        options: {
            title  : "Grunt",
            message: "Welcome <%= env.USER %>"
        }
    },
    fail: {
        options: {
            title: 'Fail',
            message: 'I\'m sorry <%= env.USER %>. I\'m afraid I can\'t do that.'
        }
    },
    other: {
        options: {
            title: 'Other',
            message: 'FOIHW'
        }
    },
    yep: {
        options: {
            title: 'Other',
            message: 'FOIHW'
        }
    }
};