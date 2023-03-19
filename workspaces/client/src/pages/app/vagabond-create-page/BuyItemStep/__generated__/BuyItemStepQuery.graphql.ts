/**
 * @generated SignedSource<<843828b96edda3e750b3d0da7583591c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BuyItemStepQuery$variables = {
  classId: string;
};
export type BuyItemStepQuery$data = {
  readonly node: {
    readonly name?: string;
    readonly startingValue?: number;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"AvailableEquipmentList_query">;
};
export type BuyItemStepQuery = {
  response: BuyItemStepQuery$data;
  variables: BuyItemStepQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "classId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "classId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startingValue",
      "storageKey": null
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BuyItemStepQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AvailableEquipmentList_query"
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BuyItemStepQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "QueryEquipmentConnection",
        "kind": "LinkedField",
        "name": "equipmentConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QueryEquipmentConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Equipment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "load",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "value",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "maxWear",
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "equipmentConnection(first:10)"
      },
      {
        "alias": null,
        "args": (v4/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "AvailableEquipmentList_query_equipmentConnection",
        "kind": "LinkedHandle",
        "name": "equipmentConnection"
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a732a9913b26de4ab64776ac3fe99a53",
    "id": null,
    "metadata": {},
    "name": "BuyItemStepQuery",
    "operationKind": "query",
    "text": "query BuyItemStepQuery(\n  $classId: ID!\n) {\n  ...AvailableEquipmentList_query\n  node(id: $classId) {\n    __typename\n    ... on VagabondClass {\n      name\n      startingValue\n    }\n    id\n  }\n}\n\nfragment AvailableEquipmentListItem_equipment on Equipment {\n  id\n  name\n  load\n  value\n  maxWear\n}\n\nfragment AvailableEquipmentList_query on Query {\n  equipmentConnection(first: 10) {\n    edges {\n      node {\n        id\n        ...AvailableEquipmentListItem_equipment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "21a27ac80b128a31c4d8ef4f3d052eee";

export default node;
