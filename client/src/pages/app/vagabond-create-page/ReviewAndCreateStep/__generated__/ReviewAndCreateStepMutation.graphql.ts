/**
 * @generated SignedSource<<6d3995fc23b56c1ca489a2532f9a93f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VagabondCreateInput = {
  background_home: string;
  background_leftBehind: string;
  background_vagabond: string;
  charm: number;
  class: string;
  classMoves: ReadonlyArray<string>;
  connections?: ReadonlyArray<VagabondCreateConnectionCreateInput> | null;
  cunning: number;
  demeanor: string;
  details: string;
  drives: ReadonlyArray<string>;
  finesse: number;
  luck: number;
  might: number;
  name: string;
  nature: string;
  roguishFeats: ReadonlyArray<string>;
  species: string;
  value: number;
  weaponSkill: string;
};
export type VagabondCreateConnectionCreateInput = {
  notes: string;
  to: string;
  type: string;
};
export type ReviewAndCreateStepMutation$variables = {
  connections: ReadonlyArray<string>;
  input: VagabondCreateInput;
};
export type ReviewAndCreateStepMutation$data = {
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
export type ReviewAndCreateStepMutation = {
  response: ReviewAndCreateStepMutation$data;
  variables: ReviewAndCreateStepMutation$variables;
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
},
v5 = {
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
    "name": "ReviewAndCreateStepMutation",
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
    "name": "ReviewAndCreateStepMutation",
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
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "VagabondClass",
                        "kind": "LinkedField",
                        "name": "class",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "availablePoints",
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
    "cacheID": "117f14548804638b7476a34292212fba",
    "id": null,
    "metadata": {},
    "name": "ReviewAndCreateStepMutation",
    "operationKind": "mutation",
    "text": "mutation ReviewAndCreateStepMutation(\n  $input: VagabondCreateInput!\n) {\n  vagabondCreate(input: $input) {\n    __typename\n    ... on Error {\n      message\n    }\n    ... on MutationVagabondCreateSuccess {\n      data {\n        vagabond {\n          name\n          ...VagabondListItem_vagabond\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment UpdateVagabondStatsDialog_vagabond on Vagabond {\n  id\n  charm\n  cunning\n  finesse\n  luck\n  might\n  availablePoints\n}\n\nfragment VagabondListItem_vagabond on Vagabond {\n  id\n  name\n  class {\n    name\n    id\n  }\n  availablePoints\n  ...UpdateVagabondStatsDialog_vagabond\n}\n"
  }
};
})();

(node as any).hash = "aed02a19b93861d043a3058cd32d771e";

export default node;
