import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DescriptionIcon from "@mui/icons-material/Description";
import ConstructionIcon from "@mui/icons-material/Construction";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Example from "../pages/Example1";

export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [openManual, setOpenManual] = React.useState(false);
  const [openSpec, setOpenSpec] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };
  const handleClickManual = () => {
    setOpenManual(!openManual);
  };
  const handleClickSpec = () => {
    setOpenSpec(!openSpec);
  };

  2;

  return (
    <List
      sx={{ width: "100%", maxWidth: 260, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Документы" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <TextField
            sx={{ pl: 4 }}
            id="standard-multiline-flexible"
            label="поиск"
            multiline
            maxRows={4}
            variant="standard"
          />
          {/* не двигается поиск!!!!!!!! */}
          <ListItemButton
            href="https://newxboxone.ru/"
            target="blank"
            sx={{ pl: 4 }}
          >
            {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}

            <ListItemText primary="первый документ" />
          </ListItemButton>

          <ListItemButton
            href="https://www.sports.ru/football/"
            target="blank"
            sx={{ pl: 4 }}
          >
            <ListItemText primary="второй документ" />
          </ListItemButton>
          <ListItemButton
            href="https://www.playstation.com/en-us/ps5/"
            target="blank"
            sx={{ pl: 4 }}
          >
            <ListItemText primary="третий документ" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick2}>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Инструкции какие то" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <TextField
            sx={{ pl: 4 }}
            id="standard-multiline-flexible"
            label="поиск"
            multiline
            maxRows={4}
            variant="standard"
          />
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Инструкция первая" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Инструкция вторая" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Инструкция третья" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickManual}>
        <ListItemIcon>
          <ConstructionIcon />
        </ListItemIcon>
        <ListItemText primary="Инструменты" />
        {openManual ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openManual} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="инструмент1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="инструмент2" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="инструмент3" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickSpec}>
        <ListItemIcon>
          <ReceiptLongIcon />
        </ListItemIcon>
        <ListItemText primary="Специальное что то" />
        {openSpec ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSpec} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Специальное1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Специальное2" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Специальное3" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick3}>
        <ListItemIcon>
          <AutoStoriesIcon />
        </ListItemIcon>
        <ListItemText primary="Книжки" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Книга1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Книга2" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Книга3" />
          </ListItemButton>
        </List>
      </Collapse>

      <Link to="/example1" style={{ textDecoration: "none", color: "inherit" }}>
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Кнопка меню1" />
        </ListItemButton>
      </Link>
      {/* <Link to="/example2" style={{ textDecoration: "none", color: "inherit" }}>
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Кнопка меню2" />
        </ListItemButton>
      </Link>
      <Link to="/example3" style={{ textDecoration: "none", color: "inherit" }}>
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Кнопка меню3" />
        </ListItemButton>
      </Link> */}
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Default" />
      </ListItemButton>
      {/* <ListItemButton onClick={handleClick4}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Список1" />
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>

            <ListItemText primary="ссылка1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="ссылка2" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="ссылка3" />
          </ListItemButton>
        </List>
      </Collapse> */}

      {/* <ListItemButton onClick={handleClick5}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Список2" />
        {open5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open5} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="ссылка4" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="ссылка5" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="ссылка6" />
          </ListItemButton>
        </List>
      </Collapse> */}
      <Divider />
      <ListItemButton>
        <a href="#" target="blank">
          <ListItemText primary="Внешний ресурс" />
        </a>
      </ListItemButton>
    </List>
  );
}
