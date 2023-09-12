
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmark,handleMarkRead}) => {
    const {title,cover,reading_time,author_img,name,posted_date,hashtag}=blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-5'>
        <div className='flex '>
            <img className='w-16 rounded-3xl ' src={author_img} alt="" />
            <div className='ml-6'>
                <h2 className='text-2xl'>{name}</h2>
                <p>{posted_date}</p>
            </div>
        </div>
        <div>
        <span>{reading_time} min read</span>
        <button onClick={()=>handleAddToBookmark(blog)} className='ml-2'><FaBookmark></FaBookmark></button>
        </div>
            </div>
            <h1 className='text-2xl mb-5'>{title}</h1>
            <p className='mb-5'>{hashtag}</p>
            <button onClick={()=>handleMarkRead(reading_time)} className='text-purple-600 font bold underline'>Mark as read</button>
        </div>
    );
};


export default Blog;