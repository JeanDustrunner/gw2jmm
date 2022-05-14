import { Injectable } from '@angular/core';
import { PrismaClient } from '@prisma/client';

@Injectable({
  providedIn: 'root'
})
export class PrismaService {

  constructor(public prisma: PrismaClient) { }

  public async main() {
    const allUsers = await this.prisma.user.findMany();
    console.log('DB USERS: ', allUsers)
  }

  // main()
  // .catch((e) => {
  //   throw e
  // })
  // .finally(async () => {
  //   await prisma.$disconnect()
  // })
}
