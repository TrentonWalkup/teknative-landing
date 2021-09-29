import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import CodeIcon from '@material-ui/icons/Code';
import BugReportIcon from '@material-ui/icons/BugReport';
import WorkIcon from '@material-ui/icons/Work';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>What We Do</h2>
            <h5 className={classes.description}>

            TekNative.org is committed to teaching the fundamentals of programming, test automation, and quality engineering to
              Native and Indigenous peoples. 
              
              We train and connect Native Americans regardless of skill level or tribe to broaden their 
              career outlook, teach marketable skills, and increase employment opportunities. 

              With a deep focus on core quality engineering principles, over the course of 16 weeks, 100% remote, we do this at ZERO cost to each candidate.

            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Industry Standard Technologies"
                description="Dive into web development basics, test automation frameworks in javascript and python, and version control."
                icon={CodeIcon}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Quality Engineering Best Practices"
                description="Learn the best in Quality Engineering methodology, levels of testing programming applications, and how to design, write, and catalog test documentation."
                icon={BugReportIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Professional Development"
                description="Through resume review, social media presence, and real-world connections we focus on building a personal brand to increase employment opportunities."
                icon={WorkIcon}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
