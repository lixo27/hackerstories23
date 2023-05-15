export const filterStoriesByTitle = (collection, title) => {
    return collection.filter((story) => {
        const lowerCaseStoryTitle = story.title.toLowerCase()
        const lowerCaseTitle = title.toLowerCase()

        return lowerCaseStoryTitle.includes(lowerCaseTitle)
    })
}
