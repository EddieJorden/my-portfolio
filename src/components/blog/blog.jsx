import React, { useState, useEffect } from 'react';

function Blog() {
	const [blogPosts, setBlogPosts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
  
	useEffect(() => {
		// Fetch blog posts from an API or database and set state
		// You can replace this placeholder code with actual code to fetch blog posts
		const fetchedBlogPosts = [
			{ id: 1, title: 'My First Blog Post', category: 'Personal', date: '2023-02-28', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
			{ id: 2, title: '10 Tips for Writing Great Blog Posts', category: 'Writing', date: '2023-02-25', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
			{ id: 3, title: 'The Best Restaurants in Town', category: 'Food', date: '2023-02-22', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
			{ id: 4, title: 'Why I Love Traveling', category: 'Travel', date: '2023-02-19', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' }
		];
		setBlogPosts(fetchedBlogPosts);
	}, []);

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredBlogPosts = blogPosts.filter((post) =>
		post.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div>
			<h1>My Blog</h1>
			<div className="blog-page-search">
				<label htmlFor="search">Search blog posts:</label>
				<input type="text" id="search" value={searchTerm} onChange={handleSearch} />
			</div>
			<div className="blog-page-posts">
				{filteredBlogPosts.map((post) => (
					<div key={post.id} className="blog-page-post">
						<h2>{post.title}</h2>
						<p>Category: {post.category}</p>
						<p>Date: {post.date}</p>
						<p>{post.content}</p>
						<button>Read more</button>
					</div>
				))}
			</div>
			<div className="blog-page-sidebar">
				<h3>Categories</h3>
				<ul>
					<li>Personal</li>
					<li>Writing</li>
					<li>Food</li>
					<li>Travel</li>
				</ul>
				<h3>Recent posts</h3>
				<ul>
					<li>My First Blog Post</li>
					<li>10 Tips for Writing Great Blog Posts</li>
					<li>The Best Restaurants in Town</li>
				</ul>
				<form>
					<h3>Subscribe to my newsletter</h3>
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" required />
					<button type="submit">Subscribe</button>
				</form>
				<h3>Follow me on social media</h3>
				<ul>
					<li><a href="#">Facebook</a></li>
					<li><a href="#">Twitter</a></li>
					<li><a href="#">Instagram</a></li>
				</ul>
			</div>
		</div>
	);
}

export default Blog;
