import db from '../db/connection.js'
import Post from '../models/posts.js'

const insertData = async () => {
    await db.dropDatabase()

    const posts = [
        {
            'title': '10 cheap mascara dupes that actually good!',
            'img': 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRjf7PWBMaR3rO-5kmoX95lMJzlMnC3XYKZ7nvugSShZ0osQx2bNNYuPEnLWNrU9xKJoE2uiHLrKrFScXgIHQ8k46rnsraPXeJ7hKC-BOeEzgxbBjJ0Duy3g',
            'author': 'Mars',
            'body': 'Etiam sit amet nisl purus in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Iaculis nunc sed augue lacus viverra vitae congue eu. In cursus turpis massa tincidunt dui ut. Metus dictum at tempor commodo. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Nunc mattis enim ut tellus elementum sagittis vitae. Nascetur ridiculus mus mauris vitae. Porttitor rhoncus dolor purus non. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Lectus magna fringilla urna porttitor rhoncus dolor purus. Elementum nibh tellus molestie nunc non blandit. Ut venenatis tellus in metus. Consectetur libero id faucibus nisl tincidunt eget nullam non. Volutpat maecenas volutpat blandit aliquam etiam. Purus in massa tempor nec feugiat nisl pretium.',
            'comments': [{'body': 'Wow! Great Content!', 'date': '', 'author': 'Bob'}]
        },
        {
            'title': '25 foods that are great for digestion!',
            'img': 'https://chopra.brightspotcdn.com/dims4/default/99c9964/2147483647/strip/true/crop/660x371+68+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Fchopra-brightspot.s3.us-east-1.amazonaws.com%2Fae%2Fd4%2F0aab025a04de7a6a51e57b89b545%2Fpapaya.jpg',
            'author': 'Mars',
            'body': 'Etiam sit amet nisl purus in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Iaculis nunc sed augue lacus viverra vitae congue eu. In cursus turpis massa tincidunt dui ut. Metus dictum at tempor commodo. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Nunc mattis enim ut tellus elementum sagittis vitae. Nascetur ridiculus mus mauris vitae. Porttitor rhoncus dolor purus non. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Lectus magna fringilla urna porttitor rhoncus dolor purus. Elementum nibh tellus molestie nunc non blandit. Ut venenatis tellus in metus. Consectetur libero id faucibus nisl tincidunt eget nullam non. Volutpat maecenas volutpat blandit aliquam etiam. Purus in massa tempor nec feugiat nisl pretium.',
            'comments': [{'body': 'Good to know!', 'date': '', 'author': 'Jane'}]
        },
    ]

    await Post.insertMany(posts)
    console.log('Created posts!')
    db.close()
}

insertData()