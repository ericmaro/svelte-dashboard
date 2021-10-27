import { apolloClient } from "@/graphql/api/client";
import { getOrganizationQuery } from "@/graphql/queries/organizationsQuery";
import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { OrganizationFilter } from "@/views/pages/organizations/types/organizationFilter";
import { OrganizationConnection } from "@/views/pages/organizations/types/organizationConnection";
import { CreateOneOrganizationInput } from "@/views/pages/organizations/types/createOneOrganizationInput";
import { Organization } from "@/views/pages/organizations/types/organization";
import {
  createOneOrganizationMutation,
  updateOneOrganizationMutation,
} from "@/graphql/mutations/organizationMutation";
import { UpdateOneOrganizationInput } from "@/views/pages/organizations/types/updateOneOrganizationInput";

export const createOneOrganizationService = async (
  data: CreateOneOrganizationInput
) => {
  try {
    const results = await apolloClient.mutate({
      mutation: createOneOrganizationMutation,
      variables: {
        input: data,
      },
    });
    const res: Organization = results.data.createOneOrganization;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateOneOrganizationService = async (
  data: UpdateOneOrganizationInput
) => {
  try {
    const results = await apolloClient.mutate({
      mutation: updateOneOrganizationMutation,
      variables: {
        input: data,
      },
    });
    const res: Organization = results.data.updateOneOrganization;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const getOrganizationsService = async (params?: {
  paging?: CursorPaging;
  filter?: OrganizationFilter;
  sorting?: Sort[];
}) => {
  try {
    const results = await apolloClient.query({
      query: getOrganizationQuery,
      variables: {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    });
    console.log(results);
    const res: OrganizationConnection = results.data.organizations;
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
