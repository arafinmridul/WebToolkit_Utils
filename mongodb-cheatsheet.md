# MongoDB Cheat Sheet

## Table of Contents

- [Check `mongosh` Version](#check-mongosh-version)
- [Start the Mongo Shell](#start-the-mongo-shell)
- [Show Current Database](#show-current-database)
- [Show All Databases](#show-all-databases)
- [Create Or Switch Database](#create-or-switch-database)
- [Drop Database](#drop-database)
- [Create Collection](#create-collection)
- [Show Collections](#show-collections)
- [Insert Document](#insert-document)
- [Insert Multiple Documents](#insert-multiple-documents)
- [Find All Documents](#find-all-documents)
- [Find Documents with Query](#find-documents-with-query)
- [Sort Documents](#sort-documents)
- [Count Documents](#count-documents)
- [Limit Documents](#limit-documents)
- [Chaining](#chaining)
- [Find One Document](#find-one-document)
- [Update Document](#update-document)
- [Update Document or Insert if not Found](#update-document-or-insert-if-not-found)
- [Increment Field (`$inc`)](#increment-field-inc)
- [Update Multiple Documents](#update-multiple-documents)
- [Rename Field](#rename-field)
- [Delete a Document](#delete-a-document)
- [Delete Multiple Documents](#delete-multiple-documents)
- [Greater & Less Than](#greater--less-than)

## Check `mongosh` Version

mongosh --version

## Start the Mongo Shell

mongosh "YOUR_CONNECTION_STRING" --username YOUR_USER_NAME

## Show Current Database

db

## Show All Databases

show dbs

## Create Or Switch Database

use blog

## Drop Database

db.dropDatabase()

## Create Collection

db.createCollection('posts')

## Show Collections

show collections

## Insert Document

db.posts.insertOne({
title: 'Post 1',
body: 'Body of post.',
category: 'News',
likes: 1,
tags: ['news', 'events'],
date: Date()
})

## Insert Multiple Documents

db.posts.insertMany([
{
title: 'Post 2',
body: 'Body of post.',
category: 'Event',
likes: 2,
tags: ['news', 'events'],
date: Date()
},
{
title: 'Post 3',
body: 'Body of post.',
category: 'Tech',
likes: 3,
tags: ['news', 'events'],
date: Date()
},
{
title: 'Post 4',
body: 'Body of post.',
category: 'Event',
likes: 4,
tags: ['news', 'events'],
date: Date()
},
{
title: 'Post 5',
body: 'Body of post.',
category: 'News',
likes: 5,
tags: ['news', 'events'],
date: Date()
}
])

## Find All Documents

db.posts.find()

## Find Documents with Query

db.posts.find({ category: 'News' })

## Sort Documents

### Ascending

db.posts.find().sort({ title: 1 })

### Descending

db.posts.find().sort({ title: -1 })

## Count Documents

db.posts.find().count()
db.posts.find({ category: 'news' }).count()

## Limit Documents

db.posts.find().limit(2)

## Chaining

db.posts.find().limit(2).sort({ title: 1 })

## Find One Document

db.posts.findOne({ likes: { $gt: 3 } })

## Update Document

db.posts.updateOne({ title: 'Post 1' },
{
$set: {
category: 'Tech'
}
})

## Update Document or Insert if not Found

db.posts.updateOne({ title: 'Post 6' },
{
$set: {
title: 'Post 6',
body: 'Body of post.',
category: 'News'
}
},
{
upsert: true
})

## Increment Field (`$inc`)

db.posts.updateOne({ title: 'Post 1' },
{
$inc: {
likes: 2
}
})

## Update Multiple Documents

db.posts.updateMany({}, {
$inc: {
likes: 1
}
})

## Rename Field

db.posts.updateOne({ title: 'Post 2' },
{
$rename: {
likes: 'views'
}
})

## Delete a Document

db.posts.deleteOne({ title: 'Post 6' })

## Delete Multiple Documents

db.posts.deleteMany({ category: 'Tech' })

## Greater & Less Than

db.posts.find({ views: { $gt: 2 } })
db.posts.find({ views: { $gte: 7 } })
db.posts.find({ views: { $lt: 7 } })
db.posts.find({ views: { $lte: 7 } })
