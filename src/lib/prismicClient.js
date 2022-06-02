import * as prismic from '@prismicio/client'

const repoName = `cert-medical` // Fill in your repository name
const accessToken = `` // If your repository is private, add an access token

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
    {
        type: 'page',
        path: '/:uid',
    },
]

const createClient = (fetch) => {
    const clientOptions = {
        fetch,
        accessToken,
        routes,
    }
    const client = prismic.createClient(repoName, clientOptions)
    return client
}

export default createClient