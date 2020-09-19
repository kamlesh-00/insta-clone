import React, { Fragment, useState, useEffect } from 'react'
import { Container, Segment, Header, Form, Button, Grid, Divider, Image, StepTitle } from 'semantic-ui-react'
import Dropzone from './photos/dropzone'
import CropperComp from './photos/cropper'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

const style = {
    gd:{
        paddingTop:"5rem"
    }
}

const CreatePosts = () => {
    const [Caption,setCap] = useState("")
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("")
    const history = useHistory()

    useEffect(() => {
        if(files) files.forEach(file => URL.revokeObjectURL(file.preview));

        if(url){
            fetch("http://localhost:8888/create",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title:title,
                body:Caption,
                photos:url
            })
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>{
            console.log(err)
            toast.error("Error!")
        })
        }
    }, [files,url]);
    
    const postDetails = () => {
        
        const data = new FormData()
        data.append("file",files[0])
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","ncromancr")
        fetch("https://api.cloudinary.com/v1_1/ncromancr/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUrl(data.url)
            console.log(url)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const handleSubmit = () => {
        postDetails()
        setTimeout(()=>console.log(url),3000)

    }

    return (
        <Fragment>
            <Container style={style.gd} >
                <Segment>
                    <Header> Create Post</Header>
                    <Form onSubmit={()=>handleSubmit()}>
                        <Grid >
                            <Grid.Row>
                                <Grid.Column width={6}>
                                    <Header color='teal' sub content='Step 1 - Add Photo'/>
                                    <Dropzone setfiles={setFiles}/>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <Header color='teal' sub content='Step 2 - Preview'/>
                                    {
                                    files.length > 0 &&
                                                    <Fragment>
                                                         <Image src={files[0].preview} size="big"/>   
                                                    </Fragment>
                                    }
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                                <Grid.Column>
                                    <Form.Input
                                        type='text'
                                        placeholder='title'
                                        value={title}
                                        onChange={(e)=>{setTitle(e.target.value)}}
                                    />
                                    <Form.TextArea 
                                        type='text' 
                                        placeholder='Caption' 
                                        value={Caption}
                                        onChange={(e)=>{setCap(e.target.value)}}
                                        />

                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Button.Group>
                                        <Button 
                                            color='teal' 
                                            content='Submit'
                                            />
                                        <Button 
                                            color='red' 
                                            content='Cancel'
                                        />
                                    </Button.Group>

                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                    </Form>
                </Segment>
            </Container>
        </Fragment>
    )
}

export default CreatePosts
