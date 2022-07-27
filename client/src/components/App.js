import React, { useEffect, useState } from "react";
import "../App.css"
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Experience from "../pages/Experience";
import Favorite from "../pages/Favorite";
import { Routes, Route } from "react-router-dom";
import Rating from "../pages/Rating";
import Hotel from "../pages/Hotel";
import {Segment, Header, Container, Grid, List } from "semantic-ui-react"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser={setUser} />;


  return (
    <div className="App">
   
      <Navbar user={user} setUser={setUser} />
    
      <Routes>
        <Route path='/home' element={<Experience />} />
        <Route path='/favorites' element={<Favorite />} />
        <Route path='/ratings' element={<Rating />} />
        <Route path='/hotels' element={<Hotel />} />
      </Routes>


      <Segment inverted vertical style={{ padding: '2em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Careers</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Packages' />
              <List link inverted>
                <List.Item as='a'>Save Deals</List.Item>
                <List.Item as='a'>Recommend</List.Item>
                <List.Item as='a'>How To Access</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Immerse
              </Header>
              <p>
                Best vacation deals curated to immerse you in the environment
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
   
    </div>
  );
}

export default App;
