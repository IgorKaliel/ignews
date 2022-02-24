import { NextApiRequest, NextApiResponse } from "next"

// JWT (Storage)

/***
*** Next Auth 
*** (Social: Github, Facebook, Google and etc.)
*** Cognito, Auth0
***/

export default (request: NextApiRequest, response: NextApiResponse) => {
    
    const users = [
        { id: 1, name: 'Igor' },
        { id: 1, name: 'Diego' },
        { id: 1, name: 'Frank' },
        { id: 1, name: 'Luis' },
    ]

    return response.json(users);

}