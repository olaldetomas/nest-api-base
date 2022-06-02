import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'olaldetomas1',
            password: '123456'
        },
        {
            userId: 2,
            username: 'olaldetomas2',
            password: '123456'
        }
    ]

    async findOne(username: string) {
        return this.users.find(user => user.username == username)
    }
}
