import request from '@/utils/request'

export function getList() {
  // const token = getToken()
  return request({
    url: 'api/movie/index',
    method: 'get'
  })
}

export function getIp() {
  // const token = getToken()
  return request({
    url: 'api/getip',
    method: 'post'
  })
}

export function getListPagination(page, limit) {
  // const token = getToken()
  return request({
    url: 'api/articles/getListPagination',
    method: 'post',
    data: {
      page,
      limit
    }
  })
}

export function updateArticles(newdata) {
  return request({
    url: 'api/articles/update',
    method: 'post',
    data: {
      newdata
    }
  })
}

export function createArticles(newdata) {
  return request({
    url: 'api/articles/create',
    method: 'post',
    data: {
      newdata
    }
  })
}
