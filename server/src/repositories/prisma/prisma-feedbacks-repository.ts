import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

// Separa do contrato (a interface FeedbacksRepository). Permite trocar o orm prisma por qualquer outra aplicacao posteriormente
export class PrismaFeedbacksReository implements FeedbacksRepository {
    async create({type, comment, screenshot}: FeedbackCreateData){
        await prisma.feedback.create({
            data: {
                // nao precisa atribuir quando a propriedade e  o valor tem o mesmo nome
                type,//: //type,
                comment,//: //comment,
                screenshot,//: //screenshot
            }
        })

    }
}