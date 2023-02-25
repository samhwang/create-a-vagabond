/**
 * @generated SignedSource<<c53a3d577eccdc2ed838341c602f5285>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type LayoutQuery$variables = {};
export type LayoutQuery$data = {
  readonly me: {
    readonly profileImage: string;
  };
};
export type LayoutQuery = {
  response: LayoutQuery$data;
  variables: LayoutQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "profileImage",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LayoutQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LayoutQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "90648bb9e590a6cce059088f9840bbab",
    "id": null,
    "metadata": {},
    "name": "LayoutQuery",
    "operationKind": "query",
    "text": "query LayoutQuery {\n  me {\n    profileImage\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9fb6a1525b7f3f7a419bd635e11c72f1";

export default node;
