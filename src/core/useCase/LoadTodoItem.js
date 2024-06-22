import { load } from "../infra/service/ITodoItemService"

export const execute = async (aiQuestion) => {
    return await load(aiQuestion)
}