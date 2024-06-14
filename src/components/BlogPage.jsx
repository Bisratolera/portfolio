import { blog } from '../data/blog';

const BlogPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto mt-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blog.map((post, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-bl from-[#000000] to-[#866aff] p-2  rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src={post.Picture} 
                  alt={`${post.title} profile`} 
                  className="w-full h-48 sm:h-64 lg:h-56 object-cover"
                />
              </div>
              <h2 className="text-xl text-white font-semibold mb-2 pl-4">{post.title}</h2>
              <p className="text-white mb-4 pl-4">{post.description}</p>
            </div>
            <div className="flex justify-center mt-auto">
              <a href="#more-info" className="w-full">
                <button className="bg-[#1D1F27] p-2 mx-2 px-8 rounded-full text-white hover:bg-[#1D1F27]/70 hover:ring hover:ring-white hover:ring-offset-[0.2px] transition-colors duration-300 ">
                  See More
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
