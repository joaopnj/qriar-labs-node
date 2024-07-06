import { Prisma } from "@prisma/client";
import { OrderEntity } from "../../domain/entity/order.entity";
import { LocatorUtils } from "../../domain/utils/locator.utils";
import { CreateOrderDTO } from "src/infra/controller/dto/order.dto";

export class OrderMapper {
    static toPrisma(order: OrderEntity, status: string) {
        return {
            title: order.title,
            locator: order.locator,
            history: status ? { create: { status: status} } : {}
        } as Prisma.OrderCreateInput;
    };

    static toEntity(order: CreateOrderDTO) {
        return {
            title: order.title,
            locator: LocatorUtils.generateLocator()
        } as OrderEntity;
    };
}