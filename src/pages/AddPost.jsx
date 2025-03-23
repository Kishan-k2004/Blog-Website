import React from 'react'
import { Container, PostForm } from '../components/index'

function AddPost() {
  // console.log("add post")
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost