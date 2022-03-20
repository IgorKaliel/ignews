import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    
    //console.log(request.query);

    const users = [
        { id: 1, name: 'Igor' },
        { id: 1, name: 'Diego' },
        { id: 1, name: 'Frank' },
        { id: 1, name: 'Luis' },
    ]

    return response.json(users);

}