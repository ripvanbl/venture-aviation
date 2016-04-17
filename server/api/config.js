process.env.NODE_ENV = (typeof(process.env.NODE_ENV) !== 'undefined') ? process.env.NODE_ENV : 'development';

module.exports = function() {
    var retval;
    
    switch(process.env.NODE_ENV){
        case 'production':
            retval = {
              dbconn: 'mongodb://ventureaviation:va-2012@ds037387.mongolab.com:37387/heroku_app6608479'
            };
            break;
        default:
            retval = {
               dbconn: 'mongodb://ventureaviation:va-2012@ds037387.mongolab.com:37387/heroku_app6608479'
            };
    }
    
    return retval;
};