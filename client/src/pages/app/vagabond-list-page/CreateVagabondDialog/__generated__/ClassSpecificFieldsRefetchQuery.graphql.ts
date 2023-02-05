/**
 * @generated SignedSource<<18a7783ce398857a9f4e32e46cb00b53>>
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
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
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
            "kind": "Literal",
            "name": "first",
            "value": 50
          }
        ],
        "concreteType": "QueryRoguishFeatConnection",
        "kind": "LinkedField",
        "name": "roguishFeatConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QueryRoguishFeatConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RoguishFeat",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "roguishFeatConnection(first:50)"
      },
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
          (v1/*: any*/),
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
                "concreteType": "VagabondClassStartingRoguishFeatsConnection",
                "kind": "LinkedField",
                "name": "startingRoguishFeats",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VagabondClassStartingRoguishFeatsConnectionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "RoguishFeat",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
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
    "cacheID": "732780a08bd2a1b032b12b00159e06d0",
    "id": null,
    "metadata": {},
    "name": "ClassSpecificFieldsRefetchQuery",
    "operationKind": "query",
    "text": "query ClassSpecificFieldsRefetchQuery(\n  $selectedClassId: ID = \"\"\n) {\n  ...ClassSpecificFields_query_2Y8a5A\n}\n\nfragment ClassSpecificFields_query_2Y8a5A on Query {\n  ...RoguishFeatSelect_query\n  node(id: $selectedClassId) {\n    __typename\n    ... on VagabondClass {\n      startingCharm\n      startingCunning\n      startingFinesse\n      startingLuck\n      startingMight\n      ...ClassSpecificFields_useDefaultValue_class\n      ...useStartingPointLeft_class\n      ...NatureSelect_class\n      ...DrivesSelect_class\n      ...RoguishFeatSelect_class\n    }\n    id\n  }\n}\n\nfragment ClassSpecificFields_useDefaultValue_class on VagabondClass {\n  id\n  startingRoguishFeats {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n  startingCharm\n  startingCunning\n  startingFinesse\n  startingLuck\n  startingMight\n}\n\nfragment DrivesSelect_class on VagabondClass {\n  drives\n}\n\nfragment NatureSelect_class on VagabondClass {\n  natures\n}\n\nfragment RoguishFeatSelect_class on VagabondClass {\n  startingRoguishFeats {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n\nfragment RoguishFeatSelect_query on Query {\n  roguishFeatConnection(first: 50) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment useStartingPointLeft_class on VagabondClass {\n  startingCharm\n  startingCunning\n  startingFinesse\n  startingLuck\n  startingMight\n}\n"
  }
};
})();

(node as any).hash = "7a86d3945e3ad2c574c23554c3929535";

export default node;
