/**
 * @generated SignedSource<<e85ee73a911f78a459a205ce713efe4b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VagabondCreateInput = {
  charm: number;
  class: string;
  cunning: number;
  drives: ReadonlyArray<string>;
  finesse: number;
  luck: number;
  might: number;
  name: string;
  nature: string;
  roguishFeats: ReadonlyArray<string>;
  weaponSkill: string;
};
export type CreateVagabondDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: VagabondCreateInput;
};
export type CreateVagabondDialogMutation$data = {
  readonly vagabondCreate: {
    readonly __typename: "Error";
    readonly message: string;
  } | {
    readonly __typename: "MutationVagabondCreateSuccess";
    readonly data: {
      readonly vagabond: {
        readonly name: string;
        readonly " $fragmentSpreads": FragmentRefs<"VagabondListItem_vagabond">;
      };
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type CreateVagabondDialogMutation = {
  response: CreateVagabondDialogMutation$data;
  variables: CreateVagabondDialogMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    }
  ],
  "type": "Error",
  "abstractKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateVagabondDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "vagabondCreate",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "VagabondCreatePayload",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Vagabond",
                    "kind": "LinkedField",
                    "name": "vagabond",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "VagabondListItem_vagabond"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationVagabondCreateSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateVagabondDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "vagabondCreate",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "VagabondCreatePayload",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Vagabond",
                    "kind": "LinkedField",
                    "name": "vagabond",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
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
                        "name": "charm",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cunning",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "finesse",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "luck",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "might",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "availablePoints",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "filters": null,
                    "handle": "appendNode",
                    "key": "",
                    "kind": "LinkedHandle",
                    "name": "vagabond",
                    "handleArgs": [
                      {
                        "kind": "Variable",
                        "name": "connections",
                        "variableName": "connections"
                      },
                      {
                        "kind": "Literal",
                        "name": "edgeTypeName",
                        "value": "UserVagabondConnectionEdge"
                      }
                    ]
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationVagabondCreateSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3320c25da457c92549f1f0cb85669994",
    "id": null,
    "metadata": {},
    "name": "CreateVagabondDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateVagabondDialogMutation(\n  $input: VagabondCreateInput!\n) {\n  vagabondCreate(input: $input) {\n    __typename\n    ... on Error {\n      message\n    }\n    ... on MutationVagabondCreateSuccess {\n      data {\n        vagabond {\n          name\n          ...VagabondListItem_vagabond\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment UpdateVagabondStatsDialog_vagabond on Vagabond {\n  id\n  charm\n  cunning\n  finesse\n  luck\n  might\n  availablePoints\n}\n\nfragment VagabondListItem_vagabond on Vagabond {\n  id\n  name\n  charm\n  cunning\n  finesse\n  luck\n  might\n  availablePoints\n  ...UpdateVagabondStatsDialog_vagabond\n}\n"
  }
};
})();

(node as any).hash = "c7058a82ba29ec1fe9c06dcabdd24010";

export default node;
