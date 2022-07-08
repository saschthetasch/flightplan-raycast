import { Detail } from "@raycast/api";

export default function Description() {

  const content = `
  **Flightplan Extension** from UFOstart
  
  Welcome to the UFOstart Flighplan developer hub. You'll find comprehensive guides and documentation to help you start working with UFOstart Flighplan as quickly as possible, as well as support if you get stuck. Let's jump right in!

  API Documentation: [https://handbook.ufostart.com/](https://handbook.ufostart.com/)
  `
  return <Detail 
    markdown={content} />;
}