import { countryString } from "./countryString";
import { permissionString } from "./permissionString";
// import { roleString } from "./roleString";

export const userString = `
firstName
middleName
lastName
gender
dateOfBirth
email
phone
address
id
roleId
active
residenceID
workID
countryId
regionId
createdAt
updatedAt
deletedAt
permissions{${permissionString}}
country{${countryString}}
`;
// role{${roleString}}
