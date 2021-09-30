// import * as React from "react"
// import Box from "@mui/material/Box"
// import Button from "components/CustomButtons/Button.jsx"
// import Typography from "@mui/material/Typography"
// import Modal from "@mui/material/Modal"
// import GroupIcon from "@material-ui/icons/Group"

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// }

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false)
//   const handleOpen = () => setOpen(true)
//   const handleClose = () => setOpen(false)

//   return (
//     <div>
//       <Button color="transparent" onClick={handleOpen}>
//         <GroupIcon></GroupIcon> About Us
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}></Box>
//       </Modal>
//     </div>
//   )
// }

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
import GroupIcon from "@material-ui/icons/Group"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog() {
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
        <GroupIcon></GroupIcon> About Us
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
              About TekNative
            </Typography>
            <Button color="primary" onClick={handleClose}>
              <CloseIcon></CloseIcon>
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  )
}
