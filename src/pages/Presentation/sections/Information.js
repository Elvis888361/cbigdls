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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Get Started
                    <br />
                    with CBIGDL LIMITED
                  </>
                }
                description="CBIGDL Limited is a company that specializes in creating ERPNext solutions. With expertise in ERP implementation and customization, CBIGDL Limited focuses on delivering comprehensive ERP solutions based on the powerful ERPNext platform."
              />
              <RotatingCardBack
                image={bgBack}
                title="Read More"
                description="CBIGDL Limited understands the unique business requirements of its clients and tailors ERPNext to meet their specific needs. The company's team of experienced professionals collaborates closely with clients to analyze their business processes, identify areas for improvement, and design and implement ERP solutions that streamline operations and drive efficiency."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="About Us"
                  description="Built by developers for developers. Check the foundation and you will find
                    everything inside our about section."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="CEO"
                  description="Get Connected with the CEO's"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Services"
                  description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Contact Us"
                  description="Reach to us you will never want to leave.contact numbers"
                />
                <i className="fa fa-phone" aria-hidden="true">+254790296707</i>
                <i className="fa fa-phone" aria-hidden="true">+254796456810</i>
                <p>Chat with us</p>
                <a
                  href="https://wa.me/245793018396"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-whatsapp whatsapp-icon">+254793018396</i>
                </a>
                <a
                  href="https://wa.me/245757778819"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-whatsapp whatsapp-icon">+254757778819</i>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
