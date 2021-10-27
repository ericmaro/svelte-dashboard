import { apolloClient } from "@/graphql/api/client";
import { getAssociationQuery } from "@/graphql/queries/associationsQuery";
import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { AssociationFilter } from "@/views/pages/associations/types/associationFilter";
import { AssociationConnection } from "@/views/pages/associations/types/associationConnection";
import { CreateOneAssociationInput } from "@/views/pages/associations/types/createOneAssociationInput";
import { Association } from "@/views/pages/associations/types/association";
import {
  createOneAssociationMutation,
  updateOneAssociationMutation,
  sendSmsToAssociationMutation,
} from "@/graphql/mutations/associationMutation";
import { UpdateOneAssociationInput } from "@/views/pages/associations/types/updateOneAssociationInput";
import { SendSmsAssociationDto } from "@/views/pages/associations/types/SendSmsAssociationDto";

export const createOneAssociationService = async (
  data: CreateOneAssociationInput
) => {
  try {
    const results = await apolloClient.mutate({
      mutation: createOneAssociationMutation,
      variables: {
        input: data,
      },
    });
    const res: Association = results.data.createOneAssociation;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const sendSmsToAssociationService = async (
  input: SendSmsAssociationDto
) => {
  try {
    await apolloClient.mutate({
      mutation: sendSmsToAssociationMutation,
      variables: {
        input: input,
      },
    });
    return true;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateOneAssociationService = async (
  data: UpdateOneAssociationInput
) => {
  try {
    const results = await apolloClient.mutate({
      mutation: updateOneAssociationMutation,
      variables: {
        input: data,
      },
    });
    const res: Association = results.data.updateOneAssociation;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const getAssociationsService = async (params?: {
  paging?: CursorPaging;
  filter?: AssociationFilter;
  sorting?: Sort[];
}) => {
  try {
    const results = await apolloClient.query({
      query: getAssociationQuery,
      variables: {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    });
    console.log(results);
    const res: AssociationConnection = results.data.associations;
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
