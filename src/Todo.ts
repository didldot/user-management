export interface TodoItem {
    id: string,
    text: string,
    completed: boolean
}

export const todoItemsDefault: TodoItem[] = [
    {
        id: "1",
        text: "Wäsche",
        completed: false
    },
    {
        id: "2",
        text: "Einkaufen",
        completed: false
    },
    {
        id: "3",
        text: "Ticketmaster checken",
        completed: true
    }

];