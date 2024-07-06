import { ApiProperty } from "@nestjs/swagger";
import { Status } from "@prisma/client";
import { IsString } from "class-validator";

export class CreateOrderDTO {
    @IsString()
    @ApiProperty({
      description: "Title",
      example: "Big Mack",
    })
    title: string;
  
  }

  export class UpdateStatusOrderDTO {
    @IsString()
    @ApiProperty({
      description: "Status",
      example: "WAITING_PAYMENT",
    })
    status: Status;
  
  }