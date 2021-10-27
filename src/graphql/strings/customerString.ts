import { customerDetailsString } from "./customerDetailsString";
import { regionString } from "./regionString";

export const customerString = `
id
active
phone
email
fullName
regionId
associationId
organizationId
requiresProfileUpdate
region{
    ${regionString}
}
details{
    ${customerDetailsString}
}           
`;
