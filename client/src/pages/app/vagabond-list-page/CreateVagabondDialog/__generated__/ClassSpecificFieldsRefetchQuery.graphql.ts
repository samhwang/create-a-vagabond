/**
 * @generated SignedSource<<daf47acd682ecfbeab21aba2d5ed07ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClassSpecificFieldsRefetchQuery$variables = {
  selectedClassId?: string | null;
};
export type ClassSpecificFieldsRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ClassSpecificFields_query">;
};
export type ClassSpecificFieldsRefetchQuery = {
  response: ClassSpecificFieldsRefetchQuery$data;
  variables: ClassSpecificFieldsRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "selectedClassId"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClassSpecificFieldsRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "selectedClassId",
            "variableName": "selectedClassId"
          }
        ],
        "kind": "FragmentSpread",
        "name": "ClassSpecificFields_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClassSpecificFieldsRefetchQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "natures",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "drives",
                "storageKey": null
              }
            ],
            "type": "VagabondClass",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a3209e91e8e05dcc8655634968ce9461",
    "id": null,
    "metadata": {},
    "name": "ClassSpecificFieldsRefetchQuery",
    "operationKind": "query",
    "text": "query ClassSpecificFieldsRefetchQuery(\n  $selectedClassId: ID = \"\"\n) {\n  ...ClassSpecificFields_query_2Y8a5A\n}\n\nfragment ClassSpecificFields_query_2Y8a5A on Query {\n  node(id: $selectedClassId) {\n    __typename\n    ... on VagabondClass {\n      startingCharm\n      startingCunning\n      startingFinesse\n      startingLuck\n      startingMight\n      ...ClassSpecificFields_useDefaultValue_class\n      ...useStartingPointLeft_class\n      ...NatureSelect_class\n      ...DrivesSelect_class\n    }\n    id\n  }\n}\n\nfragment ClassSpecificFields_useDefaultValue_class on VagabondClass {\n  id\n  startingCharm\n  startingCunning\n  startingFinesse\n  startingLuck\n  startingMight\n}\n\nfragment DrivesSelect_class on VagabondClass {\n  drives\n}\n\nfragment NatureSelect_class on VagabondClass {\n  natures\n}\n\nfragment useStartingPointLeft_class on VagabondClass {\n  startingCharm\n  startingCunning\n  startingFinesse\n  startingLuck\n  startingMight\n}\n"
  }
};
})();

(node as any).hash = "9f1ed2ab0dc215d35cbc2ff6bae14ff4";

export default node;
