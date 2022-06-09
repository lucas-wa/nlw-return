"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaFeedbacksReository = void 0;
const prisma_1 = require("../../prisma");
// Separa do contrato (a interface FeedbacksRepository). Permite trocar o orm prisma por qualquer outra aplicacao posteriormente
class PrismaFeedbacksReository {
    async create({ type, comment, screenshot }) {
        await prisma_1.prisma.feedback.create({
            data: {
                // nao precisa atribuir quando a propriedade e  o valor tem o mesmo nome
                type,
                comment,
                screenshot, //: //screenshot
            }
        });
    }
}
exports.PrismaFeedbacksReository = PrismaFeedbacksReository;
