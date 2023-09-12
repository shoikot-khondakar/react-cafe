import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div>
                <h3>Reading time: {readingTime}</h3>
            </div>
            <h2 className="text-2xl">Bookmarks Blogs :{bookmarks.length} </h2>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;