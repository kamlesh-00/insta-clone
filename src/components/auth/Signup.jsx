import React, { Fragment, useState } from 'react'
import { Grid, Header, Message, Button, Form, Segment, Image, Container } from 'semantic-ui-react'
import {NavLink, Link, useHistory} from 'react-router-dom'
import { toast } from 'react-toastify'


const style = {
    gd:{paddingTop:'10%',
        marginLeft:'30%',
        maxWidth:'40%'
    }
}

const Signup = () => {
    
    const history = useHistory()
    const [userName, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [loading,setloading] = useState(false)

    const handleSubmit = () => {
        setloading(true)
        setTimeout(()=>post_out(),1000)
        setTimeout(()=>setloading(false),1000)
    }

    const post_out = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            toast.error("invalid email")
            return
        }
        fetch("http://localhost:8888/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                userName,
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
                toast.success("Success!")
                setTimeout(()=>history.push('/signin'),2000)
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
                            Sign Up for the account
                        </Header>
                        <Form onSubmit={()=>handleSubmit()}>
                            <Segment stacked>
                                <Form.Input 
                                    placeholder='UserName'
                                    type='text'
                                    value={userName}
                                    onChange={(e)=>{setusername(e.target.value)}}
                                />
                                <Form.Input 
                                    placeholder='Email Address'
                                    type='text'
                                    value={email}
                                    onChange={(e)=>{setemail(e.target.value)}}
                                />
                                <Form.Input 
                                    placeholder='Password'
                                    type='password'
                                    value={password}
                                    onChange={(e)=>{setpassword(e.target.value)}} 
                                />
                                <Button 
                                    fluid 
                                    color='teal' 
                                    content='Submit'
                                    loading={loading}
                                />
                            </Segment>
                        </Form>
                        <Message>
                            Already have an account? then <Link to='/signin'>Sign In</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default Signup
