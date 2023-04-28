import axios from 'axios'

export class UserService {
  static async login(email: string, password: string) {
    const response = await axios.post('http://localhost:8080/auth/login', {
      email,
      password,
    })
    return response
  }
  static async registration(email: string, password: string, username: string) {
    const response = await axios.post('http://localhost:8080/auth/signup', {
      email,
      password,
      username,
    })
    return response
  }
}
