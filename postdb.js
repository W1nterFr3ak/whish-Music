var hardcodedposts = [
    {
        id: 1,
        title: "Wish perfection",
        author: "Winter",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Make a wish",
        author: "THE JESTER",
        date: Date.now(),comments
        content: "I want to work for whip music",
        comments: [
            {
                author: "Kilgrave",
                date: Date.now(),
                content: "Mee too"
            },
            {
                author: "Jesica jones",
                date: Date.now(),
                content: "My wish? may kilgrave not get the job"
            }
        ]
    }
]

var posts = hardcodedposts
if (localStorage && localStorage.getItem('posts')) {
    posts = JSON.parse(localStorage.getItem('posts'));
} else {
    posts = hardcodedposts;
    localStorage.setItem('posts', JSON.stringify(hardcodedposts));
}