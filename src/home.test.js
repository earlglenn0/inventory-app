beforeAll(() => {
    global.localStorage = {
       i2x_token: 'someToken',
       getItem: function () {
          return 'someToken'
       }
    };
 });