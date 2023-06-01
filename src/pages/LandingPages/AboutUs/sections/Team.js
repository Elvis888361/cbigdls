/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/one.jpg";
import team2 from "assets/images/two.jpg";
import team3 from "assets/images/three.JPG";
import team4 from "assets/images/four.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="James Nduhiu"
                position={{ color: "info", label: "CEO" }}
                description="The CEO of CBIGDL Limited is a visionary leader with a sharp business acumen, driving the company's growth and fostering a culture of innovation and excellence in the field of technology and data analytics."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="John Ndegi"
                position={{ color: "info", label: "Project Manager" }}
                description="The project manager of CBIGDL Limited is a highly organized and skilled professional responsible for overseeing project execution, coordinating team efforts, and ensuring timely delivery of high-quality results."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="George Kiirithio"
                position={{ color: "info", label: "Software Developer" }}
                description="A Software Developer at CBIGDL Limited is a highly skilled professional responsible for designing and implementing cutting-edge software solutions, leveraging their expertise in programming languages and frameworks to drive innovation and deliver high-quality products to clients."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Elvis Ndegwa"
                position={{ color: "info", label: "Software Developer" }}
                description="A Software Developer at CBIGDL Limited is a skilled professional who combines creativity and technical expertise to design and develop innovative software solutions that drive business growth. "
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
