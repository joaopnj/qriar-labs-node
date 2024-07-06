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

    @IsString()
    @ApiProperty({
      description: "Status",
      example: "REALIZED",
    })
    status: Status;
  
  }