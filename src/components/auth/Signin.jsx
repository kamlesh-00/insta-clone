import React, { Fragment, useState } from 'react'
import { Grid, Container, Header, Form, Segment, Button, Message } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

const style = {
    gd:{
        paddingTop:'10%',
        marginLeft:'30%',
        maxWidth:'40%'
    }
}

const Signin = () => {

    const history = useHistory()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [loading,setloading] = useState(false)

    const handleSubmit = () => {
        setloading(true)
        setTimeout(()=>post_in(),1000)
        setTimeout(()=>setloading(false),1000)
    }
    const post_in = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            toast.error("invalid email")
            return
        }
        fetch("http://localhost:8888/signin",{
            method:"post",
            headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.error){
            toast.error("No Success!")
        } 
        else {
            localStorage.setItem("jwt",data.token)
            localStorage.setItem("user",JSON.stringify(data.user))
            toast.success("Success!")
            setTimeout(()=>history.push('/home'),2000)
            }
        })
        .catch(err=>{
            toast.error("Error!")
            })
    }

    return (
        <Fragment>
            <Container fluid>
                <Grid style={style.gd}>
                    <Grid.Column>
                        <Header as='h2' textAlign='center'>
                            Log-in to your account
                        </Header>
                        <Form onSubmit={()=>handleSubmit()}>
                            <Segment stacked>
                                <Form.Input 
                                    type='text'
                                    placeholder='Email Address' 
                                    value={email}
                                    onChange={(e)=>{setemail(e.target.value)}}
                                />
                                <Form.Input 
                                    type='password' 
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e)=>{setpassword(e.target.value)}}
                                />
                                <Button 
                                    fluid 
                                    type='email' 
                                    color='teal' 
                                    content='Submit'
                                    loading={loading}
                                />
                            </Segment>
                        </Form>
                        <Message>
                            Do not have an account? then <Link to='/signup'>Sign Up</Link> 
                        </Message>
                    </Grid.Column>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default Signin
