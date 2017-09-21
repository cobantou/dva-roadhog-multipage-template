import request  from '../utils/request'

export async function getProductList(params) {
  return request({
    url: "/api/pigeon/product/list/get",
    method: 'get',
    data: params,
  })
}

export async function getTemplateList(params) {
  return request({
    url: "/api/pigeon/template/list/get",
    method: 'get',
    data: params,
  })
}

export async function getTemplateDetail(params) {
  return request({
    url: "/api/pigeon/template/detail/get",
    method: 'get',
    data: params,
  })
}

export async function addTemplate(params) {
  return request({
    url: "/api/pigeon/template/add",
    method: 'post',
    data: params,
  })
}

export async function editTemplate(params) {
  return request({
    url: "/api/pigeon/template/update",
    method: 'post',
    data: params,
  })
}

export async function addOptionItem(params) {
  return request({
    url: "/api/pigeon/optionitem/add",
    method: 'post',
    data: params,
  })
}

export async function editOptionItem(params) {
  return request({
    url: "/api/pigeon/template/detail/save",
    method: 'post',
    data: params,
  })
}

