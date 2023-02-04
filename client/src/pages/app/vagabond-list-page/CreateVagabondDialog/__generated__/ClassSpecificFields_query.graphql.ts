/**
 * @generated SignedSource<<b59c5dfdede8b441bc059c0bf9b75a48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClassSpecificFields_query$data = {
  readonly node: {
    readonly startingCharm?: number;
    readonly startingCunning?: number;
    readonly startingFinesse?: number;
    readonly startingLuck?: number;
    readonly startingMight?: number;
    readonly " $fragmentSpreads": FragmentRefs<"ClassSpecificFields_useDefaultValue_class" | "DrivesSelect_class" | "NatureSelect_class" | "useStartingPointLeft_class">;
  } | null;
  readonly " $fragmentType": "ClassSpecificFields_query";
};
export type ClassSpecificFields_query$key = {
  readonly " $data"?: ClassSpecificFields_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClassSpecificFields_query">;
};

import ClassSpecificFieldsRefetchQuery_graphql from './ClassSpecificFieldsRefetchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "selectedClassId"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": ClassSpecificFieldsRefetchQuery_graphql
    }
  },
  "name": "ClassSpecificFields_query",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "selectedClassId"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "startingCharm",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "startingCunning",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "startingFinesse",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "startingLuck",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "startingMight",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ClassSpecificFields_useDefaultValue_class"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "useStartingPointLeft_class"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "NatureSelect_class"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "DrivesSelect_class"
            }
          ],
          "type": "VagabondClass",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "9f1ed2ab0dc215d35cbc2ff6bae14ff4";

export default node;
