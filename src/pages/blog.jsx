import { useState, useEffect } from "react";
import { ListGroup, Image, Button } from "react-bootstrap";
import axios from "axios";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://minitgo.com/api/fetch_blog.php"
        );
        setBlogs(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container" style={{ marginBlock: "10rem" }}>
      {Array.isArray(blogs) &&
        blogs?.map((blog) => (
          <ListGroup key={blog.id} className="my-3">
            <ListGroup.Item clasName="">
              <h3 className="text-center p-4 fw-bold">{blog.title}</h3>
            </ListGroup.Item>
            {blog.description_1?.length > 0 && (
              <ListGroup.Item className="p-4">
                <p>{blog.description_1}</p>
              </ListGroup.Item>
            )}
            {blog.image_1?.length > 0 && (
              <ListGroup.Item className="p-4">
                <Image src={blog.image_1} fluid />
              </ListGroup.Item>
            )}
            {blog.description_2?.length > 0 && (
              <ListGroup.Item className="p-4">
                <p>{blog.description_2}</p>
              </ListGroup.Item>
            )}
            {blog.image_2?.length > 0 && (
              <ListGroup.Item className="p-4">
                <Image src={blog.image_2} fluid />
              </ListGroup.Item>
            )}
            {blog.description_3?.length > 0 && (
              <ListGroup.Item className="p-4">
                <p>{blog.description_3}</p>
              </ListGroup.Item>
            )}
            {blog.image_3?.length > 0 && (
              <ListGroup.Item className="p-4">
                <Image src={blog.image_3} fluid />
              </ListGroup.Item>
            )}
          </ListGroup>
        ))}

      <Button
        variant="success"
        href="/add-blog"
        className="mt-3 mx-auto "
        style={{ width: "max-content" }}
      >
        Add a new Blog Post
      </Button>
    </div>
  );
}

export default Blog;
