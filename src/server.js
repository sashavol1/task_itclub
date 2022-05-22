import { createServer } from "miragejs"

export default createServer({
    routes() {
        this.namespace = "api"

        this.get("/contacts", () => {
            return {
                contacts: [
                    {
                        id: 1,
                        first_name: "Ivanov",
                        last_name: "Ivan",
                        email: 'mail@mail.ru',
                        avatar: '//via.placeholder.com/100x100'
                    },
                    {
                        id: 2,
                        first_name: "Petrov",
                        last_name: "petr",
                        email: 'petr@mail.ru',
                        avatar: '//via.placeholder.com/100x100'
                    },
                ],
            }
        })
    },
})