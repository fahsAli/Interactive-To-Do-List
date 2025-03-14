export interface TaskResponse {
    id : number,
    title : string,
    task_is_done: boolean,
    created_at : string,
    priority : number | null,
    due_date: string | null
}