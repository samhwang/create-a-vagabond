/**
 * @generated SignedSource<<01befa85a516098becc8875da0188afd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StatsMovesStepQuery$variables = {
  id: string;
};
export type StatsMovesStepQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"ClassMovesField_class" | "RoguishFeatsField_class" | "StatsFields_class" | "WeaponSkillField_class">;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"RoguishFeatsField_query">;
};
export type StatsMovesStepQuery = {
  response: StatsMovesStepQuery$data;
  variables: StatsMovesStepQuery$variables;
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  (v3/*: any*/),
  (v4/*: any*/),
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
    "name": "StatsMovesStepQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RoguishFeatsField_query"
      },
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
                "name": "StatsFields_class"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RoguishFeatsField_class"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ClassMovesField_class"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "WeaponSkillField_class"
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
    "name": "StatsMovesStepQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
                "selections": (v5/*: any*/),
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
              (v4/*: any*/),
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "VagabondClassRoguishFeatConnection",
                "kind": "LinkedField",
                "name": "roguishFeatConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VagabondClassRoguishFeatConnectionEdge",
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
                          (v3/*: any*/)
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
                "args": (v2/*: any*/),
                "concreteType": "VagabondClassClassMoveConnection",
                "kind": "LinkedField",
                "name": "classMoveConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VagabondClassClassMoveConnectionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ClassMove",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": (v5/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "classMoveConnection(first:50)"
              },
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "VagabondClassWeaponSkillConnection",
                "kind": "LinkedField",
                "name": "weaponSkillConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VagabondClassWeaponSkillConnectionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "WeaponSkill",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": (v5/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "weaponSkillConnection(first:50)"
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
    "cacheID": "4b3a2818c25dff89ddadfb7453e95627",
    "id": null,
    "metadata": {},
    "name": "StatsMovesStepQuery",
    "operationKind": "query",
    "text": "query StatsMovesStepQuery(\n  $id: ID!\n) {\n  ...RoguishFeatsField_query\n  node(id: $id) {\n    __typename\n    ... on VagabondClass {\n      ...StatsFields_class\n      ...RoguishFeatsField_class\n      ...ClassMovesField_class\n      ...WeaponSkillField_class\n    }\n    id\n  }\n}\n\nfragment ClassMovesField_class on VagabondClass {\n  name\n  classMoveConnection(first: 50) {\n    edges {\n      node {\n        id\n        name\n        description\n      }\n    }\n  }\n}\n\nfragment RoguishFeatsField_class on VagabondClass {\n  name\n  ...RoguishFeatsField_useSyncFeats_class\n}\n\nfragment RoguishFeatsField_query on Query {\n  roguishFeatConnection(first: 50) {\n    edges {\n      node {\n        id\n        name\n        description\n      }\n    }\n  }\n}\n\nfragment RoguishFeatsField_useSyncFeats_class on VagabondClass {\n  roguishFeatConnection(first: 50) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n\nfragment StatsFields_class on VagabondClass {\n  startingCharm\n  startingCunning\n  startingFinesse\n  startingLuck\n  startingMight\n  ...useStartingPointLeft_class\n  ...StatsFields_useSyncStats_class\n}\n\nfragment StatsFields_useSyncStats_class on VagabondClass {\n  startingCharm\n  startingCunning\n  startingFinesse\n  startingLuck\n  startingMight\n}\n\nfragment WeaponSkillField_class on VagabondClass {\n  weaponSkillConnection(first: 50) {\n    edges {\n      node {\n        id\n        name\n        description\n      }\n    }\n  }\n}\n\nfragment useStartingPointLeft_class on VagabondClass {\n  startingCharm\n  startingCunning\n  startingFinesse\n  startingLuck\n  startingMight\n}\n"
  }
};
})();

(node as any).hash = "c825ed2059b547e379f53491a98e664b";

export default node;
