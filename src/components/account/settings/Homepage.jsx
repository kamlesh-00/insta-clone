import React, { Fragment, useEffect, useState } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Navbar from '../../navbar/Navbar'
import Upper from './Upper'
import Lower from './Lower'

const style = {
    gd:{
        marginTop:"5rem"
    }
}

const HomepageProfile = () => {
    const [pics,setPics] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8888/mypost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result.posts)
            setPics(result.posts)
        })
    },[]) 
    return (
        <Fragment>
            <Container>
                <Grid>
                    <Grid.Row style={style.gd}>
                        <Container>
                            <Upper/>
                            <Lower pics={pics}/>
                        </Container>
                    </Grid.Row>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default HomepageProfile
