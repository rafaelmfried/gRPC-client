import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { Observable } from 'rxjs';

export interface UserRequest {
  id: string;
  name: string;
}

export interface UserResponse {
  user: User;
}

export interface User {
  id: string;
  name: string;
}

export interface UserService {
  GetUser(data: UserRequest): Observable<UserResponse>;
}

@Injectable()
export class CronuserService implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, '../../proto/user.proto'),
      url: 'localhost:4000',
    },
  })
  client: ClientGrpc;
  private UserService: UserService;

  onModuleInit() {
    this.UserService = this.client.getService<UserService>('UserService');
  }

  async getUser(userRequest: UserRequest): Promise<UserResponse> {
    const response = new Promise((resolve, reject) => {
      this.UserService.GetUser(userRequest).subscribe({
        next: (response: UserResponse) => {
          resolve(response);
        },
        error: (error: Error) => reject(new Error(error?.message)),
      });
    });

    console.log('Response: ', await response);

    return response as Promise<UserResponse>;
  }
}
