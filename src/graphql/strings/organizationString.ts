import { userString } from "./userString";

export const organizationString = `
id
name
type
users{
    ${userString}
}               
`;
