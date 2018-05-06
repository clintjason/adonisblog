'use strict'

class PostController {
	async index({ view }){
		const posts = [
			{ title: "First Post", body: 'This is the first body content'},
			{ title: "Second Post", body: 'This is the second body content'},
			{ title: "Third Post", body: 'This is the third body content'},
			{ title: "Fourth Post", body: 'This is the fourth body content'}
		]
		return view.render('posts.index', {
			title: 'Title From the Post Controller',
			posts: posts
		})
	}
}

module.exports = PostController
