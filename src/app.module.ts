import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "password",
      database: "nestjs",
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
