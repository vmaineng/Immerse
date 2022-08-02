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
import Search from "../components/Search";
import ContactForm from "../components/ContactForm";


function App() {
  const [user, setUser] = useState(null);
  const [experiences, setExperience] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/experiences")
      .then((r) => r.json())
      .then(setExperience);
  }, []);

 const displayedExperience = experiences.filter((experience) => 
    experience.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!user) return <Login setUser={setUser} />;


  return (
    <div className="App" >
   
      <Navbar user={user} setUser={setUser} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Routes>
        
        <Route path='/home' element={<Experience experiences={displayedExperience} />} />
        <Route path='/favorites' element={<Favorite />} />
        <Route path='/ratings' element={<Rating />} />
        <Route path='/hotels' element={<Hotel />} />
        <Route path='/contactform' element={<ContactForm />} />
      </Routes>
      {/* <div class="col-12">
    <label for="date" class="col-sm-1 col-form-label">Date</label>
    <div class="input-group date" id="datepicker">
        <input type="text" class="form-control">
        <span class="input-group-append">
        <span class="input-group-text bg-white d-block">
        <i class="fa fa-calendar"></i>
        </span>
        </span>
        </input>
    </div>
</div>     */}

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

