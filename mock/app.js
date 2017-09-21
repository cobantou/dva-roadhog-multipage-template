/**
 * Created by Administrator on 2017/8/25.
 */

export default {
  'GET /api/rootMenus': (req, res) => {
    res.status(200).json({
      data: [{
        "dynamicMenuUid": "20170808161303000-6675b2b67c1111e7a04c005056a54368",
        "menuName": "远程协作",
        "parentMenuUid": "20170811103814000-1fbc5dd97e3e11e7a04c005056a54368",
        "menuUrl": "远程协作",
        "permissionUid": "20170808151501000-4ae0cecf7c0911e7a04c005056a54368"
      },
        {
          "dynamicMenuUid": "20170808161409000-8e1de3417c1111e7a04c005056a54368",
          "menuName": "远程质控",
          "parentMenuUid": "20170811103814000-1fbc5dd97e3e11e7a04c005056a54368",
          "menuUrl": "远程质控",
          "permissionUid": "20170808151628000-7f3a49db7c0911e7a04c005056a54368"
        },
        {
          "dynamicMenuUid": "20170808161409000-8e20fc137c1111e7a04c005056a54368",
          "menuName": "系统配置",
          "parentMenuUid": "20170811103814000-1fbc5dd97e3e11e7a04c005056a54368",
          "menuUrl": "系统配置",
          "permissionUid": "20170808151632000-8197b8617c0911e7a04c005056a54368"
        }],
      code: 200,
      msg: "成功"
    });
  },
  'GET /api/allSubMenus': {
    data: [{
      "dynamicMenuUid": "20170808162145000-9dd799517c1211e7a04c005056a54368",
      "menuName": "工作概况",
      "parentMenuUid": "20170808161303000-6675b2b67c1111e7a04c005056a54368",
      "menuUrl": "/remoteCoop/workOverview",
      "permissionUid": "20170808151632000-8197b8617c0911e7a04c005056a54368"
    }, {
      "dynamicMenuUid": "20170808162350000-e82d52cc7c1211e7a04c005056a54368",
      "menuName": "我的申请",
      "parentMenuUid": "20170808161303000-6675b2b67c1111e7a04c005056a54368",
      "menuUrl": "/remoteCoop/list/myApply",
      "permissionUid": "20170808152425000-9b2897be7c0a11e7a04c005056a54368"
    }, {
      "dynamicMenuUid": "20170808162520000-1d94b4d17c1311e7a04c005056a54368",
      "menuName": "远程协作",
      "parentMenuUid": "20170808161303000-6675b2b67c1111e7a04c005056a54368",
      "menuUrl": "远程协作",
      "permissionUid": "20170808154042000-e1a042687c0c11e7a04c005056a54368",
      "children": [{
        "dynamicMenuUid": "20170808163116000-f21a805e7c1311e7a04c005056a54368",
        "menuName": "待分配",
        "parentMenuUid": "20170808162520000-1d94b4d17c1311e7a04c005056a54368",
        "menuUrl": "/remoteCoop/list/attribute",
        "permissionUid": "20170808154631000-b1cbd2bc7c0d11e7a04c005056a54368"
      }, {
        "dynamicMenuUid": "20170808163120000-f44d4f1a7c1311e7a04c005056a54368",
        "menuName": "处理中",
        "parentMenuUid": "20170808162520000-1d94b4d17c1311e7a04c005056a54368",
        "menuUrl": "/remoteCoop/list/process",
        "permissionUid": "20170808154631000-b1ce52317c0d11e7a04c005056a54368"
      }, {
        "dynamicMenuUid": "20170808163252000-2b6d3aca7c1411e7a04c005056a54368",
        "menuName": "已完成",
        "parentMenuUid": "20170808162520000-1d94b4d17c1311e7a04c005056a54368",
        "menuUrl": "/remoteCoop/list/finish",
        "permissionUid": "20170808154631000-b1d0b8317c0d11e7a04c005056a54368"
      }, {
        "dynamicMenuUid": "20170808163345000-4ad0b99c7c1411e7a04c005056a54368",
        "menuName": "全部",
        "parentMenuUid": "20170808162520000-1d94b4d17c1311e7a04c005056a54368",
        "menuUrl": "/remoteCoop/list/all",
        "permissionUid": "20170808154631000-b1d31cd57c0d11e7a04c005056a54368"
      }]
    }, {
      "dynamicMenuUid": "20170816112750705-986f6191ff1049ffac1c4d75b9fdfc3c",
      "menuName": "我的受理",
      "parentMenuUid": "20170808161303000-6675b2b67c1111e7a04c005056a54368",
      "menuUrl": "/remoteCoop/list/myAccept",
      "permissionUid": "20170808152613000-db93a2fb7c0a11e7a04c005056a54368"
    }],
    code: 200,
    msg: "成功"
  }
}
