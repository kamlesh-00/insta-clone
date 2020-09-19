import React, { Component, Fragment } from 'react'
import { Container, Grid, Segment, Divider, Header, Button, Icon, Search } from 'semantic-ui-react'
import Posts from '../Posts/Posts'
import Sdebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'

const style = {
    gd:{
        paddingTop:"10rem"
    },
    dg:{
        height:"20rem"
    }
}

class Homepage extends Component {
    render() {
        return (
            <Fragment>
                <Container style={style.gd}>
                        <Segment >
                            <Grid columns={2} stackable textAlign='center'>
                            <Divider vertical>Or</Divider>

                            <Grid.Row verticalAlign='middle' style={style.dg}>
                                <Grid.Column>
                                <Header icon>
                                    <Icon name='pin' />
                                    Already have an account?
                                </Header>
                                <Segment.Inline>
                                    <Button color='black' fluid as={Link} to='/signin'>Sign-In</Button>
                                </Segment.Inline>
                                </Grid.Column>
                                <Grid.Column>
                                <Header icon >
                                    <Icon name='pin' />
                                    Don't have an account ?
                                </Header>
                                <Segment.Inline>
                                    <Button color='teal' fluid as={Link} to='/signup'>Create</Button>
                                </Segment.Inline>
                                </Grid.Column>
                            </Grid.Row>
                            </Grid>
                        </Segment>
                </Container>
            </Fragment>
        )
    }
}

export default Homepage
/*
                            <Grid.Column width={10}>
                                <Posts/>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Sdebar/>
                            </Grid.Column>
                            */