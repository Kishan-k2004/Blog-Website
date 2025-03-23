import React,{useState,useEffect} from 'react'
import { Container,PostCard } from '../components'
import appwriteService from '../appwrite/config'


function AllPosts() {
    const [post, setpost] = useState([])
    useEffect(()=>{
        appwriteService.getPosts([]).then((posts)=> {
            if(posts){
                setpost(posts.documents)
            }
        })
    },[])

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {
                    post.map((i)=>(
                        <div className='p-2 w-1/4' key={i.$id}>
                            <PostCard post={i} />
                        </div>
                
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default AllPosts