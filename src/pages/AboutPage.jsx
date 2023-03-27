import { Container, Grid } from "@mui/material";
import PageHeader from "../components/PageHeader";

const AboutPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <PageHeader
          title="About page"
          subtitle="On this page you can find explanations about using the application"
        />

        <Grid container spacing={2}>
          <Grid item xs={12} md={8} alignSelf="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quos
            harum debitis unde aliquid. Voluptatum commodi id voluptatibus sed
            eos quibusdam voluptates ratione, iusto dolor qui, rem consectetur
            aut nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolorem odit consectetur ex provident quasi earum fugit mollitia
            consequuntur perspiciatis numquam quod, nemo praesentium cumque
            cupiditate accusamus possimus quis eveniet quae! Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Facere impedit veritatis
            atque accusamus! Quidem et eligendi minus eveniet. Nulla, eaque est
            officia explicabo voluptatum excepturi animi at velit veniam
            delectus!
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
            }}
          >
            <img src="/assets/images/card.jpg" alt="card" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutPage;
