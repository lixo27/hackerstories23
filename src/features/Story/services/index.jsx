export const initialStories = [
    {
        title: 'React',
        url: 'https://reactjs.org',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    }
]

export const filterStoriesByTitle = (collection, title) => {
    return collection.filter((story) => {
        const lowerCaseStoryTitle = story.title.toLowerCase()
        const lowerCaseTitle = title.toLowerCase()

        return lowerCaseStoryTitle.includes(lowerCaseTitle)
    })
}

export const getAsyncStories = () => {
    return new Promise((resolve) => {
        setTimeout(
            () => resolve({ data: { stories: initialStories } }),
            2000
        )
    })
}
