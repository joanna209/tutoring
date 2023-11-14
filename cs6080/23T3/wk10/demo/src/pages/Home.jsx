import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody } from '@chakra-ui/react';
import { SimpleGrid, Heading } from '@chakra-ui/react';

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPosts(data);
    })
  }, []);

  return (
    <div>
      <Heading>A list of posts</Heading>
      <SimpleGrid columns={2} spacing={2}>
        {posts.map((post) => 
          <Card data-testid="post-card">
            <CardHeader>{post.title}</CardHeader>
            <CardBody>{post.body}</CardBody>
          </Card>
        )}
      </SimpleGrid>
    </div>
  );
};

export default Home;
