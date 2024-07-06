import { ApiProperty } from "@nestjs/swagger";
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
      description: "Locator",
      example: "XSALSD",
    })
    locator: string;
  
  }