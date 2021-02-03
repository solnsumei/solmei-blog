import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Sol', id: 1 },
    { title: 'Welcome to react', body: 'lorem ipsum...', author: 'Sol', id: 2 },
    { title: 'We are creating value', body: 'lorem ipsum...', author: 'Chuks', id: 3 },
  ])

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={handleDelete}/>
    </div>
  );
}
 
export default Home;