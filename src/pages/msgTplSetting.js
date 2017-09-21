import  dva from 'dva';
import {message} from 'antd'
import createLoading from 'dva-loading'
import {Router} from 'dva/router'
// import './index.less';

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  onError (error) {
    message.error(error.message)
  },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('../models/msgTplSetting'));

const Routers = function ({history, app}) {
  const routes = [
    {
      path: '/',
      component: require('../routes/MsgTplSetting/Index')
    },
  ]
  return <Router history={history} routes={routes}/>;
}

// 4. Router
app.router(Routers);

// 5. Start
app.start('#root');
