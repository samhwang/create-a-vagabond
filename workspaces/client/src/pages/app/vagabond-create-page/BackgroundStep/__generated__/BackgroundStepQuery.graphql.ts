/**
 * @generated SignedSource<<137a02f3781a365c135aa3c98bfea334>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BackgroundStepQuery$variables = {
  id: string;
};
export type BackgroundStepQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"DrivesSelect_class" | "NatureSelect_class">;
  } | null;
};
export type BackgroundStepQuery = {
  response: BackgroundStepQuery$data;
  variables: BackgroundStepQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "description",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BackgroundStepQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
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
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BackgroundStepQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "VagabondClassNatureConnection",
                "kind": "LinkedField",
                "name": "natureConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VagabondClassNatureConnectionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Nature",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": (v4/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "natureConnection(first:50)"
              },
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "VagabondClassDriveConnection",
                "kind": "LinkedField",
                "name": "driveConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VagabondClassDriveConnectionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Drive",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": (v4/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "driveConnection(first:50)"
              }
            ],
            "type": "VagabondClass",
            "abstractKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9501ecec981bf44fb7f4e2d083b7fdaf",
    "id": null,
    "metadata": {},
    "name": "BackgroundStepQuery",
    "operationKind": "query",
    "text": "query BackgroundStepQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on VagabondClass {\n      ...NatureSelect_class\n      ...DrivesSelect_class\n    }\n    id\n  }\n}\n\nfragment DrivesSelect_class on VagabondClass {\n  driveConnection(first: 50) {\n    edges {\n      node {\n        id\n        name\n        description\n      }\n    }\n  }\n}\n\nfragment NatureSelect_class on VagabondClass {\n  natureConnection(first: 50) {\n    edges {\n      node {\n        id\n        name\n        description\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "60a9dec4daf0f81387f3ded53ffee7e6";

export default node;
