import React from "react";
import Section from "../Section";
import { List, ListItem, ListItemText } from "@material-ui/core";

export default ({ title, listItems }) => {
  return (
    <Section title={title}>
      <List dense={true}>
        {listItems.map(item => {
          return (
            <ListItem>
              <ListItemText primary={item} />
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
};
