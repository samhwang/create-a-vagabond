/**
 * @generated SignedSource<<bdd05108c663dc81cd8585a16566ad70>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type profilePageQuery$variables = {};
export type profilePageQuery$data = {
  readonly me: {
    readonly email: string;
    readonly id: string;
  };
};
export type profilePageQuery = {
  response: profilePageQuery$data;
  variables: profilePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "me",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "profilePageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "profilePageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "cef2787d323dfaba43fa53196a133e7b",
    "id": null,
    "metadata": {},
    "name": "profilePageQuery",
    "operationKind": "query",
    "text": "query profilePageQuery {\n  me {\n    id\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "3426288e32297bc7b3b5cd8d20454e9a";

export default node;
