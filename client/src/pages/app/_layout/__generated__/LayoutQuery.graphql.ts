/**
 * @generated SignedSource<<f9e329b38f7cf1e2af57e1b86d23bd3e>>
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
    readonly profile: {
      readonly profileImage: string | null;
    };
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
  "concreteType": "UserProfile",
  "kind": "LinkedField",
  "name": "profile",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "profileImage",
      "storageKey": null
    }
  ],
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
    "cacheID": "39848490fa8ab6d80d94e81ceb878642",
    "id": null,
    "metadata": {},
    "name": "LayoutQuery",
    "operationKind": "query",
    "text": "query LayoutQuery {\n  me {\n    profile {\n      profileImage\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0e32cd717abb22f6cd52256de684b559";

export default node;
