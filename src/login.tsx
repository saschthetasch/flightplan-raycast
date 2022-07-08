import { Detail, Form } from "@raycast/api";
import { useState } from "react";

export default function Login() {
  const [apiKey, setApiKey] = useState<string | undefined>();

  return (
    <Form>
      <Form.Description
        title="API key"
        text="All endpoints are secured via API key authentication. During onboarding, you will receive at least 2 distinct keys:

        - read-only key: e.g. useful for dashboard applications
        - full read-/write-permissions
        "
      />
      <Form.TextField
        id="apiField"
        title="API Key"
        placeholder="Enter your API key"
        value={apiKey} 
        onChange={setApiKey}
      />
    </Form>
  )
}