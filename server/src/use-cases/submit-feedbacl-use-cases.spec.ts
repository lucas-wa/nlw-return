import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

// spies = saber se uma funcao foi chamada no teste. Funcoes sem funcionalidade para testar chamada
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMail: sendMailSpy}
)

// Varios testes para uma unica funcionalidade
describe('Submit feedback', ()=>{
    it('should be able to submit a feedback', async ()=>{
       

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it('shoulde not able to submit a feedback without a type', async ()=>{
       

        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64',
        })).rejects.toThrow();
    })

    it('shoulde not able to submit a feedback without a comment', async ()=>{
       

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64',
        })).rejects.toThrow();
    })

    it('shoulde not able to submit a feedback with an invlid screenshot', async ()=>{
       

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemple comment',
            screenshot: 'test.jpg',
        })).rejects.toThrow();
    })
})