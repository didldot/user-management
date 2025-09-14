export interface User {
    name: string,
    email: string,
    avatarUrl: string
}

export const defaultUser: User = {
    name: "John",
    email: "john@john.com",
    avatarUrl: "https://foo.foo.com"
}

export const defaultUsers: User[] = [
    {
        name: "Mike",
        email: "mike@mike.com",
        avatarUrl: "https://mike.foo.com",
    },
    {
        name: "Milli",
        email: "milli@milli.com",
        avatarUrl: "https://milli.foo.com",
    },
]