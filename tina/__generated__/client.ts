import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'b6ba928d88971e082d545d1429c8652417dfeac0', queries,  });
export default client;
  