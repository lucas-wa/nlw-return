export interface FeedbackCreateData {
    type: string,
    comment: string,
    screenshot?: string,
}

// Uais metodos existem no repositorio de feedbacks no banco de dados
export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>;
}