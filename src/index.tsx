import { ActionPanel, Detail, List, Action } from "@raycast/api";
import Description from "./description";
import Login from "./login";

export default function Command() {
  return (
    <List>

      <List.Item
        icon="list-icon.png"
        title="Description"
        actions={
          <ActionPanel>
            <Action.Push title="Show Details" target={<Description />} />
          </ActionPanel>
        }
      />

      <List.Item
        icon="list-icon.png"
        title="Login"
        actions={
          <ActionPanel>
            <Action.Push title="Show Details" target={<Login />} />
          </ActionPanel>
        }
      />
    </List>
  );
}
