import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Our Mission</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            TekNative is a non-profit committed to teaching native and
            indigenous peoples technical skills to fill talent gaps in the space
            of Software Engineering and test automation. As the digital age
            continues a tech boom Native American unemployment hovers around
            26.3 percent. Through intensive, real-world exercises, support, and
            mentorship our aim is to build marketable skills that employers are
            seeking. No matter if you’re unemployed, looking for a higher paying
            job, or new to coding we are here to help you on your journey!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Our Values</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            TekNative was founded with the vision that everyone deserves a
            chance to succeed. Many Native Americans don’t have access or
            support in the realm of STEM education or the awareness of services
            that do exist. Software Engineering and test automation is a rapidly
            growing field, with many jobs moving to remote/hybrid remote roles
            opening the door for potential job seekers from all walks of life.
            TekNative looks to bridge the gap by teaching Native American
            candidates the best practices in test automation while providing
            mentorship in professional services to get candidates hired.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Acceptence Criteria</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To be eligible for our programs the candidate MUST:
            <ul>
              <li>Be over the age of 18</li>
              <li>Be a member of a federally recognized tribe</li>
              <li>Have consistent internet access</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Our Programs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Currently, we are only running the QA Pathways Program. Check back
            later for more program details!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>To Our Donors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To our wonderful donors, thank you so much for making an investment
            in the future of our candidates and making a real difference in
            their lives.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
