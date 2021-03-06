const MongoLib = require('../lib/mongo')

class UsersService {
  constructor() {
    this.collection = 'users'
    this.mongoDB = new MongoLib()
  }

  async getUsers() {
    const users = await this.mongoDB.getAll(this.collection)
    return users || []
  }

  async getUser({ userId }) {
    const user = await this.mongoDB.get(this.collection, userId)
    return user || {}
  }

  async createUser({ user }) {
    const createdUserId = this.mongoDB.create(this.collection, user)
    return createdUserId
  }

  async updateUser({ userId, user } = {}) {
    const updatedUserId = this.mongoDB.update(this.collection, userId, user)
    return updatedUserId
  }

  async deleteUser({ userId }) {
    const deletedUserId = await this.mongoDB.delete(this.collection, userId)
    return deletedUserId
  }
}

module.exports = UsersService
