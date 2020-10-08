import React from "react";
import Header from "../components/UI/Header/Header";
import Footer from "../components/UI/Footer/Footer";
import RestaurentCard from "../components/Restaurent/RestaurentCard/RestaurentCard";
import SearchBar from "../components/UI/Search/SearchBar";
import Category from "../components/UI/Categories/Categories";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Nearby from "../components/UI/Nearby/Nearby";
import { createMuiTheme } from '@material-ui/core/styles';

import data from "../data/recipe.json"

class Order extends React.Component {
  render() {
    console.log(data)
    const {categories, recipes} = data;
    const theme = createMuiTheme();
    
    return (
      <React.Fragment>
      {/* <CssBaseline /> */}
      <Header/>
      <main>
        {/* section 1 */}
        <div className={"classes.heroContent"} style={{marginTop:'123px'}}>
          <Category data={categories}/>
          <SearchBar />
        </div>
        <Container className={"classes.cardGrid"} maxWidth="md" style={{paddingTop: theme.spacing(4), paddingBottom: theme.spacing(8),}}>
          {/* End Section 1 */}
          <Nearby data={recipes.length}/>
          <Grid container spacing={4} justify="center">
            <RestaurentCard data={recipes}/>
          </Grid>
        </Container>
      </main>
      {/* Footer : Bottom Navigation */}
      <footer className={"classes.footer"}>
        <Footer />
      </footer>
      {/* End footer */}
    </React.Fragment>
    );
  }
}

export default Order;
