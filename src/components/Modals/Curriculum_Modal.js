import * as React from "react"
import Button from "components/CustomButtons/Button.jsx"
import Dialog from "@mui/material/Dialog"
import ListItemText from "@mui/material/ListItemText"
import ListItem from "@mui/material/ListItem"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import CloseIcon from "@material-ui/icons/Close"
import Slide from "@mui/material/Slide"
import SchoolIcon from "@material-ui/icons/School"
import OppositeContentTimeline from "./Curriculum_Modal_Content"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function Curriculum_Modal() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button color="transparent" onClick={handleClickOpen}>
        <SchoolIcon></SchoolIcon> About The Program
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar style={{ color: "purple", background: "white" }}>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Syllabus QA Pathway Program
            </Typography>
            <Button color="primary" onClick={handleClose}>
              <CloseIcon></CloseIcon>
            </Button>
          </Toolbar>
        </AppBar>
        <OppositeContentTimeline />
      </Dialog>
    </div>
  )
}
