import axios from 'axios';

export interface UserResponseDto {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export class fetchUsers {
  static async getUsers() {
    const response = await axios.get<UserResponseDto[]>(
      'http://jsonplaceholder.typicode.com/users'
    );
    return response.data;
  }
}
