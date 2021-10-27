import { countryString } from "./countryString";
import { permissionString } from "./permissionString";
import { regionString } from "./regionString";
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
permissionGrants{${permissionString}}
permissions{${permissionString}}
region{${regionString}}
country{${countryString}}
organization{id
    name
    type
}

`;
// role{${roleString}}
