import { Prisma } from "@prisma/client";
import { UpdateStatusOrderDTO } from "src/infra/controller/dto/order.dto";
import { HistoryEntity } from "src/domain/entity/history.entity";

export class HistoryMapper {
    static toPrisma(history: HistoryEntity, orderId: number) {
        return {
            status: history.status,
            Order: orderId ? { connect: { id: Number(orderId)} } : {}
        } as Prisma.HistoryCreateInput;
    };

    static toEntity(history: UpdateStatusOrderDTO) {
        return {
            status: history.status,
        } as HistoryEntity;
    };
}