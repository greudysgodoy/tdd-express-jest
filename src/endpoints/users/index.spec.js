const handlers = require("./index")

describe('Endpoints', () => {
  describe('users', () => {
    describe('list', () => {
      it('returns users json', async () => {
        const axios = {
          get: jest.fn().mockResolvedValue({ data: 1 })
        }
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        }
        await handlers({ axios }).list({}, res)
        expect(res.status.mock.calls).toEqual([
          [200]
        ])
        expect(res.send.mock.calls).toEqual([
          [1]
        ])
      })
    })
    describe('post', () => {
      it('creates a user', async () => {
        const axios = {
          post: jest.fn().mockResolvedValue({ data: 1 })
        }
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        }
        const req = {
          body: 'request body'
        }
        await handlers({ axios }).post(req, res)
        expect(axios.post.mock.calls).toEqual([
          ['https://jsonplaceholder.typicode.com/users', 'request body']
        ])
        expect(res.status.mock.calls).toEqual([
          [201]
        ])
      })
    })
    describe('get', () => {
      it('return user json', async () => {
        const axios = {
          get: jest.fn().mockResolvedValue({ data: 1 })
        }
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        }
        const req = {
          params: {
            id: 1
          }
        }
        await handlers({ axios }).get(req, res)
        expect(axios.get.mock.calls).toEqual([
          ['https://jsonplaceholder.typicode.com/users/1']
        ])
        expect(res.status.mock.calls).toEqual([
          [200]
        ])
        expect(res.send.mock.calls).toEqual([
          [1]
        ])
      })
    })
    describe('put', () => {
      it('updates user', async () => {
        const axios = {
          put: jest.fn().mockResolvedValue({ data: 1 })
        }
        const res = {
          sendStatus: jest.fn()
        }
        const req = {
          params: {
            id: 1
          }
        }
        await handlers({ axios }).put(req, res)
        expect(axios.put.mock.calls).toEqual([
          ['https://jsonplaceholder.typicode.com/users/1']
        ])
        expect(res.sendStatus.mock.calls).toEqual([
          [204]
        ])
      })
    })
    describe('delete', () => {
      it('deletes a user', async () => {
        const axios = {
          delete: jest.fn()
        }
        const res = {
          sendStatus: jest.fn()
        }
        const req = {
          params: {
            id: 1
          }
        }
        await handlers({ axios }).delete(req, res)
        expect(axios.delete.mock.calls).toEqual([
          ['https://jsonplaceholder.typicode.com/users/1']
        ])
        expect(res.sendStatus.mock.calls).toEqual([
          [204]
        ])
      })
    })
    
  })
})