import React, { Fragment } from 'react'
import { Grid, Confirm, Container } from 'semantic-ui-react'
import Posts from '../Posts/Posts'
import Sdebar from '../Sidebar/Sidebar'

const style={
    gd:{
        paddingTop:"10rem"
    }
}

const Home = () => {
    return (
        <Fragment>
            <Container style={style.gd}>
                <Grid>
                    <Grid.Column width={10}>
                        <Posts/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Sdebar/>
                    </Grid.Column>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default Home
